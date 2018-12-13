(function() {

  'use strict';

  Polymer({

    is: 'cells-new-cellular-form',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],
    properties: {

      //cellular number form field value
      _formNumber: {
        type: String,
        value: ''
      },

      //name form field value
      _formRecipient: {
        type: String,
        value: ''
      },

      //alias form field value
      _formAlias: {
        type: String,
        observer: '_resetAlias',
        value: ''
      },

      /**
      * Alias from saved contact
      */
      _savedAlias: {
        type: String
      },

      // check saved contact
      _formSaved: {
        type: Boolean,
        value: false
      },

      // enable / disable submit button if no empty required fields
      validForm: {
        type: Boolean,
        value: false,
        computed: '_computedValidForm(_formNumber, _formRecipient, _formAlias, invalidAlias, _formSaved )'
      },

      savedMsg: {
        type: Object,
        value: function() {
          return {
            label: '',
            subLabel: ''
          };
        }
      },

      /**
      * Show mobile provider dropdown selector
      */
      showMobileProvider: {
        type: Boolean,
        value: false
      },

      /**
      * Contacts with cellular number
      */
      contacts: {
        type: Array
      },

      //Control if one suggested user was selected
      _checkSuggestedContact: {
        type: Boolean,
        observer: '_setInfoMsg',
        value: false
      },

      //Contact suggested selected by user
      rowSelected: {
        type: Number
      },

      invalidAlias: {
        type: Boolean,
        value: false
      },

      providerSelected: {
        type: Object
      },

      tempUser: {
        type: Object,
        value: function() {
          return {};
        }
      }
    },

    /**
    * Send form data
    */
    _newCellular: function(ev) {
      ev.preventDefault();
      if (this._validateAlias()) {
        this.invalidAlias = true;
      } else {
        this.invalidAlias = false;
        this.dispatchEvent(new CustomEvent('save-new-cellular', {
          bubbles: true,
          composed: true,
          detail: {
            name: this._formRecipient || this._formAlias,
            alias: this._formAlias,
            number: this._formNumber,
            saved: this._formSaved,
            edited: this._editedContact(), //show info message on step
            bank: {
              id: this.providerSelected && this.providerSelected.id ? this.providerSelected.id : undefined,
              name: this.providerSelected && this.providerSelected.name ? this.providerSelected.name : undefined
            }
          }
        }));

        if (!this._formSaved) {
          this.reset();
        }
      }
    },

    /**
    * Check if exist contact alias
    */
    _validateAlias: function() {
      if (this.contacts) {
        return this.contacts.find(function(contact) {
          return contact.alias === this._formAlias;
        }.bind(this));
      }
    },

    /**
    * Validate form fields
    */
    _computedValidForm: function(number, recipient, alias, invalidAlias, formSaved) {
      if ((number.length && recipient.length) && ((alias.length && !invalidAlias) || formSaved || !this.rowSelected)) {
        return true;
      }
    },

    /**
    * Show info messages
    */
    _setInfoMsg: function(selected) {
      this.getMsg().then(function() {
        if (!selected) {
          this.savedMsg = {
            label: 'new-recipient-save-label',
            subLabel: this.t('new-recipient-save-sub-label')
          };
        } else {
          this.savedMsg = {
            label: 'new-recipient-saved-label',
            subLabel: this.t.apply(this, ['new-recipient-saved-sub-label', '', { alias: this._savedAlias }])
          };
        }
      }.bind(this));

    },

    /**
    *new- Filter contacts list to autocomplete
    */
    _autoComplete: function(formRecipient) {
      return function(contact) {
        if (!formRecipient || !contact) {
          this.rowSelected = -1;
          this._checkSuggestedContact = false;
          return false;
        }
        var _contactName = contact.main.toLowerCase();
        var _contactAlias = contact.alias.toLowerCase();
        return ((_contactName && ~_contactName.indexOf(formRecipient.toLowerCase()) ||
          (_contactAlias && ~_contactAlias.indexOf(formRecipient.toLowerCase()))));
      }.bind(this);
    },

    /**
    * Set selected contact from autocomplete
    */
    selectSuggestedContact: function(ev) {
      ev.preventDefault();
      this.set('providerSelected', {
        id: ev.model.contact.bank.id,
        name: ev.model.contact.bank.info
      });
      this.tempUser = {
        recipient: ev.model.contact.main,
        number: ev.model.contact.secondary
      };
      this.set('_formNumber', ev.model.contact.secondary);
      this.set('_formRecipient', ev.model.contact.main);
      this.set('_savedAlias', ev.model.contact.alias);
      this.rowSelected = ev.model.index;
      this._checkSuggestedContact = !this._checkSuggestedContact;
      this.dispatchEvent(new CustomEvent('suggested-contact-selected', {
        detail: this.providerSelected,
        bubbles: true,
        composed: true
      }));
    },

    /**
    * Check if saved contact was edited
    */
    _editedContact: function() {
      var edited = false;
      if (this._checkSuggestedContact) {
        if ((this._formRecipient !== this.tempUser.recipient) || (this._formNumber !== this.tempUser.number)) {
          edited = true;
        }
      }
      return edited;
    },

    // Check selected suggested contact
    _checkedRow: function(index, rowSelected) {
      return index === rowSelected;
    },

    //Notify select mobile provider
    _openMobileSelector: function(ev) {
      ev.preventDefault();
      this.dispatchEvent(new CustomEvent('select-mobile-provider', {
        bubbles: true,
        composed: true
      }));
    },

    // Reset alias error message when user delete alias
    _resetAlias: function(alias) {
      if (!alias.length) {
        this.invalidAlias = false;
      }
    },

    // Reset forms values
    reset: function() {
      this._formNumber = '';
      this._formRecipient = '';
      this._formAlias = '';
      this._formSaved = false;
      this.providerSelected = {};
    }
  });
}());
