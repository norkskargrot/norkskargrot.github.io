(function () {
  const overlay = document.getElementById('lightbox-overlay');
  const overlayImg = document.getElementById('lightbox-img');

  function open(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function init() {
    document.querySelectorAll('.post-article img').forEach(function (img) {
      if (img.dataset.lightbox) return;
      img.dataset.lightbox = '1';
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () { open(img.src, img.alt); });
    });
  }

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('swup:contentReplaced', init);
})();
