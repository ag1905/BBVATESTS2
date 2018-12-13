(function() {

  'use strict';

  Polymer({
    /*global BGADPCredentialsLifecycle*/
    is: 'glomo-credentials-lifecycle-dm',

    properties: {

      host: String,

      version: {
        type: String,
        value: '0'
      },

      user: Object,

      /**
      * Data from change password form
      */
      fullPasswordInfo: {
        type: Object
      }
    },

    behaviors: [
      CellsBehaviors.CellsGlobalApisHandleRequest,
      CellsBehaviors.CellsGlobalApisHandleRequestSign
    ],

    /**
    * Get all user password data
    */
    getNewPasswordInfo: function(password) {
      this.set('fullPasswordInfo', password);
      if (!this.user) {
        this._getUserInfo();
      } else {
        this._setNewPassword(this.user.userId, this.fullPasswordInfo.newPassword, this.fullPasswordInfo.currentPassword);
      }
    },

    /**
    * Get user local data
    */
    _getUserInfo: function() {
      this.$.params.getData('userInfo').then(function(user) {
        this.set('user', user);
        this._setNewPassword('1234567890', this.fullPasswordInfo.newPassword, this.fullPasswordInfo.currentPassword);
      }.bind(this));
    },

    /**
    * Set new password data changes
    */
    _setNewPassword: function(id, newPassword, currentPassword) {
      this.dispatchEvent(new CustomEvent('open-control-veil', {
        bubbles: true,
        composed: true
      }));

      var service = this._serviceCredentials({
        host: this.host,
        body: {
          originAppId: 'integrationp-tests',
          originUserId: id,
          passwordValue: newPassword,
          oldPasswordValue: currentPassword
        },
        version: this.version,
        requiresTsec: true
      });

      service.generateRequest().then(
        function() {
          var response = this._parseResponse(service.getLastResponse());
          this._passwordChangedSuccess(response);

        }.bind(this),
          this._passwordChangedError.bind(this));
    },

    /**
    * Notify change password success
    */
    _passwordChangedSuccess: function(response) {
      this.dispatchEvent(new CustomEvent('change-password-success', {
        bubbles: true,
        composed: true,
        detail: response
      }));
      this._closeControlVeil();
    },


    /**
    * Notify change password wrong
    */
    _passwordChangedError: function(error) {
      var response = error && error.response ? JSON.parse(error.response) : null;
      var defaultError = 'change-password-default-error';
      if (response && response['error-code'] === '409') {
        defaultError = 'chage-password-tried-error';
      }
      this.dispatchEvent(new CustomEvent(defaultError, {
        bubbles: true,
        composed: true
      }));
      this._closeControlVeil();
    },

    _closeControlVeil: function() {
      this.dispatchEvent(new CustomEvent('close-control-veil', {
        bubbles: true,
        composed: true
      }));
    },

    /**
    * Credentials lifeCycle
    * credentials-lifecycle/v0/customer-password/changes
    */
    _serviceCredentials: function(params) {
      return new BGADPCredentialsLifecycle.customerPassword.changes.post(params);
    }

   /**
   * @event init-page-with-navigation
   * Dispatched before navigation event
   */

   /**
   * @event change-password-success
   * Dispatched when the password was changed successfully
   */

   /**
   * @event change-password-default-error
   * Dispatched when change password reponse default error
   */

   /**
   * @event chage-password-tried-error
   * Dispatched when user exceeden cahnge password attempts
   */
  });
}());
