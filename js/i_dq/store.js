
        window.addEventListener('load', () => {
            const inputSection = document.querySelector('.input-section');
            const inputContainer = document.querySelector('.input-container');
            const currentIndex = parseInt(localStorage.getItem('sidebarActiveIndex') || '0');
            
            if (inputSection && inputContainer) {
                if (currentIndex === 0) {
                    inputSection.classList.add('active');
                    inputContainer.classList.remove('hidden');
                    inputSection.style.cssText = 'display: flex !important; visibility: visible !important; opacity: 1 !important; pointer-events: all !important; z-index: 1000 !important;';
                } else {
                    inputSection.classList.remove('active');
                    inputContainer.classList.add('hidden');
                    inputSection.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; z-index: -10000 !important;';
                }
            }
        });
    window.handleDeleteAllClips = async function() {
        const confirmed = confirm('⚠️ This will DELETE ALL your clips. Are you absolutely sure? This cannot be undone.');
        if (!confirmed) return;

        const doubleConfirmed = confirm('🚨 FINAL WARNING: This will permanently delete ALL your stored clips. Are you 100% sure?');
        if (!doubleConfirmed) return;

        try {
            if (window.clipsStudio && window.clipsStudio.libraryItems && window.clipsStudio.libraryItems.length > 0) {
                const totalClips = window.clipsStudio.libraryItems.length;
                let deletedCount = 0;
                for (const clip of window.clipsStudio.libraryItems) {
                    try {
                        await fetch(`/api/clips/${clip.id}`, {
                            method: 'DELETE',
                            credentials: 'include',
                        });
                        deletedCount++;
                    } catch (error) {
                        console.error(`Failed to delete clip ${clip.id}:`, error);
                    }
                }
                window.clipsStudio.libraryItems = [];
                window.clipsStudio.saveLibraryItems();
                window.clipsStudio.updateLibraryView();
                updateStorageBadgeDisplay();
                
                window.clipsStudio.showNotification(`✅ Deleted ${deletedCount}/${totalClips} clips successfully`, 'success');
                console.log(`✅ Successfully deleted ${deletedCount} clips`);
            } else {
                window.clipsStudio.showNotification('No clips to delete', 'info');
            }
        } catch (error) {
            console.error('Error deleting all clips:', error);
            if (window.clipsStudio) {
                window.clipsStudio.showNotification('Error deleting clips: ' + error.message, 'error');
            }
        }
    };
    window.updateStorageBadgeDisplay = async function() {
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
            const subscription = data.subscription;
            console.log('✅ [Badge Update] Backend response:', subscription);
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
            
            const videosInLibrary = subscription.active_videos || 0;
            const limit = subscription.video_limit || 2;
            const plan = subscription.plan || 'free';
            const isAtLimit = videosInLibrary >= limit;
            if (storageUsedBadge) {
                storageUsedBadge.textContent = videosInLibrary;
                storageUsedBadge.style.color = isAtLimit ? '#ff4444' : 'inherit';
            }
            
            if (storageTotalBadge) {
                storageTotalBadge.textContent = limit;
                storageTotalBadge.style.color = isAtLimit ? '#ff4444' : 'inherit';
            }
            
            if (storagePlanBadge) {
                storagePlanBadge.textContent = plan.charAt(0).toUpperCase() + plan.slice(1);
            }
            if (deleteAllBtn) {
                deleteAllBtn.style.display = isAtLimit ? 'inline-flex' : 'none';
            }
            if (needMoreUpgradeText) {
                needMoreUpgradeText.style.display = isAtLimit ? 'inline' : 'none';
            }
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
            if (titleEl) titleEl.textContent = title;
            if (subtitleEl) subtitleEl.textContent = subtitle;
            modal.style.display = 'flex';
        }
    };
    document.addEventListener('DOMContentLoaded', function() {
        const paymentSuccess = sessionStorage.getItem('paymentSuccess');
        if (paymentSuccess) {
            try {
                const paymentData = JSON.parse(paymentSuccess);
                console.log('🎉 Payment detected, new plan:', paymentData.plan);
                const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
                if (currentUser) {
                    currentUser.plan = paymentData.plan;
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    console.log('✅ Updated currentUser plan to:', paymentData.plan);
                }
            } catch (e) {
                console.error('Failed to parse payment success data:', e);
            }
            sessionStorage.removeItem('paymentSuccess');
        }
        async function loadUserTierInfo() {
            try {
                const response = await fetch('/api/tier/info', {
                    method: 'GET',
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    const tierData = data.data;
                    const currentTierEl = document.getElementById('currentTier');
                    const tierInfoEl = document.getElementById('tierInfo');
                    
                    if (currentTierEl) {
                        currentTierEl.textContent = tierData.tier_name;
                    }
                    
                    if (tierInfoEl) {
                        const remaining = tierData.generations.remaining;
                        tierInfoEl.textContent = `${remaining} gens left today`;
                    }
                }
            } catch (error) {
                console.log('Could not load tier info:', error);
            }
        }

        loadUserTierInfo();
        async function refreshSubscriptionOnDashboard() {
            try {
                const response = await fetch('/api/auth/subscription', {
                    method: 'GET',
                    credentials: 'include'
                });
                if (response.ok) {
                    const data = await response.json();
                    const subscription = data.subscription;
                    localStorage.setItem('userSubscription', JSON.stringify(subscription));
                    console.log('✅ Dashboard fetched fresh subscription from backend:', subscription.plan);
                    updateStorageBadgesFromSubscription(subscription);
                } else {
                    console.warn('⚠️ Could not fetch subscription from backend:', response.status);
                }
            } catch (error) {
                console.error('❌ Dashboard failed to fetch subscription:', error);
            }
        }
        
        function updateStorageBadgesFromSubscription(subscription) {
            if (!subscription) return;
            
            const storageTotalBadge = document.getElementById('storageTotalBadge');
            const storagePlanBadge = document.getElementById('storagePlanBadge');
            const currentPlanDesc = document.getElementById('currentPlanDesc');
            const videoLimit = subscription.video_limit || subscription.videos_space_limit || 2;
            const plan = subscription.plan || 'free';
            const planDisplayName = plan.charAt(0).toUpperCase() + plan.slice(1);
            
            if (storageTotalBadge) {
                storageTotalBadge.textContent = videoLimit;
            }
            if (storagePlanBadge) {
                storagePlanBadge.textContent = planDisplayName;
            }
            if (currentPlanDesc) {
                currentPlanDesc.textContent = planDisplayName + ' Plan';
            }
            
            console.log('📊 Storage badges updated from backend:', {
                plan: plan,
                videoLimit: videoLimit
            });
        }
        refreshSubscriptionOnDashboard();
        updateStorageBadgeDisplay();
        const disclaimerBtn = document.getElementById('disclaimerBtn');
        const disclaimerOverlay = document.querySelector('.url-input-overlay');
        const urlInput = document.querySelector('.url-input');
        const urlSubmitBtn = document.querySelector('.url-submit-btn');
        const checkmarkIcon = document.querySelector('.checkmark-icon');
        
        const DISCLAIMER_KEY = 'disclaimerAcceptedTime';
        const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000; 
        
        if (disclaimerBtn && disclaimerOverlay) {
            const lastAcceptedTime = localStorage.getItem(DISCLAIMER_KEY);
            const now = Date.now();
            let shouldShowDisclaimer = false;
            
            if (!lastAcceptedTime) {
                shouldShowDisclaimer = true;
            } else {
                const timeSinceAccepted = now - parseInt(lastAcceptedTime);
                if (timeSinceAccepted > WEEK_IN_MS) {
                    shouldShowDisclaimer = true;
                }
            }
            if (!shouldShowDisclaimer) {
                disclaimerOverlay.classList.add('hidden');
                disclaimerBtn.classList.add('active');
                if (checkmarkIcon) checkmarkIcon.style.display = 'block';
                if (urlInput) urlInput.style.filter = 'none';
                if (urlSubmitBtn) urlSubmitBtn.style.filter = 'none';
                if (urlInput) urlInput.style.pointerEvents = 'auto';
                if (urlSubmitBtn) urlSubmitBtn.style.pointerEvents = 'auto';
            }
            disclaimerBtn.addEventListener('click', function() {
                if (!this.classList.contains('active')) {
                    this.classList.add('active');
                    if (checkmarkIcon) checkmarkIcon.style.display = 'block';
                    setTimeout(() => {
                        disclaimerOverlay.classList.add('hidden');
                        if (urlInput) urlInput.style.filter = 'none';
                        if (urlSubmitBtn) urlSubmitBtn.style.filter = 'none';
                        if (urlInput) urlInput.style.pointerEvents = 'auto';
                        if (urlSubmitBtn) urlSubmitBtn.style.pointerEvents = 'auto';
                        localStorage.setItem(DISCLAIMER_KEY, Date.now().toString());
                    }, 300);
                }
            });
        }
    });

    function switchClipsTab(tabName, buttonElement) {
        const buttons = document.querySelectorAll('.clips-sub-item');
        buttons.forEach(btn => btn.classList.remove('active'));
        buttonElement.classList.add('active');
        const sections = document.querySelectorAll('.clips-section');
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
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
        const indicator = document.getElementById('clipsSubPane');
        if (indicator) {
            const buttonIndex = Array.from(buttons).indexOf(buttonElement);
            const pill = document.querySelector('.clips-sub-pill');
            const pillRect = pill.getBoundingClientRect();
            const buttonRect = buttonElement.getBoundingClientRect();
            const relativeLeft = buttonRect.left - pillRect.left;
            
            indicator.style.left = relativeLeft + 'px';
        }

    }