window.addEventListener(
  'DOMContentLoaded',
  function () {
    /**
     * Event handler for expanding resource lists.
     */
    var resourceListToggles = [].slice.call(
      document.querySelectorAll('.js-resource-list-toggle')
    );

    resourceListToggles.forEach(function (toggleLink) {
      // Toggle the expanded modifier when the more link is clicked.
      toggleLink.addEventListener('click', function (e) {
        e.preventDefault();

        var list = document.querySelector(
          toggleLink.getAttribute('data-toggle')
        );

        if (list) {
          list.classList.toggle('resource-list_items--expanded');
        }
      });
    });
  },
  false
);
