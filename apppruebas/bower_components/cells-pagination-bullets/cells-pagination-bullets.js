(function() {

  'use strict';

  Polymer({

    is: 'cells-pagination-bullets',

    properties: {
      /**
       * Icon id to display. If left blank, dots will be displayed as bullets
       * @type String
       */
      icon: {
        type: String,
        value: ''
      },

      /**
       * Icon size.
       */
      iconSize: {
        type: Number,
        value: 24
      },

      /**
       * Currently selected bullet
       * @type Number
       * @default 0
       */
      selected: {
        type: Number,
        value: 0,
        notify: true
      },

      /**
       * Array containing the slides. Used to count the number of bullets to display
       * @type Array
       * @default []
       */
      slides: {
        type: Array,
        value: []
      },

      /**
       * Number of bullets to display
       * @type String
       * @default 0
       */
      bulletNumber: {
        type: Number,
        value: 0
      },

      /**
       * IF set to true, clicking a bullet will do nothing
       * @type Boolean
       * @default false
       */
      noClick: {
        type: Boolean,
        value: false
      },

      _positions: {
        type: Array,
        computed: '_computePositions(bulletNumber)'
      },

      _hasIcon: {
        type: Boolean,
        computed: '_computeHasIcon(icon)'
      },

      _hasSlides: {
        type: Boolean,
        computed: '_computeHasSlides(slides)'
      }
    },

    _computePositions: function(bulletNumber) {
      return new Array(bulletNumber);
    },

    _computeHasSlides: function(slides) {
      return slides.length > 0;
    },

    _bulletClicked: function(evt) {
      if (this.noClick) {
        return;
      }

      var item = evt.model.index;

      if (item === this.selected) {
        return;
      }

      this.set('selected', item);
    },

    _computeActive: function(selected, index) {
      if (selected === index) {
        return this._hasIcon ? 'icon__active' : 'bullet__active';
      }
    },

    _computeHasIcon: function(icon) {
      return icon !== '';
    }
  });

}());
