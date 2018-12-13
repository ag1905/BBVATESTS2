(function() {

  'use strict';

  Polymer({

    is: 'glomo-list-apps',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
      * List of apps to show on grid
      */
      apps: {
        type: Array,
        value: function() {
          return [];
        }
      },
      /**
      * Number of grid columns
      */
      columns: {
        type: Number,
        value: 2
      },
      /**
      * Icon size
      */
      iconSize: {
        type: Number,
        value: 56
      }
    }
  });
}());
