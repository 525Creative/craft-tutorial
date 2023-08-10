import Helpers from './helpers';

var Contact = {
  form: document.querySelector('.contact-form'),

  topicSelect: document.querySelector('.contact-form #topic'),

  // An object containing a map of option values to class modifiers.
  // This will be populated in the init() method.
  optionModifiers: {},

  /**
   * Initialize the contact form.
   */
  init: function () {
    if (Contact.form == undefined || Contact.topicSelect == undefined) {
      return;
    }

    // Map all the topic options to an object in memory.
    var options = Contact.topicSelect.querySelectorAll('option');

    Helpers.toArray(options).forEach(function (option) {
      Contact.optionModifiers[option.value] =
        option.getAttribute('data-modifier');
    });

    // Set up an event listener for changes to the topic select.
    Contact.topicSelect.addEventListener(
      'change',
      Contact.updateConditionalFields
    );

    // Make sure that we’re displaying the correct fields in the
    // form was submitted with errors.
    Contact.updateConditionalFields();

    // Set topic dropdown value if topic param matches
    Contact.checkTopicParam();
  },

  /**
   * Update the conditional fields that are visible when the topic changes.
   */
  updateConditionalFields: function (e) {
    var activeModifier = Contact.optionModifiers[Contact.topicSelect.value];

    // Remove any modifier classes from the contact form.
    Object.keys(Contact.optionModifiers).forEach(function (key) {
      Contact.form.classList.remove(
        'contact-form--' + Contact.optionModifiers[key]
      );
    });

    // Add the modifier for the active topic, if one is selected.
    if (activeModifier) {
      Contact.form.classList.add('contact-form--' + activeModifier);
    }
  },

  checkTopicParam: function () {
    var topic = Helpers.getQueryParameterByName('topic');

    if (topic) {
      var topicValue = Contact.getTopicValue(topic);
      if (topicValue) Contact.topicSelect.value = topicValue;
    }
  },

  getTopicValue: function (topic) {
    var options = Helpers.toArray(Contact.topicSelect.options);

    options.forEach(function (option) {
      if (topic === option.getAttribute('data-modifier')) return option.value;
    });

    return null;
  }
};

window.addEventListener('load', Contact.init);
