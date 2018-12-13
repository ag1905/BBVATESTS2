(function() {

  'use strict';

  Polymer({

    is: 'cells-modal-new-cellular-form',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {

      opened: {
        type: Boolean,
        value: function() {
          return false;
        }
      },

      /**
       * Boolean to ask only the phone number
       */
      phoneNumberOnly: {
        type: Boolean,
        value: false
      },

      /**
       * Phone number typed by the user
       */
      phoneNumber: {
        type: String
      },

      /**
       * Image to show as avatar when the user sets a new phone number
       */
      phoneAvatar: {
        type: String
      },
      /**
       * Filtered contacts list. Only contacts with cellular
       */
      cellularContactsList: {
        type: Array
      },

      /**
       * Boolean to show provider combo
       */
      showMobileProvider: {
        type: Boolean
      },

      providerSelected: {
        type: Object
      }
    },

    listeners: {
      'save-new-cellular': '_saveNewCellular'
    },

    /**
     * Send form new cellular data
     */
    _saveNewCellular: function(payload) {
      this._submitData(payload.detail);
    },

    /**
     * Send the introduced phone number
     */
    _submitPhoneNumber: function() {
      var payload = { number: this.phoneNumber };

      if (this.phoneAvatar) {
        payload.avatar = this.phoneAvatar;
      }

      this._submitData(payload);
    },

    _submitData: function(payload) {
      this.dispatchEvent(new CustomEvent('new-cellular-data', {
        detail: payload,
        bubbles: true,
        composed: true
      }));
      this.opened = false;
    },

    /**
     * Close modal view
     */
    _onCancel: function(ev) {
      this.dispatchEvent(new CustomEvent('on-click-secondary-button', {
        bubbles: true,
        composed: true
      }));
      this.resetForm();
    },

    resetForm: function() {
      this.opened = false;
      if (!this.phoneNumberOnly) {
        this.$$('#cellularForm').reset();
      } else {
        this.phoneNumber = '';
      }
    }
  });
}());
