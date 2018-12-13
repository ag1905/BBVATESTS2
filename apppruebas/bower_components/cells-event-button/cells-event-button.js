(function() {

  'use strict';

  Polymer({

    is: 'cells-event-button',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      label: {
        type: String
      },
      btnClass: {
        type: String,
        value: 'secondary'
      },
      iconButton: {
        type: String,
        value: 'coronita:unfold'
      },
      iconSize: {
        type: Number,
        value: 28
      },
      eventName: {
        type: String,
        value: 'btn-pressed'
      }
    },

    _dispatchEvent: function() {
      this.dispatchEvent(new CustomEvent(this.eventName, {
        bubbles: true,
        composed: true,
        detail: this.label
      }));
    }
  });

}());
