const cacheName = '';
const filesToCache = [
    '../../../',
    '../../../index.html',
    './index.js',
    '../styles/style.css'
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
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }))
        })
    );
});
