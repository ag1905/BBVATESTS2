(function() {

  'use strict';

  Polymer({

    is: 'cells-switch',

    hostAttributes: {
      tabindex: 0,
      'role': 'switch'
    },

    behaviors: [
      Polymer.IronCheckedElementBehavior,
      Polymer.IronA11yKeysBehavior
    ],

    properties: {
      /**
       * ID of icon to display when the toggle is checked.
       */
      iconChecked: {
        type: String,
        value: ''
      },
      /**
       * ID of icon to display when the toggle is unchecked.
       */
      iconUnchecked: {
        type: String,
        value: ''
      },
      /**
       * ID of icon to display in the button that toggles.
       */
      iconToggle: {
        type: String,
        value: ''
      },

      /**
       * Determines the size of the toggle icon.
       */
      iconSize: {
        type: Number,
        value: 20
      },

      /**
       * Set to true, when you are using icons
       */
      withIcons: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Label when checked is true
       */
      labelOn: {
        type: String,
        observer: '_labelOnChanged'
      },

      _labelOff: {
        type: String
      },

      _labelToggles: {
        type: Boolean,
        value: false
      },

      _target: {
        type: Object,
        value: function() {
          return this;
        }
      }
    },

    keyBindings: {
      'space': '_onSpaceKeydown'
    },

    listeners: {
      click: 'toggle'
    },

    _onSpaceKeydown: function(e) {
      if (e.detail.keyboardEvent.keyCode === 32) {
        e.preventDefault();
      }
      this.toggle();
    },
    /**
     * Toggles button state position and `checked` property
     *  true if component is checked and false if is unchecked
     */
    toggle: function() {
      this.checked = !this.checked;
    },
    /**
     * Overriding 'checked' observer from Polymer.IronCheckedElementBehavior;
     * on change, it toggles `.on` class of `#handler` node
     * @param {Boolean} checked value
     */
    _checkedChanged: function(value) {
      var switchClasses = this.$.handler.classList;
      var switchState = switchClasses.contains('on');

      this.$.handler.classList.toggle('on', value);

      if (this._labelToggles) {
        this.$.label.textContent = this.checked ? this.labelOn : this._labelOff;
      }
      this.setAttribute('aria-label', this.getEffectiveTextContent());
      this.setAttribute('aria-checked', this.checked);
      /**
       * Fired when `checked` value is changed,
       * with current status as payload
       *
       * @event cells-switch-changed
       */
      this.dispatchEvent(new CustomEvent('cells-switch-changed', {
        bubbles: true,
        composed: true,
        detail: this.checked
      }));
    },
    _labelOnChanged: function(newValue, oldValue) {
      if (newValue !== '') {
        this._labelToggles = true;
        this._labelOff = this.textContent;
      } else {
        this._labelToggles = false;
      }
    }
  });


}());
