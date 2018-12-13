(function() {
  'use strict';

  Polymer({

    is: 'cells-alert-box',

    behaviors: [
      /* global CellsBehaviors */
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Display alert in full height
       */
      fullHeight: {
        type: Boolean,
        value: false
      },
      /**
       * Display close icon when NO fullHeight
       */
      iconOnlyFullHeight: {
        type: Boolean,
        value: false
      },
      /**
       * True if modal is opened
       */
      opened: {
        type: Boolean,
        notify: true,
        value: false,
        reflectToAttribute: true,
        observer: '_checkedOpened'
      },
      /**
       * Title of alert modal
       */
      title: {
        type: String
      },
      /**
       * Subtitle of alert modal
       */
      subtitle: {
        type: String
      },
      /**
       * Content of alert modal
       */
      message: {
        type: String
      },
      /**
       * Alert image, none by default
       */
      heroImage: {
        type: String
      },
      /**
       * Accept button text
       */
      acceptButton: {
        type: String
      },
      /**
       * Accept button information text
       */
      acceptButtonInfo: {
        type: String
      },
      /**
       * Cancel button text
       */
      cancelButton: {
        type: String
      },
      /**
       * Cancel button text information
       */
      cancelButtonInfo: {
        type: String
      },
      /**
       * Close icon image
       * @Value coronita:close
       */
      closeIconId: {
        type: String,
        value: 'coronita:close'
      },
      /**
       * Close icon image size
       */
      closeIconSize: {
        type: Number,
        value: 18
      },
      /**
       * Disabled primary button
       */
      disablePrimaryButton: {
        type: Boolean,
        value: false
      },

      /**
       * Disabled secondary button
       */
      disableSecondaryButton: {
        type: Boolean,
        value: false
      },

      /**
       * class of the primary button
       */
      primaryButtonClass: {
        type: String,
        value: 'secondary'
      },
      /**
       * Indicates if the modal will be closed when primary button is tapped
       */
      closeOnPrimaryButton: {
        type: Boolean,
        value: false
      },
      /**
       * Indicates if the modal will be closed when secondary button is tapped
       */
      closeOnSecondaryButton: {
        type: Boolean,
        value: false
      }

    },
    /**
     * Open the modal
     */
    open: function() {
      this.opened = true;
    },
    /**
     * Close the modal
     */
    close: function() {
      this.opened = false;
    },

    _onClose: function(e) {
      this.opened = false;
      if (e.detail.canceled) {
        this._fireCancel(true);
      }
    },

    /**
     * Fired after clicking the cancel button, close button (x) or the overlay.
     * @event cancel
     * @param {{cancelFromHeader: Boolean}} detail True if the user closes the modal by clicking the overlay or the close button.
     */
    _fireCancel: function(canceled) {
      this.dispatchEvent(new CustomEvent('cancel', {
        bubbles: true,
        composed: true,
        detail: {
          cancelFromHeader: canceled
        }
      }));
    },

    _onCancelClick: function() {
      this._fireCancel(false);
      if (this.closeOnSecondaryButton) {
        this.opened = false;
      }
    },

    /**
     * Fired after clicking the accept button
     * @event accept
     */
    _onAcceptClick: function() {
      this.dispatchEvent(new CustomEvent('accept', {
        bubbles: true,
        composed: true
      }));
      if (this.closeOnPrimaryButton) {
        this.opened = false;
      }
    },

    _checkedOpened: function(opened) {
      this.$.modal[opened ? 'open' : 'close']();
    }
  });
}());
