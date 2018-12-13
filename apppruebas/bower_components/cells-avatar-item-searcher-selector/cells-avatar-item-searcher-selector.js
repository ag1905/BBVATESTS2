/*global CellsBehaviors*/
(function() {

  'use strict';

  Polymer({

    is: 'cells-avatar-item-searcher-selector',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Item selected
       * @type {Object}
       */
      selected: {
        type: Object,
        notify: true
      },
      /**
       * Item list to select from
       * @type {Array}
       */
      listItems: {
        type: Array,
        observer: 'setRefreshedContacts'
      },
      /**
       * Number of items to show. Set to 0 to show all
       * @type {Number}
       */
      maxItems: {
        type: Number,
        value: 0
      },
      /**
       * Show all items label
       * @type {Boolean}
       */
      viewAll: {
        type: Boolean
      },
      /**
       * Options with service
       * @type {Array}
       */
      options: {
        type: Array
      },
      /**
       * Placeholder key for the search input
       * @type {String}
       */
      searcherLabel: {
        type: String,
        value: 'cells-avatar-item-searcher-selector-searcher-label'
      },
      /**
       * Placeholder key for the search input
       * @type {String}
       */
      filterItems: {
        type: String,
        value: ''
      },
      /**
       * Text for the no product message
       * @type {String}
       */
      message: String,
      /**
       * Enables the search option
       * @type {Boolean}
       */
      searching: {
        type: Boolean
      },
      /**
       * list items
       * @type {Array}
       * @private
       */
      _listItems: {
        type: Array,
        value: function() {
          return [];
        }
      },
      /**
       * Show more
       * @type {Boolean}
       * @private
       */
      _showMore: {
        type: Boolean,
        value: false
      },
      /**
      * Spinner status
      * @type {Boolean}
      */
      spinnerStatus: {
        type: Boolean,
        notify: true
      },
      /**
      * Spinner disabled
      */
      spinnerDisabled: {
        type: Boolean,
        value: false
      },
      /**
      * Selected item to delete
      */
      selectedIndex: Number,
      /**
      * Parameters to filter search
      */
      propertiesToFilter: {
        type: Array,
        value: function() {
          return ['secondary', 'main', 'identityNumber'];
        }
      },
      /**
      * Disable swipe options
      */
      optionsDisabled: {
        type: Boolean,
        value: false
      }
    },

    /**
     * Reset
     */
    reset: function() {
      this.set('selected', null);
    },

    /**
     * Checked opened swipe
     * @private
     */
    _checkedOpened: function(index, swipe) {
      return index === swipe;
    },

    setRefreshedContacts: function(listItems) {
      if (this.maxItems !== 0 && listItems.length > this.maxItems) {
        this.set('_listItems', listItems.slice(0, this.maxItems));
      } else {
        this.set('_listItems', listItems);
      }
    },

    /**
     * prepares the list to show and whether to display a "view more" link
     * @private
     */
    setMoreContacts: function(contacts) {
      this.set('_listItems', this._listItems.concat(contacts));
      this.set('spinnerStatus', false);
    },

    /**
     * On tap service
     * @private
     */
    _onItemTap: function(evt) {
      var selected = evt.model.item;
      this.set('selected', selected);
      this.fire('set-selected', {
        selected: selected
      });
    },

    /**
     * On click option
     * @private
     */
    _onClickOption: function(e) {
      var index = Number(e.model.dataHost.dataset.service);
      this.fire('on-' + (e.model.item.type && e.model.item.type.toLowerCase()) + '-item', this._listItems[index]);
      this.set('selectedIndex', this._listItems[index].id);
    },

    /**
     * Filter searched items without modify array from service response
     * @private
     * @param filterItems {String}
     */
    _computeSearch: function(filterItems) {
      if (filterItems) {
        return function(item) {
          if (item && this.propertiesToFilter.length) {
            var validations = this.propertiesToFilter.map(function(key) {
              return (item[key] + '').toLowerCase().indexOf(filterItems.toLowerCase()) !== -1;
            });
            return validations.filter(Boolean).length;
          } else {
            return 0;
          }
        }.bind(this);
      }
    },

    /*
    * Define status spinner
    */
    setSpinnerStatus: function(status) {
      this.set('spinnerStatus', status);
    },

    /**
    * Delete selected contact
    */
    deleteStoredContact: function(itemToDelete) {
      this.set('_listItems', this._listItems.filter(function(item) {
        return itemToDelete.id !== item.id;
      }));
    }
  });
}());