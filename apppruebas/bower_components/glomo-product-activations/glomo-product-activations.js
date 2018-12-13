(function() {

  'use strict';

  Polymer({

    is: 'glomo-product-activations',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],
    properties: {
      /**
      * Show header
      */
      showHeader: {
        type: Boolean,
        value: true
      },
      /**
      * Activations config
      */
      activations: {
        type: Object,
        observer: '_activationsChanged'
      },
      /**
      * Value of header switch
      */
      mainValue: Boolean,
      /**
      * Label of main switch
      */
      mainLabel: {
        type: String,
        computed: '_setMainLabel(mainValue, allActivationsWithSameValue)'
      },
      /**
      * Init component
      */
      init: {
        type: Boolean,
        value: false
      },

      /**
      * All activations of list with same value
      */
      allActivationsWithSameValue: {
        type: Boolean,
        value: false
      },
      /**
      * Enable button
      */
      enabledButton: {
        type: Boolean,
        value: false
      },
      /**
      * Enable switch of list
      */
      enabledSwitch: {
        type: Boolean,
        value: false
      }

    },

    listeners: {
      'cells-switch-item-changed': '_updateActivationsState',
      'cells-switch-changed': '_updateActivationsState',
      'cells-switch-icon-tap': '_openModal'
    },
    /**
    * Reset
    */
    reset: function() {
      this.activations = {};
      this.mainValue = false;
      this.init = false;
      this.allActivationsWithSameValue = false;
      this.enabledButton = false;
      this.enabledSwitch = false;
    },
    /**
     * Observer activations
     */
    _activationsChanged: function() {
      if (this.activations && this.activations.main && this.activations.list) {
        this.enabledSwitch = true;
        this._checkActivationsList();
      }
    },
    /**
     * Control updations of main and list
     */
    _updateActivationsState: function(ev) {
      var type = ev && (ev.detail && ev.detail.id || ev.target && ev.target.id) || 'ON_OFF';
      var updateValues = {};

      if (this.init || !this.mainValue) {
        // Update main and activations switches
        if (type === 'ON_OFF') {
          updateValues.main = {
            isActive: ev && ev.detail,
            id: type
          };
          this.set('activations.main', updateValues.main);
          updateValues.list = this._updateActivationsList(ev);

        } else {
          // Update item of list
          updateValues.list = this._updateItemList(ev);
          this._checkActivationsList();
        }
        this.enabledButton = true;
        this.set('activations.list', updateValues.list);

      } else {
        this.init = true;
      }
    },
    /**
     * Update the list with main switch value
     */
    _updateActivationsList: function(ev) {
      var updateList = [];
      if (this.activations && this.activations.list && this.activations.list.length > 0) {
        this.activations.list.map(function(activation) {
          updateList.push({
            isActive: ev.detail.isActive || ev.detail,
            id: activation.id,
            name: activation.name
          });
        });
        return updateList;
      }
    },
    /**
     * Update element of activations list
     */
    _updateItemList: function(ev) {
      var updateList = [];
      if (this.activations && this.activations.list && this.activations.list.length > 0) {
        this.activations.list.forEach(function(activation) {
          if (activation.id === ev.detail.id) {
            activation.isActive = ev.detail.isActive;
          }
        });
      }
      return updateList = this.activations.list;
    },
    /**
     * Check if all activations have the same value to set it to main value
     */
    _checkActivationsList: function() {
      var activationsOn = 0;
      if (this.showHeader && this.activations && this.activations.list && this.activations.list.length > 0) {
        this.activations.list.forEach(function(activation) {
          if (activation.isActive) {
            activationsOn += 1;
          }
        });
        this.set('allActivationsWithSameValue', activationsOn === 3 || activationsOn === 0);
        this.set('mainValue', activationsOn > 0 ? true : false);
        this.set('activations.main.isActive', this.mainValue);
      }
    },
    /**
     * Set main switch label depends on its value and value of activations list
     */
    _setMainLabel: function(mainValue, activations) {
      return this.t('glomo-product-activations-card', '', {
        status: !this.mainValue ? this.t('glomo-product-activations-off') : !this.allActivationsWithSameValue ?
          this.t('glomo-product-activations-partially') : this.t('glomo-product-activations-on')
      });
    },
    /**
     * When button is enabled dispatch an event with activations
     */
    _patchActivations: function() {
      this.dispatchEvent(new CustomEvent('glomo-product-activations-patch', {
        bubbles: true,
        composed: true,
        detail: this.activations
      }));
    },
    /**
     * Secondary button action
     */
    _onSecodaryButtonClicked: function() {
      this.dispatchEvent(new CustomEvent('glomo-product-activations-secondary-button', {
        bubbles: true,
        composed: true
      }));
    },
    /**
     * Open info modal
     */
    _openModal: function(ev) {
      var eventName = ev && ev.detail && ev.detail.toLowerCase().replace(/_/g, '-');
      this.dispatchEvent(new CustomEvent('glomo-product-activations-open-' + eventName + '-modal', {
        bubbles: true,
        composed: true
      }));
    }
  });
}());
