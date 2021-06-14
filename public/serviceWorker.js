const cacheName = 'cache-v2';
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
// const self = window.self;
// const clients = window.clients;

// mettre en cache
self.addEventListener('install', (e) => {
   self.skipWaiting();
   console.log(`${cacheName} Install`);
   e.waitUntil(
      caches.open(cacheName).then((cache) => {
         cache.addAll(assets);
      }),
   );
});

// met à jour les caches
self.addEventListener('activate', (e) => {
   clients.claim();
   console.log(`${cacheName} Activate`);
   e.waitUntil(
      caches.keys().then((keys) => {
         Promise.all(
            keys.map((key) => {
               if (!key.includes(cacheName)) {
                  caches.delete(key);
               }
            }),
         ).then();
      }),
   );
});

// récupérer le cache
self.addEventListener('fetch', (e) => {
   // console.log(`Fetching : ${e.request.url}, Mode : ${e.request.mode}`);
   e.respondWith(caches.match(e.request).then((cache) => cache || fetch(e.request)));
});
