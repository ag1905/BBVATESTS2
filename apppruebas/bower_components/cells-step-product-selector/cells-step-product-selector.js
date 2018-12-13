/* global CellsBehaviors */

(function() {
  'use strict';

  Polymer({

    is: 'cells-step-product-selector',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.StepBehavior,
      Polymer.ProductsBehavior,
      CellsBehaviors.GlobalProductsListsBehavior
    ],

    properties: {
      /**
       * @type [Array]
       * @description products to select from
       */
      products: Array,
      /**
       * @type {String}
       * @desc default selected product's id. Not erased on reset
       */
      defaultProductId: String,
      /**
      * Dinamic accounts and cards titles  on service pay
      */
      productsListLabel: String,
      /**
       * @type [Object]
       * @description selected product
       */
      selected: {
        type: Object,
        notify: true
      },
      /**
       * @type Boolean
       * helper property to change background fixed step
       */
      productSelected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * @type [String]
       * @description title for the step
       */
      title: {
        type: String,
        value: 'cells-products-title'
      },
      /**
       * @type [String]
       * @description title for the product list
       */
      listTitle: {
        type: String,
        value: ''
      },
      /**
       * @type Boolean
       * helper property to hide/show the change button
       */
      _changeHidden: {
        type: Boolean,
        value: false
      },
      /**
      * Step status
      * @type {Boolean}
      */
      collapsed: Boolean,
      /**
      * Number limit show products
      * @type {Number|String}
      */
      maxProducts: Number,
      /**
      * Cached number limit show products
      * @type {Number|String}
      */
      _maxProducts: {
        type: Number,
        computed: '_cachedMaxProducts(maxProducts)'
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
      localCurrency: String,
      /**
       * Not update title on change product
       * @type {Boolean}
       */
      disabledUpdateTitleOnChangeProduct: Boolean,
      /**
       * Error Icon message
       * @type {String}
       */
      errorIcon: {
        type: String,
        value: 'coronita:alert'
      },
      /**
       * Error icon size
       * @type {String}
       */
      errorIconSize: {
        type: String,
        value: 18
      },
      /**
       * Error message
       * @type {String}
       */
      errorMessage: {
        type: String,
        value: 'cells-product-selector-error-message-amount-operation'
      },
      /**
       * Additional filled icon message
       * @type {String}
       */
      additionalIcon: String,
      /**
       * Additional filled icon size
       * @type {String}
       */
      additionalIconSize: {
        type: String,
        value: 22
      },
      /**
       * Additional filled message
       * @type {String}
       */
      additionalMessage: String,
      /**
       * If selected has voercome amount
       * @type {Boolean}
       */
      _selectedError: {
        type: Boolean,
        value: false
      },
      /**
       * Url of the default image of the product.
       * Used if there is an error on loading the 'imageSrc'.
       */
      defaultImage: String,
      /**
       * @type [String]
       * @description initial title for the step
       */
      singleProductOriginType: {
        type: Boolean,
        value: false
      }
    },

    listeners: {
      'select-product': 'onProductSelected',
      'stepContainer.change-pressed': '_onChangeProduct',
      'selector.view-all': '_viewMorePressed'
    },

    observers: [
      '_setSelectedProduct(defaultProductId, products)',
      '_checkedMessageOnSelected(selected)'
    ],

    /**
     * @override
     * @desc resets the component's state
     */
    reset: function() {
      this.set('products', []);
      this.selected = undefined;
      this.defaultProductId = '';
      this.maxProducts = this._maxProducts;
    },
    /**
     * @desc Fetch products and checked default product and selected
     */
    fetchProducts: function(products) {
      this.set('products', []);
      this.async(function() {
        this.set('products', products);
      }, 0);

      if (products && products.length) {
        if (!this.defaultProductId && !this.selected) {
          this.set('selected', null);
        }

        this._checkedDefault(products);
        this._checkedChangeButton();
        this._checkedSelectedError(products);
      }
    },
    /**
     * @desc Set _maxProducts
     */
    _cachedMaxProducts: function(length) {
      return length > 0 ? length : this._maxProducts;
    },
    /**
     * @desc Checked defult value
     */
    _checkedDefault: function(products) {
      if (products && products.length === 1 && !this.defaultProductId) {
        this.set('defaultProductId', products[0].id);
      }
    },
    /**
     * Listen if view more button is pressed and fires the action if step is active.
     * @param evt {Event}
     * @event view-all
     */
    _viewMorePressed: function(evt) {
      if (!this.active) {
        evt.stopPropagation();
      }
    },
    /**
     * @override
     * @desc checks whether the user has set a valid input
     */
    isValid: function() {
      return !!this.selected;
    },
    /**
    * Observer for changes into <em>defaultProductId</em> and <em>products</em>.
    * Fires event 'select-product' with product that match ID.
    *
    * @param   id {String} Default selected product ID
    * @param   products {Object[]} Array of products.
    * @private
    */
    _setSelectedProduct: function(id, products) {
      if (id && products) {
        var selectedItem = this._findSelectedProduct(id, products);
        if (selectedItem) {
          this.disabled = true;
          this.onProductSelected(selectedItem);
        }
      }
    },
    /**
    * Auxiliar method to find selected product
    *
    * @param   id {String} Default selected product ID
    * @param   items {Object[]} Array of products.
    * @private
    */
    _findSelectedProduct: function(id, items) {
      return items.find(function(item) {
        if (item.id === id) {
          return item;
        }
      });
    },
    /**
    * @desc enable or disable change product option
    * @private
    */
    onProductSelected: function(evt) {
      this.collapsed = true;
      this.active = true;
      this.set('selected', evt.detail || evt);
      this.productSelected = false;
      this.decorated = false;

      if (!this.disabledUpdateTitleOnChangeProduct) {
        this._setStepProductsTitle(this.collapsed, this.selected);
      }

      this._checkedChangeButton();

      if (this.previousSibling) {
        this.previousSibling.decorated = false;
      }
    },
    /**
    * @desc enable or disable step when product item was clicked
    * @private
    */
    _onChangeProduct: function() {
      if (!this.productSelected) {
        this.collapsed = false;
      } else {
        this.productSelected = true;
      }

      this.dispatchEvent(new CustomEvent('change-step-state', {
        detail: this,
        bubbles: true,
        composed: true
      }));

      if (!this.disabledUpdateTitleOnChangeProduct) {
        this._setStepProductsTitle(this.collapsed, this.selected);
      }
    },

    _checkedSelectedError: function(products) {
      if (this.selected && products && products.length) {
        var selected = products.find(function(item) {
          return this.selected.id === item.id;
        }.bind(this));

        this._checkedMessageOnSelected(selected);
      }
    },
    /**
    * Checked selected and set error message
    */
    _checkedMessageOnSelected: function(selected) {
      this._selectedError = !!selected && selected.hasTextMessage;
    },
    /**
    * Checked change button show/hide
    */
    _checkedChangeButton: function() {
      this._changeHidden = Boolean(this.defaultProductId);
      this.productSelected = this._changeHidden;
    },
    /**
    * @desc Set step products title
    */
    _setStepProductsTitle: function(collapsed, selected) {
      if (collapsed) {
        this.title = selected.productType === 'CARDS' ? 'cells-card-title' : 'cells-account-title';
      } else {
        if (this.singleProductOriginType) {
          this.title = selected.productType === 'ACCOUNTS' ? 'cells-accounts-title' : 'cells-cards-title';
        } else {
          this.title = 'cells-products-title';
        }
      }
    }
  });
}());