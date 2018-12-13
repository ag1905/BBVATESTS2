/* global CellsBehaviors */
(function() {
  'use strict';

  Polymer({
    is: 'cells-button-navigate-transactions',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Product CDM
       * @type {Object}
       */
      product: Object,
      /**
       * Product Id
       * @type {String}
       */
      productId: String,
      /**
       * Product family like: account, card, deposit..
       * @type {String}
       */
      productGroup: String,
      /**
       * Text button
       * @type {String}
       */
      text: {
        type: String,
        value: 'cells-button-navigate-transactions-search-transactions'
      }
    },

    /**
     * Reset
     */
    reset: function() {
      this.set('product', null);
    },
    /**
     * Navigate to transation page with args like productGroup and productId
     */
    _navigateToTransactions: function(ev) {
      ev.preventDefault(); //just in case someone puts this component inside a form
      this.fire('urlToTransactions', {
        productGroup: this.productGroup,
        productId: this.productId
      });
    },
    /**
     * Checked value and return boolean
     */
    _checkedValue: function(value) {
      return !!value;
    }
  });
}());