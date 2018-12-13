(function() {

  'use strict';

  Polymer({

    is: 'cells-credentials-form',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.InputValidationsBehavior
    ],

    properties: {

      /**
       * User first name
       */
      userName: {
        type: String,
        notify: true,
        value: ''
      },

      /**
       * User avatar
       */
      userAvatar: {
        type: String,
        value: ''
      },

      /**
       * Heading level to apply to user name and greeting
       */
      headingLevel: {
        type: Number,
        value: 1
      },

      /**
       * Invalid status of the form
       */
      invalid: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true
      },

      /**
       * User identification
       */
      userId: {
        type: String,
        value: ''
      },

      /**
       * Temporal User identification
       */
      _userId: {
        type: String,
        notify: true,
        observer: '_onUserIdChanged'
      },

      /**
       * User password, access key or similar
       */
      userPassword: {
        type: String,
        notify: true,
        value: ''
      },

      /**
       * Document Type
       */
      documentType: {
        type: Object,
        observer: '_onDocumentTypeChanged'
      },

      /**
       * Size icons
       */
      iconsSize: {
        type: Number,
        value: 18
      },

      /**
       * Clear icon for user field
       */
      clearIdIcon: {
        type: String
      },

      /**
       * Clear icon for password field
       */
      clearPwdIcon: {
        type: String
      },

      /**
       * Toggle icon for password field
       */
      togglePwdIcon: {
        type: String
      },

      /**
       * Toggle icon for password field, toggled version
       */
      togglePwdIconToggled: {
        type: String
      },

      /**
       * Returns true if userId and userPassword are not null.
       */
      _isSubmitEnabled: {
        type: Boolean,
        computed: '_computeIsSubmitEnabled(userId, userPassword)'
      },

      /**
       * If true, autofocus in user ID field, if available
       */
      autofocus: {
        type: Boolean,
        value: false
      },

      /**
       * Shows a register button
       */
      register: {
        type: Boolean,
        value: false
      },

      /**
       * Indicates if user is logged or not
       */
      isLogged: {
        type: String,
        reflectToAttribute: true,
        computed: '_computeIsLogged(userName)'
      },

      /**
       * Translation key for user input
       */
      labelUserId: {
        type: String,
        value: 'NIF, NIE, Passport, email'
      },

      /**
       * Translation key for user password
       */
      labelPassword: {
        type: String,
        value: 'Access key'
      },

      /**
       * Translation key for user password
       */
      labelUserIdClearIcon: {
        type: String,
        value: 'Clear field'
      },

      /**
       * Translation key for user password
       */
      labelPasswordToggleIcon: {
        type: String,
        value: 'Show/hide password'
      },

      /**
       * Translation key for user password
       */
      labelPasswordClearIcon: {
        type: String,
        value: 'Clear field'
      },

      /**
       * Translation key for button
       */
      labelLogin: {
        type: String,
        value: 'Login'
      },

      /**
       * Translation key for 'forget your password?' button
       */
      labelForgetPassword: {
        type: String,
        value: 'Did you forget your access key?'
      },

      /**
       * Translation key for user not logged
       */
      labelNewUser: {
        type: String,
        value: 'Are you not an user?'
      },

      /**
       * Translation key for user registration
       */
      labelRegister: {
        type: String,
        value: 'Register'
      },

      /**
       * Translation key for user logout
       */
      labelLogout: {
        type: String,
        value: 'Change user'
      },

      /**
       * Translation key for greeting
       */
      labelGreeting: {
        type: String,
        value: 'Hi'
      },

      /**
      * Error password validation message
      */
      errorPasswordMessage: {
        type: String,
        value: ''
      },

      /**
      * Input password type
      */
      inputPasswordType: {
        type: String,
        value: 'password'
      },

      /**
       * input user login field validations
       */
      inputUserOptions: {
        type: Object,
        value: function() {
          return {
            autoValidate: false,
            autoValidatePassword: false,
            inputStatusValidate: false,
            autoMask: true,
            inputType: '',
            inputPasswordType: '',
            allowedValue: '',
            allowedPasswordValue: '',
            errorMessage: '',
            errorPasswordMessage: [],
            errorMessageIcon: '',
            mask: '',
            passwordMask: '',
            maxLength: '',
            customPattern: '',
            customPasswordPattern: ''
          };
        }
      }
    },

    observers: [
      '_clearInvalid(userId, userPassword)',
      '_invalidObserver(invalid)'
    ],

    listeners: {
      'user-auto-mask': 'autoMaskStatus',
      'cells-molecule-input-validate': '_onInputValidate',
      'validation-error-type': '_setErrorMessage'
    },

    attached: function() {
      this._setAutofocus();
    },

    /**
     * Resets component to initial state.
     */
    reset: function() {
      this.userId = '';
      this._userId = '';
      this.userName = '';
      this.userPassword = '';
      this.userAvatar = '';

      if (this.$$('#user-input-id')) {
        this.$$('#user-input-id').validate();
      }

      this.$$('#user-input-pwd').validate();
    },

    _onKeyPress: function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.$.loginBtn.click();
      }
    },

    /**
     * Returns boolean for isLogged based on userName property
     */
    _computeIsLogged: function(userName) {
      return !!userName;
    },

    /**
     * Set focus to user Id field if autofocus is true and field is not hidden
     */
    _setAutofocus: function() {
      Polymer.RenderStatus.afterNextRender(this, function() {
        var input;
        if (this.autofocus && (input = this.$$('#user-input-id:not([hidden])'))) {
          this.async(input.focus.bind(input), 500);
        }
      });
    },

    /*
     * Chage (enable and disable ) automask user input data
     */
    autoMaskStatus: function(autoMask) {
      if (autoMask && this.inputUserOptions) {
        var mask = !autoMask.detail ? this.inputUserOptions.maskEnabled = null : this.inputUserOptions.maskEnabled = this.inputUserOptions.mask;
        return mask;
      }
    },

    /**
     * Toggles invalid state on input fields
     */
    _invalidObserver: function(newvalue) {
      this.$$('#user-input-id').invalid = newvalue;
      this.$$('#user-input-pwd').invalid = newvalue;
    },

    /**
     * Change form invalid property when an input changes
     */
    _clearInvalid: function() {
      if (this.invalid) {
        this.invalid = false;
      }
    },

    /**
     * Returns true if user, password and documentType (only if it is required)
     */
    _computeIsSubmitEnabled: function(userId, userPwd) {
      return !!(this.documentType ? userId && userPwd && this.documentType.id : userId && userPwd);
    },

    /**
     * Action done when submitting the form.
     */
    _doCredentialsUserPwd: function(e) {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('login', {
        bubbles: true,
        composed: true,
        detail: {
          userId: this.userId,
          password: this.userPassword,
          username: this.userName,
          documentType: this.documentType
        }
      }));
      /**
       * Fired when submit button is activated, gets userId and userPassword as payload
       * @event login
       */
    },

    /**
     * Fires event when register button is activated
     */
    _doRegister: function(e) {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('request-register', {
        bubbles: true,
        composed: true
      }));
      /**
       * Fired when register button is activated
       * @event request-register
       */
    },

    /**
     * Fires event when forget password button is activated
     */
    _onForgetPwd: function(e) {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('request-password-recover', {
        bubbles: true,
        composed: true
      }));
      /**
       * Fired when forget password button is activated
       * @event request-password-recover
       */
    },

    /**
     * Fires event when change user button is activated
     */
    _changeUser: function(e) {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('request-change-user', {
        bubbles: true,
        composed: true
      }));
      /**
       * Fired when change user button is activated
       * @event request-change-user
       */
    },

    _onUserIdChanged: function(_userId) {
      var type = (this.inputUserOptions || {}).mask;
      this.userId = this._getUnMasked(_userId, type) || _userId;
    },

    /**
     * fires event when user taps in document type select
     */
    _openDocumentTypeSelector: function(e) {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('select-document-type', {
        bubbles: true,
        composed: true
      }));
      /**
       * Fired when user taps in document type selector
       * @event on-tap-document-type
       */
    },

    _onInputValidate: function(ev, validation) {
      var message;

      if (!validation.valid) {
        if (validation.value.length < this.inputUserOptions.min) {
          this.$$('#user-input-id').set('errorMessage', this.t('cells-credentials-form-min-characters-error-message'));
        } else {
          message = this._getErrorMessages(this.inputUserOptions.errorMessage);
          this.$$('#user-input-id').set('errorMessage', message);
        }
      }
    },

    /**
     * Sets username input validation according to the document type selected and set cursor focus
     */
    _onDocumentTypeChanged: function(documentType) {
      this.reset();
      if (documentType) {
        this.set('inputUserOptions', {
          allowedValue: documentType.allowedValue,
          maxLength: documentType.maxLength || '',
          inputStatusValidate: documentType.inputStatusValidate || true,
          errorMessageIcon: documentType.errorMessageIcon,
          errorMessage: documentType.errorMessage,
          inputType: documentType.inputType,
          max: documentType.max,
          min: documentType.min
        });
      }
      this.autofocus = true;
      this._setAutofocus();
    },

    /**
    * Set validation error message
    */
    _setErrorMessage: function(type) {
      this.errorPasswordMessage = this.inputUserOptions.errorPasswordMessage && this.inputUserOptions.errorPasswordMessage[type.detail] || '';
    }
  });
}());
