/**
 * 🔐 SECURITY ARCHITECTURE
 * 
 * FRONTEND RESPONSIBILITIES (UI Layer Only):
 * ------------------------------------
 * - Display user interface based on authenticated user status (from backend)
 * - Show/hide UI elements based on user subscription level
 * - Render content based on real-time data fetched from backend
 * 
 * NOT FRONTEND RESPONSIBILITIES (Must be done on Backend):
 * ---------------------------------------------------
 * - Authenticating users (done via httpOnly session cookies)
 * - Authorizing API requests (backend SESSION verification required)
 * - Checking subscription levels for API actions
 * - Enforcing rate limits, storage limits, and feature access
 * - Validating and sanitizing all user input (URLs, text, files)
 * - Verifying project ownership before delete/download/edit (IDOR PREVENTION)
 * - Fetching and returning user data are done via httpOnly cookie
 * 
 * CRITICAL RULES:
 * ===============
 * 1. Do NOT store user data (plan, email, ID) in localStorage
 *    → Use memory-only variables for UI state
 *    → Fetch from backend on every page load via verifyToken()
 * 
 * 2. Do NOT trust any client-side variables for authorization
 *    → Backend MUST check user session and permissions on EVERY API call
 *    → Never accept plan/role/permission info from JavaScript
 *    → Attackers can always modify projectId/userId in frontend network requests
 * 
 * 3. Do NOT perform URL validation or assume safe URLs
 *    → Regex validation is weak and can be bypassed
 *    → Backend MUST validate URLs against strict whitelist (YouTube URLs only)
 *    → Never pass raw URLs to shell commands on backend
 * 
 * 4. Always use safe DOM methods to prevent XSS
 *    → Use textContent instead of innerHTML for user data
 *    → Use createElement() + appendChild() instead of innerHTML injections
 *    → Never inject unsanitized URLs/user data into HTML strings
 * 
 * 5. Always include CSRF tokens for state-changing requests
 *    → Use getCSRFToken() to fetch token from meta tag or cookie
 *    → Include in X-CSRF-Token header for POST/PUT/DELETE
 * 
 * 6. Use safeLog() instead of console.log in production
 *    → Disable via CONFIG.SECURITY.MAX_CONSOLE_LOGS = 0
 *    → console.log exposes application structure to attackers
 *    → Only use for development debugging
 */

window.API_BASE_URL = 'http://127.0.0.1:5500/api';

// Cooldown timer state
let cooldownTimer = null;

/**
 * Start countdown timer on submit button
 * Shows remaining seconds and disables button until countdown completes
 */
function startCooldownTimer(remainingSeconds) {
    const submitBtn = document.getElementById('processUrlBtn');
    if (!submitBtn) return;
    
    // Cancel any existing timer
    if (cooldownTimer) {
        clearInterval(cooldownTimer);
    }
    
    let secondsLeft = Math.max(0, remainingSeconds);
    const originalText = '<i class="fas fa-arrow-right"></i>';
    
    // Immediately show first countdown
    submitBtn.disabled = true;
    submitBtn.classList.add('is-generating');
    submitBtn.style.opacity = '0.5';
    submitBtn.style.cursor = 'not-allowed';
    submitBtn.innerHTML = `${secondsLeft}s`;
    submitBtn.style.fontSize = '0.85em';
    
    // Decrement timer every second
    cooldownTimer = setInterval(() => {
        secondsLeft--;
        
        if (secondsLeft > 0) {
            // Update button text with remaining seconds
            submitBtn.innerHTML = `${secondsLeft}s`;
        } else {
            // Timer complete - re-enable button
            clearInterval(cooldownTimer);
            cooldownTimer = null;
            submitBtn.disabled = false;
            submitBtn.classList.remove('is-generating');
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            submitBtn.innerHTML = originalText;
            submitBtn.style.fontSize = '1em';
        }
    }, 1000);
}

const workspacePanel = document.getElementById('solisWorkspacePanel');
const closeWorkspaceBtn = workspacePanel?.querySelector('.solis-close-btn');

const appContainer = document.getElementById('appContainer');
const sidebar = document.querySelector('.sidebar');
const userProfile = document.getElementById('userProfile');
const userMenu = document.getElementById('userMenu');
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');
const darkModeSettingsToggle = document.getElementById('darkModeSettingsToggle');

const upgradeModal = document.getElementById('upgradeModal');
const closeUpgrade = document.getElementById('closeUpgrade');
const upgradeSettingsBtn = document.getElementById('upgradeSettingsBtn');

const tokenCount = document.querySelector('.token-count');
const navItems = document.querySelectorAll('.nav-item');
const signInBtn = document.getElementById('signInBtn');
const signInDisplay = document.querySelector('.nav-item.sign-in');

let isRecording = false;
let mediaRecorder = null;
let audioChunks = [];
let isGenerating = false;
let currentTheme = 'light';
let tokens = 1500;
// ❌ REMOVED: chatHistory - sensitive data should NOT be stored in localStorage
// SECURITY: Use sessionStorage only for non-sensitive temporary data
let currentChatId = null;
let currentAbortController = null;
let uploadedFiles = [];
let currentUser = null;
// 🔐 SECURITY: Authentication via httpOnly cookies only - NEVER use localStorage for tokens
let promptCount = 0; // Track number of prompts for centering first one
let solisWSClient = null; // WebSocket client for real-time updates

// Splitscreen Gameplay Selection
let selectedGameplayClip = 'minecraft_1'; // Default gameplay clip
let availableGameplayClips = [];


// Load available gameplay clips for splitscreen template
function toggleNavWrapperCollapse(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const navWrapper = document.getElementById('navWrapper');
    if (!navWrapper) return;

    const isCollapsing = !navWrapper.classList.contains('collapsed');

    if (isCollapsing) {
        // Stagger the nav items out before collapsing pill
        const items = navWrapper.querySelectorAll('.nav-item:not(.nav-collapse-toggle)');
        items.forEach((item, i) => {
            item.style.transitionDelay = `${i * 30}ms`;
        });
        navWrapper.classList.add('collapsed');
        // Clear delays after anim
        setTimeout(() => items.forEach(item => item.style.transitionDelay = ''), 400);
    } else {
        // Expand pill first, then stagger items in
        navWrapper.classList.remove('collapsed');
        const items = navWrapper.querySelectorAll('.nav-item:not(.nav-collapse-toggle)');
        items.forEach((item, i) => {
            item.style.transitionDelay = `${i * 40}ms`;
        });
        setTimeout(() => items.forEach(item => item.style.transitionDelay = ''), 400);
    }
}

// Clips Expansion Functions
function toggleClipsExpansion(event) {
    event.preventDefault();
    event.stopPropagation();
    const clipsExpansion = document.getElementById('clipsExpansionActions');
    if (clipsExpansion) {
        clipsExpansion.classList.toggle('expanded');
    }
}

function closeClipsExpansion() {
    const clipsExpansion = document.getElementById('clipsExpansionActions');
    if (clipsExpansion) {
        clipsExpansion.classList.remove('expanded');
    }
}

function navigateToClipsTemplates() {
    closeClipsExpansion();
    const templatesTab = document.querySelector('[data-tab="templates"]');
    if (templatesTab) {
        templatesTab.click();
    } else {
        // Navigate to templates
    }
}

function navigateToClipsCreate() {
    closeClipsExpansion();
    // Navigate to clips creation section
    const clipsNav = document.querySelector('.chips-nav-item');
    if (clipsNav) {
        handleNav(clipsNav, 3);
    }
}

function navigateToClipsLibrary() {
    closeClipsExpansion();
    const libraryTab = document.querySelector('[data-tab="library"]');
    if (libraryTab) {
        libraryTab.click();
    }
}

// Ensure multiple modules can request the input to be docked
function dockInputInstantly() {
    const inputSection = document.querySelector('.input-section');
    const inputContainer = inputSection ? inputSection.querySelector('.input-container') : null;
    const currentIndex = parseInt(localStorage.getItem('sidebarActiveIndex') || '0');
    
    if (inputContainer) {
        inputContainer.classList.remove('first-prompt', 'animate-down', 'animate-up');
    }
    if (inputSection) {
        inputSection.classList.remove('is-first-prompt');
        
        // Only keep visible if on chat tab
        if (currentIndex === 0) {
            inputSection.style.cssText = 'display: flex !important; visibility: visible !important; opacity: 1 !important; pointer-events: all !important; z-index: 1000 !important;';
        } else {
            inputSection.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; z-index: -10000 !important;';
        }
    }
}
// expose for other scripts to call safely
window.dockInputInstantly = dockInputInstantly;

/**
 * Initialize authentication on page load
 * Call this on dashboard and other authenticated pages
 */
function initAuth() {
    safeLog('[Auth] Initializing authentication...');
    
    // Verify token with backend - this will fetch and set currentUser from verified server data
    verifyToken().then((success) => {
        // Token verified (whether successful or fallback mode)
        if (currentUser) {
            safeLog('[Auth] User authenticated:', currentUser.email);
            if (typeof updateProfileButton === 'function') {
                updateProfileButton();
            }
        } else {
            safeLog('[Auth] User not authenticated, showing guest UI');
            updateUIForGuest();
        }
    }).catch(error => {
        // verifyToken already handles errors, this catch is for unexpected issues
        safeLog('[Auth] Unexpected error during initialization:', error);
        updateUIForGuest();
    });
    
    safeLog('[Auth] Initialization started');
}

// 🔐 SECURITY: Sanitize error messages to prevent info leakage
// Never expose error.message, stack traces, or file paths to users
function sanitizeErrorMessage(error) {
    if (!error) return 'Unknown error';
    
    // Extract only safe parts of error
    const message = String(error.message || error).trim();
    const allowedKeywords = ['timeout', 'network', 'failed', 'unauthorized', 'not found', 'invalid', 'error'];
    
    // Check if message contains only safe words (case-insensitive)
    const lowerMsg = message.toLowerCase();
    if (allowedKeywords.some(kw => lowerMsg.includes(kw))) {
        // Limit length to prevent DoS via error message
        return message.substring(0, 100);
    }
    
    // Default safe message - don't expose implementation details
    return 'An error occurred';
}

// 🔐 SECURITY: Input validation helper - enforce length limits to prevent DoS attacks
function validateInputLength(input, maxLength = 1000, fieldName = 'input') {
    if (typeof input !== 'string') {
        return { valid: false, error: `${fieldName} must be a string` };
    }
    if (input.length > maxLength) {
        return { valid: false, error: `${fieldName} exceeds ${maxLength} character limit` };
    }
    if (input.length === 0) {
        return { valid: false, error: `${fieldName} cannot be empty` };
    }
    return { valid: true, value: input.trim() };
}

// 🔐 SECURITY: Safe URL validation with length limits to prevent DoS
function validateURLInput(urlString, maxLength = 512) {
    const validation = validateInputLength(urlString, maxLength, 'URL');
    if (!validation.valid) {
        return validation;
    }
    
    try {
        const urlToValidate = validation.value.startsWith('http') ? validation.value : 'https://' + validation.value;
        const url = new URL(urlToValidate);
        // URL is syntactically valid
        return { valid: true, value: validation.value };
    } catch (e) {
        return { valid: false, error: 'Invalid URL format' };
    }
}

// 🔐 SECURITY: CSRF Protection Helper
// The backend should send a CSRF token via a meta tag, cookie, or initial page load
// CRITICAL: Ensure backend cookies have SameSite=Strict attribute
function getCSRFToken() {
    // First, try to get from meta tag (recommended approach)
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    
    // 🔐 SECURITY: Validate token format to prevent placeholder/empty values
    // Tokens must be secure random strings of at least 32 chars (base64/hex)
    if (!token || token === 'placeholder' || token.length < 32) {
        // SECURITY WARNING: CSRF token is invalid or missing
        safeLog('⚠️ WARNING: CSRF token is missing or invalid (<32 chars). Ensure:');
        safeLog('   1. Backend sends valid CSRF token in meta tag');
        safeLog('   2. Backend sets SameSite=Strict on auth cookie');
        safeLog('   3. Backend validates CSRF token on state-changing requests');
        // Fallback: Check for XSRF-TOKEN cookie (common pattern)
        // ⚠️ NOTE: Cookies MUST have SameSite=Strict attribute for security
        const name = 'XSRF-TOKEN=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let cookie of cookieArray) {
            cookie = cookie.trim();
            if (cookie.startsWith(name)) {
                const cookieToken = cookie.substring(name.length);
                // Validate cookie token format - must be at least 32 chars
                if (cookieToken && cookieToken.length >= 32 && cookieToken !== 'placeholder') {
                    return cookieToken;
                }
            }
        }
        // No valid token found
        safeLog('⚠️ CSRF token not properly configured in meta tag or cookies');
        return '';
    }
    
    return token;
}

function getAuthHeaders(includeCSRF = true) {
    // 🔐 SECURITY: Include CSRF token for state-changing requests
    // Browser automatically sends httpOnly cookie with all requests to same domain
    const headers = {
        'Content-Type': 'application/json'
    };
    
    // Include CSRF token if available
    if (includeCSRF) {
        const csrfToken = getCSRFToken();
        if (csrfToken) {
            headers['X-CSRF-Token'] = csrfToken;
        }
    }
    
    return headers;
}

// Use getAuthHeaders() for all authenticated requests
// This is the only headers function needed - getHeaders() is deprecated
// All API calls should use getAuthHeaders() for CSRF protection

// Initialize CSRF token from backend endpoint
// This replaces the "placeholder" value in the meta tag with a real secure token
async function initializeCSRFToken() {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/csrf-token`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        
        if (!response.ok) {
            safeLog('⚠️ Failed to fetch CSRF token:', response.status);
            return false;
        }
        
        const data = await response.json();
        if (data.csrf_token && data.csrf_token.length >= 32) {
            // Update meta tag with real token
            const metaTag = document.querySelector('meta[name="csrf-token"]');
            if (metaTag) {
                metaTag.setAttribute('content', data.csrf_token);
                safeLog('✅ CSRF token initialized successfully');
                return true;
            }
        }
    } catch (error) {
        safeLog('Error initializing CSRF token:', error);
    }
    return false;
}

// Initialize CSRF token as soon as DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCSRFToken);
} else {
    // DOM is already loaded
    initializeCSRFToken();
}

async function verifyToken() {
    try {
        // 🔐 SECURITY: Verify token with backend - httpOnly cookie sent automatically
        const response = await fetch(`${API_BASE_URL}/auth/verify`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'  // Ensure cookies are sent with this request
        });
        
        if (!response.ok) {
            // Log detailed error server-side, show generic to user
            safeLog('Auth verification error:', response.status);
            throw new Error('Authentication verification failed');
        }
        
        const data = await response.json();
        // ⚠️ SECURITY: Set user data from backend ONLY - never rely on localStorage
        currentUser = data.user;
        // Sync with window.currentUser for menu.js (memory only, not persisted to localStorage)
        window.currentUser = currentUser;
        
        // Update UI with authenticated user
        updateUIForLoggedInUser();
        
        // Update profile button with fresh user data from server
        if (typeof updateProfileButton === 'function') {
            setTimeout(() => updateProfileButton(), 0);
        }
        // Update menu user info (name, email, avatar)
        if (typeof updateMenuUserInfo === 'function') {
            updateMenuUserInfo();
        }
        // Update profile dropdown with fresh user data
        if (typeof updateProfileDropdown === 'function') {
            updateProfileDropdown(currentUser).catch(e => console.warn('Profile dropdown update error:', e));
        }
        // Check YouTube connection status with updated user data
        checkYouTubeConnection();
        // ✅ IMPORTANT: Await loadTierInfo() so subscription data is available before dashboard loads
        await loadTierInfo();
    } catch (error) {
        safeLog('[Auth] Verification error:', error.message);
        
        // If token is definitively invalid (401/403), redirect to login
        if (error.message && (error.message.includes('Token invalid') || error.message.includes('401') || error.message.includes('403'))) {
            safeLog('[Auth] Token is invalid, redirecting to login in 2 seconds');
            // Clear memory ONLY (not localStorage)
            currentUser = null;
            window.currentUser = null;
            
            // Give the user a moment to see the current page before redirecting
            setTimeout(() => {
                window.location.href = '/login.html';
            }, 2000);
        } else {
            // Network error or other non-auth error - show message but allow access
            safeLog('[Auth] Network error, allowing guest access:', error.message);
            updateUIForGuest();
            if (typeof showNotification === 'function') {
                showNotification('⚠️ Could not verify session. Continuing in guest mode.', 'warning');
            }
        }
        throw error;
    }
}

function updateUIForLoggedInUser() {
    const userName = document.querySelector('.user-name');
    const userEmail = document.querySelector('.user-email');
    const userAvatar = document.querySelector('.user-avatar');
    
    if (userName) userName.textContent = currentUser.name;
    if (userEmail) userEmail.textContent = currentUser.email;
    
    // Update user avatar with Google profile picture or default
    if (userAvatar) {
        if (currentUser.picture) {
            // 🔐 SECURITY: Use createElement to safely set image src without innerHTML
            const img = document.createElement('img');
            img.src = currentUser.picture;  // URL from verified backend data
            img.alt = currentUser.name;
            img.style.cssText = 'width: 100%; height: 100%; border-radius: 50%; object-fit: cover;';
            userAvatar.innerHTML = '';  // Clear any existing content
            userAvatar.appendChild(img);
        } else {
            userAvatar.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 21a8 8 0 0 1 11.873-7"/>
                    <circle cx="10" cy="8" r="5"/>
                    <path d="m17 17 5 5"/>
                    <path d="m22 17-5 5"/>
                </svg>
            `;
        }
    }
    
    if (signInDisplay) signInDisplay.style.display = 'none';
    
    if (signInBtn) {
        signInBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i><span>Sign out</span>';
        signInBtn.onclick = logout;
    }
    
    updateSettingsForLoggedInUser();
}

function updateUIForGuest() {
    const userName = document.querySelector('.user-name');
    const userEmail = document.querySelector('.user-email');
    const userAvatar = document.querySelector('.user-avatar');
    
    if (userName) userName.textContent = 'Guest User';
    if (userEmail) userEmail.textContent = 'Sign in to continue';
    if (userAvatar) {
        userAvatar.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 21a8 8 0 0 1 11.873-7"/>
                <circle cx="10" cy="8" r="5"/>
                <path d="m17 17 5 5"/>
                <path d="m22 17-5 5"/>
            </svg>
        `;
    }
    
    if (signInDisplay) signInDisplay.style.display = 'flex';
    
    if (signInBtn) {
        signInBtn.innerHTML = '<i class="fas fa-sign-in"></i><span>Sign in</span>';
        signInBtn.onclick = redirectToLogin;
    }
    
    updateSettingsForGuest();
}

function updateSettingsForLoggedInUser() {
    const accountOption = document.querySelector('.settings-option .option-name');
    const accountDescription = document.querySelector('.settings-option .option-description');
    
    if (accountOption) accountOption.textContent = 'Account Settings';
    if (accountDescription) accountDescription.textContent = `Signed in as ${currentUser.email}`;
    
    // Fetch and update subscription status
    fetchAndUpdateSubscriptionStatus();
}

async function fetchAndUpdateSubscriptionStatus() {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/subscription?t=${Date.now()}`, {
            method: 'GET',
            headers: getAuthHeaders(),
            credentials: 'include',  // ✅ Send httpOnly cookie
            cache: 'no-store'
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch subscription info');
        }
        
        const data = await response.json();
        
        if (data.success && data.subscription) {
            const subscription = data.subscription;
            
            // ⚠️ SECURITY: Update UI only, do NOT persist plan to localStorage
            // The backend must enforce plan restrictions on every API call
            window.tier = subscription.plan;  // Memory only, for reference
            
            // Find and update the subscription status section
            const subscriptionElements = document.querySelectorAll('.settings-option');
            
            subscriptionElements.forEach((option) => {
                const optionName = option.querySelector('.option-name');
                if (optionName && optionName.textContent === 'Subscription Status') {
                    const optionDescription = option.querySelector('.option-description');
                    if (optionDescription) {
                        // Format the subscription status text
                        const statusText = `${subscription.plan_name} Plan - ${subscription.videos_per_day_limit} videos/day, ${subscription.storage_limit_gb}GB storage`;
                        optionDescription.textContent = statusText;
                    }
                }
                
                // Also update Current Plan if it exists
                if (optionName && optionName.textContent === 'Current Plan') {
                    const optionDescription = option.querySelector('.option-description');
                    if (optionDescription) {
                        optionDescription.textContent = subscription.plan_name;
                    }
                }
            });
        }
    } catch (error) {
        // Fallback to showing "Free Plan"
        const subscriptionElements = document.querySelectorAll('.settings-option');
        subscriptionElements.forEach((option) => {
            const optionName = option.querySelector('.option-name');
            if (optionName && optionName.textContent === 'Subscription Status') {
                const optionDescription = option.querySelector('.option-description');
                if (optionDescription) {
                    optionDescription.textContent = 'Free Plan - Limited access';
                }
            }
        });
    }
}

function updateSettingsForGuest() {
    const accountOption = document.querySelector('.settings-option .option-name');
    const accountDescription = document.querySelector('.settings-option .option-description');
    
    if (accountOption) accountOption.textContent = 'Sign in?';
    if (accountDescription) accountDescription.textContent = 'Want to unlock full feature access? Sign in today';
}

function redirectToLogin() {
    window.location.href = '/login.html';
}

function logout() {
    // Clear memory-based auth variables only
    // ⚠️ SECURITY: httpOnly cookies are automatically cleared by browser on logout request
    // Do NOT manually clear localStorage as it may contain non-auth UI state
    currentUser = null;
    
    updateUIForGuest();
    clearChat();
    
    // Dispatch user disconnected event for feature gatekeepers
    window.dispatchEvent(new CustomEvent('userDisconnected', { detail: {} }));
    
    showNotification('Signed out successfully', 'success');
    redirectToLogin();
}

// ⚠️ DEPRECATED: Use getAuthHeaders() instead
// This function exists for backward compatibility only
function getHeaders() {
    // 🔐 SECURITY: No longer need to add Authorization header
    // httpOnly cookie is sent automatically by browser with each request
    // NOTE: This doesn't include CSRF token - use getAuthHeaders() for safety
    console.warn('⚠️ DEPRECATED: getHeaders() called - use getAuthHeaders() instead for CSRF protection');
    return getAuthHeaders(true);
}

// Load available gameplay clips for splitscreen template
async function loadAvailableGameplayClips() {
    try {
        const response = await fetch('/api/gameplay/available', {
            method: 'GET',
            headers: getHeaders()
        });

        if (response.ok) {
            const data = await response.json();
            availableGameplayClips = data.clips || [];
            return availableGameplayClips;
        } else {
            // ⚠️ SECURITY: Do NOT silently provide fake fallback data
            // This masks backend errors and misleads users
            safeLog('Failed to load gameplay clips from backend');
            availableGameplayClips = [];
            return availableGameplayClips;
        }
    } catch (error) {
        // ⚠️ SECURITY: Log error properly - do NOT use hardcoded fallback data
        safeLog('❌ Error loading gameplay clips:', error);
        availableGameplayClips = [];
        return availableGameplayClips;
    }
}

