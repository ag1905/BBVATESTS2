(function() {
  /* global moment */
  'use strict';

  Polymer({

    is: 'cells-product-summary-fund',

    properties: {
      /**
      * Fund whose information will be displayed
      * @type {Object}
      */
      fund: {
        type: Object,
        observer: '_fundObserver'
      },
      /**
      * Heading of the fund summary (alias, title...)
      * @type {String}
      */
      _heading: {
        type: String
      },
      /**
      * Main key - values to display
      * @type {Array}
      */
      _mainItems: {
        type: Array
      },
      /**
      * Fund number to be masked in the heading
      * @type {String}
      */
      _maskedHeading: {
        type: String
      },
      /**
      * Additional key - values to display
      * @type {Array}
      */
      _additionalItems: {
        type: Object
      },
      /**
      * Local currency code of the fund
      * @type {String}
      */
      localCurrency: {
        type: String,
        value: 'EUR'
      },
      /**
      * Product id
      * @type {String}
      */
      productId: String,
      /**
      * Loaded data
      * @type {Boolean}
      */
      loading: {
        type: Boolean,
        value: true
      }
    },

    listeners: {
      'cells-product-summary-more-info': '_notifyFund'
    },

    /**
     * Reset
     */
    reset: function() {
      this.loading = true;
    },
    /**
     * Navigate to more info page
     */
    _notifyFund: function() {
      this.fire('cells-product-summary-more-info-navigation', {
        productId: this.productId
      });
    },
    /**
     * Start the building of the different fund items to display
     * @param {Object} fund - fund to display.
     */
    _fundObserver: function(fund) {
      if (fund) {
        this.loading = false;
        this._formatHeading(fund);
        var arrayMainItems = this._setMainItems(fund);
        var arrayAdditionalItems = this._setAdditionalItems(fund);
        this.set('_mainItems', arrayMainItems);
        this.set('_additionalItems', arrayAdditionalItems);
      }
    },
    /**
    * Returns the main key - value items to display
    * @param {Object} fund - fund to display.
    * @return {Array}
    */
    _setMainItems: function(fund) {
      var arrayMainItems = [];
      var customMainItems = {
        key: 'cells-product-summary-fund-owned-shares',
        value: fund.ownedShares
      };
      arrayMainItems.push({
        key: 'cells-product-summary-fund-fund-position',
        value: {
          class: 'amount-huge',
          amount: fund.fundPosition && fund.fundPosition.amount,
          currencyCode: fund.fundPosition.currency
        },
        localCurrency: this.localCurrency
      }, customMainItems);

      return arrayMainItems;
    },
    /**
    * Returns the additional key - value items to display
    * @param {Object} fund - fund to display.
    * @return {Array}
    */
    _setAdditionalItems: function(fund) {
      var arrayAdditionalItems = [];
      arrayAdditionalItems.push(
        {
          key: 'cells-product-summary-fund-net-asset-value',
          value: {
            amount: fund.netAssetValue.amount,
            currencyCode: fund.netAssetValue.currency
          },
          localCurrency: this.localCurrency
        },
        {
          key: 'cells-product-summary-fund-net-asset-value-date',
          value: moment(fund.netAssetValueDate).format('DD MMMM YYYY')
        }
      );
      return arrayAdditionalItems;
    },
    /**
    * Builds the fund heading depending on what fields are received
    * @param {Object} fund - fund to display.
    */
    _formatHeading: function(fund) {
      if (fund.alias) {
        this.set('_heading', fund.alias);
      } else if (fund.title && fund.title.name) {
        this.set('_heading', fund.title.name);
      } else {
        this.set('_heading', 'cells-product-summary-fund-heading');
        this.set('_maskedHeading', fund.number);
      }
    }
  });
}());