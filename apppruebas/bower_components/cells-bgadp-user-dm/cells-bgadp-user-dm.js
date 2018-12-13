(function() {
  /*global BGADPGrantingTickets*/
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

    is: 'cells-bgadp-user-dm',

    properties: {

      /**
       * Type application.
       * Required to login.
       */
      consumerId: {
        type: String
      },

      /**
       * Country application.
       * Required to login and logout.
       */
      country: {
        type: String,
        value: 'cl'
      },

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
      * Accounts API version
      * @type {String}
      */
      grantingTicketApiVersion: {
        type: String,
        value: '0'
      }
    },

    observers: [
      '_loginEnabledObserver(user, host, consumerId, country)'
    ],

    /**
     * Public method the perform login if required properties are set
     */
    login: function() {
      if (this._loginEnabled) {
        this._login();
      } else {
        console.error(this.is, 'Some properties are NOT properly set. Check the values of: "user.userId", "user.password", "consumerId", "country" and "host".');
      }
    },

    /**
     * Public method the perform logout if required properties are set
     */
    logout: function() {
      if (this.country && this.host) {
        this._logout();
      } else {
        console.error(this.is, 'Some properties are NOT properly set. Check the values of: country" and "host".');
      }
    },

    /**
     * Initialize the BGADPGrantingTickets data provider for login
     *
     * Fires event telling login has started (login-request-start)
     *
     * Fires event telling login was successful (login-request-success)
     *
     * Fires event telling login was unsuccessful (login-request-error)
     */
    _login: function() {
      var loginService = this._loginService(this.country, {
        host: this.host,
        version: this.grantingTicketApiVersion
      });
      var configLoginService = {
        consumerId: this.consumerId,
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
        .catch(function(error) {
          this.dispatchEvent(new CustomEvent('login-request-error', {
            detail: true,
            bubbles: true,
            composed: true
          }));
        }.bind(this));
    },

    /**
     * Initializethe BGADPGrantingTickets data provider for logout
     *
     * Fires event telling logout has started (logout-request-start)
     *
     * Fires event telling logout was successful (logout-request-success)
     *
     * Fires event telling logout was unsuccessful (logout-request-error)
     */
    _logout: function() {
      var logoutService = this._logoutService(this.country, {
        host: this.host,
        version: this.grantingTicketApiVersion
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
      }.bind(this))
        .catch(function(error) {
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
    _loginEnabledObserver: function(user, host, consumerId, country) {
      this._loginEnabled = !!(user && user.userId && user.password && host && country && consumerId);
      if (this._loginEnabled) {
        this._login();
      }
    },

    _loginService: function(params, config) {
      /* istanbul ignore next */
      return new BGADPGrantingTickets.post(params, config);
    },

    _logoutService: function(params, config) {
      /* istanbul ignore next */
      return new BGADPGrantingTickets.delete(params, config);
    }

  });
}());
