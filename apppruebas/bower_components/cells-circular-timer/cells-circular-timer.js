(function() {

  'use strict';

  Polymer({

    /**
     * Fired when time expires
     * @event on-timeout
     */

    /**
     * Fired when time is about to expire
     * @event on-warning
     */

    is: 'cells-circular-timer',

    properties: {

      /**
       * Determines whether the timer is running
       * @type {Boolean}
       */
      running: {
        type: Boolean,
        value: false,
        readOnly: true,
        notify: true
      },

      /**
       * intervalID created by the call to setInterval() done by _animate()
       * @type {Number}
       */
      _animation: {
        type: Number,
        value: 0
      },

      /**
       * Length of the svg circle
       * @type {Number}
       */
      _circleLength: {
        type: Number,
        value: 0
      },

      /**
       * Waiting time
       * @type {Number}
       */
      timeout: {
        type: Number,
        observer: '_timeoutObserver'
      },

      /**
       * Private copy of waiting time
       * @type {Number}
       */
      _timeout: {
        type: Number
      },

      /**
      * Reset component timer and restart
      */
      resetTimer: {
        type: Boolean,
        notify: true,
        observer: 'restart'
      },

      /**
       * Waiting time in 0:00 format
       * @type {String}
       */
      _timeoutFormatted: {
        type: String
      },

      /**
       * Remaining time
       * @type {Number}
       */
      _timeLeft: {
        type: Number,
        observer: '_timeLeftObserver'
      },

      /**
       * Class name given to the circle when _timeLeft is below timeWarning
       * @type {String}
       */
      _timeRunningOutClass: {
        type: String
      },

      /**
       * Time when the warning event is fired
       * @type {Number}
       */
      timeWarning: {
        type: Number,
        value: 10000
      },

      /**
       * Turn off control
       * @type {Boolean}
       */
      off: {
        type: Boolean,
        value: false
      },

      /**
       * Determines if the circle goes from full to empty or the other way around
       * @type {Boolean}
       */
      fillUp: {
        type: Boolean,
        value: false
      },

      /**
       * Determines if the circle changes in the opposite direction of the hands on a clock
       * @type {Boolean}
       */
      counterClockwise: {
        type: Boolean,
        value: false
      },

      /**
       * Determines the value of CSS scaleX property in order to simulate the direction of the change of thecircle
       * @type {Object}
       */
      _reflect: {
        type: Boolean,
        computed: '_computedReflect(counterClockwise, fillUp)'
      },

      /**
      * Enabled / disbable counter animation
      * @type {Boolean}
      */
      disabledAnimation: {
        type: Boolean,
        value: false
      },

      /**
      * stroke-dashoffset, r, cx and cy svg values
      */
      _dashoffset: {
        type: String
      },

      _r: {
        type: Number,
        value: 45
      },

      _cx: {
        type: String,
        value: '50'
      },

      _cy: {
        type: String,
        value: '50'
      }
    },

    attached: function() {
      this.set('_circleLength', this._r * Math.PI * 2);
      this.set('_strokeDasharray', this._circleLength);
      this._setDashOffset();
    },

    /**
     * Initializes the property _timeLeft and starts the timer if off is false
     * @param  {Number} timeout Waiting time
     */
    _timeoutObserver: function(timeout) {
      if (typeof timeout === 'number' && timeout > 0 && timeout % 1000 === 0) {
        this.set('_timeout', timeout);
        this.set('_timeLeft', timeout);
        this._setDashOffset();
        if (!this.off) {
          this.start();
        }
      } else {
        this.dispatchEvent(new CustomEvent('error-time-out-format', {
          bubbles: true,
          composed: true
        }));
      }
    },

    /**
     * Starts the countdown
     */
    start: function() {
      if (this._timeLeft && !this.running) {
        this._setRunning(true);
        this._animate();
        this.set('_animation', setInterval(this._countDown.bind(this), 1000));
        if (this._timeout < this.timeWarning) {
          this.dispatchEvent(new CustomEvent('on-warning', {
            bubbles: true,
            composed: true
          }));
        }
      }
    },

    /**
     * Resets de countdown
     */
    reset: function() {
      this.stop();
      this.set('_timeLeft', this._timeout);
      this.resetTimer = false;
      this._setDashOffset();
    },

    /**
     * Restarts the countdown
     */
    restart: function() {
      this.reset();
      setTimeout(this.start.bind(this), 1000);
    },

    /**
     * Stops the countdown
     */
    stop: function() {
      this._setRunning(false);
      clearInterval(this._animation);
    },

    /**
     * Updates the time left and animates the circle
     */
    _countDown: function() {
      this._updateTimeLeft();
      if (this._timeLeft === 0) {
        this.stop();
        this.dispatchEvent(new CustomEvent('on-timeout', {
          bubbles: true,
          composed: true
        }));
      } else {
        if (this._timeLeft === this.timeWarning) {
          this.dispatchEvent(new CustomEvent('on-warning', {
            bubbles: true,
            composed: true
          }));
        }
        this._animate();
      }
    },

    /**
     * Decreases the time left
     */
    _updateTimeLeft: function() {
      this.set('_timeLeft', this._timeLeft - 1000);
    },

    /**
     * Animates the circle
     */
    _animate: function() {
      var oneSecondLength = this._circleLength / this._timeout;
      var offset = this.fillUp ? this._timeLeft - 1000 : this._timeout - this._timeLeft + 1000;
      if (!this.disabledAnimation) {
        this.set('_dashoffset', offset * oneSecondLength);
      }
    },

    /**
     * Sets the value of _timeoutFormatted giving it the 0:00 format and the value of _timeRunningOutclass
     * @param  {Numeric} newValue Remaining time value
     */
    _timeLeftObserver: function(newValue) {
      var minutes = Math.trunc(newValue / 1000 / 60);
      var seconds = (newValue / 1000) % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      this.set('_timeoutFormatted', minutes + ':' + seconds);
      this.set('_timeRunningOutClass', newValue <= this.timeWarning ? 'time-running-out' : '');
    },

    /**
     * Computes the value of _reflect
     * @param  {Boolean} counterClockwise Determines if the circle changes in the opposite direction of the hands on a clock
     * @param  {Boolean} fillUp           Determines if the circle goes from full to empty or the other way around
     * @return {Number}                   Value of CSS scaleX property
     */
    _computedReflect: function(counterClockwise, fillUp) {
      return (!counterClockwise && !fillUp) || (counterClockwise && fillUp) ? -1 : 1;
    },

    /**
    * Set stroke-dashoffset when animation and fillUp are enabled
    */
    _setDashOffset: function() {
      if (!this.disabledAnimation) {
        this.set('_dashoffset', this.fillUp ? this._circleLength : 0);
      }
    }
  });
}());