// Load tier info and display in portal card
async function loadTierInfo() {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/subscription`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'  // Ensure cookies are sent with this request
        });

        if (response.ok) {
            const data = await response.json();
            const subscription = data.subscription;
            
            // ⚠️ SECURITY: Do NOT store subscription in localStorage. 
            // Backend enforces plan on every API request. Frontend only displays UI.
            
            // Update plan name (capitalize the first letter)
            const tierElement = document.getElementById('currentTier');
            if (tierElement) {
                const planName = subscription.plan_name || subscription.plan;
                tierElement.textContent = planName.charAt(0).toUpperCase() + planName.slice(1);
            }
            
            // Update expiry info
            const expiryElement = document.getElementById('currentTierExpiry');
            if (expiryElement) {
                if (subscription.plan === 'free') {
                    // Free tier has no expiry
                    expiryElement.textContent = 'Lifetime';
                } else if (subscription.plan_expires_at) {
                    // Calculate days until expiry
                    const expiryDate = new Date(subscription.plan_expires_at);
                    const today = new Date();
                    const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
                    
                    if (daysUntilExpiry < 0) {
                        expiryElement.textContent = 'Expired';
                    } else if (daysUntilExpiry === 0) {
                        expiryElement.textContent = 'Expires today';
                    } else if (daysUntilExpiry === 1) {
                        expiryElement.textContent = 'Expires tomorrow';
                    } else {
                        expiryElement.textContent = `Expires in ${daysUntilExpiry} days`;
                    }
                } else {
                    expiryElement.textContent = '';
                }
            }
            
            // ✅ Trigger dashboard storage badge update if it's loaded
            if (typeof updateStorageDisplayOnDashboard === 'function') {
                // Storage display updated with subscription info from backend
                updateStorageDisplayOnDashboard(subscription);
            }
            
            return subscription;
        } else {
            safeLog('⚠️ Could not load tier info');
        }
    } catch (error) {
        safeLog('❌ Error loading tier info:', error);
    }
}

// Show gameplay clip selector for splitscreen
function showGameplayClipSelector(event) {
    safeLog('🎮 Gameplay selector clicked!');
    
    if (availableGameplayClips.length === 0) {
        safeLog('Loading gameplay clips...');
        loadAvailableGameplayClips();
    }

    // Get click position
    const clickX = event ? event.clientX : window.innerWidth / 2;
    const clickY = event ? event.clientY : window.innerHeight / 2;

    // Open the pill container and show gameplay view
    setTimeout(() => {
        if (window.showGameplayPanel) {
            // Gameplay panel opening
            window.showGameplayPanel(clickX, clickY);
        } else {
            safeLog('❌ showGameplayPanel not available');
        }
    }, 100);
}

function selectGameplayClip(clipId) {
    selectedGameplayClip = clipId;
    // Gameplay clip selection processed
}

// Initialize draggable divider for split screen
function initializeSplitscreenDivider() {
    const divider = document.getElementById('splitscreenDivider');
    const dividerLine = document.getElementById('dividerLine');
    const dividerHandle = document.getElementById('dividerHandle');
    
    // Check that all required elements exist
    if (!divider || !dividerLine || !dividerHandle) {
        safeLog('⚠️ Missing divider elements');
        return;
    }
    
    let isDragging = false;
    let isExpandedMode = false; // false = normal split, true = gameplay expanded (top hidden)
    
    divider.addEventListener('mouseenter', () => {
        if (!isDragging) {
            dividerLine.style.background = 'rgba(255, 107, 0, 0.8)';
            dividerLine.style.height = '3px';
            if (dividerHandle) {
                dividerHandle.style.opacity = '1';
                dividerHandle.style.background = 'rgba(255, 107, 0, 0.8)';
            }
        }
    });
    
    divider.addEventListener('mouseleave', () => {
        if (!isDragging) {
            dividerLine.style.background = 'rgba(255, 255, 255, 0.4)';
            dividerLine.style.height = '2px';
            if (dividerHandle) {
                dividerHandle.style.opacity = '0';
            }
        }
    });
    
    divider.addEventListener('mousedown', (e) => {
        isDragging = true;
        if (dividerHandle) {
            dividerHandle.style.opacity = '1';
            dividerHandle.style.background = 'rgba(255, 107, 0, 1)';
        }
        
        const container = divider.parentElement;
        const topSection = container.children[0];
        const bottomSection = container.children[2];
        
        const startY = e.clientY;
        const containerHeight = container.offsetHeight;
        let dragDistance = 0;
        
        const handleMouseMove = (moveEvent) => {
            dragDistance = moveEvent.clientY - startY;
            // Show preview of where it will snap
            const threshold = containerHeight * 0.15; // 15% drag = snap
            
            if (dragDistance < -threshold) {
                // Dragging up - approaching expanded mode
                topSection.style.opacity = '0.5';
                bottomSection.style.opacity = '1';
            } else if (dragDistance > threshold) {
                // Dragging down - approaching normal mode
                topSection.style.opacity = '1';
                bottomSection.style.opacity = '0.5';
            } else {
                // Reset opacity
                topSection.style.opacity = '1';
                bottomSection.style.opacity = '1';
            }
        };
        
        const handleMouseUp = () => {
            isDragging = false;
            dividerLine.style.background = 'rgba(255, 255, 255, 0.4)';
            dividerLine.style.height = '2px';
            if (dividerHandle) {
                dividerHandle.style.opacity = '0';
            }
            
            // Determine which mode to snap to
            const threshold = containerHeight * 0.15;
            
            if (dragDistance < -threshold) {
                // Snap to expanded gameplay mode (top hidden)
                isExpandedMode = true;
                topSection.style.flex = '0';
                topSection.style.display = 'none';
                bottomSection.style.flex = '1';
            } else {
                // Snap back to normal split mode (default)
                isExpandedMode = false;
                topSection.style.flex = '1';
                topSection.style.display = 'flex';
                bottomSection.style.flex = '1';
            }
            
            // Reset opacity
            topSection.style.opacity = '1';
            bottomSection.style.opacity = '1';
            
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });
}

// Call when template is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeSplitscreenDivider();
    }, 500);
});

// Also try to init when element becomes available (for dynamic content)
const dividerInitCheck = setInterval(() => {
    const divider = document.getElementById('splitscreenDivider');
    if (divider && !divider.hasAttribute('data-initialized')) {
        divider.setAttribute('data-initialized', 'true');
        initializeSplitscreenDivider();
        clearInterval(dividerInitCheck);
    }
}, 100);

function closeGameplayClipSelector() {
    // Just close the panel
}

function confirmGameplayClip() {
    // Gameplay clip updated
    closeGameplayClipSelector();
    showNotification(`Selected: ${availableGameplayClips.find(c => c.id === selectedGameplayClip)?.title}`, 'success');
}

function showNotification(message, type = 'info') {
    // Create notification element if it doesn't exist
    let notification = document.querySelector('.notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.className = `notification ${type} show`;
    
    // SECURITY: Create safe HTML structure, then set message as text content
    const iconType = type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${iconType}-circle"></i>
            <span id="notificationMessage"></span>
        </div>
    `;
    
    // Use textContent to prevent XSS
    document.getElementById('notificationMessage').textContent = message;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, CONFIG.UI.NOTIFICATION_DURATION_MS);
}

// Handle Google OAuth callback
function handleGoogleCallback() {
    // 🔐 SECURITY: Token is now set as httpOnly cookie by backend
    // No token in URL needed - just verify with server
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check if we have auth error
    const error = urlParams.get('error');
    if (error) {
        safeLog('OAuth error:', error);
        showNotification('Authentication failed: ' + error, 'error');
        setTimeout(() => window.location.href = '/login.html', 2000);
        return;
    }
    
    // Server has already set httpOnly cookie - verify it and get user info
    verifyToken().then(() => {
        // Dispatch user connected event for feature gatekeepers
        window.dispatchEvent(new CustomEvent('userConnected', { detail: { user: currentUser } }));
        
        // Clear URL params and go to dashboard
        window.history.replaceState({}, document.title, window.location.pathname);
        window.location.href = '/dashboard.html';
    }).catch(() => {
        safeLog('❌ Authentication verification failed');
        showNotification('Authentication failed. Please try again.', 'error');
        setTimeout(() => window.location.href = '/login.html', 2000);
    });
}

function parseMarkdown(text) {
    // 🔐 SECURITY: Sanitize input before markdown parsing to prevent HTML injection
    // Escape HTML special characters first, then apply markdown formatting
    const sanitized = sanitizeHTML(text);
    return sanitized
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

// Initialize the application
function init() {
    // Initialize theme immediately before anything else
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    currentTheme = savedTheme;
    
    // Check if we're handling a Google callback
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
        handleGoogleCallback();
        return;
    }
    
    initAuth();
    
    // Ensure profile button is updated after auth is initialized
    setTimeout(() => {
        if (typeof updateProfileButton === 'function') {
            updateProfileButton();
        }
    }, 100);

    // ❌ REMOVED: Never load chat history from localStorage
    // SECURITY: Chat history contains user prompts, URLs, and sensitive info
    // localStorage is accessible to any script on the domain (XSS vulnerability)
    // Solution: Store sensitive data server-side only, use httpOnly cookies for auth
    chatHistory = []; // Always initialize empty

    setupEventListeners();
    updateTokenDisplay();

    const savedSidebarState = localStorage.getItem('sidebarExpanded');
    if (savedSidebarState === 'true') {
        sidebar.classList.add('expanded');
    }
    
    // Ensure input container IS centered on page load (for first prompt)
    const inputSection = document.querySelector('.input-section');
    const inputContainer = inputSection ? inputSection.querySelector('.input-container') : null;
    if (inputContainer) {
        inputContainer.classList.add('first-prompt');
    }
    if (inputSection) {
        inputSection.classList.add('is-first-prompt');
    }
    
    // Initialize Clips Studio
    initClipsStudio();

    // Setup Plus Features Button Handler
    const plusFeaturesBtn = document.getElementById('plusFeaturesBtn');
    if (plusFeaturesBtn) {
        plusFeaturesBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const featuresTabContainer = document.getElementById('featuresTabContainer');
            if (featuresTabContainer) {
                featuresTabContainer.classList.toggle('active');
                this.classList.toggle('active');
            }
        });
    }

    // Close features tab when clicking outside
    document.addEventListener('click', function(e) {
        const featuresTabContainer = document.getElementById('featuresTabContainer');
        const plusFeaturesBtn = document.getElementById('plusFeaturesBtn');
        if (featuresTabContainer && !e.target.closest('#featuresTabContainer') && !e.target.closest('#plusFeaturesBtn')) {
            featuresTabContainer.classList.remove('active');
            if (plusFeaturesBtn) plusFeaturesBtn.classList.remove('active');
        }
    });

    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

}

// =====================================================
// CONFIGURATION AND HELPER FUNCTIONS (Security & Performance)
// =====================================================

// Global configuration for magic numbers and constants
const CONFIG = {
    PROCESSING: {
        MAX_TIME_MS: 6 * 60 * 60 * 1000, // 6 hours
        POLL_INTERVAL_MS: 3000, // 3 seconds
        COMPLETED_REMOVE_DELAY_MS: 5000, // 5 seconds
        CLEANUP_INTERVAL_MS: 60000 // 1 minute
    },
    UI: {
        NOTIFICATION_DURATION_MS: 4000,
        ANIMATION_DELAY_MS: 100,
        MODAL_TRANSITION_MS: 250,
        TYPING_INDICATOR_DELAY_MS: 1500
    },
    RATE_LIMITING: {
        YOUTUBE_PROCESS_MIN_MS: 2000, // 2 seconds minimum between requests
        POLLING_INTERVAL_MS: 5000 // 5 seconds for library polling
    },
    SECURITY: {
        MAX_CONSOLE_LOGS: 0 // Production: 0 (no logs), Development: -1 (all logs)
    }
};

// =====================================================
// STORAGE USAGE GUIDELINES (sessionStorage vs localStorage)
// =====================================================
// 
// sessionStorage: Cleared when tab closes
// - CSRF tokens (temporary, per-session)
// - Processing state (temporary work-in-progress)
// - Temporary UI state (not needed across sessions)
//
// localStorage: Persists indefinitely (until cleared)
// - Theme preferences (non-sensitive UI state)
// - Application configuration (non-sensitive)
// - ⚠️ NEVER store: user tokens, auth data, PII, sensitive preferences
// 
// Note: Chat history is currently stored in localStorage but contains user prompts
// and URLs. Consider implementing a "Clear history" button or using sessionStorage.
//

// XSS Prevention: Sanitize HTML strings to prevent script injection
function sanitizeHTML(str) {
    if (typeof str !== 'string') return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// 🔐 SECURITY: Validate and sanitize URLs to prevent javascript: and data: URIs
function isValidImageUrl(url) {
    if (!url || typeof url !== 'string') return false;
    try {
        // Block javascript: and data: URLs
        if (url.startsWith('javascript:') || url.startsWith('data:')) {
            safeLog('🔒 Blocked invalid URL scheme:', url.substring(0, 20));
            return false;
        }
        // Require https:// or http:// (or relative paths for development)
        const parsed = new URL(url, window.location.href);
        return parsed.protocol === 'https:' || parsed.protocol === 'http:';
    } catch (e) {
        safeLog('Invalid URL format:', url);
        return false;
    }
}

// Rate limiting: Debounce function
function debounce(func, delayMs) {
    let timeoutId;
    let lastCallTime = 0;
    
    return function debounced(...args) {
        const now = Date.now();
        const timeSinceLastCall = now - lastCallTime;
        
        clearTimeout(timeoutId);
        
        if (timeSinceLastCall >= delayMs) {
            lastCallTime = now;
            func.apply(this, args);
        } else {
            timeoutId = setTimeout(() => {
                lastCallTime = Date.now();
                func.apply(this, args);
            }, delayMs - timeSinceLastCall);
        }
    };
}

// Safe console logging with environment check
const DEBUG_ENABLED = CONFIG.SECURITY.MAX_CONSOLE_LOGS !== 0;
function safeLog(...args) {
    if (DEBUG_ENABLED) {
        console.log(...args);
    }
}

// 🔐 SECURITY: Fetch with timeout to prevent hanging requests
async function fetchWithTimeout(url, options = {}, timeoutMs = 10000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error(`Request timeout after ${timeoutMs}ms`);
        }
        throw error;
    }
}

// Clip Slot System class
class ClipSlotSystem {
    constructor() {
        this.slots = {
            1: null,
            2: null,
            3: null,
            4: null,
            5: null
        };
        this.totalClips = 0;
    }

    addClip(clipData) {
        // Count filled slots
        const filledSlots = Object.values(this.slots).filter(slot => slot !== null).length;
        
        if (filledSlots < 5) {
            // Fill from bottom (5) to top (1)
            const targetSlot = 5 - filledSlots;
            this.slots[targetSlot] = {
                ...clipData,
                slotNumber: targetSlot,
                addedAt: new Date().toISOString()
            };
        } else {
            // Shift all clips up
            for (let i = 1; i < 5; i++) {
                this.slots[i] = this.slots[i + 1];
                if (this.slots[i]) {
                    this.slots[i].slotNumber = i;
                }
            }
            // Add new clip to slot 5
            this.slots[5] = {
                ...clipData,
                slotNumber: 5,
                addedAt: new Date().toISOString()
            };
        }
        
        this.totalClips++;
        return this.slots;
    }

    getSlots() {
        return this.slots;
    }

    getSlot(slotNumber) {
        return this.slots[slotNumber];
    }

    clearSlot(slotNumber) {
        this.slots[slotNumber] = null;
        return this.slots;
    }

    getFilledSlots() {
        return Object.entries(this.slots)
            .filter(([_, value]) => value !== null)
            .map(([slotNum, data]) => ({ slotNum: parseInt(slotNum), data }));
    }
}

// Enhanced Clips Studio with Slot System
class ClipsStudio {
    constructor() {
        this.currentTab = 'templates';
        this.processingItems = [];
        this.libraryItems = [];
        this.initialized = false;
        this.currentProjectId = null;
        this.selectedTemplate = null;
        this.templates = {};
        this.isMonitoring = false;
        this.monitoringIntervals = new Map(); // Track monitoring intervals
        this.currentEditingProject = null;
        this.slotSystem = new ClipSlotSystem();
        this.currentSlotState = null;
        this.useSlotSystem = true; // Enable slot system by default
        this.subscriptionCache = null; // Cache for subscription info to reduce API calls
        this.libraryPollingInterval = null; // Auto-refresh polls library every 5 seconds
        this.lastYouTubeProcessTime = 0; // Rate limiting: prevent spam requests
    }

    async init() {
        if (this.initialized) return;
        try {
            this.bindEvents();
            this.loadTemplates();
            await this.loadLibraryItems();
            await this.loadProcessingItems();
            this.initialized = true;
            
            // ✅ SECURITY FIX: Check for persistent rate limit state on page load
            // This prevents users from refreshing the page to bypass button lock
            this.enforceUrlButtonRateLimitOnLoad();
            
            // Initialize WebSocket for real-time updates
            this.initializeWebSocket();
            
            // START AUTO-POLLING: Refresh library every 5 seconds
            this.startLibraryPolling();
            
            // Restore the last viewed tab
            const savedTab = localStorage.getItem('clipsStudioCurrentTab');
            if (savedTab && ['templates', 'create', 'processing', 'library', 'editor'].includes(savedTab)) {
                this.switchTab(savedTab);
            } else {
                this.switchTab('templates'); // Default to templates
            }
            // Clips Studio initialized with Slot System
        } catch (error) {
            safeLog('Failed to initialize Clips Studio:', error);
        }
    }

    initializeWebSocket() {
        /**
         * Initialize WebSocket client for real-time video processing updates
         * This enables live progress tracking without page refreshes
         * 🔐 SECURITY: Authentication via httpOnly cookies only
         */
        try {
            if (!window.SolisAIWebSocketClient) {
                safeLog('⚠️ WebSocket client class not available');
                return;
            }

            // 🔐 SECURITY FIX: Do NOT use localStorage for any user identification
            // Backend validates auth via httpOnly cookies on WebSocket upgrade
            // Do not pass any user ID or sensitive info in WebSocket message
            
            if (!currentUser) {
                safeLog('⚠️ User not authenticated - WebSocket skipped');
                return;
            }

            // Initialize WebSocket - backend MUST validate connection via httpOnly auth cookie
            // Frontend does NOT send userId/token - it's retrieved from session on backend
            // The WebSocket server uses the same httpOnly cookie as regular API calls
            solisWSClient = new SolisAIWebSocketClient();
            solisWSClient.connect(); // No parameters - backend gets userId from session cookie
            safeLog('✅ WebSocket client initialized with httpOnly auth');

            // Set up handlers after a brief delay to ensure connection
            setTimeout(() => {
                this.setupWebSocketHandlers();
            }, 500);
        } catch (error) {
            safeLog('❌ Failed to initialize WebSocket:', error);
        }
    }

    updateRecentActivity() {
        const activityList = document.getElementById('activityList');
        if (!activityList) return;

        // Keep the welcome message
        const welcomeItem = activityList.querySelector('.activity-item');
        
        // Get recent clips (last 3)
        const recentClips = this.libraryItems
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, 3);

