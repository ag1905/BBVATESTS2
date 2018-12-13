(function() {
  'use strict';

  Polymer({

    is: 'cells-new-recipient-review',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Recipient
       * @type {Object}
       */
      recipient: {
        type: Object,
        observer: '_setRecipient'
      },
      /**
       * Recipient
       * @type {Object}
       */
      recipientResponse: {
        type: Object,
        notify: true
      },
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
       * Notification
       * @type {Object}
       */
      notification: Object,
      /**
       * banks
       * @type {Array}
       */
      banks: {
        type: Array
      },
      /**
       * Product types
       * @type {Array}
       */
      productTypes: {
        type: Array
      }
    },

    observers: [
      '_setDefaultAlias(recipientResponse.name, recipientResponse.save)'
    ],

    listeners: {
      'cells-molecule-input-icon-tap': '_notifyEditNumber'
    },

    /**
    * Set recipient
    */
    _setRecipient: function(recipient) {
      this.set('recipientResponse', Object.assign({}, recipient));

      if (!this.found) {
        this.set('recipientResponse.bank', this.banks && this.banks.length && this.banks[0]);
        this.set('recipientResponse.productType', this.productTypes && this.productTypes.length && this.productTypes[0]);
      }
    },
    /**
    * Noitfy on click entity select
    */
    _notifyBank: function() {
      if (this.recipient && !this.recipient.bank && !this.complete) {
        this.fire('on-click-entity-select');
      }
    },
    /**
    * Noitfy on click entity select
    */
    _notifyProductType: function() {
      if (this.recipient && !this.recipient.productType && !this.complete) {
        this.fire('on-click-product-type-select');
      }
    },
    /**
    * Noitfy on click edit number
    */
    _notifyEditNumber: function(e) {
      if (e.path && e.path.length && e.path[0].id === 'number') {
        this.fire('on-click-edit-number');
      }
    },
    /**
    * Set default contact
    */
    _setDefaultAlias: function(name, save) {
      if (!this.complete && name && save) {
        this.set('recipientResponse.alias', name);
      }
    },
    /**
    * Get label type recipient
    */
    _getLabelTypeRecipient: function(type) {
      return this.t('cells-new-recipient-review-' + (type ? type.toLowerCase() : 'account'));
    },
    /**
    * Checked disabled
    */
    _checkedDisabled: function(value) {
      return value ? 'disabled' : false;
    }
  });
}());