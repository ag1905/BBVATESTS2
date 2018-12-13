(function() {
  'use strict';
  Polymer({
    is: 'cells-spinner-stripes',

    properties: {

      /**
       * If true, animation is paused
       */
      paused: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    }
  });
}());
