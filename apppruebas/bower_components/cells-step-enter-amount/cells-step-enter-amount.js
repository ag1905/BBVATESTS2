/* global CellsBehaviors */

(function() {

  'use strict';

  Polymer({

    is: 'cells-step-enter-amount',

    behaviors: [
      CellsBehaviors.StepBehavior,
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Amount set in the input from the outside.
       */
      defaultValue: {
        type: Number
      },
      /**
       * Output amount entered.
       * Setted when press the button and input is valid.
       */
      value: {
        type: Number,
        notify: true
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
       * Amount
       */
      _amount: {
        type: Number
      },
      /**
       * ISO 4217 code for the currency
       */
      currency: {
        type: String
      },
      inputCurrency: {
        type: String,
        computed: '_onCurrencyChanged(currency, amountConfig.currency)'
      },
      /**
       * ISO 4217 code for the local currency
       */
      localCurrency: {
        type: String
      },
      /**
       * The icon code of the icon-set. View documentation for the icon component
       */
      iconCode: {
        type: String,
        value: 'coronita:close'
      },
      /**
       * The icon size of the icon. View documentation for the icon component
       */
      iconSize: {
        type: String,
        value: 'icon-size-18'
      },
      /**
       * Language for the currency
       */
      language: {
        type: String
      },
      /**
       * Name required in amount component
       * Mandadatory and needs to be unique to avoid conflicts with cleave.js
       */
      name: {
        type: String,
        value: 'stepEnterAmount'
      },
      /**
       * Is valid property
       */
      _isValid: {
        type: Boolean,
        value: false
      },
      /**
       * Max limit for the operation.
       * Optional
       */
      maxLimit: {
        type: Number
      },
      /**
       * Min limit for the operation.
       * Optional
       */
      minLimit: {
        type: Number
      },
      /**
       * Max Product for the operation.
       * Optional
       */
      maxProduct: {
        type: Number
      },
      /**
       * Range in limit amount
       * Optional
       */
      range: {
        type: Boolean
      },
      /**
       * Used in cardless Withdrawal to select amount only that if multiple
       * of this number because money is retired in ATM's
       */
      multiple: {
        type: Number
      },
      /**
       * If the limits info should be hidden
       */
      hideLimitsInfo: {
        type: Boolean,
        value: false
      },
      /**
       * Show graph or input enter amount
       */
      graphMode: {
        type: Boolean,
        value: false
      },
      /**
       * Amounts from service
       */
      amounts: {
        type: Array
      },
      /**
       * min account balance
       */
      minProductBalance: {
        type: Number,
        notify: true
      },
      /**
       * If the available balance should be hidden
       */
      hideAvailableBalance: {
        type: Boolean,
        value: false
      },
      /**
       * If the messsage shown is the default message when the amount is over the balance
       */
      simpleMaxProductMessage: {
        type: Boolean,
        value: false
      },
      /**
       * Object that contains info about if the switch is shown and witch is the amount currency
       */
      amountConfig: {
        type: Object,
        value: {
          show: false,
          currency: ''
        }
      },
      /**
       * step state
       */
      stepState: {
        type: String,
        computed: 'onStepStateChanges(active)'
      },
      /**
       * Allow only positive amounts values
       */
      numeralPositiveOnly: {
        type: Boolean,
        value: false
      },
      /**
       * Max characters amount input allowed
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
      }
    },

    listeners: {
      'change-pressed': '_onChangePressed',
      'selected-amount': 'sendAmount',
      'amount-set': 'sendAmount',
      'currency-switch-changed': '_oncurrencySwitchChanged'
    },

    /**
     * Observes if button step change is pressed.
     */
    _onChangePressed: function() {
      this.openAmountStep();
      this.dispatchEvent(new CustomEvent('change-step-state', {
        detail: this,
        bubbles: true,
        composed: true
      }));
    },
    /**
     *  Close step
     */
    close: function() {
      if (this.isValid()) {
        this.sendAmount({
          detail: this._amount
        });
      }
    },
    /**
     * Checks whether the user has set a valid input
     * @override
     */
    isValid: function() {
      return !!this._amount;
    },
    /**
     * @override
     * @desc resets the component's state
     */
    reset: function() {
      this.defaultValue = null;
      this.value = '';
      this._amount = '';
      this._isValid = false;
      this.maxProduct = null;

      var amountNode = this.$.stepContainer && this.$.stepContainer.querySelector('#cellsEnterLimitedAmount');
      if (amountNode) {
        amountNode.reset();
      }
    },
    /**
     * Behavior when button is pressed.
     * Set amount to filled status.
     * Toggle step.
     * Status active to true.
     * @param evt {Event} Click event
     */
    sendAmount: function(evt) {
      var outputAmount = (evt || {}).detail || { amount: this._amount, currency: this.currency };
      this.set('collapsed', true);
      this.set('value', outputAmount.amount || outputAmount);
      this.set('_amount', outputAmount.amount || outputAmount);
      this.set('currency', outputAmount.currency);
      this.set('_isValid', true);
      this.dispatchEvent(new CustomEvent('send-step-amount-value', {
       bubbles: true,
       composed: true
      }));
    },
    /**
     * Notify event on limit exceeded
     */
    _fireLimitExceeded: function(payload) {
      this.dispatchEvent(new CustomEvent('amount-limit-exceeded', {
        bubbles: true,
        composed: true
      }));
      this.set('_amount', payload.detail);
    },
    /**
     * Notify event on remain exceeded
     */
    _fireRemainExceeded: function(payload) {
      this.dispatchEvent(new CustomEvent('amount-remain-exceeded', {
        bubbles: true,
        composed: true
      }));
      this.set('_amount', payload.detail);
    },
    /**
     * On focus input
     */
    focus: function() {
      if (this.$.cellsEnterLimitedAmount) {
        this.$.cellsEnterLimitedAmount.focus();
      }
    },

    onStepStateChanges: function() {
      return (this.active) ? 'step-active' : 'step-inactive';
    },

    /**
     * Observer executed when currency changes
     */
    _onCurrencyChanged: function(currency, amountConfigCurrency) {
      return amountConfigCurrency || currency;
    },

    _oncurrencySwitchChanged: function(value) {
      this.dispatchEvent(new CustomEvent('currency-switch-changed', { detail: value }));
    },

    /**
     * Open the amount step
     */
    openAmountStep: function() {
      this.set('value', '');
      this.set('collapsed', false);
      this.set('active', true);
    },

    maxAvailableBalance: function(balance) {
      if (balance) {
        this.set('minProductBalance', balance.primaryAmount.amount);
      }
    }
  });
}());