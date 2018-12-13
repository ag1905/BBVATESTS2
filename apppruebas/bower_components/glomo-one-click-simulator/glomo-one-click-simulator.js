(function() {

  'use strict';

  Polymer({

    is: 'glomo-one-click-simulator',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.AmountBehavior
    ],

    properties: {
      /**
      * One click type
      */
      oneClickType: String,
      /**
      * Offer data from service
      */
      offerData: Object,
      /**
      * Simulate offer when any simulate data changes
      */
      recalculate: {
        type: Boolean,
        value: false
      },
      /**
      * Result after simulate offer
      */
      monthlyPayment: String,
      /**
      * Input amount value and errors
      */
      amountInfo: Object,
      /**
      * Offer is editable
      */
      isEditable: {
        type: Boolean,
        value: false
      },
      /**
      * Simulation is allowed
      */
      isSimulationAllowed: {
        type: Boolean,
        notify: true
      },
      /**
      * Is offer improvable
      */
      isImproved: {
        type: Boolean
      },
      /**
      * Amount props
      */
      amountValue: String,
      amountLabel: String,
      amountMonthlySize: {
        type: String,
        value: 'amount-large'
      },
      monthlyPaymentLabel: String,
      monthlyPaymentLabelFooter: String,
      errorMessage: String,
      errorInput: String,
      /**
       * Amount input config
       */
      language: String,
      currencyCode: String,
      currencySymbol: String,
      localCurrency: String,
      maxAllowedAmount: Number,
      iconSize: String,
      iconCode: String,
      numeralPositiveOnly: Boolean,
      _hideAmountInfo: {
        type: Boolean,
        computed: '_computedHideInfo(isEditable, errorMessage)'
      },
      itemizeFeeAmount: Number,
      /**
      * Slider values
      */
      min: Number,
      max: Number,
      sliderValue: {
        type: Number,
        observer: '_checkSliderValue'
      },
      /**
      * Slider label unit key to translates
      */
      _sliderLabelUnit: {
        type: String,
        value: 'cells-slider-timeline-values'
      },
      /**
      * Slider label single unit key to translates
      */
      _sliderLabelSingleUnit: {
        type: String,
        value: 'cells-slider-timeline-value'
      },
      /**
      * Src header image
      */
      headerImg: String,
      headerTitle: String,
      headerSubTitle: String,

      /**
      * Tax annual message
      */
      annualTax: String,

      /**
      * Hide timeline input slider
      */
      hideSlider: {
        type: Boolean,
        value: false
      },

      /**
      * Hide monthly payment
      */
      hideMonthlyPayment: {
        type: Boolean,
        value: false
      },

      showInfo: {
        type: Boolean,
        value: false
      },

      /**
      * Info messages
      */
      termConditionsInfo: String,
      termConditionsInfoLink: String,
      termConditionsInfoIvaInfo: String,

      disableButton: {
        type: Boolean,
        computed: '_computeDisableButton(amountCheck, errorMessage)'
      },

      amountCheck: Number,

      /**
      * Main box Scroll value and manage sticky footer
      */
      scrollTop: {
        type: Number,
        observer: 'manageScroll'
      },

      /**
      * Check recaculate height sticky footer
      */
      recalculateHeight: {
        type: Boolean,
        value: false
      },

      sticky: Number,

      offset: Number,

      windowHeight: Number,

      /**
      * Shoe link to call assistance
      */
      showAssistanceCall: {
        type: Boolean,
        value: false
      }
    },

    listeners: {
      'amount-input-changed': 'setAmountCheckChanged'
    },

    observers: [
      '_setOfferInfo(offerData)'
    ],

    reset: function() {
      this.suggestedAmount = '';
      this.sliderValue = 0;
      this.isSimulationAllowed = null;
      this.recalculateHeight = false;
      this.resetAmount();
    },

    resetAmount: function() {
      this.errorInput = null;
      this.errorMessage = null;
    },

    /**
    * Set offer info on template properties
    */
    _setOfferInfo: function(offerData) {
      if (offerData) {
        this.itemizeFeeAmount = offerData.details.itemizeFeeAmount;

        if (!offerData.simulate) {
          this._setLimitsTerms(offerData.terms);
        }
        this._setInfoMessages(offerData.amount, offerData.rates);
        this._setRatesInfo(offerData.rates);
        if (offerData.card) {
          this._setCardInfo(offerData.card);
        }
        this.isEditable = offerData.editable && offerData.isSimulationAllowed;
        this.resetAmount();
        if (!this.recalculateHeight) {
          this.recalculateHeight = true;
          this._recalculateHeight();
        }

        // If not has isSimulationAllowed prop, set of detail offer
        if (typeof (this.isSimulationAllowed) !== 'boolean') {
          this.isSimulationAllowed = !!offerData.isSimulationAllowed;
        }
      }
    },

    /**
    * Generate minimun and maximun amount dynamic message
    */
    _setInfoMessages(amount, rates) {
      var monthlyPercentage = rates && rates.monthly && rates.monthly.percentage;
      var annualPercentage = rates && rates.ponderate && rates.ponderate.percentage;

      this.currencySymbol = this._getCurrencyAsSymbol(this.localCurrency, this.localCurrency);

      this.set('headerMessage', this.t(this.oneClickType + '-one-click-simulator-info-main-message', '', {
        annualTax: '' + monthlyPercentage
      }));

      this.set('amountInfoMinMax', this.t(this.oneClickType + '-one-click-simulator-info-message-min-max', '',
        {
          min: this.getFormattedAmount(amount.minimumAmount, amount.minimumAmountCurrency, this.localCurrency, this.language),
          max: this.getFormattedAmount(amount.maximunAmount, amount.maximunAmountCurrency, this.localCurrency, this.language)
        })
      );
      this.set('amountLabel', this.t(this.oneClickType + '-one-click-simulator-amount-label'));
      this.set('monthlyPaymentLabel', this.t(this.oneClickType + '-one-click-simulator-monthly-payment-label'));
      this.set('monthlyPaymentLabelFooter', this.t(this.oneClickType + '-one-click-simulator-monthly-payment-label-footer', '', {
        annualTax: annualPercentage
      }));
      if (rates.revire && this.isImproved) {
        this.set('headerTitle', this.t(this.oneClickType + '-one-click-simulator-info-header-title-revire'));
        this.set('headerSubTitle', this.t(this.oneClickType + '-one-click-simulator-info-header-subtitle-revire', '', { oldOffer: rates.yearly.percentage, lastOffer: rates.revire.percentage }));
      }
      this.currencyCode = amount.minimumAmountCurrency;
      this.amountValue = this.suggestedAmount = amount.suggestedAmount;
      this.monthlyPayment = amount.monthlyPayment;
    },

    /**
    * Generate rates messages
    */
    _setRatesInfo(rates) {
      this.set('termConditionsInfo', this.t(this.oneClickType + '-one-click-simulator-term-conditions-info'));
      this.set('termConditionsInfoLink', this.t(this.oneClickType + '-one-click-simulator-term-conditions-info-link'));
      this.set('termConditionsInfoIvaInfo', this.t(this.oneClickType + '-one-click-simulator-iva-info', '',
        {
          catName: rates.yearly && rates.yearly.name,
          cat: rates.yearly && rates.yearly.percentage,
          date: rates.yearly && rates.yearly.date,
          percentagePonderate: rates.ponderate && rates.ponderate.percentage,
          termAnnual: rates.ponderate && rates.ponderate.percentage,
          currencySymbol: this.currencySymbol,
          feeAmount: this.itemizeFeeAmount,
          endDate: this.offerData && this.offerData.endDate,
        }
      ));
    },

    /**
    * Generate card info
    */
   _setCardInfo(card) {
    var title = this.offerData && this.offerData.type && this.offerData.type.name ?
                this.offerData.type.name + '<br><br><strong>'+ card.name +'</strong><br>' + card.number :
                this.t(this.oneClickType + '-one-click-simulator-info-header-title', '', { cardNumber: card.number, cardName: card.name });
    this.set('amountInfo', this.t(this.oneClickType + '-one-click-simulator-info-message', '', { currencySymbol: this.currencySymbol, amount: card.grantedCredit }));
    this.set('headerTitle', title);
  },

    /**
   * Set slider initial cofig
   */
    _setLimitsTerms: function(terms) {
      this.min = terms && terms.minimumTerms;
      this.max = terms && terms.maximumTerms;
      this.sliderValue = terms && terms.suggestedTerm || terms && terms.allowedTerms && terms.allowedTerms[0];
    },

    /**
    * Manage amount error and info mnessages
    */
    _checkAmountLimits: function(ev) {
      this.resetAmount();
      var amount = this.offerData && this.offerData.amount;
      var error = null;
      if (this.amountValue > (amount && amount.maximunAmount)) {
        error = 'max';
      }
      if (this.amountValue < (amount && amount.minimumAmount) || this.amountValue <= 0 || !this.amountValue) {
        error = 'min';
      }
      if (error) {
        this.errorMessage = this.t(this.oneClickType + '-one-click-simulator-amount-limit-' + error + '-error', '', { min: amount.minimumAmount, max: amount.maximunAmount, currencySymbol: this.currencySymbol });
        this.errorInput = 'error';
      } else {
        if (this.isSimulationAllowed && this.amountValue) {
          this.sendOffer(ev);
        }
      }
    },

    /**
    * Send data to simulate offer
    */
    sendOffer: function(ev) {
      this.dispatchEvent(new CustomEvent((ev.type !== 'focusout' ? 'default' : 'simulate') + '-offer', {
        detail: {
          amount: this.amountValue,
          terms: this.sliderValue,
          currency: this.localCurrency,
          type: this.oneClickType,
          frequency: this.offerData.terms.frequency
        },
        bubbles: true,
        composed: true
      }));
      this.recalculate = false;
    },

    /**
    * Dispatch event to request assistance call
    */
    assistanceCall: function(ev) {
      this.dispatchEvent(new CustomEvent('requested-assistance-call', {
        bubbles: true,
        composed: true
      }));
    },

    setAmountCheckChanged: function(ev) {
      this.set('amountCheck', ev.detail);
    },

    _checkSliderValue: function(newValue, oldValue) {
      var frequency = this.offerData && this.offerData.terms && this.offerData.terms.suggestedTermFrequency ? '-' + this.offerData.terms.suggestedTermFrequency : '';
      this._sliderLabelUnit = 'cells-slider-timeline-values' + frequency;
      this._sliderLabelSingleUnit = 'cells-slider-timeline-value' + frequency;

      if (this.amountValue && newValue && newValue !== oldValue && this.isSimulationAllowed) {
        this.sendOffer();
      }
    },

    _checkedAllowTerms: function(offer, isEditable) {
      return !(offer && offer.terms && offer.terms.allowedTerms && offer.terms.allowedTerms.length > 1) || !isEditable;
    },

    _checkedValue: function(value) {
      return !(value && value.trim());
    },

    _checkedHasLabelFooter: function(label) {
      return label && label.trim() ? 'label-footer' : '';
    },

    _computedHideInfo: function(isEditable, errorMessage) {
      return !isEditable || !!errorMessage;
    },

    _filledAmount: function(amount) {
      return amount && !!(amount + '').length && typeof(amount) !== 'object';
    },

    _computeDisableButton: function(amount, errorMessage) {
      return !amount || !this._filledAmount(amount) || !!errorMessage;
    },

    /**
    * Manage sticky footer
    */
    _recalculateHeight: function() {
      var headerHeigth = 60;
      var summaryHeigth = this.$$('#summary') && this.$$('#summary').clientHeight || 0;
      var offset = this.$.summaryWrapper.offsetTop + summaryHeigth;
      this.windowHeight = window.innerHeight;
      this.sticky = this.windowHeight < offset + headerHeigth ? 'sticky' : '';
    },

    manageScroll: function(ev) {
      var scrollTop = this.scrollTop || ev && ev.scrollTop;
      var offset = this.$.summaryWrapper.offsetTop + (this.$$('#summary') && this.$$('#summary').clientHeight || 0);
      this.sticky = (this.windowHeight > offset - scrollTop) ? '' : 'sticky';
    }
  });
}());