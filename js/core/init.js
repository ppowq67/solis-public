/**
 * Global Configuration Initialization
 * Runs before any other scripts to set up API_BASE_URL and Paddle environment
 * This script is safe to inline or as external - contains no user input
 */

(function() {
    'use strict';

    // 🔧 Auto-detect API_BASE_URL based on hostname and port (READ-ONLY, can't be modified)
    if (!window.API_BASE_URL) {
        const hostname = window.location.hostname;
        const port = window.location.port;
        const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';
        
        if (isLocal) {
            // Local development: map frontend/backend ports
            // Frontend on 5500 → Backend on 5500
            // Frontend on 5000 → Backend on 5000 (if both on same port)
            let apiPort = '5500';
            
            if (port === '5500' || port === '') {
                apiPort = '5500';  // Frontend accessing backend
            } else if (port === '5000') {
                apiPort = '5000';  // Already on backend
            }
            
            window.API_BASE_URL = `http://${hostname}:${apiPort}/api`;
        } else {
            // Production: use api subdomain
            window.API_BASE_URL = 'https://api.solisai.video/api';
        }
        
        console.log('✅ API_BASE_URL configured:', window.API_BASE_URL);
        
        // Prevent modification in DevTools (freeze it in production)
        if (!isLocal) {
            Object.defineProperty(window, 'API_BASE_URL', {
                writable: false,
                configurable: false
            });
        }
    }

    // 🔒 Mark that initialization is complete
    window.SOLIS_INITIALIZED = true;
})();
