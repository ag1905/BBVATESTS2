(function() {

  'use strict';

  Polymer({

    is: 'cells-modal-select-amount',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.AmountBehavior
    ],

    properties: {
      /**
       * Field value to edit
       * @type {String}
       */
      value: {
        type: Number,
        notify: true,
        observer: '_valueChanged'
      },
      /**
       * Set amount in input
       * @type {Number}
       */
      setAmount: Number,
      /**
       * Field name and input placeholder
       * @type {String}
       */
      placeholder: String,
      /**
       * Header title
       * @type {String}
       * @value Edit
       */
      title: String,
      /**
       * Flags whether the modal is open or not
       * @type {Boolean}
       */
      opened: {
        type: Boolean,
        observer: '_modalStatus',
        value: false
      },
      /**
       * Flags if modal window should close on "closing"
       * @type {Boolean}
       * @value false
       */
      closeOn: {
        type: Boolean,
        value: false
      },
      /**
       * Icon to use into modal's header
       * @type {String}
       * @value 'coronita:close'
       */
      closeIcon: {
        type: String,
        value: 'coronita:close'
      },
      /**
       * Lang separator
       * @type {String}
       */
      language: {
        type: String,
        value: 'es'
      },
      /**
       * Min value length
       * @type {Number}
       * @value 1
       */
      min: Number,
      /**
       * Max value length
       * @type {Number}
       */
      max: Number,
      /**
       * Message of notification
       * @type {String}
       */
      _message: {
        type: String,
        computed: '_setMessage(max, localCurrency, currencyCode)'
      },
      /**
       * Disabled form
       * @type {Boolean}
       */
      disabled: {
        type: Boolean,
        value: true
      },
      /**
       * Currency code
       * @type {String}
       */
      currencyCode: String,
      /**
       * Local currency
       * @type {String}
       */
      localCurrency: String,

      /**
      * Allow only positive amount values
      */
      numeralPositiveOnly: {
        type: Boolean,
        value: false
      }
    },

    listeners: {
      'close': 'reset'
    },

    /**
     * Opens modal
     */
    open: function(payload) {
      if (payload) {
        this.set('value', payload);
      }

      this.set('opened', true);
    },
    /*
    * Notify modal status (close/Opens)
    */
    _modalStatus: function(opened) {
      this.dispatchEvent(new CustomEvent('cells-modal-select-amount-' + (opened ? 'opened' : 'closed'), {
        bubbles: true,
        composed: true
      }));
    },
    /*
    * Set message property
    */
    _setMessage: function(max, localCurrency, currency) {
      var symbol = this._getCurrencyAsSymbol(localCurrency, currency);
      var integer = this._getAbsIntegerPart(max, localCurrency);
      var separator = this._getSeparator(localCurrency);
      var decimal = this._getFractionalPart(max);
      var negative = this._isNegative(max) ? '-' : '';
      var amount = symbol + negative + integer + separator + decimal;

      return this.t('cells-modal-select-amount-message-max') + ' ' + amount;
    },
    /**
     * Closes modal.
     * If property <em>closeOn</em> is set to <b>true</b>, modal will
     * close automatically.
     * In any case, event is fired.
     */
    close: function() {
      this.dispatchEvent(new CustomEvent('cells-modal-select-amount-close', {
        bubbles: true,
        composed: true,
        detail: this.value
      }));

      if (this.closeOn) {
        this.set('opened', false);
        this.reset();
      }
    },
    /**
     * Notify event on save
     */
    continue: function() {
      this.dispatchEvent(new CustomEvent('cells-modal-select-amount-continue', {
        bubbles: true,
        composed: true,
        detail: this.value
      }));
    },
    /**
     * Reset input
     */
    reset: function() {
      this.set('value', '');
      this.$.amount.setAmount = '';
      this.set('setAmount', '');
    },
    /**
     * Observer callback triggered after any change on <em>_value</em>.
     * Will set save button disabled if:
     * - new value equals default value
     * - new value is empty
     * - new value doesn't pass pattern test (if <em>pattern</em> is set)
     * - new value has min and max length requirements (if <em>minLength</em> and/or <em>maxLength</em> are set)
     *
     * @param   value {String} User's input value
     * @private
     */
    _valueChanged: function(value) {
      var isDisabled = !value;
      if (!isDisabled) {
        if (this.min) {
          isDisabled = value < this.min;
        }

        if (this.max >= 0) {
          isDisabled = value > this.max;
        }
      }

      this.set('disabled', isDisabled);
    },
    /**
     * Checked max and consider cero
     */
    _checkedMax: function(max) {
      return max >= 0;
    }
  });
}());
