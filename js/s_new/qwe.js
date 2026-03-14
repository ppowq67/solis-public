       // Initialize input section on page load
        // ===== SECURITY UTILITY =====
        // Helper to get CSRF token from meta tag or cookie
        window.getCSRFToken = function() {
            // Try meta tag first
            const metaToken = document.querySelector('meta[name="csrf-token"]');
            if (metaToken) return metaToken.getAttribute('content');
            
            // Fallback: extract from cookie (if your backend sets it there)
            const name = 'csrf_token=';
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(';');
            for (let cookie of cookieArray) {
                cookie = cookie.trim();
                if (cookie.indexOf(name) === 0) {
                    return cookie.substring(name.length);
                }
            }
            return null;
        };

        // Use credentials: 'include' for EVERY fetch (uses httpOnly cookies)
        // Never use localStorage for auth tokens
        window.secureHeaders = function() {
            return {
                'Content-Type': 'application/json',
                ...(window.getCSRFToken() && { 'X-CSRF-Token': window.getCSRFToken() })
            };
        };

        // ===== DEBOUNCE UTILITY =====
        // Prevent excessive API calls
        window.createDebounce = function(func, delay) {
            let timeoutId;
            return function(...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func(...args), delay);
            };
        };

        window.addEventListener('load', () => {
            const inputSection = document.querySelector('.input-section');
            const inputContainer = document.querySelector('.input-container');
            const currentIndex = parseInt(localStorage.getItem('sidebarActiveIndex') || '0');
            
            if (inputSection && inputContainer) {
                // Only show input section if on chat tab (index 0)
                if (currentIndex === 0) {
                    inputSection.classList.add('active');
                    inputContainer.classList.remove('hidden');
                    inputSection.style.cssText = 'display: flex !important; visibility: visible !important; opacity: 1 !important; pointer-events: all !important; z-index: 1000 !important;';
                } else {
                    // Hide for all other tabs
                    inputSection.classList.remove('active');
                    inputContainer.classList.add('hidden');
                    inputSection.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; z-index: -10000 !important;';
                }
            }
        });



        // Handle delete all clips - SECURE VERSION
        // NOTE: Server MUST validate that user owns clips and has permission to delete
        window.handleDeleteAllClips = async function() {
            const confirmed = confirm('⚠️ This will DELETE ALL your clips. This action cannot be undone.');
            if (!confirmed) return;

            const doubleConfirmed = confirm('🚨 FINAL WARNING: Permanently delete ALL stored clips?');
            if (!doubleConfirmed) return;

            try {
                if (!window.clipsStudio || !window.clipsStudio.libraryItems || window.clipsStudio.libraryItems.length === 0) {
                    window.clipsStudio?.showNotification('No clips to delete', 'info');
                    return;
                }

                const totalClips = window.clipsStudio.libraryItems.length;
                const clipIds = window.clipsStudio.libraryItems.map(clip => clip.id);
                let deletedCount = 0;

                console.log(`🗑️ Starting bulk delete of ${totalClips} clips`);

                // ===== OPTION 1: Bulk delete endpoint (preferred) =====
                // Better performance and atomic transaction on backend
                try {
                    const response = await fetch('/api/clips/bulk-delete', {
                        method: 'DELETE',
                        credentials: 'include', // ✅ Uses httpOnly cookie
                        headers: {
                            'Content-Type': 'application/json',
                            ...(window.getCSRFToken && { 'X-CSRF-Token': window.getCSRFToken() })
                        },
                        body: JSON.stringify({ clip_ids: clipIds })
                    });

                    if (!response.ok) {
                        // Server returned error - may be permission/plan limit issue
                        const errorData = await response.json().catch(() => ({}));
                        const safeMsg = window.getSafeErrorMessage(errorData);
                        console.error('Bulk delete failed:', response.status, errorData);
                        window.clipsStudio?.showNotification('Failed to delete clips: ' + safeMsg, 'error');
                        return;
                    }

                    const result = await response.json();
                    deletedCount = result.deleted_count || totalClips;
                    console.log(`✅ Deleted ${deletedCount} clips via bulk endpoint`);
                } catch (bulkError) {
                    console.warn('Bulk delete endpoint failed, falling back to individual deletes:', bulkError);
                    
                    // ===== OPTION 2: Individual deletes with rate limiting (fallback) =====
                    for (const clip of window.clipsStudio.libraryItems) {
                        try {
                            const response = await fetch(`/api/clips/${clip.id}`, {
                                method: 'DELETE',
                                credentials: 'include', // ✅ Use httpOnly cookie, not localStorage token
                                headers: {
                                    'Content-Type': 'application/json',
                                    ...(window.getCSRFToken && { 'X-CSRF-Token': window.getCSRFToken() })
                                }
                            });

                            if (response.ok) {
                                deletedCount++;
                            } else {
                                console.error(`Failed to delete clip ${clip.id}: ${response.status}`);
                            }

                            // Rate limiting: 100ms delay between requests to avoid DoS-ing own backend
                            await new Promise(resolve => setTimeout(resolve, 100));
                        } catch (error) {
                            console.error(`Exception deleting clip ${clip.id}:`, error);
                        }
                    }
                }

                // Clear local storage only after successful server deletion
                window.clipsStudio.libraryItems = [];
                window.clipsStudio.saveLibraryItems();
                window.clipsStudio.updateLibraryView();

                // Update UI
                updateStorageBadgeDisplay();
                window.clipsStudio?.showNotification(`✅ Deleted ${deletedCount}/${totalClips} clips`, 'success');
                console.log(`✅ Successfully deleted ${deletedCount} clips`);
                
                // Refresh page after deletion to ensure UI is fully updated
                setTimeout(() => {
                    window.location.reload();
                }, 800);
            } catch (error) {
                console.error('Error deleting all clips:', error);
                window.clipsStudio?.showNotification('Error: Failed to delete clips. Please try again.', 'error');
            }
        };
    
    // Debounced storage badge update to prevent excessive API calls
    window.updateStorageBadgeDisplay = (function() {
        let originalFunc = async function() {
            try {
                console.log('🔄 [Badge Update] Fetching fresh subscription from backend...');
                const response = await fetch('/api/auth/subscription', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch subscription: ${response.status}`);
                }
                
                const data = await response.json();
                if (!data || typeof data !== 'object') {
                    throw new Error('Invalid response structure');
                }
                
                const subscription = data.subscription;
                if (!subscription || typeof subscription !== 'object') {
                    throw new Error('Missing subscription in response');
                }
                
                console.log('✅ [Badge Update] Backend response (validated):', subscription);
                
                // Validate all numeric values before using
                const videosInLibrary = window.validateNumber(subscription.active_videos, 0, VALIDATION.MAX_VIDEOS_LIMIT, 0);
                const limit = window.validateNumber(subscription.video_limit, 1, VALIDATION.MAX_VIDEOS_LIMIT, 2);
                const planRaw = subscription.plan || 'free';
                // Defensive: ensure planRaw is string before calling toLowerCase()
                const plan = (typeof planRaw === 'string' && planRaw.length > 0 && VALIDATION.ALLOWED_PLANS.includes(planRaw.toLowerCase())) ? planRaw.toLowerCase() : 'free';
                const isAtLimit = videosInLibrary >= limit;
                
                // Update storage badge elements with REAL backend data
                const storageUsedBadge = document.getElementById('storageUsedBadge');
                const storageTotalBadge = document.getElementById('storageTotalBadge');
                const storagePlanBadge = document.getElementById('storagePlanBadge');
                const deleteAllBtn = document.getElementById('deleteAllClipsBtn');
                const needMoreUpgradeText = document.getElementById('needMoreUpgradeText');
                const storageBadge = document.getElementById('storageBadge');
                
                console.log('🔍 [Badge Update] DOM Elements check:', {
                    storageUsedBadge: !!storageUsedBadge,
                    storageTotalBadge: !!storageTotalBadge,
                    storagePlanBadge: !!storagePlanBadge,
                    storageBadge: !!storageBadge
                });
                
                // Update all elements with validated data
                if (storageUsedBadge) {
                    storageUsedBadge.textContent = videosInLibrary.toString();
                    storageUsedBadge.style.color = isAtLimit ? '#ff4444' : 'inherit';
                    console.log('✏️ [Badge Update] Updated storageUsedBadge:', videosInLibrary);
                }
                
                if (storageTotalBadge) {
                    storageTotalBadge.textContent = limit.toString();
                    storageTotalBadge.style.color = isAtLimit ? '#ff4444' : 'inherit';
                    console.log('✏️ [Badge Update] Updated storageTotalBadge:', limit);
                }
                
                if (storagePlanBadge) {
                    storagePlanBadge.textContent = plan.charAt(0).toUpperCase() + plan.slice(1);
                    console.log('✏️ [Badge Update] Updated storagePlanBadge:', plan);
                }
                
                // Show/hide delete all button
                if (deleteAllBtn) {
                    deleteAllBtn.style.display = isAtLimit ? 'inline-flex' : 'none';
                }
                
                // Show/hide upgrade text
                if (needMoreUpgradeText) {
                    needMoreUpgradeText.style.display = isAtLimit ? 'inline' : 'none';
                }
                
                // Apply badge styling
                if (storageBadge) {
                    if (isAtLimit) {
                        storageBadge.style.borderColor = '#ff4444';
                        storageBadge.style.backgroundColor = 'rgba(255, 68, 68, 0.05)';
                    } else {
                        storageBadge.style.borderColor = '';
                        storageBadge.style.backgroundColor = '';
                    }
                }
                
                console.log(`✅ Storage Badge SUCCESSFULLY Updated: ${videosInLibrary} / ${limit} (${plan}) ${isAtLimit ? '⚠️ FULL' : '✅ OK'}`);
            } catch (error) {
                console.error('❌ Failed to fetch storage info from backend:', error);
            }
        };
        return window.createDebounce(originalFunc, 500);
    })();



    // Upgrade Modal Functions
    window.closeUpgradeModal = function() {
        const modal = document.getElementById('upgradeModalOverlay');
        if (modal) {
            modal.style.display = 'none';
        }
    };
    
    window.showUpgradeModal = function(title = 'Video Too Long', subtitle = 'Your video exceeds your plan limit. Upgrade to process longer videos and unlock premium features.') {
        const modal = document.getElementById('upgradeModalOverlay');
        const titleEl = document.getElementById('upgradeModalTitle');
        const subtitleEl = document.getElementById('upgradeModalSubtitle');
        
        if (modal) {
            // Sanitize inputs to prevent XSS
            if (titleEl) titleEl.textContent = window.sanitizeString(title);
            if (subtitleEl) subtitleEl.textContent = window.sanitizeString(subtitle);
            modal.style.display = 'flex';
        }
    };
    // Subscription modal functions removed
    
    // Setup subscription modal event listeners on page load
    document.addEventListener('DOMContentLoaded', function() {
        // Check if we just returned from a successful payment
        const paymentSuccess = sessionStorage.getItem('paymentSuccess');
        if (paymentSuccess) {
            try {
                const paymentData = JSON.parse(paymentSuccess);
                console.log('🎉 Payment detected, new plan:', paymentData.plan);
                
                // ===== PLAN VALIDATION =====
                // Only accept known plan values; reject anything else
                if (!paymentData.plan || typeof paymentData.plan !== 'string') {
                    console.error('❌ Invalid payment data: plan is missing or not a string');
                    sessionStorage.removeItem('paymentSuccess');
                    return;
                }
                
                if (!VALIDATION.ALLOWED_PLANS.includes(paymentData.plan.toLowerCase())) {
                    console.error('❌ Invalid payment data: plan not in allowed list');
                    sessionStorage.removeItem('paymentSuccess');
                    return;
                }
                
                // Update currentUser plan in localStorage (cache only)
                const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
                if (currentUser) {
                    currentUser.plan = paymentData.plan.toLowerCase();
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    console.log('✅ Updated currentUser plan to:', currentUser.plan);
                }
            } catch (e) {
                console.error('Failed to parse payment success data:', e);
            }
            // Clear the flag
            sessionStorage.removeItem('paymentSuccess');
        }
        
        // Load user tier information
        async function loadUserTierInfo() {
            try {
                const response = await fetch('/api/tier/info', {
                    method: 'GET',
                    credentials: 'include'  // ✅ Send httpOnly cookie
                });

                if (response.ok) {
                    const data = await response.json();
                    if (!data || typeof data !== 'object') {
                        throw new Error('Invalid response structure');
                    }
                    const tierData = data.data;
                    if (!tierData || typeof tierData !== 'object') {
                        throw new Error('Missing tier data in response');
                    }
                    
                    // Update tier info card
                    const currentTierEl = document.getElementById('currentTier');
                    const tierInfoEl = document.getElementById('tierInfo');
                    
                    if (currentTierEl && tierData.tier_name && typeof tierData.tier_name === 'string') {
                        currentTierEl.textContent = window.sanitizeString(tierData.tier_name);
                    }
                    
                    if (tierInfoEl && tierData.generations && typeof tierData.generations.remaining === 'number') {
                        const remaining = window.validateNumber(tierData.generations.remaining, 0, 999999, 0);
                        tierInfoEl.textContent = remaining + ' gens left today';
                    }
                }
            } catch (error) {
                console.log('Could not load tier info:', error);
            }
        }

        loadUserTierInfo();
        
        // ✅ Fetch fresh subscription info from server - NOT localStorage!
        async function refreshSubscriptionOnDashboard() {
            try {
                const response = await fetch('/api/auth/subscription', {
                    method: 'GET',
                    credentials: 'include'
                });
                if (response.ok) {
                    const data = await response.json();
                    if (!data || typeof data !== 'object') {
                        throw new Error('Invalid response structure');
                    }
                    const subscription = data.subscription;
                    if (!subscription || typeof subscription !== 'object') {
                        throw new Error('Missing subscription in response');
                    }
                    
                    console.log('✅ Dashboard fetched fresh subscription from backend (validated):', subscription.plan);
                    
                    // Now update all the badges with REAL data
                    updateStorageBadgesFromSubscription(subscription);
                } else {
                    console.warn('⚠️ Could not fetch subscription from backend:', response.status);
                }
            } catch (error) {
                console.error('❌ Dashboard failed to fetch subscription:', error);
            }
        }
        
        function updateStorageBadgesFromSubscription(subscription) {
            if (!subscription || typeof subscription !== 'object') return;
            
            const storageTotalBadge = document.getElementById('storageTotalBadge');
            const storagePlanBadge = document.getElementById('storagePlanBadge');
            const currentPlanDesc = document.getElementById('currentPlanDesc');
            
            // Get values from backend subscription data (source of truth)
            // Validate all values before using
            const videoLimit = window.validateNumber(subscription.video_limit || subscription.videos_space_limit || 2, 1, VALIDATION.MAX_VIDEOS_LIMIT, 2);
            const planRaw = subscription.plan || 'free';
            const plan = (typeof planRaw === 'string' && VALIDATION.ALLOWED_PLANS.includes(planRaw.toLowerCase())) ? planRaw.toLowerCase() : 'free';
            const planDisplayName = plan.charAt(0).toUpperCase() + plan.slice(1);
            
            if (storageTotalBadge) {
                storageTotalBadge.textContent = videoLimit.toString();
            }
            if (storagePlanBadge) {
                storagePlanBadge.textContent = planDisplayName;
            }
            if (currentPlanDesc) {
                currentPlanDesc.textContent = planDisplayName + ' Plan';
            }
            
            console.log('📊 Storage badges updated from backend (validated):', {
                plan: plan,
                videoLimit: videoLimit
            });
        }
        
        // Call refresh immediately
        refreshSubscriptionOnDashboard();
        
        // Update storage badge on page load
        updateStorageBadgeDisplay();

        // Disclaimer Overlay Handler - Shows once a week
        const disclaimerBtn = document.getElementById('disclaimerBtn');
        const disclaimerOverlay = document.querySelector('.url-input-overlay');
        const urlInput = document.querySelector('.url-input');
        const urlSubmitBtn = document.querySelector('.url-submit-btn');
        const checkmarkIcon = document.querySelector('.checkmark-icon');
        
        const DISCLAIMER_KEY = 'disclaimerAcceptedTime';
        const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
        
        if (disclaimerBtn && disclaimerOverlay) {
            // Check if disclaimer needs to be shown
            const lastAcceptedTime = localStorage.getItem(DISCLAIMER_KEY);
            const now = Date.now();
            let shouldShowDisclaimer = false;
            
            if (!lastAcceptedTime) {
                // New user - show disclaimer
                shouldShowDisclaimer = true;
            } else {
                const timeSinceAccepted = now - parseInt(lastAcceptedTime);
                if (timeSinceAccepted > WEEK_IN_MS) {
                    // More than a week has passed - show again
                    shouldShowDisclaimer = true;
                }
            }
            
            // Show or hide overlay based on timing
            if (!shouldShowDisclaimer) {
                disclaimerOverlay.classList.add('hidden');
                disclaimerBtn.classList.add('active');
                if (checkmarkIcon) checkmarkIcon.style.display = 'block';
                if (urlInput) urlInput.style.filter = 'none';
                if (urlSubmitBtn) urlSubmitBtn.style.filter = 'none';
                if (urlInput) urlInput.style.pointerEvents = 'auto';
                if (urlSubmitBtn) urlSubmitBtn.style.pointerEvents = 'auto';
            }
            
            // Handle button click
            disclaimerBtn.addEventListener('click', function() {
                if (!this.classList.contains('active')) {
                    this.classList.add('active');
                    if (checkmarkIcon) checkmarkIcon.style.display = 'block';
                    
                    // Debounce the hide to let the animation play
                    setTimeout(() => {
                        disclaimerOverlay.classList.add('hidden');
                        // Remove blur from input and button
                        if (urlInput) urlInput.style.filter = 'none';
                        if (urlSubmitBtn) urlSubmitBtn.style.filter = 'none';
                        // Enable interactions
                        if (urlInput) urlInput.style.pointerEvents = 'auto';
                        if (urlSubmitBtn) urlSubmitBtn.style.pointerEvents = 'auto';
                        // Save current timestamp to localStorage
                        localStorage.setItem(DISCLAIMER_KEY, Date.now().toString());
                    }, 300);
                }
            });
        }
    });

    // Clips Top Navigation - Simple Tab Switching
    function switchClipsTab(tabName, buttonElement) {
        // Remove active from all buttons
        const buttons = document.querySelectorAll('.clips-sub-item');
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add active to clicked button
        buttonElement.classList.add('active');
        
        // Hide all sections and show the correct one
        const sections = document.querySelectorAll('.clips-section');
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        // Map tab names to section IDs
        const tabToSection = {
            'templates': 'templatesSection',
            'create': 'createSection',
            'library': 'librarySection'
        };
        
        const targetSection = document.getElementById(tabToSection[tabName]);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.style.display = 'block';
        }
        
        // Move indicator based on button position
        const indicator = document.getElementById('clipsSubPane');
        if (indicator) {
            const buttonIndex = Array.from(buttons).indexOf(buttonElement);
            const pill = document.querySelector('.clips-sub-pill');
            
            // ===== NULL CHECK =====
            // Prevent TypeError if pill element doesn't exist
            if (!pill) {
                console.warn('⚠️ .clips-sub-pill element not found');
                return;
            }
            
            // Get button position relative to pill
            const pillRect = pill.getBoundingClientRect();
            const buttonRect = buttonElement.getBoundingClientRect();
            const relativeLeft = buttonRect.left - pillRect.left;
            
            indicator.style.left = relativeLeft + 'px';
        }

    }