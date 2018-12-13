(function() {
  'use strict';

  Polymer({
    is: 'cells-modal-confirmation',

    properties: {
      /**
       * ID of the warning or alert icon.
       * @type {String}
       */
      iconCode: {
        type: String
      },

      /**
       * Size of the icon.
       * @type {String}
       */
      iconSize: {
        type: Number,
        value: 24
      },

      /**
       * Modal text content.
       * @type {String}
       */
      content: {
        type: String
      },

      /**
       * Text for the primary button.
       * @type {String}
       */
      primaryButtonLabel: {
        type: String
      },

      /**
       * Text for the secondary button.
       * @type {String}
       */
      secondaryButtonLabel: {
        type: String
      },

      /**
       * Classes for the primary button.
       * @type {String}
       */
      primaryButtonClasses: {
        type: String,
        value: 'btn--primary btn--l'
      },

      /**
       * Classes for the secondary button.
       * @type {String}
       */
      secondaryButtonClasses: {
        type: String,
        value: 'btn--link'
      },

      /**
       * Set to true to always close the modal after clicking a button.
       */
      closeOnButtonClick: {
        type: Boolean,
        value: false
      },

      /**
       * Set to true to open the modal.
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true,
        observer: '_toggleOpen'
      }
    },

    /**
     * Opens the modal.
     */
    open: function() {
      this.opened = true;
    },

    /**
     * Closes the modal.
     */
    close: function() {
      this.opened = false;
    },

    _toggleOpen: function(opened, previousState) {
      if (opened) {
        this.$.modalConfirmation.open();
      } else if (previousState) {
        this.$.modalConfirmation.close();
      }
    },

    /**
     * Used to sync opened property with cells-bottom-modal opened property
     * without using two way data binding (<cells-bottom-modal opened="{{opened}}">)
     * because iron-overlay-behavior closes the modal abruptly by setting an inline "display: none".
     */
    _setOpened: function(e) {
      this.opened = e.detail.value;
    },

    /**
     * Fired after clicking primary button.
     * @event primary-button-click
     */
    _onPrimaryButtonClick: function() {
      this.fire('primary-button-click');
      this._onButtonClick();
    },

    /**
     * Fired after clicking secondary button.
     * @event secondary-button-click
     */
    _onSecondaryButtonClick: function() {
      this.fire('secondary-button-click');
      this._onButtonClick();
    },

    _onButtonClick: function() {
      if (this.closeOnButtonClick) {
        this.opened = false;
      }
    }

  });
}());
