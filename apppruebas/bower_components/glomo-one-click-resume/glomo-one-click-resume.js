(function() {

  'use strict';

  Polymer({

    is: 'glomo-one-click-resume',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
      * Response
      */
      response: Object,
      /**
      * Product
      */
      product: Object,
      /**
      * Title
      */
      title: {
        type: String,
        value: 'glomo-one-click-resume-title'
      },
      /**
      * hide change button
      */
      hideChangeButton: Boolean,
      /**
      * Default image card
      */
      defaultImage: String,
      /**
      * Local currency
      */
      localCurrency: String,
      /**
      * Visible chars of product
      */
      visibleChars: Number,
      /**
      * Product Id
      */
      productId: String,
      /**
      * Offer Id
      */
      offerId: String,
      /**
      * Hide product
      */
      hideProduct: {
        type: Boolean,
        value: false
      },
      /**
      * Hide product
      */
      hideMessageTerm: {
        type: Boolean,
        value: false
      }
    },

    /**
      * Reset
      */
    reset: function() {
      this.response = undefined;
      this.product = undefined;
    },

    _checkedKey: function(key) {
      return !!key;
    },

    _getNotification: function(response) {
      if (response && response.fees && response.fees.itemizeFees && response.fees.itemizeFees.length) {
        return this.t('glomo-one-click-resume-notification-taxes', '', {
          fee: response.fees.itemizeFees[0].itemizeFeeUnit.amount
        });
      }
    },

    _onChange: function() {
      this.dispatchEvent(new CustomEvent('on-click-change-button', {
        bubbles: true,
        composed: true,
        detail: {
          productId: this.productId,
          offerId: this.offerId
        }
      }));
    }
  });
}());