(function() {

  'use strict';

  Polymer({

    is: 'cells-product-summary-deposit',

    properties: {

      //deposit object info

      deposit: {
        type: Object,
        observer: '_depositObserver'
      },

      _heading: {
        type: String
      },

      _mainItems: {
        type: Object
      },

      _optionalItems: {
        type: Object
      },

      _maskedHeading: {
        type: String
      },

      localCurrency: {
        type: String,
        value: 'EUR'
      },

      totalContributions: {
        type: Boolean,
        value: false
      },

      initialAmount: {
        type: Boolean,
        value: false
      },

      maturityDate: {
        type: Boolean,
        value: false
      },

      /**
       * Show/hide spinner
       */
      loading: {
        type: Boolean,
        value: true
      }

    },

    listeners: {
      'cells-product-summary-more-info': '_notifyDeposit'
    },

    reset: function() {
      this.set('deposit', undefined);
      this.loading = true;
    },

    /**
     * Navigate to more info page
     */
    _notifyDeposit: function() {
      this.fire('cells-product-summary-more-info-navigation', {
        productId: this.deposit.depositId
      });
    },

    _depositObserver: function(deposit) {
      if (deposit) {
        this._formatHeading(deposit);
        var arrayMainItems = [];
        arrayMainItems.push({ key: 'cells-organism-product-summary-deposit-currentBalances', value: { amount: deposit.currentBalances[0].amount, currencyCode: this.localCurrency, class: 'amount-huge' }, localCurrency: this.localCurrency }, this._customMainItems());
        this.set('_mainItems', arrayMainItems);
        this.loading = false;
      }
    },

    _customMainItems: function() {
      var customMainItems = {};
      if (this.totalContributions) {
        customMainItems = { key: 'cells-organism-product-summary-deposit-totalContributions', value: this.deposit.totalContributions, localCurrency: this.localCurrency };
      } else if (this.initialAmount) {
        customMainItems = { key: 'cells-organism-product-summary-deposit-initialAmount', value: { amount: this.deposit.initialAmount.amount, currencyCode: this.localCurrency, class: 'amount-large' }, localCurrency: this.localCurrency };
      } else if (this.maturityDate) {
        var maturityDate = this._formatDate(this.deposit.maturityDate);
        customMainItems = { key: 'cells-organism-product-summary-deposit-maturityDate', value: maturityDate, localCurrency: this.localCurrency };
      }
      return customMainItems;
    },

    _formatHeading: function(deposit) {
      if (deposit.alias) {
        this.set('_heading', deposit.alias);
      } else if (deposit.title && deposit.title.name) {
        this.set('_heading', deposit.title.name);
      } else {
        this.set('_heading', 'cells-product-summary-fund-heading');
        this.set('_maskedHeading', deposit.number);
      }
    },

    _formatDate: function(date) {
      /* global moment */
      var formattedDate = '';
      if (moment().year() === moment(date).year()) {
        formattedDate = moment(date).format('D MMMM');
      } else {
        formattedDate = moment(date).format('LL').replace(/de /g, '');
      }
      return formattedDate;
    }
  });
}());
