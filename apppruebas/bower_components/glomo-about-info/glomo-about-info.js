(function() {

  'use strict';

  Polymer({

    is: 'glomo-about-info',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {

      /**
      * Device info
      */
      deviceInfo: {
        type: Array
      },

      /**
      * Device info header image
      */
      img: {
        type: String,
        value: 'images/apps/bbva-logo.svg'
      }
    }
  });
}());
