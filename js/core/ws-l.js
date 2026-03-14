        let currentIndex = 0;
        let resetTimeout;
        function initSidebarState() {
            try {
                const savedIndex = localStorage.getItem('sidebarActiveIndex');
                if (savedIndex !== null) {
                    currentIndex = parseInt(savedIndex, 10);
                    const items = document.querySelectorAll('.nav-item');
                    if (items[currentIndex]) {
                        items.forEach(item => item.classList.remove('active'));
                        items[currentIndex].classList.add('active');
                        
                        const indicator = document.getElementById('indicator');
                        if (indicator) {
                            const itemHeight = 80;
                            const gap = 2;
                            const travelDistance = currentIndex * (itemHeight + gap);
                            indicator.style.transform = `translateY(${travelDistance}px) scaleY(1)`;
                        }
                        
                        const target = items[currentIndex].getAttribute('data-target');
                        if (target) {
                            switchSection(target);
                        }
                    }
                }
            } catch (err) {
                console.error('Failed to restore sidebar state:', err);
            }
        }
        function showNotification(message, type = 'success') {
            const notifContainer = document.getElementById('notificationContainer') || createNotificationContainer();
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            
            const bgColor = type === 'success' 
                ? 'rgba(34, 197, 94, 0.95)' 
                : type === 'error' 
                ? 'rgba(239, 68, 68, 0.95)' 
                : 'rgba(249, 115, 22, 0.95)';
            
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${bgColor};
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 500;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                max-width: 400px;
                word-wrap: break-word;
                border-left: 4px solid ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#f97316'};
            `;
            notification.textContent = message;
            notifContainer.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        function createNotificationContainer() {
            const container = document.createElement('div');
            container.id = 'notificationContainer';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                pointer-events: none;
            `;
            document.body.appendChild(container);
            return container;
        }
        window.addEventListener('videoGenerated', (event) => {
            const videoTitle = event.detail?.title || 'Video';
            showNotification(`✅ ${videoTitle} has been generated successfully!`, 'success');
        });

        window.addEventListener('videoGenerationError', (event) => {
            const errorMsg = event.detail?.message || 'An error occurred';
            showNotification(`❌ ${errorMsg}`, 'error');
        });

        window.addEventListener('videoGenerationProgress', (event) => {
            const progress = event.detail?.progress || '';
            showNotification(`ℹ️ ${progress}`, 'info');
        });
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { 
                    transform: translateX(400px); 
                    opacity: 0; 
                }
                to { 
                    transform: translateX(0); 
                    opacity: 1; 
                }
            }
            @keyframes slideOutRight {
                from { 
                    transform: translateX(0); 
                    opacity: 1; 
                }
                to { 
                    transform: translateX(400px); 
                    opacity: 0; 
                }
            }
            
            /* Advanced Notification Styles */
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                pointer-events: auto;
            }
            
            .notification-success {
                background: rgba(34, 197, 94, 0.95) !important;
                color: white !important;
                border-left: 4px solid #22c55e !important;
            }
            
            .notification-error {
                background: rgba(239, 68, 68, 0.95) !important;
                color: white !important;
                border-left: 4px solid #ef4444 !important;
            }
            
            .notification-info,
            .notification-warning {
                background: rgba(249, 115, 22, 0.95) !important;
                color: white !important;
                border-left: 4px solid #f97316 !important;
            }
        `;
        document.head.appendChild(style);
        window.notificationAPI = {
            success: (message) => showNotification(message, 'success'),
            error: (message) => showNotification(message, 'error'),
            info: (message) => showNotification(message, 'info'),
            warning: (message) => showNotification(message, 'warning'),
            videoGenerated: (videoTitle) => {
                const event = new CustomEvent('videoGenerated', {
                    detail: { title: videoTitle }
                });
                window.dispatchEvent(event);
            },
            videoError: (errorMessage) => {
                const event = new CustomEvent('videoGenerationError', {
                    detail: { message: errorMessage }
                });
                window.dispatchEvent(event);
            },
            videoProgress: (progressMessage) => {
                const event = new CustomEvent('videoGenerationProgress', {
                    detail: { progress: progressMessage }
                });
                window.dispatchEvent(event);
            }
        };
        
        window.showNotification = showNotification;
        function initializeVideoGenerationSocket() {
            try {
                if (typeof io === 'undefined') {
                    console.warn('⚠️ Socket.IO not loaded yet, retrying...');
                    setTimeout(initializeVideoGenerationSocket, 500);
                    return;
                }
                const backendPort = localStorage.getItem('backendPort') || '5500';
                const backendHost = localStorage.getItem('backendHost') || 'localhost';
                const socketUrl = `http://${backendHost}:${backendPort}`;
                const token = localStorage.getItem('token') || localStorage.getItem('auth_token') || localStorage.getItem('authToken');
                
                const socket = io(socketUrl, {
                    transports: ['websocket', 'polling'],
                    reconnectionDelay: 1000,
                    reconnectionAttempts: 10,
                    reconnection: true,
                    path: '/socket.io/',
                    auth: {
                        token: token
                    }
                });
                
                socket.on('connect', () => {
                    console.log('✅ Connected to video generation service via Socket.IO');
                });
                
                socket.on('video_generated', (data) => {
                    try {
                        showNotification(`✅ ${data.video_title || 'Your video'} has been generated successfully!`, 'success');
                        window.dispatchEvent(new CustomEvent('videoGenerated', {
                            detail: { title: data.video_title, id: data.video_id }
                        }));
                    } catch (err) {
                        console.error('Error handling video_generated event:', err);
                    }
                });
                
                socket.on('video_generation_error', (data) => {
                    try {
                        showNotification(`❌ ${data.message || 'Video generation failed'}`, 'error');
                        
                        window.dispatchEvent(new CustomEvent('videoGenerationError', {
                            detail: { message: data.message }
                        }));
                    } catch (err) {
                        console.error('Error handling video_generation_error event:', err);
                    }
                });
                
                socket.on('video_generation_progress', (data) => {
                    try {
                        showNotification(`ℹ️ ${data.message || 'Processing...'}`, 'info');
                        
                        window.dispatchEvent(new CustomEvent('videoGenerationProgress', {
                            detail: { progress: data.message }
                        }));
                    } catch (err) {
                        console.error('Error handling video_generation_progress event:', err);
                    }
                });
                let lastErrorNotificationTime = 0;
                const ERROR_NOTIFICATION_COOLDOWN = 5000;
                
                socket.on('connect_error', (error) => {
                    console.error('Socket.IO connection error:', error);
                });
                
                socket.on('disconnect', () => {
                    console.log('Video generation socket disconnected, will attempt to reconnect');
                });
                
                window.videoGenerationSocket = socket;
            } catch (err) {
                console.error('Failed to initialize video generation socket:', err);
            }
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeVideoGenerationSocket);
        } else {
            initializeVideoGenerationSocket();
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initSidebarState);
        } else {
            initSidebarState();
        }

        function navigate(element, index) {
            if (index === currentIndex) return;

            const indicator = document.getElementById('indicator');
            const container = document.getElementById('navContainer');
            const items = document.querySelectorAll('.nav-item');
            const itemHeight = 80; 
            const gap = 2;
            const travelDistance = index * (itemHeight + gap);
            const diff = Math.abs(index - currentIndex);
            
            items.forEach(item => item.classList.remove('active'));
            element.classList.add('active');

            const direction = index > currentIndex ? 'down' : 'up';
            container.setAttribute('data-direction', direction);
            container.setAttribute('data-moving', 'true');

            const stretch = 1 + Math.min(diff * 0.12, 0.4);
            indicator.style.transform = `translateY(${travelDistance}px) scaleY(${stretch})`;

            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
                indicator.style.transform = `translateY(${travelDistance}px) scaleY(1)`;
                container.setAttribute('data-moving', 'false');
            }, 300);

            currentIndex = index;
            try {
                localStorage.setItem('sidebarActiveIndex', index);
            } catch (err) {
                console.error('Failed to save sidebar state:', err);
            }
            const target = element.getAttribute('data-target');
            if (target) {
                switchSection(target);
            }
        }

        function switchSection(target) {
            const dashboardContainer = document.getElementById('dashboardContainer');
            const portalContainer = document.getElementById('portalContainer');
            const clipsContainer = document.getElementById('clipsContainer');
            const customEditorContainer = document.getElementById('customEditorContainer');
            const inputSection = document.querySelector('.input-section');
            const inputContainer = document.querySelector('.input-container');
            [dashboardContainer, portalContainer, clipsContainer, customEditorContainer].forEach(el => {
                if (el) {
                    el.style.display = 'none';
                    el.classList.remove('active');
                }
            });
            if (inputSection) {
                inputSection.classList.remove('active');
                inputSection.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; z-index: -10000 !important;';
            }
            if (target === 'dashboard' && dashboardContainer) {
                dashboardContainer.style.display = 'block';
                dashboardContainer.classList.add('active');
                if (window.analyticsManager) window.analyticsManager.updateCharts();
                const clipsSubNav = document.getElementById('clipsSubNav');
                if (clipsSubNav) clipsSubNav.style.display = 'none';
            } else if (target === 'Portal' && portalContainer) {
                portalContainer.style.display = 'block';
                portalContainer.classList.add('active');
                const clipsSubNav = document.getElementById('clipsSubNav');
                if (clipsSubNav) clipsSubNav.style.display = 'none';
            } else if (target === 'clips' && clipsContainer) {
                clipsContainer.style.display = 'block';
                clipsContainer.classList.add('active');
                const clipsSubNav = document.getElementById('clipsSubNav');
                if (clipsSubNav) {
                    clipsSubNav.style.display = 'block';
                }

                if (window.clipsStudio && !window.clipsStudio.initialized) {
                    window.clipsStudio.init();
                }
            }
        }
        const pane = document.getElementById('pane');
        let mobileNavLabelTimeout;

        function handleNav(el, index) {
            const navPill = document.getElementById('navPill');
            if (!navPill) return;
            localStorage.setItem('activeNavIndex', index);
            document.querySelectorAll('.nav-item').forEach(i => {
                i.classList.remove('active');
                i.classList.remove('show-label');
            });
            el.classList.add('active');
            el.classList.add('show-label');
            if (pane) {
                pane.style.left = el.offsetLeft + 'px';
                pane.style.top = el.offsetTop + 'px';
                pane.style.width = el.offsetWidth + 'px';
                pane.style.height = el.offsetHeight + 'px';
            }
            clearTimeout(mobileNavLabelTimeout);
            mobileNavLabelTimeout = setTimeout(() => {
                el.classList.remove('show-label');
            }, 2000);
            if (window.navigator.vibrate) {
                window.navigator.vibrate(8);
            }
            const target = el.getAttribute('data-target');
            if (target) {
                switchSection(target);
            }
        }

        window.switchSection = switchSection;
        window.handleNav = handleNav;
        window.navigate = navigate;
        document.addEventListener('DOMContentLoaded', function() {
            if (pane && window.innerWidth <= 768) {
                const savedIndex = localStorage.getItem('activeNavIndex');
                const navItems = document.querySelectorAll('.nav-item[data-target]');
                const activeIndex = savedIndex !== null ? parseInt(savedIndex) : 0;
                
                if (navItems[activeIndex]) {
                    const activeItem = navItems[activeIndex];
                    activeItem.classList.add('active');
                    pane.style.left = activeItem.offsetLeft + 'px';
                    pane.style.top = activeItem.offsetTop + 'px';
                    pane.style.width = activeItem.offsetWidth + 'px';
                    pane.style.height = activeItem.offsetHeight + 'px';
                } else {
                    const firstItem = document.querySelector('.nav-item.active');
                    if (firstItem) {
                        pane.style.left = firstItem.offsetLeft + 'px';
                        pane.style.top = firstItem.offsetTop + 'px';
                        
                        pane.style.width = firstItem.offsetWidth + 'px';
                        pane.style.height = firstItem.offsetHeight + 'px';
                    }
                }
            }
        });