        // Add clip activities
        recentClips.forEach(clip => {
            const timeAgo = this.getTimeAgo(clip.timestamp);
            const activityHTML = `
                <div class="activity-item">
                    <div class="activity-icon">
                        <i class="fas fa-video"></i>
                    </div>
                    <div class="activity-content">
                        <div class="activity-title">Created a clip</div>
                        <div class="activity-description">${clip.name || 'Untitled Clip'}</div>
                    </div>
                    <div class="activity-time">${timeAgo}</div>
                </div>
            `;
            activityList.insertAdjacentHTML('beforeend', activityHTML);
        });
    }

    getTimeAgo(timestamp) {
        const now = new Date();
        const diffMs = now - new Date(timestamp);
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return '0 minutes ago';
        if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
        if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
        
        return timestamp.toLocaleDateString();
    }

    async loadTemplates() {
        try {
            const headers = getAuthHeaders();
            const response = await fetch(`${API_BASE_URL}/clips/templates`, {
                method: 'GET',
                headers: headers,
                credentials: 'include'  // 🔐 Send httpOnly cookie
            });
            
            if (response.ok) {
                const data = await response.json();
                this.templates = data.templates || data;
                safeLog('✅ Templates loaded:', Object.keys(this.templates));
            } else if (response.status === 401) {
                safeLog('Not authenticated for templates, using defaults');
                this.setDefaultTemplates();
            } else {
                safeLog('Failed to load templates, status:', response.status);
                this.setDefaultTemplates();
            }
        } catch (error) {
            safeLog('Failed to load templates:', error);
            this.setDefaultTemplates();
        }
    }

    setDefaultTemplates() {
        this.templates = {
            "ranked_compilation": { 
                "name": "Ranking Compilation", 
                "description": "Top 5 moments ranked compilation", 
                "duration": "15-60s",
                "type": "ranking",
                "supportsSlotSystem": true
            },
            "splitscreen": { 
                "name": "Split Screen", 
                "description": "Side-by-side video comparison", 
                "duration": "15-30s",
                "type": "splitscreen",
                "supportsSlotSystem": true
            }
        };
    }

    bindEvents() {
        // Tab navigation - only bind once
        this.safeAddEventListener('.clips-tab', 'click', (e) => {
            this.switchTab(e.currentTarget.dataset.tab);
        });

        // Template selection - check access for PRO templates
        this.safeAddEventListener('.template-card', 'click', (e) => {
            const templateCard = e.currentTarget;
            const templateId = templateCard.dataset.template;
            
            // Check if it's a PRO template (splitscreen)
            if (templateId === 'splitscreen') {
                e.preventDefault();
                e.stopPropagation();
                this.checkTemplateAccess(templateId);
            } else {
                // Free templates can be accessed directly
                this.openTemplatePreviewModal(templateId, templateCard);
            }
        });
        
        // PRO feature modal buttons
        this.safeAddEventListenerById('closeProFeatureModal', 'click', () => {
            this.closeProFeatureModal();
        });

        // Template preview modal close button
        this.safeAddEventListenerById('closeTemplatePreviewBtn', 'click', () => {
            this.closeTemplatePreviewModal();
        });

        // Template sheet handle toggle on mobile
        this.safeAddEventListenerById('templateSheetHandle', 'click', () => {
            const sidebar = document.querySelector('.template-preview-sidebar');
            if (sidebar) {
                sidebar.classList.toggle('expanded');
            }
        });
        
        // Template preview modal confirm button
        this.safeAddEventListenerById('confirmUseTemplateBtn', 'click', () => {
            this.confirmTemplateUse();
        });
        
        // AI Prompt input with char count

        // URL processing
        this.safeAddEventListenerById('processUrlBtn', 'click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.processYouTubeUrl();
        });

        const youtubeInput = document.getElementById('youtubeUrlInput');
        if (youtubeInput) {
            youtubeInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.processYouTubeUrl();
                }
            });
        }

        // Template confirmation
        this.safeAddEventListenerById('confirmTemplateBtn', 'click', () => {
            this.confirmTemplateSelection();
        });

        this.safeAddEventListenerById('cancelTemplateBtn', 'click', () => {
            this.cancelTemplateSelection();
        });

        // Generate clip
        this.safeAddEventListenerById('generateClipBtn', 'click', () => {
            this.generateClipWithSlotSystem();
        });

        // Library actions - manual refresh only
        this.safeAddEventListenerById('refreshProcessingBtn', 'click', () => {
            this.manualRefresh();
        });

        this.safeAddEventListenerById('libraryFilter', 'change', (e) => {
            this.filterLibrary(e.target.value);
        });

        // New clip button
        this.safeAddEventListenerById('newClipBtn', 'click', () => {
            // First navigate to clips section
            const clipsNavItem = document.querySelector('.nav-item[data-target="clips"]');
            if (clipsNavItem) {
                clipsNavItem.click();
            }
            // Then switch to create tab
            setTimeout(() => {
                this.switchTab('create');
                // Also open the editor modal to go directly to clip creation
                setTimeout(() => this.openEditor(), 300);
            }, 300);
        });

        this.safeAddEventListenerById('createFirstClipBtn', 'click', () => {
            this.switchTab('create');
        });

        // Editor functionality

        this.safeAddEventListenerById('renderFinalBtn', 'click', () => {
            this.renderFinalVideo();
        });

        // Recent Activity View All button
        this.safeAddEventListenerById('viewAllActivityBtn', 'click', () => {
            this.switchTab('library');
        });

        // Stop monitoring when leaving clips tab
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAllMonitoring();
            }
        });
    }

    switchTab(tabName) {
        // Stop monitoring if we're leaving processing tab
        if (this.currentTab === 'processing' && tabName !== 'processing') {
            this.stopAllMonitoring();
        }

        document.querySelectorAll('.clips-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        document.querySelectorAll('.clips-section').forEach(section => {
            section.classList.toggle('active', section.id === `${tabName}Section`);
        });
        this.currentTab = tabName;
        
        // Save current tab to localStorage so it persists on refresh
        localStorage.setItem('clipsStudioCurrentTab', tabName);

        // Only load data when tab becomes active
        if (tabName === 'processing') {
            this.updateProcessingView();
            // Start monitoring only for active processing items
            this.startSmartMonitoring();
        } else if (tabName === 'library') {
            this.updateLibraryView();
        } else if (tabName === 'editor') {
            this.loadEditorData();
        }
    }

    selectTemplate(templateId, templateCard) {
        // Remove previous selection
        document.querySelectorAll('.template-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Add selection to current card
        templateCard.classList.add('selected');
        this.selectedTemplate = templateId;

        // Show confirmation buttons
        this.showConfirmationButtons(true);
        
        // Check if template supports slot system
        const template = this.templates[templateId];
        if (template && template.supportsSlotSystem) {
            this.showSlotSystemInfo();
        }
    }

    async checkTemplateAccess(templateId) {
        try {
            // 🔐 This only controls UI/preview display - it's NOT the enforcement mechanism!
            // Backend /clips/start MUST also check subscription before allowing processing.
            // User can bypass this modal by modifying DOM - only backend can enforce plan.
            
            const apiBase = window.API_BASE_URL || 'http://127.0.0.1:5500/api';
            const headers = getAuthHeaders();
            
            try {
                const response = await fetch(`${apiBase}/auth/subscription`, {
                    method: 'GET',
                    headers: headers,
                    credentials: 'include'
                });

                if (!response.ok) {
                    this.showProFeatureModal(templateId);
                    return;
                }

                const data = await response.json();

                // Check if user has access to PRO templates (display only)
                const plan = data.subscription?.plan || 'free';
                
                if (plan === 'free') {
                    this.showProFeatureModal(templateId);
                } else {
                    const templateCard = document.querySelector(`[data-template="${templateId}"]`);
                    this.openTemplatePreviewModal(templateId, templateCard);
                }
            } catch (error) {
                // Assume free access if check fails - backend will enforce
                this.showProFeatureModal(templateId);
            }
        } catch (error) {
            this.showProFeatureModal(templateId);
        }
    }

    showProFeatureModal(templateId, currentPlan) {
        // Remove any existing modal
        const existingOverlay = document.querySelector('.pro-modal-overlay');
        if (existingOverlay) existingOverlay.remove();

        // Add styles to document head (only once, use data attribute to check)
        if (!document.getElementById('pro-modal-styles')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'pro-modal-styles';
            styleEl.textContent = `
                @keyframes fadeInOverlay { to { opacity: 1; } }
                @keyframes slideUp { 
                    from { opacity: 0; transform: translateY(18px) scale(0.97); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes popIn {
                    0% { transform: scale(0) rotate(-15deg); opacity: 0; }
                    60% { transform: scale(1.1) rotate(4deg); opacity: 1; }
                    80% { transform: scale(0.95) rotate(-2deg); }
                    100% { transform: scale(1) rotate(0deg); opacity: 1; }
                }
                @keyframes fadeUpAnim {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .pro-modal-overlay {
                    position: fixed !important;
                    inset: 0 !important;
                    background: rgba(0,0,0,0.3) !important;
                    backdrop-filter: blur(8px) !important;
                    -webkit-backdrop-filter: blur(8px) !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    z-index: 9999 !important;
                    padding: 20px !important;
                    opacity: 0;
                    animation: fadeInOverlay 0.3s ease forwards;
                }

                .pro-modal {
                    background: #fff;
                    border-radius: 28px;
                    width: 100%;
                    max-width: 820px;
                    display: flex;
                    box-shadow: 0 32px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05);
                    opacity: 0;
                    transform: translateY(18px) scale(0.97);
                    animation: slideUp 0.45s cubic-bezier(0.34,1.4,0.64,1) 0.1s forwards;
                    overflow: hidden;
                    min-height: 440px;
                }

                .pro-panel-left {
                    width: 52%;
                    background: #FDF6F3;
                    padding: 44px 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    border-right: 1px solid #EBEBEB;
                    overflow: hidden;
                }

                .pro-panel-left::before {
                    content: '';
                    position: absolute;
                    bottom: -70px;
                    left: -70px;
                    width: 240px;
                    height: 240px;
                    border-radius: 50%;
                    background: #FFD0C2;
                    opacity: 0.25;
                    pointer-events: none;
                }

                .pro-panel-left::after {
                    content: '';
                    position: absolute;
                    top: -50px;
                    right: -50px;
                    width: 160px;
                    height: 160px;
                    border-radius: 50%;
                    background: #FFD0C2;
                    opacity: 0.2;
                    pointer-events: none;
                }

                .pro-left-top { position: relative; z-index: 1; }

                .pro-lock-wrap {
                    width: 64px;
                    height: 64px;
                    background: #fff;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 24px;
                    box-shadow: 0 4px 16px rgba(255,106,61,0.12);
                    animation: popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.4s both;
                }

                .pro-title {
                    font-family: 'Instrument Serif', serif;
                    font-size: 30px;
                    color: #111;
                    line-height: 1.2;
                    letter-spacing: -0.4px;
                    margin-bottom: 10px;
                    opacity: 0;
                    animation: fadeUpAnim 0.35s ease 0.55s forwards;
                }

                .pro-subtitle {
                    font-size: 14px;
                    color: #555;
                    line-height: 1.65;
                    max-width: 270px;
                    opacity: 0;
                    animation: fadeUpAnim 0.35s ease 0.63s forwards;
                }

                .pro-template-preview {
                    position: relative;
                    z-index: 1;
                    background: #fff;
                    border: 1px solid #EBEBEB;
                    border-radius: 16px;
                    overflow: hidden;
                    opacity: 0;
                    animation: fadeUpAnim 0.35s ease 0.72s forwards;
                }

                .pro-tpb-preview {
                    background: #F5F4F2;
                    height: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                .pro-tpb-pro {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    background: #FF6A3D;
                    color: #fff;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    padding: 3px 9px;
                    border-radius: 100px;
                }

                .pro-tpb-info {
                    padding: 12px 14px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .pro-tpb-info strong {
                    font-size: 13px;
                    font-weight: 600;
                    color: #111;
                }

                .pro-tpb-info span {
                    font-size: 11px;
                    color: #AAA;
                }

                .pro-locked-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(253,246,243,0.55);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .pro-panel-right {
                    width: 48%;
                    padding: 44px 36px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                }

                .pro-close-btn {
                    position: absolute;
                    top: 18px;
                    right: 18px;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    border: 1px solid #EBEBEB;
                    background: transparent;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #AAA;
                    transition: all 0.15s;
                    padding: 0;
                }

                .pro-close-btn:hover {
                    background: #F5F5F5;
                    color: #111;
                }

                .pro-plans-label {
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    color: #AAA;
                    margin-bottom: 12px;
                    opacity: 0;
                    animation: fadeUpAnim 0.3s ease 0.7s forwards;
                }

                .pro-plan-options {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    flex: 1;
                    margin-bottom: 20px;
                    opacity: 0;
                    animation: fadeUpAnim 0.35s ease 0.78s forwards;
                }

                .pro-plan-card {
                    border: 1.5px solid #EBEBEB;
                    border-radius: 14px;
                    padding: 13px 15px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    transition: all 0.18s;
                    background: #fff;
                    position: relative;
                }

                .pro-plan-card:hover {
                    border-color: #FFD0C2;
                    background: #FFF3EF;
                    transform: translateX(3px);
                }

                .pro-plan-card.highlighted {
                    border-color: #FF6A3D;
                    background: #FFF3EF;
                }

                .pro-plan-card-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 9px;
                    background: #FFF3EF;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    border: 1px solid #FFD0C2;
                }

                .pro-plan-card.highlighted .pro-plan-card-icon {
                    background: #FF6A3D;
                    border-color: #FF6A3D;
                }

                .pro-plan-card-body {
                    flex: 1;
                }

                .pro-plan-card-body strong {
                    display: block;
                    font-size: 13px;
                    font-weight: 600;
                    color: #111;
                    margin-bottom: 2px;
                }

                .pro-plan-card-body span {
                    font-size: 11px;
                    color: #AAA;
                }

                .pro-plan-card-price {
                    font-size: 13px;
                    font-weight: 600;
                    color: #555;
                    white-space: nowrap;
                }

                .pro-plan-card.highlighted .pro-plan-card-price {
                    color: #FF6A3D;
                }

                .pro-popular-tag {
                    position: absolute;
                    top: -1px;
                    right: 12px;
                    background: #FF6A3D;
                    color: #fff;
                    font-size: 9px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    padding: 3px 8px;
                    border-radius: 0 0 6px 6px;
                }

                .pro-right-footer {
                    opacity: 0;
                    animation: fadeUpAnim 0.35s ease 0.88s forwards;
                }

                .pro-cta-btn {
                    width: 100%;
                    padding: 14px;
                    background: #FF6A3D;
                    color: #fff;
                    border: none;
                    border-radius: 13px;
                    font-family: 'Geist', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin-bottom: 10px;
                    box-shadow: 0 4px 16px rgba(255,106,61,0.3);
                }

                .pro-cta-btn:hover {
                    background: #e85c30;
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(255,106,61,0.4);
                }

                .pro-cta-btn:active {
                    transform: translateY(0);
                }

                .pro-fine-print {
                    text-align: center;
                    font-size: 12px;
                    color: #AAA;
                }

                .pro-fine-print a {
                    color: #AAA;
                    text-decoration: underline;
                    text-underline-offset: 2px;
                    cursor: pointer;
                }

                .pro-fine-print a:hover {
                    color: #555;
                }

                @media (max-width: 768px) {
                    .pro-modal {
                        flex-direction: column;
                    }
                    .pro-panel-left {
                        width: 100%;
                        border-right: none;
                        border-bottom: 1px solid #EBEBEB;
                    }
                    .pro-panel-right {
                        width: 100%;
                    }
                }
            `;
            document.head.appendChild(styleEl);
        }

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'pro-modal-overlay';

        // Template info  
        const templateInfo = {
            'splitscreen': {
                title: 'This is a Pro template',
                subtitle: 'Split Screen is only available on paid plans. Upgrade to unlock it',
                templateName: 'Split Screen',
                templateDesc: 'Video + Gameplay stacked'
            }
        };

        const info = templateInfo[templateId] || templateInfo['splitscreen'];

        overlay.innerHTML = `
            <div class="pro-modal">
                <div class="pro-panel-left">
                    <div class="pro-left-top">
                        <div class="pro-lock-wrap">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A3D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                        </div>
                        <h1 class="pro-title">${info.title}</h1>
                        <p class="pro-subtitle">${info.subtitle}</p>
                    </div>

                    <div class="pro-template-preview">
                        <div class="pro-tpb-preview">
                            <div class="pro-tpb-pro">PRO</div>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C8C4BE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="7" height="18" rx="1"/>
                                <rect x="14" y="3" width="7" height="18" rx="1"/>
                            </svg>
                            <div class="pro-locked-overlay">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6A3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                            </div>
                        </div>
                        <div class="pro-tpb-info">
                            <div>
                                <strong>${info.templateName}</strong>
                                <span style="display:block;margin-top:2px;font-size:11px;color:#AAA">${info.templateDesc}</span>
                            </div>
                            <span style="font-size:11px;color:#FF6A3D;font-weight:600;background:#FFF3EF;padding:3px 9px;border-radius:100px;border:1px solid #FFD0C2">PRO</span>
                        </div>
                    </div>
                </div>

                <div class="pro-panel-right">
                    <button class="pro-close-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>

                    <div>
                        <div class="pro-plans-label">Unlock with a plan</div>
                        <div class="pro-plan-options">
                            <div class="pro-plan-card">
                                <div class="pro-plan-card-icon">
                                   <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="basicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1"></stop>
                                            <stop offset="50%" style="stop-color:#cbd5e1;stop-opacity:1"></stop>
                                            <stop offset="100%" style="stop-color:#94a3b8;stop-opacity:1"></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="16" fill="url(#basicGrad)"></circle>
                                    <ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#basicGrad)" stroke-width="10" fill="none" transform="rotate(45 50 50)" stroke-linecap="round"></ellipse>
                                    <ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#basicGrad)" stroke-width="10" fill="none" transform="rotate(-45 50 50)" stroke-linecap="round"></ellipse>
                                </svg>
                                </div>
                                <div class="pro-plan-card-body">
                                    <strong>Basic</strong>
                                    <span>PRO templates · No watermark</span>
                                </div>
                                <div class="pro-plan-card-price">$18.99/mo</div>
                            </div>

                            <div class="pro-plan-card highlighted">
                                <div class="pro-popular-tag">Popular</div>
                                <div class="pro-plan-card-icon">
                                   <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="primeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style="stop-color:#fff176;stop-opacity:1"></stop>
                                            <stop offset="50%" style="stop-color:#ffd600;stop-opacity:1"></stop>
                                            <stop offset="100%" style="stop-color:#ff9100;stop-opacity:1"></stop>
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="16" fill="url(#primeGrad)"></circle>
                                    <ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#primeGrad)" stroke-width="12" fill="none" transform="rotate(45 50 50)" stroke-linecap="round"></ellipse>
                                    <ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#primeGrad)" stroke-width="12" fill="none" transform="rotate(-45 50 50)" stroke-linecap="round"></ellipse>
                                </svg>
                                </div>
                                <div class="pro-plan-card-body">
                                    <strong>Prime</strong>
                                    <span>PRO templates + Basic Overpurpose</span>
                                </div>
                                <div class="pro-plan-card-price">$29.99/mo</div>
                            </div>

                            <div class="pro-plan-card">
                                <div class="pro-plan-card-icon">
                                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="eliteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style="stop-color:#ff6b3d;stop-opacity:1" />
                                            <stop offset="50%" style="stop-color:#ff3d00;stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:#c70000;stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="50" cy="50" r="16" fill="url(#eliteGrad)"></circle>
                                    <ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#eliteGrad)" stroke-width="12" fill="none" transform="rotate(45 50 50)" stroke-linecap="round"></ellipse>
                                    <ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#eliteGrad)" stroke-width="12" fill="none" transform="rotate(-45 50 50)" stroke-linecap="round"></ellipse>
                                </svg>
                                </div>
                                <div class="pro-plan-card-body">
                                    <strong>Elite</strong>
                                    <span>Everything + Priority queue</span>
                                </div>
                                <div class="pro-plan-card-price">$49.99/mo</div>
                            </div>
                        </div>
                    </div>

                    <div class="pro-right-footer">
                        <button class="pro-cta-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
                            </svg>
                            Unlock Split Screen
                        </button>
                        <p class="pro-fine-print">Cancel anytime · No commitment · <a>Maybe later</a></p>
                    </div>
                </div>
            </div>
        `;

        // Close button handler
        overlay.querySelector('.pro-close-btn').addEventListener('click', () => {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.25s ease';
            setTimeout(() => overlay.remove(), CONFIG.UI.MODAL_TRANSITION_MS);
        });

        // Plan card selection
        overlay.querySelectorAll('.pro-plan-card').forEach(card => {
            card.addEventListener('click', () => {
                overlay.querySelectorAll('.pro-plan-card').forEach(c => c.classList.remove('highlighted'));
                card.classList.add('highlighted');
            });
        });

        // CTA button handler
        overlay.querySelector('.pro-cta-btn').addEventListener('click', () => {
            // Subscription modal removed
        });

        // Maybe later link handler
        overlay.querySelector('.pro-fine-print a').addEventListener('click', () => {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.25s ease';
            setTimeout(() => overlay.remove(), CONFIG.UI.MODAL_TRANSITION_MS);
        });

        // Overlay background click to close
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.opacity = '0';
                overlay.style.transition = 'opacity 0.25s ease';
                setTimeout(() => overlay.remove(), CONFIG.UI.MODAL_TRANSITION_MS);
            }
        });

        document.body.appendChild(overlay);
        safeLog('✅ Pro feature modal shown for:', templateId);
    }

    closeProFeatureModal() {
        const modal = document.getElementById('proFeatureModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    openTemplatePreviewModal(templateId, templateCard) {
        const modal = document.getElementById('templatePreviewModal');
        const loadingEl = document.getElementById('templatePreviewLoading');
        if (!modal) {
            return;
        }

        safeLog(`📋 Opening template preview for: ${templateId}`);

        // Show loading animation
        if (loadingEl) {
            loadingEl.style.display = 'flex';
        }

        // Update the elements IMMEDIATELY before showing modal
        const nameEl = document.getElementById('previewTemplateName');
        const descEl = document.getElementById('previewTemplateDescription');
        const durationEl = document.getElementById('previewVideoDuration');
        const formatEl = document.getElementById('previewVideoFormat');
        
        safeLog('Elements found:', {
            nameEl: !!nameEl,
            descEl: !!descEl,
            durationEl: !!durationEl,
            formatEl: !!formatEl
        });

        // Set template name IMMEDIATELY
        if (nameEl) {
            const templateDisplayName = templateId
                .replace(/_/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase());
            nameEl.textContent = templateDisplayName || 'Template';
            safeLog('✅ Template name set to:', templateDisplayName);
        } else {
            safeLog('⚠️ nameEl not found');
        }

        // Get video URL from input 
        const youtubeUrl = document.getElementById('youtubeUrlInput')?.value.trim();
        
        // Set description and other fields
        if (youtubeUrl) {
            if (descEl) descEl.textContent = 'Loading video info...';
            if (durationEl) durationEl.textContent = '~60s';
            if (formatEl) formatEl.textContent = 'TikTok / Shorts';
        } else {
            if (descEl) descEl.textContent = 'Paste a YouTube URL to see video details';
            if (durationEl) durationEl.textContent = '~60s';
            if (formatEl) formatEl.textContent = 'TikTok / Shorts';
        }

        // Show modal IMMEDIATELY
        modal.classList.add('active');
        modal.style.display = 'flex';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        document.body.classList.add('modal-open');
        safeLog('✅ Modal displayed');

        // Hide navigation elements on mobile/tablet
        const navWrapper = document.getElementById('navWrapper');
        const profileNotifWrapper = document.querySelector('.profile-notif-wrapper');
        if (navWrapper) {
            navWrapper.classList.add('disabled');
        }
        if (profileNotifWrapper) {
            profileNotifWrapper.classList.add('disabled');
        }

        // Reset sheet position on mobile
        const templateSheet = document.querySelector('.template-preview-sheet');
        if (templateSheet) {
            templateSheet.classList.remove('expanded');
        }

        // Now do the heavy lifting in the background
        setTimeout(() => {
            // Hide loading animation
            if (loadingEl) {
                loadingEl.style.display = 'none';
            }

            const template = this.templates[templateId] || {};
            
            // Get watermark toggle state
            const watermarkToggle = document.getElementById('watermarkToggle');
            const shouldShowWatermark = watermarkToggle ? watermarkToggle.checked : true;
            
            // Store selected template info
            this.currentTemplateForPreview = {
                id: templateId,
                card: templateCard,
                data: template,
                addWatermark: shouldShowWatermark,
                videoQuality: 'auto',
                videoUrl: youtubeUrl
            };
            
            // Reset AI prompt
            const promptInput = document.getElementById('aiPromptInput');
            if (promptInput) {
                promptInput.value = '';
                document.getElementById('charCountDisplay').textContent = '0';
            }
            
            // Hide AI response
            const responseArea = document.getElementById('aiResponseArea');
            if (responseArea) {
                responseArea.style.display = 'none';
            }
            
            // Load video preview with template
            this.loadVideoPreviewWithTemplate();
            
            // Fetch video metadata if URL exists
            if (youtubeUrl) {
                const descEl2 = document.getElementById('previewTemplateDescription');
                const durationEl2 = document.getElementById('previewVideoDuration');
                const formatEl2 = document.getElementById('previewVideoFormat');
                this.fetchVideoMetadata(youtubeUrl, durationEl2, formatEl2, descEl2);
            }
        }, 100);
        
        // renderTemplatePreview already handles watermark control visibility
        // No need for setupWatermarkControls - it was using wrong element IDs
    }

    updateWatermarkDisplay() {
        const watermarkToggle = document.getElementById('watermarkToggle');
        const watermark = document.querySelector('.solis-watermark');
        
        if (!watermarkToggle || !watermark) return;
        
        if (watermarkToggle.checked) {
            watermark.style.display = 'flex';
            safeLog('✅ Watermark VISIBLE');
        } else {
            watermark.style.display = 'none';
            safeLog('❌ Watermark HIDDEN');
        }
    }

    setupWatermarkToggle() {
        const watermarkToggleLabel = document.getElementById('watermarkToggleLabel');
        const watermarkUpgradeBtn = document.getElementById('watermarkUpgradeBtn');
        const watermarkNotice = document.getElementById('watermarkNotice');
        const watermarkToggle = document.getElementById('watermarkToggle');
        
        if (!watermarkToggle) return;
        
        // Check if user is premium (can toggle watermark)
        const isPremium = window.currentUser && window.currentUser.plan && window.currentUser.plan !== 'free';
        
        // Show toggle if premium, otherwise show upgrade button
        if (watermarkToggleLabel) {
            watermarkToggleLabel.style.display = isPremium ? 'flex' : 'none';
        }
        if (watermarkUpgradeBtn) {
            watermarkUpgradeBtn.style.display = isPremium ? 'none' : 'flex';
        }
        if (watermarkNotice && !isPremium) {
            watermarkNotice.style.display = 'block';
        }
        
        // Only attach listener if premium
        if (isPremium) {
            watermarkToggle.addEventListener('change', () => {
                this.updateWatermarkDisplay();
                safeLog(`🔄 Watermark toggled: ${watermarkToggle.checked ? 'ON' : 'OFF'}`);
            });
        }
    }

    loadVideoPreviewWithTemplate() {
        const previewEl = document.getElementById('templateVideoPreview');
        if (!previewEl) return;

        const templateId = this.currentTemplateForPreview?.id;
        if (!templateId) {
            previewEl.innerHTML = `
                <div class="preview-video-placeholder">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>No template selected</p>
                </div>
            `;
            return;
        }

        // Fetch server-side rendered template preview
        this.fetchTemplatePreview(previewEl, templateId);
    }
    async fetchTemplatePreview(container, templateId) {
        try {
            // Get the template data we already have locally
            const template = this.templates[templateId];
            
            if (!template) {
                safeLog(`Template "${templateId}" not found in this.templates`, Object.keys(this.templates));
                // Create a default template object if not found
                // This happens when templates haven't been loaded yet
                const defaultTemplate = {
                    id: templateId,
                    name: templateId?.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Template',
                    description: 'Video template preview',
                    type: templateId || 'default'
                };
                return await this.renderTemplatePreview(container, defaultTemplate);
            }

            // Add the template ID to the template object
            template.id = templateId;
            return await this.renderTemplatePreview(container, template);
        } catch (error) {
            safeLog('Error in fetchTemplatePreview:', error);
            container.innerHTML = `
                <div class="preview-video-placeholder">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Error loading preview</p>
                </div>
            `;
        }
    }

    async renderTemplatePreview(container, template) {
        // 🔐 SECURITY: Validate template.id to prevent path traversal/injection
        if (template?.id && (template.id.includes('..') || template.id.includes('/') || template.id.includes('\\') || template.id.includes(':'))) {
            console.error('❌ SECURITY: Attempted path traversal in template.id:', template.id);
            showNotification('Invalid template', 'error');
            return;
        }
        // Escape template.id for use in logs/display
        const safeTemplateId = template?.id ? String(template.id).replace(/[<>"']/g, '') : 'unknown';
        safeLog('🎨 renderTemplatePreview called with container:', !!container, 'template:', safeTemplateId);
        const html = this.generateTemplatePreviewHTML(template);
        let controlHTML = '';
        
        // Check if user is free or paid and create appropriate control
        try {
            const response = await fetch(`${window.API_BASE_URL}/auth/watermark-check`, {
                headers: getAuthHeaders(),
                credentials: 'include',  // 🔐 Include httpOnly cookie
                cache: 'no-store'
            });
            
            safeLog('📡 Watermark-check response status:', response.status, 'ok:', response.ok);
            
            if (response.ok) {
                const data = await response.json();
                safeLog('🔍 Watermark check response:', data);
                if (data.watermark_required === true) {
                    // Free user - show upgrade button in watermark controls
                    safeLog('📌 watermark_required is TRUE - showing upgrade button in controls');
                    const watermarkUpgradeBtn = document.getElementById('watermarkUpgradeBtn');
                    if (watermarkUpgradeBtn) {
                        watermarkUpgradeBtn.style.display = 'flex';
                    }
                    controlHTML = '';
                } else {
                    // Paid user - no toggle in preview, use dashboard toggle-container instead
                    safeLog('📌 watermark_required is FALSE - no preview toggle needed');
                    controlHTML = '';
                }
            } else {
                safeLog('❌ Watermark-check API returned non-ok status:', response.status);
            }
        } catch (error) {
            safeLog('🚨 Error checking watermark eligibility:', error);
        }
        
        // Add watermark overlay using exact design from currentwatermark.html
        const watermarkedHTML = `
            <div style="position: relative; width: 100%; height: 100%; background: #3a3a3a;">
                ${html}
                <div class="solis-watermark" style="position: absolute; bottom: 12px; right: 12px; z-index: 100; pointer-events: none; display: flex; flex-direction: column; align-items: flex-end; color: #ffffff; user-select: none; filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5)); font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div style="width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="12" fill="currentColor"></circle>
                                <ellipse rx="44" ry="18" cx="50" cy="50" stroke-width="6" transform="rotate(45 50 50)"></ellipse>
                                <ellipse rx="44" ry="18" cx="50" cy="50" stroke-width="6" transform="rotate(-45 50 50)"></ellipse>
                            </svg>
                        </div>
                        <div style="font-size: 15px; font-weight: 800; letter-spacing: -0.02em; text-transform: uppercase; line-height: 1;">
                            Solis <span style="opacity: 0.85; font-weight: 700;">AI</span>
                        </div>
                    </div>
                </div>
                ${controlHTML}
            </div>
        `;
        
        safeLog('📝 Setting watermarked HTML to container');
        safeLog('🔍 controlHTML length:', controlHTML.length);
        safeLog('🔍 controlHTML includes toggle:', controlHTML.includes('previewWatermarkToggle'));
        safeLog('🔍 watermarkedHTML includes toggle:', watermarkedHTML.includes('previewWatermarkToggle'));
        
        // 🔐 SECURITY: Use innerHTML with validated HTML (template strings are escaped)
        // The watermarkedHTML is built from trusted template strings, not user input
        container.innerHTML = watermarkedHTML;
        safeLog('✅ Watermarked HTML set', 'Has watermark element:', !!container.querySelector('.solis-watermark'));
        setTimeout(() => {
            const previewWatermarkToggle = container.querySelector('#previewWatermarkToggle');
            if (previewWatermarkToggle) {
                safeLog('✅ Watermark toggle found in preview, adding event listeners');
                
                previewWatermarkToggle.addEventListener('change', (e) => {
                    const isEnabled = e.target.checked;
                    const sliderBg = container.querySelector('.watermark-toggle-bg');
                    const slider = container.querySelector('.watermark-toggle-slider');
                    
                    if (sliderBg) {
                        sliderBg.style.backgroundColor = isEnabled ? '#4F46E5' : '#888';
                    }
                    if (slider) {
                        slider.style.left = isEnabled ? '26px' : '2px';
                    }
                    
                    // Store in localStorage for persistence
                    localStorage.setItem('solisAIWatermarkEnabled', isEnabled ? 'true' : 'false');
                    
                    // Update template data
                    if (this.currentTemplateForPreview) {
                        this.currentTemplateForPreview.addWatermark = isEnabled;
                    }
                    
                    // Update watermark visibility in preview
                    const watermark = container.querySelector('.solis-watermark');
                    if (watermark) {
                        watermark.style.display = isEnabled ? 'flex' : 'none';
                        safeLog(`✅ Watermark ${isEnabled ? 'ENABLED' : 'DISABLED'} in preview`);
                    }
                });
                
                // Initialize watermark visibility based on toggle state
                const watermark = container.querySelector('.solis-watermark');
                if (watermark && !previewWatermarkToggle.checked) {
                    watermark.style.display = 'none';
                    safeLog('✅ Watermark initially hidden (toggle off)');
                }
            } else {
                safeLog('⚠️ Watermark toggle checkbox NOT found in preview!');
            }
        }, 0);
        
        // Trigger customizer setup after content is loaded
        safeLog('[Template Preview] Content loaded, triggering customizer...');
        if (window.FloatingCustomizeBar && window.customizer) {
            // Give DOM time to settle
            setTimeout(() => {
                if (window.initializeFloatingCustomizer) {
                    window.initializeFloatingCustomizer(true); // true = reinitialize
                }
            }, 100);
        }
    }

    generateTemplatePreviewHTML(template) {
        const previewTemplates = {
            'ranked_compilation': () => `
                <style>
                    .ranking-preview-container * {
                        background: transparent !important;
                        box-sizing: border-box;
                    }
                    .ranking-preview-container {
                        max-width: 400px;
                        margin-top: 10px;
                        padding: 10px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        pointer-events: auto;
                    }
                    .ranking-preview-container .text-stroke {
                        font-weight: 400;
                        font-family: 'Luckiest Guy', cursive;
                        text-shadow: 
                            -1.5px -1.5px 0 #000,  
                             1.5px -1.5px 0 #000,
                            -1.5px  1.5px 0 #000,
                             1.5px  1.5px 0 #000,
                             2px  0px 0 #000,
                            -2px  0px 0 #000,
                             0px  2px 0 #000,
                             0px -2px 0 #000,
                             3px  3px 0 #000,
                             3.5px 3.5px 0 #000,
                             4px  4px 0 #000;
                        pointer-events: auto;
                    }
                    .ranking-preview-container .title {
                        font-size: 2.1rem;
                        text-align: center;
                        line-height: 1.1;
                        text-transform: uppercase;
                        margin-bottom: 4px;
                        margin-top: 0;
                        padding-top: 0;
                        color: white;
                        font-family: 'Luckiest Guy', cursive;
                        white-space: nowrap;
                        pointer-events: auto;
                    }
                    .ranking-preview-container .funniest {
                        color: #ff0000;
                        font-family: 'Luckiest Guy', cursive;
                        pointer-events: auto;
                    }
                    .ranking-preview-container .ranking-list {
                        list-style: none; 
                        padding: 0;
                        margin: 0;
                        text-align: left;
                        width: 100%;
                        pointer-events: auto;
                    }
                    .ranking-preview-container .ranked-item {
                        font-size: 2.8rem;
                        margin-bottom: 20px;
                        line-height: 1;
                        display: flex;
                        justify-content: flex-start;
                        font-family: 'Luckiest Guy', cursive;
                        pointer-events: auto;
                    }
                    .ranking-preview-container .ranked-item .rank-number {
                        display: inline-block;
                        pointer-events: auto;
                        margin-right: 10px;
                    }
                    .ranking-preview-container .ranked-item .rank-title {
                        display: inline-block;
                        pointer-events: auto;
                        max-width: 250px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .ranking-preview-container .rank-1 { color: #ffd700; pointer-events: auto; }
                    .ranking-preview-container .rank-2 { color: #c0c0c0; pointer-events: auto; }
                    .ranking-preview-container .rank-3 { color: #cd7f32; pointer-events: auto; }
                    .ranking-preview-container .rank-4 { color: #ffffff; pointer-events: auto; }
                    .ranking-preview-container .rank-5 { color: #ffffff; pointer-events: auto; }
                    .ranking-preview-container .metadata {
                        margin-top: 20px;
                        padding-top: 20px;
                        border-top: 1px solid rgba(255,255,255,0.2);
                        display: flex;
                        gap: 15px;
                        font-size: 0.8rem;
                        color: #999;
                        justify-content: center;
                        width: 100%;
                        pointer-events: auto;
                    }
                </style>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">
                <div class="ranking-preview-container">
                    <h1 class="title text-stroke">
                        <span data-template-element-id="title_ranking" style="color: white;">RANKING</span> <span data-template-element-id="title_funniest" class="funniest" style="color: #ff0000;">FUNNIEST</span>
                    </h1>
                    <h2 data-template-element-id="title_channel" style="font-size: 1.4rem; text-align: center; margin: -10px 0 30px 0; color: white !important; background: transparent !important; font-family: 'Luckiest Guy', cursive;" class="text-stroke">{CHANNEL} MOMENTS</h2>
                    <ul class="ranking-list">
                        <li class="ranked-item rank-1">
                            <span data-template-element-id="rank_1_number" class="rank-number text-stroke">1.</span>
                            <span data-template-element-id="rank_1_title" class="rank-title text-stroke">Sample</span>
                        </li>
                        <li class="ranked-item rank-2">
                            <span data-template-element-id="rank_2_number" class="rank-number text-stroke">2.</span>
                            <span data-template-element-id="rank_2_title" class="rank-title text-stroke">Sample</span>
                        </li>
                        <li class="ranked-item rank-3">
                            <span data-template-element-id="rank_3_number" class="rank-number text-stroke">3.</span>
                            <span data-template-element-id="rank_3_title" class="rank-title text-stroke">Sample</span>
                        </li>
                        <li class="ranked-item rank-4">
                            <span data-template-element-id="rank_4_number" class="rank-number text-stroke">4.</span>
                            <span data-template-element-id="rank_4_title" class="rank-title text-stroke">Sample</span>
                        </li>
                        <li class="ranked-item rank-5">
                            <span data-template-element-id="rank_5_number" class="rank-number text-stroke">5.</span>
                            <span data-template-element-id="rank_5_title" class="rank-title text-stroke">Sample</span>
                        </li>
                    </ul>
                </div>
            `,
            'splitscreen': () => `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 0; text-align: center; background: #000; color: white; font-family: 'Montserrat', Arial, sans-serif; border-radius: 8px; overflow: hidden;">
                    <!-- TOP: Video Preview -->
                    <div style="flex: 1; width: 100%; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); display: flex; align-items: center; justify-content: center; position: relative;">
                        <div style="position: absolute; width: 100%; height: 100%; background: repeating-linear-gradient(45deg, #ff6a3d 0px, #ff6a3d 2px, transparent 2px, transparent 10px); opacity: 0.05; pointer-events: none;"></div>
                        <div style="text-align: center; position: relative; z-index: 2;">
                            <div style="font-size: 12px; color: #ff6a3d; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                                <span style="width: 6px; height: 6px; background: #ff6a3d; border-radius: 50%; animation: splitscreen-pulse 2s infinite;"></span>
                                📹 Video Preview
                            </div>
                            <div style="font-size: 14px; font-weight: 800; color: #fff; text-transform: uppercase; letter-spacing: 0.5px;">Your Content</div>
                        </div>
                    </div>

                    <!-- DIVIDER LINE - Draggable with Handle -->
                    <div id="splitscreenDivider" style="width: 100%; height: 8px; background: rgba(20, 20, 20, 1); z-index: 50; cursor: row-resize; display: flex; align-items: center; justify-content: center; position: relative; transition: all 0.2s ease; padding: 4px 0;">
                        <div style="width: 100%; height: 2px; background: rgba(255, 255, 255, 0.4); transition: all 0.2s ease;" id="dividerLine"></div>
                        <div style="position: absolute; width: 40px; height: 5px; background: rgba(255, 107, 0, 0.6); border-radius: 2.5px; transition: all 0.2s ease; left: 50%; transform: translateX(-50%); opacity: 0;" id="dividerHandle"></div>
                    </div>

                    <!-- BOTTOM: Gameplay with Video -->
                    <div data-no-text-select="true" onclick="showGameplayClipSelector(event)" style="flex: 1; width: 100%; background: #000; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; cursor: pointer; transition: all 0.2s ease;"
                         onmouseover="this.style.opacity = '0.8';"
                         onmouseout="this.style.opacity = '1';">
                        <video style="width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none;" autoplay muted loop playsinline id="splitscreenGameplayVideo">
                            <source src="/assets/Minecraft_1.mp4" type="video/mp4">
                            Your browser doesn't support HTML5 video.
                        </video>
                    </div>
                </div>
                <style>
                    @keyframes splitscreen-pulse {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.5; }
                    }
                </style>
            `
        };
        
        // Use template ID to find the correct preview renderer
        const generator = previewTemplates[template.id] || previewTemplates[template.type] || previewTemplates['ranked_compilation'];
        return `<style>@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.7; } }</style>${generator()}`;
    }

    async loadYouTubeSubtitles(videoId) {
        try {
            const statusEl = document.getElementById('youtubeSubtitleStatus');
            if (statusEl) {
                statusEl.textContent = 'Loading...';
            }

            // Fetch subtitles from backend
            const response = await fetch('/api/youtube/subtitles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ video_id: videoId })
            });

            let subtitles = [];
            if (response.ok) {
                const data = await response.json();
                subtitles = data.subtitles || [];
            }

            if (statusEl) {
                statusEl.textContent = subtitles.length > 0 ? 'Ready' : 'No subs';
            }

            // Initialize caption system with fetched subtitles
            if (typeof captionSystem !== 'undefined') {
                captionSystem.initializeCaptions(subtitles);
                captionSystem.playAnimation();
            }
        } catch (error) {
            safeLog('Error loading YouTube subtitles:', error);
            const statusEl = document.getElementById('youtubeSubtitleStatus');
            if (statusEl) {
                statusEl.textContent = 'Error';
            }
        }
    }

    extractYouTubeVideoId(url) {
        const regexPatterns = [
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^?&]+)/
        ];

        for (const regex of regexPatterns) {
            const match = url.match(regex);
            if (match && match[1]) {
                const videoId = match[1];
                // 🔐 SECURITY: Validate extracted video ID format
                // YouTube video IDs are exactly 11 characters: [a-zA-Z0-9_-]
                if (/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
                    return videoId;
                }
            }
        }
        return null;
    }

    isYouTubeShort(url) {
        return /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\//.test(url);
    }

    async fetchVideoMetadata(videoUrl, durationEl, formatEl, descEl) {
        try {
            // Extract video ID from URL
            const videoId = this.extractYouTubeVideoId(videoUrl);
            if (!videoId) {
                if (descEl) descEl.textContent = 'Invalid YouTube URL';
                return;
            }

            const apiBase = window.API_BASE_URL || 'http://127.0.0.1:5500/api';
            
            // Try to fetch video metadata from backend
            try {
                const response = await fetch(`${apiBase}/youtube/get-metadata/${videoId}`, {
                    signal: AbortSignal.timeout(3000) // 3 second timeout
                });

                if (response.ok) {
                    const data = await response.json();
                    
                    // Update description with video title
                    if (descEl && data.title) {
                        descEl.textContent = data.title;
                    }
                    
                    // Update duration
                    if (durationEl && data.duration) {
                        let durationText = data.duration;
                        if (typeof data.duration === 'number') {
                            durationText = `~${Math.floor(data.duration / 60)}m ${data.duration % 60}s`;
                        }
                        durationEl.textContent = durationText;
                    }
                    
                    // Update format
                    if (formatEl) {
                        const format = this.isYouTubeShort(videoUrl) ? 'YouTube Shorts' : 'TikTok / Shorts';
                        formatEl.textContent = format;
                    }
                    return;
                }
            } catch (fetchError) {
                safeLog('Backend metadata fetch failed, using fallback:', fetchError.message);
            }
            
            // FALLBACK: If backend endpoint doesn't exist, just show basic info
            if (descEl) descEl.textContent = `YouTube Video (ID: ${videoId.substring(0, 8)}...)`;
            if (formatEl) formatEl.textContent = this.isYouTubeShort(videoUrl) ? 'YouTube Shorts' : 'TikTok / Shorts';
            if (durationEl) durationEl.textContent = '~60s';
            
        } catch (error) {
            safeLog('Error in fetchVideoMetadata:', error);
            // Keep default/loading values
            if (descEl) descEl.textContent = 'Unable to fetch video info';
        }
    }

    closeTemplatePreviewModal() {
        const modal = document.getElementById('templatePreviewModal');
        if (modal) {
            modal.classList.remove('active');
            modal.style.display = 'none';
            modal.style.visibility = 'hidden';
            modal.style.opacity = '0';
            document.body.classList.remove('modal-open');
        }
        
        // Collapse sheet on mobile
        const templateSheet = document.querySelector('.template-preview-sidebar');
        if (templateSheet) {
            templateSheet.classList.remove('expanded');
        }
        
        // Restore navigation elements on mobile/tablet
        const navWrapper = document.getElementById('navWrapper');
        const profileNotifWrapper = document.querySelector('.profile-notif-wrapper');
        if (navWrapper) {
            navWrapper.classList.remove('disabled');
        }
        if (profileNotifWrapper) {
            profileNotifWrapper.classList.remove('disabled');
        }
        
        this.currentTemplateForPreview = null;
    }

    async updateWatermarkToggleState() {
        const watermarkFreeNotice = document.getElementById('watermarkFreeNotice');
        const watermarkPaidSection = document.getElementById('watermarkPaidSection');
        const watermarkToggle = document.getElementById('watermarkToggle');
        
        if (!watermarkToggle) return;
        
        try {
            const response = await fetch(`${API_BASE_URL}/auth/subscription?t=${Date.now()}`, {
                headers: getAuthHeaders(),
                credentials: 'include',  // ✅ Send httpOnly cookie
                cache: 'no-store'
            });
            
            if (response.ok) {
                const data = await response.json();
                const planName = data.subscription?.plan_name?.toLowerCase() || 'free';
                const isPaid = ['basic', 'prime', 'elite'].includes(planName);
                
                if (isPaid) {
                    // Show toggle for paid users
                    if (watermarkPaidSection) watermarkPaidSection.style.display = 'block';
                    if (watermarkFreeNotice) watermarkFreeNotice.style.display = 'none';
                    watermarkToggle.disabled = false;
                    watermarkToggle.checked = false;
                    // Paid users can toggle
                    this.currentTemplateForPreview.addWatermark = false;
                } else {
                    // Show upgrade notice for free users, force watermark enabled
                    if (watermarkFreeNotice) watermarkFreeNotice.style.display = 'block';
                    if (watermarkPaidSection) watermarkPaidSection.style.display = 'none';
                    // Free users ALWAYS have watermark
                    this.currentTemplateForPreview.addWatermark = true;
                }
            }
        } catch (error) {
            safeLog('Error checking watermark eligibility:', error);
            // Default to paid behavior if fetch fails
            if (watermarkPaidSection) watermarkPaidSection.style.display = 'block';
            if (watermarkFreeNotice) watermarkFreeNotice.style.display = 'none';
        }
    }

    handleWatermarkToggle(e) {
        if (!this.currentTemplateForPreview) return;
        
        const watermarkToggle = document.getElementById('watermarkToggle');
        const isChecked = watermarkToggle.checked;
        
        // Update the template preview state
        this.currentTemplateForPreview.addWatermark = isChecked;
    }

    confirmTemplateUse() {
        if (!this.currentTemplateForPreview) {
            showNotification('Please select a template', 'error');
            return;
        }

        // SAVE template data BEFORE closing modal (closing sets currentTemplateForPreview to null)
        const templateId = this.currentTemplateForPreview.id;
        const template = this.templates[templateId];
        
        safeLog('🔍 confirmTemplateUse:', {
            templateId,
            availableTemplates: Object.keys(this.templates),
            foundTemplate: !!template,
            cachedData: this.currentTemplateForPreview.data
        });
        
        // If template not found in templates dict, try to use cached data
        if (!template && !this.currentTemplateForPreview.data) {
            safeLog('❌ Template not found:', templateId, 'Available:', Object.keys(this.templates));
            showNotification(`Template "${templateId}" not found. Available: ${Object.keys(this.templates).join(', ')}`, 'error');
            return;
        }

        const promptText = document.getElementById('aiPromptInput')?.value.trim() || '';
        
        // Store the AI prompt
        this.currentAIPrompt = promptText;

        
        // Get YouTube URL from input
        const youtubeUrl = document.getElementById('youtubeUrlInput')?.value.trim();
        
        if (!youtubeUrl) {
            showNotification('Please enter a YouTube URL first', 'error');
            return;
        }
        
        // Close modal AFTER saving template data
        this.closeTemplatePreviewModal();
        
        // Start clip processing with the ACTUAL YouTube URL
        this.startClipProcessingWithSlots(youtubeUrl, templateId);
    }



    showSlotSystemInfo() {
        // Create or update slot system info in the UI
        let slotInfo = document.getElementById('slotSystemInfo');
        if (!slotInfo) {
            slotInfo = document.createElement('div');
            slotInfo.id = 'slotSystemInfo';
            slotInfo.className = 'slot-system-info';
            
            const templateSection = document.getElementById('templatesSection');
            if (templateSection) {
                templateSection.appendChild(slotInfo);
            }
        }
        
        slotInfo.innerHTML = `
            <div class="slot-system-card">
                <div class="slot-system-icon">
                    <i class="fas fa-layer-group"></i>
                </div>
                <div class="slot-system-content">
                    <h4>Slot System Active</h4>
                    <p>This template uses the dynamic 1-5 slot system. New clips will fill from slot 5 upward.</p>
                    <div class="slot-visualization">
                        <div class="slot-row">
                            <div class="slot-visual" data-slot="1">1</div>
                            <div class="slot-visual" data-slot="2">2</div>
                            <div class="slot-visual" data-slot="3">3</div>
                            <div class="slot-visual" data-slot="4">4</div>
                            <div class="slot-visual" data-slot="5">5</div>
                        </div>
                        <div class="slot-labels">
                            <span>New clips start here →</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    showConfirmationButtons(show) {
        const confirmBtn = document.getElementById('confirmTemplateBtn');
        const cancelBtn = document.getElementById('cancelTemplateBtn');
        
        if (confirmBtn && cancelBtn) {
            if (show) {
                confirmBtn.style.display = 'flex';
                cancelBtn.style.display = 'flex';
            } else {
                confirmBtn.style.display = 'none';
                cancelBtn.style.display = 'none';
            }
        }
    }

    async confirmTemplateSelection() {
        if (!this.selectedTemplate) {
            showNotification('Please select a template first', 'error');
            return;
        }

        const url = document.getElementById('youtubeUrlInput')?.value.trim();
        if (!url) {
            showNotification('Please enter a YouTube URL first', 'error');
            return;
        }

        // Show template confirmation with slot info
        this.showTemplateConfirmation(this.selectedTemplate, url);
    }

    showTemplateConfirmation(templateId, url) {
        const template = this.templates[templateId];
        if (!template) {
            showNotification('Template not found', 'error');
            return;
        }

        const slotInfo = template.supportsSlotSystem ? 
            '\n\n🎯 Using Slot System: New clips will fill from slot 5 upward' : 
            '';

        if (confirm(`Create "${template.name}" from this YouTube URL?\n\nURL: ${url}\n\n${template.description}\n${template.duration}${slotInfo}\n\nThis may take a few minutes to process.`)) {
            this.startClipProcessingWithSlots(url, templateId);
        }
    }

    cancelTemplateSelection() {
        this.selectedTemplate = null;
        document.querySelectorAll('.template-card').forEach(card => {
            card.classList.remove('selected');
        });

        this.showConfirmationButtons(false);
        
        // Remove slot system info
        const slotInfo = document.getElementById('slotSystemInfo');
        if (slotInfo) {
            slotInfo.remove();
        }
    }

    async startClipProcessingWithSlots(url, templateId) {
        try {
            // 🔐 BACKEND REQUIREMENT: /clips/start MUST:
            // 1. Verify user session from httpOnly cookie
            // 2. Check user's subscription plan and enforce rate limits (daily limits, cooldowns)
            // 3. Validate URL strictly (whitelist YouTube domains only)
            // 4. Use library functions (not shell commands) to fetch video
            // 5. Return 401/403 if user lacks permissions
            
            // Get watermark preference from toggle
            const watermarkToggle = document.getElementById('watermarkToggle');
            const watermarkEnabled = watermarkToggle ? watermarkToggle.checked : true;
            
            const headers = getAuthHeaders();
            
            // 🎨 Get customizations from customizer if they exist
            let customizations = null;
            if (window.customizer && typeof window.customizer.collectCustomizations === 'function') {
                customizations = window.customizer.collectCustomizations();
            }
            
            const payload = {
                url: url,
                template_id: templateId,
                use_slot_system: true,
                watermark_enabled: watermarkEnabled
            };
            
            // 🎨 Add customizations to payload if they exist and are not empty
            if (customizations && Object.keys(customizations).length > 0) {
                payload.customizations = customizations;
                safeLog('📝 Sending customizations with video generation:', customizations);
            }
            
            const response = await fetch(`${API_BASE_URL}/clips/start`, {
                method: 'POST',
                headers: headers,
                credentials: 'include',  // 🔐 Send httpOnly cookie
                body: JSON.stringify(payload)
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                
                // Handle 429 status specifically
                if (response.status === 429) {
                   
                    // Handle GENERATION_COOLDOWN (per-tier cooldown limit)
                    if (errorData.error_code === 'GENERATION_COOLDOWN') {
                        const remainingSeconds = errorData.remaining_seconds || errorData.cooldown_seconds || 30;
                        const remainingMinutes = Math.floor(remainingSeconds / 60);
                        const remainingSecsOnly = remainingSeconds % 60;
                        
                        // Start countdown timer on submit button
                        startCooldownTimer(remainingSeconds);
                        
                        // Show the cooldown-based error message
                        const durationError = document.getElementById('durationErrorMessage');
                        if (durationError) {
                            const errorText = document.getElementById('errorDurationText');
                            if (errorText) {
                                let timestr = '';
                                if (remainingMinutes > 0) {
                                    timestr = `${remainingMinutes}m ${remainingSecsOnly}s`;
                                } else {
                                    timestr = `${remainingSeconds}s`;
                                }
                                errorText.textContent = `You can generate another video in ${timestr}.`;
                            }
                            durationError.style.display = 'flex';
                        }
                        showNotification(errorData.error, 'error');
                        return;
                    }
                    
                    // Handle other 429 errors
                    if (errorData.error_code === 'DAILY_LIMIT_REACHED') {
                        showLimitModal({
                            used: errorData.daily_count,
                            limit: errorData.daily_limit,
                            plan_type: 'free',
                            last_video_date: errorData.last_video_date,
                            cooldown_hours: errorData.cooldown_hours || 96
                        });
                        return;
                    } else if (errorData.error_code === 'VIDEO_LIMIT_REACHED') {
                        showLimitModal({
                            used: errorData.storage_info?.current_video_count,
                            limit: errorData.storage_info?.plan_info?.videos_space,
                            plan_type: errorData.plan_type,
                            last_video_date: errorData.last_video_date,
                            cooldown_hours: errorData.cooldown_hours || 96
                        });
                        return;
                    } else {
                        // Generic 429 error
                        showNotification(errorData.error || 'Rate limit reached. Please try again later.', 'error');
                        return;
                    }
                } else if (errorData.error_code === 'VIDEO_TOO_LONG') {
                    // Show specialized video too long modal
                    const videoMinutes = errorData.video_minutes || 0;
                    const maxMinutes = errorData.max_duration_minutes || 0;
                    showNotification(`Video too long (${videoMinutes}m). Maximum is ${maxMinutes}m for your plan.`, 'error');
                    return;
                } else {
                    // Generic error handling for non-429 errors
                    const errorMsg = errorData.error || 'Failed to start processing';
                    showNotification(errorMsg, 'error');
                    throw new Error(errorMsg);
                }
            }

            const result = await response.json();
            this.currentProjectId = result.project_id;

            // Create processing item with slot info
            const processingItem = {
                id: Date.now(),
                projectId: this.currentProjectId,
                name: `${result.template.name} from YouTube`,
                template: templateId,
                templateName: result.template.name,
                status: 'processing',
                progress: 0,
                message: 'Starting download...',
                timestamp: new Date(),
                lastChecked: Date.now(),
                slotNumber: null,
                useSlotSystem: true,
                isSlotSystem: true
            };

            await this.addProcessingItem(processingItem);
            
            // Show the progress spinner immediately
            const wrapper = document.getElementById('generationProgressWrapper');
            if (wrapper) {
                wrapper.style.display = 'flex';
                const progressCircle = document.getElementById('progressCircle');
                const progressText = document.getElementById('generationProgressText');
                if (progressCircle) {
                    progressCircle.style.strokeDasharray = '0 75.36'; // Reset to 0%
                }
                if (progressText) {
                    progressText.textContent = '0%';
                }
            }
            
            // Register the processing task with websocket for real-time updates
            if (solisWSClient && result.project_id) {
                solisWSClient.registerTask(result.project_id, 'processing');
            }
            
            // Disable the submit button while video is generating
            const submitBtn = document.getElementById('processUrlBtn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.classList.add('is-generating');
            }
            
            this.switchTab('library');
            // Start monitoring for this specific item (fallback for polling)
            this.startMonitoring(processingItem.id);

        } catch (error) {
            safeLog('startClipProcessingWithSlots error:', error);
            showNotification('Failed to start processing: ' + error.message, 'error');
        }
    }

    startMonitoring(itemId) {
        // Clear existing interval for this item
        this.stopMonitoring(itemId);

        const intervalId = setInterval(async () => {
            const item = this.processingItems.find(i => i.id === itemId);
            if (!item) {
                this.stopMonitoring(itemId);
                return;
            }

            // Check status while item is processing (on any tab)
            if (item.status === 'processing') {
                await this.checkItemStatus(itemId);
            } else {
                this.stopMonitoring(itemId);
            }
        }, 3000); // Check every 3 seconds for updates

        this.monitoringIntervals.set(itemId, intervalId);
    }

    stopMonitoring(itemId) {
        if (this.monitoringIntervals.has(itemId)) {
            clearInterval(this.monitoringIntervals.get(itemId));
            this.monitoringIntervals.delete(itemId);
        }
    }

    stopAllMonitoring() {
        this.monitoringIntervals.forEach((intervalId, itemId) => {
            clearInterval(intervalId);
        });
        this.monitoringIntervals.clear();
    }

    async checkItemStatus(itemId) {
        try {
            const item = this.processingItems.find(i => i.id === itemId);
            if (!item) return;

            const headers = getAuthHeaders();
            const response = await fetch(`${API_BASE_URL}/clips/status/${item.projectId}`, {
                headers: headers,
                credentials: 'include'  // 🔐 Send httpOnly cookie
            });
            
            if (!response.ok) return;
            
            const status = await response.json();

            // Only update if status actually changed (reduce re-renders)
            const statusChanged = item.status !== status.status || item.progress !== status.progress;
            
            if (statusChanged) {
                // Update item
                item.status = status.status;
                item.progress = status.progress;
                item.message = status.message;
                item.lastChecked = Date.now();
                
                // Update slot number if available
                if (status.slot_number && item.isSlotSystem) {
                    item.slotNumber = status.slot_number;
                    item.name = `${item.templateName} (Slot ${status.slot_number})`;
                }

                this.updateProcessingView();
                // Also update library view if on that tab to show progress updates
                if (this.currentTab === 'library') {
                    this.updateLibraryView();
                }
                this.saveProcessingItems();
            }

            if (status.status === 'completed') {
                item.status = 'completed';
                this.moveToLibrary(item);
                this.stopMonitoring(itemId);
                showNotification('Clip created successfully!', 'success');
                
                // Re-enable the submit button when generation completes
                const submitBtn = document.getElementById('processUrlBtn');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('is-generating');
                }
                
                // Show slot info if using slot system
                if (item.isSlotSystem && item.slotNumber) {
                    showNotification(`Clip added to Slot ${item.slotNumber}`, 'info');
                }
                
                // Keep library tab active to see the completed clip
                this.switchTab('library');
                this.updateProcessingView();
                this.saveProcessingItems();
            } else if (status.status === 'error') {
                item.status = 'failed';
                item.message = status.message; // Preserve error message for display
                this.stopMonitoring(itemId);
                
                // Re-enable the submit button on error
                const submitBtn = document.getElementById('processUrlBtn');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('is-generating');
                }
                
                // Remove failed item from processing after showing for a bit
                setTimeout(() => {
                    this.processingItems = this.processingItems.filter(i => i.id !== itemId);
                    this.updateLibraryView();
                    this.saveProcessingItems();
                }, 5000); // Show error for 5 seconds then remove
                
                // Check if error is about video being too long
                const errorMsg = status.message || '';
                safeLog('Processing error detected:', errorMsg);
                
                // Try to detect video too long error using multiple patterns
                // Pattern 1: Exact format "Video is too long. Maximum allowed: X minutes. Your video: Y minutes."
                const videoTooLongPattern1 = /Video is too long\. Maximum allowed:\s*(\d+)\s*minutes\. Your video:\s*(\d+)\s*minutes/i;
                // Pattern 2: Alternative format
                const videoTooLongPattern2 = /Maximum allowed:\s*(\d+)\s*minutes.*Your video:\s*(\d+)\s*minutes/i;
                // Pattern 3: Fallback with just looking for keywords
                const videoTooLongPattern3 = /too long|duration limit/i;
                

                let videoTooLongMatch = errorMsg.match(videoTooLongPattern1);
                safeLog('Pattern 1 match:', videoTooLongMatch);
                
                if (videoTooLongMatch && videoTooLongMatch.length >= 3) {
                    const maxMinutes = parseInt(videoTooLongMatch[1]);
                    const videoMinutes = parseInt(videoTooLongMatch[2]);
                    safeLog('✓ Video too long detected (pattern 1):', videoMinutes, 'max:', maxMinutes);
                    setTimeout(() => {
                        if (window && typeof window.openVideoTooLongModal === 'function') {
                            window.openVideoTooLongModal(videoMinutes, maxMinutes);
                        }
                    }, 100);
                } else {
                    // Try pattern 2
                    videoTooLongMatch = errorMsg.match(videoTooLongPattern2);
                    safeLog('Pattern 2 match:', videoTooLongMatch);
                    
                    if (videoTooLongMatch && videoTooLongMatch.length >= 3) {
                        const maxMinutes = parseInt(videoTooLongMatch[1]);
                        const videoMinutes = parseInt(videoTooLongMatch[2]);
                        safeLog('✓ Video too long detected (pattern 2):', videoMinutes, 'max:', maxMinutes);
                        setTimeout(() => {
                            if (window && typeof window.openVideoTooLongModal === 'function') {
                                window.openVideoTooLongModal(videoMinutes, maxMinutes);
                            }
                        }, 100);
                    } else if (videoTooLongPattern3.test(errorMsg)) {
                        // Fallback: Try to extract any numbers
                        safeLog('Pattern 3 match (keywords found), trying number extraction...');
                        const numbers = errorMsg.match(/\d+/g);
                        if (numbers && numbers.length >= 2) {
                            // Try to find the last two numbers (likely video duration and max duration)
                            const videoMinutes = parseInt(numbers[numbers.length - 2]);
                            const maxMinutes = parseInt(numbers[numbers.length - 1]);
                            if (videoMinutes > 0 && maxMinutes > 0 && videoMinutes > maxMinutes) {
                                safeLog('✓ Video too long detected (fallback):', videoMinutes, 'max:', maxMinutes);
                                setTimeout(() => {
                                    if (window && typeof window.openVideoTooLongModal === 'function') {
                                        window.openVideoTooLongModal(videoMinutes, maxMinutes);
                                    }
                                }, 100);
                            }
                        }
                    }
                }
                
                showNotification('Clip creation failed: ' + status.message, 'error');
            }
            // If still processing, continue monitoring

        } catch (error) {
            safeLog('Error checking status for item', itemId, error);
            // Don't stop monitoring on network errors, just try again next interval
        }
    }

    startSmartMonitoring() {
        // Only monitor items that are still processing
        this.processingItems.forEach(item => {
            if (item.status === 'processing') {
                this.startMonitoring(item.id);
            }
        });
    }

    // ⚠️ SECURITY: Validates basic URL format only. Backend MUST validate and sanitize all URLs.
    // Do NOT pass raw user input to shell commands on backend!
    isValidYouTubeUrl(urlString) {
        try {
            const url = new URL(urlString.startsWith('http') ? urlString : 'https://' + urlString);
            const hostname = url.hostname.toLowerCase();
            const pathname = url.pathname.toLowerCase();
            
            // 🔐 SECURITY: Strict domain validation using Set
            const allowedDomains = new Set(['youtube.com', 'www.youtube.com', 'youtu.be', 'www.youtu.be']);
            if (!allowedDomains.has(hostname)) {
                return false;
            }
            
            // 🔐 SECURITY: Check for path traversal attacks
            if (pathname.includes('..') || pathname.includes('//')) {
                return false;
            }
            
            // Must have a path (video ID or watch endpoint)
            if (!pathname || pathname === '/') {
                return false;
            }
            
            // 🔐 SECURITY: Extract and validate video ID format
            const videoId = this.extractYouTubeVideoId(urlString);
            if (!videoId) {
                return false;
            }
            
            // YouTube video IDs are exactly 11 characters: [a-zA-Z0-9_-]
            return /^[a-zA-Z0-9_-]{11}$/.test(videoId);
        } catch (e) {
            return false;
        }
    }

    /**
     * 🔐 SECURITY: Validate projectId format to prevent path traversal/IDOR
     * NOTE: Backend MUST validate ownership - frontend validation is UX only
     */
    validateProjectId(projectId) {
        if (!projectId || typeof projectId !== 'string') return false;
        // Reject path traversal: .., /, \, null bytes, special chars
        if (projectId.match(/\.\.|\/|\\|:|\||<|>|"|'|\x00/g)) return false;
        // Accept only alphanumeric, dash, underscore
        return /^[a-zA-Z0-9_-]+$/.test(projectId);
    }

    /**
     * 🔐 SECURITY: Validate itemId format to prevent injection/IDOR
     * NOTE: Backend MUST validate ownership - frontend validation is UX only
     */
    validateItemId(itemId) {
        if (!itemId || typeof itemId !== 'string') return false;
        // Reject path traversal and injection attempts
        if (itemId.match(/\.\.|\/|\\|:|\||<|>|"|'|\x00/g)) return false;
        // Accept alphanumeric, dash, underscore, dot
        return /^[a-zA-Z0-9_.-]+$/.test(itemId);
    }

    toggleUrlButtonLoading(isLoading) {
        const submitBtn = document.getElementById('processUrlBtn');
        if (!submitBtn) return;
        
        if (isLoading) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            // ✅ SECURITY FIX: Persist button state to sessionStorage to prevent refresh bypass
            sessionStorage.setItem('urlButtonLockeduntil', Date.now().toString());
            sessionStorage.setItem('urlButtonLocked', 'true');
        } else {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            // Clear persistent lock
            sessionStorage.removeItem('urlButtonLocked');
            sessionStorage.removeItem('urlButtonLockeduntil');
        }
    }
    
    // ✅ SECURITY FIX: Check for persistent rate limit on page load
    enforceUrlButtonRateLimitOnLoad() {
        const submitBtn = document.getElementById('processUrlBtn');
        if (!submitBtn) return;
        
        // Check if button should be locked from sessionStorage
        const isLocked = sessionStorage.getItem('urlButtonLocked') === 'true';
        const lockedUntil = sessionStorage.getItem('urlButtonLockeduntil');
        
        if (isLocked && lockedUntil) {
            const lockedUntilTime = parseInt(lockedUntil, 10);
            const now = Date.now();
            const remainingMs = lockedUntilTime - now;
            
            // If still within cooldown window, re-enable the lock
            if (remainingMs > 0) {
                const COOLDOWN_MS = CONFIG.RATE_LIMITING.YOUTUBE_PROCESS_MIN_MS || 3000;
                if (remainingMs < COOLDOWN_MS + 5000) { // Add 5s buffer for processing time
                    submitBtn.disabled = true;
                    submitBtn.style.cursor = 'not-allowed';
                    submitBtn.style.opacity = '0.5';
                    submitBtn.classList.add('loading');
                    
                    // Auto-unlock when timer expires
                    const unlockTimer = setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.style.cursor = 'pointer';
                        submitBtn.style.opacity = '1';
                        submitBtn.classList.remove('loading');
                        sessionStorage.removeItem('urlButtonLocked');
                        sessionStorage.removeItem('urlButtonLockeduntil');
                    }, remainingMs);
                    
                    // Store timer ID so it can be cancelled if needed
                    submitBtn._unlockTimer = unlockTimer;
                }
            } else {
                // Lock expired, clear it
                sessionStorage.removeItem('urlButtonLocked');
                sessionStorage.removeItem('urlButtonLockeduntil');
            }
        }
    }

    async processYouTubeUrl() {
        // ⚠️ SECURITY: Client-side rate limiting is UX only, NOT security
        // Attackers can disable JavaScript or send requests directly to API
        // BACKEND MUST enforce rate limiting on the server
        const now = Date.now();
        if (now - this.lastYouTubeProcessTime < CONFIG.RATE_LIMITING.YOUTUBE_PROCESS_MIN_MS) {
            showNotification('Please wait a moment before trying again', 'warning');
            return;
        }
        this.lastYouTubeProcessTime = now;
        
        const urlInput = document.getElementById('youtubeUrlInput');
        if (!urlInput) return;
        
        const url = urlInput.value.trim();
        
        if (!url) {
            showNotification('Please enter a YouTube URL', 'error');
            return;
        }

        // Frontend validation - backend MUST also validate all URLs strictly
        if (!this.isValidYouTubeUrl(url)) {
            showNotification('Please enter a valid YouTube URL (youtube.com or youtu.be)', 'error');
            return;
        }

        // Show loading animation
        this.toggleUrlButtonLoading(true);

        try {
            // Check video duration BEFORE showing templates
            const durationCheckResult = await this.checkVideoDurationBeforeTemplates(url);
            
            if (!durationCheckResult.allowed) {
                // Video is too long, error message already shown - stay in create tab
                this.toggleUrlButtonLoading(false);
                return;
            }

            // Check if user has reached daily limit BEFORE redirecting to templates
            const headers = getAuthHeaders();
            try {
                const checkResponse = await fetch(`${API_BASE_URL}/clips/check-limits`, {
                    method: 'GET',
                    headers: headers,
                    credentials: 'include'  // 🔐 Send httpOnly cookie
                });
                
                if (checkResponse.ok) {
                    const limitData = await checkResponse.json();
                    // Backend has already verified user limits via session
                    
                    // Check if user is already generating a video
                    if (limitData.is_generating) {
                        showNotification('A video is already being generated. Please wait for it to complete before starting another one.', 'warning');
                        // Disable the submit button to prevent further attempts
                        const submitBtn = document.getElementById('processUrlBtn');
                        if (submitBtn) {
                            submitBtn.disabled = true;
                            submitBtn.style.opacity = '0.5';
                            submitBtn.style.cursor = 'not-allowed';
                            submitBtn.classList.add('is-generating');
                        }
                        this.toggleUrlButtonLoading(false);
                        return;
                    }
                    
                    // Check if user can generate (main flag)
                    if (!limitData.can_generate) {
                        showLimitModal({
                            used: limitData.daily?.used || 0,
                            limit: limitData.daily?.limit || 1,
                            plan_type: limitData.plan?.name?.toLowerCase() || 'free',
                            last_video_date: limitData.last_video_date || '1970-01-01',
                            cooldown_hours: limitData.generation?.cooldown_hours || 96
                        });
                        this.toggleUrlButtonLoading(false);
                        return;
                    }
                    
                    // Old field names fallback for backwards compatibility
                    if (limitData.daily_limit_reached) {
                        showLimitModal({
                            used: limitData.daily_count,
                            limit: limitData.daily_limit,
                            plan_type: 'free',
                            last_video_date: limitData.last_video_date || '1970-01-01',
                            cooldown_hours: limitData.generation?.cooldown_hours || 96
                        });
                        this.toggleUrlButtonLoading(false);
                        return;
                    }
                    
                    // Check storage limit
                    if (limitData.storage_limit_reached) {
                        showLimitModal({
                            used: limitData.current_video_count,
                            limit: limitData.plan_video_limit,
                            plan_type: limitData.plan?.name?.toLowerCase() || 'free',
                            last_video_date: limitData.last_video_date || '1970-01-01',
                            cooldown_hours: limitData.generation?.cooldown_hours || 96
                        });
                        this.toggleUrlButtonLoading(false);
                        return;
                    }
                }
            } catch (error) {
                // Continue anyway if check fails
            }

            // Show template selection (redirect to templates tab)
            this.switchTab('templates');
            showNotification('YouTube URL validated. Please select a template.', 'success');
            
            // Show preview container
            const previewContainer = document.getElementById('clipPreviewContainer');
            if (previewContainer) {
                previewContainer.style.display = 'block';
            }
        } finally {
            // Always hide loading animation when done
            this.toggleUrlButtonLoading(false);
        }
    }

    async checkVideoDurationBeforeTemplates(url) {
        try {
            const headers = getAuthHeaders();
            
            // Call backend to check video duration
            const response = await fetch(`${API_BASE_URL}/clips/check-duration`, {
                method: 'POST',
                headers: headers,
                credentials: 'include',  // 🔐 Send httpOnly cookie
                body: JSON.stringify({ url: url })
            });

            const data = await response.json();

            if (!response.ok) {
                // If error from backend
                if (data.error_code === 'VIDEO_TOO_LONG') {
                    const videoMinutes = data.video_minutes || 0;
                    const maxMinutes = data.max_duration_minutes || 0;
                    safeLog('Video too long detected at URL input:', videoMinutes, 'max:', maxMinutes);
                    
                    // Show inline error message below URL input
                    const errorDiv = document.getElementById('durationErrorMessage');
                    const errorText = document.getElementById('errorDurationText');
                    
                    if (errorDiv && errorText) {
                        // Use safe DOM manipulation instead of innerHTML to prevent XSS
                        errorText.textContent = `You cannot post a video above ${maxMinutes} minutes. Your video is ${videoMinutes} minutes. Upgrade to unlock longer videos.`;
                        errorDiv.style.display = 'block';
                    }
                    
                    return { allowed: false };
                } else {
                    showNotification('Error checking video: ' + (data.error || 'Unknown error'), 'error');
                    return { allowed: false };
                }
            }

            // Video is OK - hide error message if visible
            const errorDiv = document.getElementById('durationErrorMessage');
            if (errorDiv) {
                errorDiv.style.display = 'none';
            }

            return { 
                allowed: true, 
                duration: data.duration_minutes,
                maxAllowed: data.max_duration_minutes
            };

        } catch (error) {
            safeLog('Error checking video duration:', error);
            // Silently allow proceeding if check fails
            const errorDiv = document.getElementById('durationErrorMessage');
            if (errorDiv) {
                errorDiv.style.display = 'none';
            }
            return { allowed: true };
        }
    }

    async generateClipWithSlotSystem() {
        const urlInput = document.getElementById('youtubeUrlInput');
        if (!urlInput) return;
        
        const url = urlInput.value.trim();
        
        if (!url) {
            showNotification('Please process a YouTube URL first', 'error');
            return;
        }

        if (!this.selectedTemplate) {
            showNotification('Please select a template first', 'error');
            return;
        }

        this.startClipProcessingWithSlots(url, this.selectedTemplate);
    }

    addProcessingItem(item) {
        this.processingItems.unshift(item);
        this.saveProcessingItems();
        
        // If on library tab, update the view to show the new processing item
        if (this.currentTab === 'library') {
            this.updateLibraryView();
        }
    }

    updateProcessingView() {
        // If on library tab, update the entire library view to show progress changes
        if (this.currentTab === 'library') {
            this.updateLibraryView();
            return;
        }
        
        // Update progress for existing processing cards (for processing tab if it exists)
        this.processingItems.forEach(item => {
            const progress = item.progress || 0;
            const remaining = 100 - progress;  // Show how much is LEFT
            
            // Update percentage display with remaining time
            const percentDiv = document.querySelector(`[data-loading-id="${item.id}"] .loading-percentage`);
            if (percentDiv) {
                percentDiv.textContent = `${remaining}% left`;
            }
            
            // Update loader parts visibility based on REMAINING progress
            const loaderParts = document.querySelectorAll(`[data-loading-id="${item.id}"] .loader-part`);
            loaderParts.forEach((part, index) => {
                const threshold = (index + 1) * 25;
                part.style.opacity = remaining >= threshold ? '1' : '0';
            });
        });
    }

    oldUpdateProcessingView_old() {
        const processingList = document.getElementById('processingList');
        const processingSection = document.getElementById('processingSection');
        const emptyState = document.getElementById('emptyProcessingState');
        
        if (!processingList || !emptyState || !processingSection) return;
        
        // Show/hide section
        if (this.processingItems.length === 0) {
            emptyState.style.display = 'block';
            processingList.innerHTML = '';
            processingSection.style.display = 'none';
            return;
        }

        emptyState.style.display = 'none';
        processingSection.style.display = 'block';
        
        // Update items with progressive loader
        processingList.innerHTML = this.processingItems.map(item => {
            const progress = item.progress || 0;
            return `
                <div class="processing-item" data-id="${item.id}">
                    <div class="processing-card">
                        <!-- Thumbnail with video icon -->
                        <div class="processing-thumbnail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                            
                            <!-- Progressive circular loader (only show if processing) -->
                            ${item.status === 'processing' ? `
                                <div class="processing-loader">
                                    <div class="loader">
                                        ${this.renderLoaderParts(progress)}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                        
                        <!-- Info section -->
                        <div class="processing-info">
                            <div>
                                <div class="processing-name">${item.name}</div>
                                <div class="processing-status ${item.status}">
                                    <i class="fas fa-${this.getStatusIcon(item.status)}"></i>
                                    ${this.formatStatus(item.status)}
                                </div>
                                ${item.message && item.status === 'processing' ? `
                                    <div class="processing-message">${item.message}</div>
                                ` : ''}
                            </div>
                            ${item.status === 'processing' ? `
                                <div class="processing-percentage">${progress}%</div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    getStatusIcon(status) {
        const icons = {
            'processing': 'spinner',
            'completed': 'check',
            'failed': 'exclamation'
        };
        return icons[status] || 'question';
    }

    formatStatus(status) {
        return status.charAt(0).toUpperCase() + status.slice(1);
    }

    renderLoaderParts(progress) {
        // Show REMAINING progress (how much is left)
        const remaining = 100 - progress;
        const parts = [
            { opacity: remaining >= 25 ? 1 : 0 },
            { opacity: remaining >= 50 ? 1 : 0 },
            { opacity: remaining >= 75 ? 1 : 0 },
            { opacity: remaining >= 100 ? 1 : 0 }
        ];
        return parts.map((part, i) => `<div class="loader-part loader-part-${i + 1}" style="opacity: ${part.opacity}; transition: opacity 0.4s ease;"></div>`).join('');
    }

    async downloadClip(projectId) {
        try {
            console.log('📥 Download initiated for projectId:', projectId);
            
            // 🔐 IDOR PROTECTION (Backend Responsibility):
            // Frontend sends projectId, but backend MUST verify user owns this project
            // before allowing download. Backend must check:
            // 1. User session from httpOnly cookie
            // 2. Project ownership (projectId format: "userId_uuid")
            // 3. User subscription allows download
            const headers = getAuthHeaders();
            const downloadUrl = `${API_BASE_URL}/clips/download/${projectId}`;
            console.log('📥 Fetching from:', downloadUrl);
            
            const response = await fetch(downloadUrl, {
                headers: headers,
                credentials: 'include'  // 🔐 Send httpOnly cookie
            });
            
            console.log('📥 Response status:', response.status);
            
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                
                // Get filename from response headers or use default
                const contentDisposition = response.headers.get('content-disposition');
                let filename = 'clip.mp4';
                if (contentDisposition) {
                    const filenameMatch = contentDisposition.match(/filename="(.+)"/);
                    if (filenameMatch) {
                        filename = filenameMatch[1];
                    }
                }
                
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                
                console.log('✅ Download completed:', filename);
                showNotification('Download started!', 'success');
            } else {
                console.log('❌ Download failed, status:', response.status);
                throw new Error(`Download failed with status ${response.status}`);
            }
        } catch (error) {
            console.error('❌ Download error:', error);
            showNotification('Download failed: ' + error.message, 'error');
        }
    }

    cancelProcessing(itemId) {
        const item = this.processingItems.find(i => i.id === itemId);
        if (item) {
            item.status = 'cancelled';
            this.stopMonitoring(itemId);
            this.updateProcessingView();
            this.saveProcessingItems();
            showNotification('Processing cancelled', 'info');
        }
    }

    deleteProcessingItem(itemId) {
        const index = this.processingItems.findIndex(i => i.id === itemId);
        if (index !== -1) {
            const item = this.processingItems[index];
            
            // PREVENT deletion of currently processing items
            if (item.status === 'processing') {
                showNotification('Cannot delete items while processing. Wait for completion or cancel first.', 'warning');
                return;
            }
            
            // Delete from backend
            this.deleteProjectFromServer(item.projectId);
            
            // Remove from local list
            this.processingItems.splice(index, 1);
            this.stopMonitoring(itemId);
            this.updateProcessingView();
            this.saveProcessingItems();
            showNotification(`${item.name} deleted successfully`, 'success');
        }
    }

    retryProcessing(itemId) {
        const item = this.processingItems.find(i => i.id === itemId);
        if (item) {
            item.status = 'processing';
            item.progress = 0;
            this.updateProcessingView();
            this.saveProcessingItems();
            this.startMonitoring(itemId);
            showNotification('Retrying processing...', 'info');
        }
    }

    moveToLibrary(processingItem) {
        // 🔐 SECURITY: Validate projectId format to prevent path traversal
        if (!this.validateProjectId(processingItem.projectId)) {
            safeLog(`❌ SECURITY: Invalid projectId format rejected: ${processingItem.projectId}`);
            return;
        }

        const libraryItem = {
            id: processingItem.id,
            projectId: processingItem.projectId,
            name: processingItem.name,
            template: processingItem.template,
            templateName: processingItem.templateName,
            timestamp: processingItem.timestamp,
            status: 'completed',
            slotNumber: processingItem.slotNumber,
            isSlotSystem: processingItem.isSlotSystem
        };

        // ⚡ OPTIMIZED: Transform card in-place instead of re-rendering entire grid
        const processingCard = document.querySelector(`[data-processing-id="${processingItem.id}"]`);
        
        if (processingCard) {
            // Smoothly animate the card transformation
            processingCard.style.transition = 'all 0.5s ease';
            processingCard.style.opacity = '0.5';
            
            setTimeout(() => {
                // 🔐 SECURITY: Clear old content first to prevent leftover listeners
                processingCard.innerHTML = '';
                
                // Build library card using safe DOM methods
                const safeName = sanitizeHTML(libraryItem.name);
                const validThumbnailUrl = isValidImageUrl(libraryItem.thumbnailUrl) ? libraryItem.thumbnailUrl : 'https://via.placeholder.com/1000x600?text=No+Image';
                
                // Create preview section
                const preview = document.createElement('div');
                preview.className = 'card-preview';
                preview.innerHTML = `
                    <div class="status-pill">
                        <div class="status-dot"></div>
                        <span class="status-text">Ready</span>
                    </div>
                    <img src="${validThumbnailUrl}" alt="Asset Preview" onerror="this.src='https://via.placeholder.com/1000x600?text=No+Image'">
                    <div class="card-actions">
                        <button class="card-action-btn library-delete-btn" title="Delete clip" tabindex="0">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 6h18"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                <line x1="10" y1="11" x2="10" y2="17"/>
                                <line x1="14" y1="11" x2="14" y2="17"/>
                            </svg>
                        </button>
                    </div>
                `;
                
                // Create content section
                const content = document.createElement('div');
                content.className = 'card-content';
                const infoGroup = document.createElement('div');
                infoGroup.className = 'info-group';
                
                const title = document.createElement('h2');
                title.className = 'card-title';
                title.textContent = safeName;
                
                const footer = document.createElement('div');
                footer.className = 'card-footer';
                footer.innerHTML = `
                    <div class="badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span class="duration-text">${sanitizeHTML(libraryItem.duration || '0s')}</span>
                    </div>
                `;
                
                const downloadBtn = document.createElement('button');
                downloadBtn.className = 'export-btn library-download-btn';
                downloadBtn.title = 'Download clip';
                downloadBtn.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <g class="export-arrow">
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                        </g>
                    </svg>
                    Export
                `;
                
                infoGroup.appendChild(title);
                infoGroup.appendChild(footer);
                content.appendChild(infoGroup);
                content.appendChild(downloadBtn);
                
                processingCard.appendChild(preview);
                processingCard.appendChild(content);
                
                // Remove processing attributes and add library attrs
                processingCard.removeAttribute('data-processing-id');
                processingCard.setAttribute('data-id', libraryItem.id);
                processingCard.setAttribute('data-project-id', libraryItem.projectId);
                processingCard.classList.remove('processing-card');
                
                // Fade in the new content
                processingCard.style.opacity = '0';
                processingCard.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    processingCard.style.opacity = '1';
                }, 10);
                
                // Re-attach event listeners for this card only
                this.attachLibraryCardListeners(processingCard, libraryItem.id, libraryItem.projectId);
                
                // Fetch duration from server with validated projectId
                this.fetchAndUpdateDuration(processingCard, libraryItem.projectId);
            }, 300);
        }

        // Update data arrays
        this.processingItems = this.processingItems.filter(item => item.id !== processingItem.id);
        this.libraryItems.unshift(libraryItem);
        
        // Save to localStorage
        this.saveProcessingItems();
        this.saveLibraryItems();
        
        // Update other UI elements (storage badge, recent activity)
        this.loadAndDisplayStorageInfo();
        this.updateRecentActivity();
        
        safeLog(`✅ Card transformed: ${processingItem.name}`);
    }

    fetchAndUpdateDuration(cardElement, projectId) {
        // 🔐 SECURITY: Validate projectId before making API call
        if (!this.validateProjectId(projectId)) {
            safeLog(`❌ SECURITY: Invalid projectId in fetchAndUpdateDuration`);
            return;
        }
        
        fetch(`/api/clips/duration/${encodeURIComponent(projectId)}`, {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (data.duration_formatted && cardElement) {
                const durationSpan = cardElement.querySelector('.duration-text');
                if (durationSpan) {
                    // 🔐 SECURITY: Use textContent instead of innerHTML
                    durationSpan.textContent = data.duration_formatted;
                }
            }
        })
        .catch(error => safeLog('Could not fetch duration:', error));
    }

    attachLibraryCardListeners(cardElement, itemId, projectId) {
        // ⚡ Attach listeners to single card without re-rendering grid
        const downloadBtn = cardElement.querySelector('.library-download-btn');
        const deleteBtn = cardElement.querySelector('.library-delete-btn');
        
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // 🔐 SECURITY: Validate projectId before download
                if (projectId && this.validateProjectId(projectId) && clipsStudio) {
                    clipsStudio.downloadClip(projectId);
                } else {
                    safeLog(`❌ SECURITY: Invalid projectId for download: ${projectId}`);
                }
            });
        }
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // 🔐 SECURITY: Validate itemId before delete
                if (itemId && this.validateItemId(itemId) && clipsStudio) {
                    clipsStudio.deleteClip(itemId);
                } else {
                    safeLog(`❌ SECURITY: Invalid itemId for delete: ${itemId}`);
                }
            });
        }
    }

    async loadLibraryItems() {
        try {
            const headers = getAuthHeaders();
            const response = await fetch(`${API_BASE_URL}/clips/projects`, {
                headers: headers,
                credentials: 'include'  // 🔐 Send httpOnly cookie
            });
            
            if (response.ok) {
                const data = await response.json();
                this.libraryItems = data.projects.map(project => ({
                    id: project.id,
                    projectId: project.id,
                    name: project.template_name || 'Clip',
                    template: project.template,
                    templateName: project.template_name,
                    timestamp: new Date(project.created_at),
                    status: 'completed',
                    url: project.url,
                    thumbnailUrl: project.thumbnail_url,
                    slotNumber: project.slot_number,
                    isSlotSystem: project.slots ? true : false,
                    slots: project.slots
                }));
                
                this.updateLibraryView();
                this.updateRecentActivity();
                this.saveLibraryItems();
            }
        } catch (error) {
            safeLog('Failed to load library items:', error);
            // Use local storage as fallback
            this.loadLibraryItemsFromStorage();
        }
    }

    startLibraryPolling() {
        // Clear any existing polling
        if (this.libraryPollingInterval) {
            clearInterval(this.libraryPollingInterval);
        }
        
        // Poll every 5 seconds to auto-refresh library and validate processing items
        this.libraryPollingInterval = setInterval(async () => {
            try {
                await this.loadLibraryItems().catch(e => safeLog('Auto-refresh library failed:', e));
                
                // Also validate processing items to remove any stale/orphaned cards
                if (this.processingItems.length > 0) {
                    const validItems = [];
                    for (const item of this.processingItems) {
                        try {
                            const headers = getAuthHeaders();
                            const resp = await fetch(`${API_BASE_URL}/clips/status/${item.projectId}`, {
                                headers,
                                credentials: 'include',
                                timeout: 3000
                            });
                            
                            if (resp.ok) {
                                const status = await resp.json();
                                // Keep only if actively processing
                                if (status.status && ['processing', 'waiting', 'pending', 'queued'].includes(status.status)) {
                                    validItems.push(item);
                                } else {
                                    safeLog(`🧹 Removing stale card during polling: ${item.name} (status: ${status.status})`);
                                }
                            } else {
                                safeLog(`🧹 Backend check failed for ${item.name}, removing from processing`);
                            }
                        } catch (e) {
                            safeLog(`⚠️ Error validating ${item.name} during polling - removing: ${e.message}`);
                        }
                    }
                    
                    // Update if any items were removed
                    if (validItems.length !== this.processingItems.length) {
                        this.processingItems = validItems;
                        this.saveProcessingItems();
                        this.updateLibraryView();
                        safeLog(`🧹 Polling cleanup: ${this.processingItems.length} active items remaining`);
                    }
                }
            } catch (e) {
                safeLog('Auto-polling error:', e);
            }
        }, 5000);
        
        safeLog('📡 Library auto-polling started (every 5s with processing card validation)');
    }

    stopLibraryPolling() {
        if (this.libraryPollingInterval) {
            clearInterval(this.libraryPollingInterval);
            this.libraryPollingInterval = null;
            safeLog('📡 Library auto-polling stopped');
        }
    }

    async loadAndDisplayStorageInfo() {
        try {
            const userId = currentUser?.id;
            if (!userId) {
                return;
            }

            const headers = getAuthHeaders();
            
            // ✅ ALWAYS fetch fresh - removes 30 second cache!
            safeLog('🔄 Fetching fresh subscription info from backend - NO CACHE...');
            const response = await fetch(`${API_BASE_URL}/auth/subscription`, {
                method: 'GET',
                headers: headers,
                credentials: 'include'  // ✅ Send httpOnly cookie
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success && data.subscription) {
                    this.updateStorageDisplay(data.subscription);
                    safeLog('✅ Storage display updated with fresh backend data');
                }
            } else {
                safeLog('Failed to fetch subscription info, status:', response.status);
            }
        } catch (error) {
            safeLog('Error loading storage info:', error);
        }
    }
    
    updateStorageDisplay(subscription) {
        const usedElement = document.getElementById('storageUsedBadge');
        const totalElement = document.getElementById('storageTotalBadge');
        const planElement = document.getElementById('storagePlanBadge');
        const storageBadge = document.getElementById('storageBadge');
        const deleteAllBtn = document.getElementById('deleteAllClipsBtn');
        const needMoreUpgradeText = document.getElementById('needMoreUpgradeText');

        // Use local library count since videos are stored in localStorage, not backend
        const videosInLibrary = this.libraryItems.length;
        const videoLimit = subscription.video_limit || subscription.videos_space_limit || 2;  // From backend
        const planName = subscription.plan_name || (subscription.plan ? subscription.plan.charAt(0).toUpperCase() + subscription.plan.slice(1) : 'Free');

        if (usedElement) usedElement.textContent = videosInLibrary;
        if (totalElement) totalElement.textContent = videoLimit;
        if (planElement) planElement.textContent = planName;
        
        // Check if storage limit is reached
        const isAtLimit = videosInLibrary >= videoLimit;
        
        // Apply red highlighting when at limit
        if (isAtLimit) {
            if (usedElement) usedElement.style.color = '#ff4444';
            if (totalElement) totalElement.style.color = '#ff4444';
            if (storageBadge) {
                storageBadge.style.borderColor = '#ff4444';
                storageBadge.style.backgroundColor = 'rgba(255, 68, 68, 0.05)';
            }
            // Show delete all clips button
            if (deleteAllBtn) deleteAllBtn.style.display = 'inline-flex';
            // Show "Need more? Upgrade" text when at limit
            if (needMoreUpgradeText) needMoreUpgradeText.style.display = 'inline';
        } else {
            if (usedElement) usedElement.style.color = 'inherit';
            if (totalElement) totalElement.style.color = 'inherit';
            if (storageBadge) {
                storageBadge.style.borderColor = '';
                storageBadge.style.backgroundColor = '';
            }
            // Hide delete all clips button
            if (deleteAllBtn) deleteAllBtn.style.display = 'none';
            // Hide "Need more? Upgrade" text when not at limit
            if (needMoreUpgradeText) needMoreUpgradeText.style.display = 'none';
        }
        
        safeLog(`📊 Library storage: ${videosInLibrary} / ${videoLimit} videos (${planName}) - ${isAtLimit ? '⚠️ AT LIMIT' : '✅ OK'}`);
    }

    handleSubscriptionExpiration() {
        // SECURITY: Do NOT read user data from localStorage
        // Backend enforces plan restrictions, not client-side
        // Use loadAndDisplayStorageInfo() to fetch fresh subscription data from backend
        
        if (!this.loadAndDisplayStorageInfo) return;
        
        // Fetch fresh subscription data from backend (no caching)
        this.loadAndDisplayStorageInfo().then(subscription => {
            if (!subscription || !subscription.subscription_end_date) {
                return;
            }
            
            const expirationDate = new Date(subscription.subscription_end_date);
            const today = new Date();
            
            // If subscription expired, show notification (backend handles enforcement)
            if (today > expirationDate && subscription.plan !== 'free') {
                // UI notification only - backend will enforce plan restrictions
                showNotification('Your subscription has expired. You are now on the Free plan.', 'warning');
                
                // UI update: show storage limit warning if needed
                if (this.libraryItems && this.libraryItems.length > 2) {
                    showNotification('Your storage has been limited to 2 videos per the Free plan.', 'warning');
                }
            }
        }).catch(error => {
            safeLog('Error checking subscription expiration:', error);
            // Silently fail - backend will enforce limits regardless
        });
    }

    updateLibraryView() {
        // Load storage info first (but with caching to reduce API calls)
        this.loadAndDisplayStorageInfo();
        
        // Check for subscription expiration and downgrade storage if needed
        this.handleSubscriptionExpiration();
        
        const libraryGrid = document.getElementById('libraryGrid');
        const emptyState = document.getElementById('emptyLibraryState');
        
        if (!libraryGrid || !emptyState) return;
        
        // Ensure library items are loaded before rendering
        if (!Array.isArray(this.libraryItems)) {
            this.libraryItems = [];
        }
        if (!Array.isArray(this.processingItems)) {
            this.processingItems = [];
        }
        
        if (this.libraryItems.length === 0 && this.processingItems.length === 0) {
            emptyState.style.display = 'block';
            libraryGrid.innerHTML = '';
            libraryGrid.appendChild(emptyState);
            return;
        }

        emptyState.style.display = 'none';
        
        // Build processing items HTML first (they appear at top)
        let processingHTML = '';
        if (this.processingItems.length > 0) {
            processingHTML = this.processingItems.map(item => {
                return `
                    <div class="library-card processing-card" data-processing-id="${item.id}" data-project-id="${item.projectId}">
                        <div class="card-preview processing-preview">
                            <div class="processing-blur-overlay"></div>
                            <div class="processing-spinner"></div>
                        </div>
                        <div class="card-content">
                            <div class="info-group">
                                <h2 class="card-title" data-item-name="${sanitizeHTML(item.name || 'Processing...')}">${sanitizeHTML(item.name || 'Processing...')}</h2>
                                <div class="card-footer" style="opacity: 0.6;">
                                    <div class="badge">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                        Processing...
                                    </div>
                                </div>
                            </div>
                            <button class="export-btn" disabled style="opacity: 0.6; cursor: not-allowed;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <g class="export-arrow">
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </g>
                                </svg>
                                Export
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

libraryGrid.innerHTML = processingHTML + this.libraryItems.map(item => {
            // SECURITY: Sanitize all user-controlled data before inserting into HTML
            const safeName = sanitizeHTML(item.name);
            const safeTemplateName = sanitizeHTML(item.templateName || item.template || '');
            // 🔐 Validate thumbnail URL - block javascript: and data: URIs
            const validThumbnailUrl = isValidImageUrl(item.thumbnailUrl) ? item.thumbnailUrl : 'https://via.placeholder.com/1000x600?text=No+Image';
            
            return `
            <div class="library-card" data-id="${item.id}" data-project-id="${item.projectId}">
                <div class="card-preview">
                    <div class="status-pill">
                        <div class="status-dot"></div>
                        <span class="status-text">Click me</span>
                    </div>
                    <img src="${validThumbnailUrl}" alt="Asset Preview" onerror="this.src='https://via.placeholder.com/1000x600?text=No+Image'">
                    <div class="card-actions">
                        <button class="card-action-btn library-delete-btn" data-item-id="${item.id}" title="Delete clip">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 6h18"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                <line x1="10" y1="11" x2="10" y2="17"/>
                                <line x1="14" y1="11" x2="14" y2="17"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="card-content">
                    <div class="info-group">
                        <h2 class="card-title">${safeName}</h2>
                        
                        <div class="card-footer">
                            <div class="badge">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                ${item.duration || '0s'}
                            </div>
                        </div>
                    </div>

                    <button class="export-btn library-download-btn" data-project-id="${item.projectId}" title="Download clip">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <!-- The tray [ ] that stays still -->
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <!-- The arrow that bounces -->
                            <g class="export-arrow">
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </g>
                        </svg>
                        Export
                    </button>
                </div>
            </div>
        `;
        }).join('');
        
        // Store card data for restoration and enable dragging
        setTimeout(() => {
            const libraryCards = document.querySelectorAll('.library-grid .library-card[data-id]');
            libraryCards.forEach(card => {
                const cardId = card.getAttribute('data-id');
                const projectId = card.getAttribute('data-project-id');
                if (cardId && typeof storeLibraryCard === 'function') {
                    const cardData = {
                        id: cardId,
                        html: card.innerHTML,
                        classList: card.className,
                        dataAttributes: {
                            'data-id': cardId
                        }
                    };
                    storeLibraryCard(cardId, cardData);
                }
                
                // Fetch video duration from server if projectId exists
                if (projectId) {
                    fetch(`/api/clips/duration/${projectId}`, {
                        method: 'GET',
                        credentials: 'include'
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.duration_formatted) {
                            const badgeElement = card.querySelector('.badge');
                            if (badgeElement) {
                                const durationText = badgeElement.querySelector('svg').nextElementSibling;
                                if (durationText) {
                                    durationText.textContent = data.duration_formatted;
                                } else {
                                    // Fallback: update badge innerHTML
                                    const svg = badgeElement.querySelector('svg').outerHTML;
                                    badgeElement.innerHTML = svg + data.duration_formatted;
                                }
                            }
                        }
                    })
                    .catch(error => console.log('Could not fetch duration:', error));
                }
            });
            
            // Enable dragging for library cards

            
            // Hook into websocket for real-time updates without page refresh
            this.setupWebSocketHandlers();
            
            // 🔐 SECURITY: Event delegation for library actions - prevents inline onclick injection
            // Attach listeners only once to prevent duplicate handlers
            const libraryGrid = document.querySelector('.library-grid');
            if (libraryGrid && !libraryGrid._hasClickListener) {
                libraryGrid._hasClickListener = true;
                
                libraryGrid.addEventListener('click', (e) => {
                    console.log('Library grid click detected on:', e.target);
                    
                    const downloadBtn = e.target.closest('.library-download-btn');
                    if (downloadBtn) {
                        e.preventDefault();
                        e.stopPropagation();
                        const projectId = downloadBtn.getAttribute('data-project-id');
                        console.log('Download button clicked, projectId:', projectId);
                        if (projectId && clipsStudio) {
                            clipsStudio.downloadClip(projectId);
                        } else {
                            console.log('Missing projectId or clipsStudio:', { projectId, clipsStudio: !!clipsStudio });
                        }
                        return;
                    }
                    
                    const deleteBtn = e.target.closest('.library-delete-btn');
                    if (deleteBtn) {
                        e.preventDefault();
                        e.stopPropagation();
                        const itemId = deleteBtn.getAttribute('data-item-id');
                        if (itemId && clipsStudio) {
                            clipsStudio.deleteClip(itemId);
                        }
                        return;
                    }
                });
            }
        }, 0);
    }

    deleteClip(itemId) {
        safeLog(`🗑️ Delete initiated for item: ${itemId}`);
        
        // Find the item to delete BEFORE filtering
        const itemToDelete = this.libraryItems.find(item => item.id == itemId) || 
                            this.processingItems.find(item => item.id == itemId);
        
        if (!itemToDelete) {
            safeLog(`❌ Item not found: ${itemId}`);
            showNotification('Clip not found', 'error');
            return;
        }
        
        safeLog(`📍 Item found:`, itemToDelete);
        
        // PREVENT deletion of currently processing items
        if (itemToDelete.status === 'processing') {
            safeLog(`⚠️ Cannot delete processing item: ${itemId}`);
            showNotification('Cannot delete items while processing. Wait for completion or cancel first.', 'warning');
            return;
        }

        // Show custom confirmation modal
        const modal = document.getElementById('deleteConfirmationModal');
        const confirmText = document.getElementById('deleteConfirmationText');
        let confirmBtn = document.getElementById('confirmDeleteBtn');
        
        if (!modal || !confirmText || !confirmBtn) {
            showNotification('Error: Delete modal not available', 'error');
            return;
        }
        
        safeLog('✅ Modal elements found, showing confirmation');
        
        // Update modal text with clip name
        confirmText.textContent = `Delete "${itemToDelete.name}"?`;
        
        // 🔐 SECURITY FIX: Do NOT use cloneNode() - it destroys all event listeners
        // Instead, abort previous AbortController signals and reattach listeners safely
        if (confirmBtn._eventControllers) {
            Object.values(confirmBtn._eventControllers).forEach(ctrl => {
                try { ctrl.abort(); } catch (e) { /* already aborted */ }
            });
            confirmBtn._eventControllers = {};
        }
        
        // Create new AbortController for this listener
        const controller = new AbortController();
        if (!confirmBtn._eventControllers) confirmBtn._eventControllers = {};
        confirmBtn._eventControllers['click'] = controller;
        
        // Add event listener with cleanup signal - will be removed when controller.abort() is called
        confirmBtn.addEventListener('click', async () => {
            safeLog(`🔄 Confirm button clicked for item: ${itemId}`);
            // Auto-cleanup this listener after first click
            controller.abort();
            try {
                modal.style.display = 'none';
                showNotification('Deleting clip...', 'info');
                
                // Delete from server first if it has a projectId
                if (itemToDelete.projectId) {
                    // 🔐 CRITICAL IDOR PROTECTION (Backend Responsibility):
                    // Frontend can be modified by attackers to send ANY projectId
                    // Backend MUST verify:
                    // 1. User session is valid (from httpOnly cookie)
                    // 2. Project belongs to authenticated user
                    // 3. User subscription allows deletion
                    // DO NOT trust projectId from frontend!
                    safeLog(`📤 Deleting project from server: ${itemToDelete.projectId}`);
                    await this.deleteProjectFromServer(itemToDelete.projectId);
                }
                
                // Remove from local arrays
                safeLog(`🗄️ Removing from local arrays`);
                this.libraryItems = this.libraryItems.filter(item => item.id != itemId);
                this.processingItems = this.processingItems.filter(item => item.id != itemId);
                
                // Also remove any processing items with the same projectId
                if (itemToDelete.projectId) {
                    this.processingItems = this.processingItems.filter(item => item.projectId != itemToDelete.projectId);
                }
                
                // Update views and save
                safeLog(`🔄 Updating views and saving`);
                this.updateLibraryView();
                this.updateProcessingView();
                this.updateRecentActivity();
                this.saveLibraryItems();
                this.saveProcessingItems();
                
                // ✅ Refresh storage badge immediately from backend
                safeLog(`📊 Updating storage badge from backend`);
                if (typeof updateStorageBadgeDisplay === 'function') {
                    await updateStorageBadgeDisplay();
                }
                
                safeLog(`✅ Clip deleted successfully`);
                showNotification('✅ Clip deleted successfully', 'success');
                
                // Refresh page after deletion to ensure UI is fully updated
                setTimeout(() => {
                    window.location.reload();
                }, 800);
                
            } catch (error) {
                showNotification('Failed to delete clip: ' + error.message, 'error');
            } finally {
                // Always close modal
                modal.style.display = 'none';
            }
        }, {once: true});
        
        // Show modal with explicit visibility
        modal.style.display = 'block';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';
        safeLog('📋 Modal displayed');
        
        // Close modal when clicking outside of it
        const closeOnBackdropClick = (event) => {
            if (event.target === modal) {
                safeLog('🚫 Modal closed by backdrop click');
                modal.style.display = 'none';
                document.removeEventListener('click', closeOnBackdropClick);
            }
        };
        document.addEventListener('click', closeOnBackdropClick);
    }

    async deleteProjectFromServer(projectId) {
        try {
            // 🔐 SECURITY: Client-side validation as defense-in-depth
            // (Backend MUST also validate ownership!)
            if (!projectId || typeof projectId !== 'string') {
                throw new Error('Invalid project ID format');
            }
            
            // Assuming project IDs are UUIDs in format: userId_uuid or similar
            // Add validation based on your actual project ID format
            // Basic check: should be a reasonable length string with alphanumeric chars
            if (!/^[a-zA-Z0-9_-]+$/.test(projectId) || projectId.length < 10) {
                throw new Error('Invalid project ID format');
            }
            
            // 🔐 CRITICAL - IDOR PREVENTION: /clips/project/{projectId} DELETE MUST:
            // 1. Verify user session from httpOnly cookie
            // 2. Query database: Is this projectId owned by the authenticated user?
            // 3. Return 403 Forbidden if projectId belongs to another user
            // 4. Only then delete the project
            // Frontend sends projectId but backend MUST verify ownership!
            
            const headers = getAuthHeaders();
            const response = await fetch(`${API_BASE_URL}/clips/project/${projectId}`, {
                method: 'DELETE',
                headers: headers,
                credentials: 'include'  // 🔐 Send httpOnly cookie
            });
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `Server error: ${response.status}`);
            }
            
            const data = await response.json();
            return true;
        } catch (error) {
            // 🔐 SECURITY FIX: Sanitize error message to avoid exposing sensitive info
            // Do NOT expose error.message directly - it may contain stack traces, paths, etc.
            const sanitized = sanitizeErrorMessage(error);
            showNotification(`Warning: Failed to delete files on server`, 'warning');
            safeLog('Delete error (sanitized for user):', sanitized);
            return false;
        }
    }

    filterLibrary(filter) {
        // Filter library items based on selected filter
        const filteredItems = this.libraryItems.filter(item => {
            if (filter === 'all') return true;
            if (filter === 'recent') {
                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                return new Date(item.timestamp) > oneWeekAgo;
            }
            if (filter === 'favorites') {
                // You can add favorite functionality later
                return true;
            }
            return true;
        });
        
        // Update view with filtered items
        showNotification(`Filtered by: ${filter}`, 'info');
        // Note: In a full implementation, you would update the grid with filteredItems
    }

    manualRefresh() {
        this.loadLibraryItems();
        this.loadProcessingItems();
        showNotification('Library refreshed', 'info');
    }

    // Note: showNotification is defined globally (see line 727)
    // This method delegates to the global function for consistency

    saveProcessingItems() {
        try {
            if (!this.processingItems || this.processingItems.length === 0) {
                localStorage.removeItem('clipsProcessing');
                return;
            }
            
            const data = JSON.stringify(this.processingItems);
            localStorage.setItem('clipsProcessing', data);
            safeLog(`✓ Saved ${this.processingItems.length} processing item(s)`);
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                safeLog('Storage quota exceeded - clearing old data');
                this.clearOldProcessingData();
                try {
                    localStorage.setItem('clipsProcessing', JSON.stringify(this.processingItems));
                } catch (retryError) {
                    safeLog('Failed to save even after cleanup:', retryError);
                }
            } else {
                safeLog('Failed to save processing items:', e);
            }
        }
    }

    async loadProcessingItems() {
        try {
            const saved = localStorage.getItem('clipsProcessing');
            if (saved) {
                this.processingItems = JSON.parse(saved);
                const now = Date.now();
                const MAX_PROCESSING_TIME = 24 * 60 * 60 * 1000; // 24 hours max for processing items to persist
                
                // Filter out only genuinely old/completed items
                this.processingItems = this.processingItems.filter(item => {
                    // Remove only if explicitly marked as completed or failed
                    if (item.status === 'completed' || item.status === 'failed') {
                        safeLog(`🧹 Cleaning up ${item.status} item: ${item.name}`);
                        return false;
                    }
                    
                    // Check if item is too old (stale processing)
                    const itemAge = now - (item.timestamp ? new Date(item.timestamp).getTime() : now);
                    if (itemAge > MAX_PROCESSING_TIME) {
                        safeLog(`🧹 Removing stale processing item (${Math.round(itemAge/1000/60)} min old): ${item.name}`);
                        return false;
                    }
                    
                    // Keep everything else that is processing/waiting/pending
                    return true;
                });

                // Save the cleaned list back to localStorage
                this.saveProcessingItems();
                this.updateProcessingView();
                this.updateLibraryView();
                safeLog(`✓ Loaded ${this.processingItems.length} processing item(s)`);
            }
        } catch (e) {
            safeLog('Failed to load processing items:', e);
            this.processingItems = [];
            this.saveProcessingItems();
            this.updateLibraryView();
        }
    }

    saveLibraryItems() {
        try {
            if (!this.libraryItems || this.libraryItems.length === 0) {
                localStorage.removeItem('clipsLibrary');
                return;
            }
            
            const data = JSON.stringify(this.libraryItems);
            localStorage.setItem('clipsLibrary', data);
            safeLog(`✓ Saved ${this.libraryItems.length} library item(s)`);
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                safeLog('Storage quota exceeded - clearing old data');
                this.clearOldLibraryData();
                try {
                    localStorage.setItem('clipsLibrary', JSON.stringify(this.libraryItems));
                } catch (retryError) {
                    safeLog('Failed to save even after cleanup:', retryError);
                }
            } else {
                safeLog('Failed to save library items:', e);
            }
        }
    }

    clearProcessingItems() {
        // Clear all stuck processing items - useful for debugging/manual cleanup
        safeLog(`🧹 Clearing ${this.processingItems.length} processing items`);
        this.processingItems = [];
        this.stopAllMonitoring();
        this.saveProcessingItems();
        this.updateLibraryView();
        showNotification('Cleared all processing items', 'info');
    }

    loadLibraryItemsFromStorage() {
        try {
            const saved = localStorage.getItem('clipsLibrary');
            if (saved) {
                this.libraryItems = JSON.parse(saved);
                this.updateLibraryView();
                this.updateRecentActivity();
                safeLog(`✓ Loaded ${this.libraryItems.length} library item(s)`);
            }
        } catch (e) {
            safeLog('Failed to load library items:', e);
            this.libraryItems = [];
        }
    }

    clearOldLibraryData() {
        // Keep only the 50 most recent items
        if (this.libraryItems.length > 50) {
            this.libraryItems = this.libraryItems
                .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                .slice(0, 50);
            safeLog('Cleaned up old library items, keeping 50 most recent');
        }
    }

    clearOldProcessingData() {
        // Remove completed items older than 7 days
        const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        this.processingItems = this.processingItems.filter(item => {
            if (item.status === 'completed' && item.timestamp < sevenDaysAgo) {
                return false; // Remove old completed items
            }
            return true;
        });
        safeLog('Cleaned up old processing items');
    }

    setupWebSocketHandlers() {
        /**
         * Set up websocket handlers for real-time library updates
         * This allows processing cards to animate unblur when video completes
         * without requiring a page refresh
         */
        if (!solisWSClient) {
            safeLog('WebSocket client not available yet, retrying...');
            setTimeout(() => this.setupWebSocketHandlers(), 1000);
            return;
        }

        // Handle progress updates
        solisWSClient.on('progress', (data) => {
            const { taskId, progress, step, status } = data;
            
            // Validate progress is a valid number
            if (typeof progress !== 'number' || isNaN(progress) || progress < 0 || progress > 100) {
                safeLog(`⚠️ Invalid progress value received: ${progress}`);
                return;
            }
            
            const processingCard = document.querySelector(`[data-processing-id="${taskId}"]`);
            if (processingCard) {
                safeLog(`⏳ Processing ${taskId}: ${Math.round(progress)}% - ${step || ''}`);
            }

            // Update the progress spinner in the header
            const wrapper = document.getElementById('generationProgressWrapper');
            const progressCircle = document.getElementById('progressCircle');
            const progressText = document.getElementById('generationProgressText');

            if (wrapper && progressCircle && progressText) {
                // Show the wrapper if there's active processing
                if (this.processingItems.length > 0) {
                    wrapper.style.display = 'flex';
                }

                // Update the circle stroke-dasharray to show progress
                // Circle circumference is 75.36 (2 * π * 12), so progress = (progress/100) * 75.36
                const circumference = 75.36;
                const dashValue = (progress / 100) * circumference;
                progressCircle.style.strokeDasharray = `${dashValue} ${circumference}`;

                // Update percentage text
                progressText.textContent = `${Math.round(progress)}%`;

                safeLog(`📊 Progress: ${Math.round(progress)}%`);
            }
        });

        // Handle completion - move card from processing to library with animation
        solisWSClient.on('complete', (data) => {
            const { taskId, result } = data;
            safeLog(`✅ Video ${taskId} completed, moving to library...`);
            
            // Find the processing item
            const processingIndex = this.processingItems.findIndex(item => item.id === taskId);
            if (processingIndex === -1) {
                safeLog(`❌ Processing item not found: ${taskId}`);
                return;
            }

            const processingItem = this.processingItems[processingIndex];
            const processingCard = document.querySelector(`[data-processing-id="${taskId}"]`);

            if (processingCard) {
                // Add unblurring animation
                processingCard.classList.add('unblurring');
                
                // After animation, convert to library item
                setTimeout(() => {
                    // Remove from processing
                    this.processingItems.splice(processingIndex, 1);
                    this.saveProcessingItems();

                    // Create library item from result
                    const libraryItem = {
                        id: result.project_id || taskId,
                        projectId: result.project_id || taskId,
                        name: processingItem.name,
                        template: processingItem.templateName || processingItem.template || 'Clip',
                        templateName: processingItem.templateName || processingItem.template || 'Clip',
                        thumbnailUrl: result.thumbnail_url || processingItem.thumbnailUrl || '',
                        duration: result.duration || processingItem.duration || '0s',
                        timestamp: new Date().toISOString(),
                        status: 'completed'
                    };

                    // Add to library
                    this.libraryItems.unshift(libraryItem);
                    this.saveLibraryItems();

                    // Update the view
                    this.updateLibraryView();

                    // 🔄 Refresh subscription data to update storage badge with actual backend count
                    this.loadStorageInfo();

                    // Hide progress spinner if all items are processed
                    if (this.processingItems.length === 0) {
                        const wrapper = document.getElementById('generationProgressWrapper');
                        if (wrapper) {
                            wrapper.style.display = 'none';
                            // Reset circle
                            const progressCircle = document.getElementById('progressCircle');
                            if (progressCircle) {
                                progressCircle.style.strokeDasharray = '0 75.36';
                            }
                        }
                    }

                    safeLog(`✅ Moved ${processingItem.name} to library`);
                }, 600); // Wait for animation to complete
            }
        });

        // Handle errors
        solisWSClient.on('error', (data) => {
            const { taskId, error } = data;
            safeLog(`❌ Video ${taskId} failed: ${error}`);
            
            const processingCard = document.querySelector(`[data-processing-id="${taskId}"]`);
            if (processingCard) {
                processingCard.style.opacity = '0.5';
                const titleElement = processingCard.querySelector('.card-title');
                if (titleElement) {
                    titleElement.textContent = 'Failed - ' + titleElement.textContent;
                }
            }

            // Remove from processing items if present
            const processingIndex = this.processingItems.findIndex(item => item.id === taskId);
            if (processingIndex !== -1) {
                this.processingItems.splice(processingIndex, 1);
                this.saveProcessingItems();

                // Hide progress spinner if all items are processed
                if (this.processingItems.length === 0) {
                    const wrapper = document.getElementById('generationProgressWrapper');
                    if (wrapper) {
                        wrapper.style.display = 'none';
                        // Reset circle
                        const progressCircle = document.getElementById('progressCircle');
                        if (progressCircle) {
                            progressCircle.style.strokeDasharray = '0 75.36';
                        }
                    }
                }
            }
        });

        // Handle processing-specific errors from backend
        solisWSClient.on('processing_error', (data) => {
            const { taskId, error, message } = data;
            const errorMsg = message || error || 'Unknown processing error';
            safeLog(`❌ Processing failed: ${errorMsg}`);
            
            // Show user-friendly error message
            const processingCard = document.querySelector(`[data-processing-id="${taskId}"]`);
            if (processingCard) {
                processingCard.style.opacity = '0.5';
                processingCard.style.borderColor = '#ef4444';
                processingCard.style.borderWidth = '2px';
                const titleElement = processingCard.querySelector('.card-title');
                if (titleElement) {
                    titleElement.textContent = '❌ Failed';
                }
                const statusElement = processingCard.querySelector('.card-subtitle') || processingCard.querySelector('.card-status');
                if (statusElement) {
                    // Parse error message to extract key info for tier limits
                    let displayError = errorMsg;
                    if (errorMsg.includes('Video is too long')) {
                        // Extract tier information
                        const tierMatch = errorMsg.match(/(\d+)\s*minute/g);
                        displayError = errorMsg;
                    }
                    statusElement.textContent = displayError.substring(0, 100); // Truncate for display
                    statusElement.title = displayError; // Full error on hover
                }
            }

            // Remove from processing items if present
            const processingIndex = this.processingItems.findIndex(item => item.id === taskId);
            if (processingIndex !== -1) {
                this.processingItems.splice(processingIndex, 1);
                this.saveProcessingItems();

                // Hide progress spinner if all items are processed
                if (this.processingItems.length === 0) {
                    const wrapper = document.getElementById('generationProgressWrapper');
                    if (wrapper) {
                        wrapper.style.display = 'none';
                        // Reset circle
                        const progressCircle = document.getElementById('progressCircle');
                        if (progressCircle) {
                            progressCircle.style.strokeDasharray = '0 75.36';
                        }
                        const progressText = document.getElementById('generationProgressText');
                        if (progressText) {
                            progressText.textContent = '0%';
                        }
                    }
                }
            }
        });

        safeLog('✅ WebSocket handlers initialized');
    }

    // Safe event listener methods with AbortController for cleanup
    safeAddEventListener(selector, event, handler) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            // 🔐 Use AbortController for proper cleanup without removing other listeners
            if (!element._eventControllers) element._eventControllers = {};
            const key = `${event}_${selector}`;
            
            // Abort previous listener for this event+selector combo
            if (element._eventControllers[key]) {
                element._eventControllers[key].abort();
            }
            
            // Create new AbortController for this listener
            const controller = new AbortController();
            element._eventControllers[key] = controller;
            element.addEventListener(event, handler, { signal: controller.signal });
        });
    }

    safeAddEventListenerById(id, event, handler) {
        const element = document.getElementById(id);
        if (element) {
            safeLog(`✅ Found element with id: ${id}`);
            // 🔐 Use AbortController for proper cleanup without removing other listeners
            if (!element._eventControllers) {
                element._eventControllers = {};
            }
            const key = `${event}_${id}`;
            // Cancel previous listener if exists
            if (element._eventControllers[key]) {
                element._eventControllers[key].abort();
            }
            // Create new controller for this listener
            const controller = new AbortController();
            element._eventControllers[key] = controller;
            element.addEventListener(event, handler, { signal: controller.signal });
        } else {
            safeLog(`❌ Element with id "${id}" not found`);
        }
    }
}

