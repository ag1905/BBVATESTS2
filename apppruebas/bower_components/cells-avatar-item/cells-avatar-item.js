(function() {

  'use strict';

  Polymer({

    is: 'cells-avatar-item',

    properties: {

      /**
       * Main value to show in the item
       * @type {String}
       */
      main: {
        type: String
      },

      /**
       * Secondary value to show in the item
       * @type {String}
       */
      secondary: {
        type: String,
        observer: '_checkSubTitle'
      },

      /**
       * Tertiary value to show in the item
       * @type {String}
       */
      tertiary: {
        type: String,
        observer: '_checkSubTitle'
      },

      /**
       * Informational value to show in the item. Shown in grey by default
       * @type {String}
       */
      info: {
        type: String
      },

      /**
       * Source for the image to display next to the text
       * @type {String}
       */
      avatar: {
        type: String
      },

      /**
       * Whether the item is active
       * @type {String}
       */
      active: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Amount
       * @type {Object}
       */
      amount: Object,

      /**
       * Local currency
       * @type {Object}
       */
      localCurrency: String,
      /**
       * Show decimals in amount
       * @type {Boolean}
       */
      decimalsHidden: {
        type: Boolean,
        value: false
      },
      /**
       * Class name if has sub title
       * @type {Boolean}
       */
      _classSubTitle: String
    },

    _checkSubTitle: function() {
      this._classSubTitle = this.secondary || this.tertiary ? 'has-subtitle' : '';
    }
  });
}());