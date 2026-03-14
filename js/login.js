async function waitForInitialization() {
    return new Promise((resolve) => {
        if (window.SOLIS_INITIALIZED && window.API_BASE_URL) {
            resolve();
        } else {
            const checkInterval = setInterval(() => {
                if (window.SOLIS_INITIALIZED && window.API_BASE_URL) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 50);
            setTimeout(() => {
                clearInterval(checkInterval);
                resolve();
            }, 5000);
        }
    });
}

let googleLoginBtn, googleBtnText;

async function initializeCSRFToken() {
    try {
        const r = await fetch(`${window.API_BASE_URL}/auth/csrf-token`, { method:'GET', credentials:'include' });
        if (r.ok) {
            const d = await r.json();
            if (d.token) { 
                const m = document.querySelector('meta[name="csrf-token"]'); 
                if(m) m.setAttribute('content', d.token); 
            }
        }
    } catch(e) { 
        console.warn('⚠️ CSRF fetch error:', e); 
    }
}

async function setupLoginPage() {
    await waitForInitialization();
    
    googleLoginBtn = document.getElementById('googleLoginBtn');
    googleBtnText = document.getElementById('googleBtnText');

    if (!googleLoginBtn || !googleBtnText) {
        console.error('❌ Login button elements not found');
        return;
    }

    await initializeCSRFToken();
    
    // Check for logout request
    const params = new URLSearchParams(window.location.search);
    if (params.has('logout')) {
        console.log('🔐 Logout requested - clearing session');
        try {
            const r = await fetch(`${window.API_BASE_URL}/auth/logout`, { method:'POST', credentials:'include' });
            console.log('✅ Logout successful');
            // Clear any local data
            sessionStorage.clear();
            localStorage.removeItem('user');
        } catch(e) {
            console.warn('⚠️ Logout error:', e);
        }
        // Remove ?logout from URL
        window.history.replaceState({}, document.title, '/login.html');
    }
    
    try {
        const r = await fetch(`${window.API_BASE_URL}/auth/check`, { method:'GET', credentials:'include' });
        if (r.ok) { 
            const d = await r.json(); 
            if (d.authenticated && d.user) {
                console.log('✅ User already authenticated');
                // Check for test mode - add ?test to URL to prevent auto-redirect (for testing only)
                if (!params.has('test')) {
                    console.log('Redirecting to dashboard...');
                    window.location.href = '/dashboard.html';
                } else {
                    console.log('Test mode: Auto-redirect disabled. User can test login page.');
                }
            }
        }
    } catch(e) { 
        console.warn('⚠️ Auth check failed:', e); 
    }

    // Set up event listeners
    setupEventListeners();
}

function getCSRFToken() {
    const m = document.querySelector('meta[name="csrf-token"]');
    return (m && m.content && m.content.length >= 32) ? m.content : null;
}

function disableButtonWithCountdown(btn, secs = 3) {
    btn.disabled = true; 
    let rem = secs;
    const orig = btn.querySelector('span').textContent;
    const iv = setInterval(() => {
        btn.querySelector('span').textContent = `Try again in ${rem}s`;
        rem--;
        if (rem < 0) { 
            clearInterval(iv); 
            btn.disabled = false; 
            btn.querySelector('span').textContent = orig; 
        }
    }, 1000);
}

function setupEventListeners() {
    if (!googleLoginBtn) return;
    
    googleLoginBtn.addEventListener('click', handleGoogleLogin);
}

async function handleGoogleLogin() {
    try {
        googleBtnText.textContent = 'Connecting…';
        googleLoginBtn.disabled = true;
        const r = await fetch(`${window.API_BASE_URL}/auth/google`, { method:'GET', credentials:'include' });
        if (!r.ok) throw new Error(`Server error: ${r.status}`);
        const d = await r.json();
        if (d.auth_url) {
            window.location.href = d.auth_url;
        } else {
            throw new Error('Authentication unavailable');
        }
    } catch(e) {
        console.error('❌ Login error:', e);
        alert('Login failed. Please check your connection and try again.');
        googleBtnText.textContent = 'Continue with Google';
        disableButtonWithCountdown(googleLoginBtn, 3);
    }
}

async function secureFetch(url, options = {}) {
    const headers = {};
    if (options.method && ['POST','PUT','DELETE','PATCH'].includes(options.method.toUpperCase())) {
        const csrf = getCSRFToken();
        if (!csrf) throw new Error('CSRF token unavailable');
        headers['X-CSRF-Token'] = csrf;
    }
    return fetch(url, { ...options, credentials:'include', headers:{ ...headers, ...options.headers } });
}

// Warn if not HTTPS (except localhost)
if (window.location.protocol === 'http:' && !['localhost','127.0.0.1'].includes(window.location.hostname)) {
    console.warn('⚠️ Not HTTPS — use HTTPS in production.');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', setupLoginPage);
