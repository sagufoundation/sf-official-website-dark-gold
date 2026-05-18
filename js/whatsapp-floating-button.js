(function () {
  if (document.getElementById('sf-whatsapp-float')) return;

  var phoneNumber = '6281312170710';
  var message = encodeURIComponent('Hello SAGU Foundation, saya ingin mendapatkan informasi.');
  var href = 'https://wa.me/' + phoneNumber + '?text=' + message;

  var style = document.createElement('style');
  style.id = 'sf-whatsapp-float-style';
  style.textContent = [
    '#sf-whatsapp-float{position:fixed;right:20px;bottom:20px;z-index:9999;}',
    '#sf-whatsapp-float a{width:58px;height:58px;display:flex;align-items:center;justify-content:center;border-radius:9999px;background:#25D366;color:#fff;box-shadow:0 12px 28px rgba(0,0,0,.25);transition:transform .2s ease,box-shadow .2s ease;text-decoration:none;}',
    '#sf-whatsapp-float a:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(0,0,0,.3);}',
    '#sf-whatsapp-float svg{width:28px;height:28px;display:block;}',
    '@media (max-width:768px){#sf-whatsapp-float{right:16px;bottom:16px;}#sf-whatsapp-float a{width:54px;height:54px;}}'
  ].join('');
  document.head.appendChild(style);

  var wrapper = document.createElement('div');
  wrapper.id = 'sf-whatsapp-float';
  wrapper.innerHTML =
    '<a href="' + href + '" target="_blank" rel="noopener noreferrer" aria-label="Chat via WhatsApp" title="Chat via WhatsApp">' +
      '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">' +
        '<path fill="currentColor" d="M19.11 17.2c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.46-.89-.8-1.48-1.8-1.66-2.1-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.1 4.49.71.31 1.26.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.08-.12-.27-.2-.57-.35Z"/>' +
        '<path fill="currentColor" d="M16 3C8.82 3 3 8.73 3 15.8c0 2.48.72 4.8 1.96 6.77L3 29l6.61-1.91A13.13 13.13 0 0 0 16 28.6c7.18 0 13-5.73 13-12.8C29 8.73 23.18 3 16 3Zm0 23.48c-2.12 0-4.2-.6-5.98-1.73l-.43-.27-3.92 1.13 1.17-3.8-.28-.45a11.5 11.5 0 0 1-1.76-6.1C4.8 9.08 9.78 4.2 16 4.2c6.22 0 11.2 4.88 11.2 10.96S22.22 26.48 16 26.48Z"/>' +
      '</svg>' +
    '</a>';
  document.body.appendChild(wrapper);
})();
