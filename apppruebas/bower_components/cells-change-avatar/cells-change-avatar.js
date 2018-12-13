(function() {

  'use strict';

  Polymer({

    is: 'cells-change-avatar',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Image
       */
      image: String,
      /**
       * Image result of transform in copper
       */
      avatar: {
        type: String,
        notify: true
      },
      /**
       * Image format
       */
      imageFormat: {
        type: String,
        value: 'base64'
      },
      /**
       * Image quality
       */
      imageQuality: Number,
      /**
       * Image width
       */
      imageScale: {
        type: Number,
        value: 0.5
      },
      /**
       * Image width, if imageScale prop isn't equal zero, the width not affected
       */
      imageWidth: {
        type: Number,
        value: 0
      },
      /**
       * Image height, if imageScale prop isn't equal zero, the height not affected
       */
      imageHeight: {
        type: Number,
        value: 0
      },
      /**
       * Max size of image to upload
       */
      imageMaxSize: Number,
      /**
       * Image Default
       */
      imageDefault: {
        type: String,
        observer: '_setDefault'
      },
      /**
       * File formats accepted to upload
       */
      fileFormatsAccepted: {
        type: String,
        value: '.jpg,.jpeg,.png,.gif,.bmp,.tiff'
      },
      /**
       * Cropper options
       * The options object as specified in https://github.com/fengyuanchen/cropperjs#options
       */
      cropperOptions: Object,
      /**
       * Result image options
       * The options object as specified in https://github.com/fengyuanchen/cropperjs#options and getCroppedCanvas
       */
      resultOptions: Object,
      /**
       * Disabled parse image, on click primary button
       */
      error: {
        type: Object,
        observer: '_notifyError',
        notify: true
      },
      /**
       * Loaded parse image
       */
      loaded: {
        type: Boolean,
        notify: true
      },
      /**
       * Disabled parse image, on click primary button
       */
      disabled: {
        type: Boolean,
        notify: true
      }
    },

    /**
     * Reset component
     */
    reset: function() {
      this.image = '';
      this.imageDefault = '';
      this.error = undefined;
      this.avatar = undefined;
    },

    _handleFile: function() {
      if (this.$.inputfile.files && this.$.inputfile.files.length) {
        this.$.managerImage.processImageFile(this.$.inputfile.files);
      }
    },

    _setDefault: function(imageDefault) {
      if (imageDefault) {
        this.image = imageDefault;
      }
    },

    _notifyError: function(error) {
      if (error && error.code) {
        this.dispatchEvent(new CustomEvent('error-on-get-avatar', {
          bubbles: true,
          composed: true,
          detail: error
        }));
      }
    },

    _notifyOnClickPrimary: function() {
      if (!this.disabled && this.image) {
        this.$.cropper.getImage(Object.assign({}, this.resultOptions));
      }

      this.dispatchEvent(new CustomEvent('on-click-primary', {
        bubbles: true,
        composed: true
      }));
    },

    _notifyOnClickSecondary: function() {
      this.dispatchEvent(new CustomEvent('on-click-secondary', {
        bubbles: true,
        composed: true
      }));
    }
  });
}());
