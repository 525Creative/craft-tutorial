var Tabs = {
  tabIds: [],

  init: function () {
    // Keep a reference to all the tab IDs.
    [].slice.call(document.querySelectorAll('.tab')).forEach(function (tab) {
      Tabs.tabIds.push(tab.id);
    });

    // Listen for changes to the URL hash.
    window.addEventListener('hashchange', Tabs.processHash);

    Tabs.processHash();
  },

  processHash: function () {
    var hash = window.location.hash;

    if (Tabs.tabIds.indexOf(hash.replace('#', '')) > -1) {
      Tabs.showTab(hash);
    }
  },

  showTab: function (id) {
    // Check that the tab exists.
    if (!document.querySelector(id)) {
      return;
    }

    var tab = document.querySelector(id);
    var tabsContainer = tab.parentNode.parentNode;

    // Hide any currently visible tabs.
    [].slice
      .call(tabsContainer.querySelectorAll('.tab--current'))
      .forEach(function (tab) {
        tab.classList.remove('tab--current');
      });

    [].slice
      .call(
        tabsContainer.querySelectorAll('.tabbed-nav .tabbed-nav_item--current')
      )
      .forEach(function (tab) {
        tab.classList.remove('tabbed-nav_item--current');
      });

    // Show the specified tab.
    tab.classList.add('tab--current');
    tabsContainer
      .querySelector('.tabbed-nav .tabbed-nav_item[data-tab="' + id + '"]')
      .classList.add('tabbed-nav_item--current');
  }
};

window.addEventListener('DOMContentLoaded', Tabs.init);
