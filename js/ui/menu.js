// User Menu Functionality - menu.js loaded successfully
console.log('menu.js file loaded');

let userMenuPanel, userMenuBackdrop;

// 🔐 SECURITY: URL validation to prevent XSS via data URIs and javascript: schemes
function isValidImageUrl(url) {
    if (!url || typeof url !== 'string') return false;
    const trimmed = url.trim().toLowerCase();
    // Block javascript:, data:, and vbscript: schemes
    if (trimmed.startsWith('javascript:') || trimmed.startsWith('data:') || trimmed.startsWith('vbscript:')) return false;
    // Allow http, https, and relative URLs only
    return trimmed.startsWith('http://') || trimmed.startsWith('https://') || !trimmed.includes(':');
}

// 🔐 SECURITY: Escape HTML to prevent XSS in user data display
function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = str;  // textContent is XSS-safe
    return div.innerHTML;
}

// Cache system to prevent repeated API calls
const apiCache = {
    userProfile: null,
    userProfileTime: 0,
    CACHE_DURATION: 300000, // 5 minutes
    
    getUserProfile() {
        const now = Date.now();
        if (this.userProfile && (now - this.userProfileTime) < this.CACHE_DURATION) {
            console.log('💾 Using cached user profile');
            return this.userProfile;
        }
        return null;
    },
    
    setUserProfile(data) {
        this.userProfile = data;
        this.userProfileTime = Date.now();
        console.log('💾 Cached user profile');
    }
};

// Fetch and populate current user data from backend
async function loadAndSetCurrentUser() {
    try {
        // First check if currentUser already exists in window
        if (window.currentUser) {
            console.log('✅ User already loaded in window.currentUser');
            // Check if we need to fetch auth provider
            if (!window.currentUser.auth_provider) {
                await fetchAndAddAuthProvider();
            }
            return;
        }
        
        // Check cache for user profile
        const cachedProfile = apiCache.getUserProfile();
        if (cachedProfile) {
            window.currentUser = cachedProfile;
            console.log('✅ User loaded from cache');
            updateMenuUserInfo();
            setTimeout(() => updateProfileButton(), 50);
            return;
        }
        
        const saved = localStorage.getItem('currentUser');
        if (saved) {
            try {
                window.currentUser = JSON.parse(saved);
                console.log('✅ User loaded from localStorage');
                // Check if we need to fetch auth provider
                if (!window.currentUser.auth_provider) {
                    await fetchAndAddAuthProvider();
                }
                updateMenuUserInfo();
                setTimeout(() => updateProfileButton(), 50);
                return;
            } catch (e) {
                console.warn('Failed to parse saved currentUser', e);
            }
        }
        
        // Try to get auth headers from global function if available
        let headers = {};
        if (typeof getAuthHeaders === 'function') {
            headers = getAuthHeaders();
        }
        // 🔐 SECURITY: REMOVED localStorage token fallback - only use httpOnly cookies via credentials: 'include'
        // Never load auth tokens from localStorage - it's vulnerable to XSS
        
        // Try to fetch from /api/user/profile endpoint
        console.log('📡 Fetching user profile with headers:', Object.keys(headers));
        const response = await fetch('/api/user/profile', {
            method: 'GET',
            headers: headers,
            credentials: 'include'
        });
        
        if (response.ok) {
            const userData = await response.json();
            console.log('✅ Fetched user profile:', userData);
            console.log('📸 Picture field:', userData.picture || userData.avatar || userData.photo);
            console.log('🔐 Auth provider:', userData.auth_provider);
            window.currentUser = userData;
            localStorage.setItem('currentUser', JSON.stringify(userData));
            // Update menu info AND profile button immediately
            updateMenuUserInfo();
            setTimeout(() => updateProfileButton(), 100);  // Slight delay to ensure DOM is ready
        } else {
            console.warn('Failed to fetch user profile:', response.status);
            // Continue with whatever data we have
            await fetchAndAddAuthProvider();
            updateMenuUserInfo();
            setTimeout(() => updateProfileButton(), 100);
        }
    } catch (error) {
        console.error('Error loading current user:', error);
        // Continue with whatever data we have
        await fetchAndAddAuthProvider();
        updateMenuUserInfo();
        setTimeout(() => updateProfileButton(), 100);
    }
}