function initClipsStudio() {
    if (!window.clipsStudio) {
        clipsStudio = new ClipsStudio();
        clipsStudio.init();
        window.clipsStudio = clipsStudio;
        // Initialize websocket after user is loaded
        setTimeout(() => {
            // initWebSocket() - will be initialized when needed
        }, 500);
    }
}

// Set up all event listeners
function logout() {
    // Call backend logout endpoint to clear httpOnly cookies
    fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include'  // 🔐 Send httpOnly cookie for logout
    })
    .then(response => {
        // Clear localStorage
        localStorage.removeItem('auth_token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('currentUser');
        
        // Redirect to login
        safeLog('✅ Logged out successfully');
        window.location.href = '/login.html';
    })
    .catch(error => {
        safeLog('❌ Logout error:', error);
        // Still redirect even if backend call fails (logout occurred on backend)
        setTimeout(() => {
            window.location.href = '/login.html';
        }, 1000);
    });
}

function setupEventListeners() {
    // User profile menu - Now handled by menu.js, don't add listener here
    // if (userProfile) {
    //     userProfile.addEventListener('click', toggleUserMenu);
    // }
    
    // User settings button
    const userSettingsBtn = document.getElementById('userSettingsBtn');
    if (userSettingsBtn) {
        userSettingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleUserMenu(e);
        });
    }

    // Logout button
    const logoutBtn = document.getElementById('dropdownLogout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            logout();
        });
    }

    // Settings from menu
    const menuSettings = document.getElementById('menuSettings');
    if (menuSettings) {
        menuSettings.addEventListener('click', (e) => {
            e.stopPropagation();
            openSettings();
        });
    }

    // Settings
    if (settingsBtn) {
        settingsBtn.addEventListener('click', openSettings);
    }
    if (closeSettings) {
        closeSettings.addEventListener('click', closeSettingsPanel);
    }
    
    // 🔐 SECURITY: Clear Chat History button listener
    const clearChatHistoryBtn = document.getElementById('clearChatHistoryBtn');
    if (clearChatHistoryBtn) {
        clearChatHistoryBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete all chat history? This action cannot be undone.')) {
                clearChat();
                clipsStudio.showNotification('Chat history cleared', 'success');
            }
        });
    }
    
    // Close settings when backdrop is clicked
    const settingsBackdrop = document.querySelector('.settings-backdrop');
    if (settingsBackdrop) {
        settingsBackdrop.addEventListener('click', closeSettingsPanel);
    }
    
    // Load and apply saved theme, and set toggle state
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
        if (darkModeSettingsToggle) {
            darkModeSettingsToggle.checked = (savedTheme === 'dark');
        }
    }
    
    // Dark mode toggle in settings
    if (darkModeSettingsToggle) { // Check if the element exists
        safeLog('setupEventListeners(): darkModeSettingsToggle element found.');
        // Optional: Check if it's an input checkbox, which is expected for 'checked' property
        if (darkModeSettingsToggle.tagName !== 'INPUT' || darkModeSettingsToggle.type !== 'checkbox') {
            safeLog('setupEventListeners(): darkModeSettingsToggle is not an input checkbox. Dark mode functionality may be impaired.');
        }
        darkModeSettingsToggle.addEventListener('change', () => {
            const newTheme = darkModeSettingsToggle.checked ? 'dark' : 'light';
            safeLog('darkModeSettingsToggle change event fired. New theme:', newTheme);
            setTheme(newTheme); // Call setTheme with the new theme
        }); // End of event listener
    }

    // Input handling removed - AI section no longer needed
    
    // Shuffle button for video ideas
    const shuffleIdeasBtn = document.getElementById('shuffleIdeasBtn');
    if (shuffleIdeasBtn) {
        shuffleIdeasBtn.addEventListener('click', generateVideoIdeas);
    }

    const watermarkToggle = document.getElementById('watermarkToggle');
    if (watermarkToggle) {
        // Set watermark enabled by default
        watermarkToggle.checked = true;
        localStorage.setItem('solisAIWatermarkEnabled', 'true');
        
        watermarkToggle.addEventListener('change', (e) => {
            const isEnabled = e.target.checked;
            
            // Store in localStorage for persistence
            localStorage.setItem('solisAIWatermarkEnabled', isEnabled ? 'true' : 'false');
            
            // Update template data
            if (window.clipsStudio && window.clipsStudio.currentTemplateForPreview) {
                window.clipsStudio.currentTemplateForPreview.addWatermark = isEnabled;
            }
            
            // Update watermark visibility
            if (window.clipsStudio) {
                window.clipsStudio.updateWatermarkDisplay();
            }
            
            safeLog(`Watermark ${isEnabled ? 'ENABLED' : 'DISABLED'} by user`);
        });
    }

    // YouTube Connect Button
    const connectYouTubeButton = document.getElementById('connectYouTubeButton');
    if (connectYouTubeButton) {
        connectYouTubeButton.addEventListener('click', initiateYouTubeConnection);
    }

    // Check YouTube connection on page load
    checkYouTubeConnection();
}
    // Stop generation button removed - AI section no longer needed

    // Upgrade modal
    if (upgradeSettingsBtn) {
        upgradeSettingsBtn.addEventListener('click', openUpgradeModal);
    }
    if (closeUpgrade) {
        closeUpgrade.addEventListener('click', closeUpgradeModal);
    }

    // Clips submenu toggle
    const clipsToggle = document.getElementById('clips-toggle');
    if (clipsToggle) {
        clipsToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const submenu = document.getElementById('clips-submenu');
            const chevron = this.querySelector('.chevron-icon');
            
            if (submenu) submenu.classList.toggle('open');
            if (chevron) chevron.classList.toggle('rotated');
        });
    }

    // Navigation items
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.closest('.clips-submenu')) {
                navItems.forEach(i => {
                    if (i.id !== 'clips-toggle' && !i.closest('.clips-submenu')) {
                        i.classList.remove('active');
                    }
                });
                
                if (item.id !== 'clips-toggle') {
                    item.classList.add('active');
                }
            }
            
            const target = item.dataset.target;
            if (target) {
                navigateTo(target);
                
                if (window.innerWidth <= 768 && sidebar.classList.contains('expanded')) {
                    sidebar.classList.remove('expanded');
                }
            }
        });
    });

    // Close modals/menus when clicking outside
    document.addEventListener('click', (e) => {
        // Close user menu
        if (userMenu && !userMenu.contains(e.target) && userProfile && !userProfile.contains(e.target)) {
            userMenu.classList.remove('active');
            userProfile.classList.remove('menu-open');
        }
        
        // Close upgrade modal
        if (upgradeModal && !upgradeModal.contains(e.target) && e.target !== upgradeSettingsBtn) {
            closeUpgradeModal();
        }
        
        // Close feature modals when clicking outside
        if (e.target.classList.contains('feature-modal')) {
            e.target.style.display = 'none';
        }
    });

    // When user switches browser tabs, if an input was centered but already sent,
    // ensure it is docked so it doesn't remain stuck centered when returning.
    document.addEventListener('visibilitychange', () => {
        try {
            if (document.hidden) {
                // If the page is hidden, force-dock the input instantly so it won't remain centered
                dockInputInstantly();
            }
        } catch (err) {
            safeLog('visibilitychange handler error', err);
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC to close modals - DISABLED
        // if (e.key === 'Escape') {
        //     if (userMenu && userMenu.classList.contains('active')) {
        //         userMenu.classList.remove('active');
        //         if (userProfile) userProfile.classList.remove('menu-open');
        //     }
        //     if (settingsPanel && settingsPanel.classList.contains('open')) {
        //         closeSettingsPanel();
        //     }
        //     if (upgradeModal && upgradeModal.classList.contains('active')) {
        //         closeUpgradeModal();
        //     }
        //     if (workspacePanel && workspacePanel.classList.contains('active')) {
        //         workspacePanel.classList.remove('active');
        //         document.body.classList.remove('modal-open');
        //     }
        // }
        
        // Ctrl/Cmd + K to toggle sidebar
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleSidebar();
        }
    });


