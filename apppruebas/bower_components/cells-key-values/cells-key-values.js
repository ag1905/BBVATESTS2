(function() {

  'use strict';

  Polymer({

    is: 'cells-key-values',

    properties: {

      /**
      * Key / Label to display
      */
      key: String,

      /**
      * Value to display with the key.
      *
      * It can be a primitive value like a String or Number or an
      * Object or Array if you want to display monetary values. Accepted properties for the amounts are the same
      * that `<cells-atom-amount>` has, plus a `class` property that can be used to set the `<cells-atom-amount>` size.
      * Check out `<cells-atom-amount>` docs for more info:
      * https://globaldevtools.bbva.com/bitbucket/projects/CA/repos/cells-atom-amount/browse/README.md
      *
      * If you want to display multiple values, just put in an Array with as many Objects
      * as you need in the order you want them to be displayed.
      *
      * If you want to display multiple PRIMITIVE VALUES, just put in an Array with as many values
      * as you need in the order you want them to be displayed.
      *
      * Also set `language`, `localCurrency`, `maskChars` and `visibleChars` properties properly
      * depending on the type of value you want to display with the key.
      *
      * Examples:
      *
      * ```json
      * value: {
      *   amount: 12400,
      *   currencyCode: 'EUR',
      *   decimalsHidden: true,
      *   class: 'amount-medium'
      * }
      * ```
      *
      * Multiple values:
      *
      * ```json
      * value: [{
      *   amount: 12000,
      *   currencyCode: 'EUR',
      *   class: 'amount-huge'
      * }, {
      *   amount: 3400,
      *   currencyCode: 'USD'
      * }]
      * ```
      */
      value: Object,

      /**
      * Local currency for amounts / monetary values
      * @see (https://globaldevtools.bbva.com/bitbucket/projects/CA/repos/cells-atom-amount/browse/README.md)
      */
      localCurrency: String,

      /**
      * Language currency for amounts / monetary values
      * @see (https://globaldevtools.bbva.com/bitbucket/projects/CA/repos/cells-atom-amount/browse/README.md)
      */
      language: String,

      /**
       * Set to true to display the value masked.
       */
      masked: {
        type: Boolean,
        value: false
      },

      /**
      * Chars to mask a value with
      * @see (https://globaldevtools.bbva.com/bitbucket/projects/BGCM/repos/cells-molecule-mask/browse/README.md)
      */
      maskChars: String,

      /**
      * Amount of visible chars after the masking char
      * @see (https://globaldevtools.bbva.com/bitbucket/projects/BGCM/repos/cells-molecule-mask/browse/README.md)
      */
      visibleChars: Number,

      /**
       * Icon (code) to display when the value is masked.
       * Only will be shown if both, iconMaked and iconNotMasked are set.
       */
      iconMasked: String,

      /**
       * Icon (code) to display when the value is not masked.
       * Only will be shown if both, iconMaked and iconNotMasked are set.
       */
      iconNotMasked: String,

      /**
      * Set of abbreviations that can be applied depending on scale property value.<br>
      * Example:
      * ```js
      * {
      *   2: 'hundreds',
      *   3: 'thousands',
      *   4: 'tenthousands',
      *   6: 'Mill…',
      *   9: 'Bill…'
      * }
      * ```
      */
      abbreviations: {
        type: Object
      }
    },

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    /**
    * Puts value into an Array if it is not an Array
    * @param {*} value
    * @return {Array} - Contains the given value in an Array (if it wasn't an array initially)
    */
    _toArray: function(value) {
      return Array.isArray(value) ? value : [ value ];
    },

    /**
    * Checks if 'value' is a primitive Javascript type
    * @param {*} value
    * @return {Boolean} True if value is primitive
    */
    _isPrimitive: function(value) {
      return (typeof value === 'number' || typeof value === 'string');
    },

    /**
    * Checks if 'value' is an amount
    * @param {*} value
    * @return {Boolean} True if value is an amount
    */
    _isAmount: function(value) {
      return !isNaN(value.amount);
    }

  });

}());
