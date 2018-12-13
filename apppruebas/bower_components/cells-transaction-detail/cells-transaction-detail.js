(function() {
  /* global CellsBehaviors */
  'use strict';

  Polymer({

    is: 'cells-transaction-detail',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Transaction
       * @type {Object}
       */
      transaction: {
        type: Object,
        observer: '_setLoaded'
      },
      /**
       * Local currency
       * @type {String}
       */
      localCurrency: String,
      /**
       * Loaded data
       * @type {Boolean}
       */
      loaded: {
        type: Boolean,
        value: false
      },
      /**
       * Number of skeleton items
       * @type {Number}
       */
      skeletonItems: {
        type: Number,
        value: 4
      },
      /**
       * Images of types
       * @type {Object}
       */
      images: Object,
      /**
       * Show status
       * @type {Boolean}
       */
      showStatus: Boolean,
      /**
       * Show operations
       * @type {Boolean}
       */
      showOperations: Boolean,
      /**
       * Show notification
       * @type {Boolean}
       */
      showNotification: Boolean
    },

    reset: function() {
      this.loaded = false;
      this.transaction = null;
    },

    _setLoaded: function(transaction) {
      if (transaction) {
        this.loaded = true;

        if (transaction.data) {
          this.showOperations = transaction.data.showOperations;
          this.showNotification = transaction.data.showNotification;
        }
      }
    },

    _getImage: function(type) {
      return this.images && this.images[type] || '';
    },

    _onClickStatusIcon: function() {
      this.dispatchEvent(new CustomEvent('on-click-status-icon', {
        bubbles: true,
        composed: true
      }));
    },

    _generateSkeletonItems: function(skeletonItems) {
      return Array.from(Array(skeletonItems), function(_, items) {
        return items;
      });
    }
  });
}());
