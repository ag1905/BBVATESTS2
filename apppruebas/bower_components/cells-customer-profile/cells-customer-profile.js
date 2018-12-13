(function() {

  'use strict';

  Polymer({

    is: 'cells-customer-profile',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Customer object
       * @type {Object}
       */
      customer: {
        type: Object,
        observer: '_customerChanged',
        value: {}
      },
      /**
       * Birthday unmasked
       * @type {Boolean}
       */
      birthdayUnmasked: {
        type: Boolean,
        value: false
      },
      /**
       * Contact unmasked
       * @type {Boolean}
       */
      contactUnmasked: {
        type: Boolean,
        value: false
      },
      /**
       * Address unmasked
       * @type {Boolean}
       */
      addressUnmasked: {
        type: Boolean,
        value: false
      },
      /**
       * Mobile img source
       */
      mobileImgSource: String,
      /**
       * Email img source
       */
      emailImgSource: String,
      /**
       * Configuration of modal
       * @type {Object}
       */
      configModal: {
        type: Object,
        notify: true
      },
      /**
       * Customer contact details array
       * @type {Array}
       */
      customerContactDetails: Array,
      /**
       * Customer address object
       * @type {Object}
       */
      customerAddress: Object
    },
    /**
     * Reset
     */
    reset: function() {
      this.set('birthdayUnmasked', false);
      this.set('contactUnmasked', false);
      this.set('addressUnmasked', false);
      this._customerChanged();
    },
    /**
     * Update contact unmasked flag
     */
    _updateContactParams: function() {
      this.set('contactUnmasked', !this.contactUnmasked);
    },
    /**
     * Update address unmasked flag
     */
    _updateAddressParams: function() {
      this.set('addressUnmasked', !this.addressUnmasked);
    },
    /**
     * Set contact detail and address data when user change
     */
    _customerChanged: function() {
      this.set('customerContactDetails', this.customer.info);
      this.set('customerAddress', this.customer.address);
    },
    /**
     * Show button when item can be modified
     */
    _showButton: function(item, unmasked) {
      return item.isChangeable && !unmasked;
    },
    /**
     * Fire event to edit avatar image
     */
    _editAvatar: function() {
      this.dispatchEvent(new CustomEvent('edit-avatar', {
        bubbles: true,
        composed: true
      }));
    },
    /**
     * Change button text depending on unmasked state and item
     */
    _computeButtonText: function(item, unmasked) {
      return !unmasked ? this.t('cells-customer-profile-unmask') :
        unmasked && item.isChangeable ? this.t('cells-customer-profile-change') : this.t('cells-customer-profile-mask');
    },
    /**
     * Dispatch custom event to change a specify field
     */
    _changeField: function(e) {
      var fieldType = e.model ? 'email' : 'password';
      this.dispatchEvent(new CustomEvent('change-' + fieldType, {
        bubbles: true,
        composed: true
      }));
    },
    /**
     * Change button action
     */
    _computeButtonAction: function(e) {
      var unmaskedField = e.target.id + 'Unmasked';
      this.set(unmaskedField, !this[unmaskedField]);
    },
    /**
     * Control action for contact type button
     */
    _onContactButtonClick: function(e) {
      var canChange = e.model ? e.model.item.isChangeable : false;

      // If contact info is unmasked
      if (this.contactUnmasked) {
        // Item can be change
        if (canChange) {
          this._changeField(e);
        } else {
          // If item can't be change, set customer contact info to masked values
          this.contactUnmasked = false;
          this.set('customerContactDetails', this.customer.info);
        }
      } else {
       // If contact info is masked fire an event to request for unmasked data
        this._unmaskData('contacts');
      }
    },
    /**
     * Control action for address type button
     */
    _onAddressButtonClick: function(e) {
      // If address info is unmasked, set customer address to masked values
      if (this.addressUnmasked) {
        this.addressUnmasked = false;
        this.set('customerAddress', this.customer.address);
      } else {
        // If address info is masked, fire an event to requesto fot unmasked data
        this._unmaskData('address');
      }
    },
    /**
     * Fire event to unmask some part of customer info
     */
    _unmaskData: function(data) {
      this.dispatchEvent(new CustomEvent('unmask-' + data, {
        bubbles: true,
        composed: true
      }));
    },
    /**
     * Set modal configuration
     */
    _openModalInfo: function(e) {
      var type = e.currentTarget.id || e.detail.id;
      this.set('configModal', {
        btns: {
          primary: {
            text: 'Entendido',
            info: '',
            class: 'primary'
          }
        },
        notification: {
          icon: 'coronita:info',
          class: 'white-background',
          iconSize: 26,
          alternativeMessage: 'cells-modal-info-profile-' + type
        }
      });
    }
  });

}());