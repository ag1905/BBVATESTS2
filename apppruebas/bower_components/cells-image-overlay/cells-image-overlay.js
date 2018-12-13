Polymer({

  is: 'cells-image-overlay',

  properties: {

    /**
     * URL of the card to display. This property is required if the productId property is not used.
     * @type {String}
     */
    imageSrc: {
      value: '',
      type: String
    },

    /**
     * Set to true to display the card veil and the lock status icon.
     */
    showOverlay: {
      type: Boolean,
      value: false
    },

    /**
     * Image witdh, default is same as original. If a value is provided, do
     * not change the 'height' attribute unless you want to change the aspect
     * ratio.
     */
    width: Number,

    /**
     * Image height, default is same as original. If a value is provided, do
     * not change the 'width' attribute unless you want to change the aspect
     * ratio.
     */
    height: Number,

    /**
     * Alternative text.
     * @type {String}
     */
    alt: {
      type: String
    },

    /**
    * Default Icon.
    * @type {String}
    */
    icon: {
      type: String,
      value: 'banking:G15'
    },

    /**
     * Size of the cover icon.
     */
    iconSize: {
      type: Number,
      value: 24
    },

    /**
     * Url of the default image of the card.
     * Used if there is an error on loading the _imageUrl.
     * @type {String}
     */
    defaultImage: {
      type: String,
      value: ''
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
   * Uses the default image when there is an error
   * on loading the original image.
   * @param  {Boolean} error New value of _imageError.
   */
  _imageErrorChanged: function(error) {
    if (error && this.defaultImage) {
      this.set('imageSrc', this.defaultImage);
    }
  }
});
