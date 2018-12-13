(function() {

  'use strict';

  Polymer({

    is: 'cells-skeleton-custom',

    properties: {
      /**
       * Hide the animation landscape
       */
      hideAnimationLandscape: {
        type: Boolean,
        value: false,
        observer: '_hideAnimationLandscapeObserver'
      },
      /**
       * Hide the box shadow and margin
       */
      hideBoxShadow: {
        type: Boolean,
        value: false
      }
    },

    /**
     * Hide animation landscape
     */
    _hideAnimationLandscapeObserver: function(hide) {
      this.toggleClass('hide-element', hide, this.$.animateLayer);
    },
    /**
     * Checked hide box shadow and return class
     */
    _checkedHideBoxShadow: function(hide) {
      return hide ? 'unbox' : '';
    }
  });
}());