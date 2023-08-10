var Helpers = {
  hasClass: function (el, className) {
    if (!el) {
      return;
    }

    return new RegExp(' ' + className + ' ').test(' ' + el.className + ' ');
  },

  addClass: function (el, className) {
    if (!Helpers.hasClass(el, className)) {
      el.className += ' ' + className;
    }
  },

  removeClass: function (el, className) {
    if (!el) {
      return;
    }

    var newClass = ' ' + el.className.replace(/[\t\r\n]/g, ' ') + ' ';

    if (Helpers.hasClass(el, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0) {
        newClass = newClass.replace(' ' + className + ' ', ' ');
      }

      el.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  },

  toggleClass: function (el, className) {
    if (!el) {
      return;
    }

    Helpers.hasClass(el, className)
      ? Helpers.removeClass(el, className)
      : Helpers.addClass(el, className);
  },

  addListener: function (el, eventType, cb) {
    if (el) el.addEventListener(eventType, cb);
  },

  isKeyPrintable: function (key) {
    var valid =
      (key > 47 && key < 58) || // number keys
      key == 32 ||
      key == 13 || // spacebar & return key(s) (if you want to allow carriage returns)
      (key > 64 && key < 91) || // letter keys
      (key > 95 && key < 112) || // numpad keys
      (key > 185 && key < 193) || // ;=,-./` (in order)
      (key > 218 && key < 223); // [\]' (in order)

    return valid;
  },

  toArray: function (object) {
    return [].slice.call(object);
  },

  /**
   * Debounce function.
   * Useful for rate-limiting scroll events.
   *
   * Source: https://davidwalsh.name/javascript-debounce-function
   */
  debounce: function (func, wait, immediate) {
    var timeout;

    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  /**
   * Helper for creating a function that will execute after a set amount of time
   * if not called. This is useful for handling async callbacks.
   *
   * @param  {Function} callback    The function to be executed.
   * @param  {Number}   opt_timeout Timeout duration.
   * @return {Function}             Callback function.
   */
  createFunctionWithTimeout: function (callback, opt_timeout) {
    var called = false;

    function fn() {
      if (!called) {
        called = true;
        callback();
      }
    }

    setTimeout(fn, opt_timeout || 1000);

    return fn;
  },

  getQueryParameterByName: function (name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
};

export default Helpers;
