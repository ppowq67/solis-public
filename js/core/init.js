
(function() {
    'use strict';
    if (!window.API_BASE_URL) {
        const hostname = window.location.hostname;
        const port = window.location.port;
        const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';
        
        if (isLocal) {
            let apiPort = '5500';
            
            if (port === '5500' || port === '') {
                apiPort = '5500';
            } else if (port === '5000') {
                apiPort = '5000';
            }
            
            window.API_BASE_URL = `http://${hostname}:${apiPort}/api`;
        } else {
            window.API_BASE_URL = 'https://powq21-solisai-backend.hf.space';
            window.API_FALLBACK_URL = 'https://powq21-solisai-backend.hf.space';
        }
        if (!isLocal) {
            Object.defineProperty(window, 'API_BASE_URL', {
                writable: false,
                configurable: false
            });
        }
    }
    window.SOLIS_INITIALIZED = true;
})();
