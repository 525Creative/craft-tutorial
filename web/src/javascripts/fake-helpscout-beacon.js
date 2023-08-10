import Cookies from 'js-cookie';

var FakeBeacon = {
  init: function () {
    const beacon = document.querySelector('.js-load-beacon');

    if (!beacon) {
      return;
    }

    if (Cookies.get('hs-beacon') === 'open') {
      // 1. Beacon was already opened on another page
      FakeBeacon.continue(beacon);
    } else if (beacon !== undefined) {
      // 2. If not, delay loading and show a fake beacon
      beacon.classList.remove('hidden');
      beacon.addEventListener('click', function () {
        FakeBeacon.load(beacon);
      });
    }
  },

  loadScript: function (el) {
    !(function (e, t, n) {
      function a() {
        var n = t.createElement('script');

        n.type = 'text/javascript';
        n.async = true;
        n.src = 'https://beacon-v2.helpscout.net';
        el.parentNode.insertBefore(n, el);
      }

      if (
        ((e.Beacon = n =
          function (t, n, a) {
            e.Beacon.readyQueue.push({ method: t, options: n, data: a });
          }),
        (n.readyQueue = []),
        'complete' === t.readyState)
      )
        return a();

      e.addEventListener('load', a, !1);
    })(window, document, window.Beacon || function () {});
    window.Beacon('init', '37be4d1b-372d-4387-9669-d385ada6795b');
  },

  continue: function (el) {
    // Trigger beacon loading
    FakeBeacon.loadScript(el);

    // Once loaded, open it to continue the conversation
    window.Beacon('once', 'ready', function () {
      window.Beacon('open');
    });

    // Once closed, revert to normal behavior
    FakeBeacon.close();
  },

  load: function (el) {
    // Trigger beacon loading
    FakeBeacon.loadScript(el);

    // Indicate that it's loading
    FakeBeacon.loading(el);

    // Once loaded, hide the fake beacon and open the real one
    window.Beacon('once', 'ready', function () {
      FakeBeacon.hide(el);
      window.Beacon('open');
      Cookies.set('hs-beacon', 'open', { expires: 1 });
    });

    // Once closed, revert to normal behavior
    FakeBeacon.close();
  },

  close: function () {
    window.Beacon('on', 'close', function () {
      Cookies.remove('hs-beacon');
    });
  },

  loading: function (el) {
    el.classList.add('is-loading');
  },

  hide: function (el) {
    el.remove();
  }
};

window.addEventListener('DOMContentLoaded', FakeBeacon.init);
