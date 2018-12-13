/* global CellsBehaviors */
(function() {
  'use strict';

  Polymer({

    is: 'cells-transactions-list',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Loaded content
       * @type  {Boolean}
       */
      loaded: {
        type: Boolean,
        value: false,
        notify: true
      },
      /**
       * Use the avatar-item component in repeat
       * @type  {Boolean}
       */
      avatarItem: {
        type: Boolean,
        value: false
      },
      /**
       * Product type
       * @type  {String}
       */
      productType: String,
      /**
       * Key of header title list
       * @type  {String}
       */
      title: String,
      /**
       * Product #ID# | Just for navigation, leave blank or empty if not required.
       * @type  {String}
       */
      productId: String,
      /**
      * Transactions to display
      * @type {Array}
      * @private
      */
      _transactions: {
        type: Array
      },
      /**
      * Transactions
      * @type {Array}
      */
      transactions: {
        type: Array,
        observer: '_pushTransactions'
      },
      /**
      * Transactions will shown in chunks of pagination's value
      * @type {Number}
      */
      pagination: {
        type: Number,
        value: 20
      },
      /**
      * Number of skeleton items
      */
      skeletonItems: Number,
      /**
       * Local currency
       * @type  {String}
       */
      localCurrency: {
        type: String,
        value: 'EUR'
      },
      /**
       * Disable view all button
       * @type  {Boolean}
       */
      disableViewAll: Boolean,
      /**
       * Show spinner
       * @type  {Boolean}
       */
      spinner: {
        type: Boolean,
        value: false
      },
      /**
       * Has transactions
       * @type  {Boolean}
       */
      _hasTransactions: {
        type: Boolean,
        value: false
      },
      /**
       * Message empty tranactions
       * @type  {Boolean}
       */
      _messageEmptyList: {
        type: String
      },
      /**
       * Image url
       * @type {String}
       */
      imageEmptyList: {
        type: String,
        value: ''
      },
      /**
       * Not show the message empty list
       * @type {Boolean}
       */
      disableMessageEmpty: {
        type: Boolean,
        value: false
      },
      /**
       * Navigation to continued page
       */
      continue: String,
      /**
       * Navigation to continued page
       * default: DD MMMM
       */
      transactionGroupDateFormat: String,
      /**
       * Show button to start new operation in empty list
       * @type {Boolean}
       */
      showNewOperationButton: {
        type: Boolean,
        value: false
      },
      /**
       * Show decimals in amount
       * @type {Boolean}
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
      this.set('_transactions', null);
      this.set('loaded', false);
      this.spinner = false;
    },
    /**
    * Handles when the view is on the bottom of the page
    */
    onScrollBottom: function() {
      this.spinner = true;
      this.fire('get-more-transactions');
    },
    /**
    * Notify view all transactions
    */
    _notifyViewAll: function() {
      var params = {};

      if (this.productId) {
        params.productId = this.productId;
      }

      if (this.productType) {
        params.productType = this.productType;
      }

      this.fire('view-all-transactions', params);
    },
    /**
    * Checked set transactions
    */
    _pushTransactions: function(transactions) {
      if (Array.isArray(transactions)) {
        if (transactions.length) {
          this.set('_hasTransactions', true);
          this.set('_transactions', transactions);
        } else {
          this._setMessageEmptyList();
          this.set('_hasTransactions', false);
        }
        this.loaded = true;
        this.spinner = false;
      }
    },
    /**
    * Notify in tap transaction
    */
    _onTransactionTap: function(ev) {
      var params = {
        transactionId: ev.model.transaction.id
      };

      if (this.productId) {
        params.productId = this.productId;
      }

      if (this.continue) {
        params.continue = this.continue;
      }

      this.fire('transaction-tap', params);
    },
    /**
    * Set empty Message
    */
    _setMessageEmptyList: function() {
      this.set('_messageEmptyList', 'cells-transactions-list-empty' + (this.productType ? '-product-' + this.productType : ''));
    },
    /*
    * Generate array to render skeleton items
    */
    _generateSkeleton: function(skeletonItems) {
      return Array.from(Array(skeletonItems), function(_, items) {
        return items;
      });
    },
    /*
    * Checked pagination and disable to show view all button
    */
    _checkedViewAll: function(pagination) {
      return pagination <= (this.transactions && this.transactions.length) && !this.disableViewAll;
    },
    /*
    * Checked message it's disabled
    */
    _checkedMessageEmpty: function(_hasTransactions, disabled) {
      return !_hasTransactions && !disabled;
    },
    /*
    * Fire event when button in empty list is clicked
    */
    _startNewOperation: function() {
      this.dispatchEvent(new CustomEvent('start-new-operation', {
        bubbles: true,
        composed: true,
        detail: {
          continue: this.continue
        }
      }));
    }
  });
}());