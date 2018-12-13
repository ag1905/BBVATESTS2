(function() {

  'use strict';

  Polymer({

    is: 'cells-from-to',

    properties: {
      /**
       * origin to display
       */
      origin: String,
      /**
       * image for origin avatar
       */
      originAvatar: String,
      /**
       * number for origin
       */
      originNumber: String,
      /**
       * destination to display
       */
      destination: String,

      /**
       * image for destination avatar
       */
      destinationAvatar: String,
      /**
       * number for destination
       */
      destinationNumber: String,
      /**
       * Visible char of product
       */
      visibleChars: Number,
      /**
       * Hide images
       */
      hideImages: Boolean
    }
  });
}());
