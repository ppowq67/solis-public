const CACHE_NAME = 'solis-ai-v1';
// Disable all console methods
const noop = () => {};
['log', 'debug', 'info', 'warn', 'error', 'assert', 'clear', 'count', 'group', 'groupEnd', 'table', 'time', 'timeEnd', 'trace'].forEach(method => {
    self.console[method] = noop;
});

const ASSETS_TO_CACHE = [
    '/',
    '/dashboard.html',
    '/index.html',
    '/login.html',
    '/style/ss/consolidate.css',
    '/style/ss/inline-styles.css',
    '/style/ss/glassmorphism.css',
    '/style/ss/sidebar.css',
    '/style/ss/ios-pill-nav.css',
    '/style/ss/mobile-nav.css',
    '/style/ss/customize.css',
    '/style/ss/clips.css',
    '/style/ss/limit.css',
    '/style/ss/profile.css',
    '/style/ss/billing.css',
    '/js/core/init.js',
    '/js/core/setup.js',
    '/assets/favicon.ico'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE).then(() => self.skipWaiting());
        })
    );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((cacheName) => cacheName !== CACHE_NAME)
                    .map((cacheName) => caches.delete(cacheName))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests and API calls
    if (request.method !== 'GET' || url.pathname.includes('/api/')) {
        return;
    }

    event.respondWith(
        caches.match(request).then((response) => {
            // Return cached response if available
            if (response) {
                // Update cache in background for next visit
                fetch(request)
                    .then((freshResponse) => {
                        if (freshResponse && freshResponse.status === 200) {
                            caches.open(CACHE_NAME).then((cache) => {
                                cache.put(request, freshResponse);
                            });
                        }
                    })
                    .catch(() => {});
                return response;
            }

            // Otherwise, fetch from network
            return fetch(request)
                .then((response) => {
                    // Cache successful responses
                    if (!response || response.status !== 200 || response.type === 'error') {
                        return response;
                    }

                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseToCache);
                    });

                    return response;
                })
                .catch(() => {
                    // Return offline page or cached response if available
                    return caches.match(request);
                });
        })
    );
});
