/* global CellsBehaviors, Cleave */
Polymer({
  is: 'cells-molecule-amount-input',

  behaviors: [
    CellsBehaviors.AmountBehavior
  ],

  properties: {
    /**
     * Amount set in the input from the outside.
     * @type {Number}
     */
    setAmount: {
      type: Number
    },

    /**
     * The formatted amount for the input.
     * Is the value visible in the input.
     * @type {String}
     */
    _formattedAmount: {
      type: String,
      observer: '_formattedAmountObserver'
    },

    /**
     * Output amount.
     * @type {Number}
     */
    amount: {
      type: Number,
      notify: true
    },

    /**
     * Label text of the input
     * @type {String}
     */
    label: String,

    /**
     * Name that maps to HTML native's name attribute (useful for forms).
     * Mandadatory if there are more than one input and needs to be unique to avoid conflicts with cleave.js
     * @type {String}
     */
    name: {
      type: String,
      value: 'amount'
    },

    /**
     * If true, the element currently has focus.
     * Reflect to attribute.
     * @type {Boolean}
     */
    _focused: {
      type: Boolean,
      value: false
    },

    /**
     * Control variable that indicates if input is empty
     * @type {Boolean}
     */
    _isFilled: {
      type: Boolean,
      value: false
    },

    /**
     * If true, the element is disabled.
     * Reflect to attribute.
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, the element is required.
     * Reflect to attribute.
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * The icon code of the icon-set. View documentation for the icon component
     * @type {String}
     */
    iconCode: String,

    /**
     * The icon size of the icon. View documentation for the icon component
     * @type {String}
     */
    iconSize: String,

    /**
     * ISO 4217 code for the currency
     * @type {String}
     */
    currencyCode: String,

    /**
     * ISO 4217 code for the local currency
     * @type {String}
     */
    localCurrency: String,

    /**
     * Language for the currency
     * @type {String}
     */
    language: String,

    /**
     * Behavior function than returns the formmated currency
     * @type {String}
     */
    _currency: {
      type: String,
      computed: '_getCurrencyAsSymbol(localCurrency, currencyCode)'
    },

    /**
     * Controls the currency visibility
     * @type {Boolean}
     */
    _showCurrencies: {
      type: Boolean,
      value: false
    },

    /**
     * IF Enabled the value of the input will change to the output
     * on blur. Turning "0" into "0.00"
     * more info @see tests
     */
    autoFormat: {
      type: Boolean,
      value: false
    },

    /**
     * Stores cleave.js than formats the input
     * @type {Object}
     */
    _cleave: Object,

    /**
     * Store cursor position
     * @type {Number}
     */

    position: {
      type: Number,
      value: 0
    },

    /**
     * If true, the cursor in the following number will move a extra position
     * @type {Boolean}
     */

    addPosition: {
      type: Boolean,
      value: false
    },

    /**
     * If true, a position will be subtracted from the cursor's location
     * @type {Number}
     */

    removePosition: {
      type: Boolean,
      value: false
    },

    /**
    * Allow only positive amounts value
    */
    numeralPositiveOnly: {
      type: Boolean,
      value: false
    },

    /**
    * Limit max number of characters
    */
    max: {
      type: String
    }
  },

  listeners: {
    'input.focus': '_onInputFocus',
    'input.blur': '_onInputBlur',
    'icon.click': '_onIconClick'
  },

  observers: [
    '_setAmountObserver(setAmount, language)'
  ],

  /**
   */
  detached: function() {
    if (this._cleave) {
      this._cleave.destroy();
    }
  },

  /**
   * Reset input
   */
  reset: function() {
    this.set('setAmount', undefined);
    this.set('_formattedAmount', undefined);
  },

  /**
   * Observer for set amount. Activated when amount is set from the outside.
   * Sets _formattedAmount
   * @param {number} amount The amount than is set
   * @param {String} language The language for the currency
   */
  _setAmountObserver: function(amount, language) {
    if (this._isAmountValid(amount) && !!language) {
      amount = this._checksForForeingMarkDecimal(amount);
      this.set('_formattedAmount', amount);
    } else {
      this.reset();
    }
  },

  /**
   * Validates if the amount is valid.
   * Converts it to string.
   * @param {number} number Number to validate
   * @return {boolean} If is amount valid.
   */
  _isAmountValid: function(amount) {
    if (amount) {
      amount = amount.toString();
    }

    return (/^-{0,1}\d*\.{0,1}\d+$/).test(amount);
  },

  /**
   * Validates if the amount is valid.
   * Converts it to string.
   * @param {number} number Number to validate
   * @return {string} amount The amount.
   */
  _checksForForeingMarkDecimal: function(amount) {
    var language = this.language;

    if (language) {
      var decimalMark = this._getSeparator(language);

      amount = amount.toString();

      if (decimalMark !== '.') {
        amount = amount.replace('.', decimalMark);
      }

      return amount;
    }
  },

  /**
   * Observer for formatted amount. Activated when input is filled or amount changes.
   * Formats the input.
   * Place cursor in input.
   * Stores amount, the amount without formatting.
   * Check status
   * @param {string} number Amount
   */
  _formattedAmountObserver: function(amount) {
    this._checksStatus(amount);

    this._placeCursor();

    this._inicializeFormatIntput();

    this._setOutputAmount();
  },

  /**
   * Checks amount and set status.
   * @param {string} number Amount
   */
  _checksStatus: function(amount) {
    this._toggleHasContentClass(true);
    if (amount) {
      this.set('_isFilled', true);
      this.set('_showCurrencies', true);
    } else if (amount === '' || amount === undefined) {
      this.set('_isFilled', false);
      this.set('_showCurrencies', this._focused);
      this._toggleHasContentClass(this._focused);
    }
  },

  /**
   * Stores amount, the raw amount without formatting.
   * Limits the amount to 2 decimals.
   * Fires 'amount-input-changed' event.
   * @event amount-input-changed
   * @param {number} amount The amount than is set
   */
  _setOutputAmount: function() {
    var inputAmount = this._cleave.getRawValue();
    var hasDecimals;
    var amountDecimal;

    if (!isNaN(inputAmount) && inputAmount !== '') {
      amountDecimal = inputAmount.indexOf('.');
      hasDecimals = amountDecimal !== -1;

      if (hasDecimals) {
        inputAmount = inputAmount.slice(0, (amountDecimal) + 3);
      }

      inputAmount = parseFloat(inputAmount);
    } else {
      inputAmount = undefined;
    }

    this.set('amount', inputAmount);
    this.fire('amount-input-changed', inputAmount);
  },

  /**
   * Set cursor position in input
   */
  _placeCursor: function() {

    var amountLength = this.amount ? this.amount.toString().length : '';

    this.set('addPosition', (parseInt(amountLength % 3) === 0) ? true : false);
    this.set('removePosition', (parseInt((amountLength - 1) % 3) === 0) ? true : false);

    var initialPosition = this.$.input.selectionStart;

    if (this.position > initialPosition) {
      this.set('position', this.removePosition ? (initialPosition - 1) : initialPosition);
    } else {
      this.set('position', this.addPosition ? (initialPosition + 1) : initialPosition);
    }

    setTimeout(function() {
      if (this.$.input.selectionStart !== this.$.input.value.length) {
        this.$.input.setSelectionRange(this.position, this.position);
      } else {
        this.$.input.selectionStart = this.$.input.selectionEnd = this.$.input.value.length;
      }
    }.bind(this), 0);
  },

  /**
   * Inicialize cleave.js to format the input whin the correct configuration
   */
  _inicializeFormatIntput: function() {
    var language = this.language;
    if (this._formattedAmount && this.numeralPositiveOnly) {
      if (this._formattedAmount.indexOf('-') > -1) {
        this.set('_formattedAmount', this._formattedAmount.replace(/^-+/, ''));
      }
      if (this._formattedAmount.charAt(0) === ',') {
        this.set('_formattedAmount', this._formattedAmount.replace(/^,+/, '0,'));
      }
    }

    var options = {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      numeralDecimalMark: this._getSeparator(language),
      delimiter: this._getGroupChars(language)
    };

    this._cleave = new Cleave(this.$.input, options);
  },

  /**
   * Method to focus to the input.
   */
  focus: function() {
    this.$.input.focus();
  },

  /**
   * Method to blur at the input.
   */
  blur: function() {
    this.$.input.blur();
  },

  /**
   * Handles a 'click' event on the icon.
   * Reset's the input by cleaning its content.
   * @param {event} e Event
   */
  _onIconClick: function() {
    this.set('_formattedAmount', '');

    this.focus();
  },

  /**
   * Handles a 'input focus' event.
   * @param {event} e Event focus
   */
  _onInputFocus: function() {
    if (!this.disabled) {
      this.set('_focused', true);
      this._checksStatus(this.amount);
    }
  },

  /**
   * Formats the input value into the formatted output
   * @TODO: Spanish from Spain support.
   */
  _autoFormat: function() {
    var stringNumber = (isFinite(this._formattedAmount) ? this._formattedAmount.toString() : this._formattedAmount);
    var noCommas = stringNumber.replace(/,/, '');

    if (!(/^(-?)(\d{0,3},)*\d{1,3}\.\d\d$|^$/).test(this._formattedAmount)) {
      this.set('_formattedAmount', noCommas.replace(/(-?)(\d*)(.?)(\d{0,2})$/, function(full, isNeg, integer, sepparator, decimals) {
        var formattedInt = integer[integer.length - 1];

        while (decimals.length < 2) {
          decimals += '0';
        }

        for (var intX = integer.length - 2, jx = 0; intX >= 0; intX--) {
          if (++jx % 3 === 0) {
            formattedInt = integer[intX] + ',' + formattedInt;
          } else {
            formattedInt = integer[intX] + formattedInt;
          }
        }

        return isNeg + (integer.length === 0 ? '0' : formattedInt) + (sepparator || '.') + decimals;
      }));
    }
  },

  /**
   * Handles a 'input blur' event.
   * @param {event} e Event blur
   */
  _onInputBlur: function(e) {
    e.preventDefault();

    if (this.autoFormat) {
      this._autoFormat();
    }

    this.set('_focused', false);
    this._checksStatus(this.amount);
  },

  /**
   * Toggle the has-content css class in the input
   * @param {Boolean} hasContent Toggle class
   */
  _toggleHasContentClass: function(hasContent) {
    this.toggleClass('has-content', hasContent);
    this.toggleClass('has-content', hasContent, this.$.input);
  }
});
