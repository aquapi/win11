/* eslint-disable no-unused-vars */
const CACHE_NAME = 'pwa-task-manager';
const urlsToCache = ['/'];

// Perform install steps
async function addToCache() {
    const cache = await caches.open(CACHE_NAME);
    console.log('Opened cache');
    return cache.addAll(urlsToCache);
}

// Cache and return requests
async function cacheRequest(event) {
    const response = await caches.match(event.request);
    if (response)
        return response;

    return fetch(event.request);
}

async function updateSW() {
    const cacheNames = await caches.keys();

    return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
    )
}