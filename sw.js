// sw.js
const CACHE_NAME = 'nine-teen-cache-v1';

const urlsToCache = [
  '/nine-teen/',
  '/nine-teen/index.html',
  '/nine-teen/icon-192.png',
  '/nine-teen/icon-512.png',
  '/nine-teen/nine.png',  
  '/nine-teen/check.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});