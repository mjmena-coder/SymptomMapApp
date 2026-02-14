self.addEventListener('fetch', (event) => {
  // This is a "pass-through" worker that satisfies Chrome's install criteria.
  event.respondWith(fetch(event.request));
});