// Fetch auth provider separately if not included in profile
async function fetchAndAddAuthProvider() {
    try {
        let headers = {};
        if (typeof getAuthHeaders === 'function') {
            headers = getAuthHeaders();
        }
        
        const response = await fetch('/api/user/auth-provider', {
            method: 'GET',
            credentials: 'include',
            headers: headers,
            credentials: 'include'
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('✅ Fetched auth provider:', data.auth_provider);
            if (window.currentUser) {
                window.currentUser.auth_provider = data.auth_provider;
                localStorage.setItem('currentUser', JSON.stringify(window.currentUser));
                // Update profile button with the new auth provider info
                updateProfileButton();
            }
        }
    } catch (error) {
        console.error('Error fetching auth provider:', error);
        // Silently fail, default to email
    }
}

// Global function to open user menu from profile button
function openUserMenu() {
    console.log('openUserMenu called from profile button');
    if (!userMenuPanel) {
        userMenuPanel = document.getElementById('userMenuPanel');
    }
    if (!userMenuBackdrop) {
        userMenuBackdrop = document.getElementById('userMenuBackdrop');
    }
    
    if (!userMenuPanel || !userMenuBackdrop) {
        console.error('Menu elements not found');
        return;
    }
    
    console.log('openUserMenu called - adding active class');
    userMenuPanel.classList.add('active');
    userMenuBackdrop.classList.add('active');
    
    // Responsive width based on screen size
    const menuWidth = window.innerWidth <= 768 ? '100%' : '420px';
    const closedRight = window.innerWidth <= 768 ? '-100%' : '-420px';
    
    // Force styles with !important inline to bypass all CSS
    userMenuPanel.style.cssText = `position: fixed !important; top: 0 !important; right: 0 !important; width: ${menuWidth} !important; height: 100vh !important; z-index: 9999 !important; display: flex !important; flex-direction: column !important; background: white !important; opacity: 1 !important; visibility: visible !important;`;
    userMenuBackdrop.style.cssText = 'position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; background: rgba(28, 25, 23, 0.5) !important; z-index: 9998 !important; display: block !important; opacity: 1 !important; visibility: visible !important; pointer-events: auto !important;';
    document.body.style.overflow = 'hidden';
    console.log('Menu opened - panel right:', userMenuPanel.style.right, 'backdrop opacity:', userMenuBackdrop.style.opacity);
    updateMenuUserInfo();
    setTimeout(() => updateProfileButton(), 50);  // Update profile button when menu opens
}

// Function to close user menu
function closeUserMenuPanel() {
    if (!userMenuPanel) userMenuPanel = document.getElementById('userMenuPanel');
    if (!userMenuBackdrop) userMenuBackdrop = document.getElementById('userMenuBackdrop');
    
    userMenuPanel.classList.remove('active');
    userMenuBackdrop.classList.remove('active');
    
    // Responsive width based on screen size
    const menuWidth = window.innerWidth <= 768 ? '100%' : '420px';
    const closedRight = window.innerWidth <= 768 ? '-100%' : '-420px';
    
    // Force styles with !important inline 
    userMenuPanel.style.cssText = `position: fixed !important; top: 0 !important; right: ${closedRight} !important; width: ${menuWidth} !important; height: 100vh !important; z-index: 9999 !important; display: flex !important; flex-direction: column !important; background: white !important; opacity: 1 !important; visibility: visible !important;`;
    userMenuBackdrop.style.cssText = 'position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; background: rgba(28, 25, 23, 0.5) !important; z-index: 9998 !important; display: block !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important;';
    document.body.style.overflow = '';
    console.log('Menu closed - panel right:', userMenuPanel.style.right);
}

// Function to update profile button avatar
function updateProfileButton() {
    const profileBtn = document.getElementById('profileAvatarBtn');
    if (!profileBtn) {
        console.warn('⚠️ profileAvatarBtn element not found');
        return;
    }
    
    let userObj = null;
    try {
        if (typeof window !== 'undefined' && window.currentUser) {
            userObj = window.currentUser;
        } else {
            const saved = localStorage.getItem('currentUser');
            if (saved) userObj = JSON.parse(saved);
        }
    } catch (err) {
        console.error('Failed to read currentUser for profile button', err);
        return;
    }
    
    console.log('🔍 updateProfileButton - userObj:', userObj);
    
    // Check for picture field - with multiple field name fallbacks
    const pictureUrl = userObj?.picture || userObj?.avatar || userObj?.photo || userObj?.profilePicture || null;
    const userName = userObj?.name || userObj?.displayName || userObj?.email || 'User';
    const authProvider = userObj?.auth_provider || 'email';
    
    console.log('📸 Profile picture URL:', pictureUrl);
    console.log('👤 User name:', userName);
    console.log('🔐 Auth provider:', authProvider);
    
    // If user is Google authenticated, show Gmail icon
    if (authProvider && authProvider.toLowerCase().includes('google')) {
        console.log('✅ Displaying Gmail icon for Google OAuth user');
        profileBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <!-- Gmail/Google icon -->
                <rect width="24" height="24" fill="none"/>
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335"/>
            </svg>
        `;
        return;
    }
    
    // If user has a profile picture, display it
    if (userObj && pictureUrl && pictureUrl.trim() !== '' && isValidImageUrl(pictureUrl)) {
        // Replace SVG with user avatar image
        console.log('✅ Setting profile picture from validated URL');
        const img = document.createElement('img');
        img.src = pictureUrl;
        img.alt = userName;
        img.style.cssText = 'width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block;';
        img.onerror = () => {
            console.warn('Failed to load profile image, keeping SVG');
            // Keep SVG if image fails to load - don't remove it
        };
        img.onload = () => {
            console.log('✅ Profile image loaded successfully');
        };
        
        // Only replace innerHTML if image loads successfully
        const tempDiv = document.createElement('div');
        tempDiv.appendChild(img);
        profileBtn.innerHTML = tempDiv.innerHTML;
    } else {
        // Keep default SVG if no picture
        console.log('⚠️ No user picture found - userObj exists:', !!userObj, 'picture field:', pictureUrl);
        // Don't clear the button, keep the default SVG
    }
}

// Update profile dropdown with user info
async function updateProfileDropdown() {
    const dropdownUserName = document.getElementById('dropdownUserName');
    const dropdownUserPlan = document.getElementById('dropdownUserPlan');
    const dropdownUserAvatar = document.getElementById('dropdownUserAvatar');
    
    console.log('🔍 updateProfileDropdown called - Elements found:', {
        dropdownUserName: !!dropdownUserName,
        dropdownUserPlan: !!dropdownUserPlan,
        dropdownUserAvatar: !!dropdownUserAvatar
    });

    let userObj = null;
    try {
        if (typeof window !== 'undefined' && window.currentUser) {
            userObj = window.currentUser;
        } else {
            const saved = localStorage.getItem('currentUser');
            if (saved) userObj = JSON.parse(saved);
        }
    } catch (err) {
        console.error('Failed to read currentUser for dropdown', err);
        return;
    }

    console.log('👤 currentUser object:', userObj);

    if (!userObj) {
        if (dropdownUserName) dropdownUserName.textContent = 'Guest User';
        if (dropdownUserPlan) dropdownUserPlan.textContent = 'Free Plan';
        return;
    }

    // Update name
    const userName = userObj.name || userObj.displayName || userObj.email || 'User';
    if (dropdownUserName) dropdownUserName.textContent = userName;

    // Fetch and update plan/tier information
    try {
        const response = await fetch('/api/user/profile', {
            method: 'GET',
            credentials: 'include',
            });
            if (response.ok) {
                const data = await response.json();
                console.log('📋 API Response for profile:', data);
                const plan = data.plan || userObj.plan || 'Free';
                const planDisplay = plan.charAt(0).toUpperCase() + plan.slice(1) + ' Plan';
                console.log('💰 Plan display text:', planDisplay);
                
                // Make sure element exists and update it
                const planElement = document.getElementById('dropdownUserPlan');
                if (planElement) {
                    planElement.textContent = planDisplay;
                    console.log('✅ Updated dropdownUserPlan to:', planDisplay);
                } else {
                    console.warn('⚠️ dropdownUserPlan element not found!');
                }
                
                // Store plan in currentUser for future reference
                if (window.currentUser) window.currentUser.plan = plan;
            } else {
                console.warn('❌ Profile API returned non-ok status:', response.status);
                // Use plan from localStorage if available
                const plan = userObj.plan || 'Free';
                const planDisplay = plan.charAt(0).toUpperCase() + plan.slice(1) + ' Plan';
                const planElement = document.getElementById('dropdownUserPlan');
                if (planElement) {
                    planElement.textContent = planDisplay;
                    console.log('📝 Fallback: Updated dropdownUserPlan to:', planDisplay);
                }
            }
        } else {
            console.warn('⚠️ No auth token found');
            // Use plan from localStorage if available
            const plan = userObj.plan || 'Free';
            const planDisplay = plan.charAt(0).toUpperCase() + plan.slice(1) + ' Plan';
            const planElement = document.getElementById('dropdownUserPlan');
            if (planElement) {
                planElement.textContent = planDisplay;
            }
        }
    } catch (err) {
        console.error('Failed to fetch plan info:', err);
        // Use plan from localStorage if available
        const plan = userObj.plan || 'Free';
        const planDisplay = plan.charAt(0).toUpperCase() + plan.slice(1) + ' Plan';
        const planElement = document.getElementById('dropdownUserPlan');
        if (planElement) {
            planElement.textContent = planDisplay;
            console.log('🔄 Error fallback: Updated dropdownUserPlan to:', planDisplay);
        }
    }

    // Update avatar in dropdown
    const pictureUrl = userObj?.picture || userObj?.avatar || userObj?.photo || null;
    if (dropdownUserAvatar) {
        if (pictureUrl && pictureUrl.trim() !== '') {
            console.log('✅ Setting dropdown avatar from:', pictureUrl);
            const img = document.createElement('img');
            img.src = pictureUrl;
            img.alt = userName;
            img.style.cssText = 'width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block;';
            img.onerror = () => {
                console.warn('Failed to load dropdown avatar image');
            };
            dropdownUserAvatar.innerHTML = '';
            dropdownUserAvatar.appendChild(img);
        }
    }
}

// Update menu user info
function updateMenuUserInfo() {
    const menuUserName = document.getElementById('menuUserName');
    const menuUserEmail = document.getElementById('menuUserEmail');
    const menuUserAvatar = document.getElementById('menuUserAvatar');
    const profileNameDisplay = document.getElementById('profileNameDisplay');
    const emailDisplay = document.getElementById('emailDisplay');
    
    let userObj = null;
    try {
        if (typeof window !== 'undefined' && window.currentUser) {
            userObj = window.currentUser;
        } else {
            const saved = localStorage.getItem('currentUser');
            if (saved) userObj = JSON.parse(saved);
        }
    } catch (err) {
        console.error('menu: failed to read currentUser', err);
        userObj = null;
    }

    console.log('🔍 updateMenuUserInfo - userObj:', userObj);
    
    // Check for picture field - with multiple field name fallbacks
    const pictureUrl = userObj?.picture || userObj?.avatar || userObj?.photo || userObj?.profilePicture || null;
    console.log('📸 Menu avatar picture URL:', pictureUrl);

    if (userObj) {
        // Try multiple field names for name
        const userName = userObj.name || userObj.displayName || userObj.first_name || userObj.firstName || 'User';
        // Try multiple field names for email
        const userEmail = userObj.email || userObj.username || '';
        
        if (menuUserName) menuUserName.textContent = userName;
        if (menuUserEmail) menuUserEmail.textContent = userEmail;
        if (profileNameDisplay) profileNameDisplay.textContent = userName;
        if (emailDisplay) emailDisplay.textContent = userEmail;

        if (menuUserAvatar) {
            if (pictureUrl && isValidImageUrl(pictureUrl)) {
                console.log('✅ Setting menu avatar from validated URL');
                // 🔐 SECURITY: Use safe DOM methods instead of innerHTML with inline onerror
                menuUserAvatar.innerHTML = ''; // Clear container
                const img = document.createElement('img');
                img.src = pictureUrl;
                img.alt = userName;
                img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 50%;';
                img.onerror = () => {
                    // If image fails, don't clear parent (keep default SVG)
                    console.warn('Failed to load menu avatar image');
                };
                menuUserAvatar.appendChild(img);
            } else {
                console.log('⚠️ No picture or invalid URL for menu avatar');
                // Keep default SVG (don't clear it)
            }
        }
    } else {
        if (menuUserName) menuUserName.textContent = 'Guest User';
        if (menuUserEmail) menuUserEmail.textContent = 'unknown@gmail.com';
        if (profileNameDisplay) profileNameDisplay.textContent = 'Guest User';
        if (emailDisplay) emailDisplay.textContent = 'unknown@gmail.com';
    }
    
    // Also update the profile dropdown
    updateProfileDropdown();
}

function initUserMenu() {
    console.log('initUserMenu called');
    console.log('Document ready state:', document.readyState);
    
    userMenuPanel = document.getElementById('userMenuPanel');
    userMenuBackdrop = document.getElementById('userMenuBackdrop');
    const closeUserMenuBtn = document.getElementById('closeUserMenu');
    
    console.log('Elements found:', { 
        userMenuPanel: !!userMenuPanel, 
        userMenuBackdrop: !!userMenuBackdrop, 
        closeUserMenuBtn: !!closeUserMenuBtn
    });
    
    // Menu items
    const menuSubscription = document.getElementById('menuSubscription');
    const menuPreferences = document.getElementById('menuPreferences');
    const menuHelp = document.getElementById('menuHelp');
    const menuFeedback = document.getElementById('menuFeedback');
    const menuLogout = document.getElementById('menuLogout');
    const menuViewProfile = document.getElementById('menuViewProfile');
    const menuMyContent = document.getElementById('menuMyContent');
    
    // Account header buttons
    const editProfileNameBtn = document.getElementById('editProfileNameBtn');
    const editEmailBtn = document.getElementById('editEmailBtn');
    const changePasswordBtn = document.getElementById('changePasswordBtn');
    
    // Check if elements exist
    if (!userMenuPanel) {
        console.error('menu: ERROR - userMenuPanel not found!');
        return;
    }

    // Update profile button with user avatar
    updateProfileButton();
    
    // Update profile dropdown
    updateProfileDropdown();
    
    // Load and set current user data from backend
    loadAndSetCurrentUser();
    if (closeUserMenuBtn) {
        console.log('Close button found, attaching listener');
        closeUserMenuBtn.addEventListener('click', (e) => {
            console.log('Close button clicked');
            e.stopPropagation();
            closeUserMenuPanel();
        });
    } else {
        console.warn('Close button element not found with ID: closeUserMenu');
    }

    if (userMenuBackdrop) {
        userMenuBackdrop.addEventListener('click', closeUserMenuPanel);
    }

    if (menuPreferences) {
        menuPreferences.addEventListener('click', () => {
            console.log('Preferences clicked');
            // TODO: Show preferences modal or separate section
        });
    }
    
    // Preferences toggles
    const notificationsToggle = document.getElementById('notificationsToggle');
    if (notificationsToggle) {
        notificationsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Notifications toggle clicked');
            notificationsToggle.classList.toggle('active');
            // Get the slider div
            const slider = notificationsToggle.querySelector('div');
            if (slider) {
                if (notificationsToggle.classList.contains('active')) {
                    slider.style.right = '3px';
                } else {
                    slider.style.right = '21px';
                }
            }
            // TODO: Save preference to backend
        });
    }
    
    // Initialize notifications toggle state
    if (notificationsToggle && notificationsToggle.classList.contains('active')) {
        const slider = notificationsToggle.querySelector('div');
        if (slider) slider.style.right = '3px';
    }
    
    // Account header button handlers
    if (editProfileNameBtn) {
        editProfileNameBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Edit profile name clicked');
            // TODO: Show profile name edit modal
        });
    }
    
    if (editEmailBtn) {
        editEmailBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Edit email clicked');
            // TODO: Show email edit modal
        });
    }
    
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Change password clicked');
            // TODO: Show password change modal
        });
    }

    if (menuHelp) {
        menuHelp.addEventListener('click', () => {
            closeUserMenuPanel();
            // Open Discord help center
            window.open('https://discord.gg/vtPJtQhjNy', '_blank');
        });
    }

    if (menuFeedback) {
        menuFeedback.addEventListener('click', () => {
            closeUserMenuPanel();
            // Open feedback form
            console.log('Open feedback');
            // TODO: Show feedback modal
        });
    }

    if (menuViewProfile) {
        menuViewProfile.addEventListener('click', () => {
            closeUserMenuPanel();
            // Navigate to profile page
            window.location.href = '/dashboard.html';
        });
    }

    if (menuMyContent) {
        menuMyContent.addEventListener('click', () => {
            closeUserMenuPanel();
            // Navigate to library/content page
            console.log('View my content');
            // TODO: Navigate to content library
        });
    }

    if (menuLogout) {
        menuLogout.addEventListener('click', async () => {
            closeUserMenuPanel();
            
            // Clear user-specific data from dashboard
            try {
                if (typeof clearUserData === 'function') {
                    clearUserData();
                }
            } catch (e) {
                console.error('Error clearing user data:', e);
            }
            
            // Perform logout
            console.log('🔐 Logging out...');
            try {
                // Clear localStorage
                localStorage.removeItem('authToken');
                localStorage.removeItem('currentUser');
                const keys = Object.keys(localStorage);
                keys.forEach(key => {
                    if (key.includes('solisai_') || key.includes('auth') || key.includes('user')) {
                        localStorage.removeItem(key);
                    }
                });
                
                // Clear sessionStorage
                sessionStorage.clear();
                
                // Call logout endpoint
                if (window.API_BASE_URL) {
                    await fetch(`${window.API_BASE_URL}/auth/logout`, { 
                        method: 'POST', 
                        credentials: 'include'
                    });
                }
            } catch (e) {
                console.warn('⚠️ Logout API call failed:', e);
            }
            
            // Redirect to login with logout flag
            console.log('📍 Redirecting to login...');
            window.location.href = '/login.html?logout=1';
        });
    }

    // Close on ESC key - DISABLED
    // document.addEventListener('keydown', (e) => {
    //     if (e.key === 'Escape' && userMenuPanel.classList.contains('active')) {
    //         closeUserMenuPanel();
    //     }
    // });
    
    // Listen for localStorage changes (when user logs in/out)
    window.addEventListener('storage', (e) => {
        if (e.key === 'currentUser') {
            console.log('currentUser changed in localStorage, updating profile button');
            updateProfileButton();
        }
    });
    
    // Hook into login/logout events
    document.addEventListener('user-login', () => {
        console.log('User logged in, updating profile button');
        updateProfileButton();
    });
    
    document.addEventListener('user-logout', () => {
        console.log('User logged out, resetting profile button');
        updateProfileButton();
    });
    
    // Expose to window for debugging
    window.solisMenuDebug = {
        openUserMenu,
        closeUserMenuPanel,
        userMenuPanel,
        userMenuBackdrop,
        updateProfileButton,
        closeUserMenuBtn
    };
}


// Subscription modal functions removed

// Auto-initialize the user menu when the DOM is ready
let menuInitialized = false;

function initializeMenu() {
    if (menuInitialized) {
        console.log('Menu already initialized, skipping');
        return;
    }
    menuInitialized = true;
    
    console.log('Initializing menu system');
    initUserMenu();
}

// Ensure menu initializes exactly once
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMenu);
} else {
    // Document already loaded
    initializeMenu();
}
