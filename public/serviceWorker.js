// https://www.youtube.com/watch?v=5f1M_cu2eDM

const CACHE_NAME = 'cache-v4';
const CACHED_FILES = [
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
   '/static/media/*'
];
// const self = window.self;
// const clients = window.clients;

// mettre en cache
self.addEventListener('install', (e) => {
   self.skipWaiting();
   console.log(`${CACHE_NAME} Install`);
   e.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
         cache.addAll(CACHED_FILES);
      }),
   );
});

// met à jour les caches
self.addEventListener('activate', (e) => {
   clients.claim();
   console.log(`${CACHE_NAME} Activate`);
   e.waitUntil(
      caches.keys().then((keys) => {
         Promise.all(
            keys.map((key) => {
               if (!key.includes(CACHE_NAME)) {
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
