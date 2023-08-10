import Helpers from './helpers';

/**
 * Helper class for handling nav behaviour.
 */
var Nav = {
  /**
   * Set up event listeners for the dropdowns.
   */
  init: function () {
    var desktopDropdowns = document.querySelectorAll(
      '.nav--desktop .js-nav-popup'
    );
    var mobileDropdowns = document.querySelectorAll(
      '.nav--mobile .js-nav-popup'
    );
    var mobileNavButton = document.querySelector('.js-nav-mobile-button');

    // Desktop dropdown mouse events
    desktopDropdowns.forEach(function (el) {
      el.addEventListener('mouseenter', Nav.toggleAriaExpanded);
      el.addEventListener('mouseout', Nav.toggleAriaExpanded);
    });

    // Mobile dropdown touch events
    mobileDropdowns.forEach(function (el) {
      el.addEventListener('click', Nav.toggleAriaExpanded);
      el.addEventListener('click', Nav.toggleDropdown);
    });

    // Mobile navigation event
    mobileNavButton.addEventListener('click', function () {
      var mobileNav = document.querySelector('.js-nav-mobile');
      Nav.toggleMobileNav(this, mobileNav);
      Nav.toggleAriaExpanded(null, this);
    });
  },

  /**
   * Toggle mobile navigation and button state
   */
  toggleMobileNav: function (button, nav) {
    Helpers.toggleClass(button, 'is-active');
    Helpers.toggleClass(nav, 'is-active');
  },

  toggleAriaExpanded: function (event, el) {
    if (!el) {
      el = this;
    }

    var isExpanded = el.getAttribute('aria-expanded') === 'true';
    el.setAttribute('aria-expanded', isExpanded ? false : true);
  },

  /**
   * Collapsible dropdowns on mobile menu
   */
  toggleDropdown: function () {
    var target = this.getAttribute('data-target');
    var targetEl = document.querySelector('.nav--mobile ' + target);

    // Toggle class on dropdown
    Helpers.toggleClass(targetEl, 'is-active');

    // Toggle class on button
    Helpers.toggleClass(this, 'is-active');
  }
};

window.addEventListener('DOMContentLoaded', Nav.init);
