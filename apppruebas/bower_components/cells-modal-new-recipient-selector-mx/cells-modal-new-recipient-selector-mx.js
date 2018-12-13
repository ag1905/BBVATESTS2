(function() {

  'use strict';

  Polymer({

    is: 'cells-modal-new-recipient-selector-mx',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * @type {Boolean}
       * @desc Opened modal
       */
      opened: {
        type: Boolean,
        notify: true
      },
      /**
       * @type {Number/String}
       * @desc Selected section
       */
      selected: Number,
      /**
       * Found recipient
       * @type {Boolean}
       */
      found: Boolean,
      /**
       * New recipient recipient
       * @type {Boolean}
       */
      complete: Boolean,
      /**
       * @type {Object}
       * @desc Recipient seted
       */
      recipient: {
        type: Object,
        value: {}
      },
      /**
       * @type {Object}
       * @desc Recipient on complete section
       */
      recipientResponse: Object,
      /**
       * @type {Object}
       * @desc Recipient saved or found
       */
      recipientSaved: Object,
      /**
       * @type {Object}
       * @desc Noitficatio on query
       */
      notification: Object,
      /**
       * @type {Array}
       * @desc Account List
       */
      productTypes: {
        type: Array,
        value: []
      },
      /**
       * @type {Array}
       * @desc Bank Names
       */
      banks: {
        type: Array,
        values: function() {
          return [];
        }
      },
      /**
       * @type {Boolean}
       * @desc Continue button enabled
       */
      continue: {
        type: Boolean,
        value: false
      },
      /**
       * @type {String}
       * @desc Magic query value
       */
      number: {
        type: String,
        observer: '_checkedNumber'
      }
    },

    observers: [
      '_checkedRecipient(recipientResponse.*)'
    ],

    listeners: {
      'on-click-edit-number': '_prevSection'
    },

    /**
    * Reset
    */
    reset: function() {
      this.set('complete', false);
      this.set('found', false);
      this.set('continue', false);
      this.set('selected', 0);
      this.set('number', '');
      this.set('recipientResponse', {});
    },
    /**
    * Set reponse of magic query
    */
    setResponseMagicQuery: function(response) {
      this.set('notification', response.notification);
      this.set('found', response.found);
      this.set('complete', response.complete);
      this.set('recipient', response.recipient);
      this._nextSection();
      this.fire('close-control-veil');
    },
    /**
    * Set reponse of magic query
    */
    setRecipientSaved: function(recipient) {
      this.set('recipientSaved', recipient);
      this._nextSection();
    },
    /**
    * Set bank in recipient by banks modal
    */
    setRecipeBank: function(bank) {
      this.set('recipientResponse.bank', bank);
    },
    /**
    * Set product type in recipient by product types modal
    */
    setRecipeProductType: function(productType) {
      this.set('recipientResponse.productType', productType);
    },
    /**
    * Checked section selected
    */
    _checkedSection: function(selected, index) {
      return selected === index;
    },
    /**
    * Validate section
    */
    _validateSection: function() {
      var validations = {
        0: function() {
          this.fire('open-control-veil');
          this.fire('magic-query', {number: this.number});
        }.bind(this),
        'default': function() {
          this.fire('recipient-end', this.recipientResponse);
        }.bind(this)
      };

      (validations[this.selected] || validations.default)();
    },
    /**
    * Notify on click cancel button
    */
    _onCancel: function() {
      this.reset();
      this.close();
      this.fire('on-click-secondary-button');
    },
    /**
    * Open modal
    */
    open: function() {
      this.set('opened', true);
    },
    /**
    * Close modal
    */
    close: function() {
      this.set('opened', false);
    },
    /**
    * Previous section
    */
    _prevSection: function() {
      this.set('selected', this.selected - 1);
    },
    /**
    * Next section
    */
    _nextSection: function() {
      this.set('selected', this.selected + 1);
    },
    /**
    * Checked number
    */
    _checkedNumber: function(number) {
      this.set('continue', !!number);
    },
    /**
    * Checked recipient
    */
    _checkedRecipient: function(response) {
      var hasBank = response.base.bank && response.base.bank.id;
      var toSave = !response.base.save ? true : response.base.alias;
      this.set('continue', Boolean(response.base.number && response.base.name && hasBank && toSave));
    },
    /**
    * Generate account number
    */
    _generateAccountNumber: function(account) {
      return account ? account.substr(0, 4) + ' '  + account.substr(4, 4) + ' '  + account.substr(8, 4) + ' '  + account.substr(12, 4) : account;
    }
  });
}());