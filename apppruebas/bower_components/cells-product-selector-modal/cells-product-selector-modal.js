(function() {

  'use strict';

  Polymer({

    is: 'cells-product-selector-modal',

    behaviors: [
      CellsBehaviors.ProductsBehavior,
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * @type {Array}
       * @desc products for the product picker
       */
      products: {
        type: Array,
        observer: '_productsObserver'
      },
      /**
       * @type {Array}
       * @desc formatted products
       */
      _products: Array,
      /**
       * @type {String}
       * @desc Title for the product list
       */
      listTitle: String,
      /**
       * @type {String}
       * @desc Title for the modal
       */
      modalTitle: String,
      /**
       * @type {Boolean}
       * @desc describes the modal's state
       */
      opened: Boolean,
      /**
      * Status icons
      * @type {Object}
      * ```
      * {
      *   locked: 'coronita:block',
      *   activate: 'coronita:clock',
      *   off: 'coronita:on'
      * }
      * ```
      */
      statusIcons: Object,
      /**
       * Url of the default image of the product.
       * Used if there is an error on loading the 'imageSrc'.
       */
      defaultImage: String,
      /**
       * Close icon
       */
      closeIcon: {
        type: String,
        value: 'coronita:close'
      },
      /**
       * Close icon size
       */
      closeIconSize: {
        type: String,
        value: '24'
      },
      /**
       * Visible char of product
       * @type {Number|String}
       */
      visibleChars: Number,
      /**
       * Local currency
       * @type {Number|String}
       */
      localCurrency: String
    },

    listeners: {
      'select-product': '_selectedProduct'
    },

    open: function() {
      this.$.modal.open();
    },

    close: function() {
      this.$.modal.close();
    },

    _selectedProduct: function(ev) {
      this.dispatchEvent(new CustomEvent('selected-product', {
        bubbles: true,
        composed: true,
        detail: ev && ev.detail
      }));
      this.close();
    },

    _productsObserver: function(products) {
      if (products) {
        products = products.items || products;
        this._products = products instanceof Array ? this._formatProducts(products.items || products, this._parseProducts.bind(this)) : [];
      }
    },

    /**
     * @description set event data to product-selector-modal
     *
     * @param {payload} products
     */
    treatProducts: function(products) {
      this.set('_products', products ? products.items || products : null);
      this.open();
    },

    _parseProducts: function(product, originalProduct, currency) {
      var amount = this._getBalanceByCurrency(originalProduct.availableBalance.currentBalances, currency);

      product.imgSrc = '';
      product.primaryAmount = {
        amount: amount.amount,
        currency: amount.currency
      };

      var simpleNumber = this._getSimpleNumber(originalProduct);
      if (simpleNumber) {
        product.simpleNumber = simpleNumber;
        product.description = null;
      }

      if (originalProduct.productMobile) {
        product.icon = 'coronita:mobile-26';
      }

      if (!product.name) {
        product.name = this._getProductName(originalProduct, 'cells-global-dashboard-product-description', 'Cuenta BBVA');
      }
    }
  });
}());