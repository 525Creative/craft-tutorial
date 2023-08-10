var Modal = {
  init: function () {
    Modal.eventTarget;

    $(document).on('click', '.js-modal', function (e) {
      e.preventDefault();
      Modal.open();
    });

    // Close when clicking overlay
    $(document).on('click', '.modal', function (e) {
      e.preventDefault();
      if (e.target.className === 'modal') {
        Modal.close();
      }
    });

    // Close button on modal
    $(document).on('click', '.js-close-modal', function (e) {
      e.preventDefault();
      Modal.close();
    });
  },

  open: function (eventTarget, modalId, callback) {
    // Store event target when modal is open
    Modal.eventTarget = eventTarget;
    $('.modal[data-id=' + modalId + ']').fadeIn(200);
    $('body').css({ overflow: 'hidden' });

    if (callback) {
      callback();
    }
  },

  close: function (callback) {
    $('.modal').fadeOut(200);
    $('body').css({ overflow: 'auto' });

    // Reset states
    $('.modal').find('.js-modal-empty').val('');
    $('.modal').find('.js-modal-hide').hide();

    if (callback) {
      callback(Modal.eventTarget);
    }

    // Clear event target when modal is closed
    Modal.eventTarget = '';
  }
};

$(document).ready(Modal.init);

export default Modal;
