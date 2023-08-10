import ScrollReveal from 'scrollreveal';

/**
 * Meetups Page
 */
var Meetups = {
  sr: ScrollReveal({
    duration: 1000,
    delay: 0,
    scale: 1,
    distance: '3em'
  }),

  init: function () {
    // Animate-in the events list.
    Meetups.sr.reveal('.events-list');

    // Animdate-in each event details.
    Meetups.sr.reveal('.event-details_meta');
    Meetups.sr.reveal('.event-details_title');
    Meetups.sr.reveal('.event-details_desc');
    Meetups.sr.reveal('.event-details_actions');

    // Animate-in suggestion form.
    Meetups.sr.reveal('.event-form_desc');
    Meetups.sr.reveal('.event-form_form');
  }
};

/**
 * Kick-off the app on document ready.
 */
window.addEventListener('DOMContentLoaded', function () {
  // Only run this on the meetups page.
  if (window.location.pathname == '/meetups') {
    Meetups.init();
  }
});
