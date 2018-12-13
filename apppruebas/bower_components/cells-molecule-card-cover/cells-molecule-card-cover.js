Polymer({

  is: 'cells-molecule-card-cover',

  properties: {
    /**
     * URL of the card to display.
     */
    imageSrc: {
      value: '',
      type: String
    },

    /**
    * Available status values
    */
    _statusValue: {
      type: Array,
      value: ['locked', 'activate', 'off']
    },

    /**
     * Image witdh, default is same as original. If a value is provided, do not change the 'height' attribute unless you want to change the aspect ratio.
     */
    width: Number,

    /**
     * Image height, default is same as original. If a value is provided, do not change the 'width' attribute unless you want to change the aspect ratio.
     */
    height: Number,

    /**
     * Alternative text of the image.
     */
    alt: {
      type: String
    },

    /**
     * Activation status of the card associated to the current card cover.
     */
    _isActive: {
      type: Boolean,
      computed: '_layer(status, showOverlay)'
    },

    /**
     * Set to true to display the card veil
     */
    showOverlay: {
      type: Boolean,
      value: false
    },

    /**
    * Icon to show on the overlay.
    */
    icon: {
      type: String
    },

    /**
     * Size of the cover icon.
     */
    iconSize: {
      type: Number,
      value: 24
    },

    /**
     * Url of the default image of the card. Used if there is an error on loading the image from imageSrc.
     */
    defaultImage: {
      type: String,
      value: ''
    },

    /**
     * Read-only value that indicates that the last set src failed to load.
     */
    _imageError: {
      type: Boolean,
      observer: '_imageErrorChanged'
    },

    /**
    * When preload is true, setting fade to true will cause the image to fade into place.
    */
    fade: {
      type: Boolean,
      value: false
    },

    /**
    * When true, any change to the src property will cause the placeholder image or the placeholder style to be shown until the new image has loaded.
    */
    preload: {
      type: Boolean,
      value: false
    },

    /**
    * Image to show as placeholder while the image loads if preload is true.
    */
    placeholder: {
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
      type: String,
      value: '',
      observer: '_addStatus'
    },
    /**
     * Indicates if the image has been loaded
     * @type {Boolean}
     * @default false
     */
    imageLoaded: {
      notify: true,
      type: Boolean,
      value: false
    }

  },

  /**
   * Uses the default image when there is an error on loading the original image.
   */
  _imageErrorChanged: function(error) {
    if (error && this.defaultImage) {
      this.imageSrc = this.defaultImage;
    }
  },

  /**
  * Add status classes to the overlay div.
  */
  _addStatus: function(status) {
    var container = this.$.iconTextContainer;
    this._deleteStatus(container);
    if (this._statusValue.indexOf(status) !== -1) {
      container.classList.add(status);
    }
  },

  /**
  * Sets _isActive property value (which determines overlay visibility) based on showOverlay and status properties
  */
  _layer: function(status, showOverlay) {
    var state = showOverlay || this._statusValue.indexOf(status) !== -1;
    return !state;
  },

  /**
  * Delete all possible status classes.
  */
  _deleteStatus: function(container) {
    var i = 0;
    var length = this._statusValue.length;

    for (i; i <= length; i += 1) {
      if (container.classList.contains(this._statusValue[i])) {
        container.classList.remove(this._statusValue[i]);
        return;
      }
    }
  }

});
