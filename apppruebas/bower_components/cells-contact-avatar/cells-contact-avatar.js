(function() {

  'use strict';

  Polymer({

    is: 'cells-contact-avatar',

    properties: {
      /**
       * Url for the image to display.
       * Image is prioritized over text.
       */
      src: {
        type: String,
        value: ''
      },

      /**
       * Alternative text for the image.
       * Corresponds to the native html 'alt' attribute.
       */
      alt: {
        type: String,
        value: ''
      },

      /**
       * Character to display.
       */
      letter: {
        computed: '_computeLetter(alt)',
        readOnly: true,
        reflectToAttribute: true,
        type: String
      }
    },

    /**
     * Computed character to display.
     * @param {string} text Character text
     * @return {string} Character to show
     */
    _computeLetter: function(name) {
      if (name && typeof name === 'string') {
        var computed = name.split(' ');
        return (computed[1]) ?
          (computed[0][0] + (computed[1] && computed[1][0] || '')).toUpperCase() :
          (computed[0][0] + computed[0][1]).toUpperCase();
      }
      return '';
    },

   /**
   * Set empty src if avatar image can´t be downloaded
   */
    _treatSrcError: function() {
      this.set('src', '');
    }
  });
}());
