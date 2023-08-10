// Font loading based on https://www.filamentgroup.com/lab/font-events.html

import FontFaceObserver from 'fontfaceobserver-es';
import Cookies from 'js-cookie';

(function (w) {
  // If the class is already set, we're good.
  if (document.documentElement.className.indexOf('fonts-loaded') > -1) {
    return;
  }

  var observer = new FontFaceObserver('Rund Text');

  observer.load(null, 5000).then(function () {
    document.documentElement.className += ' fonts-loaded';
    Cookies.set('fonts-loaded', 'Rund Text', { expires: 7, samesite: 'Lax' });
  });
})(this);
