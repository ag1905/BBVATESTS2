(function() {

  'use strict';

  Polymer({

    is: 'glomo-operations-list-group',

    behaviors: [
      window.CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Array of lists of operations grouped by functionality.
       */
      operationLists: Array,
      /**
       * Grid columns style
       */
      gridColumns: {
        type: Number,
        value: 4
      }
    },

    reset: function() {
      this.set('operationLists', undefined);
    }
  });
}());