/* Service worker mínimo: existe só para o Android oferecer "Instalar app".
   Não guarda nada em cache de propósito — toda atualização subida no main
   aparece na hora, sem ninguém ficar preso numa versão antiga. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* deixa a rede responder */ });
