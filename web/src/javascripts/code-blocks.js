/**
 * Responsive code blocks helper.
 */
var ResponsiveCodeBlocks = {
  /**
   * Search for code blocks on page load
   *
   * @return {void}
   */
  init: function () {
    // Check code blocks to see if they are overflowing their containers.
    ResponsiveCodeBlocks.checkCodeBlocks();

    // Re-check on window re-size.
    window.addEventListener('resize', ResponsiveCodeBlocks.checkCodeBlocks);
  },

  checkCodeBlocks: function () {
    // Find all code blocks within the page body.
    var blocks = [].slice.call(document.querySelectorAll('.entry_code > code'));

    // Check to see if the code blocks content is overflowing.
    blocks.forEach(function (el) {
      // Skip if the table is not overflowing its container.
      if (el.offsetWidth <= el.parentNode.offsetWidth) {
        el.parentNode.classList.remove('entry_code--overflow');
        return;
      }

      // Add the overflow class so that a scroll hint will be displayed
      // on mobile.
      el.parentNode.classList.add('entry_code--overflow');
    });
  }
};

window.addEventListener('DOMContentLoaded', function () {
  ResponsiveCodeBlocks.init();
});
