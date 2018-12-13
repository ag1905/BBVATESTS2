(function() {


  Polymer({
    is: 'cells-input-slider',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Stores the position of the slider
       */
      sliderValue: {
        type: Number,
        notify: true,
        observer: '_sliderObserver'
      },
      /**
       * The label displayed under the slider on the right to display its final value
       */
      endLabel: {
        type: String
      },
      /**
       * The 'title' of the slider
       */
      title: {
        type: String
      },
      /**
       * The 'unit' of the value (usually in plural form)
       */
      unit: {
        type: String
      },
      /**
       * When needed, the 'unit' of the value in its singular form (example: 0 euros, 774 euros, but 1 *euro*)
       */
      singleUnit: {
        type: String
      },
      /**
       * The minimal possible value for the slider
       */
      min: {
        type: Number,
        value: 0
      },
      /**
       * The maximal possible value for the slider
       */
      max: {
        type: Number,
        value: 1
      },
      /**
       * The step (i.e. granularity) of the slider
       */
      step: {
        type: Number,
        step: 1
      },
      /**
       * The value of the slider, displayed on its left
       */
      counter: {
        type: String
      },
      tag: {
        type: String
      },
      /**
       * A boolean value to detect wether the slider has actually been moved or not
       */
      dirty: {
        type: Boolean,
        value: false,
        notify: true
      },
      /**
      * Hide / Show slider control (false by default)
      */
      hideSlider: {
        type: Boolean,
        value: false
      },
      /**
      * Hide / Show counter and unit (false by default)
      */
      hideValue: {
        type: Boolean,
        value: false
      },
      /**
      * Hide / Show timeline title and slider value (false by default)
      */
      hideTimeline: {
        type: Boolean,
        value: false
      },
      /**
       * Hide / Show timeline title and slider value (false by default)
       */
      hideTitle: {
        type: Boolean,
        value: false
      },
      /**
      * List of snaps (points of timeline or scale)
      */
      snaps: {
        type: Array,
        value: []
      },
      /**
       * True for refresh slider label on the move.
       */
      liveLabel: {
        type: Boolean,
        value: false
      },

      /**
       * List of allowed values
       */
      arrayValues: {
        type: Array
      },

      /**
       * Set numeric parsing
       */
      parseNumericValues: {
        type: Boolean,
        value: false
      },

      /**
       * Default value to display when slider is pristine
       */
      valueOnPristine: {
        type: String,
        value: '',
        notify: true
      }
    },

    /**
     * Shows the counter
     */
    _getCounter: function(counter, dirty, valueOnPristine) {
      if (dirty === false && !!valueOnPristine) {
        return valueOnPristine;
      }
      return counter;
    },
    /**
     * This observer updates all the indicators of the slider
     */
    _parsePercentages: function(p) {
      if (!this.parseNumericValues) {
        return p;
      }
      
      const n = String(p).split(/[\s%]+/).map(e => e.replace(',', '.')).find(e => !isNaN(e));
      return n === undefined ? p : n.replace('.', ',');
    },
    _sliderObserver: function(value, old_value) {
      if (value !== old_value && old_value != undefined) {
        this.dirty = true;
      }
      if (this.singleUnit && this.singleUnit !== '' && this._parsePercentages(value) === 1) {
        this.counter = 1;
        this.tag = this.singleUnit;
      } else {
        this.counter = this._parsePercentages(value);
        this.tag = this.unit;
      }

      this.counter = (this.arrayValues) ? this._parsePercentages(this.arrayValues[value]) : this.counter;

      this.dispatchEvent(new CustomEvent('current-slider-value', {
        detail: value,
        bubbles: true,
        composed: true
      }));
    },

    _getSnapText: function(i) {
      return (this.arrayValues) ? this.arrayValues[i] : i;
    },

    ready: function() {
      if (this.arrayValues) {
        this.step = 1;
        this.min = 0;
        this.max = this.arrayValues.length - 1;
        this.snaps = Array.from(Array(this.arrayValues.length).keys());
        if (this.sliderValue === undefined) {
          this.sliderValue = 0;
        }
      }
    }
  });
}());

