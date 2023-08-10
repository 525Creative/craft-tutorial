import Cookies from 'js-cookie';

var Sales = {
  volumeInput: document.querySelector('.js-sales-monthly-volume'),
  cookieVolume: Cookies.get('monthly_volume') || '',

  init: function () {
    Sales.setVolumeInput();
  },

  // Set monthly volume input from cookie on pricing page
  setVolumeInput: function () {
    if (Sales.volumeInput && !Sales.volumeInput.value)
      Sales.volumeInput.setAttribute('value', Sales.cookieVolume);
  }
};

window.addEventListener('DOMContentLoaded', function () {
  Sales.init();
});
