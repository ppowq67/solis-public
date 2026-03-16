let currentIndex = 0;
let resetTimeout;

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
    if (container) {
        container.setAttribute('data-direction', direction);
        container.setAttribute('data-moving', 'true');
    }

    const stretch = 1 + Math.min(diff * 0.12, 0.4);
    if (indicator) {
        indicator.style.transform = `translateY(${travelDistance}px) scaleY(${stretch})`;
    }

    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(() => {
        if (indicator) {
            indicator.style.transform = `translateY(${travelDistance}px) scaleY(1)`;
        }
        if (container) {
            container.setAttribute('data-moving', 'false');
        }
    }, 300);

    currentIndex = index;
    try {
        localStorage.setItem('sidebarActiveIndex', index);
    } catch (err) {}

    const target = element.getAttribute('data-target');
    if (target) {
        const dashboardContainer = document.getElementById('dashboardContainer');
        const portalContainer = document.getElementById('portalContainer');
        const clipsContainer = document.getElementById('clipsContainer');
        const customEditorContainer = document.getElementById('customEditorContainer');
        const inputSection = document.querySelector('.input-section');

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
        } else if (target === 'Portal' && portalContainer) {
            portalContainer.style.display = 'block';
            portalContainer.classList.add('active');
        } else if (target === 'clips' && clipsContainer) {
            clipsContainer.style.display = 'block';
            clipsContainer.classList.add('active');
            if (window.clipsStudio && !window.clipsStudio.initialized) {
                window.clipsStudio.init();
            }
        }
    }
}

