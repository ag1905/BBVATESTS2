(function() {
  'use strict';

  Polymer({

    is: 'cells-edit-field',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * @desc  Field value to edit
       * @type  {String}
       */
      value: {
        type: String,
        notify: true,
        value: ''
      },

      /**
       * @desc Field default value
       * @type {String}
       */
      defaultValue: {
        type: String,
        value: ''
      },

      /**
      * Global selected product
      */
      product: {
        type: Object,
        observer: '_setSavedAlias'
      },

      /**
       * @desc  Field name and input placeholder
       * @type  {String}
       */
      placeholder: {
        type: String
      },
      /**
       * @desc  Header title
       * @type  {String}
       * @value Edit
       */
      title: {
        type: String
      },

      /**
       * @desc  Regular expression pattern to validate input value
       * @type  {String}
       * @value '.+'
       */
      pattern: {
        type: String,
        value: '^[-_a-zA-Z0-9]+([ a-zA-Z0-9]+)*$'
      },
      /**
       * Control status input validation
       */
      invalid: Boolean,

      /**
       * @desc  Min value length
       * @type  {Number}
       * @value 1
       */
      minLength: {
        type: Number
      },
      /**
       * @desc  Max value length
       * @type  {Number}
       */
      maxLength: {
        type: Number
      },
      /**
       * @desc  Input type
       * @type  {String}
       * @value 'text'
       */
      type: {
        type: String,
        value: 'text'
      },

      actionIcon: {
        type: String,
        value: 'coronita:close'
      },

      errorMessage: {
        type: String,
        value: 'cells-edit-field-error-message'
      },

      errorIcon: {
        type: String,
        value: 'coronita:alert'
      },
      /**
       * Force reset
       */
      forceReset: Boolean,
      showInfo: {
        type: Boolean,
        value: false
      },
      infoMessage: {
        type: String,
        value: 'cells-edit-field-info-message'
      },
      infoIcon: {
        type: String,
        value: 'coronita:info'
      },
    },

    /**
     * Notify event on save
     */
    save: function() {
      this.dispatchEvent(new CustomEvent('cells-save-edit-field', {
        detail: this.value,
        bubbles: true,
        composed: true
      }));
    },

    /**
     * Notify event on close
     */
    close: function() {
      this.dispatchEvent(new CustomEvent('cells-cancel-edit-field', {
        bubbles: true,
        composed: true
      }));
    },

    /**
     * Reset input
     */
    reset: function() {
      if (!this.product || !this.product.alias || this.forceReset) {
        this.value = '';
      }
    },

    /**
    * Set stored product to input edit alias value
    */
    _setSavedAlias: function(product) {
      if (product) {
        this.value = product.alias;
      }
    },

    /**
     * Disable save button when field is empty
     */
    _checkFieldValue: function(value, invalid, defaultValue) {
      return !(value && value.length && !invalid && value !== defaultValue);
    }

    /**
     * Fired on clicking over "close" button.
     * @event   'cells-close-edit-field'
     * @returns {Object}
     */

    /**
     * Fired on clicking over "save" button.
     * @event   'cells-save-edit-field'
     * @returns {Object}
     */
  });
}());
