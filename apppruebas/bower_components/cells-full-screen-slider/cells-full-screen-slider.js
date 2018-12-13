(function() {

  'use strict';

  Polymer({

    is: 'cells-full-screen-slider',

    properties: {
      /**
       * Slides content.
       */
      slides: Array,

      /**
       * Default placeholder image used in each slide. (Transparent 1x1px png).
       */
      imagePlaceholder: {
        type: String,
        value: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQAAAAA3bvkkAAAAAnRSTlMAAHaTzTgAAAAKSURBVHgBY2AAAAACAAFzdQEYAAAAAElFTkSuQmCC'
      },

      /**
       * Active slide.
       */
      selected: {
        type: Number,
        value: 0,
        notify: true
      },

      /**
       * Set to true to autostart the slider.
       */
      autoplay: {
        type: Boolean,
        value: false
      },

      /**
       * If true, changing the slide by swiping is not allowed.
       */
      disableSwipe: {
        type: Boolean,
        value: false
      },

      /**
       * Duration in milliseconds for each slide in autoplay mode.
       * Setting slide property for individual slides will override this value.
       */
      delay: {
        type: Number,
        value: 6000
      },

      /**
       * If true, stop animation but not the slider.
       */
      frozen: {
        type: Boolean,
        value: false
      },

      /**
       * If true, show arrow buttons to change the slide
       */
      showArrows: {
        type: Boolean,
        value: false
      }

    },

    observers: [
      '_setAutoplay(autoplay, selected, slides)'
    ],

    _getImagePlaceholder: function(slides, selected) {
      return slides[selected].placeholder || this.imagePlaceholder;
    },

    /**
     * Ensure play() is not called until slides are not defined.
     */
    _setAutoplay: function(autoplay, selected, slides) {
      this.stop();

      if (autoplay && slides) {
        this.play();
      }
    },

    /**
     * Starts the autoplay.
     */
    play: function() {
      if (this._timer || !this.slides || !this.slides.length) {
        return;
      }

      var delay = this.slides[this.selected].delay || this.delay;
      this._timer = setTimeout(this.$.slider.selectNext.bind(this.$.slider), delay);
    },

    /**
     * Stops the autoplay.
     */
    stop: function() {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
    },

    _shouldAnimationPlay: function(index, selected, frozen) {
      return index === selected && !frozen;
    },

    _computeCanvasClass: function(index, selected) {
      return index === selected ? 'fade--in' : '';
    },

    /**
    * Go to the previous slide
    */
    _onPreviousArrowClick: function() {
      this.$.slider.selectPrevious();
    },

    /**
    * Go to the next slide
    */
    _onNextArrowClick: function() {
      this.$.slider.selectNext();
    }

  });

}());
