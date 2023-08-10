import Helpers from './helpers';

document.addEventListener('DOMContentLoaded', function () {
  var imageObserver = new IntersectionObserver(function (entries, imgObserver) {
    Helpers.toArray(entries).forEach(function (entry) {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.lazySrc;
        if (lazyImage.dataset.lazySrcset) {
          lazyImage.srcset = lazyImage.dataset.lazySrcset;
        }
        lazyImage.classList.remove('u-lazy-image');
        imgObserver.unobserve(lazyImage);
      }
    });
  });
  var arr = document.querySelectorAll('img[data-lazy-src]');
  Helpers.toArray(arr).forEach(function (img) {
    img.classList.add('u-lazy-image');
    imageObserver.observe(img);
  });
});
