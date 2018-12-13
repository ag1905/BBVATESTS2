(function() {

  'use strict';

  Polymer({

    is: 'cells-oc-banner-list',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {

      /**
       * Campaigns to display
       * @type {Array}
       */
      campaigns: {
        type: Array
      },

      /**
       * Flag list empty
       * @type {Boolean}
       */
      empty: {
        type: Boolean,
        value: true,
        computed: '_isEmpty(campaigns)'
      },

      /**
       * Image empty location
       * @type {String}
       */
      imageEmpty: {
        type: String,
        value: ''
      },

      /**
       * Images location
       * @type {String}
       */
      imageLocation: {
        type: String,
        value: ''
      }
    },

    _isEmpty: function(campaigns) {
      return !campaigns || campaigns.length === 0;
    }

  });

}());
