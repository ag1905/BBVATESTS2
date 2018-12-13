(function() {
  'use strict';

  Polymer({

    is: 'cells-step-recipient-selector',

    behaviors: [
      window.CellsBehaviors.i18nBehavior,
      CellsBehaviors.StepBehavior,
      Polymer.ProductsBehavior,
      CellsBehaviors.GlobalProductsListsBehavior
    ],

    properties: {
      /**
       * Translation key for the optional information message
       */
      infoMessageKey: {
        type: String
      },
      /**
       * Recipient selected
       */
      recipientSelected: {
        type: Object,
        notify: true
      },
      /**
       * Recipient pre-selected internal/external component
       */
      recipient: {
        type: Object,
        observer: '_setRecipientSelected'
      },
      /**
       * List contacts
       * @desc external accounts / contacts
       */
      listItems: {
        type: Array,
        value: [],
        observer: '_checkListItems'
      },
      /**
       * @desc products for the product picker
       */
      products: {
        type: Array,
        value: function() {
          return [];
        }
      },
      /**
       * Selected
       */
      selected: {
        type: Boolean,
        notify: true
      },
      /**
       * Hide recipients
       */
      hideNoRecipients: {
        type: Boolean
      },

      loaded: {
        tyope: Boolean,
        value: false,
        notify: true
      },

      /**
       * Selected
       */
      showList: {
        type: Boolean,
        value: false
      },

      /**
       * Selected
       */
      hideContactList: {
        type: Boolean,
        value: false
      },

      /**
       * Selected
       */
      _showButton: {
        type: Boolean,
        computed: '_showButtonComputed(showList, listItems)'
      },
      /**
       * Selected saved
       */
      saved: Boolean,
      /**
       * Number max of saved recipients
       */
      maxItems: {
        type: Number,
        value: 3
      },
      /**
       * Cached new contact
       */
      cached: Boolean,
      /**
       * Visible char of product
       */
      visibleChars: Number,
      /**
       * User info of button 'for me'
       */
      user: Object,
      /**
       * Keep the 'user' property when the reset method is called
       */
      keepUserOnReset: {
        type: Boolean,
        value: false
      },
      /**
       * Label for me button
       */
      labelForMe: {
        type: String,
        value: ''
      },
      /**
       * Disabled swipe left actions
      */
      optionsDisabled: {
        type: Boolean,
        value: false
      },
      /**
       * Local currency
       */
      localCurrency: String,

      /**
       * Page to back navigate
       */
      backPage: {
        type: String
      },

      /*
       * Prevent closing step if true
       */
      extraActionBeforeClose: {
        type: Boolean,
        value: false
      },

      /**
       * Account format
       */
      accountFormat: {
        type: Object
      },

      /**
       * Show products list
       */
      showProducts: {
        type: Boolean,
        value: false
      },

      /**
       * Tranlation key for the label of the new recipient button
       */
      newRecipientLabelKey: {
        type: String,
        value: 'cells-step-recipient-selector-new'
      }
    },

    listeners: {
      'view-all': '_viewAllProducts',
      'stepContainer.change-pressed': '_onChangeProduct',
      'select-product': 'onProductSelected',
      'set-selected': 'closeStep',
      'on-delete-item': '_deleteSelectedContact'
    },

    /**
     * @override
     * @desc resets the component's state
     */
    reset: function() {
      this.set('saved', undefined);
      this.set('products', []);
      this.set('recipientSelected', undefined);
      this.set('recipient', null);
      this.set('cached', false);
      if (!this.keepUserOnReset) {
        this.set('user', undefined);
      }
    },

    /**
     * @override
     * @desc resets the component's state
     */
    uncached: function() {
      this.set('saved', undefined);
      this.set('cached', false);
      this.set('collapsed', false);
      this.set('recipientSelected', undefined);
    },

    /**
     * @override
     * @desc Force render products
     */
    fetchProducts: function(products) {
      this.set('products', []);
      this.showProducts = products && !!products.length;
      this.async(function() {
        this.set('products', products);
      }, 0);
    },

    /**
     * @desc enable or disable step when product item was clicked
     * @private
     */
    _onChangeProduct: function() {
      if (!this.cached) {
        this.set('collapsed', false);
        this.set('recipientSelected', undefined);
        this.set('recipient', null);
      } else {
        this.dispatchEvent(new CustomEvent('new-recipient', {
          bubbles: true,
          composed: true,
          detail: true
        }));
      }
    },

    /**
     * @desc enable or disable button and list of items
     * @private
     */
    _showButtonComputed: function(showList, listItems) {
      return (listItems && listItems.length) ? !!showList : true;
    },

    /**
     * Behavior when button is pressed.
     * Set amount to filled status.
     * Toggle step.
     * Status active to true.
     * @param evt {Event} Click event
     */
    onProductSelected: function(ev) {
      this.set('saved', true);
      this.set('recipientSelected', ev.detail || ev);
      this.closeStep();
    },

    /**
     * Set new recipient
     */
    setNewRecipient: function(recipient) {
      this.set('cached', true);
      this.set('saved', false);
      this.set('recipientSelected', undefined);
      this.set('recipientSelected', recipient);
      this.closeStep();
    },

    /**
     * Set recipient
     */
    _setRecipientSelected: function(recipient) {
      if (recipient) {
        this.set('saved', false);
        this.set('recipientSelected', {
          avatar: recipient.avatar,
          bank: {
            id: recipient.bank && recipient.bank.id,
            name: recipient.bank && recipient.bank.info
          },
          id: recipient.id,
          name: recipient.main,
          number: recipient.secondary.replace(/ /g, ''),
          numberType: recipient.numberType
        });
        this.closeStep();
      }
    },
    /**
     * Copmuted function to check if there are neither external nor internal accounts
     */
    _checkListItems: function(items) {
      this.loaded = true;
      this.hideNoRecipients = !!(items && items.length);
    },

    /**
     * Checked length items
     */
    _checkedLengthRecipients: function(recipients) {
      return this.maxItems !== 0 && this.listItems && this.listItems.length > this.maxItems;
    },

    /**
     * Close step on select recipient
     */
    closeStep: function() {
      if (!this.extraActionBeforeClose) {
        this.closeExtraActionStep();
      }
    },

    /**
     * Close modal step and step
     */
    closeExtraActionStep: function(recipient) {
      if (recipient) {
        this.set('recipient', recipient);
      }
      this.set('collapsed', true);
      this.set('selected', true);
      this.set('active', true);
      this.set('decorated', true);
    },
    /**
     * Generate account number by string
     */
    _generateAccountNumber: function(account) {
      var result;
      if (account) {
        if (this.accountFormat) {
          result = account.replace(new RegExp(this.accountFormat.regex), this.accountFormat.format);
        } else {
          result = account.substr(0, 4) + ' ' + account.substr(4, 4) + ' ' + account.substr(8, 4) + ' ' + account.substr(12, 4);
        }
      }

      return result;
    },
    /**
     * Dispatch event new recipient
     */
    onNewRecipient: function() {
      if (this.active) {
        this.set('recipient', null);
        this.dispatchEvent(new CustomEvent('new-recipient', {
          bubbles: true,
          composed: true,
          detail: true
        }));
      }
    },
    /**
     * Notify event on click 'for me' button
     */
    _onForMe: function() {
      this.set('saved', false);
      this.set('recipientSelected', {
        avatar: this.user.avatars && this.user.avatars.url,
        name: this.labelForMe,
        number: this.user.number
      });
      this.dispatchEvent(new CustomEvent('recipient-selected-for-me', {
        detail: this.user,
        bubbles: true,
        composed: true
      }));
      this.closeStep();
    },
    /**
     * Validate step
     */
    isValid: function() {
      if (this.recipientSelected) {
        return true;
      }
    },
    /**
     * Listen if view more button is pressed and dispatchs the action if step is active.
     * @param evt {Event}
     * @event view-all
     */
    _viewAllProducts: function(evt) {
      if (!this.active) {
        evt.stopPropagation();
      }
    },

    /**
     * Dispatchs event to get saved recipients
     */
    onGetSavedRecipients: function() {
      if (this.active) {
        this.dispatchEvent(new CustomEvent('searcher-view-all', {
          bubbles: true,
          composed: true,
          detail: {
            page: 'saved-recipients',
            params: {
              operative: this.backPage
            }
          }
        }));
        this.set('recipient', null);
      }
    },

    /**
     * Notify selected contact
     */
    _deleteSelectedContact: function(selectedItem) {
      this.dispatchEvent(new CustomEvent('delete-stored-contact', {
        bubbles: true,
        composed: true,
        detail: selectedItem.detail
      }));
    },

    /**
   * Delete selected contact
   */
    deleteStoredContact: function(itemToDelete) {
      this.set('listItems', this.listItems.filter(function(item) {
        return itemToDelete !== item;
      }));
    },

    _showSavedContactsHeader: function(hideContactList, _showButton) {
      return _showButton && !hideContactList;
    },

    _showContactListFallback: function(hideNoRecipients, hideContactList) {
      return !hideNoRecipients && !hideContactList;
    }
  });
}());