(function() {

  'use strict';

  Polymer({
    is: 'cells-modal-new-recipient-selector-pe',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.InputValidationsBehavior
    ],

    properties: {
      /**
       * @type {Boolean}
       * @desc Opened modal
       */
      opened: {
        type: Boolean,
        notify: true,
        observer: 'onOpened'
      },

      /**
       * @type {Number/String}
       * @desc Selected section
       */
      selected: {
        type: Number
      },

      /**
       * @type {Boolean}
       * @desc Continue button enabled
       */
      continueNext: {
        type: Boolean,
        value: false,
        computed: 'computeContinueNext(accountNumber)'
      },

      /**
       * @type {String}
       * @desc account Number that user wants to find
       */
      accountNumber: {
        type: String
      },

      /**
       * Temporal value for accountNumber
       */
      _accountNumber: {
        type: String,
        observer: '_accountNumberChanged'
      },

      bindedValue: {
        type: String,
        computed: '_getMasked(_accountNumber, accountNumberValidation.mask, accountNumberValidation.maskEnabled)'
      },

      /**
       * @type {Object}
       * @desc Recipient
       */
      recipient: {
        type: Object
      },

      /**
       * @type {Object}
       * @desc Noitficatio on query
       */
      notification: Object,

      buttonLabels: {
        type: Object,
        computed: '_computeButtonLabels(selected)'
      },

      accountNumberValidation: {
        type: Object
      },

      /**
       * Error shown in below the account number field
       */
      error: {
        type: Object
      },

      invalidInput: {
        type: Boolean
      }
    },

    listeners: {
      'delete-input-case': '_onInputDelete'
    },

    /**
     * Reset
    */
    reset: function() {
      this.selected = 0;
      this._accountNumber = '';
      if (this.$$('#accountNumberInput')) {
        this.$$('#accountNumberInput').validate();
      }
    },

    /**
    * Notify on click cancel button
    */
    _onCancel: function() {
      if (!this.selected) {
        this.close();
      }

      this.reset();
      this.dispatchEvent(new CustomEvent('on-click-secondary-button', {
        bubbles: true,
        composed: true
      }));
    },

    /**
    * Next section
    */
    _nextSection: function() {
      this.selected = this.selected + 1;
    },

    /**
    * Checked section selected
    */
    _checkedSection: function(selected, index) {
      return selected === index;
    },

    /**
     * computed method to set the buttons labels
     */
    _computeButtonLabels: function(selected) {
      var values;

      switch (selected) {
        case 1:
          values = {
            accept: 'cells-modal-new-recipient-selector-pe-continue',
            cancel: 'cells-modal-new-recipient-selector-pe-change-account-number'
          };
          break;
        default:
          values = {
            accept: 'cells-modal-new-recipient-selector-pe-search',
            cancel: 'cells-modal-new-recipient-selector-pe-choose-another-recipient'
          };
      }
      return values;
    },

    /**
    * Validate section
    */
    _validateSection: function() {
      switch (this.selected) {
        case 0:
          this._validateFirstSection();
          break;
        case 1:
          this._validateReviewSection();
      }
    },

    /**
     * Configure first screen
     */
    _validateFirstSection: function() {
      this.dispatchEvent(new CustomEvent('open-control-veil', {bubbles: true, composed: true}));
      this.dispatchEvent(new CustomEvent('magic-query', {
        detail: {
          number: this.accountNumber
        },
        bubbles: true,
        composed: true
      }));
    },

    /**
    * Close modal
    */
    close: function() {
      this.set('opened', false);
    },

    closeProcess: function() {
      this.dispatchEvent(new CustomEvent('close-control-veil', {
        bubbles: true,
        composed: true
      }));
      this.reset();
      this.close();
    },

    /**
     * Configure de main screen
     */
    _validateReviewSection: function() {
      this.dispatchEvent(new CustomEvent('recipient-end', {
        detail: this.recipient,
        bubbles: true,
        composed: true
      }));
    },

    /**
    * Set reponse of magic query
    */
    setResponseMagicQuery: function(response) {
      if (response.found) {
        this.set('notification', response.notification);
        this.set('recipient', response.recipient);
        this._nextSection();
      } else {
        this.set('error', {
          message: 'cells-modal-new-recipient-selector-pe-account-number-wrong',
          icon: 'coronita:alert'
        });

        (this.$$('#accountNumberInput') || {}).invalid = true;
      }

      this.dispatchEvent(new CustomEvent('close-control-veil', {
        bubbles: true,
        composed: true
      }));
    },

    /**
     * Computed method executed when account Number changes
     */
    computeContinueNext: function(accountNumber) {
      var customPattern = (this.accountNumberValidation || {}).customPattern;
      var result = false;
      if (customPattern) {
        var patt = new RegExp(customPattern);
        result = patt.test(accountNumber);
      }
      return result;
    },

    /**
     * computed method to set the accountNumber value
     */
    _accountNumberChanged: function(value) {
      var type = (this.accountNumberValidation || {}).mask;
      this.set('accountNumber', this._getUnMasked(value, type) || value);
    },

    onOpened: function(state) {
      if (state) {
        this.reset();
      }
    }
  });
}());
