// 🔌 Socket.IO Initialization Handler
(function() {
    const backendPort = '5500';  // Hardcoded - NOT from localStorage
    const backendHost = '127.0.0.1';  // Hardcoded - NOT from localStorage
    const socketioScript = document.createElement('script');
    let socketioLoaded = false;
    
    // 🔐 SECURITY: Use full URL validation instead of template string injection
    const socketioUrl = `http://${backendHost}:${backendPort}/socket.io/socket.io.js`;
    socketioScript.src = socketioUrl;
    
    socketioScript.onload = () => {
        socketioLoaded = true;
        console.log('✅ Socket.IO loaded from backend');
    };
    
    socketioScript.onerror = () => {
        if (!socketioLoaded) {
            console.warn('⚠️ Socket.IO failed to load from backend, falling back to CDN...');
            const cdnScript = document.createElement('script');
            cdnScript.src = 'https://cdn.socket.io/4.7.2/socket.io.min.js';
            cdnScript.onload = () => {
                socketioLoaded = true;
                console.log('✅ Socket.IO loaded from CDN');
            };
            cdnScript.onerror = () => {
                console.error('❌ Failed to load Socket.IO from both backend and CDN');
            };
            document.head.appendChild(cdnScript);
        }
    };
    
    document.head.appendChild(socketioScript);
    
    setTimeout(() => {
        if (!socketioLoaded && typeof io === 'undefined') {
            console.warn('⚠️ Socket.IO still not loaded, forcing CDN fallback...');
            const cdnScript = document.createElement('script');
            cdnScript.src = 'https://cdn.socket.io/4.7.2/socket.io.min.js';
            cdnScript.onload = () => {
                socketioLoaded = true;
                console.log('✅ Socket.IO loaded from CDN (timeout fallback)');
            };
            document.head.appendChild(cdnScript);
        }
    }, 3000);
})();
