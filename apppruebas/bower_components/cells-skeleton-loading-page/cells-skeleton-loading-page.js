(function() {

  'use strict';

  Polymer({

    is: 'cells-skeleton-loading-page',

    properties: {
      /**
       * Displays to full screen.
       */
      visible: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_visibleObserver'
      },

      /**
       * Set to true to disable the childrens animation.
       */
      pauseAnimation: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to disable the sequential entry animation for childrens (from bottom to top).
       */
      noEntryAnimation: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Repeat skeleton groups n times.
       */
      repeat: {
        type: Number,
        value: 4
      },

      /**
       * Wait ms to hide the page.
       */
      delay: {
        type: Number
      },

      _i: {
        type: Number,
        value: 0
      },

      _isAnimating: {
        type: Boolean,
        value: false,
        observer: '_isAnimatingChanged'
      },

      _queueVisible: {
        type: Boolean,
        value: false
      },

      _animationPaused: {
        type: Boolean,
        computed: '_computeAnimationPaused(visible, pauseAnimation)'
      }
    },

    attached: function() {
      this.listen(this, 'transitionend', '_onTransitionEnd');
    },

    detached: function() {
      this.unlisten(this, 'transitionend', '_onTransitionEnd');
    },

    /**
     * Sets visible to true
     */
    show: function() {
      this.visible = true;
    },

    /**
     * Sets visible to false
     */
    hide: function() {
      this.visible = false;
    },

    /**
     * Queue the visibility
     * @param  {Boolean} value Set to true to queue n times the visibility property or false to dequeue the visibility.
     */
    queue: function(value) {
      /* istanbul ignore next */
      if (value) {
        this._i++;
        this.visible = true;
      } else {
        if (this._i - 1 <= 0) {
          this.visible = false;
        } else {
          this._i--;
        }
      }
    },

    _count: function(repeat) {
      return Array.apply(undefined, { length: repeat });
    },

    _visibleObserver: function(visible) {
      /* istanbul ignore if */
      if (this._isAnimating) {
        this._queueVisible = true;
      } else {
        if (visible) {
          this.debounce('fade-in', function() {
            this._queueVisible = false;
            this._isAnimating = true;
            this._show();
          }, this.delay);
        } else {
          this.cancelDebouncer('fade-in');
          this._hide();
        }
      }
    },

    /**
     * Fired after displaying the skeleton.
     * @event open
     */
    _show: function() {
      this.dispatchEvent(new CustomEvent('open', {
        bubbles: true,
        composed: true
      }));
    },

    /**
     * Fired after hiding the skeleton.
     * @event close
     */
    _hide: function() {
      this._i = 0;
      this.dispatchEvent(new CustomEvent('close', {
        bubbles: true,
        composed: true
      }));
    },

    /**
     * Disables the children animation if visible is false or pauseAnimation is true
     */
    _computeAnimationPaused: function(visible, pauseAnimation) {
      return visible === false || pauseAnimation ? true : false;
    },

    _isAnimatingChanged: function(animating) {
      /* istanbul ignore next */

      if (this._queueVisible) {
        if (this.visible) {
          this._show();
        } else {
          this._hide();
        }
      }
    },

    _onTransitionEnd: function(e) {
      /* istanbul ignore next */
      var event = Polymer.dom(e);
      /* istanbul ignore next */
      var delay = parseInt(this.getComputedStyleValue('--cells-skeleton-loading-page-delay')) + 30;

      /* istanbul ignore if */
      if (event.rootTarget.tagName === 'CELLS-SKELETON-GROUP' || e.eventPhase === Event.AT_TARGET) {
        this.cancelDebouncer('fade-out');

        // Intento esperar 100ms desde el último transitionend
        // mío o de mis hijos directos para considerar que no
        // estoy animandome.

        this.debounce('fade-out', function() {
          this._isAnimating = false;
        }, delay);
      }
    }

  });

}());
