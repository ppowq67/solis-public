// 🔐 CSRF Token Initialization and Secure Fetch Helpers
(async function initializeCsrfToken() {
    try {
        const response = await fetch('/api/auth/csrf-token', {
            method: 'GET',
            credentials: 'include'
        });
        if (response.ok) {
            const data = await response.json();
            if (data.token && typeof data.token === 'string' && data.token.length >= 32) {
                document.querySelector('meta[name="csrf-token"]').setAttribute('content', data.token);
                console.log('✅ CSRF token initialized');
            }
        } else {
            console.warn('Failed to fetch CSRF token:', response.status);
        }
    } catch (error) {
        console.error('Error initializing CSRF token:', error);
    }
})();

// 🔐 Helper function to get CSRF token from meta tag
function getCSRFToken() {
    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    if (csrfMeta && csrfMeta.content && csrfMeta.content.length >= 32) {
        return csrfMeta.content;
    }
    return null;
}

// 🔐 Secure fetch wrapper that automatically includes CSRF token for mutations
async function secureFetch(url, options = {}) {
    const defaultHeaders = { };
    
    // Add CSRF token for state-changing requests
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

// 🔐 HTTPS enforcement warning
if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    console.warn('⚠️ Warning: Connection is not secure. Use HTTPS in production.');
}
