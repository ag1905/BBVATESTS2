'use strict';
Polymer({

  is: 'cells-atom-amount',

  behaviors: [
    window.CellsBehaviors.AmountBehavior
  ],

  properties: {

    /**
    * Context language
    */
    language: {
      type: String,
      value: function() {
        return document.documentElement.lang || 'en';
      }
    },

    /**
    * Number to split in integer, separator and fractional parts and represent
    */
    amount: {
      type: Number,
      observer: '_toggleNegativeClass'
    },

    /**
    * ISO 4217 code for the currency
    */
    currencyCode: {
      type: String,
      value: null
    },

    /**
     * ISO 4217 for the local currency.
     * A value must be provided in order to localice the currency symbols.
     */
    localCurrency: {
      type: String,
      value: null
    },

    /**
    * Scale used to display the given amount
    * e.g: 6 for Millions
    */
    scale: {
      type: Number,
      value: 0 //0 as absent value. This triggers computed properties although there is no valid value.
    },

    /**
    * Chars used as abbreviature depending on the applied scale
    */
    abbreviations: {
      type: Object,
      value: function() {
        //Values got from (http://www.statman.info/conversions/number_scales.html)
        return {
          1: 'da',
          2: 'h',
          3: 'k',
          6: 'M', //Million
          9: 'B' //Normalized is actually 'G', but this is more understandable
        };
      }
    },

    /**
    * If true, decimal part of the amount will be hidden regardless of its value.
    */
    decimalsHidden: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, decimal part of the amount will be hidden if is zero.
     */
    zeroDecimalsHidden: {
      type: Boolean,
      value: false
    },

    _decimalsHidden: {
      type: Boolean,
      computed: '_computeDecimalsHidden(amount, decimalsHidden, zeroDecimalsHidden)'
    },

    /**
     * Used to hide/show component is there is a valid amount
     * @private
     */
    hidden: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      computed: '_computeHidden(amount)'
    },

    _scale: {
      type: Number,
      computed: '_setSafeScaleValue(scale)'
    },

    _abbreviation: {
      type: String,
      computed: '_computedAbbreviation(_scale, abbreviations)',
      value: '' //empty string as absent value. This triggers computed properties although there is no valid value.
    },

    _localCurrency: {
      type: String,
      computed: '_getSafeValue(localCurrency)',
      value: '' //empty string as absent value. This triggers computed properties although there is no valid value.
    },

    _currency: {
      type: String,
      computed: '_getCurrencyAsSymbol(_localCurrency, currencyCode)'
    },

    /**
    * integer part of the amount
    */
    _integer: {
      type: String
    },

    /**
    * fractional part of the amount
    */
    _fractional: {
      type: String
    },

    /**
    * separator between fractional and integer part
    */
    _separator: {
      type: String,
      computed: '_getSeparator(language)'
    },

    /**
    * Align currency symbol according to _currencyPosition
    */
    _alignRight: {
      type: Boolean,
      computed: '_isRightAligned(currencyCode)'
    },

    /**
     * Determine if '-' sign should be shown after currency symbol
     * @type {Object}
     */
    _minusAfterSymbol: {
      type: Boolean,
      computed: '_hasMinusAfterSymbol(_localCurrency)'
    },

    /**
     * Show or hide '-' <span> before currency symbol
     * @type {Boolean}
     */
    _showMinusBeforeSymbol: {
      type: Boolean,
      value: false,
      computed: '_computeShowMinusBeforeSymbol(amount, _minusAfterSymbol)'
    },

    /**
     * * Show or hide '-' <span> after currency symbol
     * @type {Boolean}
     */
    _showMinusAfterSymbol: {
      type: Boolean,
      value: false,
      computed: '_computeShowMinusAfterSymbol(amount, _minusAfterSymbol)'
    },

    _abbreviationHidden: {
      type: Boolean,
      value: false
    },

    _srAmount: {
      type: String
    }

  },

  observers: [
    '_setAmountParts(amount, language, _abbreviation)',
    '_srAmountObserver(amount, language, _abbreviation, _currency, _localCurrency, currencyCode, decimalsHidden)'
  ],

  _setSafeScaleValue: function(scale) {
    //Convert into an integer if it isn't
    return (scale % 1 !== 0) ? (scale |= 0) : scale; //eslint-disable-line no-bitwise
  },

  _computedAbbreviation: function(scale, abbreviations) {
    var abbreviation = abbreviations[scale];
    return (scale !== 0 && !!abbreviation) ? abbreviation : '';
  },

  _setAmountParts: function(amount, language, abbreviation) {
    if (abbreviation) {
      //Convert into integer
      amount |= 0; //eslint-disable-line no-bitwise
      amount /= Math.pow(10, this._scale);
    }

    this._abbreviationHidden = !abbreviation;
    this._integer = this._getAbsIntegerPart(amount, language);
    this._fractional = this._getFractionalPart(amount);
  },

  _getSafeValue: function(value) {
    return value || '';
  },

  _computeHidden: function(amount) {
    return (amount === undefined || amount === null || isNaN(amount) || amount === '');
  },

  _srAmountObserver: function() {
    var nodes = this.$$('.visible-amount');
    var amountNodes = nodes.querySelectorAll('span:not([hidden]):not(.abbreviation)');
    var abbrNode = nodes.querySelector('.abbreviation:not([hidden])');
    var strAmount = '';
    for (var i = 0; i < amountNodes.length; i++) {
      strAmount += amountNodes[i].textContent;
    }
    if (abbrNode) {
      strAmount += ' ' + abbrNode.textContent;
    }
    this._srAmount = strAmount;
  },

  _computeShowMinusBeforeSymbol: function(amount, _minusAfterSymbol) {
    return (amount < 0) && !_minusAfterSymbol;
  },

  _computeShowMinusAfterSymbol: function(amount, _minusAfterSymbol) {
    return (amount < 0) && _minusAfterSymbol;
  },

  _toggleNegativeClass: function(amount) {
    this.toggleClass('negative', amount < 0);
  },

  _computeDecimalsHidden: function(amount, decimalsHidden, zeroDecimalsHidden) {
    if (decimalsHidden) {
      return true;
    }

    if (zeroDecimalsHidden) {
      return !Number(this._getFractionalPart(amount));
    }
  }

});
