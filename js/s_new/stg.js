
        // Settings Modal Functionality
        document.addEventListener('DOMContentLoaded', () => {
            const stgBackdrop = document.getElementById('stgBackdrop');
            const stgModal = document.getElementById('stgModal');
            const stgClose = document.getElementById('stgClose');
            const stgUpgradeBtn = document.getElementById('stgUpgradeBtn');
            const dropdownSettingsLink = document.getElementById('dropdownSettings');
            const stgLogoutBtn = document.getElementById('stgLogoutBtn');
            
            console.log('✅ STG Modal initialized:', { stgBackdrop, stgModal, stgClose, dropdownSettingsLink });

            // Open settings modal from dropdown
            if (dropdownSettingsLink) {
                dropdownSettingsLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Close profile dropdown
                    const profileDropdown = document.getElementById('profileDropdown');
                    if (profileDropdown) profileDropdown.classList.remove('open');
                    openSettingsModal();
                });
            }

            // Close button
            if (stgClose) {
                stgClose.addEventListener('click', closeSettingsModal);
            }

            // Close when clicking backdrop
            if (stgBackdrop) {
                stgBackdrop.addEventListener('click', closeSettingsModal);
            }

        // Prevent closing when clicking modal content
        if (stgModal) {
            stgModal.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Logout button - use secure handler from qwsqa.js
        if (stgLogoutBtn) {
            stgLogoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (typeof handleSecureLogout === 'function') {
                    handleSecureLogout();
                } else if (typeof logout === 'function') {
                    logout();
                } else {
                    console.warn('No logout function available');
                    window.location.href = '/login.html';
                }
            });
        }

        // Functions to open/close settings modal
        function openSettingsModal() {
            stgBackdrop.classList.add('open');
            stgModal.classList.add('open');
            
            // Disable nav-wrapper when settings open
            const navWrapper = document.getElementById('navWrapper');
            if (navWrapper) {
                navWrapper.classList.add('disabled');
            }
            
            updateSettingsModal();
        }

        function closeSettingsModal() {
            stgBackdrop.classList.remove('open');
            stgModal.classList.remove('open');
            
            // Re-enable nav-wrapper when settings close
            const navWrapper = document.getElementById('navWrapper');
            if (navWrapper) {
                navWrapper.classList.remove('disabled');
            }
        }

        // Function to update settings modal with user data and tier information
        async function updateSettingsModal() {
            // ===== LOAD AND VALIDATE USER DATA =====
            let currentUser = null;
            
            try {
                if (window.currentUser) {
                    currentUser = window.validateUserObject(window.currentUser);
                }
                if (!currentUser) {
                    const saved = localStorage.getItem('currentUser');
                    if (saved) {
                        try {
                            const parsed = JSON.parse(saved);
                            currentUser = window.validateUserObject(parsed);
                        } catch (parseErr) {
                            console.error('Failed to parse localStorage currentUser:', parseErr);
                        }
                    }
                }
            } catch (err) {
                console.error('Error loading user data:', err);
            }

            if (!currentUser) {
                console.warn('No valid user data for settings modal');
                return;
            }

            // Update user info with validated data
            const stgName = document.getElementById('stgName');
            const stgUserEmail = document.getElementById('stgUserEmail');
            const stgAvatar = document.getElementById('stgAvatar');
            const stgEmailAddress = document.getElementById('stgEmailAddress');

            if (stgName) {
                stgName.textContent = currentUser.name || currentUser.username || 'Guest User';
            }

            if (stgUserEmail) {
                stgUserEmail.textContent = currentUser.email || 'unknown@email.com';
            }

            if (stgEmailAddress) {
                stgEmailAddress.textContent = currentUser.email || 'unknown@email.com';
            }

            // ===== FIX: Secure avatar image injection =====
            // Validate URL and use createElement instead of innerHTML
            if (stgAvatar) {
                const pictureUrl = currentUser.picture || currentUser.avatar || null;
                if (pictureUrl && window.isValidImageUrl(pictureUrl)) {
                    // Create img DOM element safely
                    const img = document.createElement('img');
                    img.src = pictureUrl;
                    img.alt = 'Profile';
                    img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 50%;';
                    
                    img.onerror = () => {
                        console.warn('Failed to load profile image');
                        // Show placeholder on error
                        stgAvatar.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                    };
                    
                    stgAvatar.innerHTML = '';
                    stgAvatar.appendChild(img);
                } else {
                    // Show default avatar if no valid image
                    stgAvatar.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                }
            }

            // Update plan info
            const stgCurrentPlan = document.getElementById('stgCurrentPlan');
            const stgRenewalDate = document.getElementById('stgRenewalDate');
            const stgVideosUsed = document.getElementById('stgVideosUsed');
            const stgStorage = document.getElementById('stgStorage');

            // Show loading state
            if (stgCurrentPlan) {
                stgCurrentPlan.textContent = 'Loading...';
            }

            // ===== FIX: Use credentials: 'include' instead of localStorage token =====
            // Never trust localStorage token; use httpOnly cookie instead
            try {
                const response = await fetch('/api/user/profile', {
                    method: 'GET',
                    credentials: 'include', // ✅ Uses httpOnly cookie automatically
                    headers: window.secureHeaders ? window.secureHeaders() : {'Content-Type': 'application/json'}
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('📋 Real subscription data from backend');

                    // Validate response structure before using
                    if (!data || typeof data !== 'object' || !data.plan || typeof data.plan !== 'string') {
                        throw new Error('Invalid response structure from backend');
                    }

                    // Get the ACTUAL plan from database - defensive check
                    if (!data.plan || typeof data.plan !== 'string') {
                        throw new Error('Invalid plan value from backend');
                    }
                    const planRaw = data.plan.toLowerCase();
                    if (!VALIDATION.ALLOWED_PLANS.includes(planRaw)) {
                        throw new Error('Invalid plan value from backend');
                    }

                    const actualPlan = planRaw;
                    const planName = actualPlan.charAt(0).toUpperCase() + actualPlan.slice(1);
                    const isFreePlan = actualPlan === 'free';

                    // Update current plan
                    if (stgCurrentPlan) {
                        stgCurrentPlan.textContent = planName;
                        console.log('✅ Updated plan from backend:', planName);
                    }

                    // Show/hide upgrade button based on actual plan
                    if (stgUpgradeBtn) {
                        if (isFreePlan) {
                            stgUpgradeBtn.classList.remove('hidden');
                        } else {
                            stgUpgradeBtn.classList.add('hidden');
                        }
                    }

                    // Fetch plan-based limits from backend instead of hardcoding
                    let videosLimitPerDay = 1;
                    let storageLimit = 0.5;  // Free tier: 500 MB = 0.5 GB
                    
                    // Validate from backend response if available
                    if (typeof data.videos_limit === 'number') {
                        videosLimitPerDay = window.validateNumber(data.videos_limit, 1, VALIDATION.MAX_VIDEOS_LIMIT, 1);
                    } else if (actualPlan === 'basic') {
                        videosLimitPerDay = 5;
                    } else if (actualPlan === 'prime') {
                        videosLimitPerDay = 10;
                    } else if (actualPlan === 'elite') {
                        videosLimitPerDay = 20;
                    }
                    
                    if (typeof data.storage_limit === 'number') {
                        storageLimit = window.validateNumber(data.storage_limit / (1024 * 1024 * 1024), 1, VALIDATION.MAX_STORAGE_GB, 0.5);
                    } else if (actualPlan === 'basic') {
                        storageLimit = 2;  // Basic: 2 GB
                    } else if (actualPlan === 'prime') {
                        storageLimit = 10;  // Prime: 10 GB
                    } else if (actualPlan === 'elite') {
                        storageLimit = 100;  // Elite: 100 GB
                    }

                    // Update videos used
                    if (stgVideosUsed) {
                        const videosUsed = window.validateNumber(data.videos_used, 0, VALIDATION.MAX_VIDEOS_LIMIT, 0);
                        const remaining = Math.max(0, videosLimitPerDay - videosUsed);
                        // Use textContent for dynamic content instead of innerHTML
                        stgVideosUsed.innerHTML = '';
                        const content = document.createElement('div');
                        content.style.cssText = 'display: flex; align-items: center; gap: 8px;';
                        const spanUsed = document.createElement('span');
                        spanUsed.textContent = videosUsed + ' / ' + videosLimitPerDay;
                        const spanRemaining = document.createElement('span');
                        spanRemaining.style.cssText = 'font-size: 0.85em; color: #888;';
                        spanRemaining.textContent = '(' + remaining + ' remaining today)';
                        content.appendChild(spanUsed);
                        content.appendChild(spanRemaining);
                        stgVideosUsed.appendChild(content);
                        console.log('✅ Updated videos used:', videosUsed, '/', videosLimitPerDay);
                    }

                    // Update storage
                    if (stgStorage) {
                        const storageUsedBytes = window.validateNumber(data.storage_used, 0, VALIDATION.MAX_STORAGE_GB * 1024 * 1024 * 1024, 0);
                        const storageUsed = storageUsedBytes / (1024 * 1024 * 1024);
                        stgStorage.textContent = `${storageUsed.toFixed(1)} GB / ${storageLimit} GB`;
                        console.log('✅ Updated storage:', storageUsed.toFixed(1), '/', storageLimit);
                    }

                    // Update renewal date
                    if (stgRenewalDate) {
                        if (data.subscription_end_date && typeof data.subscription_end_date === 'string') {
                            // Validate date string is valid before parsing
                            const dateTimestamp = Date.parse(data.subscription_end_date);
                            if (isNaN(dateTimestamp)) {
                                console.warn('Invalid subscription end date from backend');
                                stgRenewalDate.textContent = 'Date unavailable';
                            } else {
                                const expiryDate = new Date(dateTimestamp);
                                const today = new Date();
                                const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
                            
                            if (daysUntilExpiry < 0) {
                                stgRenewalDate.textContent = 'Expired';
                            } else if (daysUntilExpiry === 0) {
                                stgRenewalDate.textContent = 'Expires today';
                            } else if (daysUntilExpiry === 1) {
                                stgRenewalDate.textContent = 'Expires tomorrow';
                            } else {
                                stgRenewalDate.textContent = `Expires in ${daysUntilExpiry} days`;
                            }
                            }
                        } else if (actualPlan !== 'free') {
                            stgRenewalDate.textContent = 'Active - No expiration';
                        } else {
                            stgRenewalDate.textContent = 'No active subscription';
                        }
                    }

                    // NOTE: Do NOT cache auth data in localStorage - use httpOnly cookies only
                    // Backend is source of truth; client only uses for display
                    
                } else {
                    console.error('❌ Failed to fetch profile:', response.status);
                    if (stgCurrentPlan) {
                        stgCurrentPlan.textContent = 'Error loading';
                    }
                }
            } catch (err) {
                console.error('❌ Error fetching user profile:', err);
                if (stgCurrentPlan) {
                    stgCurrentPlan.textContent = 'Error loading';
                }
            }

            // Update connected accounts
            const stgYouTubeStatus = document.getElementById('stgYouTubeStatus');

            if (stgYouTubeStatus && currentUser.youtube_connected) {
                const statusSpan = document.createElement('span');
                statusSpan.style.cssText = 'color: #22c55e; font-weight: 600;';
                statusSpan.textContent = '✓ Connected';
                stgYouTubeStatus.innerHTML = '';
                stgYouTubeStatus.appendChild(statusSpan);
            } else if (stgYouTubeStatus) {
                stgYouTubeStatus.textContent = 'Not connected';
            }
        }

        // Expose globally
        window.openSettingsModal = openSettingsModal;
        window.closeSettingsModal = closeSettingsModal;
        window.updateSettingsModal = updateSettingsModal;

        // Close settings modal with ESC key - with proper null check
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && stgModal?.classList.contains('open')) {
                closeSettingsModal();
            }
        });
        }); // End DOMContentLoaded