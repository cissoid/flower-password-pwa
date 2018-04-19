const cacheName = 'fp-cache';
const filesToCache = [
    '.',
    'index.html',
    'static/scripts/index.js',
    'static/styles/style.css',
    'static/images/favicon/favicon_96x96.png',
    'static/images/favicon/favicon_144x144.png',
    'static/images/favicon/favicon_192x192.png',
    'static/images/favicon/favicon_512x512.png',
];

self.addEventListener('install', function(e) {
    console.log('[serviceWorker] install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[serviceWorker] activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }))
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    console.log('[serviceWorker] fetch');
    e.respondWith(caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
    }));
});
