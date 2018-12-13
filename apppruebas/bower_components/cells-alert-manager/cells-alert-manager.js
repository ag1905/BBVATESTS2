(function() {
  'use strict';

  Polymer({
    is: 'cells-alert-manager',
    behaviors: [
      CellsBehaviors.i18nBehavior
    ],
    properties: {
      /**
       * Array of alerts being displayed
       */
      _alerts: {
        type: Array,
        value: function() {
          return [];
        }
      },
      /**
       * Icons to be displayed with each kind of alert.
       */
      icons: {
        type: Object,
        value: function() {
          return {
            error: 'coronita:error',
            success: 'coronita:correct',
            warning: 'coronita:alert',
            info: 'coronita:info'
          };
        }
      },
      /**
       * Default toast duration, in seconds. This will be applied to all alerts.
       */
      duration: {
        type: Number,
        value: 3
      }
    },
    /**
     * Adds a new alert model to alerts array
     * @method  _add
     * @param   {Object} model Valid alert model
     * @private
     */
    _add: function(model) {
      if (model.duration) {
        model.timeout = setTimeout(this._remove.bind(this, model), model.duration * 1000);
      }
      this.push('_alerts', model);
    },
    /**
     * Removes an alert from alerts array
     * @method  _remove
     * @param   {Object} model Valid alert model
     * @private
     */
    _remove: function(model) {
      if (model.duration) {
        clearTimeout(model.timeout);
        model.timeout = null;
        if (this._alerts.length > 1) {
          this.splice('_alerts', model.index, 1);
        } else {
          this.clear();
        }
      }

      //Refresh remaining alerts indexes
      this._alerts.forEach(function(item, index) {
        if (item.index !== index) {
          item.index = index;
        }
      });
    },
    /**
     * Finds if there's another equal alert already stored.
     * @method  _isDuplicated
     * @param   {Object} toast To be displayed
     * @return  {Boolean} Whether `toast` is duplicated or not
     * @private
     */
    _isDuplicated: function(toast) {
      return this._alerts.some(function(item) {
        return item.message === toast.message && item.type === toast.type;
      });
    },
    /**
     * Clears whole alerts array
     * @method clear
     */
    clear: function() {
      if (this.get('_alerts.length')) {
        this.splice('_alerts', 0);
      }
    },
    /**
     * Adds an alert to be displayed.
     * @method  showToast
     * @param   {*} toast To be displayed
     */
    showToast: function(toast) {
      let model = {
        type: 'error',
        message: 'cells-alert-manager-error-undefined',
        duration: this.duration,
        icon: null,
        index: this._alerts.length
      };

      if (toast !== null && typeof toast !== 'undefined') {
        if (toast instanceof Event) {
          toast = toast.detail;
        }

        switch (typeof toast) {
          case 'string':
            model.message = toast;
            break;
          case 'object':
          default:
            model = Object.assign(model, toast);
            break;
        }
      }

      model.icon = this.icons[model.type];
      model.message = this.doTranslation(model.message, model.message);

      if (!this._isDuplicated(model)) {
        this._add(model);
      }
    }
  });

}());
