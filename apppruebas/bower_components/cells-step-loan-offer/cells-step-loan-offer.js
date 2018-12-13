(function() {

  'use strict';

  Polymer({

    is: 'cells-step-loan-offer',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.StepBehavior
    ],

    properties: {
      /**
      * Offer data from service
      */
      offer: Object,
      /**
       * Language
       */
      lang: String,
      /**
       * One click Simulator
       */
      oneClickType: {
        type: String,
        value: 'loan'
      },
      /**
       * Header image Simulator
       */
      headerImg: String,
      /**
       * Icon Simulator
       */
      icon: {
        type: String,
        value: 'coronita:close'
      },
      /**
       * Icon size Simulator
       * ex: 'icon-size-26'
       */
      iconSize: String,
      /**
       * Local currency
       */
      localCurrency: String,
      /**
       * is simulable offer
       */
      isSimulationAllowed: Boolean,
      /**
     * Is improvable offer
     */
      isImproved: Boolean,

      /**
      * Value of template scroll
      */
      scrollTop: {
        type: Number,
        notify: true
      },

      /**
      * Value of template scroll
      */
      showAssistanceCall: {
        type: Boolean,
        notify: true
      }
    },

    listeners: {
      'default-offer': '_onClickWantOffer',
      'on-click-change-button': '_onClickChangeOffer',
      'requested-assistance-call': '_onClickAssistanceCall'
    },

    /**
     * Reset
     */
    reset: function() {
      this.statusValid = null;
      this.$.simulator.reset();
    },

    /**
     * Is valid step
     */
    isValid: function() {
      return this.statusValid;
    },

    _onClickWantOffer: function() {
      this.statusValid = true;
      this._setHeaderStyle('header--dark');
      this._collapse();
    },

    _onClickChangeOffer: function() {
      this.statusValid = false;
      this._setHeaderStyle('header--medium');
      this._open();
    },

    _setHeaderStyle: function(style) {
      this.dispatchEvent(new CustomEvent('set-header-style', {
        bubbles: true,
        composed: true,
        detail: style
      }));
    },

    _open: function() {
      this.collapsed = false;
      this.active = true;
      this.decorated = true;
    },

    _collapse: function() {
      this.collapsed = true;
      this.active = true;
      this.decorated = false;
    },

    _onClickAssistanceCall: function(ev) {
      this.dispatchEvent(new CustomEvent('open-control-veil', {
        bubbles: true,
        composed: true
      }));
      this.dispatchEvent(new CustomEvent('bubble-' + ev.type, {
        bubbles: true,
        composed: true
      }));
    }
  });
}());