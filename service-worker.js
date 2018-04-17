const cacheName = 'fp-cache';
const filesToCache = [
    '.',
    'index.html',
    'static/scripts/index.js',
    'static/styles/style.css'
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
});

self.addEventListener('fetch', function(e) {
    console.log('[serviceWorker] fetch');
    e.respondWith(
        caches.match(e.request)
        .then(function(response) {
            console.log('[serviceWorker] match cache');
            // Cache hit - return response
            if (response) {
                return response;
            }

            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = e.request.clone();

            return fetch(fetchRequest).then(
                function(response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(e.request, responseToCache);
                        });

                    return response;
                }
            );
        })
    );
});