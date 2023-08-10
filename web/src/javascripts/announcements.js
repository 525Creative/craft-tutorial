import Cookies from 'js-cookie';

var Announcements = {
  COOKIE_KEY: 'dismissed-alerts',

  init: function () {
    var links = [].slice.call(document.querySelectorAll('.alert_dismiss'));

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        Announcements.dismiss(link);
      });
    });
  },

  dismiss: function (link) {
    var id = link.getAttribute('data-id');

    if (id == undefined) {
      return;
    }

    // Set a cookie so that this banner doesn’t get displayed again.
    Announcements.setCookie(id);

    // Dismiss the banner.
    var banner = document.querySelector('#alert-' + id);
    banner.classList.add('alert--hidden');
  },

  setCookie: function (id) {
    var dismissed = [];
    var existingCookie = Cookies.get(Announcements.COOKIE_KEY);

    if (existingCookie != undefined) {
      dismissed = existingCookie.split(',');
    }

    dismissed.push(id);

    Cookies.set(Announcements.COOKIE_KEY, dismissed.join(','), {
      expires: 365 * 10,
      samesite: 'Lax'
    });
  }
};

window.addEventListener('DOMContentLoaded', function () {
  Announcements.init();
});
