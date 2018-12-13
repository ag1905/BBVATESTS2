(function() {
  /*global BGADPArmadilloLogin*/
  /*global $core*/
  /*eslint new-cap: 0*/
  'use strict';

  Polymer({

    /**
     *
     * @event login-request-start
     * Login process start
     */

    /**
     * @event login-request-success
     * Login status code success
     */

    /**
     * @event login-request-error
     * Login status code failure
     */

    /**
     * @event logout-request-start
     * Logout process start
     */

    /**
     * @event logout-request-success
     * Logout session ok
     */

    /**
     * @event logout-request-error
     * Logout session failure
     */

    is: 'cells-armadillo-login-dm',

    properties: {

      /**
       * Object that contains userId and password.
       * Required to login (both sub-properties inside of object).
       */
      user: {
        type: Object
      },

      /**
       *  Chosen endpoint to make requests to. Check providers.
       *  Required to login and logout.
       */
      host: {
        type: String
      },
      /**
       * If true it will clear the environment no matter if the
       * logout request respond with error
       */
      clearEnvironmentWhenError: {
        type: Boolean
      },
      /**
       *  If true, all required properties to login are set
       */
      _loginEnabled: {
        type: Boolean,
        value: false
      },
      /**
       * Object to match events with error codes
       */
      apiErrorMatches: {
        type: Object,
        value: {
          60: 'authentication-error',
          70: 'unauthorized',
          160: 'user-not-exists',
          161: 'invalid-password',
          162: 'user-blocked',
          163: 'expired-password',
          164: 'user-blocked',
          165: 'one-time-password',
          273: 'duplicated-password',
          275: 'password-equal-user',
          374: 'new-password-missing',
          375: 'password-confirmation-missing'
        }
      },
      /**
       * Flag enable error Matches
       */
      errorMatchesEnabled: {
        type: Boolean,
        value: false
      },
      /**
       * Native requests
       */
      native: {
        type: Boolean,
        value: false
      }
    },

    observers: [
      '_loginEnabledObserver(user, host)'
    ],

    /**
     * Public method the perform login if required properties are set
     */
    login: function() {
      if (this._loginEnabled) {
        this._login();
      } else {
        console.error(this.is, 'Some properties are NOT properly set. Check the values of: "user.userId", "user.password", and "host".');
      }
    },

    /**
     * Public method the perform logout if required properties are set
     */
    logout: function() {
      if (this.host) {
        this._logout();
      } else {
        console.error(this.is, 'Some properties are NOT properly set. Check the values of: "host".');
      }
    },

    /**
     * Initialize the BGADPArmadilloLogin data provider for login
     *
     * Fires event telling login has started (login-request-start)
     *
     * Fires event telling login was successful (login-request-success)
     *
     * Fires event telling login was unsuccessful (login-request-error)
     */
    _login: function() {
      var loginService = this._loginService({
        host: this.host,
        native: this.native
      });
      var configLoginService = {
        userId: this.user.userId,
        password: this.user.password
      };

      this.dispatchEvent(new CustomEvent('login-request-start', {
        detail: true,
        bubbles: true,
        composed: true
      }));
      loginService.generateRequest(configLoginService)
        .then(function() {
          this.dispatchEvent(new CustomEvent('login-request-success', {
            detail: true,
            bubbles: true,
            composed: true
          }));
        }.bind(this))
        .catch(
          this._generateErrorFireEventHandler('login-request-error')
        );
    },

    /**
     * Initializethe BGADPArmadilloLogin data provider for logout
     *
     * Fires event telling logout has started (logout-request-start)
     *
     * Fires event telling logout was successful (logout-request-success)
     *
     * Fires event telling logout was unsuccessful (logout-request-error)
     */
    _logout: function() {
      var logoutService = this._logoutService({
        host: this.host,
        native: this.native
      });

      this.dispatchEvent(new CustomEvent('logout-request-start', {
        detail: true,
        bubbles: true,
        composed: true
      }));
      logoutService.generateRequest().then(function() {
        this.dispatchEvent(new CustomEvent('logout-request-success', {
          detail: true,
          bubbles: true,
          composed: true
        }));
        $core[0].logout();
      }.bind(this)).catch(function(error) {
        this.dispatchEvent(new CustomEvent('logout-request-error', {
          detail: true,
          bubbles: true,
          composed: true
        }));
        if (this.clearEnvironmentWhenError) {
          $core[0].logout();
        }
      }.bind(this));
    },

    /*
     * Performs login when every required properties change to truly values
     *
     * Sets _loginEnabled property to protect against calls to public login() method
     *
     */
    _loginEnabledObserver: function(user, host) {
      this._loginEnabled = !!(user && user.userId && user.password && host);
      if (this._loginEnabled) {
        this._login();
      }
    },

    _loginService: function(params, config) {
      /* istanbul ignore next */
      return new BGADPArmadilloLogin.post(params, config);
    },

    _logoutService: function(params, config) {
      /* istanbul ignore next */
      return new BGADPArmadilloLogin.delete(params, config);
    },

    _extractResponse: function(response) {
      try {
        return JSON.parse(response).messages[0];
      } catch (e) {
        return null;
      }
    },

    _fireErrorEvent: function(eventType, eventDetail) {
      this.dispatchEvent(new CustomEvent(eventType, {
        bubbles: true,
        composed: true,
        detail: eventDetail
      }));
    },
    /**
     * Returns a function that executes _handleError and then fires an event
     */
    _generateErrorFireEventHandler: function(eventType) {
      return function(error) {
        this._handleError(error, eventType);
      }.bind(this);
    },
    _handleError: function(error) {
      let eventDetail;
      if (error && error.response) {
        var response = this._extractResponse(error.response) || {};
        var code = Number(response.code) || 0;
        eventDetail = {
          'code': `armadillo-error-${code}`,
          'message': response.message,
          'type': response.type,
          'selectedConfig': {
            className: 'error',
            openMaximized: false,
            iconOnlyFullHeight: true,
            acceptBtLabel: 'alert-DATA-ERROR-cancel',
            template: {
              type: 'paragraphs',
              values: [
                {
                  icon: 'coronita:alert'
                },
                {
                  text: this.errorMatchesEnabled ? `uy-login-error-${this.apiErrorMatches[code] || 'generic'}` : response.message
                }
              ]
            }
          }
        };
      }
      this._fireErrorEvent('error', eventDetail);
    }

  });
}());