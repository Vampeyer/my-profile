const cacheName = "pwa-sample-cache";
const filesToCache = [
    "/index.html",
    "css/style.css",
    "css/demo.css",
    "css/style.css",
    "js/script.js",
    "/icon.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.open(cacheName).then((cache) => {
            return cache.match(event.request).then((response) => {
                return response || fetch(event.request);
            });
        })
    );
});