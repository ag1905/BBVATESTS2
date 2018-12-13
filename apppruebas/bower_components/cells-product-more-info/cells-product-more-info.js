(function() {

  'use strict';

  Polymer({

    is: 'cells-product-more-info',

    behaviors: [
      /* global CellsBehaviors */
      CellsBehaviors.i18nBehavior
    ],

    properties: {

      /**
       * Array inyected from outside. However, there is a default value in case.
       * It's an array of object that looks like:
       * {{ title: {String}, items: [key: {String}, value: {String}, icon: {String}, isAmount: {Boolean}] }}
       *
       * @example
       * [{
       *   'title': 'cells-product-more-info-general',
       *   'items': [{
       *      'key': 'cells-product-more-info-alias',
       *       'value': 'Credit Card.'
       *      },
       *      {
       *        'key': 'cells-product-more-info-account-number',
       *        'value': ' 4940 19·· ···· 0360',
       *        'label': true
       *      }
       *    ]
       *  },
       *  {
       *    'title': 'cells-product-more-info-conditions',
       *    'items': [
       *      {
       *        'key': 'Annual Card Maintenance Fee',
       *        'isAmount': true,
       *        'value': {
       *          'amount': 30,
       *          'currency': 'EUR'
       *        }
       *      }
       *    ]
       *  }
       *]
       *
       */
      product: {
        type: Array,
        value: function() {
          return [];
        },
        observer: '_setProductConfig'
      },

      /**
       * A value must be provided in order to localice the currency symbols.
       */
      localCurrency: {
        type: String
      },

      /**
       * Selected date format.
       */
      dateFormat: {
        type: String
      },

      /**
       * refered to the lang.
       */
      locale: {
        type: String
      },

      /**
       * Text of button
       *
       */
      buttonText: {
        type: String,
        value: 'cells-product-more-info-label'
      },

      /**
       * If is true the data of the product is not showed.
       */
      dataHidden: {
        type: Boolean,
        value: true,
        observer: '_dataHiddenChanged'
      },

      /**
       * Key related to each item
       */
      itemKey: String,

      /**
       * Laded data
       */
      loaded: {
        type: Boolean,
        value: false
      },

      /**
       * Number of skeleton items
       */
      skeletonItems: {
        type: Number
      },

      /**
       * Family of selected product
       */
      productType: {
        type: String,
        value: ''
      }
    },

    /**
     * Reset
     */
    reset: function() {
      this.set('product', []);
      this.loaded = false;
      this.dataHidden = this.productType === 'card' ? true : false;
    },

    /**
     * Set the value of locale property
     */
    _setProductConfig: function() {
      var lang = (window.I18nMsg) ? window.I18nMsg.lang : 'en';
      this.set('locale', lang);
      if (this.product.length) {
        this.loaded = true;
      }
    },

    /**
     * Fire two different events depends on dataHidden property.
     * @event cells-product-more-info-unmask-data
     * @event cells-product-more-info-button-click
     * @param {String} value of the item clicked
     */
    _clickButton: function(ev) {
      ev.preventDefault();
      if (this.dataHidden) {
        this.dispatchEvent(new CustomEvent('cells-product-more-info-unmask-data', {
          bubbles: true,
          composed: true
        }));
      } else {
        var item = ev.model.item;
        this.set('itemKey', item.key + '-copy');
        this.dispatchEvent(new CustomEvent('cells-product-more-info-button-click', {
          bubbles: true,
          composed: true,
          detail: item.value
        }));
      }
    },

    /**
     * Fire the key related to copied text.
     * @event cells-product-more-info-key
     */
    _launchKey: function() {
      this.dispatchEvent(new CustomEvent('cells-product-more-info-key', {
        bubbles: true,
        composed: true,
        detail: this.itemKey
      }));
      this.set('itemKey', '');
    },

    /**
     * Observer of dataHidden. If it changes, buttonText changes its value.
     * @event cells-product-more-info-label
     * @event cells-product-more-info-copy-label
     */
    _dataHiddenChanged: function() {
      this.set('buttonText', this.dataHidden ? 'cells-product-more-info-label' : 'cells-product-more-info-copy-label');
    },

    /*
     * Generate array to render skeleton items
     * @param {Array} skeletonItems - Items to show as skeleton
     * @return {Array} Skeleton items
     */
    _generateSkeletonItems: function(skeletonItems) {
      return Array.from(Array(skeletonItems), function(_, items) {
        return items;
      });
    },

    /*
     * Change dataHidden value when data change from masked to unmasked
     */
    _unmaskData: function() {
      this.set('dataHidden', !this.dataHidden);
    },

    /*
     * Hide date button if dataHidden property is false and button is date type
     */
    isButtonHidden: function(isDate) {
      return !this.dataHidden && isDate;
    },

    /*
     * Set class with-info when there is text under key-value
     */
    setInfoClass: function(item) {
      return item ? 'with-info' : '';
    }

  });
}());
