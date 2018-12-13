(function() {

  'use strict';

  Polymer({

    is: 'cells-molecule-card-cover-ccds-wrapper',

    behaviors: [
      Polymer.CCDSImagesBehavior
    ],

    properties: {

      /**
      * Image URL
      */
      imageSrc: {
        type: String
      },

      /**
      * Icon to display on the overlay
      */
      icon: {
        type: String
      },

      /**
      * Size of the icon defined in 'icon' property
      */
      iconSize: {
        type: Number,
        value: 16
      },

      /**
      * Set to true to display the card veil and the lock status icon.
      */
      showOverlay: {
        type: Boolean
      },

      /**
      * Width (in pixels) of the image to display
      */
      width: {
        type: Number,
        value: 45
      },

      /**
      * Height (in pixels) of the image to display
      */
      height: {
        type: Number,
        value: 29
      },

      /**
      * Url of the default image of the card.
      * Used if there is an error on loading the 'imageSrc'.
      */
      defaultImage: {
        type: String,
        value: ''
      },

      /**
      * Alternative text for the image.
      */
      alt: {
        type: String
      },

      /**
       * Text to show over the card.
       */
      text: {
        type: String
      },

      /**
       * Value that indicates the status of the card.
       * Different status set different styles.
       * Possible values:
       * - locked
       * - activate
       * - off
       */
      status: {
        type: String
      },

      /**
      * When preload is true, setting fade to true will cause the image to fade into place.
      */
      fade: {
        type: Boolean
      },

      /**
      * When true, any change to the src property will cause the placeholder image
      * to be shown until the new image has loaded.
      */
      preload: {
        type: Boolean
      },

      /**
      * Image to show as placeholder while the image loads if preload is true.
      */
      placeholder: {
        type: String
      },

      /**
      * Final path of the image with width and height as parameters.
      */
      _builtImgSrc: {
        type: String,
        computed: '_buildImgSrc(imageSrc, width, height)'
      }

    },

    /**
    * Builds the final path of the image passing width and height as parameters, and taking pixel ratio in account.
    */
    _buildImgSrc: function(imageSrc, width, height) {
      return this.buildImgSrcWithDimensions(imageSrc, width, height);
    }

  });

}());
