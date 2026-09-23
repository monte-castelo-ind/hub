/* Botão "Apps" para voltar ao hub quando o app está aberto pelo ícone da tela
   inicial (modo standalone não tem barra de endereço nem botão voltar).
   No navegador comum não aparece nada. Uso em cada app, antes do </body>:
   <script src="https://monte-castelo-ind.github.io/hub/voltar.js"></script> */
(function(){
  var standalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
                   || window.navigator.standalone === true;
  if(!standalone) return;
  if(/\/hub\/?(index\.html)?$/.test(location.pathname)) return;
  function montar(){
    if(document.getElementById('mc-voltar-hub')) return;
    var a=document.createElement('a');
    a.id='mc-voltar-hub'; a.href='https://monte-castelo-ind.github.io/hub/';
    a.setAttribute('aria-label','Voltar para os apps');
    a.innerHTML='<span style="font-size:15px;line-height:1">⌂</span><span>Apps</span>';
    a.style.cssText='position:fixed;z-index:2147483000;left:12px;'
      +'bottom:calc(14px + env(safe-area-inset-bottom, 0px));'
      +'display:flex;align-items:center;gap:6px;padding:9px 14px;border-radius:22px;'
      +'background:rgba(15,17,26,.88);color:#e7e9f0;border:1px solid rgba(255,255,255,.14);'
      +'font:600 13px Archivo,system-ui,sans-serif;text-decoration:none;'
      +'box-shadow:0 6px 20px rgba(0,0,0,.35);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)';
    document.body.appendChild(a);
  }
  if(document.body) montar(); else document.addEventListener('DOMContentLoaded', montar);
})();
