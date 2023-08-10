import ScrollReveal from 'scrollreveal';

var DevelopersList = {
  sr: ScrollReveal({
    duration: 1000,
    delay: 0,
    scale: 1,
    distance: '3em',
    useDelay: 'onload'
  }),

  init: function () {
    var path = window.location.pathname;
    // Only run on the Developers List pages
    if (path === '/send-email') {
      // Animate-in the hero.
      DevelopersList.sr.reveal('.hero_title', {
        origin: 'top',
        distance: '30px',
        delay: 200
      });
      DevelopersList.sr.reveal('.hero_desc', {
        origin: 'top',
        distance: '30px',
        delay: 100
      });

      // Animate-in the developer blocks
      DevelopersList.sr.reveal('.developer-list_link');

      // Animate-in the bottom CTA
      DevelopersList.sr.reveal('.cta-banner');
    }
    if (document.body.classList.contains('developer-page')) {
      // Animate-in the hero.
      DevelopersList.sr.reveal('.hero_title', {
        origin: 'top',
        distance: '30px',
        delay: 100
      });
      DevelopersList.sr.reveal('.hero_desc', {
        origin: 'top',
        distance: '30px',
        delay: 50
      });

      // CTA Dividers
      DevelopersList.sr.reveal('.divider-cta');

      // Animate-in the bottom CTA
      DevelopersList.sr.reveal('.cta-banner');
    }
  }
};

window.addEventListener('load', DevelopersList.init);
