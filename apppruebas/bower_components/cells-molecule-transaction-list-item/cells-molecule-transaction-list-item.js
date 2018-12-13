Polymer({
  /*global CellsBehaviors */

  is: 'cells-molecule-transaction-list-item',

  behaviors: [
    CellsBehaviors.i18nBehavior
  ],

  properties: {
    /**
    * Transaction information
    */
    transaction: Object,
    /**
    * ISO 4217 code for the location
    */
    localCurrency: String,
    /**
    * Format date of additional Info
    */
    formatDate: {
      type: String,
      value: 'DD/MM/YY'
    },
    /**
    * Locale for date, additional Info
    */
    localeDate: String,
    /**
    * Transaction financiable
    */
    _transactionFinanceable: {
      type: String,
      computed: '_getTransactionFinanceable(transaction)'
    }
  },

  _checkedType: function(type, value) {
    return type === value;
  },

  _checkedKey: function(key) {
    return !key ? 'empty' : '';
  },

  _getTransactionFinanceable: function(transaction) {
    var types = {
      FINANCING_AVAILABLE: 'cells-molecule-transaction-list-item-financeable',
      FINANCED_AMOUNT: 'cells-molecule-transaction-list-item-financed'
    };

    return types[transaction.financingType && transaction.financingType.id] || '';
  }
});