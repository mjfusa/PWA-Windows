//This is the "Offline page" service worker
//Add this below content to your HTML page, or add the js file to your page at the very top to register service worker

if ('serviceWorker' in navigator)
window.addEventListener('load', function()
{




  {
  if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register')
  } else {
    //Register the ServiceWorker
    navigator.serviceWorker.register('pwabuilder-sw.js', {
      scope: './'
    }).then(function(reg) {
      console.log('[PWA Builder] Service worker has been registered for scope:'+ reg.scope);
    });
  }
  }
  });

