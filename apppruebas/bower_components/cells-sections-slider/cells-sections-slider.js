(function() {

  'use strict';

  Polymer({

    is: 'cells-sections-slider',
    properties: {
      selected: {
        type: Number,
        value: 0,
        notify: true,
        observer: '_selectedChange'
      },
      entryAnimation: {
        type: String,
        value: 'slide-from-bottom-animation'
      },
      exitAnimation: {
        type: String,
        value: 'slide-up-animation'
      },
      vertical: {
        type: Boolean,
        value: false
      },
      first: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: true
      },
      last: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false
      },
      next: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false
      },
      prev: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false
      },
      _numSections: {
        type: Number
      }
    },
    observers: [
      '_sliderChanged(selected, _numSections)'
    ],

    attached: function() {
      this._countingSections();
    },

    _countingSections: function() {
      Polymer.dom(this.$.sections).observeNodes(function(info) {
        var len;
        var items = info.addedNodes.filter(function(node) {
          return (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'TEMPLATE');
        });
        len = items.length;
        if (len > 0) {
          this.set('_numSections', len - 1);
        }
      }.bind(this));
    },

    /* observer methods */
    _selectedChange: function(newValue, oldValue) {
      if (typeof oldValue !== 'undefined') {
        if (newValue > oldValue) {
          this.set('next', true);
        } else if (newValue < oldValue) {
          this.set('prev', true);
        }
      }
    },

    _sliderChanged: function(selected, _numSections) {
      this.set('first', selected === 0 ? true : false);
      this.set('last', selected === _numSections ? true : false);
    },

    /* public methods */
    onNextClick: function() {
      this.goto(this.selected + 1);
    },

    onPrevClick: function() {
      this.goto(this.selected - 1);
    },

    goto: function(_selected) {
      var _animation = [];
      if (this._validateSelected(_selected)) {
        if (_selected > this.selected) {
          _animation = this.vertical ? ['bottom', 'up'] : ['right', 'left'];
        } else if (_selected < this.selected) {
          _animation = this.vertical ? ['top', 'down'] : ['left', 'right'];
        }
        this._sliderTo(_animation[0], _animation[1], _selected);
      }
    },

    /* private methods */
    _sliderTo: function(_entryAnimation, _exitAnimation, _selected) {
      this.set('entryAnimation', ['slide', 'from', _entryAnimation, 'animation'].join('-'));
      this.set('exitAnimation', ['slide', _exitAnimation, 'animation'].join('-'));
      this.set('selected', _selected);
    },

    _validateSelected: function(_selected) {
      return typeof _selected === 'number' &&
        _selected >= 0 &&
        _selected <= this._numSections &&
        _selected !== this.selected;
    }

  });

}());
