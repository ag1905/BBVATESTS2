(function() {

  'use strict';

  Polymer({

    is: 'cells-switch-item',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],
    properties: {
      /**
       * Title
       */
      title: String,
      /**
       * Label
       */
      label: String,
      /**
       * Checked switch status
       */
      checked: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },
      /**
       * Enabled switch
       */
      enabled: {
        type: Boolean,
        value: false
      },
        /**
       * Icon id
       */
      iconId: String

    },
    listeners: {
      'cells-switch-changed': '_onSwitchChanged'
    },
    /**
     * Fire an event with switch changes value
    */
    _onSwitchChanged: function(ev) {
      if (ev) {
        ev.stopPropagation();
        if (this.enabled) {
          this.dispatchEvent(new CustomEvent('cells-switch-item-changed', {
            bubbles: true,
            composed: true,
            detail: {
              isActive: ev && ev.detail,
              id: ev.target && ev.target.id || ev.currentTarget && ev.currentTarget.id
            }
          }));
        }
      }
    },
    /**
     * Fire an event when icon is tapped
    */
    _onIconTap: function(ev) {
      if (ev) {
        this.dispatchEvent(new CustomEvent('cells-switch-icon-tap', {
          bubbles: true,
          composed: true,
          detail: ev.target && ev.target.id || ev.currentTarget && ev.currentTarget.id
        }));
      }
    },
    /**
     * Fire an event when label is tapped
    */
    _onLabelTap: function() {
      this.enabled = false;
      this.dispatchEvent(new CustomEvent('cells-switch-label-tap', {
        bubbles: true,
        composed: true
      }));
    }
  });

}());
