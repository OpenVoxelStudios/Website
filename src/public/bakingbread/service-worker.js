const CACHE_NAME = 'bakingbread-cache-v1';

const urlsToCache = [
    '/font/Rubik-Bold.ttf', '/font/Rubik-Regular.ttf', '/logo.png',
    '/logo.mp4', '/bakingbread/', '/bakingbread/bakingbread.tsx',
    '/bakingbread/bakingbread.html'
]
    .concat([
        '/assets/App-CYRF0v1F.js',
        '/assets/App-hagJ5nVr.css',
        '/assets/bakingbread-DDTbsKDv.js',
    ])
    .concat([
        "/bakingbread/airplane.svg", "/bakingbread/badge-10.svg", "/bakingbread/badge-15.svg",
        "/bakingbread/badge-20.svg", "/bakingbread/badge-25.svg", "/bakingbread/badge-30.svg",
        "/bakingbread/bank.svg", "/bakingbread/breadman.png", "/bakingbread/building-add.svg",
        "/bakingbread/coin.svg", "/bakingbread/cookie.svg", "/bakingbread/cursor.svg", "/bakingbread/Discord.svg",
        "/bakingbread/factory.svg", "/bakingbread/favicon.ico", "/bakingbread/flask.svg", "/bakingbread/globe.svg",
        "/bakingbread/head.png", "/bakingbread/lock.svg", "/bakingbread/logo-10.png", "/bakingbread/logo-15.png",
        "/bakingbread/logo-20.png", "/bakingbread/logo-25.png", "/bakingbread/logo-30.png", "/bakingbread/logo-35.png",
        "/bakingbread/logo-40.png", "/bakingbread/logo-45.png", "/bakingbread/logo-5.png", "/bakingbread/logo-50.png",
        "/bakingbread/logo.png", "/bakingbread/logo.svg", "/bakingbread/logo192.png", "/bakingbread/logo512.png",
        "/bakingbread/manifest.json", "/bakingbread/pause.svg", "/bakingbread/person.svg", "/bakingbread/persons.svg",
        "/bakingbread/play.svg", "/bakingbread/rebirth.svg", "/bakingbread/service-worker.js",
        "/bakingbread/skip.svg", "/bakingbread/stars.svg", "/bakingbread/stopwatch.svg", "/bakingbread/tornado.svg",
        "/bakingbread/trash.svg", "/bakingbread/trollface.png", "/bakingbread/trophy.svg", "/bakingbread/musics/biscuit.mp3",
        "/bakingbread/musics/bread.mp3", "/bakingbread/musics/cant-it-be-true.mp3", "/bakingbread/musics/lofi-bread.mp3",
        "/bakingbread/musics/moonsong.mp3", "/bakingbread/musics/salomon.mp3", "/bakingbread/musics/this-is-for-you.mp3",
        "/bakingbread/musics/time.mp3", "/bakingbread/musics/without-form-and-void.mp3"
    ]);

// Install a service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit – return response
                if (response) return response;

                return fetch(event.request);
            })
    );
});

// Update a service worker
self.addEventListener('activate', event => {
    // List of cache names to keep
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Delete caches not in the whitelist
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});