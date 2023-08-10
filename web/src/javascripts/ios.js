import ScrollReveal from 'scrollreveal';

var ios = {
  sr: ScrollReveal({
    duration: 1000,
    delay: 200,
    scale: 1,
    distance: '3em'
  }),

  init: function () {
    // Animate-in the feature blocks.
    ios.sr.reveal('.section--ios .u-grid-cell');
  }
};

window.addEventListener('load', function () {
  if (window.location.pathname == '/ios') {
    ios.init();
  }
});
