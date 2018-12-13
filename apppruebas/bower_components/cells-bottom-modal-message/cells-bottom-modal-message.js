(function() {

  'use strict';

  Polymer({

    is: 'cells-bottom-modal-message',

    properties: {
      /*
       * Opened
       */
      opened: {
        type: Boolean,
        notify: true
      },
      /*
       * Type, ex. 'success'
       */
      type: {
        type: String,
        reflectToAttribute: true
      },
      /*
       * Text message
       */
      message: String,
      /*
       * Icon message
       */
      icon: String,
      /*
       * Icon message size
       */
      iconSize: Number,
      /*
       * Auto hide after open
       */
      autoHide: Boolean,
      /*
       * Time of auto hide (miliseconds)
       */
      time: {
        type: Number,
        value: 3000
      },
      /*
       * Show(Hide) overlay
       */
      overlay: Boolean,
      /*
       * Full height modal
       */
      fullHeight: Boolean,
      /*
       * Close icon
       */
      closeIcon: {
        type: String,
        value: 'banking:B40'
      },
      /*
       * Hide close icon
       */
      closeIconHide: {
        type: Boolean,
        value: true
      },
      /*
      * Disable message if you want set it from config page
      */
      messageDisabled: {
        type: Boolean,
        value: false
      }
    },

    /*
     * Open modal, if a message is sent it will be shown
     */
    open: function(message) {
      if (message && !this.messageDisabled) {
        this.message = message;
      }

      this.set('opened', true);
      if (this.autoHide) {
        this._autoHide();
      }
    },
    /*
     * Close modal
     */
    close: function() {
      this.$.modal.close();
    },
    /*
     * Auto Hide
     */
    _autoHide: function() {
      this.async(function() {
        this.$.modal.close();
      }, this.time);
    }
  });
}());
