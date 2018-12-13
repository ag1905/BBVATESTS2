(function() {

  'use strict';

  Polymer({

    is: 'cells-change-email',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Email
       */
      email: {
        type: String,
        observer: '_checkedEmail'
      },
      /**
       * Confirm email
       */
      emailConfirm: {
        type: String,
        observer: '_checkedEmailConfirm'
      },
      /**
       * Current email of user
       */
      currentEmail: String,
      /**
       * Valid, to enable button
       */
      valid: {
        type: Boolean,
        value: false,
        notify: true
      },
      /**
       * Icon type of notification validation
       */
      errorIcon: {
        type: String,
        value: 'coronita:alert'
      },
      /**
       * Icon size of notification validation
       */
      errorIconSize: {
        type: String,
        value: '18'
      },

      _invalidEmail: String,

      _invalidEmailConfirm: String,

      _errorMessage: String,

      _errorMessageConfirm: String
    },

    observers: [
      '_setValid(_errorMessage, _errorMessageConfirm)'
    ],

    listeners: {
      'cells-molecule-input-blur': 'validate'
    },

    /**
     * Reset component
     */
    reset: function() {
      this.email = undefined;
      this.emailConfirm = undefined;
      this._errorMessage = '';
      this._errorMessageConfirm = '';
      this.valid = false;
    },

    _setValid: function(error, errorConfirm) {
      this.valid = !!(this.email && this.emailConfirm && !error && !errorConfirm);
    },

    validate: function() {
      if (!this._checkedPattern()) {
        return;
      }

      if (this.email !== this.emailConfirm) {
        this._errorMessageConfirm = this.t('cells-change-email-not-same');
      }

      if (this.email === this.emailConfirm) {
        if (this.currentEmail && this.email === this.currentEmail) {
          this._errorMessageConfirm = this.t('cells-change-email-same-current-email');
        } else {
          this.valid = true;
          this._errorMessageConfirm = '';
        }
      }
    },

    _checkedEmail: function(email) {
      if (!email) {
        this._errorMessage = '';
        this.valid = false;
      }
    },

    _checkedEmailConfirm: function(email) {
      if (!email) {
        this._errorMessageConfirm = '';
        this.valid = false;
      }
    },

    _checkedPattern: function() {
      var pattern = true;

      if (this._invalidEmail && this.email) {
        this._errorMessage = this.t('cells-change-email-error-email-format');
        pattern = false;
      } else {
        this._errorMessage = '';
      }

      if (this._invalidEmailConfirm && this.emailConfirm) {
        this._errorMessageConfirm = this.t('cells-change-email-error-email-format');
        pattern = false;
      } else {
        this._errorMessageConfirm = '';
      }

      return pattern ? !!(this.email && this.emailConfirm) : pattern;
    },

    _notifyOnClickPrimary: function() {
      this.dispatchEvent(new CustomEvent('on-click-primary', {
        bubbles: true,
        composed: true,
        detail: this.email
      }));
    },

    _notifyOnClickSecondary: function() {
      this.dispatchEvent(new CustomEvent('on-click-secondary', {
        bubbles: true,
        composed: true
      }));
    }
  });
}());