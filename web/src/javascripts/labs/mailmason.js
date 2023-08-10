import ScrollReveal from 'scrollreveal';

var MailMason = {
  sr: ScrollReveal({
    duration: 1000,
    delay: 0,
    scale: 1,
    distance: '3em',
    useDelay: 'onload'
  }),

  init: function () {
    // Only run on the MailMason page.
    if (window.location.pathname != '/mailmason') {
      return;
    }

    // Animate-in the hero.
    MailMason.sr.reveal('.hero_icon', {
      origin: 'top',
      distance: '30px',
      delay: 500
    });
    MailMason.sr.reveal('.hero_title', {
      origin: 'top',
      distance: '30px',
      delay: 400
    });
    MailMason.sr.reveal('.hero_desc', {
      origin: 'top',
      distance: '30px',
      delay: 300
    });
    MailMason.sr.reveal('.hero_actions', {
      origin: 'top',
      distance: '30px',
      delay: 200
    });
    MailMason.sr.reveal('.hero_meta', {
      origin: 'top',
      distance: '30px',
      delay: 100
    });
    MailMason.sr.reveal('.hero_illustration', {
      origin: 'top',
      distance: '30px'
    });

    // Animate-in the template blocks.
    MailMason.sr.reveal('.email-template');

    // MailMason.sr.reveal(".reasons-list_item");

    // Animate-in the newsletter subscribe form.
    // MailMason.sr.reveal(".subscribe", { delay: 700 });

    // Animate-in the text columns.
    // MailMason.sr.reveal(".section--text-cols .u-grid-cell");

    // Animate-in the footer PM advert.
    MailMason.sr.reveal('.pm-advert--footer .pm-advert_tagline', {
      distance: '30px'
    });
    MailMason.sr.reveal('.pm-advert--footer .pm-advert_body', {
      distance: '30px'
    });
    MailMason.sr.reveal('.pm-advert--footer .pm-advert_actions', {
      distance: '30px'
    });
  }
};

window.addEventListener('load', MailMason.init);
