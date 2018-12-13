(function() {

  'use strict';

  Polymer({

    is: 'cells-modal-info',

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
        type: Object,
        observer: '_setConfig'
      },
      /**
       * Opened
       * @type {Boolean}
       */
      opened: Boolean,
      /**
       * Auto open on set config
       * @type {Boolean}
       */
      autoOpen: Boolean,
      /**
       * Full mode
       * @type {Boolean}
       */
      fullHeight: Boolean,
      /**
       * Type
       * @type {String}
       */
      type: {
        type: String,
        reflectToAttribute: true
      },
      /**
       * Disable primary button
       * @type {Boolean}
       */
      disablePrimaryButton: Boolean
    },
    /**
     * Open Modal
     */
    open: function() {
      this.set('opened', true);
      this.$.modal.open();
    },
    /**
     * Close Modal
     */
    close: function() {
      this.set('opened', false);
      this.$.modal.close();
    },
    /**
     * Checked config
     */
    _setConfig: function(config) {
      if (this.autoOpen) {
        this.set('opened', true);
      }
    },
    /**
     * Checked Value
     */
    _checked: function(val) {
      return !val;
    }
  });
}());
