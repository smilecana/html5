window.addEventListener('DOMContentLoaded', function (e) {
  document.querySelector('hp-presentation').onclick = handlePresentationClick;
});

function handlePresentationClick(e) {
  var current = document.querySelector('hp-slide.active');
  var next = current.nextElementSibling;

  if (next) {
    current.classList.remove('active');
    next.classList.add('active');
  }
}