// Navigation Handler
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-target]');
    const dashboardContainer = document.getElementById('dashboardContainer');
    const portalContainer = document.getElementById('portalContainer');
    const clipsContainer = document.getElementById('clipsContainer');
    const customEditorContainer = document.getElementById('customEditorContainer');
    const inputSection = document.querySelector('.input-section');

    // Helper: hide everything
    function hideAll() {
        if (dashboardContainer) {
            dashboardContainer.style.display = 'none';
            dashboardContainer.classList.remove('active');
        }
        if (portalContainer) {
            portalContainer.style.display = 'none';
            portalContainer.classList.remove('active');
        }
        if (clipsContainer) {
            clipsContainer.style.display = 'none';
            clipsContainer.classList.remove('active');
        }
        if (customEditorContainer) {
            customEditorContainer.style.display = 'none';
            customEditorContainer.classList.remove('active');
        }
    }

    // Helper: update active navigation
    function updateActiveNav(target) {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === target) {
                item.classList.add('active');
            }
        });
    }

    // Set initial state: restore from localStorage or default to dashboard
    hideAll();
    
    // Check if there's a saved navigation target
    const savedTarget = localStorage.getItem('currentNavigationTarget');
    let initialTarget = 'dashboard'; // Default fallback
    
    if (savedTarget && ['dashboard', 'portal', 'clips', 'custom'].includes(savedTarget)) {
        initialTarget = savedTarget;
    }
    
    // Show the initial/saved target
    if (initialTarget === 'dashboard' && dashboardContainer) {
        dashboardContainer.style.display = 'block';
        dashboardContainer.classList.add('active');
        updateActiveNav('Dashboard');
        
        // Trigger chart rendering when dashboard is initially shown
        setTimeout(() => {
            if (window.analyticsManager) {
                window.analyticsManager.updateCharts();
            }
        }, 100);
    } else if (initialTarget === 'portal' && portalContainer) {
        portalContainer.style.display = 'block';
        portalContainer.classList.add('active');
        updateActiveNav('Portal');
    } else if (initialTarget === 'clips' && clipsContainer) {
        clipsContainer.style.display = 'block';
        clipsContainer.classList.add('active');
        updateActiveNav('Clips');
        // Initialize Clips Studio if needed
        if (typeof window.clipsStudio !== 'undefined' && window.clipsStudio && !window.clipsStudio.initialized) {
            window.clipsStudio.init();
        }
    } else if (initialTarget === 'custom' && customEditorContainer) {
        customEditorContainer.style.display = 'block';
        customEditorContainer.classList.add('active');
        updateActiveNav('Custom');
        if (inputSection) inputSection.style.display = 'none';
    } else {
        // Default to dashboard if no target matches
        if (dashboardContainer) {
            dashboardContainer.style.display = 'block';
            dashboardContainer.classList.add('active');
        }
        updateActiveNav('Dashboard');
        if (inputSection) inputSection.style.display = 'none';
    }
    
    // Always hide input section
    if (inputSection) {
        inputSection.style.cssText = 'display: none !important; position: absolute !important; visibility: hidden !important; z-index: -10000 !important; pointer-events: none !important;';
        inputSection.classList.remove('is-first-prompt');
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const rawTarget = item.getAttribute('data-target') || '';
            const target = String(rawTarget).toLowerCase();

            console.log('Navigation clicked:', rawTarget);

            // Update navigation active states
            updateActiveNav(rawTarget);

            // Hide everything then show the requested container
            hideAll();
            // Always hide input section
            if (inputSection) {
                inputSection.style.cssText = 'display: none !important; position: absolute !important; visibility: hidden !important; z-index: -10000 !important; pointer-events: none !important;';
                inputSection.classList.remove('is-first-prompt');
            }

            if (target === 'dashboard') {
                localStorage.setItem('currentNavigationTarget', 'dashboard');
                console.log('Switching to dashboard view');
                if (dashboardContainer) {
                    dashboardContainer.style.display = 'block';
                    dashboardContainer.classList.add('active');
                    
                    // Trigger chart rendering when dashboard becomes visible
                    if (window.analyticsManager) {
                        setTimeout(() => {
                            window.analyticsManager.updateCharts();
                        }, 50);
                    }
                }
                if (inputSection) {
                    inputSection.style.display = 'none';
                    try {
                        if (typeof window.dockInputInstantly === 'function') window.dockInputInstantly(true);
                    } catch (e) {
                        console.error('Error docking input:', e);
                    }
                }
            } else if (target === 'portal') {
                localStorage.setItem('currentNavigationTarget', 'portal');
                console.log('Switching to portal view');
                if (portalContainer) {
                    portalContainer.style.display = 'block';
                    portalContainer.classList.add('active');
                }
                if (inputSection) {
                    inputSection.style.cssText = 'display: none !important; position: absolute !important; visibility: hidden !important; z-index: -10000 !important; pointer-events: none !important;';
                    inputSection.classList.remove('is-first-prompt');
                    try {
                        if (typeof window.dockInputInstantly === 'function') window.dockInputInstantly(true);
                    } catch (e) {
                        console.error('Error docking input:', e);
                    }
                }
            } else if (target === 'clips' || target === 'clips-studio' || target === 'clipscontainer') {
                localStorage.setItem('currentNavigationTarget', 'clips');
                console.log('Switching to clips view');
                if (clipsContainer) {
                    clipsContainer.style.display = 'block';
                    clipsContainer.classList.add('active');
                    
                    // Initialize Clips Studio if it exists and hasn't been initialized
                    if (typeof window.clipsStudio !== 'undefined' && window.clipsStudio && !window.clipsStudio.initialized) {
                        window.clipsStudio.init();
                    }
                }
                if (inputSection) {
                    inputSection.style.cssText = 'display: none !important; position: absolute !important; visibility: hidden !important; z-index: -10000 !important; pointer-events: none !important;';
                    inputSection.classList.remove('is-first-prompt');
                    try {
                        if (typeof window.dockInputInstantly === 'function') window.dockInputInstantly(true);
                    } catch (e) {
                        console.error('Error docking input:', e);
                    }
                }
            } else if (target === 'custom-edit' || target === 'custom') {
                localStorage.setItem('currentNavigationTarget', 'custom');
                console.log('Switching to custom editor view');
                if (customEditorContainer) {
                    customEditorContainer.style.display = 'block';
                    customEditorContainer.classList.add('active');
                }
                if (inputSection) {
                    inputSection.style.cssText = 'display: none !important; position: absolute !important; visibility: hidden !important; z-index: -10000 !important; pointer-events: none !important;';
                    inputSection.classList.remove('is-first-prompt');
                    try {
                        if (typeof window.dockInputInstantly === 'function') window.dockInputInstantly(true);
                    } catch (e) {
                        console.error('Error docking input:', e);
                    }
                }
            }
        });
    });

    // Handle clips submenu toggle
    const clipsToggle = document.getElementById('clips-toggle');
    if (clipsToggle) {
        clipsToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const submenu = document.getElementById('clips-submenu');
            const chevron = this.querySelector('.chevron-icon');
            
            if (submenu) submenu.classList.toggle('open');
            if (chevron) chevron.classList.toggle('rotated');
            
            // If clicking the main clips item, navigate to clips
            if (!submenu || !submenu.contains(e.target)) {
                const clipsContainer = document.getElementById('clipsContainer');
                const inputSection = document.querySelector('.input-section');
                
                // Hide other containers
                document.querySelectorAll('.dashboard-container, .portal-container').forEach(container => {
                    container.style.display = 'none';
                    container.classList.remove('active');
                });
                
                // Show clips container
                if (clipsContainer) {
                    clipsContainer.style.display = 'block';
                    clipsContainer.classList.add('active');
                    
                    // Initialize Clips Studio if needed
                    if (typeof window.clipsStudio !== 'undefined' && window.clipsStudio && !window.clipsStudio.initialized) {
                        window.clipsStudio.init();
                    }
                }
                
                // Hide input section
                if (inputSection) {
                    inputSection.style.display = 'none';
                    try {
                        if (typeof window.dockInputInstantly === 'function') window.dockInputInstantly(true);
                    } catch (e) {
                        console.error('Error docking input:', e);
                    }
                }
                
                // Update active navigation
                updateActiveNav('clips');
            }
        });
    }

    // Handle clips submenu items
    const clipsSubmenuItems = document.querySelectorAll('.clips-submenu .nav-item');
    clipsSubmenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            
            if (target === 'clips-studio') {
                const clipsContainer = document.getElementById('clipsContainer');
                const inputSection = document.querySelector('.input-section');
                
                // Hide other containers
                document.querySelectorAll('.dashboard-container, .portal-container').forEach(container => {
                    container.style.display = 'none';
                    container.classList.remove('active');
                });
                
                // Show clips container
                if (clipsContainer) {
                    clipsContainer.style.display = 'block';
                    clipsContainer.classList.add('active');
                    
                    // Initialize Clips Studio if needed
                    if (typeof window.clipsStudio !== 'undefined' && window.clipsStudio && !window.clipsStudio.initialized) {
                        window.clipsStudio.init();
                    }
                }
                
                // Hide input section
                if (inputSection) {
                    inputSection.style.display = 'none';
                    try {
                        if (typeof window.dockInputInstantly === 'function') window.dockInputInstantly(true);
                    } catch (e) {
                        console.error('Error docking input:', e);
                    }
                }
                
                // Update active navigation
                updateActiveNav('clips');
                
                // Close submenu
                const submenu = document.getElementById('clips-submenu');
                const chevron = document.querySelector('#clips-toggle .chevron-icon');
                if (submenu) submenu.classList.remove('open');
                if (chevron) chevron.classList.remove('rotated');
            }
        });
    });

    // Close submenus when clicking outside
    document.addEventListener('click', function(e) {
        const clipsToggle = document.getElementById('clips-toggle');
        const clipsSubmenu = document.getElementById('clips-submenu');
        
        if (clipsSubmenu && clipsToggle && !clipsToggle.contains(e.target) && !clipsSubmenu.contains(e.target)) {
            clipsSubmenu.classList.remove('open');
            const chevron = clipsToggle.querySelector('.chevron-icon');
            if (chevron) chevron.classList.remove('rotated');
        }
    });

    // Handle Portal navigation specifically
    const portalNavItem = document.querySelector('.nav-item[data-target="Portal"]');
    if (portalNavItem) {
        portalNavItem.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Portal clicked');
            
            // Get containers
            const portalContainer = document.getElementById('portalContainer');
            const dashboardContainer = document.getElementById('dashboardContainer');
            const clipsContainer = document.getElementById('clipsContainer');
            const inputSection = document.querySelector('.input-section');
            
            // Hide all containers
            if (dashboardContainer) {
                dashboardContainer.style.display = 'none';
                dashboardContainer.classList.remove('active');
            }
            if (clipsContainer) {
                clipsContainer.style.display = 'none';
                clipsContainer.classList.remove('active');
            }
            if (inputSection) {
                inputSection.style.display = 'none';
            }
            
            // Show portal
            if (portalContainer) {
                portalContainer.style.display = 'block';
                portalContainer.classList.add('active');
            }
            
            // Update active nav
            updateActiveNav('Portal');
        });
    }


    // Handle sidebar toggle with keyboard shortcut
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to toggle sidebar
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.classList.toggle('expanded');
                const isExpanded = sidebar.classList.contains('expanded');
                localStorage.setItem('sidebarExpanded', isExpanded);
            }
        }
    });
}

