Polymer({

  is: 'cells-atom-radio-button',

  behaviors: [
    Polymer.IronButtonState,
    Polymer.IronCheckedElementBehavior
  ],

  hostAttributes: {
    role: 'radio',
    'aria-checked': this.checked,
    'aria-disabled': this.disabled,
    tabindex: 0
  },

  properties: {

    /**
    * Bind with the native radio button's 'name' attribute
    * @type {String}
    **/
    name: {
      type: String,
      value: '',
      reflecToAttribute: true
    },

    /**
    * Binds with the native radio button's 'checked' attribute
    * @type {Boolean}
    * @observer _checkedChange
    */
    checked: {
      type: Boolean,
      value: false,
      reflecToAttribute: true,
      notify: true,
      observer: '_checkedChange'
    },

    /**
    * Binds with the native radio button's 'disabled' attribute
    * @type {Boolean}
    * @observer _disabled
    */
    disabled: {
      type: Boolean,
      value: false,
      reflecToAttribute: true,
      notify: true,
      observer: '_disabledChange'
    }
  },

  listeners: {
    'click': 'updateChecked'
  },

  /**
   * Sets aria-checked (for A11y) to the components checked property.
   */
  _checkedChange: function() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
  },

  /**
   * Sets aria-checked (for A11y) to the components chedisabledcked property.
   */
  _disabledChange: function() {
    var nativeRadioButton = Polymer.dom(this.root).querySelector('input');
    nativeRadioButton.disabled = this.disabled;
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  },

  /*
  * Setup of the component.
  */
  attached: function(event) {
    this.active = this.checked;
  },

  /*
  * Handles 'iron-signal-radio-change' events.
  * @param {Object} event
  * 'event' contains the native radio button contained in this component
  * which may be the same as the one that fired the event.
  * This method allows mutual exclusion between cells-atom-radio-button's with
  * the same 'name', just like native radio button's
  */
  radioButtonChangeHandler: function(event) {
    var nativeRadioButton = Polymer.dom(this.root).querySelector('input');
    var clickedRadioButton = event.detail;

    /*
    * Only when not disabled:
    * If the clicked radio button is the same as the clicked, then it state
    * will be true. Otherwise, it will be false even if it was previously true or false
    */
    if (clickedRadioButton.name === this.name && !this.disabled && !clickedRadioButton.disabled) {
      nativeRadioButton.checked = (nativeRadioButton === clickedRadioButton);
      this.checked = nativeRadioButton.checked;
    }
  },

  /*
  * Fired on 'iron-signal-radio-change' state change.
  * @param {Object} event
  * @event iron-signal-radio-change (for siblings)
  */
  updateChecked: function(event) {
    this.fire('iron-signal',  {name: 'radio-change', data: Polymer.dom(this.root).querySelector('input')});
  }
});
