(function() {

  'use strict';

  Polymer({

    is: 'cells-change-password',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.InputValidationsBehavior
    ],
    properties: {

      /**
      * Input values
      */
      currentPassword: {
        type: String,
        observer: '_filledCurrentPassword'
      },

      filledCurrentPassword: {
        type: Boolean,
        value: false
      },

      newPassword: {
        type: String,
        observer: '_filledNewPassword'
      },

      filledNewPassword: {
        type: Boolean,
        value: false
      },

      confirmedPassword: {
        type: String
      },

      filledConfirmedPassword: {
        type: Boolean,
        value: false,
        computed: '_filledBothPasswords(filledCurrentPassword, filledNewPassword)'
      },

      fullPasswordInfo: {
        type: Object,
        notify: true,
        computed: '_fullPassword(currentPassword, newPassword, confirmedPassword)'
      },

      /**
      * Check form as valid
      */
      valid: {
        type: Boolean,
        value: false
      },

      /**
      * Check if new and confirmed passwords are equals
      */
      matchPassword: {
        type: Boolean
      },

      /**
      * Input icons
      */
      icon: {
        type: String,
        value: 'coronita:visualize'
      },

      iconToggled: {
        type: String,
        value: 'coronita:hide'
      },

      errorMessage: {
        type: String,
        value: null
      },

      inputUserOptions: {
        type: Object,
        value: function() {
          return {
            autoValidate: true,
            autoValidatePassword: true,
            inputStatusValidate: true,
            allowedPasswordValue: ['mxRepeatPassword', 'mxFollowedPassword'],
            errorPasswordMessage: ['mxRepeatPassword', 'mxFollowedPassword'],
            errorMessageIcon: 'coronita:alert',
            max: 6
          };
        }
      }
    },

    listeners: {
      'cells-molecule-input-validate': '_onInputValidate',
      'validation-error-type': '_setErrorMessage'
    },

    /**
    * Reset component
    */
    reset: function() {
      this.filledCurrentPassword = false;
      this.valid = false;
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmedPassword = '';
      this.matchPassword = true;
      this.$.currentPassword.invalid = false;
      this.$.newPassword.invalid = false;
    },

    /**
    * Compose object with all password data
    */
    _fullPassword(currentPassword, newPassword, confirmedPassword) {
      if (this._validatePasswords(currentPassword, newPassword, confirmedPassword)) {
        return {
          currentPassword: currentPassword,
          newPassword: newPassword,
          confirmedPassword: confirmedPassword
        };
      }
    },

    /**
    * Validate password conntents
    */
    _validatePasswords: function(currentPass, newPass, confirmedPass) {
      var currentPassword = currentPass && currentPass.length === this.inputUserOptions.max && !this.$.currentPassword.invalid;
      var newPassword = newPass && newPass.length === this.inputUserOptions.max && !this.$.newPassword.invalid;
      var confirmedPassword = confirmedPass && confirmedPass.length === this.inputUserOptions.max && !this.$.confirmedPassword.invalid;
      var valid = currentPassword && newPassword && confirmedPassword;
      this._setValid(valid);
      if (valid) {
        return true;
      }
    },

    _onInputValidate: function(validation) {
      if (validation.detail.valid && validation.detail.value.length === this.inputUserOptions.max && this.filledCurrentPassword && this.filledNewPassword) {
        this.errorPasswordMessage = null;
        this.valid = true;
      } else {
        if (this.errorPasswordMessage && validation.detail.value) {
          this.$[validation.detail.id].set('errorMessage', this._getMultipleErrorMessages(this.errorPasswordMessage));
        } else {
          this.$[validation.detail.id].set('errorMessage', this.t('cells-change-password-enough-characters-error-message'));
        }
        this.valid = false;
      }
    },

    /**
    * Check current value length on blur event
    */
    checkPasswordLength: function(ev) {
      var currentInput = this.$[ev.currentTarget.id];
      if (currentInput && (currentInput.value && currentInput.value.length < this.inputUserOptions.max) && !currentInput.invalid) {
        currentInput.set('errorMessage', this.t('cells-change-password-enough-characters-error-message'));
        this.valid = this.filledCurrentPassword = false;
        currentInput.set('invalid', true);
      } else {
        if (this.filledConfirmedPassword && !currentInput.invalid) {
          this.valid = this.filledCurrentPassword = true;
        }
      }
    },

    /**
    * Set valid if new and confirmed passwords are equals
    */
    _setValid: function(valid) {
      this.valid = valid;
      if (this.confirmedPassword.length === this.inputUserOptions.max) {
        this.matchPassword = (this.newPassword === this.confirmedPassword) ? true : false;
      }
    },

    _setErrorMessage: function(type) {
      this.errorPasswordMessage = this.inputUserOptions.errorPasswordMessage && this.inputUserOptions.errorPasswordMessage[type.detail] || '';
    },

    /**
    * Check if current password is filled
    */
    _filledCurrentPassword: function(currentPassword) {
      var valid = this.$.currentPassword.validate();
      this.filledCurrentPassword = (currentPassword.length === this.inputUserOptions.max && !this.errorMessage && valid) ? true : false;
    },

    /**
    * Check if new password is filled
    */
    _filledNewPassword: function(newPassword) {
      var valid = this.$.newPassword.validate();
      this.filledNewPassword = (newPassword.length === this.inputUserOptions.max && !this.errorMessage && valid) ? true : false;
    },

    currentPasswordStatus: function(currentPassword) {
      return (!this.filledCurrentPassword && currentPassword.length > 0) ? true : false;
    },

    /**
    * Check if new and current password are filled
    */
    _filledBothPasswords: function(filledCurrentPassword, filledNewPassword) {
      if (filledCurrentPassword && filledNewPassword) {
        return true;
      }
    },

    /**
    * Send all password data
    */
    _notifyOnClickPrimary: function() {
      if (this.currentPassword === this.newPassword) {
        this.dispatchEvent(new CustomEvent('change-password-used-before', {
          bubbles: true,
          composed: true
        }));
      } else {
        this.dispatchEvent(new CustomEvent('on-change-password', {
          bubbles: true,
          composed: true,
          detail: this.fullPasswordInfo
        }));
      }
    }
  });
}());
