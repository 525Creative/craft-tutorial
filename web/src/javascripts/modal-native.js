var Modal = {
  init: function () {
    // Set up event listeners on open links.
    [].slice
      .call(document.querySelectorAll('.js-open-modal'))
      .forEach(function (element) {
        element.addEventListener('click', function (e) {
          e.preventDefault();
          Modal.open(element.getAttribute('data-modal'));
        });
      });

    // Set up event listeners on close links.
    [].slice
      .call(document.querySelectorAll('.js-close-modal'))
      .forEach(function (element) {
        element.addEventListener('click', function (e) {
          e.preventDefault();
          Modal.close(element.getAttribute('data-modal'));
        });
      });

    // Close modals on ESC keypress.
    document.addEventListener('keydown', function (e) {
      if (e.key != 'Escape') {
        return;
      }
      var visibleModal = document.querySelector('.modal:not(.hidden)');

      if (visibleModal) {
        Modal.close(visibleModal.getAttribute('data-id'));
      }
    });

    // Set up event listeners on the modal container.
    [].slice
      .call(document.querySelectorAll('.modal'))
      .forEach(function (element) {
        element.addEventListener('click', function (e) {
          if (e.target.classList.contains('modal')) {
            Modal.close(element.getAttribute('data-id'));
          }
        });
      });
  },

  open: function (modalId) {
    var modal = document.querySelector('.modal[data-id="' + modalId + '"]');

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  },

  close: function (modalId) {
    var modal = document.querySelector('.modal[data-id="' + modalId + '"]');

    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'visible';
    }
  }
};

window.addEventListener('DOMContentLoaded', Modal.init);
