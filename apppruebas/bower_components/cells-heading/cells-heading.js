(function() {

  'use strict';

  Polymer({

    is: 'cells-heading',

    hostAttributes: {
      'aria-level': 2
    },

    properties: {
      /**
       * Allows to define an aria-level for the main header text.
       * If 0 is provided, the header text won't be treated as a heading.
       */
      level: {
        type: Number,
        value: 2,
        notify: true,
        observer: '_levelChanged'
      }
    },

    _levelChanged: function(level) {
      if (level >= 1 && level <= 6) {
        this.setAttribute('aria-level', level);
        this.setAttribute('role', 'heading');
      } else {
        this.removeAttribute('aria-level');
        this.removeAttribute('role');
      }
    }

  });

}());
