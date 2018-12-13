(function() {

  'use strict';

  Polymer({

    is: 'cells-molecule-search-input',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      value: {
        type: String,
        notify: true
      },

      placeholder: String,

      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      hideClean: {
        type: Boolean,
        value: true,
        computed: '_checkedValue(value)'
      },

      disabledOnClean: Boolean,

      autofocus: {
        type: Boolean,
        value: false
      }

    },

    reset: function() {
      this.value = '';
    },

    _checkedValue: function(value) {
      return !value;
    },

    notifyClick: function() {
      if (this.disabled) {
        this.dispatchEvent(new CustomEvent('on-click-input', {
          bubbles: true,
          composed: true
        }));
      }
    },

    notifyClean: function() {
      if (!this.disabledOnClean) {
        this.value = '';
      }

      this.dispatchEvent(new CustomEvent('on-click-clean', {
        bubbles: true,
        composed: true
      }));
    },

    notifySearch: function() {
      this.notifyClick();

      if (this.value) {
        this.dispatchEvent(new CustomEvent('on-click-search', {
          bubbles: true,
          composed: true,
          detail: this.value
        }));
      }
    }
  });
}());