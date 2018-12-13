(function() {
  'use strict';

  Polymer({

    is: 'cells-step-legal-terms',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.StepBehavior,
      CellsBehaviors.AmountBehavior
    ],

    properties: {
      /**
       * Legal terms status
       * @type {Boolean}
       */
      statusTerms: {
        type: Boolean,
        observer: '_onChecked',
        value: false,
        notify: true
      },

      additionInfoFirstCheck: {
        type: Boolean,
        value: false
      },

      additionInfoSecondCheck: {
        type: Boolean,
        value: false
      },

      additionInfoThirdCheck: {
        type: Boolean,
        value: false
      },

      /**
       * Legal terms status
       * @type {Boolean}
       */
      additionalInfoCheckStatus: {
        type: Boolean,
        computed: '_onCheckedAdditionalInfo(additionInfoFirstCheck, additionInfoSecondCheck, additionInfoThirdCheck)'
      },

      /**
       * State of the step
       * @type {Boolean}
       */
      active: {
        type: Boolean
      },

      /**
      * Show / hide additional info (example: one clicks operatives info)
      */
      additionalInfo: {
        type: Boolean,
        value: false
      },

      /**
      * Additional info data to set dynamic locales
      */
      additionalInfoData: {
        type: Object,
        observer: '_setAdditonalInfoData'
      },

      /**
      * Message with additional info conditions data
      */
      additionalInfoConditions: String,

      /**
      * Message with additional info total amount data
      */
      additionalInfoAmount: String,

      localCurrency: String,

      /**
      * translation key for the secondary button label
      */
      secondaryButtonLabel: String,

      /**
      * Secondary button pressed event value
      */
      secondaryButtonEvent: String,

      /**
      * Secondary button style
      */
      secondaryButtonType: {
        type: String,
        value: 'link'
      },
    },

    listeners: {
      'change-pressed': '_onChangePressed'
    },


    /**
     * Is valid step
     */
    isValid: function() {
      return this.statusTerms;
    },

    /**
     * Reset step
     */
    reset: function() {
      this.set('statusTerms', null);
    },

    /**
     * On change pressed step
     */
    _onChangePressed: function(e) {
      e.stopPropagation();
      this.set('collapsed', false);

      this.dispatchEvent(new CustomEvent('legal-terms-has-change', {
        detail: this.statusTerms,
        bubbles: true,
        composed: true
      }));
    },
    /**
     * On check legal terms
     */
    _onChecked: function(checked) {
      var status = checked ? true : false;
      this._manageStep(status);
    },

    /**
    * Set dynamic messages
    */
    _setAdditonalInfoData: function() {
      if (this.additionalInfoData) {
        this.additionalInfoConditions = this.t('cells-step-legal-conditions', '', { product: this.additionalInfoData.product, amount: this.getFormattedAmount(this.additionalInfoData.amount.amount, this.additionalInfoData.amount.currency, this.localCurrency, true, true, true) });
        this.additionalInfoAmount = this.t('cells-step-legal-additional-info-amount', '', { totalAmount: this.getFormattedAmount(this.additionalInfoData.totalAmount.amount, this.additionalInfoData.totalAmount.currency, this.localCurrency, true, true, true) });
      }
    },

    /**
    * Control continue button
    */
    _onCheckedAdditionalInfo: function(additionInfoFirstCheck, additionInfoSecondCheck, additionInfoThirdCheck) {
      return (this.additionalInfoData && this.additionalInfoData.preapproved) ?
        !!(additionInfoFirstCheck && additionInfoSecondCheck && additionInfoThirdCheck === true) :
        !!(additionInfoSecondCheck && additionInfoThirdCheck === true);
    },

    /**
    * Accept legal terms
    */
    _onContinue: function() {
      this._manageStep(true);
    },

    /**
    * Control step status
    */
    _manageStep: function(status) {
      this.set('statusTerms', status);
      this.set('collapsed', status);

      if (this.previousSibling && this.collapsed) {
        this.previousSibling.decorated = false;
      }

      this.dispatchEvent(new CustomEvent('legal-terms-pressed', {
        detail: this.statusTerms,
        bubbles: true,
        composed: true
      }));
    },

    /**
    * Secondary Button event
    */
    _onSecondaryButtonPressed: function(ev) {
      this.dispatchEvent(new CustomEvent(this.secondaryButtonEvent, {
        bubbles: true,
        composed: true
      }));
    },

    /**
     * @event legal-terms-pressed
     * @desc fired when the check is checked. Contains a boolean with legal terms status value
     */

    /**
     * @event legal-terms-has-change
     * @desc fired when the change button is pressed. Contains a boolean with legal terms status value
     */
  });
}());
