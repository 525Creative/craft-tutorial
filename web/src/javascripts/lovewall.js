var Lovewall = {
  init: function () {
    const rootEl = document.querySelector('.js-lovewall');

    if (rootEl) {
      const heartClass = 'tiny-heart';
      const heartCount = (rootEl.offsetWidth / 250) * 2;

      function randomNum(m, n) {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor(Math.random() * (n - m + 1)) + m;
      }

      for (var i = 0; i < heartCount; i++) {
        const heartSize = randomNum(60, 120) / 10;
        const top = randomNum(75, 95);
        const delay = randomNum(0, 3);
        const duration = randomNum(2, 5);

        // Left side
        var heartLeft = document.createElement('span');
        heartLeft.classList.add(heartClass);
        heartLeft.setAttribute(
          'style',
          Lovewall.heartStyle(
            top,
            randomNum(-10, -1),
            heartSize,
            delay,
            duration
          )
        );
        rootEl.append(heartLeft);

        // Right side
        var heartRight = document.createElement('span');
        heartRight.classList.add(heartClass);
        heartRight.setAttribute(
          'style',
          Lovewall.heartStyle(
            top,
            randomNum(100, 110),
            heartSize,
            delay,
            duration
          )
        );
        rootEl.append(heartRight);
      }
    }
  },

  heartStyle: function (top, left, size, delay, duration) {
    return (
      'top:' +
      top +
      '%;left:' +
      left +
      '%; width: ' +
      size +
      'px;height:' +
      size +
      'px;animation-delay:-' +
      delay +
      's;animation-duration: ' +
      duration +
      's'
    );
  }
};

window.addEventListener('DOMContentLoaded', function () {
  Lovewall.init();
});
