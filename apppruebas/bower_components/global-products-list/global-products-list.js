/* global CellsBehaviors */
(function() {

  'use strict';

  Polymer({

    is: 'global-products-list',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Product groups
       * @type {Array}
       */
      productsList: Array,
      /**
       * Visible char description
       * @type {Array}
       */
      visibleChars: Number,
      /**
       * Field name to group by
       * @type {String}
       */
      groupBy: String,
      /**
       * Notify event on click item
       * @type {String}
       */
      notifyEvent: String,
      /**
       * If has error on get products
       * @type {Object}
       */
      error: Boolean,
      /**
       * Started product, after load first content
       * @type {Array}
       */
      started: {
        type: Boolean,
        reflectToAttribute: true
      },
      /**
       * Show loading zone
       * @type {Boolean}
       */
      loaded: {
        type: Boolean,
        value: false
      },
      /**
       * Auto hide loading zone on set productsList
       * @type {Boolean}
       */
      autoHideLoading: Boolean,
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
       * Status name of show overlay product
       * @type {String}
       */
      statusOverlay: {
        type: String,
        value: 'ACTIVATED'
      },
      /**
       * Show sticker text in first child of a card
       * @type {String}
       */
      showSticker: Boolean,
      /**
       * Url of the default image of the card.
       * Used if there is an error on loading the 'imageSrc'.
       */
      defaultImage: {
        type: String,
        value: ''
      },
      /**
       * Flag to  indicate if the class 'blocked' apply by default
       * To do not paint 'BLOCKED' products with gray
       */
      classBlockedGray: {
        type: Boolean,
        value: false
      }
    },

    observers: [
      '_checkedLoading(productsList)'
    ],

    /**
     * Reset productsList
     */
    reset: function() {
      this.set('started', false);
      this.set('loaded', false);
      this.set('error', false);
      this.set('productsList', null);
    },
    /**
     * Regreshing edited product
     */
    refreshingProduct: function() {
      this.loaded = false;
      this.autoHideLoading = true;
    },
    /**
     * Show message on error products list
     */
    notifyError: function() {
      this.set('error', true);
    },
    /**
     * Show message on error products list
     */
    setLoaded: function() {
      this.set('loaded', true);
    },
    /**
     * Notify event on click refresh button
     */
    _notifyRefreshProducts: function() {
      this.reset();
      this.fire('refresh-products-list');
    },
    /**
     * Sort filter
     */
    _sortGroupsOfProducts: function(groupA, groupB) {
      return groupA.order - groupB.order;
    },
    /**
     * Checked overlay status
     */
    _getProductOverlay: function(product) {
      return product.status !== this.statusOverlay;
    },
    /**
     * Set icon overlay
     */
    _setProductOverlayIcon: function(product) {
      return this.statusIcons && product ? this.statusIcons[product.status] : false;
    },
    /**
     * Return text child
     */
    _setInfoTextChild: function(product) {
      return this.t('cells-global-dashboard-cards-child-' + (product.isFirstChild && this.showSticker ? 'sticker' : 'aditional'));
    },
    /**
     * Computed icon and return icon
     */
    _computeProductIcon: function(icon) {
      icon = icon && icon.split(':');
      return icon && icon.length && icon[1];
    },
    /**
     * Notify on click product
     */
    _onProductItemTap: function(ev) {
      var group = ev.currentTarget.dataset.group;

      this.fire(group ? group + '-item-tap' : this.notifyEvent, {
        productId: ev.currentTarget.dataset.id
      });

      this.fire('related-additional-accounts', {
        productId: ev.currentTarget.dataset.id
      });
    },
    /**
     * Parse amount and translate label
     */
    _parseAmount: function(amount) {
      if (amount && amount.label) {
        amount.label = this.t(amount.label);
      }

      return amount;
    },

    /**
     * Get class status
     */
    _getClassStatus: function(status) {
      let _status = typeof status === 'object' ? status.id : status;
      return _status === 'BLOCKED' && !this.classBlockedGray ? '' : (_status || '').toLowerCase();
    },
    /**
     * Checked Values
     */
    _checkedLoading: function(productsList) {
      if (!this.started) {
        this.started = true;
      }

      if (this.autoHideLoading) {
        this.set('loaded', productsList && productsList.length >= 0 && !this.error);
      }
    },
    /**
     * Checked Value
     */
    _checkedValue: function(value) {
      return !!value;
    }
  });
}());