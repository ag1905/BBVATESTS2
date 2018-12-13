(function() {

  'use strict';

  Polymer({

    is: 'cells-transactions-slider',

    properties: {
      /**
       * Pendings
       */
      pendings: Array,
      /**
       * Expireds
       */
      expireds: Array,
      /**
       * Rejects
       */
      rejects: Array,
      /**
       * Section selected
       */
      selected: {
        type: Number,
        observer: '_goToSection'
      },
      /**
       * Types of mobile transfer
       */
      types: {
        type: Array,
        value: function() {
          return ['pendings', 'expireds', 'rejects'];
        }
      },
      /**
       * Skelenton items
       */
      skeletonItems: Number,
      /**
       * Image url
       */
      imageEmptyList: {
        type: String,
        value: ''
      },
      /**
       * Spinner
       */
      spinner: Boolean,
      /**
       * Loaded pendings request
       */
      loadedPendings: Boolean,
      /**
       * Loaded expireds request
       */
      loadedExpireds: Boolean,
      /**
       * Loaded rejects request
       */
      loadedRejects: Boolean,
      /**
       * Local currency
       */
      localCurrency: String,
      /**
       * Transaction group format
       */
      transactionGroupDateFormat: String,
      /**
       * Show decimals in amount
       */
      decimalsHidden: {
        type: Boolean,
        value: false
      }
    },

    /**
     * Reset
     */
    reset: function() {
      this.set('pendings', undefined);
      this.set('expireds', undefined);
      this.set('rejects', undefined);
      this.selected = 0;
      this.spinner = false;
      this.loadedPendings = false;
      this.loadedRejects = false;
      this.loadedExpireds = false;
    },
    /**
     * Get more transactions
     */
    getMoreTransactionSelected: function() {
      this.dispatchEvent(new CustomEvent('get-more-transfers', {
        bubbles: true,
        composed: true,
        detail: this.selected
      }));
    },
    /**
     * Set more value of type
     */
    setMoreTransactions: function(payload) {
      var type = this.types[this.selected];

      if (!this[type]) {
        this.set(type, []);
      }

      this.set(type, this[type].concat(payload));
    },
    /**
     * On fetch data
     */
    fetch: function() {
      this.loadedPendings = false;
      this.loadedRejects = false;
      this.loadedExpireds = false;
    },
    /**
     * Go to section
     */
    _goToSection: function(selected) {
      this.$.slider.goto(selected);
    },
    /**
     * Checked transactions
     */
    _checkedTransactions: function(transactions) {
      return transactions && transactions.length;
    }
  });
}());