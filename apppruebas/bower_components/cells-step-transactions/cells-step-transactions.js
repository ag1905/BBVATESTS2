(function() {

  'use strict';

  Polymer({

    is: 'cells-step-transactions',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Opened collapse
       * @type {Boolean}
       */
      opened: {
        type: Boolean,
        value: false
      },
      /**
       * Transactions
       * @type {Array}
       */
      transactions: Array,
      /**
       * Balances amount
       * @type {Object}
       */
      balances: Object,
      /**
       * Error on load content
       * @type {Boolean}
       */
      error: Boolean,
      /**
       * Local currency
       * @type {String}
       */
      localCurrency: String
    },

    /**
     * Reset
     */
    reset: function() {
      this.opened = false;
      this.set('error', undefined);
      this.set('balances', undefined);
      this.set('transactions', undefined);
    },
    /**
     * Toggle opened
     */
    _toggle: function() {
      this.opened = !this.opened;
    },
    /**
    * Notify event on click refresh button
    */
    _refresh: function() {
      this.dispatchEvent(new CustomEvent('refresh-transactions-list'));
    },
    /**
     * Checked transactions
     */
    _checkedTransactions: function(transactions) {
      return transactions && transactions.length;
    },
    /**
     * Checked opened and return class
     */
    _checkedOpened: function(opened) {
      return opened ? 'opened' : '';
    }
  });
}());