/*global CellsBehaviors*/
(function() {

  'use strict';

  Polymer({

    is: 'cells-product-selector',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Account list to select from
       */
      products: {
        type: Array
      },
      /**
       * Number of productsto show. Set to 0 to show all
       */
      maxProducts: {
        type: Number,
        notify: true,
        value: 3
      },
      /**
       * Array containing accounts lists
       */
      _products: {
        type: Array
      },
      /**
       * Title for the product list
       */
      productsListTitle: {
        type: String
      },
      /**
       * Title for view all
       */
      productsViewAllTitle: {
        type: String,
        computed: 'computeFullName(products)'
      },
      /**
      * Message to show as an errorMessage
      */
      errorMessage: {
        type: String,
        value: 'cells-product-selector-error-message'
      },
      /**
       * Selected product
       * @type Number
       */
      selectedProduct: {
        type: Object
      },
      /**
       * Hide skeleton
       * @type Boolean
       */
      _hideSkeleton: {
        type: Boolean,
        value: false
      },
      /**
       * Show More products link
       * @type Number
       */
      _showMore: {
        type: Boolean,
        value: false
      },
      /**
       * Has zero products
       * @type Number
       */
      _hasZeroProducts: {
        type: Boolean,
        value: false
      },
      /**
       * Icon of message
       * @type Number
       */
      textIcon: {
        type: String,
        value: 'coronita:alert'
      },
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
       * Text for the no product title
       * @type {String}
       */
      message: String,
      /**
       * Visible char of product
       * @type {Number|String}
       */
      visibleChars: Number,
      /**
       * Local currency
       * @type {Number|String}
       */
      localCurrency: String,
      /**
       * Url of the default image of the product.
       * Used if there is an error on loading the 'imageSrc'.
       */
      defaultImage: String,
    },

    observers: [
      '_productsObserver(products.splices)',
      '_maxProductsObserver(maxProducts, products)'
    ],

    _productsObserver: function() {
      if (this.products && this.products.length) {
        this._hasZeroProducts = this.products.length === 0;
        this._hideSkeleton = true;
        this._setDependentProps();
      } else {
        this._hideSkeleton = false;
      }
    },

    _maxProductsObserver: function() {
      if (this.products) {
        this._setDependentProps();
      }
    },

    _setDependentProps: function() {
      this._showMore = this.maxProducts !== 0 && this.products.length > this.maxProducts;
      this.set('_products', []);

      this.async(function() {
        this.set('_products', this._showMore ? this.products.slice(0, this.maxProducts) : this.products);
      }, 0);
    },

    _onProductItemTap: function(evt) {
      if (evt.model.product && !evt.model.product.disabled || !evt.model.product) {
        var isCard = !!evt.model.card;
        var selected = isCard ? evt.model.card : evt.model.product;
        this.set('selectedProduct', selected);
        this.fire('select-product', this.selectedProduct);
      }
    },

    _viewAllProducts: function(e) {
      e.preventDefault();
      this.fire('view-all', this.products);
    },

    computeFullName: function(products) {
      var sameKindProduct = false;
      if (products && products.length) {
        var firstKindProduct = products[0].productType;
        sameKindProduct = products.every(function(product) {
          return product.productType === firstKindProduct;
        });
      }
      return sameKindProduct ? 'cells-product-selector-view-all' : 'cells-product-selector-view-all-products';
    },

    /**
    * Set icon overlay
    */
    _setProductOverlayIcon: function(product) {
      return this.statusIcons && product ? this.statusIcons[product.status] : false;
    },

    /**
    * Convert string to lowercase
    */
    _toLowerCase: function(string) {
      return string && string.toLowerCase();
    },

    /**
    * Checked if has message and return class disable
    */
    _checkedDisabled: function(disabled) {
      return disabled ? 'disabled' : '';
    }

    /**
     * @event select-index
     * @description fired when a product is selected. Contains the product's index
     */

    /**
     * @event select-product
     * @description fired when a product is selected. Contains the product
     */

    /**
     * @event view-all
     * @description fired when the view-all link is tapped. Contains the full product list
     */
  });
}());