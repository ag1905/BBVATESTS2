(function() {

  'use strict';

  Polymer({

    is: 'cells-modal-link-device',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Config
       * @type {Object}
       * ```
       * {
       *   header: 'cells-modal-info-error-bill-payment',
       *   image: '',
       *   title: 'cells-modal-info-error-error',
       *   text: 'cells-modal-info-error-operation-failed',
       *   btns: {
       *     primary: {
       *       text: 'cells-modal-info-error-retry',
       *       info: ''
       *     },
       *     secondary: {
       *       text: 'cells-modal-info-error-back-to-summary',
       *       info: ''
       *     }
       *   },
       *   notification: {
       *     type: "info",
       *     icon: "coronita:info",
       *     iconLabel: null,
       *     iconSize: 26,
       *     message: "cells-modal-info-message"
       *   }
       * }
       * ```
       */
      config: {
        type: Object
      },
      /**
       * Disable primary button
       * @type {Boolean}
       */
      disablePrimaryButton: {
        type: Boolean,
        value: true
      },
      /**
       * Message to display
       * @type {String}
       */
      message: {
        type: String,
        computed: 'computeSetMessage(config)'
      },
      /**
       * Visible char of product
       */
      visibleChars: Number,

      /**
      * Global product id
      */
      productId: String
    },

    listeners: {
      'cells-checkbox-button-toggled': 'enableButton'
    },

    reset: function() {
      this.$.checkAccept.uncheck();
      this.disablePrimaryButton = true;
    },

    enableButton: function(payload) {
      if (payload) {
        this.disablePrimaryButton = !payload.detail;
      }
    },

    acceptAction: function(ev) {
      ev.preventDefault();
      this.dispatchEvent(new CustomEvent('on-click-primary-button', {
        bubbles: true,
        composed: true
      }));
    },

    cancelAction: function(ev) {
      ev.preventDefault();
      this.dispatchEvent(new CustomEvent('on-click-secondary-button', {
        bubbles: true,
        composed: true
      }));
    },

    computeSetMessage: function(config) {
      return this.t(config.notification.message, '', { originName: config.origin.name });
    },

    _checked: function(value) {
      return !value;
    },

    showLegalConditions: function() {
      this.dispatchEvent(new CustomEvent('request-legal-terms', {
        detail: {
          continue: 'accountLinkMobile',
          productId: this.productId
        },
        bubbles: true,
        composed: true
      }));
    }
  });
}());