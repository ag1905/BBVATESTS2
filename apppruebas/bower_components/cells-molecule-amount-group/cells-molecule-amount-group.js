(function() {

  'use strict';

  Polymer({

    is: 'cells-molecule-amount-group',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],
    properties: {
      /**
      * Amounts from DM
      */
      amounts: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /**
      * Max amount
      */
      maxAmount: {
        type: Number
      },

      /**
      * Currencies
      */
      currencyCode: {
        type: String
      },

      localCurrency: {
        type: String
      },

      /**
      * Not enougth balance message
      */
      errorMessage: {
        type: String
      },

      /**
      * Control if available balance is not enougth
      */
      overcomeBalance: {
        type: Boolean,
        value: false
      },

      /**
      * Last payable amount
      */
      overcomeAmount: Number,

      /**
      * Reset warning amount message
      */
      resetWarningMessage: {
        type: Boolean,
        computed: '_updateWarningStatus(maxAmount)'
      }
    },

    /**
     * Dispatch select amount
     */
    _selectedAmount: function(ev) {
      ev.preventDefault();
      this.dispatchEvent(new CustomEvent('selected-amount', {
        detail: ev.model.item,
        bubbles: true,
        composed: true
      }));
    },

    /**
    * Order amounts links value
    */
    _sort: function(a, b) {
      if (a === b) {
        return 0;
      }
      return a < b ? -1 : 1;
    },

    /**
    * Change class depending amount value
    */
    calculateSize: function(size) {
      return size < 100 ? 'little' : 'medium';
    },

    /**
    * Disable the  amount button if value is more than maxAmount
    */
    checkAmounts: function(amount, maxAmount, index) {
      var result = amount > maxAmount;
      if (result) {
        if (!this.overcomeAmount) {
          this.overcomeAmount = this.amounts[index - 1];
          this.errorMessage = this.t('cells-enter-amount-warning') + ' ' + this.overcomeAmount;
        }

        if (!this.overcomeBalance) {
          this.overcomeBalance = true;
        }
      }
      return result;
    },

    /**
    * Update warning message
    */
    _updateWarningStatus: function() {
      this.overcomeAmount = null;
      this.overcomeBalance = false;
      return true;
    }
  });

}());
