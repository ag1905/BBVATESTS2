(function() {
  'use strict';

  Polymer({

    is: 'cells-summary-view',

    behaviors: [
      window.CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Operation
       */
      operation: {
        type: Object,
        observer: 'open',
        value: null
      },
      /**
       * ISO 4217 code for the currency
       */
      currencyCode: String,
      /**
       * ISO 4217 code for the local currency
       */
      localCurrency: String,
      /**
       * translation key for the button label
       */
      buttonLabel: String,
      /**
       * Control who performs addition of fee and amount.
       */
      showAddition: {
        type: Boolean,
        value: false
      },
      /**
       * Show legal terms
       */
      showLegalTerms: {
        type: Boolean,
        value: false
      },

      /**
       * If true, an skeleton will be shown until there is operation info
       */
      showLoadingSkeleton: {
        type: Boolean,
        value: false
      }
    },

    /**
     * Reset operation
     */
    reset: function() {
      this.set('operation', null);
    },

    /**
     * Dispatch event to open summary view
     */
    open: function() {
      if (this.operation) {
        this.dispatchEvent(new CustomEvent('summary-open', {
          bubbles: true,
          composed: true,
          detail: true
        }));
      }
    },
    /**
     * button press listener. Fires an event
     */
    _onButtonPressed: function() {
      this.dispatchEvent(new CustomEvent('summary-closed', {
        bubbles: true,
        composed: true
      }));
    },

    /**
     * Dispatch event to see legal terms
     */
    _seeLegalTerms: function() {
      this.dispatchEvent(new CustomEvent('see-legal-terms', {
        bubbles: true,
        composed: true
      }));
    },

    _showSkeleton(loadingSkeleton, operation) {
      return loadingSkeleton && !operation;
    }

    /**
     * fired when the open summary.
     * @event summary-open
     */

    /**
     * fired when the confirm button is pressed.
     * @event summary-closed
     */

    /**
     * fired when the see legal terms is clicked.
     * @event see-legal-terms
     */
  });
}());
