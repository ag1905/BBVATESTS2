(function() {

  'use strict';

  Polymer({

    is: 'cells-checkbox-button',

    properties: {
    /**
     * tabindex property of the checkbox button
     */
      tabindex: {
        type: Number,
        value: 0,
        reflectToAttribute: true
      },
    /**
     * Checked status of the checkbox button
     */
      checked: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_checked'
      },
    /**
     * Icon for the checkbox button when it's unchecked
     */
      icon: {
        type: String,
        reflectToAttribute: true
      },
    /**
     * Icon for the checkbox button when it's checked
     */
      iconCheck: {
        type: String,
        reflectToAttribute: true
      },
    /**
     * Disabled status of the checkbox button
     */
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_disabled'
      }
    },
    hostAttributes: {
      'role': 'checkbox',
      'aria-checked': 'false'
    },
    listeners: {
      'keydown': '_handleKeyDown',
      'tap': 'toggleCheck'
    },
    /**
     * Updates aria-checked attribute and fires checked/unchecked events
     */
    _checked: function(newValue) {
      this.setAttribute('aria-checked', this.checked);
      if (newValue) {
        this.fire('cells-checkbox-button-checked');
      } else {
        this.fire('cells-checkbox-button-unchecked');
      }
    },
    /**
     * Updates aria-disabled attribute and fires disabled/enabled events
     */
    _disabled: function(newValue) {
      this.setAttribute('aria-disabled', this.disabled);
      if (newValue) {
        this.fire('cells-checkbox-button-disabled');
      } else {
        this.fire('cells-checkbox-button-enabled');
      }
    },
    /**
     * Checks the checkbox button
     */
    check: function(nofocus) {
      if (!this.checked) {
        this.checked = !this.checked;
      }
    },
    /**
     * Unchecks the checkbox button
     */
    uncheck: function() {
      if (this.checked) {
        this.checked = !this.checked;
      }
    },
    /**
     * Toggles the checkbox button checked state
     */
    toggleCheck: function() {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.fire('cells-checkbox-button-toggled', this.checked);
      }
    },
    /**
     * Enables the checkbox button
     */
    enable: function() {
      if (this.disabled) {
        this.disabled = !this.disabled;
      }
    },
    /**
     * Disables the checkbox button
     */
    disable: function() {
      if (!this.disabled) {
        this.disabled = !this.disabled;
      }
    },
    /**
     * Toggles the checkbox when spacebar is pressed
     */
    _handleKeyDown: function(e) {
      if (e.keyCode === 32) {
        e.preventDefault();
        this.toggleCheck();
      }
    }

    /**
     * Fired when checkbox is toggled
     * @event cells-checkbox-button-toggled
     */
    /**
     * Fired when checkbox gets checked
     * @event cells-checkbox-button-checked
     */
    /**
     * Fired when checkbox gets unchecked
     * @event cells-checkbox-button-unchecked
     */
    /**
     * Fired when checkbox gets disabled
     * @event cells-checkbox-button-disabled
     */
    /**
     * Fired when checkbox gets enabled
     * @event cells-checkbox-button-enabled
     */
  });
}());
