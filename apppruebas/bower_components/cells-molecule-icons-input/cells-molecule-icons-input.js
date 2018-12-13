(function() {

  'use strict';

  Polymer({

    is: 'cells-molecule-icons-input',

    behaviors: [
      Polymer.i18nBehavior
    ],

    properties: {
      /**
      * info icon
      */
      iconInfo: {
        type: String
      },

      /**
      * code icon
      */
      iconCode: {
        type: String
      },

      /**
       * Size for text field icon e.g. 'icon-size-20'
       */
      iconSize: {
        type: String
      },

      thirdIcon: {
        type: Boolean
      },

      /**
      * concept
      */
      placeholder: {
        type: String
      },

      /**
      * concept
      */
      inputValue: {
        type: String,
        notify: true
      }

    },

    /**
    * Handles a 'click' event on the icon.
    * @method _onIconClick
    * @event 'cells-molecule-icons-input-click'
    */
    _onIconClick: function(e) {
      this.fire('cells-molecule-icons-input-click', e);
    }
  });

}());
