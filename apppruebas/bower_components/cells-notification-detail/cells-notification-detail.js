(function() {

  'use strict';

  Polymer({

    is: 'cells-notification-detail',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      data: {
        type: Object,
        observer: '_setData'
      },
      date: String,
      title: String,
      message: String,
      srcImg: String,
      amount: Object
    },

    _setData: function() {
      this.set('srcImg', this.data.image);
      this.set('date', this.data.date);
      this.set('title', this.data.title);
      this.set('message', this.data.message);
      this.set('amount', this.data.amount);
    },

    _dispatchEvent: function() {
      this.dispatchEvent(new CustomEvent('cells-notification-detail-ok', {
        bubbles: true,
        composed: true
      }));
    }

  });

}());
