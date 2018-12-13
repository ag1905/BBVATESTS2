(function() {

  'use strict';

  Polymer({
    is: 'cells-new-recipient-review-pe',
    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
      * @type {Object}
      * @desc Notificatio on query
      */
      notification: Object,

      /**
      * @type {String}
      * @desc Account Number
      */
      accountNumber: {
        type: String
      },

      /**
      * @type {String}
      * @desc Beneficiary Name
      */
      beneficiaryName: {
        type: String
      },

      /**
      * @type {String}
      * @desc bank
      */
      entityName: {
        type: String
      }
    }
  });
}());
