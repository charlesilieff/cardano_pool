function copyText(string) {
  function handler(event) {
    event.clipboardData.setData('text/plain', string);
    event.preventDefault();
    document.removeEventListener('copy', handler, true);
  }

  document.addEventListener('copy', handler, true);
  document.execCommand('copy');
}