function toggleSidebar() {
    sidebar.classList.toggle('expanded');
    
    const isExpanded = sidebar.classList.contains('expanded');
    localStorage.setItem('sidebarExpanded', isExpanded);
}

// Toggle user menu
// User menu is now handled by menu.js
function toggleUserMenu(e) {
    // This function is deprecated - menu.js handles the new userMenuPanel
    safeLog('toggleUserMenu called but deprecated - use menu.js instead');
    if (!userMenu || !userProfile) return;
    
    e.stopPropagation();
    // userMenu.classList.toggle('active');
    // userProfile.classList.toggle('menu-open');
}

// Open settings panel
function openSettings() {
    if (!settingsPanel) return;
    
    // Add open class for slide animation
    settingsPanel.classList.add('open');
    
    // Also open the backdrop
    const settingsBackdrop = document.getElementById('settingsBackdrop');
    if (settingsBackdrop) {
        settingsBackdrop.style.opacity = '1';
        settingsBackdrop.style.visibility = 'visible';
    }
    
    // Close user menu if it's open
    if (userMenu) userMenu.classList.remove('active');
    
    // Fetch and update subscription status when settings is opened
    if (currentUser) {
        fetchAndUpdateSubscriptionStatus();
    }
}

// Close settings panel
function closeSettingsPanel() {
    if (!settingsPanel) return;
    
    // Remove open class for slide animation
    settingsPanel.classList.remove('open');
    
    // Also close the backdrop
    const settingsBackdrop = document.getElementById('settingsBackdrop');
    if (settingsBackdrop) {
        settingsBackdrop.style.opacity = '0';
        settingsBackdrop.style.visibility = 'hidden';
    }
}

