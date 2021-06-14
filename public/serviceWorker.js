const cacheName = 'cache-v1';
const assets = [
   '/',
   '/index.html',
   '/media/billGates.jpg',
   '/media/CV.pdf',
   '/laptop.svg',
   '/media/project1.JPG',
   '/media/project2.JPG',
   '/media/project3.JPG',
   '/media/project4.JPG',
   '/media/project5.JPG',
   '/media/project6.JPG',
];

// mettre en cache
self.addEventListener('install', (e) => {
   e.waitUntil(
      caches.open(cacheName).then((cache) => {
         cache.addAll(assets);
      }),
   );
});

// récupérer le cache
self.addEventListener('fetch', (e) => {
   e.respondWith(caches.match(e.request).then((cache) => cache || fetch(e.request)));
});
