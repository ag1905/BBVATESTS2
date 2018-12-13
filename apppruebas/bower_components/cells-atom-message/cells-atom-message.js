(function() {

  'use strict';

  Polymer({

    is: 'cells-atom-message',

    behaviors: [
      window.CellsBehaviors.i18nBehavior
    ],

    properties: {
      /*
      * Reference of icon, dependence of atom-icon component
      * @type {String}
      * @public
      */
      icon: {
        type: String
      },
      /*
      * Icon size, dependence of atom-icon component
      * @type {Number}
      * @public
      */
      iconSize: {
        type: Number,
        value: 64
      },
      /*
      * Reference of image
      * @type {String}
      * @public
      */
      image: {
        type: String
      },
      /*
      * Description of image
      * @type {String}
      * @public
      */
      imageDescription: {
        type: String,
        value: ''
      },

      /*
      * Image height
      * @type {String}
      * @public
      */
      imageHeight: {
        type: String,
        value: '128'
      },
      /*
      * Image width
      * @type {String}
      * @public
      */
      imageWidth: {
        type: String,
        value: '128'
      },
      /*
      * Image in full screen size
      * @type {Boolean}
      * @public
      */
      imageFullScreen: {
        type: Boolean,
        value: false
      },
      /**
       * Text to show in the link
       * @type {String}
       */
      link: {
        type: String,
        value: ''
      },
      /*
      * Message to shown
      * @type {String}
      * @public
      */
      message: {
        type: String
      },
      /*
      * Visible element
      * @type {Boolean}
      * @public
      */
      visible: {
        type: Boolean,
        value: true
      },
      /**
       * Type of the message: error, warning, success or info.
       * @type {String}
       */
      type: {
        type: String,
        reflectToAttribute: true
      }
    },
    /*
    * Show the message
    */
    show: function() {
      this.set('visible', true);
    },
    /*
    * Hide the message
    */
    hide: function() {
      this.set('visible', false);
    },
    /*
    * Checked Icon
    */
    _checkedIcon: function(icon) {
      return Boolean(icon);
    },
    /*
    * Checked Image
    */
    _checkedImage: function(image) {
      return Boolean(image);
    },
    /**
     * Fires an event when the link is clicked
     * @param  {Event} e Click event
     * @event cells-atom-message-link-clicked
     */
    _handleLinkClick: function(e) {
      e.preventDefault();
      this.fire('cells-atom-message-link-clicked');
    },

    /**
     * Returns an string with an space to prevent Polymer from removing the alt attribute
     * which is required in images even if the image has no description. Otherwise, some
     * screen readers may read the image file name instead of ignoring the image (treat it
     * as presentational or decorative).
     */
    _computeImageDescription: function(val) {
      return val.trim() ? val : ' ';
    }
  });
}());
