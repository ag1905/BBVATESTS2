(function() {

  'use strict';

  Polymer({

    is: 'cells-operations-list',

    behaviors: [
      /* global CellsBehaviors */
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * List of operations.
       */
      operations: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /**
       * Number of columns in grid mode.
       */
      gridColumns: {
        type: Number,
        value: 4
      },

      /**
       * Icon size.
       */
      iconSize: {
        type: Number,
        value: 28
      },

      /**
       * List disposition: "grid" or "list".
       */
      layout: {
        type: String,
        value: 'grid',
        observer: '_layoutObserver',
        reflectToAttribute: true
      },

      /**
       * Maximum visible operations. Set to 0 to show all.
       */
      limit: {
        type: Number,
        value: 0
      },

      /**
       * Set to true to show a "view more" link. This item will be visible
       * if there are more available operations when the `limit` property is used.
       */
      viewMore: {
        type: Boolean,
        value: false
      },

      /**
       * Icon ID for the "view more" link.
       */
      viewMoreIcon: {
        type: String,
        value: 'coronita:more'
      },

      _showViewMore: {
        type: Boolean,
        value: false
      }
    },

    observers: [
      '_computeDisplayedOperations(operations, limit)'
    ],

    /**
     * Fired when an operation is clicked.
     * @event operation-click
     * @param {Object} detail Item model
     */
    _selectOperation: function(e) {
      e.preventDefault();
      if (!e.model.item.disabled) {
        this.dispatchEvent(new CustomEvent('operation-click', {
          bubbles: false,
          detail: e.model.item,
          composed: true
        }));
      }
    },

    _layoutObserver: function(layout) {
      this.updateStyles();
    },

    /**
     * Fired when the "view more" link is clicked.
     * Use `event.preventDefault()` to prevent showing all items (default action).
     * @event view-more
     */
    _viewMore: function(e) {
      e.preventDefault();

      var firedEvent = this.dispatchEvent(new CustomEvent('view-more', {
        bubbles: true,
        composed: true,
        cancelable: true
      }));

      // CustomEvent returns true if the event is not prevented (preventDefault)
      // or false if the event is prevented.
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent#Return_Value
      if (firedEvent) {
        this.showAll();
      }
    },

    /**
     * Show all operations.
     */
    showAll: function() {
      this.limit = 0;
    },

    /**
     * Show only 'limit' operations
     */
    _computeDisplayedOperations: function(operations, limit) {
      if (!operations.length) {
        return;
      }

      return !!limit && operations.length > limit ? operations.slice(0, limit - Number(this.viewMore)) : operations;
    },

    _computeViewMore: function(viewMore, operations, limit) {
      return viewMore && (operations.length > limit && Boolean(limit)) ? true : false;
    }

  });

}());
