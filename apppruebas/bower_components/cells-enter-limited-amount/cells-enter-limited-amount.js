/* global CellsBehaviors */
(function() {

  'use strict';

  Polymer({
    is: 'cells-enter-limited-amount',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Amount set in the input from the outside.
       */
      setAmount: {
        type: Number
      },
      /**
       * Output amount.
       * Not visible
       */
      amount: {
        type: Number,
        observer: '_amountChanged'
      },
      /**
     * Input type config
     */
      type: {
        type: String
      },
      /**
      * Input mode config
      */
      inputMode: {
        type: String
      },
      /**
      * Input pattern validation
      */
      pattern: {
        type: String
      },
      /**
       * Remainig amount
       */
      _remaining: {
        type: Number
      },
      /**
       * Name required in amount component
       * Mandadatory and needs to be unique to avoid conflicts with cleave.js
       */
      name: {
        type: String,
        value: 'enterAmount'
      },
      /**
       * Language for the currency
       */
      language: {
        type: String
      },
      /**
       * ISO 4217 code for the currency
       */
      currencyCode: {
        type: String,
        observer: 'updateCurrencySwitch'
      },
      /**
       * ISO 4217 code for the local currency
       */
      localCurrency: {
        type: String
      },
      /**
       * intial currency value before to be changed
       */
      initialCurrency: {
        type: String
      },
      /**
       * The icon code of the icon-set. View documentation for the icon component
       */
      iconCode: String,
      /**
       * The icon size of the icon. View documentation for the icon component
       */
      iconSize: String,
      /**
       * The icon type of the icon
       */
      iconType: {
        type: String,
        value: 'info'
      },
      /**
      * Icon error css class
      */
      iconErrorClass: String,
      /**
    * Input error css class
    */
      inputErrorClass: String,
      /**
       * Control who actives the button when the amount is correct
       */
      _buttonIsEnabled: {
        type: Boolean,
        value: false
      },
      /**
       * If true, the element is currently disabled.
       */
      disabled: {
        type: Boolean,
        value: false,
        observer: '_disabledChanged'
      },
      /**
       * Min limit for the operation.
       * Optional
       */
      minLimit: Number,
      /**
       * Max number for the operation.
       * Optional
       */
      maxLimit: Number,
      /**
       * When setted, the amount entered should be a multiple of this number
       */
      multiple: Number,
      /**
       * Max product for the operation.
       * Optional
       */
      maxProduct: {
        type: Number,
        value: null,
        observer: '_updateRemaining'
      },
      /**
       * Range enable
       */
      range: {
        type: Boolean,
        value: false
      },
      /**
       * Control if amount is over available amount
       */
      _overAmount: {
        type: Boolean,
        value: false
      },
      /**
       * class to set on remaining text
       */
      remainingClass: {
        type: String,
        value: ''
      },
      /**
       * If the limits info should be hidden
       */
      hideLimitsInfo: {
        type: Boolean,
        value: false
      },
      /**
       * If the available balance should be hidden
       */
      hideAvailableBalance: {
        type: Boolean,
        value: false
      },
      /**
      * Show/hide feedback icon
      */
      hideFeedBackIcon: {
        type: Boolean,
        value: false
      },
      /**
       * If the messsage shown when amount is over the balance is only text
       */
      simpleMaxProductMessage: {
        type: Boolean,
        value: false
      },
      /**
       * Show currency switch
       */
      showCurrencySwitch: {
        type: Boolean,
        value: false
      },
      /**
       * Validate in put
       */
      validateInput: {
        type: Boolean,
        value: true,
        computed: '_computeValidateInput(avoidValidation, initialCurrency, currencyCode)'
      },
      /**
       * If the amount field can be validated.
       */
      avoidValidation: {
        type: Boolean
      },
      /**
       * message Object to show errors
       */
      errorMessage: {
        type: Object,
        value: {
          show: false,
          description: ''
        }
      },
      /**
       * Allow only positive amounts values
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
      },
      /*
       * Translation key for the message after the not enough balance message
       */
      notEnoughBalanceAfterKey: {
        type: String,
        value: 'cells-enter-limited-amount-available-balance-after'
      },
      /**
       * Show style for invalid input
       */
      invalid: {
        type: Boolean,
        value: false
      }

    },

    listeners: {
      'cells-switch-changed': '_onSwitchCurrencyCodeChangedManually'
    },

    /**
     * Resets this enterAmountInput's input value.
     */
    reset: function() {
      this.$.enterAmountInput.reset();
    },

    /**
     * Observes when the output amount changes and validate it.
     * Checks for limits.
     * Checks for available balance.
     * @param {String} amount Output amount
     */
    _amountChanged: function(amount) {
      this._checksIfInputIsFilled(amount || this.amount);

      if (amount && this._validateMultiple(amount) && this.multiple) {
        this._manageMultimpleAmountErrors(true);
      }

      if (!this.range) {
        this._updateRemaining();
        this._updateInfoText();
      } else {
        this._updateRange(amount);
      }
    },

    /**
     * Set remaning value
     */
    _updateRemaining: function() {
      var amount = isNaN(this.amount) ? 0 : this.amount;
      this._remaining = this.maxProduct ? this.maxProduct - amount : null;
    },

    /**
     * Updated info text error
     */
    _updateInfoText: function() {
      this._overAmount = this._remaining < 0;
      this._setErrorMessage(this._overAmount && this.validateInput, 'max-product');
    },

    /**
     * Updated range info text error
     */
    _updateRange: function(amount) {
      if (amount >= 0) {
        var error = false;
        var type;

        if (this.maxLimit && amount > this.maxLimit) {
          error = true;
          type = 'max-limit';
        }

        if (!this._validateMultiple(amount) && amount >= this.minLimit && amount <= this.maxLimit) {
          error = true;
          type = 'multiple';
        }

        if (this.maxProduct && amount > this.maxProduct) {
          error = true;
          type = 'max-product';
        }

        this._setErrorMessage(error && this.validateInput, type);
      }
    },

    /**
     * Observes if input is filled.
     * Enables/disables button.
     * @param {String} amount Entered amount
     */
    _checksIfInputIsFilled: function(amount) {
      this._buttonIsEnabled = !!amount && (!this.validateInput ||
        this.validateInput && this._validateLimits(amount) && this._validateMultiple(amount));
    },

    /**
     * Validate multiple
     */
    _validateMultiple: function(amount) {
      if (this.multiple > 0) {
        return amount % this.multiple === 0;
      } else {
        return true;
      }
    },

    /**
     * Observes if limits changes and validates it.
     * Enables/disables button.
     * @param {String} amount Entered amount
     */
    _validateLimits: function(amount) {
      var valid = !isNaN(amount) && amount > 0;

      if (valid && this.minLimit) {
        valid = valid && amount >= this.minLimit;
      }

      if (valid && this.maxLimit) {
        valid = valid && amount <= this.maxLimit;
      }

      if (valid && this.maxProduct) {
        valid = valid && amount <= this.maxProduct;
      }

      return valid;
    },

    _hideLimits: function(hideLimitsInfo, maxProduct) {
      return hideLimitsInfo || !maxProduct;
    },

    /**
     * Disabled input and button.
     * @param {Boolean} disabled
     */
    _disabledChanged: function(disabled) {
      this.$.enterAmountInput.set('disabled', !!disabled);
      this.set('_buttonIsEnabled', !disabled && this.amount > 0);
    },

    /**
     * dispatch event when the buttos is clicked
     */
    _sendAmountOutput: function() {
      this.dispatchEvent(new CustomEvent('amount-set', {
        bubbles: true,
        composed: true,
        detail: {
          amount: this.amount,
          currency: this.currencyCode
        }
      }));
    },

    /**
     * Get multiple message
     */
    _getMultipleMessage: function(msg) {
      return this.t(msg, '', {
        multiple: this.multiple
      });
    },

    /**
     * On focus
     */
    focus: function() {
      this.$.enterAmountInput.focus();
    },

    /**
     * @return {Boolean} Should hide Available Amount when hideAvailableAmount is true and amount is over the account balance.
     */
    _showAvailableBalance: function(hideAvailableBalance, _overAmount) {
      return !hideAvailableBalance && !_overAmount;
    },

    /**
     * Set message error
     */
    _setErrorMessage: function(show, error) {
      var errorList = {
        'max-product': 'cells-enter-limited-amount-available-balance-default-message',
        'max-limit': 'cells-enter-limited-amount-error-max-limit',
        'multiple': this._getMultipleMessage('cells-enter-limited-amount-multiple-range-error')
      };
      var description = errorList[error];

      this.set('errorMessage.show', show && !!description);
      this.set('errorMessage.description', description);
      this.set('invalid', this.errorMessage.show);
    },

    /**
    * Manage amount no multiple error messages
    */
    _manageMultimpleAmountErrors: function(status) {
      if (this.multiple) {
        var validAmount = this.amount && this.amount + ''.length && this._validateMultiple(this.amount) && status;
        this._setErrorMessage(validAmount, 'multiple');
        this.iconType = validAmount ? 'info' : 'alert';
        this.iconErrorClass = validAmount ? '' : '--invalid';
        this.inputErrorClass = validAmount ? '' : 'cells-enter-limited-amount__txt--negative';
      }
    },

    /**
     * Event fired when the currency code changes
    */
    updateCurrencySwitch: function(currency) {
      this.$.currencySwitch.set('checked', currency === 'USD');
      this._amountChanged(this.amount);
    },

    /**
     * Listener executed when user changes switch value manually.
     */
    _onSwitchCurrencyCodeChangedManually: function(value) {
      if (this.showCurrencySwitch) {
        this.currencyCode = ((value || {}).detail) ? 'USD' : 'PEN';
      }
    },

    /**
     * Checked if has only multiple
     */
    _checkedRange: function(multiple, range) {
      return multiple && !range;
    },

    /**
     * If the initialCurrency has not changed, the amount field can be validated
     */
    _computeValidateInput: function(avoidValidation, initialCurrency, currencyCode) {
      return !avoidValidation && initialCurrency && initialCurrency === currencyCode;
    }
  });
}());