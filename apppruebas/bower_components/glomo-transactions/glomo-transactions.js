(function() {

  'use strict';

  Polymer({

    is: 'glomo-transactions',

    properties: {
      /**
       * List pending transaction
       * @type {Array}
       */
      pendings: Array,
      /**
       * List setteled transaction
       * @type {Array}
       */
      settleds: Array,
      /**
       * Product Type
       * @type {String}
       */
      productType: String,
      /**
       * Product Id
       * @type {String}
       */
      productId: String,
      /**
       * Image url
       * @type {String}
       */
      imageEmptyList: String,
      /**
       * Show spinner
       * @type  {Boolean}
       */
      spinner: {
        type: Boolean,
        value: false
      },
      /**
       * Skeleton items
       * @type {Number|String}
       */
      skeletonItems: {
        type: Number,
        value: 8
      },
      /**
       * Has pendings transactions
       * @type {Number|String}
       */
      _hasPendings: {
        type: Boolean,
        value: false,
        computed: '_checkedLength(pendings)'
      },
      /**
       * Navigation to continued page
       */
      continue: String,
      /**
       * Local currency
       */
      localCurrency: String,
      /**
       * Format group date
       */
      transactionGroupDateFormat: {
        type: String,
        value: 'DD MMMM'
      }
    },

    /**
    * Reset
    */
    reset: function() {
      this.spinner = false;
      this.set('pendings', undefined);
      this.set('settleds', undefined);
      this.$.pending.reset();
      this.$.settled.reset();
    },

    /**
    * Manage bottom spinner
    */
    manageSpinner: function(status) {
      this.spinner = status;
    },

    /**
    * Added more setteled transaction in list
    */
    addTransactions: function(transactions) {
      if (!this.settleds) {
        this.set('settleds', []);
      }

      if (transactions && transactions.length) {
        this.set('settleds', this.settleds.concat(transactions));
      }
    },

    _checkedLength: function(array) {
      return array && array.length;
    },

    _checkedTransactions: function(pendings, settleds) {
      return pendings && settleds;
    },

    _onlyPendings: function(pendings, settleds) {
      return pendings && pendings.length && settleds && !settleds.length;
    }
  });
}());