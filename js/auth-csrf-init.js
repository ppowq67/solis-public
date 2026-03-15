/**
 * Auth CSRF Initialization
 * Handles CSRF token fetching and secure request setup for auth pages
 */

const APP_VERSION = '1.0.0';

async function initializeCSRFToken() {
    try {
        const response = await fetch(`${window.API_BASE_URL}/auth/csrf-token`, {
            method: 'GET',
            credentials: 'include'
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.token) {
                const csrfMeta = document.querySelector('meta[name="csrf-token"]');
                if (csrfMeta) {
                    csrfMeta.setAttribute('content', data.token);
                    console.log('[OK] CSRF token initialized');
                }
            }
        } else {
            console.warn('[WARNING] Failed to fetch CSRF token');
        }
    } catch (error) {
        console.warn('[WARNING] CSRF token fetch error:', error);
    }
}

function getCSRFToken() {
    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    if (csrfMeta && csrfMeta.content && csrfMeta.content.length >= 32) {
        return csrfMeta.content;
    }
    return null;
}

async function secureFetch(url, options = {}) {
    const defaultHeaders = { };
    
    if (options.method && ['POST', 'PUT', 'DELETE', 'PATCH'].includes(options.method.toUpperCase())) {
        const csrfToken = getCSRFToken();
        if (!csrfToken) {
            throw new Error('CSRF token not available - cannot make state-changing request');
        }
        defaultHeaders['X-CSRF-Token'] = csrfToken;
    }
    
    return fetch(url, {
        ...options,
        credentials: 'include',
        headers: {
            ...defaultHeaders,
            ...options.headers
        }
    });
}

if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    console.warn('⚠️ Warning: Connection is not secure. Use HTTPS in production.');
}

// Initialize CSRF on page load
document.addEventListener('DOMContentLoaded', initializeCSRFToken);

function isNewUser() {
    const hasVisited = sessionStorage.getItem('solis_visited');
    return !hasVisited;
}

function markUserAsVisited() {
    sessionStorage.setItem('solis_visited', 'true');
}

function validateUserObject(userInfo) {
    if (!userInfo || typeof userInfo !== 'object') {
        throw new Error('Invalid user object');
    }
    
    const allowedProps = ['id', 'email', 'name', 'role', 'picture', 'plan', 'auth_provider'];
    const sanitized = {};
    
    for (const prop of allowedProps) {
        if (prop in userInfo) {
            const value = userInfo[prop];
            if (typeof value === 'string' || typeof value === 'number') {
                sanitized[prop] = value;
            }
        }
    }
    return sanitized;
}

function checkVersionUpdate() {
    const lastVersion = sessionStorage.getItem('appVersion');
    if (lastVersion && lastVersion !== APP_VERSION) {
        sessionStorage.setItem('showVersionUpdate', 'true');
    }
    sessionStorage.setItem('appVersion', APP_VERSION);
}

async function verifyAndRedirect() {
    try {
        const verifyUrl = `${window.API_BASE_URL}/auth/verify`;
        console.log('🔍 Verifying session at:', verifyUrl);
        const response = await secureFetch(verifyUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        console.log('📡 Verify response status:', response.status);
        const data = await response.json();
        console.log('📄 Verify response data:', data);
        
        if (response.ok) {
            if (!data || typeof data !== 'object' || !data.user) {
                throw new Error('Invalid API response format');
            }
            const userInfo = validateUserObject(data.user);
            sessionStorage.setItem('userId', String(userInfo.id));
            
            const newUser = isNewUser();
            markUserAsVisited();
            checkVersionUpdate();
            
            window.history.replaceState({}, document.title, window.location.pathname);
            console.log('✅ Session verified, redirecting to:', newUser ? 'welcome' : 'dashboard');
            
            const redirectUrl = newUser ? '/welcome.html' : '/dashboard.html';
            setTimeout(() => { window.location.href = redirectUrl; }, 100);
        } else {
            console.log('❌ Session invalid (status ' + response.status + '), redirecting to login');
            console.log('Response:', data);
            setTimeout(() => { window.location.href = '/login.html'; }, 100);
        }
    } catch (error) {
        console.error('❌ Error during verification:', error.message, error);
        setTimeout(() => { window.location.href = '/login.html'; }, 100);
    }
}

setTimeout(() => {
    verifyAndRedirect();
}, 500);
