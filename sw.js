importScripts('./assets/scripts/cache-polyfill.js');

self.addEventListener('install', function(e)
{
 e.waitUntil(
   caches.open('title').then(function(cache)
   {
     return cache.addAll([
       //'./assets/styles/style.css',
     ]);
   })
 );
});

/*================================================*/
// Кэширование запросов с родительской страници
/*================================================*/

// self.addEventListener('fetch', function(event)
// {
  //console.log(event.request.url);
  // event.respondWith(
  //   caches.match(event.request).then(function(response)
  //   {
  //     return response || fetch(event.request);
  //   })
  // );
// });
