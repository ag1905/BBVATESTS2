(function() {
  'use strict';

  Polymer({
    is: 'glomo-alert-manager',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * How long is the session active. Only showed in session expired message
       */
      sessionTimeout: {
        type: Number,
        value: 0
      },

      /**
       * Message code
       */
      code: {
        type: String
      },

      /**
       * configuration selected according to the code property
       **/
      selectedConfig: {
        type: Object
      },

      /**
       * Phone number to call
       **/
      phoneNumber: {
        type: String,
        value: '+51015950000'
      },

      autoLoadMethod: {
        type: String,
        observer: '_onAutoLoadMethod'
      }
    },

    open: function() {
      this.$.modal.open();
    },

    close: function() {
      this.$.modal.close();
      setTimeout(function() {
        this.reset();
      }.bind(this), 500);
    },

    reset: function() {
      this.selectedConfig = {};
    },

    _toggle: function() {
      if (this.$.modal.opened) {
        this.close();
      } else {
        this.open();
      }
    },

    _onAccept: function() {
      var acceptFromHeader = ((event || {}).detail || {}).acceptFromHeader;

      if (!acceptFromHeader && (this.selectedConfig || {}).onAcceptEvent) {
        this.selectedConfig.onAcceptEvent();
      }

      this.dispatchEvent(new CustomEvent('alert-' + this.code + '-accept', { detail: true }));
      this.close();
    },

    _onCancel: function(event) {
      var cancelFromHeader = ((event || {}).detail || {}).cancelFromHeader;

      if (!cancelFromHeader && (this.selectedConfig || {}).onCancelEvent) {
        this.selectedConfig.onCancelEvent();
      }

      this.dispatchEvent(new CustomEvent('alert-' + this.code + '-cancel', { detail: false }));
      this.close();
    },

    _isListTemplate: function(item) {
      return ((item || {}).template || {}).type === 'list';
    },

    _isParagraphsTemplate: function(item) {
      return ((item || {}).template || {}).type === 'paragraphs';
    },

    _isIcon: function(value) {
      return !!(value || {}).icon;
    },

    _isTitle: function(value) {
      return !!(value || {}).title;
    },

    _onAutoLoadMethod: function(method) {
      this[method]();
    },
    /**
     * Open the modal with the params included in settings
     * @param {Object} settings params to open the setup the modal
     */
    openWithSettings: function(settings) {
      if (!settings || settings.selectedConfig === undefined) {
        this.set('code', 'GENERIC-ERROR');
        this.set('selectedConfig', {
          className: 'error',
          openMaximized: false,
          iconOnlyFullHeight: true,
          acceptBtLabel: 'alert-DATA-ERROR-cancel',
          template: {
            type: 'paragraphs',
            values: [
              { icon: 'coronita:alert' },
              { text: 'alert-GENERIC-ERROR-subtext-1' }
            ]
          }
        });
      } else {
        this.set('code', settings.code);
        let selectedConfig = settings.selectedConfig;
        this.set('selectedConfig', {
          className: selectedConfig.className,
          openMaximized: selectedConfig.openMaximized,
          iconOnlyFullHeight: selectedConfig.iconOnlyFullHeight,
          acceptBtLabel: selectedConfig.acceptBtLabel,
          cancelBtLabel: selectedConfig.cancelBtLabel,
          template: selectedConfig.template
        });
      }
      this.open();
    },

    toggleLogout: function() {
      this.code = 'LOGOUT';
      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-LOGOUT-exit',
        cancelBtLabel: 'default-cancel-button',
        template: {
          type: 'paragraphs',
          values: [
            {
              icon: 'coronita:alert',
              class: 'spacing'
            },
            {
              title: 'alert-LOGOUT-accept',
              class: 'strong'
            },
            { text: 'alert-LOGOUT-message' }
          ]
        }
      });

      this._toggle();
    },

    toggleAutomaticLogout: function() {
      this.code = 'AUTOMATIC-LOGOUT';

      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-AUTOMATIC-LOGOUT-accept',
        cancelBtLabel: 'default-cancel-button',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:alert' },
            { text: 'alert-AUTOMATIC-LOGOUT-message' }
          ]
        }
      });

      this._toggle();
    },

    toggleRegisterDevice: function() {
      this.code = 'REGISTER-DEVICE';
      this.set('selectedConfig', {
        openMaximized: true,
        title: 'alert-REGISTER-DEVICE-title',
        heroImage: this.resolveUrl('images/modo_acceso3.svg'),
        acceptBtLabel: 'alert-REGISTER-DEVICE-accept',
        message: 'alert-REGISTER-DEVICE-message',
        template: {
          type: 'list',
          values: [
            {
              icon: 'coronita:email',
              text: 'alert-REGISTER-DEVICE-subtext-1'
            },
            {
              icon: 'coronita:nfcconnect',
              text: 'alert-REGISTER-DEVICE-subtext-2'
            }
          ]
        }
      });
      this._toggle();
    },

    openDataError: function() {
      this.code = 'DATA-ERROR';
      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-DATA-ERROR-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:alert' },
            { text: 'alert-DATA-ERROR-subtext-1' }
          ]
        }
      });

      this.open();
    },

    openServiceError: function(detail) {
      this.code = 'SERVICE-ERROR' + (detail ? '-' + detail : '');
      var eventName = 'service-error-opened';

      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-DATA-ERROR-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:error' },
            { text: 'alert-SERVICE-ERROR-title' },
            { text: 'alert-SERVICE-ERROR-subtext' },
          ]
        }
      });

      this.open();
      this.dispatchEvent(new CustomEvent('service-error-opened'));
    },

    openDataChanged: function() {
      this.code = 'DATA-CHANGED';
      this.set('selectedConfig', {
        className: 'alert',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-DATA-CHANGED-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:alarm' },
            { text: 'alert-DATA-CHANGED-subtext-1' },
            { text: 'alert-DATA-CHANGED-subtext-2' }
          ]
        }
      });

      this.open();
    },

    openChangeUser: function() {
      this.code = 'CHANGE-USER';
      this.set('selectedConfig', {
        className: 'info',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-CHANGE-USER-accept',
        cancelBtLabel: 'alert-CHANGE-USER-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:info' },
            { text: 'alert-CHANGE-USER-message' }
          ]
        }
      });

      this.open();
    },

    openSessionExpired: function(detail) {
      var sessionTimeout = (detail || {}).sessionTimeout || this.sessionTimeout;
      var message = this.t('alert-SESSION-EXPIRED-message', '', {
        time: sessionTimeout
      });

      this.code = 'SESSION-EXPIRED';

      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-SESSION-EXPIRED-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:alert' },
            { text: message }
          ]
        }
      });

      this.async(this.open, 300);
      this.dispatchEvent(new CustomEvent('session-expired-opened'));
    },

    openSpeiLinkWarning: function(detail) {
      var message = this.t('alert-SPEI-LINK-WARNING-message', '', {
        lastAccount: detail.lastAccount,
        nextAccount: detail.nextAccount
      });

      this.code = 'SPEI-LINK-WARNING';

      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-SPEI-LINK-WARNING-accept',
        cancelBtLabel: 'default-cancel-button',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:alert' },
            { text: message }
          ]
        }
      });

      this.open();
    },

    openAccessPasswordWrong: function() {
      this.code = 'ACCESS-PASSWORD-WRONG';
      this.set('selectedConfig', {
        openMaximized: true,
        className: 'full-height-error',
        title: 'alert-ACCESS-PASSWORD-WRONG-title',
        heroImage: this.resolveUrl('images/wrong-password.svg'),
        message: 'alert-ACCESS-PASSWORD-WRONG-message',
        acceptBtLabel: 'alert-ACCESS-PASSWORD-WRONG-accept',
        cancelBtLabel: 'alert-ACCESS-PASSWORD-WRONG-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-ACCESS-PASSWORD-WRONG-subtext-1' },
            { text: 'alert-ACCESS-PASSWORD-WRONG-subtext-2' }
          ]
        }
      });

      this.open();
    },

    openOtpSmsWrong: function() {
      this.code = 'OTP-SMS-WRONG';
      this.set('selectedConfig', {
        openMaximized: true,
        className: 'full-height-error',
        title: 'alert-OTP-SMS-WRONG-title',
        heroImage: this.resolveUrl('images/wrong-otp-sms.svg'),
        message: 'alert-OTP-SMS-WRONG-message',
        acceptBtLabel: 'alert-OTP-SMS-WRONG-accept',
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-OTP-SMS-WRONG-subtext-1' },
            { text: 'alert-OTP-SMS-WRONG-subtext-2' }
          ]
        }
      });

      this.open();
    },

    openBlockedCauseRetrials: function() {
      this.code = 'BLOCKED-CAUSE-RETRIALS';
      this.set('selectedConfig', {
        openMaximized: true,
        className: 'full-height-error',
        title: 'alert-BLOCKED-CAUSE-RETRIALS-title',
        heroImage: this.resolveUrl('images/wrong-password.svg'),
        message: 'alert-BLOCKED-CAUSE-RETRIALS-message',
        acceptBtLabel: 'alert-BLOCKED-CAUSE-RETRIALS-accept',
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-BLOCKED-CAUSE-RETRIALS-subtext-1' }
          ]
        }
      });

      this.open();
    },

    openCardlessWithdrawalWrong: function() {
      this.code = 'CARDLESS-WITHDRAWAL-ERROR';
      this.set('selectedConfig', {
        openMaximized: true,
        className: 'full-height-error',
        title: 'alert-CARDLESS-WITHDRAWAL-title',
        heroImage: this.resolveUrl('images/canceled_transaction.svg'),
        message: 'alert-CARDLESS-WITHDRAWAL-message',
        acceptBtLabel: 'alert-CARDLESS-WITHDRAWAL-accept',
        cancelBtLabel: 'alert-CARDLESS-WITHDRAWAL-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-CARDLESS-WITHDRAWAL-subtext-1' },
            { text: 'alert-CARDLESS-WITHDRAWAL-subtext-2' }
          ]
        }
      });

      this.open();
    },

    openMobileTopUpWrong: function() {
      this.code = 'MOBILE-TOP-UP-ERROR';
      this.set('selectedConfig', {
        openMaximized: true,
        className: 'full-height-error',
        title: 'alert-MOBILE-TOP-UP-title',
        heroImage: this.resolveUrl('images/canceled_transaction.svg'),
        message: 'alert-MOBILE-TOP-UP-message',
        acceptBtLabel: 'alert-MOBILE-TOP-UP-accept',
        cancelBtLabel: 'alert-MOBILE-TOP-UP-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-MOBILE-TOP-UP-subtext-1' },
            { text: 'alert-MOBILE-TOP-UP-subtext-2' }
          ]
        }
      });

      this.open();
    },

    minimumAmountPayment: function() {
      this.code = 'MINIMUM-AMOUNT-PAYMENT';
      this.set('selectedConfig', {
        className: 'info',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-SESSION-EXPIRED-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:info' },
            { title: 'alert-MINIMUM-AMOUNT-PAYMENT-title' },
            { text: 'alert-MINIMUM-AMOUNT-PAYMENT-message' }
          ]
        }
      });

      this.open();
    },

    minimumAmountToAvoidInterest: function() {
      this.code = 'MINIMUM-AMOUNT-PAYMENT-TO-AVOID-INTEREST';
      this.set('selectedConfig', {
        className: 'info',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-SESSION-EXPIRED-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:info' },
            { title: 'alert-MINIMUM-AMOUNT-TO-AVOID-INTEREST-title' },
            { text: 'alert-MINIMUM-AMOUNT-TO-AVOID-INTEREST-message' }
          ]
        }
      });

      this.open();
    },

    totalAmountPayment: function() {
      this.code = 'CURRENT-AMOUNT-PAYMENT';
      this.set('selectedConfig', {
        className: 'info',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-SESSION-EXPIRED-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:info' },
            { title: 'alert-CURRENT-AMOUNT-PAYMENT-title' },
            { text: 'alert-CURRENT-AMOUNT-PAYMENT-message' }
          ]
        }
      });

      this.open();
    },

    openCreditCardPaymentWrong: function() {
      this.code = 'CREDIT-CARD-PAYMENT-ERROR';
      this.set('selectedConfig', {
        openMaximized: true,
        className: 'full-height-error',
        title: 'alert-CREDIT-CARD-PAYMENT-title',
        heroImage: this.resolveUrl('images/canceled_transaction.svg'),
        message: 'alert-CREDIT-CARD-PAYMENT-message',
        acceptBtLabel: 'alert-CREDIT-CARD-PAYMENT-accept',
        cancelBtLabel: 'alert-CREDIT-CARD-PAYMENT-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-CREDIT-CARD-PAYMENT-subtext-1' }
          ]
        }
      });

      this.open();
    },

    openMaximumDailyLimitExceededError: function() {
      this.code = 'MAXIMUM-DAILY-LIMIT-EXCEEDED-ERROR';
      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-MAXIMUM-DAILY-LIMIT-EXCEEDED-ERROR-accept',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:alert' },
            { text: 'alert-MAXIMUM-DAILY-LIMIT-EXCEEDED-ERROR-message' }
          ]
        }
      });

      this.open();
    },

    openAmountOverBalanceError: function() {
      this.code = 'AMOUNT-OVER-BALANCE-ERROR';
      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-AMOUNT-OVER-BALANCE-ERROR-accept',
        cancelBtLabel: 'alert-AMOUNT-OVER-BALANCE-ERROR-cancel',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:alert' },
            { text: 'alert-AMOUNT-OVER-BALANCE-ERROR-message' }
          ]
        }
      });

      this.open();
    },

    openNotAllowedSearchThirdPersonsError: function() {
      this.code = 'NOT-ALLOWED-SEARCH-THIRD-PERSON-ERROR';
      this.set('selectedConfig', {
        openMaximized: true,
        className: 'full-height-error',
        title: 'alert-NOT-ALLOWED-SEARCH-THIRD-PERSON-ERROR-title',
        heroImage: this.resolveUrl('images/process-error.svg'),
        message: 'alert-NOT-ALLOWED-SEARCH-THIRD-PERSON-ERROR-message',
        acceptBtLabel: 'alert-NOT-ALLOWED-SEARCH-THIRD-PERSON-ERROR-accept',
        cancelBtLabel: 'alert-NOT-ALLOWED-SEARCH-THIRD-PERSON-ERROR-cancel',
        onCancelEvent: function() {
          window.open('tel:' + this.phoneNumber, '_system');
        },
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-NOT-ALLOWED-SEARCH-THIRD-PERSON-ERROR-subtext-1' }
          ]
        }
      });
      this.open();
    },

    openAccountWithoutAllowedHoldersError: function() {
      this.code = 'ACCOUNT-WITHOUT-ALLOWED-HOLDERS';
      this.set('selectedConfig', {
        openMaximized: true,
        className: 'full-height-error',
        title: 'alert-ACCOUNT-WITHOUT-ALLOWED-HOLDERS-title',
        heroImage: this.resolveUrl('images/process-error.svg'),
        message: 'alert-ACCOUNT-WITHOUT-ALLOWED-HOLDERS-message',
        acceptBtLabel: 'alert-ACCOUNT-WITHOUT-ALLOWED-HOLDERS-accept',
        cancelBtLabel: 'alert-ACCOUNT-WITHOUT-ALLOWED-HOLDERS-cancel',
        onCancelEvent: function() {
          window.open('tel:' + this.phoneNumber, '_system');
        },
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-ACCOUNT-WITHOUT-ALLOWED-HOLDERS-subtext-1' }
          ]
        }
      });
      this.open();
    },

    openBackendErrorPe: function() {
      this.code = 'BACKEND-ERROR-TRANSFERS-PE';
      this.set('selectedConfig', {
        openMaximized: true,
        className: 'full-height-error',
        title: 'alert-BACKEND-ERROR-TRANSFERS-PE-title',
        heroImage: this.resolveUrl('images/error_500.svg'),
        message: 'alert-BACKEND-ERROR-TRANSFERS-PE-message',
        acceptBtLabel: 'alert-BACKEND-ERROR-TRANSFERS-PE-accept',
        cancelBtLabel: 'alert-BACKEND-ERROR-TRANSFERS-PE-cancel',
        onCancelEvent: function() {
          window.open('tel:' + this.phoneNumber, '_system');
        },
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-BACKEND-ERROR-TRANSFERS-PE-subtext-1' }
          ]
        }
      });
      this.open();
    },

    openRenewKeyTransaction: function() {
      this.code = 'RENEW-KEY-TRANSACTION';
      this.set('selectedConfig', {
        className: 'info',
        openMaximized: false,
        iconOnlyFullHeight: true,
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:help' },
            { text: 'alert-RENEW-KEY-TRANSACTION-message' }
          ]
        }
      });

      this.open();
    },

    openRenewKeyTransactionError: function() {
      this.code = 'RENEW-KEY-TRANSACTION-ERROR';
      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-RENEW-KEY-TRANSACTION-ERROR-accept',
        onAcceptEvent: function() {
          window.open('tel:' + this.phoneNumber, '_system');
        },
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:error' },
            { text: 'alert-RENEW-KEY-TRANSACTION-ERROR-message' }
          ]
        }
      });

      this.open();
    },

    openAtmLocatorWelcome: function() {
      this.code = 'ATM-LOCATOR-WELCOME';
      this.set('selectedConfig', {
        openMaximized: true,
        className: 'full-height-error',
        title: 'alert-ATM-LOCATOR-WELCOME-title',
        heroImage: this.resolveUrl('images/atm_locator_welcome.svg'),
        message: 'alert-ATM-LOCATOR-WELCOME-message',
        acceptBtLabel: 'alert-ATM-LOCATOR-WELCOME-accept',
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-ATM-LOCATOR-WELCOME-subtext-1' }
          ]
        }
      });

      this.open();
    },

    openCardlessWithdrawalHistoricError: function() {
      this.code = 'CARDLESS-WITHDRAWAL-HISTORIC-ERROR';
      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-CARDLESS-WITHDRAWAL-HISTORIC-ERROR-accept',
        onAcceptEvent: function() {
          window.open('tel:' + this.phoneNumber, '_system');
        },
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:error' },
            { text: 'alert-CARDLESS-WITHDRAWAL-HISTORIC-ERROR-message' }
          ]
        }
      });

      this.open();
    },


    openChangePasswordDefaultError: function() {
      this.code = 'CHANGE-PASSWORD-ERROR';
      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-CHANGE-PASSWORD-ERROR-accept',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:error' },
            { text: 'alert-CHANGE-PASSWORD-ERROR-message' }
          ]
        }
      });

      this.open();
    },

    openChangePasswordUsedBefore: function() {
      this.code = 'CHANGE-PASSWORD-USED-BEFORE';
      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-CHANGE-PASSWORD-USED-BEFORE-accept',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:error' },
            { text: 'alert-CHANGE-PASSWORD-USED-BEFORE-message' }
          ]
        }
      });

      this.open();
    },

    openChangePasswordTriedError: function() {
      this.code = 'CHAGE-PASSWORD-TRIED-ERROR';
      this.set('selectedConfig', {
        className: 'error',
        openMaximized: true,
        iconOnlyFullHeight: true,
        heroImage: this.resolveUrl('images/process-error.svg'),
        acceptBtLabel: 'alert-CHAGE-PASSWORD-TRIED-ERROR-accept',
        template: {
          type: 'paragraphs',
          values: [
            { title: 'alert-CHANGE-PASSWORD-TRIED-title' },
            { text: 'alert-CHAGE-PASSWORD-TRIED-ERROR-message' }
          ]
        }
      });

      this.open();
    },

    /**
     * Generic error used then there is not connection with the server
     */
    openNetworkError: function(detail) {
      var sessionTimeout = (detail || {}).sessionTimeout || this.sessionTimeout;
      var message = this.t('alert-NETWORK-ERROR-message', '', {
        time: sessionTimeout
      });

      this.code = 'NETWORK-ERROR';

      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-NETWORK-ERROR-accept',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:alert' },
            { text: message }
          ]
        }
      });

      this.async(this.open, 300);
      this.dispatchEvent(new CustomEvent('network-error-opened'));
    },

    locationPermissionDenied: function() {
      this.code = 'LOCATION-PERMISSION-DENIED';
      this.set('selectedConfig', {
        className: 'info',
        openMaximized: false,
        iconOnlyFullHeight: true,
        cancelBtLabel: 'alert-LOCATION-PERMISSION-DENIED-cancel-button',
        template: {
          type: 'paragraphs',
          values: [
            { icon: 'coronita:info' },
            { title: 'alert-LOCATION-PERMISSION-DENIED-title' },
            { text: 'alert-LOCATION-PERMISSION-DENIED-message' }
          ]
        }
      });

      this.open();
    },

    openCardSwitchInfo: function() {
      this.code = 'CARD-SWITCH-INFO';
      this.set('selectedConfig', {
        className: 'full-height-error',
        openMaximized: true,
        iconOnlyFullHeight: true,
        title: 'alert-CARD-SWITCH-INFO-title-modal',
        subtitle: 'alert-CARD-SWITCH-INFO-subtitle',
        acceptBtLabel: 'alert-CARD-SWITCH-INFO-accept',
        heroImage: this.resolveUrl('images/mobileOnOff.png'),
        template: {
          type: 'paragraphs',
          values: [
            { text: 'alert-CARD-SWITCH-INFO-message' }
          ]
        }
      });

      this.open();
    },
    openEcomerceActivation: function() {
      this.code = 'ECOMERCE-ACTIVATION';
      this.set('selectedConfig', {
        className: 'info',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-ECOMERCE-ACTIVATION-accept',
        template: {
          type: 'paragraphs',
          values: [
            {
              icon: 'coronita:help',
              class: 'spacing'
            },
            {
              title: 'alert-ECOMERCE-ACTIVATION-title'
            },
            {
              text: 'alert-ECOMERCE-ACTIVATION-message',
              class: 'spacing'
            }
          ]
        }
      });

      this.open();
    },
    openCashwithdrawalActivation: function() {
      this.code = 'CASHWITHDRAWAL-ACTIVATION';
      this.set('selectedConfig', {
        className: 'info',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-CASHWITHDRAWAL-ACTIVATION-accept',
        template: {
          type: 'paragraphs',
          values: [
            {
              icon: 'coronita:help',
              class: 'spacing'
            },
            {
              title: 'alert-CASHWITHDRAWAL-ACTIVATION-title'
            },
            {
              text: 'alert-CASHWITHDRAWAL-ACTIVATION-message',
              class: 'spacing'
            }
          ]

        }
      });

      this.open();
    },
    openForeignPurchasesActivation: function() {
      this.code = 'FOREIGN-PURCHASES-ACTIVATION';
      this.set('selectedConfig', {
        className: 'info',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-FOREIGN-PURCHASES-ACTIVATION-accept',
        template: {
          type: 'paragraphs',
          values: [
            {
              icon: 'coronita:help',
              class: 'spacing'
            },
            {
              title: 'alert-FOREIGN-PURCHASES-ACTIVATION-title'
            },
            {
              text: 'alert-FOREIGN-PURCHASES-ACTIVATION-message',
              class: 'spacing'
            }
          ]
        }
      });

      this.open();
    },

    openLoanOfferAssistanceCall: function() {
      this.code = 'LOAN-OFFER-ASSISTANCE-CALL-SUCCESS';
      this.set('selectedConfig', {
        className: 'info',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-LOAN-OFFER-ASSISTANCE-CALL-SUCCESS-accept',
        template: {
          type: 'paragraphs',
          values: [
            {
              icon: 'coronita:correct',
              class: 'spacing'
            },
            {
              title: 'alert-LOAN-OFFER-ASSISTANCE-CALL-SUCCESS-title'
            },
            {
              text: 'alert-LOAN-OFFER-ASSISTANCE-CALL-SUCCESS-message',
              class: 'spacing'
            }
          ]
        }
      });

      this.open();
    },

    openExitOperative: function() {
      this.code = 'EXIT-OPERATIVE';
      this.set('selectedConfig', {
        className: 'error',
        openMaximized: false,
        iconOnlyFullHeight: true,
        acceptBtLabel: 'alert-EXIT-OPERATIVE-accept',
        cancelBtLabel: 'alert-EXIT-OPERATIVE-cancel',
        template: {
          type: 'paragraphs',
          values: [
            {
              icon: 'coronita:alert',
              class: 'spacing'
            },
            {
              text: 'alert-EXIT-OPERATIVE-message'
            }
          ]
        }
      });

      this.open();
    }
  });
}());