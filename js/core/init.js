/**
 * Global Configuration Initialization
 * Runs before any other scripts to set up API_BASE_URL and Paddle environment
 * This script is safe to inline or as external - contains no user input
 */

(function() {
    'use strict';

    // 🔧 Auto-detect API_BASE_URL based on hostname (READ-ONLY, can't be modified)
    if (!window.API_BASE_URL) {
        const hostname = window.location.hostname;
        const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';
        
        window.API_BASE_URL = isLocal 
            ? 'http://127.0.0.1:5500/api'
            : 'https://api.solisai.video/api';
        
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
