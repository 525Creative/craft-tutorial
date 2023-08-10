import Handlebars from 'handlebars/dist/handlebars.min.js';
import Helpers from './helpers';

/**
 * Class for handling the home page TTI stats section.
 */
var Stats = {
  /**
   * Postmark Status API URL
   * @type {String}
   */
  apiUrl: 'https://tti.postmarkapp.com/api/1.0',

  /**
   * TTI thresholds
   */
  ttiThresholds: {
    gmail: null,
    hotmail: null,
    yahoo: null,
    outlook: null,
    icloud: null,
    aol: null
  },

  /**
   * Handlebars Templates
   */
  requestErrorTemplate: Handlebars.compile(
    '<li class="tti_error">{{ message }}</li>'
  ),
  statusWarningTemplate: Handlebars.compile(
    '<li class="tti_item tti_item--error"><img src="/images/warning.svg" alt="warning">{{ message }} <a href="https://status.postmarkapp.com/incidents/{{ incident_id }}">More details →</a></li>'
  ),
  sparklineTemplate: Handlebars.compile(
    '<embed src="/images/sparkline.svg?{{ data }}&current&dot_color={{ dot_color }}" type="image/svg+xml"></embed>'
  ),

  /**
   * Initialize the Stats app.
   */
  init: function () {
    var ttiLoadingObserver = new IntersectionObserver(function (
      entries,
      ttiObserver
    ) {
      Helpers.toArray(entries).forEach(function (entry) {
        if (entry.isIntersecting) {
          const ttiTiles = entry.target;

          Stats.load();

          ttiObserver.unobserve(ttiTiles);
        }
      });
    });

    var arr = document.querySelectorAll('.tti');
    Helpers.toArray(arr).forEach(function (ttiTiles) {
      ttiLoadingObserver.observe(ttiTiles);
    });
  },

  load: function () {
    Stats.fetchTtiStats();
    // TODO: Bring this back once incident API is back online
    // TODO: Currently waiting on Sorry to launch this
    // Stats.fetchLastIncident();

    if (document.querySelector('.tti_item--uptime')) {
      Stats.fetchUptime();
    }
  },

  /**
   * Helper method for fetch data from the API.
   *
   * @param  {String}   endpoint The endpoint that should be requested.
   * @param  {Function} callback A function to handle the data returned.
   * @return {void}
   */
  fetchData: function (endpoint, callback) {
    var request = new XMLHttpRequest();

    request.onload = function () {
      // Check to see if the request was successful and there's a response.
      if (request.status === 200 && request.response !== null) {
        var data = JSON.parse(request.response);
        return callback(data);
      }

      // Show error message if there wasn't a 200 response.
      if (document.querySelectorAll('.tti_error')) {
        // Clear any previous errors.
        document.querySelectorAll('.tti_error').forEach(function (error) {
          error.remove();
        });
      }

      // Add the error to the page.
      document.querySelector('.tti_items').innerHTML +=
        Stats.requestErrorTemplate({
          message: 'Oops! There was an error fetching our status data. 😞'
        });
    };

    // Send the request.
    request.open('GET', this.apiUrl + endpoint, true);
    request.send();
  },

  /**
   * Fetches the last incident and checks to see whether an error message
   * should be displayed alongside the stats.
   *
   * @return {void}
   */
  fetchLastIncident: function () {
    // Fecth the last indident.
    this.fetchData('/last_incident', function (data) {
      var latestUpdate = data.updates[data.updates.length - 1];

      // Check to see if the incident is active incident.
      if (latestUpdate.status == 'Resolved') {
        return;
      }

      // Yep, still working on it. Show an warning message.
      document.querySelector('.tti_items').innerHTML +=
        Stats.statusWarningTemplate({
          incident_id: data.id,
          message: latestUpdate.body
        });
    });
  },

  /**
   * Fetch the latest TTI stats.
   *
   * @return {void}
   */
  fetchTtiStats: function () {
    // Hit the API endpoint to get the TTI data.
    this.fetchData('/tti', function (data) {
      data.forEach(Stats.displayProviderStats);

      if (document.querySelector('.tti_item--global-average')) {
        Stats.displayGlobalAverage(data);
      }
    });
  },

  /**
   * Fetch the system uptime from the status API.
   *
   * @return {void}
   */
  fetchUptime: function () {
    this.fetchData('/services/availability', function (data) {
      var item = document.querySelector('.tti_item--uptime'),
        label = item.querySelector('.tti_value'),
        availability = Math.floor(data.percentageUp * 100000) / 1000;

      label.innerHTML = availability + '%';
      item.classList.remove('tti_item--loading');
      item.classList.add(
        availability < 99.99 ? 'tti_item--disruption' : 'tti_item--okay'
      );
    });
  },

  /**
   * Display the global average TTI across all providers.
   *
   * @param {Array} data  An array of provider TTI data.
   * @return {void}
   */
  displayGlobalAverage: function (data) {
    var item = document.querySelector('.tti_item--global-average'),
      label = item.querySelector('.tti_value');
    var globalAverage = 0;

    data.forEach(function (provider) {
      globalAverage += Stats.average(provider.values) / 1000.0;
    });

    globalAverage = globalAverage / data.length;

    label.innerHTML = globalAverage.toFixed(2) + 's';
    item.classList.remove('tti_item--loading');
    item.classList.add(
      globalAverage > 10 ? 'tti_item--disruption' : 'tti_item--okay'
    );
  },

  /**
   * Display the stats for an individual prodivder
   *
   * @param  {Object} provider The provider data fetched from the API.
   * @return {void}
   */
  displayProviderStats: function (provider) {
    var item = document.querySelector('.tti_item--' + provider.id);

    // Skip provider if there is no element in the UI for it.
    if (!item) {
      return;
    }

    var itemClass = 'tti_item--okay',
      dotColor = '4FC47F',
      label = item.querySelector('.tti_value'),
      graph = item.querySelector('.tti_graph'),
      avgLabel = item.querySelector('.tti_average'),
      tti = provider.values[provider.values.length - 1] / 1000.0,
      averageTti = Stats.average(provider.values) / 1000.0;

    // Remove loading class.
    item.classList.remove('tti_item--loading');

    // Set the provider average.
    Stats.ttiThresholds[provider.id] = averageTti * 1.2;

    // Set a baseline threshold of 10 seconds.
    if (Stats.ttiThresholds[provider.id] < 10) {
      Stats.ttiThresholds[provider.id] = 10;
    }

    // Calculate the relevant item class.
    if (tti > Stats.ttiThresholds[provider.id]) {
      itemClass = 'tti_item--disruption';
      dotColor = 'F2B13A';
    }

    // Add the TTI stat
    label.innerHTML = tti.toFixed(2) + 's';
    avgLabel.innerHTML = 'Avg. ' + averageTti.toFixed(2) + 's';

    // Generate the sparkline.
    graph.innerHTML = Stats.sparklineTemplate({
      data: provider.values.join(','),
      dot_color: dotColor
    });

    // Add the item class.
    item.classList.add(itemClass);
  },

  /**
   * Find the average of an array of values.
   *
   * @param  {Array} array
   * @return {Number}
   */
  average: function (array) {
    var sum = 0;

    array.forEach(function (i) {
      sum += i;
    });

    return sum / array.length;
  }
};

// Kick-off the app on document ready.
window.addEventListener('DOMContentLoaded', function () {
  // Only init on pages that have the tti boxes.
  if (document.querySelector('.tti')) {
    Stats.init();
  }
});
