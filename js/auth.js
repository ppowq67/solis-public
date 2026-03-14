/**
 * Authentication and Token Management Utility
 * Handles automatic token refresh before expiration
 * Run this on all authenticated pages
 */

const AUTH_CONFIG = {
    API_BASE: window.location.origin + '/api',
    ACCESS_TOKEN_DURATION: 3600000,  // 1 hour in milliseconds
    REFRESH_CHECK_INTERVAL: 50 * 60 * 1000,  // Check every 50 minutes (before 1 hour expires)
};

let refreshTokenTimer = null;
let refeshCheckTimer = null;

/**
 * Setup automatic token refresh
 * Checks every 50 minutes if token needs refresh
 * This keeps user logged in seamlessly
 */
function setupAutoRefresh() {
    if (refeshCheckTimer) clearInterval(refeshCheckTimer);
    
    refeshCheckTimer = setInterval(async () => {
        console.log('[Auth] Checking if token needs refresh...');
        await refreshTokenSilently();
    }, AUTH_CONFIG.REFRESH_CHECK_INTERVAL);
    
    console.log('[Auth] Auto-refresh setup complete (checks every 50 minutes)');
}

/**
 * Refresh access token silently
 * Called before token expires to keep user logged in
 */
async function refreshTokenSilently() {
    try {
        const response = await fetch(`${AUTH_CONFIG.API_BASE}/auth/refresh`, {
            method: 'POST',
            credentials: 'include',  // Send cookies (refresh token)
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('[Auth] Token refreshed successfully');
            return true;
        } else if (response.status === 401) {
            console.warn('[Auth] Refresh failed - session expired, redirecting to login');
            redirectToLogin();
            return false;
        }
    } catch (error) {
        console.error('[Auth] Refresh error:', error);
    }
    return false;
}

/**
 * Logout user completely
 * Clears both access and refresh tokens
 */
async function logoutUser() {
    try {
        // Clear timers
        if (refreshTokenTimer) clearTimeout(refreshTokenTimer);
        if (refeshCheckTimer) clearInterval(refeshCheckTimer);
        
        // Call logout endpoint
        await fetch(`${AUTH_CONFIG.API_BASE}/auth/logout`, {
            method: 'POST',
            credentials: 'include'
        });
        
        console.log('[Auth] User logged out');
        
        // Redirect to login
        redirectToLogin();
    } catch (error) {
        console.error('[Auth] Logout error:', error);
        redirectToLogin();
    }
}

/**
 * Check if user is currently authenticated
 */
async function isAuthenticated() {
    try {
        const response = await fetch(`${AUTH_CONFIG.API_BASE}/auth/check`, {
            method: 'GET',
            credentials: 'include'
        });
        
        if (response.ok) {
            const data = await response.json();
            return data.authenticated === true;
        }
    } catch (error) {
        console.error('[Auth] Authentication check error:', error);
    }
    return false;
}

/**
 * Get current user info
 */
async function getCurrentUser() {
    try {
        const response = await fetch(`${AUTH_CONFIG.API_BASE}/auth/check`, {
            method: 'GET',
            credentials: 'include'
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.authenticated && data.user) {
                return data.user;
            }
        }
    } catch (error) {
        console.error('[Auth] Failed to get current user:', error);
    }
    return null;
}

/**
 * Redirect to login page
 */
function redirectToLogin() {
    // Avoid redirect loops
    if (!window.location.pathname.includes('login')) {
        window.location.href = '/login.html';
    }
}

/**
 * Protected fetch wrapper
 * Automatically handles 401 responses by refreshing token and retrying
 */
async function protectedFetch(url, options = {}) {
    let response = await fetch(url, {
        ...options,
        credentials: 'include'
    });
    
    // If 401, try to refresh and retry once
    if (response.status === 401) {
        console.log('[Auth] Got 401, attempting token refresh...');
        const refreshed = await refreshTokenSilently();
        
        if (refreshed) {
            // Retry the original request with new token
            response = await fetch(url, {
                ...options,
                credentials: 'include'
            });
        } else {
            // Refresh failed, redirect to login
            redirectToLogin();
        }
    }
    
    return response;
}

/**
 * Initialize authentication on page load
 * Call this on dashboard and other authenticated pages
 */
function initAuth() {
    console.log('[Auth] Initializing authentication...');
    
    // Setup auto-refresh
    setupAutoRefresh();
    
    // Check authentication immediately
    isAuthenticated().then(authenticated => {
        if (!authenticated) {
            console.warn('[Auth] Not authenticated, redirecting to login');
            redirectToLogin();
        } else {
            console.log('[Auth] User is authenticated');
        }
    });
    
    console.log('[Auth] Initialization complete');
}

// Export for use in other scripts
window.Auth = {
    setup: setupAutoRefresh,
    refresh: refreshTokenSilently,
    logout: logoutUser,
    isAuthenticated,
    getCurrentUser,
    redirectToLogin,
    protectedFetch,
    init: initAuth
};

console.log('[Auth] Auth utility loaded');
