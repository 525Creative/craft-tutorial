/**
 * Class for handling switch banner interactions.
 */
var SwitchBanner = {
  form: null,
  picker: null,

  /**
   * Initialize the Outliner instance.
   */
  init: function (formSelector, pickerSelector) {
    // Only init on pages that have a switch banner and dropdown.
    if (
      !document.querySelector(formSelector) ||
      !document.querySelector(pickerSelector)
    ) {
      return;
    }

    this.form = document.querySelector(formSelector);
    this.picker = document.querySelector(pickerSelector);

    SwitchBanner.watchPicker();
  },

  /**
   * Set up an event listener on the picker and navigate to the appropriate
   * guide when the selected option changes.
   */
  watchPicker: function () {
    var _this = this;

    _this.picker.addEventListener('change', function () {
      if (_this.picker.value == '') {
        return;
      }

      window.location = _this.picker.value;
    });
  }
};

/**
 * Kick-off the app on document ready.
 */
window.addEventListener('DOMContentLoaded', function () {
  SwitchBanner.init('.switch-banner_form', '#sb_provider');
});
