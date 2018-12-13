/* global CellsBehaviors */
(function() {

  'use strict';

  Polymer({

    is: 'cells-step-enter-amount-credit-card',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.StepBehavior
    ],

    properties: {
      /**
       * Name required in amount component
       * Mandadatory and needs to be unique to avoid conflicts with cleave.js
       * @type {String}
       */
      name: {
        type: String,
        value: 'stepEnterAmountCreditCard'
      },
      /**
       * Payment method
       * @type {Object}
       */
      paymentMethod: Object,
      /**
       * Limit of amount account selected
       * @type {Number}
       */
      maxLimit: Number,
      /**
       * Title of step
       * @type {String}
       */
      title: {
        type: String,
        value: 'cells-step-enter-amount-credit-card'
      },
      /**
       * Format date
       * @type {String}
       */
      formatDate: {
        type: String,
        value: 'DD MMM YYYY'
      },
      /**
       * Show notification
       * @type {Boolean}
       */
      notification: {
        type: Boolean,
        computed: '_checkedOverdrafts(paymentMethod, maxLimit)',
        observer: '_onNotificationChange'
      },

      showNotification: {
        type: Boolean,
        value: false
      },

      /**
       * Amount selected
       * @type {Object}
       */
      selected: {
        type: Object,
        notify: true
      },
      /**
       * Currency code of source
       * @type {String}
       */
      currency: String,
      /**
       * Local currency
       * @type {String}
       */
      localCurrency: String,
      /**
       * Reset amount on change pressed
       * @type {Boolean}
       */
      resetAmountOnChange: Boolean
    },

    listeners: {
      'stepContainer.change-pressed': '_onChangeProduct'
    },

    reset: function() {
      this.set('maxLimit', null);
      this.set('paymentMethod', null);
    },

    /**
    * Remove selected previous amount value
    */
    resetSelectedAmount: function() {
      this.selected = null;
      this.collapsed = false;
    },

    /**
     * Close step on select recipient
     */
    closeStep: function() {
      this.set('collapsed', true);
      this.set('active', true);
      this.set('decorated', false);
    },

    /**
     * @override
     * @desc checks whether the user has set a valid input
     */
    isValid: function() {
      return !!this.selected;
    },

    _onChangeProduct: function() {
      if (this.resetAmountOnChange) {
        this.dispatchEvent(new CustomEvent('clean-amount', {
          bubbles: true,
          composed: true
        }));
        this.selected = null;
      }

      this.set('collapsed', false);
    },

    _notifyAmountSelected: function(ev) {
      this.selected = ev.model && ev.model.__data__ ? ev.model.__data__.item : ev;
      this.dispatchEvent(new CustomEvent('selected-amount', {
        detail: this.selected,
        bubbles: true,
        composed: true
      }));
      this.closeStep();
    },

    _notifyAmountHelp: function(ev) {
      var type = ev.model && ev.model.item && ev.model.item.id.replace(/_/g, '-').toLocaleLowerCase();
      this.dispatchEvent(new CustomEvent('on-click-help-amount-' + type, {
        bubbles: true,
        composed: true
      }));
    },

    setOtherAmount: function(amount) {
      this._notifyAmountSelected({
        key: 'cells-step-enter-amount-credit-card-other-amount',
        amount: {
          amount: amount,
          currency: this.currency
        }
      });
    },

    _notifyOtherAmount: function() {
      this.dispatchEvent(new CustomEvent('on-click-other-amount', {
        bubbles: true,
        composed: true
      }));
    },

    _checkedMaxLimit: function(amount, limit) {
      return amount > limit && !this.notification && this.selected;
    },

    _checkedOverdrafts: function(paymentMethod, maxLimit) {
      if (paymentMethod && paymentMethod.amounts && paymentMethod.amounts.length && maxLimit) {
        var amounts = paymentMethod.amounts.filter(function(item) {
          return item.amount.amount < maxLimit;
        }.bind(this)) || [];
        return amounts.length === 0;
      }

      return false;
    },

    _checkedMinPayment: function(payment, limit) {
      return payment.id === 'MINIMUM_AMOUNT' && (payment.amount && payment.amount.amount < limit || this.notification);
    },

    _checkedNotification: function(notification) {
      return notification ? 'disabled' : '';
    },

    _checkedDisabled: function(amount, limit) {
      return amount === 0 || amount > limit ? 'disabled' : false;
    },

    _onNotificationChange: function(value) {
      this.showNotification = value;
    }
  });
}());