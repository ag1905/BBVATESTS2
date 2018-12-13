(function(Polymer) {

  'use strict';

  Polymer({

    is: 'cells-operations-list-indicators',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    listeners: {
      'view-more': '_onViewMoreClick'
    },

    properties: {

      /**
      * Array of received operations
      * @type {Array}
      */
      operations: {
        type: Array,
        observer: 'onOperationsChange'
      },

      /**
       * Number of columns in grid mode.
       * @type {Number}
       */
      gridColumns: {
        type: Number
      },

      /**
       * Maximum visible operations. Set to 0 to show all.
       * @type {Number}
       */
      limit: {
        type: Number
      },

      /**
       * Icon size.
       * @type {Number}
       */
      iconSize: {
        type: Number
      },

      /*
       * Class to personalize the header.
       * @type {String}
       */
      customClass: {
        type: String
      },
      /**
       * Show loading zone
       * @type {Boolean}
       */
      loaded: {
        type: Boolean,
        value: false
      },

      /**
       * It shows View More Button
       * @type {Boolean}
       */
      viewMore: {
        type: Boolean,
        value: false
      },

      /**
      * Product Id
      * @type {String}
      */
      productId: {
        type: String
      },

      /**
       * Param to build url
       * @type {String}
       */
      continue: {
        type: String
      }
    },

    /*
    * Reset
    */
    reset: function() {
      this.set('operations', []);
      this.set('loaded', false);
    },

    /**
     * Fire navigation event when action is clicked
     * @param {Object} e - Event fired
     * @event custom event with info of operation clicked
     */
    _navigateFromAction: function(e) {
      this.dispatchEvent(new CustomEvent(e.detail.eventName, {
        detail: e.detail.eventDetail,
        bubbles: true,
        composed: true
      }));
    },

    /**
     * Operations observer
     */
    onOperationsChange: function() {
      this.set('_operations', this._translateOperations(this.operations));
      this.set('loaded', (this.operations || []).length > 0);
    },

    /**
     * Translate al literals
     * @params  {Array} list - List of operations
     * @return {Array} list of translated operations
     */
    _translateOperations: function(list) {
      var result;

      if (list) {
        result = list.map(function(item) {
          item.label = this.t(item.label);
          return item;
        }, this);

      }


      return result || [];
    },
    /**
     * Fire event to navigate to more operations
     * @params  {Object} e - event
     * @event
     */
    _onViewMoreClick: function(e) {
      e.preventDefault();

      this.dispatchEvent(new CustomEvent('get-full-operations'));
      this.dispatchEvent(new CustomEvent('urlToOperations', {
        detail: {
          productId: this.productId,
          continue: this.continue
        },
        bubbles: true,
        composed: true
      }));
    }
  });
}(Polymer));