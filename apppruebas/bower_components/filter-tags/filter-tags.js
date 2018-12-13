(function() {

  'use strict';

  Polymer({

    is: 'filter-tags',

    behaviors: [
      window.CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Filters data from filters datamanager
       * @type {Array}
       */
      selectedFilters: {
        type: Array,
        value: function() {
          return [];
        }
      }
    },

    _removeFilter: function(ev) {
      var index = ev.currentTarget.getAttribute('data-index');
      this.splice('selectedFilters', index, 1);

      //Send user selected filters to datamanager
      this.fire('user-selected-filters', this.selectedFilters);
    }
  });
}());