import Cookies from 'js-cookie';
import Helpers from './helpers';

var Events = {
  /**
   * Cookie used for storing experiment variants.
   */
  EXPERIMENTS_COOKIE: 'pm_experiments',

  /**
   * Event types that can be tracked.
   * These need to match DOM events.
   *
   * @type {Array}
   */
  allowedEventTypes: ['click', 'submit'],

  init: function () {
    // Find all of the elements with event tracking attributes.
    var trackers = Helpers.toArray(document.querySelectorAll('[data-track]'));

    // Loop through each of the elements with event tracking attributes.
    trackers.forEach(Events.setupEventListener);

    // Store A/B test experiment variations in the cookie.
    Events.storeExperimentVariants();
  },

  /**
   * Set up an event listener to track the event on the specified element.
   *
   * @param  {Element} element The DOM element with event tracking.
   * @return {void}
   */
  setupEventListener: function (element) {
    // Create an object with the data to be sent to GA.
    var eventData = {
      eventCategory: element.getAttribute('data-category'),
      eventAction: element.getAttribute('data-track'),
      eventLabel: element.getAttribute('data-label'),
      eventValue: element.getAttribute('data-value')
    };

    // Check to make sure we can track this type of event.
    if (
      Events.allowedEventTypes.indexOf(eventData.eventAction.toLowerCase()) ==
      -1
    ) {
      return;
    }

    // Set up a listener for the event.
    element.addEventListener(eventData.eventAction.toLowerCase(), function (e) {
      Events.trackEvent(e, eventData);
    });
  },

  /**
   * Track an event.
   *
   * @param  {Event} e     The browser event caused by a user interaction.
   * @param  {Object} data The event data to be sent to GA.
   * @return {void}
   */
  trackEvent: function (e, data) {
    var tag = e.target.tagName.toLowerCase();

    // If this is a link (which doesn't open in a new tab) we need to intercept
    // the click so that we can log the event before the page unloads.
    if (tag == 'a' && e.target.target != '_blank') {
      e.preventDefault();

      // Follow the link once we've logged the event with GA.
      data.hitCallback = Helpers.createFunctionWithTimeout(function () {
        window.location.href = e.target.href;
      });
    }

    // Intercept form submissions.
    if (tag == 'form') {
      e.preventDefault();

      if (e.target.getAttribute('data-no-submit') == null) {
        // Submit the form once the GA event has been logged.
        data.hitCallback = Helpers.createFunctionWithTimeout(function () {
          e.target.submit();
        });
      }
    }

    // Tell GA that we are logging an event.
    data.hitType = 'event';

    // Send the event to Snowplow.
    if (typeof snowplow != 'undefined') {
      snowplow(
        'trackStructEvent',
        data.eventCategory,
        data.eventAction,
        data.eventLabel,
        null,
        data.eventValue
      );
    }

    // Send the event to GA.

    if (typeof ga != 'undefined') {
      ga('send', data);
    }
  },

  /**
   * Store A/B test experiment variants in a cookie.
   * We’ll retrieve this cookie when a user signs up and store which
   * variants they have seen.
   *
   * @return {void}
   */
  storeExperimentVariants: function () {
    // Skip pages that don’t have an active experiment.
    if (window.pmExperiment === undefined) {
      return;
    }

    // Fetch experiments that this user has already seen.
    var currentExperiments = Cookies.get(Events.EXPERIMENTS_COOKIE);

    // Create a default object if this is the first time the user
    // has encountered an experiment.
    if (currentExperiments === undefined) {
      currentExperiments = {};
    }

    // Set the experiment variant.
    currentExperiments[window.pmExperiment.id] = window.pmExperiment.variant;

    // Set the experiment cookie.
    Cookies.set(Events.EXPERIMENTS_COOKIE, currentExperiments, {
      expires: 365,
      domain: '.' + window.location.host,
      samesite: 'Lax'
    });
  }
};

window.addEventListener('DOMContentLoaded', function () {
  Events.init();
});
