import ScrollReveal from 'scrollreveal';
import SmoothScroll from 'smooth-scroll';
import Helpers from './helpers';

/**
 * Generic animations used throughout the site.
 */
var Animations = {
  sr: ScrollReveal({
    duration: 1000,
    delay: 0,
    scale: 1,
    distance: '3em',
    useDelay: 'onload'
  }),

  coverBlurSettings: {
    maxSaturation: 180,
    maxBlur: 20
  },

  /**
   * Initialize animations.
   */
  init: function () {
    // Check that this page has sections with backgrounds that sould be animated.
    if (document.querySelectorAll('.section--grey-transition')) {
      Animations.setupSectionTransitions();
    }

    // FIXME: Disabled until Safari bug is fixed.
    //
    // Check that this page has a hero-cover that should animate on scroll.
    // if (document.querySelectorAll('.hero-cover--animate-blur')) {
    //   Animations.setupHeroCoverBlur();
    // }

    // Initialize smooth scroll links.
    var scroll = new SmoothScroll('[data-scroll]');
  },

  /**
   * Initialize scroll event listener to change the blur of the
   * hero cover background.
   *
   * @return {void}
   */
  setupHeroCoverBlur: function () {
    var cover = document.querySelector('.hero-cover--animate-blur');
    if (!cover) {
      return;
    }

    var overlay = cover.querySelector('.hero-cover_overlay');
    if (!overlay) {
      return;
    }

    // Check for backdrop filter support.
    if (
      overlay.style.webkitBackdropFilter == undefined &&
      overlay.style.backdropFilter == undefined
    ) {
      return;
    }

    // Listen for scroll events.
    window.addEventListener('scroll', function () {
      Animations.blurHeroCover(cover, overlay);
    });
  },

  /**
   * Blur the hero cover based on the current scroll position.
   *
   * @param {Element} cover   The hero cover element.
   * @param {Element} overlay The overlay element for the hero cover.
   * @return {void}
   */
  blurHeroCover: function (cover, overlay) {
    var yIncursion = (window.scrollY - cover.offsetTop) / cover.offsetHeight;
    if (yIncursion > 1 || yIncursion < 0) {
      return;
    }

    var saturation =
        (Animations.coverBlurSettings.maxSaturation - 100) * yIncursion + 100,
      blur = Animations.coverBlurSettings.maxBlur * yIncursion;

    if (overlay.style.webkitBackdropFilter != undefined) {
      overlay.style.webkitBackdropFilter =
        'saturate(' + saturation + '%) blur(' + blur + 'px)';
    } else {
      overlay.style.backdropFilter =
        'saturate(' + saturation + '%) blur(' + blur + 'px)';
    }
  },

  /**
   * Initialize scroll event listener to change the opacity of
   * backgrounds on transition sections.
   *
   * @return {void}
   */
  setupSectionTransitions: function () {
    var sections = Helpers.toArray(
      document.querySelectorAll('.section--grey-transition')
    );

    // Add a container div for the background.
    sections.forEach(function (section) {
      section.innerHTML = '<div class="section_bg"></div>' + section.innerHTML;
    });

    window.addEventListener('scroll', function () {
      sections.forEach(Animations.calculateBackgroundOpacity);
    });
  },

  /**
   * Update the opacity of the background container div.
   *
   * @param {Element} section The section element that should be animated.
   * @return {void}
   */
  calculateBackgroundOpacity: function (section) {
    var scrollPosition = window.scrollY,
      sectionStart = section.offsetTop,
      sectionMiddle = sectionStart + section.offsetHeight / 2,
      sectionEnd = sectionStart + section.offsetHeight,
      opacity = 0;

    if (scrollPosition > sectionEnd) {
      opacity = 1;
    }

    if (scrollPosition > sectionMiddle && scrollPosition <= sectionEnd) {
      opacity = (scrollPosition - sectionMiddle) / (section.offsetHeight / 2);
    }

    section.querySelector('.section_bg').style.opacity = opacity;
  }
};

window.addEventListener('DOMContentLoaded', function () {
  Animations.init();
});