function switchClipsTab(tab, element) {
    const clipsSubPane = document.getElementById('clipsSubPane');
    const clipsSubItems = document.querySelectorAll('.clips-sub-item');
    
    clipsSubItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    if (clipsSubPane) {
        const itemWidth = element.offsetWidth;
        const itemLeft = element.offsetLeft;
        clipsSubPane.style.width = itemWidth + 'px';
        clipsSubPane.style.transform = `translateX(${itemLeft}px)`;
    }

    if (window.clipsStudio && typeof window.clipsStudio.switchTab === 'function') {
        window.clipsStudio.switchTab(tab);
    }
}

function handleNav(el, index) {
    const navPill = document.getElementById('navPill');
    if (!navPill) return;

    const pane = document.getElementById('pane');
    const items = navPill.querySelectorAll('.nav-item:not(.nav-collapse-toggle)');
    
    items.forEach(item => item.classList.remove('active'));
    el.classList.add('active');

    if (pane) {
        const itemWidth = el.offsetWidth;
        const itemLeft = el.offsetLeft;
        pane.style.width = itemWidth + 'px';
        pane.style.transform = `translateX(${itemLeft}px)`;
    }

    const target = el.getAttribute('data-target');
    if (target) {
        const dashboardContainer = document.getElementById('dashboardContainer');
        const portalContainer = document.getElementById('portalContainer');
        const clipsContainer = document.getElementById('clipsContainer');
        const inputSection = document.querySelector('.input-section');

        [dashboardContainer, portalContainer, clipsContainer].forEach(el => {
            if (el) {
                el.style.display = 'none';
                el.classList.remove('active');
            }
        });

        if (inputSection) {
            inputSection.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; z-index: -10000 !important;';
        }

        if (target === 'dashboard' && dashboardContainer) {
            dashboardContainer.style.display = 'block';
            dashboardContainer.classList.add('active');
            if (window.analyticsManager) window.analyticsManager.updateCharts();
        } else if (target === 'Portal' && portalContainer) {
            portalContainer.style.display = 'block';
            portalContainer.classList.add('active');
        } else if (target === 'clips' && clipsContainer) {
            clipsContainer.style.display = 'block';
            clipsContainer.classList.add('active');
            if (window.clipsStudio && !window.clipsStudio.initialized) {
                window.clipsStudio.init();
            }
        }

        const clipsSubNav = document.getElementById('clipsSubNav');
        if (target === 'clips' && clipsSubNav) {
            clipsSubNav.style.display = 'block';
        } else if (clipsSubNav) {
            clipsSubNav.style.display = 'none';
        }
    }
}

// Initialize navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    // DOM already loaded
    initNavigation();
}

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initNavigation };
}