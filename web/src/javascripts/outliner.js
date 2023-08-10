import Handlebars from 'handlebars/dist/handlebars.min.js';

/**
 * Class for generating a document outline.
 */
var Outliner = {
  outline: null,
  activeSection: null,
  container: null,
  visibleThreshold: null,

  /**
   * Initialize the Outliner instance.
   */
  init: function () {
    // Only init on pages that have the outliner placeholder.
    if (!document.querySelector('#outliner')) {
      return;
    }

    // Start by gathering the outline data.
    Outliner.generateOutline(Outliner.displayOutline);
  },

  /**
   * Generates an array of nav links from the headlines on the page.
   * Looks at h1 and h2 only.
   *
   * @param  {Function} callback
   * @return {void}
   */
  generateOutline: function (callback) {
    var outline = [],
      sections = [].slice.call(document.querySelectorAll('.entry'));

    // Loop each of the entries on this page.
    sections.forEach(function (section) {
      var title = section.querySelector('.entry_title'),
        children = [];

      // Look for second-level headings.
      var sectionHeadings = [].slice.call(section.querySelectorAll('h2'));

      sectionHeadings.forEach(function (heading) {
        // Create a child element for this section.
        children.push({
          title: heading.childNodes[0].textContent.trim(),
          url: heading.querySelector('a').href,
          el: heading
        });
      });

      // Push the section object into the outline.
      outline.push({
        title: title.childNodes[0].textContent.trim(),
        url: '#' + section.id,
        el: section,
        children: children
      });
    });

    // Keep a reference to the outline.
    Outliner.outline = outline;

    // Execute a callback (if specified).
    if (callback) {
      callback();
    }
  },

  /**
   * Construct the outline nav links and add them to the DOM.
   *
   * @param  {Array} outline An array of navigation links.
   * @return {undefined}
   */
  displayOutline: function () {
    // Create the parent nav element.
    var nav = document.createElement('nav');
    nav.classList.add('outline');

    // Register HB partial for generating an outline list.
    Handlebars.registerPartial(
      'outlineList',
      '{{#if children}}<ol class="outline_items">{{#each children}}{{> outlineLink }}{{/each}}</ol>{{/if}}'
    );

    // Register HB partial for generating an outline item.
    Handlebars.registerPartial(
      'outlineLink',
      '<li class="outline_item"><a href="{{ url }}" class="outline_link">{{ title }}</a>{{> outlineList }}</li>'
    );

    // Regitser HB template for outline content.
    var template = Handlebars.compile(
      '<h4 class="outline_title">{{ title }}</h4> {{> outlineList }} <div class="outline_errors"><p>Seen something that’s wrong?</p><a href="/contact" class="cta-btn cta-btn--ghost cta-btn--warning cta-btn--small" target="_blank">Report an error</a></div>'
    );

    // Grab the placeholder.
    var placeholder = document.querySelector('#outliner');

    // Generate the outline HTML using the HB template.
    nav.innerHTML = template({
      title: placeholder.getAttribute('data-title')
        ? placeholder.getAttribute('data-title')
        : document.title,
      children: Outliner.outline
    });

    // Add the nav to the page.
    placeholder.parentNode.insertBefore(nav, placeholder);
    placeholder.parentNode.removeChild(placeholder);

    // Get a reference to the container.
    Outliner.container = document.querySelector('.outline');

    // Set up scroll event listeners.
    document.addEventListener('scroll', Outliner.registerScrollListeners);
    window.addEventListener('resize', Outliner.registerScrollListeners);
  },

  /**
   * Register scroll evenet listeners.
   *
   * @return {void}
   */
  registerScrollListeners: function () {
    var doc = document.documentElement,
      scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    Outliner.updateOutlineVisibility(scrollTop);
    Outliner.updateActiveSection(scrollTop);
  },

  /**
   * Check whether the outline should be visible and show/hide as appropriate.
   *
   * @param  {Number} scrollTop The current vertical scroll position.
   * @return {void}
   */
  updateOutlineVisibility: function (scrollTop) {
    var outlineTop = Outliner.getOffset(Outliner.container).top;

    // Remove the visible class if we haven't scrolled past the nav yet.
    if (Outliner.visibleThreshold && scrollTop < Outliner.visibleThreshold) {
      Outliner.container.classList.remove('outline--fixed');
      Outliner.visibleThreshold = null;
      return;
    }

    // Check if the nav is visible and we've scrolled past it.
    // If so, add the fixed class to switch the element to being
    // fixed positioned.
    if (scrollTop >= outlineTop && Outliner.container.offsetParent) {
      Outliner.container.classList.add('outline--fixed');

      if (!Outliner.visibleThreshold) {
        Outliner.visibleThreshold = outlineTop;
      }
    }
  },

  /**
   * Update the highlighted item in the outline nav based on scroll position.
   *
   * @param  {Number} scrollTop The current vertical scroll position.
   * @return {void}
   */
  updateActiveSection: function (scrollTop) {
    var activeSection;

    // Loop through each item in the outline and check if we've scrolled
    // past it.
    Outliner.outline.forEach(function (section) {
      if (scrollTop > Outliner.getOffset(section.el).top - 10) {
        activeSection = section;
      }

      // Loop any children that the section had.
      section.children.forEach(function (child) {
        // Grab the elements calculated styles so the we can add the top margin.
        var childStyles = window.getComputedStyle(child.el),
          topMargin = childStyles['margin-top']
            ? parseInt(childStyles['margin-top'])
            : 0;
        if (scrollTop > Outliner.getOffset(child.el).top - topMargin - 10) {
          activeSection = child;
        }
      });
    });

    // Check if we've reached the bottom of the last item in the outline.
    var lastItem = Outliner.outline[Outliner.outline.length - 1];

    if (
      scrollTop + window.innerHeight >=
      Outliner.getOffset(lastItem.el).top + lastItem.el.offsetHeight
    ) {
      // Set the active section to the last item in the outline.
      activeSection = lastItem.children.length
        ? lastItem.children[lastItem.children.length - 1]
        : lastItem;
    }

    // Don't bother manipluating classes if the active item has not changed.
    if (
      Outliner.activeSection !== null &&
      Outliner.activeSection == activeSection
    ) {
      return;
    }

    // If there is no active item (we've scroll above the content) then use the
    // first item in the outline.
    if (!activeSection) {
      activeSection = Outliner.outline[0];
    }

    // Remove the active class from the current item.
    if (document.querySelector('.outline_item--active')) {
      document
        .querySelector('.outline_item--active')
        .classList.remove('outline_item--active');
    }

    // Add the active class to the new item.
    document
      .querySelector(
        '.outline_item > .outline_link[href="' + activeSection.url + '"]'
      )
      .parentNode.classList.add('outline_item--active');

    // Keep a reference to the active section.
    Outliner.activeSection = activeSection;
  },

  /**
   * Helper method for calculating the distance between an element and the top
   * of the page.
   *
   * @param  {Element} el The target element to calculate offsets for.
   * @return {Object}     Object containing top and left keys.
   */
  getOffset: function (el) {
    var _x = 0,
      _y = 0;

    // Traverse up the elements parents and sum the top and left offsets.
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft;
      _y += el.offsetTop;
      el = el.offsetParent;
    }

    return { top: _y, left: _x };
  }
};

/**
 * Kick-off the app on document ready.
 */
window.addEventListener('DOMContentLoaded', function () {
  // Disable the outline on touch devices.
  if ('ontouchstart' in document.documentElement) {
    return;
  }

  Outliner.init();
});
