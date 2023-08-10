/**
 * Responsive tables helper.
 * -------------------------
 * Tables that overflow will be wrapped in a container
 * that scrolls horizontally.
 */
var ResponsiveTables = {
  /**
   * Search for tables on page load
   *
   * @return {void}
   */
  init: function () {
    // Find all tables within the page body.
    var tables = [].slice.call(document.querySelectorAll('.scope-text table'));

    // Wrap each of the tables in a container.
    tables.forEach(ResponsiveTables.wrapTable);
  },

  /**
   * Wrap a table in the container div.
   *
   * @param  {DOMNode} el The table that should be wrapped.
   * @return {void}
   */
  wrapTable: function (el) {
    // Skip if the table is not overflowing its container.
    if (el.offsetWidth <= el.parentNode.offsetWidth) {
      return;
    }

    // Create the wrapper element.
    var wrapper = document.createElement('div');
    wrapper.classList.add('table-container');

    // Add the wrapper to the page.
    el.parentNode.insertBefore(wrapper, el);

    // Move the table into the wrapper.
    wrapper.appendChild(el);
  }
};

window.addEventListener('DOMContentLoaded', function () {
  ResponsiveTables.init();
});
