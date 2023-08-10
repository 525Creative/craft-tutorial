import Cookies from 'js-cookie';
import Helpers from './helpers';

/**
 * Latest updates
 */
var Updates = {
  COOKIE_KEY: 'lastest-update-read',

  navLink: document.querySelector('.nav_link--updates'),

  /**
   * Initialize update page functionality.
   *
   * @return {void}
   */
  init: function () {
    Updates.setupListeners();

    if (navigator.doNotTrack != 1) {
      Updates.setNavLinkBadge();
    }
  },

  /**
   * Set an unread badge on the Latest Updates nav link if new updates
   * have been posted since the user last looked at the page.
   *
   * @return {void}
   */
  setNavLinkBadge: function () {
    if (Updates.navLink == undefined) {
      return;
    }

    var latestUpdate = Updates.navLink.getAttribute('data-latest-update');

    // Set the cookie if the user is viewing the latest updates page.
    if (window.location.pathname == '/updates') {
      Cookies.set(Updates.COOKIE_KEY, latestUpdate, {
        expires: 30,
        samesite: 'Lax'
      });
      return;
    }

    // Set the nav link status.
    var latestSeen = Cookies.get(Updates.COOKIE_KEY);

    // Add the unread badge if the user hasn’t looked at the page,
    // or there are new updates.
    if (latestSeen == undefined || latestUpdate > latestSeen) {
      Updates.navLink.classList.add('nav_link--unread');
    }
  },

  /**
   * Set up event listeners for more links.
   *
   * @return {void}
   */
  setupListeners: function () {
    var moreLinks = Helpers.toArray(
      document.querySelectorAll('.update_more-link')
    );

    moreLinks.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();

        var body = document.querySelector(
          el.getAttribute('data-toggle') + ' .update_body'
        );

        if (body.classList.contains('update_body--show')) {
          el.innerHTML = 'Show details';
          body.classList.remove('update_body--show');
        } else {
          el.innerHTML = 'Hide details';
          body.classList.add('update_body--show');
        }
      });
    });
  }
};

// Kick-off the app on document ready.
window.addEventListener('DOMContentLoaded', function () {
  Updates.init();
});
