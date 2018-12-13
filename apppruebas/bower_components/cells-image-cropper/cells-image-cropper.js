(function() {
  'use strict';

  Polymer({

    is: 'cells-image-cropper',

    properties: {
      /**
       * Image result
       */
      image: {
        type: String,
        notify: true
      },
      /**
       * The URL of the image to be cropped
       */
      src: {
        type: String,
        observer: 'render'
      },
      /**
       * The options object as specified in https://github.com/fengyuanchen/cropperjs#options
       */
      options: {
        type: Object,
        value: {
          aspectRatio: 1,
          guides: false,
          cropBoxMovable: false,
          cropBoxResizable: false,
          center: true,
          dragMode: 'move'
        }
      },
      /**
       * Loaded parse image
       */
      loaded: {
        type: Boolean,
        notify: true
      }
    },

    render: function() {
      if (!window.Cropper) {
        return console.error('Cropper has not been initialized');
      }

      if (this._cropper) {
        this._cropper.destroy();
      }

      var options = Object.assign({}, this.options);
      var wrapper = this.$.wrapper;

      options._ready = options.ready;
      options.ready = function(e) {
        wrapper.removeAttribute('style');
        if (options._ready) {
          return options._ready(e);
        }
      };

      wrapper.setAttribute('style', 'max-height: ' + this.$.image.offsetHeight + 'px');

      if (!this._scoped) {
        this._scoped = true;
        this.scopeSubtree(wrapper, true);
      }

      this._cropper = new window.Cropper(this.$.image, options);
    },

    getImage: function() {
      this.loaded = false;
      this._cropper.getCroppedCanvas().toBlob(this._toBase64.bind(this));
    },

    _toBase64: function(blob) {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function() {
        this.image = reader.result;
        this.dispatchEvent(new CustomEvent('set-avatar', {
          bubbles: true,
          composed: true,
          detail: reader.result
        }));
        this.loaded = true;
      }.bind(this);
    }
  });
}());