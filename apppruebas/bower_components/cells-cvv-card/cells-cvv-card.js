(function() {

  'use strict';

  Polymer({

    is: 'cells-cvv-card',

    properties: {

      /**
       * Url of the back cover image of the card.
       * @type {String}
       */
      backCover: {
        type: String,
        value: ''
      },

      /**
       * Url of the default back cover image of the card.
       * Used if there is an error on loading the backCover.
       * @type {String}
       */
      defaultBackCover: {
        type: String,
        value: ''
      },

      /**
       * cvv value of the card
       * @type {String}
       */
      cvv: {
        type: String,
        value: ''
      },

      /**
       * Image witdh, default is same as original.
       * @type {String}
       */
      width: {
        type: String
      },

      /**
       * Image height, default is same as original.
       * @type {String}
       */
      height: {
        type: String
      },

      /**
       * Alternative text.
       * @type {String}
       */
      alt: {
        type: String
      },

      /**
       * Read-only value that indicates that the last
       * set src failed to load.
       * @type {Boolean}
       */
      _imageError: {
        type: Boolean,
        observer: '_imageErrorChanged'
      }

    },

    /**
     * Uses the default back cover when there is an error
     * on loading the original back cover.
     * @param  {Boolean} error New value of _imageError.
     */
    _imageErrorChanged: function(error) {
      if (error && this.defaultBackCover) {
        this.set('backCover', this.defaultBackCover);
      }
    }

  });

}());
