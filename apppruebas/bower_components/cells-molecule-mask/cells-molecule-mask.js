Polymer({

  is: 'cells-molecule-mask',

  behaviors: [
    CellsBehaviors.i18nBehavior
  ],

  properties: {

    /**
    * Number to be masked
    * @type {String}
    */
    value: {
      type: String
    },

    /**
    * Chars with to mask the number
    * @type {String}
    */
    maskChars: {
      type: String,
      value: '*'
    },

    /**
    * Amount of chars of 'value' NOT be masked
    * @type {Number}
    */
    visibleChars: {
      type: Number,
      value: 4
    },

    /**
    * Icon (code) to display when number is masked
    * @type {String}
    */
    iconMasked: {
      type: String,
      value: null
    },

    /**
    * Icon (code) to display when number is NOT masked
    * @type {String}
    */
    iconNotMasked: {
      type: String,
      value: null
    },

    /**
    * Icon size (8 to 64, only even numbers)
    * @type {String}
    */
    iconSize: {
      type: Number,
      value: 16
    },

    /**
    * If true, then value is masked
    * @type {Boolean}
    */
    masked: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      notify: true
    },

    /**
    * Icons only displayed if both icons defined (not falsy)
    * @type {Boolean}
    */
    _iconHidden: {
      type: Boolean,
      computed: '_computeIconHidden(iconMasked, iconNotMasked)'
    },

    /**
    * Handles if the icon should be displayed or not (true if displayed)
    * @type {String}
    */
    _displayedIcon: {
      type: String,
      computed: '_displayedIconComputed(masked, iconMasked, iconNotMasked)'
    },

    /**
    * Displayed number
    * @private
    * @type {String}
    */
    _displayedValue: {
      type: String,
      computed: '_displayedValueComputed(masked, maskChars, visibleChars, value)'
    },

    _buttonLabel: {
      type: String,
      computed: '_computeButtonLabel(masked)'
    },

    /**
     * Displayed mask chars
     * @private
     * @type {String}
     */
    _displayedMask: {
      type: String,
      value: ''
    }

  },

  _displayedIconComputed: function(masked, iconMasked, iconNotMasked) {
    return masked ? iconMasked : iconNotMasked;
  },

  _displayedValueComputed: function(masked, maskChars, visibleChars, value) {
    var displayedValue;

    if (masked) {
      displayedValue = this._getMaskedValue(value, visibleChars);
      this._displayedMask = maskChars;
    } else {
      displayedValue = value;
    }

    return displayedValue;
  },

  _computeButtonLabel: function(masked) {
    return masked ? 'cells-molecule-mask-unmask' : 'cells-molecule-mask-mask';
  },

  _getMaskedValue: function(value, visibleChars) {
    value = value.toString();
    return value.substr(value.length - visibleChars);
  },

  _computeIconHidden: function(iconMasked, iconNotMasked) {
    return (iconMasked && iconNotMasked) ? false : true;
  },

  /**
  * Switches between showing or masking the number
  * @method _onClickIcon
  */
  _onClickIcon: function() {
    this.masked = !this.masked;
  }

});
