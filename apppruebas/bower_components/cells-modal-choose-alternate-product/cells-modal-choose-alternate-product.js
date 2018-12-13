(function() {

  'use strict';

  Polymer({

    is: 'cells-modal-choose-alternate-product',

    behaviors: [
      window.CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Opened
       * @type {Boolean}
       */
      opened: Boolean,
      /**
       * Full mode
       * @type {Boolean}
       */
      fullHeight: {
        type: Boolean,
        value: true
      },
      /**
       * Image, in base 64
       * @type {String}
       */
      image: {
        type: String,
        value: ''
      },
      /**
       * Header title
       * @type {String}
       */
      header: String,
      /**
       * Title
       * @type {String}
       */
      title: String,
      /**
       * Title
       * @type {String}
       */
      paragraph: String,
      /**
       * Accept button
       * @type {String}
       */
      acceptButton: String,
      /**
       * Accept button info
       * @type {String}
       */
      acceptButtonInfo: String,
      /**
       * Cancel button
       * @type {String}
       */
      cancelButton: String,
      /**
       * Cancel button info
       * @type {String}
       */
      cancelButtonInfo: String,

      cardStatusEnabled: {
        type: Boolean
      },

      selectedProduct: {
        type: Object
      },

      initData: {
        type: Object,
        value: undefined,
        observer: '_setInitData'
      }
    },

    listeners: {
      'accept': '_onAccept',
      'cancel': '_onCancel',
      'select-product': '_onProductSelected'
    },

    /**
     * Fires 'change-amount' event when user clicks on Change amount link
     */
    _onAccept: function(e) {
      this.fire(this.acceptButtonEvent);
      this.set('opened', false);
    },
    /**
     * Fires 'get-products-not-funds' event when modal is open by the DM
     */
    getProductsNotFunds: function() {
      this.fire('get-products-not-funds');
    },
    /**
     * Sets data from DM after request
     */
    setProductsNotFunds: function(data) {
      this.set('initData', data);
      this.fire('close-control-veil');
    },
    /**
     * Sets opened to false when user clicks on close icon
     */
    _onCancel: function(e) {
      if (e.detail && !e.detail.cancelFromHeader) {
        this.fire(this.cancelButtonEvent);
      }
      this.set('opened', false);
    },

    _setInitData: function() {
      this.set('acceptButtonCaption', this.doTranslation(this.initData.buttons[0].key));
      this.set('acceptButtonEvent', this.initData.buttons[0].eventOut);
      this.set('cancelButtonCaption', this.doTranslation(this.initData.buttons[1].key));
      this.set('cancelButtonEvent', this.initData.buttons[1].eventOut);
    },

    _sendEvent: function(e) {
      this.set('sendAction', true);
      this.fire(e.target.getAttribute('data-event'));
      this.close();
    },

    _getDisableClass: function(disableState) {
      if (disableState) {
        return 'disabled';
      }
    },

    _setIdFromEvent: function(eventName) {
      var camelCased = eventName.replace(/-([a-z])/g,
                        function(g) {
                          return g[1].toUpperCase();
                        });
      return camelCased + 'Link';
    },

    _onProductSelected: function(e) {
      this.set('selectedProduct', e.detail);
      this.set('sendAction', false);
    },

    _getCardStatus: function(e) {
      this.set('cardStatusEnabled', !e.currentTarget.classList.contains('disabled'));
      this._fireEvent();
    },

    _fireEvent: function() {
      if (this.cardStatusEnabled && !this.sendAction) {
        this.fire('selected-product', this.selectedProduct);
        this.close();
      }
    },
    /**
     * Open Modal
     */
    open: function() {
      this.set('opened', true);
      this.fire('open-control-veil');
      this.getProductsNotFunds();
    },
    /**
     * Close Modal
     */
    close: function() {
      this.set('opened', false);
    }

  });
}());