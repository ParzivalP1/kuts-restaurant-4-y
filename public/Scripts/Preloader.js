window.onload = function () {
  document.body.classList.add('loaded');
  window.setTimeout(function () {
  document.body.classList.remove('loaded');
  }, 500);
}