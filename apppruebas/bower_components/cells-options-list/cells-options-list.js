(function() {

  'use strict';

  Polymer({

    is: 'cells-options-list',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      items: {
        type: Array
      },

      mandatoryChecked: {
        type: Boolean
      }
    },

    dispatchItemsChecked: function(ev) {
      var defaultEvent = 'no-items-checked';
      var detail = [];

      var itemsChecked = this.items.reduce(function(acc, item) {
        if (item.checked) {
          acc.push(item.id);
        }
        return acc;
      }, []);

      if (itemsChecked && itemsChecked.length) {
        defaultEvent = 'items-checked';
        detail = itemsChecked;
      } else if (this.mandatoryChecked) {
        defaultEvent = 'last-item-checked';
        detail = ev.model.item.id;
        ev.currentTarget.checked = true;
      }

      this.dispatchEvent(new CustomEvent(defaultEvent, {
        bubbles: true,
        composed: true,
        detail: detail
      }));
    }
  });
}());