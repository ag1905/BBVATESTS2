Polymer({

  is: 'cells-molecule-input',

  properties: {

    /**
     * Label of the input
     */
    label: String,

    /**
     * Value of the input. Can be used to define a default value for the input
     */
    value: {
      type: String,
      notify: true,
      observer: '_valueObserver'
    },

    /**
     * Property that mirrors the value property
     */
    bindValue: {
      type: String,
      notify: true
    },

    /**
     * Type of the input. Supported types are text, password, number and email
     */
    type: {
      type: String,
      value: 'text',
      reflectToAttribute: true
    },

    /**
     * Name that maps to HTML native's name attribute (useful for forms)
     */
    name: {
      type: String,
      reflectToAttribute: true
    },

    /**
     * If true, the element currently has focus
     */
    focused: {
      type: Boolean,
      notify: true,
      value: false,
      readOnly: true,
      reflectToAttribute: true
    },

    /**
     * If true, the element is currently invalid
     */
    invalid: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * If true, the element is currently disabled
     */
    disabled: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, the element is currently in readonly mode
     */
    readonly: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, the element is required (it must not be empty in order to validate correctly)
     */
    required: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_requiredObserver'
    },

    /**
     * If true, the element has autofocus (it receives the focus when the page is loaded)
     */
    autofocus: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, the user can't write wrong chars in the input, according to the 'allowedChars' property
     */
    preventInvalidInput: {
      type: Boolean,
      value: false
    },

    /**
     * Max length of the input value
     */
    maxLength: {
      type: String,
      value: ''
    },

    /**
     * Set to true to validate the input each time the value is changed
     */
    autoValidate: {
      type: Boolean,
      value: false
    },

    /**
     * Error message to be shown in case input value is invalid
     */
    errorMessage: {
      type: String,
      value: null
    },

    /**
     * Error message icon to be shown in case input value is invalid and error message icon exist
     */
    errorMessageIcon: {
      type: String,
      value: null,
      reflectToAttribute: true
    },

    /**
     * Whether all the input value is selected when input gets focus
     */
    selectAllOnFocus: {
      type: Boolean
    },

    /**
     * Allowed chars the user can enter in the input. Maps to iron-input 'allowed-pattern' property.
     */
    allowedChars: {
      type: String,
      value: ''
    },

    _allowedValue: {
      type: Array
    },

    /**
    * Regular expression used to validate the input value. Is allowed string format to validate (it will be cast to array automatically)
    */
    allowedValue: {
      type: String,
      observer: '_formatAllowValue'
    },

    /**
     * Regular expression used to validate the input value. If not defined, default iron-input validation will be used, according to the input type. Is allowed array format to validate more than one expression: Example:
     * ```
     * '^[a-zA-Z]+$' or ['^[a-zA-Z]+$', '[0-9]']
     * ```
     */
    allowedMultiplesValues: {
      type: Array,
      observer: '_formatAllowMultiplesValues'
    },

    /**
     * Regular expression used to know if the user has deleted a character icluded in validation mask patter (check out cells-input-validations-behavior docs) to fix the cursor position on android devices
     */
    customPattern: {
      type: String
    },

    /**
     * Validate input value on blur and/or focus event.
     */
    inputStatusValidate: Boolean,

    /**
     * Control if user input data is masked/formatted (cells-input-validations-behavior required) on real time
     */
    autoMask: {
      type: Boolean,
      value: false
    },

    /**
     * Icon size of the input icons
     */
    iconSize: {
      type: Number,
      value: 18
    },

    /**
     * Main icon to show
     */
    icon: {
      type: String,
      value: null,
      reflectToAttribute: true
    },

    /**
     * Aria-label text for main icon
     */
    iconLabel: {
      type: String,
      value: ''
    },

    /**
     * Toggled version of main icon
     */
    iconToggled: {
      type: String,
      value: null,
      reflectToAttribute: true
    },

    /**
     * Icon currently shown as main icon
     */
    _icon: {
      type: String
    },

    /**
     * Action launched when main icon is tapped. Can be 'clear' (to clear the field) or 'toggle' (to toggle between original input type and 'text' type). Set to 'none' to just fire an event
     */
    iconAction: {
      type: String,
      value: null
    },

    /**
     * Condition under which the main icon is visible. Can be 'always', focused', 'content' or 'focused-content'
     */
    iconVisibility: {
      type: String,
      value: null
    },

    /**
     * Computed main icon visibility, depending on user choice (iconVisibility property), input type and input action
     */
    _iconVisibility: {
      type: String,
      computed: '_iconComputedVisibility(iconVisibility, _initialType, _iconAction)'
    },

    /**
     * Computed action for the main icon, depending on user choice (iconAction property), input type and inputToggled property
     */
    _iconAction: {
      type: String,
      computed: '_iconComputedAction(iconAction, _initialType, iconToggled)'
    },

    /**
     * Secondary icon to show
     */
    extraIcon: {
      type: String,
      value: null,
      reflectToAttribute: true
    },

    /**
     * Aria-label text for secondary icon
     */
    extraIconLabel: {
      type: String,
      value: ''
    },

    /**
     * Toggled version of secondary icon
     */
    extraIconToggled: {
      type: String,
      value: null,
      reflectToAttribute: true
    },

    /**
     * Icon currently shown as secondary icon
     */
    _extraIcon: {
      type: String
    },

    /**
     * Action launched when secondary icon is tapped. Can be 'clear' (to clear the field) or 'toggle' (to toggle between original input type and 'text' type). Set to 'none' to just fire an event
     */
    extraIconAction: {
      type: String,
      value: null
    },

    /**
     * Condition under which the secondary icon is visible. Can be 'always', focused', 'content' or 'focused-content'
     */
    extraIconVisibility: {
      type: String,
      value: null
    },

    /**
     * Computed secondary icon visibility, depending on user choice (extraIconVisibility property), input type and icon action
     */
    _extraIconVisibility: {
      type: String,
      computed: '_iconComputedVisibility(extraIconVisibility, _initialType, _extraIconAction)'
    },

    /**
     * Computed secondary action for the icon, depending on user choice (extraIconAction property), input type and extraInputToggled property
     */
    _extraIconAction: {
      type: String,
      computed: '_iconComputedAction(extraIconAction, _initialType, extraIconToggled)'
    },

    /**
     * Stores the input original type, to allow toggling type to 'text' and back to original
     */
    _initialType: {
      type: String
    },

    /**
     * Icon shown when input is invalid
     */
    errorIcon: {
      type: String,
      value: null
    },

    /**
     * If true, input currently has content (value is not empty)
     */
    hasContent: {
      type: Boolean,
      value: false,
      readOnly: true,
      reflectToAttribute: true
    },

    /**
     * For type=number, native step value
     */
    step: Number,

    /**
     * For type=number, native max value
     */
    max: Number,

    /**
     * For type=number, native min value
     */
    min: Number,

    /**
     * Whether the placeholder is hidden when the input has some value
     */
    shyPlaceholder: Boolean,

    /**
     * Whether the input has content when shyPlaceholder is true
     */
    _hidePlaceholder: Boolean,

    /**
     * Whether the input has to toggle between icons on empty/filled value
     */
    toggleEmptyFillIcons: Boolean,

    /**
     * Flag to contro if validation password has failed
     */
    hasError: {
      type: Boolean,
      value: false
    },
    /**
     * Autocapitalize input
     */
    autocapitalize: {
      type: String,
      value: 'none'
    }
  },


  attached: function() {
    this.$.input.addEventListener('focus', this._onInputFocus);
    this.addEventListener('tap', this.focus);

    this._icon = this.icon;
    this._extraIcon = this.extraIcon;
    this._initialType = this.type;
    if (this.value && this.autoValidate) {
      this.validate();
    }
    if (this.toggleEmptyFillIcons) {
      this.set('iconVisibility', 'always');
    }
  },

  /**
   * Sets focus to input tag
   */
  focus: function() {
    this.$.input.focus();
  },

  /**
   * Set the start and end positions of the text selection to input tag
   */
  setSelectionRange: function(selectionStart, selectionEnd) {
    this.$.input.setSelectionRange(selectionStart, selectionEnd);
  },

  /**
   * Sets focused state and fires event when component obtains focus
   */
  _onFocus: function(e) {
    this.async(function() {
      if (!this.focused) {
        this._setFocused(true);
        if (this.inputStatusValidate) {
          this.invalid = false;
        }
        this.dispatchEvent(new CustomEvent('cells-molecule-input-focus', {
          bubbles: true,
          composed: true,
          detail: {
            originalEvent: e
          }
        }));
      }
    }, 1);
    /**
     * Event fired when input is focused
     * @event cells-molecule-input-focus
     */
  },

  /**
   * Sets focused state and fires event when component loses focus
   */
  _onBlur: function(e) {
    this.async(function() {
      if (!(Polymer.dom(this.root).activeElement)) {
        this._setFocused(false);
        if (this.inputStatusValidate) {
          this.validate();
        }
        this.dispatchEvent(new CustomEvent('cells-molecule-input-blur', {
          bubbles: true,
          composed: true
        }));
      }
    }, 1);
    /**
     * Event fired when input loses focus
     * @event cells-molecule-input-blur
     */
  },

  /**
   * Reset input value after delete one input case before validate or mask value
   */
  _onDelete: function(ev) {
    var formattedValue = [];
    if ((ev.code === 'Backspace' || ev.key === 'Backspace' || ev.which === 8 || ev.keyCode === 8) && this.customPattern) {
      var pattern = new RegExp(this.customPattern);
      if (this.$.input.value.length) {
        var caseDeleted = this.value[this.$.input.selectionStart - 1];
        this.autoMask = (pattern.test(caseDeleted)) ? false : true;
      }
      this._autoMaskedState(this.autoMask);
      this.dispatchEvent(new CustomEvent('delete-input-case', {
        bubbles: true,
        composed: true,
        detail: caseDeleted
      }));
    }
    /**
     * Event fired when delete input case
     * @event delete-input-case
     */

    /**
     * Event fired after deleting input case
     * @event user-auto-mask
     * @param {Boolean} autoMask
     */
  },

  /**
   * Selects the entire value or not when input is focused, based on selectAllOnFocus property, and fires event
   */
  _onInputFocus: function() {
    if (this.selectAllOnFocus) {
      /* setTimeout 0 because iOS moves cursor to click coordinates after the text has been selected */
      setTimeout(function() {
        this.$.input.setSelectionRange(0, this.$.input.value.length);
      }.bind(this), 0);
    }
    if (this.customPattern) {
      this._autoMaskedState(true);
    }
  },

  /**
   * Manages hasContent property state, and calls input validation if autoValidate is true
   */
  _valueObserver: function(newValue) {
    this._setHasContent(!!newValue);
    if (this.shyPlaceholder) {
      this._hidePlaceholder = !!newValue;
    } else {
      this._setHasContent(!!newValue);
    }
    if (this.autoValidate) {
      this.validate();
    }
    if (this.customPattern) {
      if (this.autoMask) {
        this.async(function() {
          this.$.input.selectionStart = this.$.input.selectionEnd = this.$.input.value.length;
        }, 10);
      }
      this._autoMaskedState(true);
      this.value = this.bindValue || this.value;
    }

    if (this.toggleEmptyFillIcons) {
      this._icon = !newValue ? this.icon : this.iconToggled;
    }
  },

  /**
  * Enable / disable auto mask input validation
  */
  _autoMaskedState: function(status) {
    this.dispatchEvent(new CustomEvent('user-auto-mask', {
      bubbles: true,
      composed: true,
      detail: status
    }));
  },

  /**
   * Returns action for icon.
   */
  _iconComputedAction: function(iconAction, _initialType, iconToggled) {
    if (iconAction === 'none') {
      return false;
    } else if (iconAction) {
      return iconAction;
    } else if (_initialType === 'password' && iconToggled) {
      return 'toggle';
    } else {
      return 'clear';
    }
  },

  /**
   * Returns visibility for icon.
   */
  _iconComputedVisibility: function(iconVisibility, _initialType, _iconAction) {
    if (iconVisibility) {
      return iconVisibility;
    } else if (_initialType === 'password' && _iconAction === 'toggle') {
      return 'focused-content';
    } else {
      return 'content';
    }
  },

  /**
   * Add visibility CSS class to icon based on received icon computed visibility
   */
  _iconVisible: function(value) {
    switch (value) {
      case 'always':
        return 'visible-always';
      case 'focused':
        return 'visible-focused';
      case 'focused-content':
        return 'visible-focused visible-content';
      default:
        return 'visible-content';
    }
  },

  /**
   * Called when main icon is activated. Toggles icon if necessary, and runs icon action
   */
  _iconTap: function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.toggleEmptyFillIcons && this._icon === this.iconToggled || !this.toggleEmptyFillIcons) {
      this._toggleIcon(this.icon);
      this._runIconAction(this._iconAction);
      this.dispatchEvent(new CustomEvent('cells-molecule-input-icon-tap', {
        bubbles: true,
        composed: true
      }));
    }
    /**
     * Fired when main icon is activated
     * @event cells-molecule-input-icon-tap
     */
  },

  /**
   * Called when secondary icon is activated. Toggles icon if necessary, and runs icon action
   */
  _extraIconTap: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this._toggleIcon(this.extraIcon);
    this._runIconAction(this._extraIconAction);
    this.dispatchEvent(new CustomEvent('cells-molecule-input-extra-icon-tap', {
      bubbles: true,
      composed: true
    }));
    /**
     * Fired when secondary icon is activated
     * @event cells-molecule-input-extra-icon-tap
     */
  },

  /**
   * Manages icon action.
   */
  _runIconAction: function(icon) {
    switch (icon) {
      case 'clear':
        this._clearInput();
        this.$.input.focus();
        break;
      case 'toggle':
        this._toggleInput();
        this.$.input.focus();
        break;
      default:
        break;
    }
  },

  /**
   * Sets input value to empty
   */
  _clearInput: function() {
    this.value = '';
  },

  /**
   * Toggles icon for main icon or secondary icon
   */
  _toggleIcon: function(icon) {
    if (icon === this.extraIcon) {
      this._extraIcon = (this.extraIconToggled && this._extraIcon === this.extraIcon) ? this.extraIconToggled : this.extraIcon;
    } else {
      this._icon = (this.iconToggled && this._icon === this.icon) ? this.iconToggled : this.icon;
    }
  },

  /**
   * Toggles input type to 'text' or back to original type
   */
  _toggleInput: function() {
    this.type = this.type === this._initialType ? 'text' : this._initialType;
  },

  /**
  *  Cast regular expressions from string to array type and assign it to private property _allowedValue
  */
  _formatAllowValue: function(value) {
    if (value && !Array.isArray(value)) {
      this.set('_allowedValue', [ value ]);
    }
  },

  /**
  * Assign multiples regular expressions to private property _allowedValue
  */
  _formatAllowMultiplesValues: function(values) {
    if (values && values.length) {
      this.set('_allowedValue', values);
    }
  },

  /**
   * Launches input validation against allowedValue property regex, against iron-input default validation and against required property, and updates invalid property state
   */
  validate: function() {
    var valid;
    var inputValue = this.value || this.bindValue;
    this.hasError = false;
    if (this.value && (this._allowedValue && this._allowedValue.length)) {
      this._allowedValue.forEach(function(item, index) {
        if (!new RegExp(item, 'i').test(inputValue)) {
          valid = false;
          this.hasError = true;
          this.dispatchEvent(new CustomEvent('validation-error-type', {
            detail: index,
            bubbles: true,
            composed: true
          }));
        }
        if (!this.hasError) {
          valid = true;
        }
      }.bind(this));
    } else if (inputValue && (!this._allowedValue || this._allowedValue && !this._allowedValue.length)) {
      valid = Polymer.Element ? this.$.ironInput.validate() : this.$.input.checkValidity();
    } else if (!inputValue && this.required) {
      valid = false;
    } else {
      valid = true;
    }
    if (valid === this.invalid) {
      this.invalid = !valid;
      this.dispatchEvent(new CustomEvent('cells-molecule-input-validate', {
        detail: {
          id: this.id,
          valid: valid,
          value: inputValue
        },
        bubbles: true,
        composed: true
      }));
      /**
       * Fired when input validation status changes
       * @event cells-molecule-input-validate
       */
    }
    this.hasError = !valid;
    return valid;
  },

  /**
   * Observer that checks the required state, if it is not required, then it should not be invalid either. It calls the validate method because the invalid state is shared across multiple properties
   */
  _requiredObserver: function(newVal) {
    if (newVal === false) {
      this.invalid = newVal;
      this.validate();
    }
  }
});
