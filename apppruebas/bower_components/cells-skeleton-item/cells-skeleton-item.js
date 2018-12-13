(function() {

  'use strict';

  Polymer({
    is: 'cells-skeleton-item',

    properties: {
      /*
      * Apply skeleton header
      */
      showHeader: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /*
      * Apply skeleton title
      */
      showTitle: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /*
      * Apply skeleton item
      */
      showItem: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /*
      * Apply skeleton avatar
      */
      showAvatar: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /*
      * Apply skeleton bullets
      */
      showBullets: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    }
  });

}());
