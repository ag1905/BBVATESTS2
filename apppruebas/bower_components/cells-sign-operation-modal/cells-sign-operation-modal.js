(function(CellsBehaviors) {

  'use strict';

  Polymer({

    is: 'cells-sign-operation-modal',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],
    properties: {
      /**
       * Source of image
       */
      imgSrc: String,
      /**
      * Close icon Id
      **/
      closeIconId: {
        type: String,
        value: 'coronita:close'
      },
      /**
      * Boolean to clear on close
      **/
      clearOnClose: {
        type: Boolean,
        value: false
      },
      /**
      * Boolean to show otpOperation
      **/
      showOtp: {
        type: Boolean,
        observer: '_setOtpObserver'
      },

      /**
      * Boolean to show App Password
      **/
      showAppPss: {
        type: Boolean,
        observer: '_setAppPssObserver'
      },

      /**
      * Boolean to show timer
      **/
      hideTimer: {
        type: Boolean,
        value: false
      },

      initialTimeOut: {
        type: Number,
        value: 180000
      },

      /**
      * Time to timer / count down
      */
      timeout: {
        type: Number,
        value: 180000
      },

      /**
      * Control when timout end
      */
      _timeoutEnd: {
        type: Boolean,
        value: false
      },

      /**
      * Reset counter time
      */
      resetTimer: {
        type: Boolean,
        notify: true,
        value: false
      },

      /**
      * Input OTP value
      */
      _inputValue: {
        type: String,
        value: ''
      },

      /**
       * Translation key for user password
       */
      labelPassword: {
        type: String,
        value: 'cells-sign-operation-modal-heading-otp'
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
       * Clear icon for password field
       */
      clearPwdIcon: {
        type: String
      },
      /**
       * text for modal
       */
      _modalText: {
        type: String
      },

      /**
       * text for heading modal
       */
      _modalHeading: {
        type: String,
      },

      /**
      * Reset child component cells input digits data
      */
      _clearDigits: {
        type: Boolean,
        value: false
      },

      /**
      * No numbers is not allowed
      */
      allowedChars: {
        type: String,
        value: '[0-9]'
      },

      /**
      * Limit max characters allowed
      */
      max: {
        type: String,
        value: 6
      }
    },

    listeners: {
      'modal.close': '_onCloseModal',
      'submit-digits': '_dispatchCode',
      'on-timeout': '_checkTimeOut'
    },

    /**
    * Reset component status
    */
    reset: function() {
      this.timeout = 0;
      this.timeout = this.initialTimeOut;
      this._timeoutEnd = false;
      this._clearDigits = true;
    },

    /**
    * Listener after closing modal with both X or button
    **/
    _onCloseModal: function() {
      if (this.clearOnClose) {
        this.set('_inputValue', '');
      }
      if (this.$.modal.canceled) {
        this.reset();
      }

      this.dispatchEvent(new CustomEvent('cells-sign-operation-modal-reseated', {
        bubbles: true,
        composed: true
      }));
    },

    _setOtpObserver: function() {
      this.set('_modalHeading', 'cells-sign-operation-modal-heading-otp');
      this.set('_modalText', 'cells-sign-operation-modal-info-text');
    },

    _setAppPssObserver: function() {
      this.set('_modalHeading', 'cells-sign-operation-modal-heading-usr-pass');
      this.set('_modalText', 'cells-sign-operation-modal-text');
    },

    /**
    * Open the modal
    **/
    open: function(payload) {
      this._modalType(payload);
      this.resetTimer = true;
      this.$.modal.open();
    },

    /**
     * Select modal to show
     */
    _modalType: function(type) {
      if (type) {
        var image = type.data + '.svg' || 'otp-token';
        this.set('imgSrc', 'images/otp/' + image);
        this.fire('cells-sign-operation-opened');
        if (type.data !== 'otp-token') {
          this.set('_modalText', 'cells-sign-operation-modal-info-text-pass');
          this.set('labelPassword', 'cells-sign-operation-pass-label');
          this.hideTimer = true;
        }
      }
    },

    /**
    * Close the modal
    **/
    close: function() {
      this.reset();
      this.$.modal.close();
    },

    /**
    * Get new sms code
    **/
    _reSendSMS: function() {
      this.dispatchEvent(new CustomEvent('cells-sign-operation-get-new-sms', {
        bubbles: true,
        composed: true
      }));

      // this._timeoutEnd = false;
      this.reset();
    },

    /**
    *
    */
    _dispatchCode: function(payload) {
      /**
       * Fired on form's submit
       * @event cells-sign-operation-submit
       */
      this.dispatchEvent(new CustomEvent('cells-sign-operation-submit', {
        detail: (payload.detail.toString().length > 1 && this.showOtp) ? payload.detail : this._inputValue,
        bubbles: true,
        composed: true
      }));
      this.reset();
      this.close();
    },

    /**
    * Enable / disable submit button
    */
    _checkContent: function(input) {
      return (!input.length && this.timeout !== 0) ? true : false;
    },

    /**
    * Notify when timer finished
    */
    _checkTimeOut: function() {
      this._timeoutEnd = true;
    }
  });
}(window.CellsBehaviors));