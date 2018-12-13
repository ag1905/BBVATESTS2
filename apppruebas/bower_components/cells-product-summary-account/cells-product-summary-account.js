(function() {

  'use strict';

  Polymer({

    is: 'cells-product-summary-account',

    behaviors: [
      CellsBehaviors.GlobalProductsListsBehavior,
      window.CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
      * Account whose information will be displayed
      * @type {Object}
      */
      account: {
        type: Object
      },
      /**
      * Show several balances
      * @type {Object}
      */
      postedBalancesAsSecondMainItem: {
        type: Boolean,
        value: false
      }, //all countries except for mx
      /**
      * Local currency code of the account
      * @type {String}
      */
      localCurrency: String,

      //header

      /**
       * Heading of the account summary (alias, title...)
       * @type {String}
       */
      _heading: {
        type: String,
        computed: '_computeHeading(account)'
      },

      /**
       * Account number to be masked in the heading
       * @type {String}
       */
      _maskedHeading: {
        type: String,
        computed: '_computeMaskedHeading(account)'
      },
      /**
      * Icon aside the account's heading
      * @type {String}
      */
      _iconCode: String,
      /**
      * Main key - values to display
      * @type {Array}
      */
      _mainItems: Array,
      /**
      * Current value in progress bar
      * @type {Number}
      */
      _progressValue: Number,
      /**
      * Maximum value in progress bar
      * @type {Number}
      */
      _progressMax: Number,
      /**
      * Optional key - values to display
      * @type {Number}
      */
      _optionalItems: Array,

      /**
      * Additional key - values to display
      * @type {Array}
      */
      _additionalItems: Array,
      /**
      * Indicate main currency
      * @type {String}
      */
      _majorCurrency: {
        type: String,
        computed: '_getMajorCurrency(account)'
      },
      /**
       * Loaded data
       * @type {Boolean}
       */
      loading: {
        type: Boolean,
        value: true
      },
      /**
      * Linked accounts
      * @type {Array}
      */
      relatedAccounts: {
        type: Array
      }
    },

    observers: [
      '_accountObserver(account, postedBalancesAsSecondMainItem)'
    ],

    listeners: {
      'cells-product-summary-more-info': '_notifyAccount'
    },
    /**
    * Reset
    */
    reset: function() {
      this.set('_iconCode', undefined);
      this.set('_mainItems', undefined);
      this.set('_optionalItems', undefined);
      this.set('_additionalItems', undefined);
      this.set('relatedAccounts', undefined);
      this.set('account', undefined);
      this.set('loading', true);
    },

    /**
     * Sets a new product
     */
    setProduct: function(account) {
      this.set('account', account);
    },

    /**
     * Navigate to more info page
     */
    _notifyAccount: function() {
      this.dispatchEvent(new CustomEvent(
        'cells-product-summary-more-info-navigation',
        {
          detail: {
            productId: (this.account || {}).accountId
          },
          bubbles: true,
          composed: true
        }
      ));
    },
    /**
    * Start the building of the different account items to display.
    * @param {Object} account - Account to display.
    * @param {Boolean} postedBalancesAsSecondMainItem - Show several balances.
    */
    _accountObserver: function(account, postedBalancesAsSecondMainItem) {
      this._setMainItems(account, postedBalancesAsSecondMainItem);
      this._setOptionalItems(account);
      this._setAdditionalItems(account);
      this.loading = false;
    },
    /**
    * Builds the account heading depending on what fields are received.
    * @param {Object} account - Account to display.
    * @return {String}
    */
    _computeHeading: function(account) {
      var accountData = (account || {}).base || account || {};
      return accountData.alias || (accountData.title || {}).name || 'cells-product-summary-account-heading';
    },
    /**
    * Sets masked heading with the account number when both
    * account alias and name are not present.
    * @param {Object} account - Account to display.
    * @return {String}
    */
    _computeMaskedHeading: function(account) {
      var accountData = (account || {}).base || account || {};
      return (accountData.alias === undefined && (accountData.title === undefined || accountData.title.name === undefined)) ? accountData.number : undefined;
    },
    /**
    * Set the main key - value items to display.
    * @param {Object} account - Account to display.
    * @param {Boolean} postedBalanceAsSecondMainItem - Show several balances.
    */
    _setMainItems: function(account, postedBalancesAsSecondMainItem) {
      var type = ((account || {}).accountFamily || {}).id;
      var mainItems = [];

      if (postedBalancesAsSecondMainItem && type !== 'CREDIT') {
        mainItems.push(this._getKeyValue('cells-product-summary-account-available-current',
          this._getMonetaryValues(this._majorCurrency, account, ['availableBalance', 'currentBalances'])));
        mainItems.push(this._getKeyValue('cells-product-summary-account-available-posted',
          this._getMonetaryValues(this._majorCurrency, account, ['availableBalance', 'postedBalances'])));
      } else if (postedBalancesAsSecondMainItem) {
        mainItems.push(this._getKeyValue('cells-product-summary-account-available-current',
          this._getMonetaryValues(this._majorCurrency, account, ['availableBalance', 'currentBalances'], true)));
      } else {
        mainItems.push(this._getKeyValue('cells-product-summary-account-available-current',
          this._getMonetaryValues(this._majorCurrency, account, ['availableBalance', 'currentBalances'], true)));
      }

      mainItems = this.parseAmounts(mainItems);
      this.set('_mainItems', mainItems);
    },
    /**
    * Set the optional key - value items to display.
    * @param {Object} account - Account to display.
    */
    _setOptionalItems: function(account) {
      var type = ((account || {}).accountFamily || {}).id;
      var optionalItems = [];
      var progressValue;
      var progressMax;
      var disposedBalance;
      var grantedCredits;

      if (type === 'CREDIT') {
        disposedBalance = this._getMonetaryValues(this._majorCurrency, account, ['disposedBalance', 'currentBalances']);
        grantedCredits = this._getMonetaryValues(this._majorCurrency, account, [ 'grantedCredits' ]);
        progressValue = disposedBalance[0].amount;
        progressMax = grantedCredits[0].amount;
        optionalItems.push(this._getKeyValue('cells-product-summary-account-disposed-current', disposedBalance));
        optionalItems.push(this._getKeyValue('cells-product-summary-account-granted-credits', grantedCredits));
      }

      optionalItems = this.parseAmounts(optionalItems);

      this.set('_progressValue', progressValue);
      this.set('_progressMax', progressMax);
      this.set('_optionalItems', optionalItems);
    },
    /**
    * Set the additional key - value items to display.
    * @param {Object} product - Account to display.
    */
    _setAdditionalItems: function(product) {
      var type = ((product || {}).accountFamily || {}).id;
      var additionalItems = [];

      if (product.customizedFormats && product.customizedFormats.length) {
        additionalItems.push(this._getCustomizedFormatData(product.customizedFormats));
      }

      if (product.holds && product.holds.length) {
        additionalItems = additionalItems.concat(this._getCheckHold(product.holds));
      }

      if (this.relatedAccounts && this.relatedAccounts.length) {
        additionalItems = additionalItems.concat(this._getRelatedAccount(type, this.relatedAccounts));
      }

      if (product.customizedFormats && product.customizedFormats[0] && product.customizedFormats[0].customizedFormatId === 'CCI') {
        additionalItems = this._getCciData(product);
      }

      this.set('_additionalItems', additionalItems);
    },
    /**
    * Return holds linked with an account.
    * @param {Array} holds - Available holds.
    * @return {Array}
    */
    _getCheckHold: function(holds) {
      // Prepared to set holds when it will be integrated with real endpoints.
      return holds.reduce(function(acc, hold) {
        if (hold.holdId === 'CHECK_INCOME') {
          acc.push(this._getKeyValue('cells-product-summary-account-check-hold', hold.totalHeldAmounts[0].amount));
        }
        return acc;
      }.bind(this), []);
    },
    /**
    * Return accounts linked with another one.
    * @param {String} type - Account class.
    * @param {Array} accounts - related accounts.
    * @return {Array}
    */
    _getRelatedAccount: function(type, accounts) {
      return accounts.map(function(account) {
        var message = type === 'CREDIT' ?
          this.t('cells-product-summary-account-currency-account') :
          this.t('cells-product-summary-account-credit-account');
        return {
          key: 'cells-product-summary-account-associated-credit-account',
          value: message + account.value,
          showIcon: true
        };
      }.bind(this));
    },
    /**
    * Return customized format info of account.
    * @param {Array} data - possible customized formats.
    * @return {Object}
    */
    _getCustomizedFormatData: function(data) {
      var result;
      var id;
      var value;
      if ((data || []).length > 0) {
        id = data[0].customizedFormatId;
        value = data[0].value;
      }

      if (id === 'SPEI') { //mx - COMMON_ACCOUNT
        result = {
          key: 'cells-product-summary-account-associated-mobile',
          value: ' • ' + value.slice(value.length - 5)
        };
        this.set('_iconCode', 'coronita:mobile');
      } else if (id === 'SIMPLE_ACCOUNT') {
        result = {
          key: 'cells-product-summary-account-simple-account',
          value: value
        };
      }

      return result;
    },
    /**
    * Return info of account.
    * @param {Array} product - product received.
    * @return {Object}
    */
    _getCciData: function(product) {
      var result;
      var value;

      if (product !== {}) {
        result = [ {
          key: product.title.name,
          value: product.number
        } ];
      }
      return result;
    },
    /**
    * Return main currency.
    * @param {Object} account - Account to display.
    * @return {Object}
    */
    _getMajorCurrency: function(account) {
      return account && this._findFirst(account.currencies, {
        field: 'isMajor',
        value: true
      });
    },
    /**
    * Return object with info of account to show.
    * @param {String} key - Object key.
    * @param {Number} value - Amount value.
    * @return {Object}
    */
    _getKeyValue: function(key, value) {
      return {
        key: key,
        value: value,
        localCurrency: this.localCurrency
      };
    },

    /**
     * Get monetary values array with the one whose currency is major at the start.
     * @param  {[type]} account [description]
     * @param  {[type]} path    [description]
     * @return {[type]}         [description]
     */
    _getMonetaryValues: function(majorCurrency, account, path, onlyOne) {
      var byCurrency = function(currency) {
        return function(a, b) {
          if (a.currency === currency.currency) {
            return -1;
          }
          if (b.currency === currency.currency) {
            return 1;
          }
          return 0;
        };
      };
      var values = path.reduce(function(acc, v) {
        return acc[v] || {}; // || {} to prevent accessing missing props
      }, account);

      if (Array.isArray(values)) {
        values = values.sort(byCurrency(majorCurrency));
      }
      if (onlyOne) {
        return values[0];
      }
      return values;
    },

    /**
    * Parse main values
    * @param {Array} list - List of amounts.
    * @return {Array}
    */
    parseAmounts: function(list) {
      var result = list.map(function(item, itemIndex) {
        if (item.value && item.value.length) {
          var mapItems = function(keyClass, keyLabel) {
            return item.value.map(function(valueItem, index) {
              return {
                'amount': valueItem.amount,
                'currencyCode': valueItem.currency,
                'class': item.key === keyLabel && index === 0 ? keyClass : ''
              };
            }.bind(this));
          };

          item.value = (itemIndex === 0) ?
            mapItems('amount-huge', 'cells-product-summary-account-available-current') :
            mapItems('amount-large', 'cells-product-summary-account-available-posted');

        } else {
          item.value = {
            'amount': (item.value || {}).amount,
            'currencyCode': (item.value || {}).currency,
            'class': 'amount-huge'
          };
        }
        return item;

      });

      return result;
    }
  });
}());
