(function() {

  'use strict';

  Polymer({

    is: 'cells-notification-list',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      list: {
        type: Object,
        observer: '_setList'
      },

      _list: {
        type: Array
      },

      imgSrc: {
        type: String
      },

      emptyMessage: {
        type: String,
        value: 'cells-notification-list-no-items'
      }
    },

    _setList: function(data) {
      this.set('_list', Object.keys(data).map(function(item) {
        return {
          key: item,
          value: data[item]
        };
      }));
    },

    _fireModel: function(e) {
      this.dispatchEvent(new CustomEvent('item-selected', {
        bubbles: true,
        composed: true,
        detail: e.model.notification
      }));
    }
  });

}());
