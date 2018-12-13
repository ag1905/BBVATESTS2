(function() {

  'use strict';

  Polymer({

    is: 'cells-apng-canvas',

    properties: {
      /**
       * Path to APNG image.
       */
      src: {
        type: String,
        observer: '_requestSource'
      },

      /**
       * Set to true to autoplay the canvas animation.
       */
      autoplay: {
        type: Boolean,
        value: false
      },

      _animation: Object
    },

    observers: [
      '_renderCanvas(autoplay, _animation)'
    ],

    created: function() {
      this._parseAPNG = this._parseAPNG.bind(this);
    },

    /**
     * Plays the animation from the beginning.
     */
    play: function() {
      if (this.autoplay) {
        this._animation.play();
      } else {
        this.autoplay = true;
      }
    },

    /**
     * Stops the animation.
     */
    stop: function() {
      this._animation.rewind();
    },

    _requestSource: function(src) {
      this.$.ajax.generateRequest().completes.then(this._parseAPNG);
    },

    _parseAPNG: function(request) {
      /* global APNG */
      APNG.parseBuffer(request.response).then(this._setCanvas.bind(this), function(error) {
        this._log(this._logf('_parseAPNG', 'error parsing APNG:', request));
      });
    },

    _setCanvas: function(animation) {
      var canvas = this.$.canvas;
      canvas.width = animation.width;
      canvas.height = animation.height;
      this._animation = animation;
    },

    _renderCanvas: function(autoplay, animation) {
      var canvas = this.$.canvas;
      var ctx = canvas.getContext('2d');

      if (autoplay) {
        animation.addContext(ctx);
        animation.play();
      } else {
        animation.removeContext(ctx);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

  });

}());
