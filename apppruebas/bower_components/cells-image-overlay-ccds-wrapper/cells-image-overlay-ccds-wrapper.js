(function() {

  'use strict';

  Polymer({

    is: 'cells-image-overlay-ccds-wrapper',

    behaviors: [
      Polymer.CCDSImagesBehavior
    ],

    properties: {

      /**
      * Image URL
      * @type {String}
      */
      imageSrc: {
        type: String
      },

      /**
      * Icon to display if a card has a concrete status
      * @type {String}
      */
      icon: {
        type: String
      },

      /**
      * Size of the icon defined in 'cardIcon' property
      * @type {Number}
      * @default 16
      */
      iconSize: {
        type: Number,
        value: 16
      },

      /**
      * Set to true to display the card veil and the lock status icon.
      * @type {Boolean}
      * @default false
      */
      showOverlay: {
        type: Boolean,
        value: false
      },

      /**
      * Width (in pixels) of the image to display
      * @type {Number}
      * @default 45
      */
      width: {
        type: Number,
        value: 45
      },

      /**
      * Height (in pixels) of the image to display
      * @type {Number}
      * @default 29
      */
      height: {
        type: Number,
        value: 29
      },

      /**
      * Url of the default image of the card.
      * Used if there is an error on loading the 'imageSrc'.
      * @type {String}
      * @default ''
      */
      defaultImage: {
        type: String,
        value: ''
      },

      /**
      * Alternative text.
      * @type {String}
      */
      alt: {
        type: String
      },

      /**
      * When preload is true, setting fade to true will cause the image to
      * fade into place.
      * @type {Boolean}
      * @default false
      */
      fade: {
        type: Boolean,
        value: false
      },

      /**
      * When true, any change to the src property will cause the placeholder image
      * to be shown until the new image has loaded.
      * @type {Boolean}
      * @default false
      */
      preload: {
        type: Boolean,
        value: false
      },

      _builtImgSrc: {
        type: String
      }

    },

    observers: [
      '_buildImgSrc(imageSrc, width, height)'
    ],

    _buildImgSrc: function(imageSrc, width, height) {
      this.set('_builtImgSrc', this.buildImgSrcWithDimensions(imageSrc, width, height));
    }

  });

}());
