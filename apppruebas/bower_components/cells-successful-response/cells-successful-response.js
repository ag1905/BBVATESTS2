(function() {
  'use strict';

  Polymer({
    /**
     * On click primary button
     * @event cells-successful-response-click-primary
     */

    /**
     * On click secondary button
     * @event cells-successful-response-click-secondary
     */

    is: 'cells-successful-response',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Result operation
       * @type {Object}
       */
      result: {
        type: Object,
        notify: true
      },
      /**
       * Format date
       * @type {String}
       */
      formatDate: {
        type: String,
        value: 'ddMMYYYY'
      },
      /**
       * Local currency
       * @type {String}
       */
      localCurrency: {
        type: String,
        value: 'USD'
      },
      /**
       * Type of response
       * @type {String}
       */
      type: String,
      /**
       * Product Id origin
       * @type {String}
       */
      productId: String,
      /**
       * Page on param on click secondary button
       * @type {String}
       */
      page: String,
      /**
       * Visible char of product
       * @type {Number|String}
       */
      visibleChars: Number,
      /**
       * Image source
       * @type {String}
       */
      imgSrc: {
        type: String,
        computed: '_imgSrcComputed(result)'
      },
      /**
       * Possible values for img src
       */
      canceledSrcImg: String,
      settledSrcImg: String,
      pendingSrcImg: String
    },
    /**
     * Reset
     */
    reset: function() {
      this.set('productId', undefined);
      this.set('page', '');
      this.set('result', undefined);
    },
    /**
     * Checked if has destination
     */
    _checkedDest: function(origin, dest) {
      return origin && dest;
    },
    /**
     * Return img source depending on result status
     */
    _imgSrcComputed: function(result) {
      return result && result.status ? this[result.status + 'SrcImg'] : '';
    },
    /**
     * Notify event on click primary button
     */
    _notifyPrimary: function(e) {
      if (e.target.data.action) {
        this.dispatchEvent(new CustomEvent(e.target.data.action, {
          bubbles: true,
          composed: true,
          detail: {
            page: this.page
          }
        }));

        this.dispatchEvent(new CustomEvent('cells-successful-response-click-primary', {
          bubbles: true,
          composed: true,
          detail: {
            page: this.page,
            action: e.target.data.action
          }
        }));
      }
    },
    /**
     * Notify event on click secondary button
     */
    _notifySecondary: function(e) {
      if (e.target.data.action) {
        this.dispatchEvent(new CustomEvent(e.target.data.action, {
          bubbles: true,
          composed: true,
          detail: {
            page: this.page
          }
        }));

        this.dispatchEvent(new CustomEvent('cells-successful-response-click-secondary', {
          bubbles: true,
          composed: true,
          detail: {
            page: this.page,
            action: e.target.data.action
          }
        }));
      }
    }
  });
}());
