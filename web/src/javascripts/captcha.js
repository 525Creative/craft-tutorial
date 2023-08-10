/**
 * Helper function for explicitly loading reCAPTCHA.
 * This will get called once the Google reCAPTCHA script has loaded.
 *
 * @return {undefined}
 */
var loadCaptcha = function () {
  // Default to the smaller mobile captcha.
  var captchaSize = 'compact';

  // Display the normal captcha if the window is big enough.
  if (window.innerWidth > 340) {
    captchaSize = 'normal';
  }

  // Set up all of the captchas.
  [].slice
    .call(document.querySelectorAll('.g-recaptcha'))
    .forEach(function (element) {
      grecaptcha.render(element, {
        sitekey: element.getAttribute('data-sitekey'),
        size: captchaSize
      });
    });
};
