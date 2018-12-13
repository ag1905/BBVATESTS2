/* global moment */
(function() {

  'use strict';

  Polymer({

    is: 'cells-product-summary-loan',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
      * Loan whose information will be displayed
      */
      loan: Object,
      /**
      * Local currency code of the loan
      */
      localCurrency: String,
      /**
      * Heading of the loans summary (alias, title...)
      */
      _heading: {
        type: String,
        computed: '_computeHeading(loan)'
      },
      /**
      * Loans number to be masked in the heading
      */
      _maskedHeading: {
        type: String,
        computed: '_computeMaskedHeading(loan)'
      },
      /**
      * Icon aside the loan's heading
      */
      _icon: {
        type: Object,
        computed: '_computeIcon(loan)'
      },
      /**
      * Main key - values to display
      */
      _mainItems: {
        type: Array,
        computed: '_computeMainItems(loan)'
      },
      /**
      * Loaded data
      */
      loading: {
        type: Boolean,
        value: true
      }
    },

    listeners: {
      'cells-product-summary-more-info': '_notifyLoan'
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
    _notifyLoan: function() {
      /**
       * Event on click detail
       * @event cells-product-summary-more-info-navigation
       */
      this.dispatchEvent(new CustomEvent('cells-product-summary-more-info-navigation', {
        bubbles: true,
        composed: true,
        detail: {productId: this.loan.loanId}
      }));
    },
    /**
    * Builds the loans heading depending on what fields are received
    * @param {Object} loan - Loan to display.
    * @return {String}
    */
    _computeHeading: function(loan) {
      var heading;

      if (loan) {
        this.loading = false;

        if (loan.alias) {
          heading = loan.alias;
        } else if (loan.title && loan.title.name) {
          heading = loan.title.name;
        } else {
          heading = this._buildDefaultLoanHeading(loan);
        }
      }

      return heading;
    },
    /**
    * Sets masked heading with the loans number when both
    * loans alias and name are not present
    * @param {Object} loan - Loan to display.
    * @return {String}
    */
    _computeMaskedHeading: function(loan) {
      return (loan && !(loan.alias || (loan.title && loan.title.name))) ? loan.number : '';
    },
    /**
    * Returns the icon aside the heading depending on the loans type
    * @param {Object} loan - Loan to display.
    * @return {String}
    */
    _computeIcon: function(loan) {
      return 'coronita:' + (this._getType(loan) !== 'MORTGAGE' ? 'myprofile' : 'home');
    },
    /**
    * Returns the main key - value items to display
    * @param {Object} loan - Loan to display.
    * @return {Array}
    */
    _computeMainItems: function(loan) {
      var mainItems = [];

      if (loan) {
        mainItems.push(this._buildKeyValueItem('cells-product-summary-loan-pending-amount', loan.pendingAmount.principal, 'amount-huge'));
        mainItems.push(this._buildKeyValueItem('cells-product-summary-loan-initial-amount', loan.initialAmount, 'amount-large'));
      }

      return mainItems;
    },
    /**
    * Returns the default heading for loans depending on the loans type
    * @param {Object} loan - Loan to display.
    * @return {String}
    */
    _buildDefaultLoanHeading: function(loan) {
      return 'cells-product-summary-loan-' + (this._getType(loan) === 'MORTGAGE' ? 'mortgage' : 'consume');
    },
    /**
    * Returns the loans type
    * @param {Object} loan - Loan to display.
    * @return {String}
    */
    _getType: function(loan) {
      return loan && loan.loanType && loan.loanType.id;
    },
    /**
    * Builds an object with key and a monetary value
    * @param {String} key - Key
    * @param {Object} value - Balance object with the following structure: {amount: 1234, currency: 'EUR'}
    * @return {Object} key-montaryValue with the following structure: { key: key, value: { amount: 1234, currency: 'EUR'} }
    */
    _buildKeyValueItem: function(key, value, css) {
      return {
        key: key,
        localCurrency: this.localCurrency,
        value: [
          {
            amount: value.amount,
            class: css,
            currencyCode: value.currency,
          }
        ]
      };
    },
    /**
    * Returns a formatted date
    * @param {String} date - Date to be formatted.
    * @return {String} Formatted date
    */
    _formatDate: function(date) {
      var formattedDate = '';
      date = this._normalizeDate(date);

      if (moment().year() === moment(date).year()) {
        formattedDate = moment(date).format('D MMMM');
      } else {
        formattedDate = moment(date).format('LL').replace(/de /g, '');
      }

      return formattedDate;
    },
    /**
    * Standardizes an 'DD-MM-YYYY' date String into an Date object
    * @param {String} date - Date to be standarized.
    * @return {Date} Standard date object
    */
    _normalizeDate: function(date) {
      if (date) {
        var splittedDate = date.split('-');

        //Months are cero-based
        return new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0]);
      }
    },
    /**
    * Checked value and return boolean
    */
    _checkValue: function(value) {
      return !!value;
    }
  });
}());
