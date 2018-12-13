(function() {

  'use strict';

  Polymer({

    is: 'cells-login-view',

    behaviors: [
      CellsBehaviors.DeviceBehavior
    ],

    properties: {

      /**
       * User to login
       * {
       *  userId: userId,
       *  username: username,
       *  password: password
       * }
       */
      user: {
        type: Object,
        notify: true
      },

      /**
       * Selected Document type.
       */
      documentType: {
        type: Object,
        observer: '_onDocumentTypeSelected'
      },

      /**
       Checks when image thumb must be smaller
      */
      smallThumb: {
        type: String,
        computed: '_computeSmallThumb(documentType)'
      },

      /**
       * Shows a register button
       */
      allowRegistration: {
        type: Boolean,
        value: false
      },

      /**
       * Header image URL
       */
      headerImage: {
        type: String,
        value: function() {
          return this.resolveUrl('/images/bg-login.jpg');
        }
      },

      /**
       * Alt text for header image
       */
      headerImageAlt: {
        type: String,
        value: ''
      },

      /**
       * Defines if the login is maximized (full screen). This will be set
       * when the inputs are focused.
       */
      maximized: {
        type: Boolean
      },

      /*
       * Defines if username is currently stored
       */
      isLogged: {
        type: Boolean,
        computed: '_IsLogged(user.username)'
      },

      /**
       * Defines the loading state.
       */
      loading: {
        type: Boolean,
        value: false
      },

      /**
       * Loading process in spinner
       */
      loadingProcess: {
        type: Boolean,
        value: false
      },

      /**
       * Number of current process
       */
      loadingCurrentProcess: Number,

      /**
       * Delay of first process in spinner
       */
      loadingDelay: {
        type: Number,
        value: 1500
      },

      /*
       * Ends loading login
       */
      loadingEnd: {
        type: Boolean,
        value: false
      },

      /**
       * Size of icons
       */
      iconsSize: {
        type: Number,
        value: 18
      },

      /*
       * Start icon for spinner
       */
      startIcon: {
        type: String
      },

      /*
       * End icon for spinner
       */
      endIcon: {
        type: String
      },

      /*
       * Clear icon for ID field
       */
      clearIdIcon: {
        type: String
      },

      /*
       * Clear icon for Password field
       */
      clearPwdIcon: {
        type: String
      },

      /*
       * Toggle icon for Password field
       */
      togglePwdIcon: {
        type: String
      },

      /*
       * Toggle icon for Password field when it's toggled
       */
      togglePwdIconToggled: {
        type: String
      },

      /**
       * If true, autofocus on first available input
       */
      autofocus: {
        type: Boolean,
        value: false
      },

      /**
      * Cells molecule input validate options
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
            allowedValue: '',
            allowedPasswordValue: '',
            errorMessage: '',
            errorPasswordMessage: [],
            errorMessageIcon: '',
            mask: '',
            passwordMask: '',
            maxLength: ''
          };
        }
      },

      /**
      * Delay before navigation on login success, to show the animation
      */
      delayNavigation: {
        type: Number
      },

      /**
       * Disabled reset on-request-change-user
       */
      disableResetOnChangeUser: Boolean
    },

    /*
     * Reset login
     */
    reset: function() {
      this.loading = false;
      this.user = {};
      this.$.credentialsUserPwd.reset();
      if (this.documentType) {
        this.set('user.documentType', this.documentType);
      }
      this.loadingEnd = false;
      this.maximized = false;
      this.$.spinner.reset();
    },

    /**
     * On login error event
     */
    loginError: function() {
      this.loading = false;
      this.set('user.password', '');
    },

    /*
     * On login event
     */
    _doLogin: function(e) {
      e.stopPropagation();
      this.cancelDebouncer('restore');
      this.set('user', e.detail);
      this.loading = true;
      this.dispatchEvent(new CustomEvent('login', {
        bubbles: true,
        composed: true,
        detail: e.detail
      }));

      if (this.loadingProcess) {
        this.$.spinner.startProcess();
      }

      if (this.loadingProcess) {
        this.$.spinner.startProcess();
      }

      /**
       * @event login
       * Fired on login submit
       */
    },

    /*
     * The user data is correct and the login has occurred
     */
    loadingSuccess: function(data) {
      this.loadingEnd = true;

      if (this.loadingProcess) {
        this.$.spinner.nextProcess();
      }

      if (this.loadingProcess) {
        this.$.spinner.nextProcess();
      }

      this._cacheUser(data);

      this.async(function() {
        this.dispatchEvent(new CustomEvent('navigate-from-login', {
          bubbles: true,
          composed: true
        }));
      }, this.delayNavigation);

      /**
       * @event navigate-from-login
       * Fired when login has occurred
       */
    },

    loadingProcessNextStep: function() {
      this.$.spinner.nextProcess();
    },

    /**
     * Save username. Next time user only needs to set the password.
     */
    _cacheUser: function(data) {
      if (data) {
        this.dispatchEvent(new CustomEvent('register-device', {
          bubbles: true,
          composed: true,
          detail: {
            customerId: this.user.userId,
            firstName: data.firstName
          }
        }));
      }
    },

    /*
     * Animate on blur input
     */
    _onInputBlur: function(e) {
      this.debounce('restore', function() {
        this.maximized = false;
      }, 100);
    },

    /*
     * Animate on focus input
     */
    _onInputFocus: function(e) {
      this.cancelDebouncer('restore');
      this.maximized = true;
    },

    /*
     * On change user
     */
    _changeUser: function() {
      if (!this.disableResetOnChangeUser) {
        this.reset();
      }
    },

    /*
     * Checked username
     */
    _checkedMaximized: function(maximized) {
      return (maximized) ? 'maximized' : '';
    },

    /*
     * Checked username
     */
    _checkedUsername: function(username) {
      return (username) ? 'is-logged' : '';
    },

    /*
     * Checks if device is IOS and returns className
     */
    _checkIOS: function(isIOS) {
      return (isIOS) ? 'non-move-up' : 'move-up';
    },

    /*
     * Checked username and set isLogged
     */
    _IsLogged: function(username) {
      return !!username;
    },

    /**
     * Sets document type in the user object
     */
    _onDocumentTypeSelected: function(detail) {
      this.$.credentialsUserPwd.set('documentType', detail);
    },

    /**
     * Computed method to check if the image thumb must be smaller.
     */
    _computeSmallThumb: function(documentType) {
      return (documentType) ? 'small-thumb' : '';
    }
  });
}());