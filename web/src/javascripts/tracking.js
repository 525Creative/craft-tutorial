import Cookies from 'js-cookie';

window.addEventListener(
  'DOMContentLoaded',
  function () {
    // Don’t track users with DNT enabled.
    if (navigator.doNotTrack == '1') {
      return;
    }

    var cookieSettings = {
      expires: 7,
      path: '/',
      domain: '.postmarkapp.com',
      samesite: 'Lax'
    };

    if (document.referrer && !Cookies.get('referral_url')) {
      Cookies.set('referral_url', document.referrer, cookieSettings);
    }

    if (!Cookies.get('landing_url')) {
      Cookies.set('landing_url', document.location.href, cookieSettings);
    }
  },
  false
);
