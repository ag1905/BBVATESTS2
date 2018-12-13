(function() {
  'use strict';

  Polymer({

    is: 'cells-step-service-selector',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.StepBehavior
    ],

    properties: {
      /**
       * Zone opened
       * @type {Number|String}
       */
      opened: {
        type: Number,
        value: 0
      },
      /**
       * Service List
       * @type {Array}
       */
      services: {
        type: Array,
        observer: '_parseServices'
      },
      /**
       * Stored services to select from
       * @type {Array}
       */
      storedServices: {
        type: Array,
        observer: '_servicesStoredChanged'
      },
      /**
       * Categories
       * @type {Array}
       */
      categories: {
        type: Array,
        observer: '_servicesChanged'
      },
      /**
       * Selected service
       * @type {Object}
       */
      selected: {
        type: Object,
        notify: true
      },
      /**
       * Selected category
       * @type {Object}
       */
      selectedCategory: {
        notify: true,
        type: Object
      },
      /**
       * Current input value.
       * @type  {Object}
       */
      headerConfig: {
        type: Object,
        notify: true,
        value: function() {
          return {
            back: true,
            backIcon: 'coronita:close',
            backAction: 'header-close',
            title: 'glomo-bill-payments-header-secondary-services'
          };
        }
      },
      /**
       * Show services categories.
       * @type  {Boolean}
       */
      showCategories: {
        type: Boolean,
        value: false
      },
      /**
       * Show agreement value
       * @type  {Boolean}
       */
      agreementEnabled: {
        type: Boolean,
        notify: true
      },
      /**
       * Show all stored services when country hasn't categories
       * @type  {Boolean}
       */
      viewAll: {
        type: Boolean,
        value: true
      },
      /**
       * Refernece number
       * @type  {String}
       */
      referenceNumber: {
        type: String,
        notify: true
      },
      /**
       * Amount
       * @type  {Object}
       */
      amountValue: {
        type: Object,
        notify: true
      },
      /**
       * Bills
       * @type  {Object}
       */
      bills: Object,
      /**
       * Product id to edit
       * @type  {String}
       */
      productIdToEdit: {
        type: String,
        notify: true
      },

      /**
       * Close swipe
       * @type  {Object}
       */
      closeSwipeService: Number,
      /**
       * Apply styles if searching mode
       * @type {Boolean}
       */
      searchMode: {
        type: Boolean,
        value: false
      },
      /**
       * Flags if step is under searching mode
       * @type {Boolean}
       */
      searching: {
        reflectToAttribute: true,
        type: Boolean,
        value: false,
        observer: '_searchingObserver'
      },
      /**
       * Finder input enabled
       * @type  {Boolean}
       */
      finder: {
        type: Boolean,
        value: false
      },
      /**
       * Label input searcher
       * @type  {String}
       */
      _searcherLabel: {
        type: String,
        computed: '_setSearcherLabel(showCategories, searchMode)'
      },
      /**
       * Service cached
       * @type  {String}
       */
      serviceCached: Boolean,
      /**
       * Local currency
       * @type  {String}
       */
      localCurrency: String,

      /**
      * Allow only positives amount values
      */
      numeralPositiveOnly: {
        type: Boolean,
        value: false
      }
    },

    listeners: {
      'select-service': '_onSelectedService',
      'choose-another-service': '_goToFirst',
      'select-category': '_setCategorySelected',
      'finished-set-services-list': 'refreshedServicesList',
      'stepContainer.change-pressed': '_onChangeService',
      'view-all': '_onViewAll',
      'amount-entered': '_onAmountSelected',
      'on-edit-item': '_setItemToEdit',
      'on-delete-item': '_setItemToDelete',
      'save-service': '_setAlias',
      'set-header': '_changeDetailHeaderTitle'
    },

    attached: function() {
      this.getMsg('cells-step-service-selector-saved').then(function(translation) {
        this.set('listTitle', !translation ? translation : 'Saved');
      }.bind(this));
    },
    /**
     * Reset
     */
    reset: function() {
      this.selected = null;
      this.finder = false;
      this.searching = false;
      this.serviceCached = false;
      this.searchMode = false;
      this.opened = 0;
    },
    /**
     * Selected amount. Fires event with item selected
     * @param evt
     */
    _onAmountSelected: function() {
      if (this.active) {
        this.collapsed = true;
        this.opened = -1;
        this.finder = false;

        this.$.stepContainer.set('disableChange', true);
        Polymer.RenderStatus.afterNextRender(this, function() {
          this.$.stepContainer.set('disableChange', false);
        });
        this.fire('amount-selected', this.amountValue);
      }
    },
    /**
     * Clears the selected property when the change button is pressed
     */
    _onChangeService: function() {
      this.closeSwipeService = -2;
      this.collapsed = false;
      this.opened = 2;
      this.fire('searching-on');
    },


    /**
     * Change header literal on service detail view
     */
    _changeDetailHeaderTitle: function() {
      this.set('headerConfig.title', 'glomo-bill-payments-header-secondary-service-data');
    },

    /**
     * Recalculates the services to display when the public property changes
     * @param services
     */
    _servicesChanged: function() {
      this.set('selected', null);
    },
    /**
     * Refresh stored service on delete another service
     */
    _servicesStoredChanged: function() {
      this.$.searcherSelector.set('services', this.storedServices);
    },
    /**
     * Parse Services
     */
    _parseServices: function(services) {
      if (services && services.length) {
        services.map(function(service) {
          service.main = service.name;
          service.secondary = service.id;
        });

        this.set('_services', services);
      }

      this.set('selected', null);
    },

    /**
     * Toggles ON searching mode
     * @param   e {Event}
     */
    _onSelectedService: function(ev) {
      if (this.active && ev && ev.detail) {
        this.set('selected', ev.detail);
        this.fire('selected-service', ev.detail);
        this.finder = false;
        this.searchMode = false;
        this.opened = 2;
        this.searching = true;
      }
    },
    /**
     * Set category selected
     */
    _setCategorySelected: function(payload) {
      this.set('selectedCategory', payload.detail);
    },
    /**
     * Checked search mode and return class name
     */
    _checkedSearchMode: function(mode) {
      this.fire('service-searching-' + (mode ? 'on' : 'off'));
      return mode ? 'shared--searching-active' : '';
    },
    /**
     * Observer for <em>_inputValue</em> property.
     * Will filter <em>services</em> list with text typed in input.
     */
    toggleOffSearchingMode: function() {
      if (!this.serviceCached) {
        this.closeSwipeService = -1;
        this.searchMode = false;
        this.searching = false;
        this.opened = 0;
        this.finder = false;
        this.$.stepContainer.set('disableChange', false);
      } else {
        this.opened = -1;
        this.collapsed = true;
      }
    },
    /**
     * Toggle on search
     */
    _onToggleFinder: function() {
      if (!this.finder) {
        this.closeAllSwipedRows();
        this.$.searcherSelector.set('services', this._services);
        this.set('headerConfig.title', 'glomo-bill-payments-header-secondary-services');

        if (this.categories) {
          this.viewAll = false;
        }

        this.searching = true;
        this.searchMode = true;
        this.finder = true;
        this.opened = 1;
      }
    },
    /**
     * Toggle on click view all
     */
    _onViewAll: function() {
      this.closeAllSwipedRows();
      this.viewAll = true;
      this.$.searcherSelector.set('services', this.storedServices);
      this.set('headerConfig.title', 'glomo-bill-payments-header-secondary-stored-services');

      this.searching = true;
      this.finder = true;
      this.opened = 1;
    },
    /**
     * Toggles searching status
     * @param   searching {Boolean}
     */
    _searchingObserver: function(searching) {
      if (searching) {
        this.fire('searching-on');
      } else {
        this.$.inputViewAll.value = null;
        this.fire('searching-off');
      }
    },
    /**
     * Set alias if exist on item selected
     * @param   searching {Object}
     */
    _setAlias: function(payload) {
      var item = this.$.avatarItem;

      this.set('selected.alias', payload.detail.alias);
      this.set('selected.referenceNumber', payload.detail.reference);

      item.set('main', this.selected.alias || this.selected.name);
      item.set('secondary', this.selected.name);
      item.set('info', this.formatReferencetNumber(this.selected.referenceNumber));
    },
    /**
     * Set item to edit
     */
    _setItemToEdit: function(payload) {
      this.set('productIdToEdit', payload.detail.storedId);
      this.fire('alias-to-edit', payload.detail.alias || payload.detail.name);
    },
    /**
    * Bubbling item to delete
    */
    _setItemToDelete: function(payload) {
      this.fire('stored-service-to-delete', payload.detail);
    },
    /**
     * Update alias service
     */
    updateAlias: function(payload) {
      this.$.storedServicesSelector.updateAlias(payload.value.alias);
    },
    /**
     * Parse agreement number
     */
    formatAgreementNumber: function(agreementNumber) {
      return agreementNumber && this.agreementEnabled ? this.t('cells-step-service-selector-service-number') + ' ' + agreementNumber : '';
    },
    /**
     * Parse reference number
     */
    formatReferencetNumber: function(referenceNumber) {
      return this.t('cells-step-service-selector-service-reference') + ' ' + referenceNumber || '';
    },
    /**
     * Checked opened zone
     */
    _checkedOpened: function(opened, zone, alternative) {
      return opened === zone || opened === alternative;
    },
    /**
     * Show first zone
     */
    _goToFirst: function() {
      this.searchMode = true;
      this.finder = true;
      this.opened = 1;
      this.inputValue = '';
    },
    /**
     * Checks whether the user has set a valid input
     * @override
     */
    isValid: function() {
      return !!this.selected;
    },
    /**
     * Close all swipes
     */
    closeAllSwipedRows: function() {
      this.closeSwipeService = -2;
    },
    /**
     * Checked label input search
     */
    _setSearcherLabel: function(categories, searchMode) {
      return 'cells-step-service-selector-service-' + (categories || !categories && !searchMode ? 'search' : 'agreement-search');
    },
    /**
     * Notify refresh services
     */
    refreshedServicesList: function() {
      this.fire('finished-refresh-services');
    }
  });
}());