// Check YouTube Connection Status from Backend
async function checkYouTubeConnection() {
    const analyticsLockOverlay = document.getElementById('analyticsLockOverlay');
    const dashboardGrid = document.getElementById('dashboardGrid');
    const dashboardCharts = document.querySelector('.dashboard-charts');
    
    if (!analyticsLockOverlay) return;
    
    try {
        // Verify connection status from backend (source of truth)
        const response = await fetch(`${window.API_BASE_URL}/auth/youtube/status`, {
            method: 'GET',
            headers: {
                'X-CSRF-Token': getCSRFToken() || '',
                'Content-Type': 'application/json'
            },
            credentials: 'include'  // 🔐 Auth via httpOnly cookie
        });
        
        if (!response.ok) {
            safeLog('⚠️ Failed to check YouTube status:', response.status);
            // Hide analytics if check fails
            analyticsLockOverlay.style.display = 'flex';
            return;
        }
        
        const data = await response.json();
        const isYouTubeConnected = data.connected === true;
        
        safeLog('🔍 YouTube Connection Status (from backend):', isYouTubeConnected);
        
        if (!isYouTubeConnected) {
            // Show lock overlay
            analyticsLockOverlay.style.display = 'flex';
            
            // Add blur effect to dashboard
            if (dashboardGrid) {
                dashboardGrid.classList.add('analytics-locked');
            }
            if (dashboardCharts) {
                dashboardCharts.classList.add('analytics-locked');
            }
        } else {
            // Hide lock overlay
            analyticsLockOverlay.style.display = 'none';
            
            // Remove blur effect
            if (dashboardGrid) {
                dashboardGrid.classList.remove('analytics-locked');
            }
            if (dashboardCharts) {
                dashboardCharts.classList.remove('analytics-locked');
            }
        }
        
        // Update currentUser object as fallback
        if (!currentUser) currentUser = {};
        currentUser.youtube_connected = isYouTubeConnected;
        
    } catch (error) {
        safeLog('❌ Error checking YouTube connection:', error);
        // Default to locked if error
        analyticsLockOverlay.style.display = 'flex';
    }
}
// Initiate YouTube Connection with CSRF Protection
function initiateYouTubeConnection() {
    if (!currentUser) {
        alert('Please log in first to connect YouTube');
        return;
    }
    
    // Get CSRF token from cookie or meta tag
    const csrfToken = getCSRFToken();
    
    // Call backend to get OAuth URL with state token
    fetch(`${window.API_BASE_URL}/auth/youtube`, {
        method: 'GET',
        headers: {
            'X-CSRF-Token': csrfToken || '',
            'Content-Type': 'application/json'
        },
        credentials: 'include'  // 🔐 Auth via httpOnly cookie, not Bearer token
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        if (!data.auth_url) {
            throw new Error('No authorization URL received from server');
        }
        
        safeLog('✓ Got OAuth URL from backend');
        
        // Open OAuth flow in popup with security hardening
        const width = 500;
        const height = 600;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        
        // SECURITY: Use rel="noopener noreferrer" to prevent reverse tabnabbing
        const oauthWindow = window.open(
            data.auth_url,
            'YouTubeOAuth',
            `width=${width},height=${height},left=${left},top=${top},noopener,noreferrer`
        );
        
        if (!oauthWindow) {
            safeLog('⚠️ Popup blocked, falling back to redirect');
            window.location.href = data.auth_url;
        } else {
            safeLog('✓ OAuth window opened');
            
            // Create message handler with proper scope and cleanup
            const handleOAuthMessage = function handleOAuthMessage(event) {
                // 🔐 SECURITY: Strict origin whitelist - production domains only
                const allowedOrigins = [
                    window.location.origin,
                    // Add production domains here if needed
                    // 'https://yourapp.com',
                    // 'https://www.yourapp.com'
                ];
                
                if (!allowedOrigins.includes(event.origin)) {
                    safeLog('🔒 Blocked postMessage from untrusted origin:', event.origin);
                    return;
                }
                
                if (event.data.type === 'YOUTUBE_AUTH_SUCCESS') {
                    safeLog('✅ YouTube authentication successful!');
                    // Remove listener immediately
                    window.removeEventListener('message', handleOAuthMessage);
                    clearInterval(checkInterval);
                    
                    // Refresh connection status
                    setTimeout(() => {
                        checkYouTubeConnection();
                        if (typeof analyticsManager !== 'undefined' && analyticsManager) {
                            analyticsManager.loadAnalyticsData();
                        }
                        showNotification('✅ YouTube connected successfully!', 'success');
                    }, 1000);
                } else if (event.data.type === 'YOUTUBE_AUTH_ERROR') {
                    safeLog('✗ Authentication error:', event.data.error);
                    window.removeEventListener('message', handleOAuthMessage);
                    clearInterval(checkInterval);
                    showNotification(`✗ YouTube connection failed: ${event.data.error}`, 'error');
                }
            };
            
            // Listen for postMessage from OAuth callback
            window.addEventListener('message', handleOAuthMessage);
            
            // Also handle window close as fallback - with proper cleanup
            let checkInterval = setInterval(() => {
                try {
                    if (oauthWindow.closed) {
                        clearInterval(checkInterval);
                        safeLog('🔄 OAuth window closed, verifying connection...');
                        // Clean up message listener
                        window.removeEventListener('message', handleOAuthMessage);
                        
                        // Wait for backend to process, then verify
                        setTimeout(() => {
                            verifyToken();
                            checkYouTubeConnection();
                        }, 2000);
                    }
                } catch (e) {
                    // Cross-origin error, ignore
                }
            }, 500);
        }
    })
    .catch(error => {
        safeLog('❌ YouTube connection error:', error);
        showNotification(`✗ Failed to initiate YouTube connection: ${error.message}`, 'error');
    });
}


