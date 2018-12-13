(function() {

  'use strict';

  /**
   * Private class to have x-axis point and left flick status by checking a current and previous position
   */
  var XPoint = function(x) {
    this.updated = false;
    this.x = this._prev = this._origin = x;
    this._timeStamp = (new Date()).getTime();
  };

  XPoint.prototype = {
    TIMER_RESET_THRESHOLD: -5 /* px */,
    VELOCITY_THRESHOLD: -0.2 /* px/ms */,


    distance: function() {
      // distance between touch start and current point
      return this.x - this._origin;
    },

    update: function(x) {
      // reset time stamp at move stop
      if (x - this.x > this.TIMER_RESET_THRESHOLD) {
        this._timeStamp = (new Date()).getTime();
        this._prev = this.x;
      }

      this.x = x;
      this.updated = true;
    },

    isFlick: function() {
      var dt = (new Date()).getTime() - this._timeStamp;
      var dx = this.x - this._prev;

      return (dx / dt) < this.VELOCITY_THRESHOLD;
    }
  };

  var SWIPE_THRESHOLD = -50;
  var TAN_THRESHOLD = 0.15;

  Polymer({

    /**
    * Fired when the swipe is opening
    * @event open-started
    */

    /**
    * Fired when the swipe end toggle transition
    * @event end-toggle
    */

    is: 'cells-left-swipe-action',

    properties: {

      /**
       * When true, the content is opened
       *
       * @attribute open
       * @type boolean
       * @default false
       */
      open: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_openChanged'
      },

      /**
       * If true, drag action is disabled and a content is automatically opened by click/touch
       *
       * @attribute nodrag
       * @type boolean
       * @default false
       */
      nodrag: {
        type: Boolean,
        value: false
      },

      /**
       * Offset pixel position for opened state
       *
       * @attribute offset
       * @type number
       */
      offset: {
        type: Number
      },

      /**
       * If true, box shadow is added
       *
       * @attribute shadow
       * @type boolean
       * @default false
       */
      shadow: {
        type: Boolean,
        value: false
      },

      /**
       * If true, all gestures are disabled
       *
       * @attribute disabled
       * @type boolean
       * @default false
       */
      disabled: {
        type: Boolean,
        value: false,
        observer: '_disabledChanged'
      }

    },

    ready: function() {
      this.applyClass();
      this.transition();

      // allow y scroll on this node but prevent x scroll
      this.setScrollDirection('y', this.$.content);
    },


    /**
     * Handler when releases an element.
     * @param {object} e
     */
    handleUp: function(e) {
      if (this.nodrag) {
        this.toggleOpen();
      } else {
        this.onUp(e);
      }
    },

    /**
     * Handler when presses over an swipe
     * @param {object} e
     */
    handleDown: function(e) {
      this.onDown(e);
    },

    /**
     * Handler that detect the state of swipe
     * @param {object} e
     * @returns state, when is open calls event open-started
     * @returns state, when is end toggle transition calls event end-toggle
     */
    handleTrack: function(e) {
      if (this.disabled) {
        return;
      }
      switch (e.detail.state) {
        case 'start':
          if (!this.open && e.detail.dx < 0) {
            this.fire('open-started');
          }
          break;
        case 'track':
          this.onMove(e);
          break;
        case 'end':
          this.onUp(e);
          this.fire('end-toggle');
          break;
      }
    },

    /**
     * gets the point where presses over an swipe
     * @param {object} e
     */
    onDown: function(e) {
      this.point = new XPoint(e.detail.x);
      this.applyClass();
    },

    /**
     * calcule the distancia between the point up and down
     * @param {object} e
     */
    onMove: function(e) {
      var p = this.point;
      var dx = e.detail.dx;
      var dy = e.detail.dy;
      var tan = dx !== 0 ? dy / dx : TAN_THRESHOLD;
      if (p && (p.updated || Math.abs(tan) < TAN_THRESHOLD)) {
        p.update(e.detail.x);
        this.transition(p.distance());
      }
    },

    /**
     * gets the point where releases over an swipe
     * @param {object} e
     */
    onUp: function(e) {
      var p = this.point;

      if (p) {
        this.open = p.isFlick() || (!this.open && p.distance() < SWIPE_THRESHOLD);
        this.point = null;
        this.applyClass();

        // apply css fixed-true before transition
        this.async(this.transition);
      }
    },

    /**
     * Transalete swipe with the valor of xDrag
     * @param {position} xDrag
     */
    transition: function(xDrag) {
      xDrag = xDrag || 0;
      this._width = this._width || this.$.content.clientWidth;
      Polymer.RenderStatus.afterNextRender(this, function() {
        this.offset = this.offsetWidth / 2;
      });
      var x = this.open ? this.offset - this._width + xDrag : xDrag;

      this.translate3d(Math.min(x, 0) + 'px', 0, 0, this.$.content);
    },

    /**
     * Show or hide swipe
     */
    toggleOpen: function() {
      this.open = !this.open;
      this.transition();
    },

    /**
     * Add initial class for swipe
     */
    applyClass: function() {
      var list = [ 'cells-left-swipe-action swipe-content' ];

      if (this.nodrag || this.point === null) {
        list.push('cubic-bezier');
      }

      if (this.shadow) {
        list.push('shadow');
      }

      this.$.content.className = list.join(' ');
    },

    _disabledChanged: function(oldValue, newValue) {
      if (newValue) {
        this.open = false;
        this.transition();
      }
    },

    _openChanged: function(value, newValue) {
      if (newValue !== undefined) {
        this.transition();
      }
    }
  });
}());
