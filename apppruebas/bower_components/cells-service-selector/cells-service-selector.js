(function() {

  'use strict';

  Polymer({

    is: 'cells-service-selector',

    /*global CellsBehaviors*/

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Account list to select from
       * @type {Array}
       */
      services: {
        type: Array
      },
      /**
       * Categories list
       * @type {Array}
       */
      categories: {
        type: Array
      },
      /**
       * Options with service
       * @type {Array}
       */
      options: {
        type: Array
      },
      /**
       * user selected category
       * @type {Object}
       */
      selectedCategory: {
        type: Object
      },
      /**
       * Filter
       * @type {Array}
       */
      filteredCategories: {
        type: Array,
        value: function() {
          return [];
        }
      },
      /**
       * Header for the product list
       * @type {String}
       */
      listTitle: {
        type: String
      },
      /**
       * Number of servicesto show. Set to 0 to show all
       * @type {Number}
       */
      maxServices: {
        type: Number,
        value: 1
      },
      /**
       * Flags if component is used for searching (modifies styles)
       * @type  {Boolean}
       */
      searching: {
        reflectToAttribute: true,
        type: Boolean,
        value: false
      },
      /**
       * Array containing the
       * @type {Array}
       */
      _productList: {
        type: Array
      },
      /**
       * Show service categories
       * @type {String}
       */
      showCategories: {
        type: Boolean,
        observer: '_setListTitle'
      },

      /**
       * Enable show agreement
       */
      agreementEnabled: Boolean,

      /**
       * Hide categories when sho all stored seervices
       * @type {Boolean}
       */
      viewAll: Boolean,
      /**
       * Show more services
       * @type {Boolean}
       */
      _showMore: {
        type: Boolean
      },
      /**
       * Show header
       * @type {Boolean}
       */
      _showHeader: {
        computed: '_mustShowHeader(searching)',
        type: Boolean,
        value: false
      },
      /**
       * Text for the no product message
       * @type {String}
       */
      message: String,
      /**
       * Input search value
       * @type {String}
       */
      filterServices: String,
      /**
       * Close all swipe of service
       * @type {Boolean}
       */
      selected: {
        type: Number,
        notify: true
      }
    },

    observers: [
      '_setDependentProps(services, searching)'
    ],

    listeners: {
      'user-selected-filters': '_removeCategoryFilter'
    },

    /**
     * Filter searched service without modify array from service response
     * @private
     * @param searchService {String}
     */
    _computeSearch: function(searchService) {
      if (searchService) {
        if (!this.selectedCategory) {
          this.set('_productList', this.services);
        }
        this.showCategories = false;
        return function(service) {
          var propertiesToCheck = ['id', 'billNumber', 'secondary', 'main', 'name', 'alias'];
          var validations = propertiesToCheck.map(function(key) {
            return (service[key] + '').toLowerCase().indexOf(searchService.toLowerCase()) !== -1;
          });
          return validations.filter(Boolean).length;
        };
      } else if (this.categories && this._productList && this._productList[0] && !this._productList[0].hasOwnProperty('billNumber')) {
        this.set('_productList', this.categories);
        this.set('filteredCategories', []);
        this.showCategories = true;
      } else if (!this.categories && this._productList && this._productList[0]) {
        this.set('_productList', this.services.filter(this._highRankedServices));
      }
    },

    _computeProducts: function(_productList) {
      if (!this.viewAll && !this.searching && _productList && _productList.length) {
        return _productList.slice(0, this.maxServices);
      }
      return _productList;
    },
    /**
     * prepares the list to show and whether to display a "view more" link
     * @private
     */
    _setDependentProps: function(services, searching) {
      this.set('_productList', this._parseProducts(services, searching));
      this.fire('finished-set-services-list');
    },

    _parseProducts: function(services) {
      if (services && services.length) {
        this.set('_showMore', this.maxServices && (services.length > this.maxServices));
        if (this.categories && this.searching && !this.viewAll) {
          this.set('showCategories', true);
          this.set('filteredCategories', []);
          return this.categories;
        } else {
          this.set('showCategories', false);
          return (this.viewAll && this.maxServices < 1) ? services.filter(this._highRankedServices) : services.slice(0, this.maxServices);
        }
      }

      return [];
    },

    /**
     * Checked if has service type
     * @private
     */
    _highRankedServices: function(service) {
      return service.highRanked;
    },
    /**
     * On tap service
     * @private
     */
    _onServiceItemTap: function(evt) {
      this.fire('select-service', evt.model.product);
      this.fire('set-header', {
        title: 'glomo-bill-payments-header-secondary-service-data'
      });
    },
    /**
     * On category tap
     * @private
     */
    _onCategoryItemTap: function(evt) {
      var selectedCategory = evt.model.product;
      this.push('filteredCategories', {
        value: selectedCategory.name
      });
      this._showCategorizedServices(selectedCategory);
      this.set('showCategories', false);
      this.fire('select-category', selectedCategory);
    },
    /**
     * Show categories
     * @private
     */
    _showCategorizedServices: function(category) {
      this.set('_productList', []);
      this.services.map(function(service) {
        if (service.serviceType && service.serviceType.id === category.id) {
          this.push('_productList', service);
        }
      }.bind(this));
    },
    /**
     * Remove filter
     * @private
     */
    _removeCategoryFilter: function() {
      this.set('showCategories', true);
      this.set('_productList', this.categories);
    },
    /**
     * View all services
     * @private
     */
    _viewAll: function(e) {
      e.preventDefault();
      this.fire('view-all');
    },
    /**
     * Show header
     * @private
     */
    _mustShowHeader: function(isSearching) {
      if (isSearching) {
        this.set('listTitle', '');
      } else {
        this.set('filteredCategories', []);
      }
    },
    /**
     * On click option service
     * @private
     */
    _onClickOption: function(e) {
      var index = Number(e.model.dataHost.dataset.service);
      this.set('selected', index);
      this.fire('on-' + e.model.item.type + '-item', this._productList[index]);
    },
    /**
     * Checked opened swipe
     * @private
     */
    _checkedOpened: function(index, swipe) {
      return index === swipe;
    },
    /**
     * Update alias a selected service
     * @privates
     */
    updateAlias: function(alias) {
      this.set('_productList.' + this.selected + '.name', alias);
      this.set('selected', null);
    },
    /**
     * Checked if has service type
     * @private
     */
    _checkedServiceType: function(billNumner) {
      return !billNumner;
    },
    /**
     * Checked options number
     * @return {String} Class name
     * @private
     */
    _checkedOptions: function(options) {
      return (options && options.length > 1) ? 'edit' : 'delete';
    },
    /**
     * Parse agreement number
     */
    formatedAgreementNumber: function(agreementNumber) {
      return agreementNumber && this.agreementEnabled ? this.t('cells-service-selector_agreement-number') + ' ' + agreementNumber : '';
    },
    /**
     * Parse reference number
     */
    formatReferenceNumber: function(referenceNumber) {
      return referenceNumber ? this.t('cells-service-selector-service-reference') + ' ' + referenceNumber : '';
    },
    /**
     * Title list
     * @private
     */
    _setListTitle: function(category) {
      if (category && this.searching) {
        this.set('listTitle', 'cells-service-selector-categories');
      } else if (!this.searching) {
        this._showMore = true;
      } else {
        this.set('listTitle', '');
      }
    }
    /**
     * @event select-index
     * @description fired when a product is selected. Contains the service's index
     */

    /**
     * @event select-service
     * @description fired when a product is selected. Contains the service
     */

    /**
     * @event view-all
     * @description fired when the view-all link is tapped. Contains the full service list
     */

  });
}());