// Set theme
function setTheme(theme) {
    currentTheme = theme;
    safeLog('setTheme(): Applying theme:', theme);
    document.documentElement.setAttribute('data-theme', theme); // Apply theme to HTML element
    localStorage.setItem('theme', theme); // Save theme to local storage
    safeLog('setTheme(): Theme saved to localStorage. Current stored theme:', localStorage.getItem('theme'));
}

// AI section removed - no longer needed

// Send message function removed - AI section no longer needed
// Stop generation function removed - AI section no longer needed
// Handle clip compilation requests from chat
async function handleClipCompilationRequest(userMessage, youtubeUrl) {
    try {
        // 🔐 SECURITY: Check if user is logged in via currentUser (httpOnly cookie authenticated)
        if (!currentUser) {
            addMessageToChat('ai', '❌ Please log in to create clip compilations. Click the login button in the top right.');
            return;
        }
        
        // Show confirmation dialog first
        showClipConfirmationDialog(userMessage, youtubeUrl);
        
    } catch (error) {
        safeLog('Clip compilation error:', error);
        addMessageToChat('ai', `❌ Error: ${error.message}`);
    }
}

// Show confirmation dialog for clip creation
function showClipConfirmationDialog(userMessage, youtubeUrl) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'clip-confirm-modal';
    modal.innerHTML = `
        <style>
            .clip-confirm-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.6);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.2s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .clip-confirm-dialog {
                background: var(--surface);
                border: 1px solid var(--border);
                border-radius: 12px;
                padding: 32px;
                max-width: 420px;
                animation: slideUp 0.3s ease;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            
            @keyframes slideUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            .clip-confirm-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 16px;
            }
            
            .clip-confirm-header h2 {
                margin: 0;
                font-size: 18px;
                color: var(--text);
                font-weight: 600;
            }
            
            .clip-confirm-content {
                margin-bottom: 24px;
            }
            
            .clip-confirm-content p {
                margin: 0 0 12px 0;
                color: var(--muted);
                font-size: 14px;
                line-height: 1.6;
            }
            
            .clip-confirm-url {
                padding: 12px;
                background: rgba(255, 107, 53, 0.1);
                border: 1px solid rgba(255, 107, 53, 0.2);
                border-radius: 6px;
                font-size: 12px;
                color: var(--muted);
                word-break: break-all;
                font-family: monospace;
            }
            
            .clip-confirm-actions {
                display: flex;
                gap: 12px;
                justify-content: flex-end;
            }
            
            .clip-btn {
                padding: 10px 20px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;
                transition: all 0.2s ease;
            }
            
            .clip-btn-reject {
                background: rgba(255, 107, 53, 0.1);
                color: var(--muted);
            }
            
            .clip-btn-reject:hover {
                background: rgba(255, 107, 53, 0.2);
            }
            
            .clip-btn-accept {
                background: linear-gradient(135deg, #ff6b35 0%, #ff8856 100%);
                color: white;
            }
            
            .clip-btn-accept:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
            }
        </style>
        
        <div class="clip-confirm-dialog">
            <div class="clip-confirm-header">
                <span style="font-size: 20px;">🎬</span>
                <h2>Create Clip Compilation</h2>
            </div>
            
            <div class="clip-confirm-content">
                <p>Ready to create a clip compilation from your YouTube video?</p>
                <div class="clip-confirm-url" id="urlDisplay"></div>
                <p style="margin-top: 12px; font-size: 12px; opacity: 0.7;">This may take a few minutes. You can monitor progress in the Processing tab.</p>
            </div>
            
            <div class="clip-confirm-actions">
                <button class="clip-btn clip-btn-reject" id="clipConfirmCancel">
                    ✕ Cancel
                </button>
                <button class="clip-btn clip-btn-accept" id="clipConfirmAccept">
                    ✓ Create Compilation
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // SECURITY: Use textContent instead of innerHTML to prevent XSS
    const urlDisplay = document.getElementById('urlDisplay');
    if (urlDisplay) {
        urlDisplay.textContent = youtubeUrl;
    }
    
    // Handle cancel button
    document.getElementById('clipConfirmCancel').addEventListener('click', () => {
        modal.remove();
    });
    
    // Handle accept button
    document.getElementById('clipConfirmAccept').addEventListener('click', async () => {
        modal.remove();
        window.location.hash = '#/clips';
        
        // Wait for navigation to complete
        setTimeout(() => {
            startClipCompilation(youtubeUrl);
        }, 500);
    });
    
    // Handle outside click to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Start actual clip compilation with processing screen
async function startClipCompilation(youtubeUrl) {
    try {
        const headers = getAuthHeaders();
        
        // Save processing state in case page refreshes
        // 🔐 SECURITY: Do NOT store full URL - extract video ID only to prevent data leakage
        const videoId = clipsStudio ? clipsStudio.extractYouTubeVideoId(youtubeUrl) : null;
        sessionStorage.setItem('clipProcessing', JSON.stringify({
            videoId: videoId,  // Only the video ID, not full URL with parameters
            startTime: Date.now()
        }));
        
        // Create processing modal that spans the whole clips container
        const processingModal = document.createElement('div');
        processingModal.id = 'clip-processing-modal';
        processingModal.innerHTML = `
            <style>
                #clip-processing-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, #fff5eb 0%, #ffe4d1 100%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 99999;
                    overflow: hidden;
                }
                
                .clip-processing-container {
                    text-align: center;
                    position: relative;
                    z-index: 10;
                }
                
                .clip-atom {
                    width: 140px;
                    height: 140px;
                    margin: 0 auto 32px;
                }
                
                .clip-atom svg {
                    width: 100%;
                    height: 100%;
                    filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.3));
                }
                
                .clip-nucleus {
                    animation: nucleusPulse 1.5s ease-in-out infinite;
                    transform-origin: center;
                }
                
                @keyframes nucleusPulse {
                    0% { transform: scale(0.8); opacity: 0.6; }
                    50% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(0.8); opacity: 0.6; }
                }
                
                .clip-orbit {
                    transform-origin: 50px 50px;
                    stroke-dasharray: 300;
                    stroke-dashoffset: 300;
                }
                
                .clip-orbit-1 {
                    transform: rotate(75deg);
                    animation: drawOrbit 1.5s ease-in-out infinite;
                }
                
                .clip-orbit-2 {
                    transform: rotate(-20deg);
                    animation: drawOrbit 1.5s ease-in-out 0.3s infinite;
                }
                
                @keyframes drawOrbit {
                    0% { stroke-dashoffset: 300; opacity: 0.3; }
                    50% { stroke-dashoffset: 0; opacity: 0.7; }
                    100% { stroke-dashoffset: 300; opacity: 0.3; }
                }
                
                .clip-title {
                    font-size: 28px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 8px;
                }
                
                .clip-subtitle {
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 32px;
                }
                
                .clip-progress-container {
                    width: 280px;
                    margin: 0 auto 24px;
                }
                
                .clip-progress-bar {
                    width: 100%;
                    height: 4px;
                    background: rgba(255, 107, 53, 0.15);
                    border-radius: 2px;
                    overflow: hidden;
                    margin-bottom: 12px;
                }
                
                .clip-progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #ff6b35 0%, #ff8856 100%);
                    width: 0%;
                    transition: width 0.4s ease;
                    border-radius: 2px;
                }
                
                .clip-stats {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    margin-top: 24px;
                    padding: 16px;
                    background: rgba(255, 107, 53, 0.08);
                    border-radius: 8px;
                }
                
                .clip-stat {
                    text-align: center;
                }
                
                .clip-stat-value {
                    font-size: 20px;
                    font-weight: 700;
                    color: #ff6b35;
                }
                
                .clip-stat-label {
                    font-size: 11px;
                    color: #999;
                    margin-top: 4px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
            </style>
            
            <div class="clip-processing-container">
                <div class="clip-atom">
                    <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g class="clip-nucleus">
                            <circle cx="50" cy="50" r="8" fill="#ff6b35"/>
                            <circle cx="50" cy="50" r="12" fill="#ff6b35" opacity="0.3"/>
                        </g>
                        <ellipse class="clip-orbit clip-orbit-1" rx="45" ry="25" cx="50" cy="50" stroke="#ff6b35" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
                        <ellipse class="clip-orbit clip-orbit-2" rx="45" ry="25" cx="50" cy="50" stroke="#ff6b35" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
                    </svg>
                </div>
                
                <h1 class="clip-title">Cooking!</h1>
                <p class="clip-subtitle" id="clipStatus">HAHAHAHA</p>
                
                <div class="clip-progress-container">
                    <div class="clip-progress-bar">
                        <div class="clip-progress-fill" id="clipProgressFill"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; gap: 12px;">
                        <span id="clipProgress" style="font-size: 12px; color: #999;">0%</span>
                        <span id="clipTimeLeft" style="font-size: 12px; color: #999;">--:--</span>
                    </div>
                </div>
                
                <div class="clip-stats">
                    <div class="clip-stat">
                        <div class="clip-stat-value" id="clipStatDownload">0%</div>
                        <div class="clip-stat-label">Downloading</div>
                    </div>
                    <div class="clip-stat">
                        <div class="clip-stat-value" id="clipStatProcessing">0%</div>
                        <div class="clip-stat-label">Processing</div>
                    </div>
                    <div class="clip-stat">
                        <div class="clip-stat-value" id="clipStatRendering">0%</div>
                        <div class="clip-stat-label">Rendering</div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(processingModal);
        
        // Start clip processing
        const startResponse = await fetch(`${API_BASE_URL}/clips/start`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            credentials: 'include',  // 🔐 Send httpOnly cookie
            body: JSON.stringify({
                url: youtubeUrl,
                template_id: 'splitscreen',
                gameplay_clip_id: selectedGameplayClip
            })
        });
        
        if (!startResponse.ok) {
            let errorMsg = 'Failed to start processing';
            let errorCode = '';
            try {
                const errorData = await startResponse.json();
                errorMsg = errorData.error || errorMsg;
                errorCode = errorData.error_code || '';
            } catch (e) {
                errorMsg = `Server error: ${startResponse.status}`;
            }
            
            // Handle GENERATION_COOLDOWN specially
            if (errorCode === 'GENERATION_COOLDOWN') {
                const errorData = await startResponse.json();
                const remainingSeconds = errorData.remaining_seconds || errorData.cooldown_seconds || 30;
                const remainingMinutes = Math.floor(remainingSeconds / 60);
                const remainingSecsOnly = remainingSeconds % 60;
                
                // Start countdown timer on submit button
                startCooldownTimer(remainingSeconds);
                
                let timestr = '';
                if (remainingMinutes > 0) {
                    timestr = `in ${remainingMinutes}m ${remainingSecsOnly}s`;
                } else {
                    timestr = `in ${remainingSeconds}s`;
                }
                
                errorMsg = `You can generate another video ${timestr}.`;
            }
            
            processingModal.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 48px; margin-bottom: 16px;">❌</div>
                    <h1 style="font-size: 24px; color: var(--text); margin-bottom: 8px;">Error</h1>
                    <p style="color: var(--muted); margin-bottom: 24px;">${errorMsg}</p>
                    <button onclick="this.closest('#clip-processing-modal').remove()" style="
                        padding: 10px 20px;
                        background: linear-gradient(135deg, #ff6b35 0%, #ff8856 100%);
                        color: white;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 600;
                    ">Close</button>
                </div>
            `;
            return;
        }
        
        const startData = await startResponse.json();
        const projectId = startData.project_id;
        
        // Poll for status updates
        let isComplete = false;
        let pollCount = 0;
        const maxPolls = 300; // 10 minutes max
        let startTime = Date.now();
        let estimatedTotalTime = null;
        
        while (!isComplete && pollCount < maxPolls) {
            pollCount++;
            
            try {
                const statusResponse = await fetch(`${API_BASE_URL}/clips/status/${projectId}`, {
                    headers: headers,
                    credentials: 'include'  // 🔐 Send httpOnly cookie
                });
                
                if (statusResponse.ok) {
                    let statusData;
                    try {
                        statusData = await statusResponse.json();
                    } catch (e) {
                        safeLog('Status JSON parse error:', e);
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        continue;
                    }
                    
                    const status = statusData.status || 'processing';
                    const progress = statusData.progress || 0;
                    
                    // Estimate total time based on current progress
                    const elapsedMs = Date.now() - startTime;
                    const elapsedSecs = elapsedMs / 1000;
                    if (progress > 0 && !estimatedTotalTime) {
                        estimatedTotalTime = (elapsedSecs / progress) * 100;
                    }
                    
                    const remainingMs = estimatedTotalTime ? (estimatedTotalTime * (100 - progress) / 100) * 1000 : 0;
                    const minutes = Math.floor(remainingMs / 60000);
                    const seconds = Math.floor((remainingMs % 60000) / 1000);
                    
                    // Update UI with fun messages
                    const statusEl = document.getElementById('clipStatus');
                    if (statusEl) {
                        const funMessages = {
                            'downloading': ['LOLOL', 'BRUH', 'OK WAIT', 'NO WAY', 'LEMME GET THIS'],
                            'processing': ['HAHAHAHA', 'OK THIS IS INSANE', 'STOP IT', 'WHAT IS HAPPENING', 'I CANT'],
                            'rendering': ['LMAOOO', 'YOOO', 'IM DYING', 'TOO GOOD', 'STOP STOP'],
                            'completed': ['YESSS', 'LETS GOOOO', 'FIRE FIRE FIRE', 'POGGGG', 'SHEEEESH']
                        };
                        const messages = funMessages[status] || ['LOL', 'HAHAHAHA', 'LMAOOO'];
                        statusEl.textContent = messages[Math.floor(Math.random() * messages.length)];
                    }
                    document.getElementById('clipProgressFill').style.width = Math.min(progress, 99) + '%';
                    document.getElementById('clipProgress').textContent = Math.min(progress, 99) + '%';
                    document.getElementById('clipTimeLeft').textContent = minutes > 0 ? `${minutes}:${seconds.toString().padStart(2, '0')}` : `${seconds}s`;
                    
                    // Update phase stats
                    if (status === 'downloading') {
                        document.getElementById('clipStatDownload').textContent = `${Math.min(progress, 99)}%`;
                    } else if (status === 'processing') {
                        document.getElementById('clipStatProcessing').textContent = `${Math.min(progress, 99)}%`;
                    } else if (status === 'rendering') {
                        document.getElementById('clipStatRendering').textContent = `${Math.min(progress, 99)}%`;
                    }
                    
                    if (status === 'completed') {
                        isComplete = true;
                        sessionStorage.removeItem('clipProcessing');
                        
                        processingModal.innerHTML = `
                            <div style="text-align: center; animation: slideUp 0.3s ease;">
                                <div style="font-size: 80px; margin-bottom: 16px; animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);">✅</div>
                                <h1 style="font-size: 32px; color: var(--text); margin-bottom: 8px; font-weight: 700;">Compilation Ready!</h1>
                                <p style="color: var(--muted); margin-bottom: 32px;">Your video is ready to edit and publish</p>
                                <button onclick="
                                    document.getElementById('clip-processing-modal').remove();
                                    window.location.hash = '#/clips';
                                " style="
                                    padding: 12px 24px;
                                    background: linear-gradient(135deg, #ff6b35 0%, #ff8856 100%);
                                    color: white;
                                    border: none;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-weight: 600;
                                    font-size: 14px;
                                    transition: all 0.2s;
                                " onmouseover="this.style.transform='translateY(-2px); this.style.boxShadow='0 4px 12px rgba(255, 107, 53, 0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'>
                                    📎 Open Project
                                </button>
                            </div>
                            <style>
                                @keyframes popIn {
                                    0% { transform: scale(0.3); opacity: 0; }
                                    70% { transform: scale(1.1); }
                                    100% { transform: scale(1); opacity: 1; }
                                }
                                @keyframes slideUp {
                                    from { transform: translateY(20px); opacity: 0; }
                                    to { transform: translateY(0); opacity: 1; }
                                }
                            </style>
                        `;
                        
                    } else if (status === 'failed') {
                        isComplete = true;
                        sessionStorage.removeItem('clipProcessing');
                        processingModal.innerHTML = `
                            <div style="text-align: center;">
                                <div style="font-size: 48px; margin-bottom: 16px;">❌</div>
                                <h1 style="font-size: 24px; color: var(--text); margin-bottom: 8px;">Processing Failed</h1>
                                <p style="color: var(--muted); margin-bottom: 24px;">${statusData.message || 'Unknown error'}</p>
                                <button onclick="this.closest('#clip-processing-modal').remove()" style="
                                    padding: 10px 20px;
                                    background: linear-gradient(135deg, #ff6b35 0%, #ff8856 100%);
                                    color: white;
                                    border: none;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-weight: 600;
                                ">Close</button>
                            </div>
                        `;
                    }
                }
            } catch (pollError) {
                safeLog('Status poll error:', pollError);
            }
            
            // Wait 2 seconds before next poll
            if (!isComplete) {
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        }
        
        if (!isComplete) {
            sessionStorage.removeItem('clipProcessing');
            processingModal.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 48px; margin-bottom: 16px;">⏱️</div>
                    <h1 style="font-size: 24px; color: var(--text); margin-bottom: 8px;">Processing Timeout</h1>
                    <p style="color: var(--muted); margin-bottom: 24px;">Your compilation is still being processed. Check back in a moment.</p>
                    <button onclick="this.closest('#clip-processing-modal').remove(); window.location.hash = '#/clips'" style="
                        padding: 10px 20px;
                        background: linear-gradient(135deg, #ff6b35 0%, #ff8856 100%);
                        color: white;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 600;
                    ">View in Clips</button>
                </div>
            `;
        }
        
    } catch (error) {
        safeLog('Clip compilation error:', error);
        document.getElementById('clip-processing-modal')?.remove();
        addMessageToChat('ai', `❌ Error: ${error.message}`);
    }
}

// Generate video ideas with shuffle button
async function generateVideoIdeas() {

    const videoIdeas = [
        "Create a fast-paced gaming montage with epic plays and reactions",
        "Make a 30-second motivational workout compilation with trending music",
        "Put together viral dance clips from your latest YouTube video",
        "Compile your best commentary moments into shareable shorts",
        "Create a highlight reel of epic fails and funny moments",
        "Make a trending audio mashup with video clips synced to the beat",
        "Compile before and after transformation clips",
        "Create a speed painting or creation process video",
        "Make a \"Day in my life\" quick clips compilation",
        "Create a tutorial snippet series from your longer videos",
        "Compile your best one-liners and funny quotes",
        "Make a seasonal/holiday themed clip collection",
        "Create a reaction compilation video",
        "Compile jaw-dropping moments and plot twists",
        "Make a \"Top 10 moments\" video from your content"
    ];
    
    const randomIdea = videoIdeas[Math.floor(Math.random() * videoIdeas.length)];
    
    // Add the idea to the input field
    if (userInput) {
        userInput.value = randomIdea;
        userInput.focus();
        // Trigger input event to update button state
        userInput.dispatchEvent(new Event('input'));
    }
    
    // Add animation to shuffle button
    const shuffleBtn = document.getElementById('shuffleIdeasBtn');
    if (shuffleBtn) {
        shuffleBtn.style.animation = 'none';
        setTimeout(() => {
            shuffleBtn.style.animation = 'spin 0.6s ease-in-out';
        }, 10);
    }
}

// Add message to chat
function addMessageToChat(sender, content) {
    if (!chatContainer) return;
    
    const messageRow = document.createElement('div');
    messageRow.className = `message-row ${sender}-message-row`;
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}-message`;
    
    messageElement.innerHTML = `
        <div class="message-content">
            ${formatMessageContent(content)}
        </div>
        <div class="message-actions">
            <button class="message-action copy-btn" title="Copy">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            </button>
        </div>
    `;

    const copyButton = messageElement.querySelector('.copy-btn');
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(content).then(() => {
            copyButton.classList.add('copied');
            copyButton.innerHTML = '<i class="fas fa-check"></i>';
            
            setTimeout(() => {
                copyButton.classList.remove('copied');
                copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            }, 2000);
        }).catch(err => {
            safeLog('Failed to copy:', err);
        });
    });
    
    messageRow.appendChild(messageElement);
    chatContainer.appendChild(messageRow);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Dispatch custom event to update quick actions visibility
    window.dispatchEvent(new CustomEvent('messageAdded'));
    
    if (sender === 'user' || !isGenerating) {
        chatHistory.push({
            sender,
            content,
            timestamp: new Date().toISOString()
        });
        
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
}

// Start new chat
function startNewChat() {
    if (chatContainer && chatContainer.children.length > 1 || (welcomeCard && !welcomeCard.classList.contains('hidden'))) {
        if (confirm('Start a new chat? Current chat will be cleared.')) {
            clearChat();
        }
    }
}

// Clear chat
function clearChat() {
    if (!chatContainer) return;
    
    while (chatContainer.firstChild) {
        chatContainer.removeChild(chatContainer.firstChild);
    }
    
    if (welcomeCard) {
        chatContainer.appendChild(welcomeCard);
        welcomeCard.classList.remove('hidden');
    }
    
    uploadedFiles = [];
    const filePreviewContainer = document.getElementById('filePreviewContainer');
    if (filePreviewContainer) {
        filePreviewContainer.innerHTML = '';
        filePreviewContainer.classList.remove('active');
    }
    
    // Reset prompt count and restore centered style for next conversation
    promptCount = 0;
    const inputSection = document.querySelector('.input-section');
    const inputContainer = inputSection ? inputSection.querySelector('.input-container') : null;
    if (inputContainer) {
        inputContainer.classList.add('first-prompt');
    }
    if (inputSection) {
        inputSection.classList.add('is-first-prompt');
    }
    
    chatHistory = [];
    localStorage.removeItem('chatHistory');
}

// Open upgrade modal
function openUpgradeModal() {
    if (!upgradeModal) return;
    upgradeModal.classList.add('active');
}

// Close upgrade modal
function closeUpgradeModal() {
    if (!upgradeModal) return;
    upgradeModal.classList.remove('active');
}

// Navigate to different sections
function navigateTo(section) {
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.target === section) {
            item.classList.add('active');
        }
    });
    
    switch(section) {
        case 'chat':
            // If returning to chat without sending any prompts, restore first-prompt styling
            if (promptCount === 0) {
                const inputSection = document.querySelector('.input-section');
                const inputContainer = inputSection ? inputSection.querySelector('.input-container') : null;
                if (inputContainer) {
                    inputContainer.classList.add('first-prompt');
                }
                if (inputSection) {
                    inputSection.classList.add('is-first-prompt');
                }
            }
            break;

        case 'history':
            openHistory();
            break;
        case 'saved':
            openSaved();
            break;
        default:
            break;
    }
}

// Update token display
function updateTokenDisplay() {
    if (tokenCount) {
        tokenCount.textContent = tokens.toLocaleString();
    }
}

// Show upgrade prompt when tokens are low
function showUpgradePrompt() {
    const message = `💡 You have ${tokens} tokens remaining. Running low? <a href="/premium.html" style="color: #ff6b35; font-weight: 700; text-decoration: underline;">Upgrade now</a> for unlimited access!`;
    addMessageToChat('ai', message);
}

// Feature Modal Functions
// Removed: openAdsGenerator, openTrendingProducts (deprecated features)

// ⚠️ SECURITY: This only controls UI visibility. Backend MUST enforce plan restrictions!
// Never rely on this for actual feature access control - the backend must verify on every request.
function checkPremiumAccess() {
    if (!currentUser) {
        showNotification('Please sign in to access premium features', 'error');
        return false;
    }
    
    // Only show/hide UI elements - backend MUST enforce plan on actual API calls
    if (currentUser.plan === 'free') {
        showNotification('This is a premium feature. Please upgrade your plan.', 'error');
        return false;
    }
    return true;
}

// Load saved items
function loadSaved() {
    const savedList = document.getElementById('savedList');
    if (!savedList) return;
    
    // ⚠️ SECURITY WARNING: savedResults contains user content stored in localStorage
    // localStorage is accessible to any script on the domain (XSS vulnerability)
    // TODO: Migrate to server-side storage or IndexedDB with encryption
    const savedResults = JSON.parse(localStorage.getItem('savedResults') || '[]');
    
    if (savedResults.length === 0) {
        savedList.innerHTML = '<p>No saved items.</p>';
        return;
    }
    
    savedList.innerHTML = savedResults.map((result, index) => `
        <div class="saved-item">
            <div class="saved-type">${result.type}</div>
            <div class="saved-preview">${result.content.substring(0, 100)}...</div>
            <div class="saved-date">${new Date(result.timestamp).toLocaleDateString()}</div>
            <button onclick="viewSavedItem(${index})">View</button>
        </div>
    `).join('');
}

// View saved item
function viewSavedItem(index) {
    // ⚠️ SECURITY: savedResults in localStorage - should migrate to server storage
    const savedResults = JSON.parse(localStorage.getItem('savedResults') || '[]');
    const item = savedResults[index];
    
    if (item) {
        alert(`Saved ${item.type}:\n\n${item.content}`);
    }
}

// Removed: generateAds and analyzeTrendingProducts (deprecated AI features)

// Utility Functions
function showError(containerId, message) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.style.display = 'block';
    // SECURITY: Use safe DOM manipulation instead of innerHTML to prevent XSS
    container.innerHTML = '';
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    container.appendChild(errorDiv);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    });
}

function saveResult(type, content) {
    // ⚠️ SECURITY: Storing user content in localStorage - should use server storage
    const savedResults = JSON.parse(localStorage.getItem('savedResults') || '[]');
    savedResults.push({
        type,
        content,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('savedResults', JSON.stringify(savedResults));
    showNotification('Saved successfully!', 'success');
}

// Apply theme immediately before DOM is fully loaded to prevent flash
(function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// DEBUG FUNCTION - Test template preview elements
window.testTemplatePreview = function() {
    const nameEl = document.getElementById('previewTemplateName');
    const descEl = document.getElementById('previewTemplateDescription');
    const durationEl = document.getElementById('previewVideoDuration');
    const formatEl = document.getElementById('previewVideoFormat');
    
    safeLog('🧪 TEMPLATE PREVIEW TEST:');
    safeLog('  previewTemplateName:', nameEl ? '✅ FOUND' : '❌ NOT FOUND');
    safeLog('  previewTemplateDescription:', descEl ? '✅ FOUND' : '❌ NOT FOUND');
    safeLog('  previewVideoDuration:', durationEl ? '✅ FOUND' : '❌ NOT FOUND');
    safeLog('  previewVideoFormat:', formatEl ? '✅ FOUND' : '❌ NOT FOUND');
    
    if (nameEl) {
        nameEl.textContent = 'TEST: Ranking Moments';
        safeLog('  ✅ Updated template name');
    }
    if (descEl) {
        descEl.textContent = 'TEST: This is a test video title';
        safeLog('  ✅ Updated template description');
    }
    if (durationEl) {
        durationEl.textContent = '~3m 20s';
        safeLog('  ✅ Updated duration');
    }
    if (formatEl) {
        formatEl.textContent = 'YouTube Shorts';
        safeLog('  ✅ Updated format');
    }
    
    safeLog('If you see the TEST values in the template preview, the elements work!');
};

safeLog('✅ testTemplatePreview() is ready - run it in console');


document.addEventListener('DOMContentLoaded', () => {
    // Check if we were in the middle of processing before page refresh
    const clipProcessingState = sessionStorage.getItem('clipProcessing');
    if (clipProcessingState) {
        try {
            const state = JSON.parse(clipProcessingState);
            // Resume the clip compilation
            setTimeout(() => {
                startClipCompilation(state.url);
            }, 500);
        } catch (e) {
            safeLog('Failed to restore clip processing:', e);
            sessionStorage.removeItem('clipProcessing');
        }
    }
    
    // Load available gameplay clips for splitscreen
    loadAvailableGameplayClips();
    
    // Load tier info for portal card
    loadTierInfo();
    
    // Await ClipsStudio.init() if available
    if (typeof clipsStudio !== 'undefined' && clipsStudio && typeof clipsStudio.init === 'function') {
        clipsStudio.init();
        // Setup watermark toggle after init
        if (typeof clipsStudio.setupWatermarkToggle === 'function') {
            clipsStudio.setupWatermarkToggle();
        }
    } else {
        init();
    }
});


window.getWatermarkState = function() {
    const stored = localStorage.getItem('solisAIWatermarkEnabled');
    // Default to true if not explicitly set to false
    return stored !== 'false';
};


window.getWatermarkParams = function() {
    return {
        add_watermark: window.getWatermarkState()
    };
};