/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
importScripts("./scripts/utils.js");

addEventListener('install', event => {
    event.waitUntil(addToCache());
});

addEventListener('fetch', event => {
    event.respondWith(cacheRequest(event));
});

// Update a service worker
addEventListener('activate', event => {
    event.waitUntil(updateSW());
});