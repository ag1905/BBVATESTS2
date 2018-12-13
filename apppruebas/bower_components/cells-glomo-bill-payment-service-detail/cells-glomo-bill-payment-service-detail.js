(function() {

  'use strict';

  Polymer({

    is: 'cells-glomo-bill-payment-service-detail',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Service item received by data binding with information from the service selected by the user
       * type: Object
       * observer: '_onServiceLoaded'
       */
      selectedService: {
        type: Object,
        observer: '_onServiceLoaded'
      },
      /**
       * Defines if amount is required to be entered by the user or not.
       * type: Boolean
       * observer: '_checkAmountVisibility'
       */
      requiresAmount: {
        type: Boolean,
        value: false
      },
      /**
       * Bill information received by data binding
       * type: Object
       */
      billInformation: {
        type: Object
      },
      /**
       * Language of currency
       * type: String
       */
      language: {
        type: String,
        value: 'es'
      },
      /**
       * Local currency unit defined in the page configuration
       * type: String
       * default: 'EUR'
       */
      localCurrency: {
        type: String,
        value: 'EUR'
      },
      /**
       * Defines if service has a stored reference.
       * @private
       * type: Boolean
       * default: false
       */
      _hasReference: {
        type: Boolean,
        value: false
      },
      /**
       * Reference Value to be binded to parent component.
       * type: String
       * observer: '_checkButtonState'
       */
      reference: {
        type: String,
        notify: true,
        observer: '_checkButtonState'
      },
      /**
       * Amount Value received from children amount inputs.
       * type: Number
       */
      amount: {
        type: Object,
        notify: true
      },
      /**
      * Status amount step button
      * @private
      * type: Boolean
      */
      _disableCalcBtn: {
        type: Boolean,
        value: true
      },
      /**
       * Defines if save service has been selected.
       * @private
       * type: Boolean
       * default: false
       */
      checked: {
        type: Boolean,
        value: false
      },
      /**
       * Alias Value binded from child input component.
       * type: String
       */
      alias: String,
      /**
       * Enabled selectable amounts radios
       * type: Number
       */
      selectable: Boolean,
      /**
       * Index of selected radio
       * type: Number
       */
      selectedRadio: Number,
      /**
       * Verification to send
       * type: Boolean
       */
      verification: Boolean,
      /**
       * Show calc btn
       * type: Boolean
       */
      requireCalc: Boolean,
      /**
       * Show agreement number
       * type: Boolean
       */
      agreementEnabled: Boolean,
      /**
       * Label button continue or aplly changes
       * type: {Boolean}
       */
      _labelButton: {
        type: String,
        computed: '_setLabelButton(_applyChanges)'
      },
      /**
       * Apply change label button
       * type: {Boolean}
       */
      _applyChanges: {
        type: Boolean,
        value: false
      },
      /**
       * Cached service
       * type: {Boolean}
       */
      cached: {
        type: Boolean,
        notify: true
      },
      /**
       * Saved service
       * type: {Boolean}
       */
      saved: {
        type: Boolean,
        notify: true
      },
      /**
      * Allow only postive amounts values
      */
      numeralPositiveOnly: {
        type: Boolean,
        value: false
      },
      /**
      * Date format
      */
      format: {
        type: String,
        value: 'DD MMM YYYY'
      }
    },

    observers: [
      '_setBills(billInformation)',
      '_onChangeAmount(amount.amount)'
    ],

    listeners: {
      'cells-molecule-icons-input-click': '_checkedInfo'
    },

    /**
     * Sets properties when service item is set in the component
     * @private
     */
    _onServiceLoaded: function(service) {
      this._reset();

      if (service) {
        this.set('_hasReference', !!service.billNumber);
        this.set('requiresAmount', (service && service.billInformation) ? service.billInformation.requiresAmount : false);
        this.set('requireCalc', !this.requiresAmount);

        if (this._hasReference) {
          this.set('reference', service && service.billNumber);
        }
      }
    },
    /**
     * Sets different amount values when requiresAmount is false and bill information is required
     * @private
     */
    _setBills: function(bills) {
      if (bills && bills.totalDebt) {
        if (this.selectable) {
          this.set('amount.currency', bills.totalDebt && bills.totalDebt.currency);
        } else if (!this.selectable && !this.requiresAmount) {
          this.set('verification', true);
          this.set('amount', bills.totalDebt);
        }

        this.set('requireCalc', false);
      } else {
        this.set('requireCalc', false);
        this.set('requiresAmount', true);
      }
      this.set('_hasReference', true);
    },
    /**
     * Reset all properties and states when service selected is changed
     * @private
     */
    _reset: function() {
      this.set('amount', {
        amount: '',
        currency: this.localCurrency,
        resetAmount: ''
      });

      this.set('verification', false);
      this.set('requireCalc', false);
      this.set('reference', '');
      this.set('collapsed', '');
      this.set('_applyChanges', false);

      this._resetRadios();
      this._resetInputAlias();
      this._resetTmp();
    },
    /**
     * Reset checkbox and input alias
     * @private
     */
    _resetInputAlias: function() {
      this.set('checked', false);
      this.set('alias', '');
    },
    /**
     * Reset tmp properties
     * @private
     */
    _resetTmp: function() {
      this.set('saved', false);
      this.set('cached', false);
    },
    /**
     * Manage button configuration depending on amount and reference value changes
     * @private
     */
    _checkButtonState: function(reference) {
      var requiresAmount = ((this.selectedService || {}).billInformation || {}).requiresAmount;
      this.set('_disableCalcBtn', !(requiresAmount || reference));
    },
    /**
     * Action performed after clicking on calculateAmount button
     * @private
     * @event 'request-bill'
     */
    _calculateAmount: function() {
      this.fire('request-bill', this.reference);
    },
    /**
     * If simulated payment has been requested, sets amount object and fires amount-entered event
     * else, request simulated payment
     * @private
     * @event 'amount-entered'
     */
    _continue: function() {
      if (this.verification) {
        this.fire('amount-entered');
        this.set('cached', true);

        if (this.selectable) {
          this.set('requiresAmount', this.selectedService.billInformation && this.selectedService.billInformation.requiresAmount || this.billInformation && !this.billInformation.totalDebt);
          this.set('verification', false);
          this.set('_applyChanges', false);
        }

        if (this.checked && !this.saved) {
          this.fire('save-service', {
            'alias': this.alias,
            'reference': this.reference
          });
          this.set('saved', true);
        }
      } else {

        if (this.cached && !this._applyChanges) {
          this.fire('amount-entered');
        } else {
          this.set('_hasReference', true);
          this.set('_applyChanges', false);
          this.set('verification', true);
        }
      }
    },
    /**
     * On saved contact successful, manage input alias
     * @private
     */
    onSavedContact: function() {
      this._resetInputAlias();
    },
    /**
     * Fires choose-another-service event when user clicks on Choose another service link
     * @private
     * @event 'choose-another-service'
     */
    _chooseAnotherService: function() {
      this._resetTmp();
      this.fire('choose-another-service');
    },
    /**
     * Checked origin event to open Info modal
     * @private
     */
    _checkedInfo: function(e) {
      if (e.detail.currentTarget.id === 'infoIcon') {
        this._openModalBillInformation();
      }
    },
    /**
     * Open Info modal
     * @private
     */
    _openModalBillInformation: function() {
      if (this.selectedService && this.selectedService.billInformation) {
        this.dispatchEvent(new CustomEvent('open-modal-service-bill-information', {
          bubbles: true,
          composed: true,
          detail: {
            header: this.t('cells-glomo-bill-payment-service-detail_modal-title'),
            image: this.selectedService.billInformation.help.helpImage.url,
            notification: {
              type: 'info',
              icon: 'coronita:info',
              iconSize: 26,
              message: this.selectedService.billInformation.help.helpText
            },
            btns: {
              primary: {
                text: this.t('cells-glomo-bill-payment-service-detail_modal-button-primary'),
                class: 'primary'
              }
            }
          }
        }));
      }
    },
    /**
     * Select radio
     * @private
     */
    _selectRadio: function(e) {
      var index = Number(e.currentTarget.dataset.index);
      var id = e.currentTarget.id;

      this.set('collapsed', (index === 2) ? 'collapsed' : '');
      this.set('amount.amount', (id && this.billInformation[id]) ? this.billInformation[id].amount : '');
      this.set('selectedRadio', index);
    },
    /**
     * Reset only radios and bill
     * @private
     */
    _resetRadios: function() {
      this.set('selectedRadio', -1);
      this.set('billInformation', {});
    },
    /**
     * On change amount, verify if cached and change label button
     * @private
     */
    _onChangeAmount: function(amount) {
      if (this.selectable && amount && this.cached) {
        this.set('_applyChanges', true);
      }
    },
    /**
     * Change label button
     * @private
     */
    _setLabelButton: function(apply) {
      return 'cells-glomo-bill-payment-service-detail_' + (apply ? 'apply-changes' : 'continue');
    },
    /**
     * Checked verification
     * @private
     */
    _checkedVerification: function(reference, amount, verification) {
      var checked = reference && amount && verification;
      if (checked) {
        this.set('requiresAmount', false);
      }

      return checked;
    },
    /**
     * Checked if has reference value and bills
     * @private
     */
    _checkedHasBillsReference: function(reference, totalDebt, verification) {
      if (!reference) {
        this._resetRadios();
      }

      return !!reference && totalDebt && !verification && this.selectable;
    },
    /**
     * Checked radio selected
     * @private
     */
    _checkedSelectedRadio: function(selectedRadio, val) {
      return selectedRadio === val;
    },
    /**
     * Checked value
     * @private
     */
    _checkedValue: function(val) {
      return !!val;
    },
    /**
     * Displays alias input if checkbox is checked
     * @private
     */
    _displayAlias: function(checked) {
      return !checked ? 'alias--hidden' : '';
    },
    /**
     * Parse agreement number
     */
    formatedAgreementNumber: function(agreementNumber) {
      return agreementNumber && this.agreementEnabled ? this.t('cells-glomo-bill-payment-service-detail_agreement-number') + ' ' + agreementNumber : '';
    }
  });
}());