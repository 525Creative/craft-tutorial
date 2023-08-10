var Landing = {
  init: function () {
    Landing.setPageHeight();

    $('form').submit(function () {
      $(this).find('input[type="submit"]').attr('disabled', 'disabled');
    });

    $(window).resize(function (e) {
      Landing.setPageHeight();
    });
  },

  setPageHeight: function () {
    // Create offset from header and footer
    var offset = $('header').outerHeight();

    // Check if hero exists
    if ($('section.hero').length) {
      offset = offset + $('section.hero').outerHeight();
    }

    // Set page height
    $('.page').css({
      'min-height': $(window).height() - offset
    });
  },

  inboundAnim: function () {
    function animate() {
      $(mail).css({ top: mailTop, left: mailLeft });
      $(json).css({ top: jsonTop, left: jsonLeft });
      $(claw).css({ top: clawTop });

      $(mail)
        .animate({ top: '+=139' }, 200)
        .animate({ top: '+=0' }, 600) // delay
        .animate({ left: '+=272' }, 2000, function () {
          $(json).animate({ left: '+=268' }, 2000, function () {
            $(claw).animate({ top: '0' }, 600, function () {
              $(json).animate({ top: '-=100' }, 1000);
              $(claw)
                .animate({ top: '-=100' }, 1000)
                .animate({ top: '+=0' }, 600, function () {
                  animate();
                });
            });
          });
        });
    }

    if ($('.inbound-scheme').length) {
      var mail = $('.inbound-scheme .b-email');
      var mailTop = $(mail).css('top');
      var mailLeft = $(mail).css('left');

      var json = $('.inbound-scheme .b-json');
      var jsonTop = $(json).css('top');
      var jsonLeft = $(json).css('left');

      var claw = $('.inbound-scheme .b-claw');
      var clawTop = $(claw).css('top');

      animate();
    }
  }
};

$(document).ready(Landing.init);
$(window).load(Landing.inboundAnim);
