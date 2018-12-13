Polymer({
  is: 'cells-atom-input',
  extends: 'input',
  properties: {
    /**
     * Use this property instead of `value` for two-way data binding.
     */
    bindValue: {
      type: String,
      notify: true,
      observer: '_bindValueChanged'
    },

    /**
     * Boolean attribute to notify if value is empty
     */
    empty: {
      type: Boolean,
      notify: true,
      reflectToAttribute: true
    },
    /**
     * Number attribute for ENTER KEY
     */
    ENTER_KEY: {
      type: Number,
      value: 13
    },
    /**
     * Number attribute for ESC KEY
     */
    ESC_KEY: {
      type: Number,
      value: 27
    }
  },

  listeners: {
    'input': '_onInput',
    'keypress': '_onKeypress',
    'keyup': '_onKeyup'
  },

  /**
   * Listen attribute value length in attached
   */
  attached: function() {
    if (this.value.length) {
      this._onControlEmpty(false);
      return;
    }

    this._onControlEmpty(true);
    this.set('bindValue', this.value);
  },

  /**
   * Control empty value
   * @private
   * @param {Boolean} attribute value length
   */
  _onControlEmpty: function(value) {
    this.set('empty', value);
  },

  /**
   * Listen attribute value length in event input
   * @private
   * @param {Event} e input event
   */
  _onLengthValue: function(e) {
    e.stopPropagation();

    if (e.target.value.length) {
      this._onControlEmpty(false);
      return;
    }

    this._onControlEmpty(true);
  },

  /**
   * Executed when input event is fired
   * @private
   * @param {Event} e input event
   */
  _onInput: function(e) {
    this._onLengthValue(e);
    this.set('bindValue', this.value);
  },

  /**
   * Executed when KeyPress event is fired.
   * @private
   * @param {Event} e input event
   */
  _onKeypress: function(e) {
    this._validateInput(e);
    this._keypressEnterAction(e);
  },

  /**
   * Executed when KeyUp event is fired.
   * @private
   * @param {Event} e input event
   */
  _onKeyup: function(e) {
    this._keyupEscAction(e);
  },

  /**
   * Listen for enter on keypress
   * @private
   * @param {Event} e keypress event
   */
  _keypressEnterAction: function(e) {
    e.stopPropagation();

    // Listen for enter on keypress but esc on keyup, because
    // IE doesn't fire keyup for enter.
    if (e.keyCode === this.ENTER_KEY) {
      this.fire('event-enter-key');
    }
  },

  /**
   * Listen for esc on keyup
   * @private
   * @param {Event} e keyup event
   */
  _keyupEscAction: function(e) {
    e.stopPropagation();
    if (e.keyCode === this.ESC_KEY) {
      this.fire('event-esc-key');
    }
  },

  /**
   * Checks the input value
   */
  _validateInput: function(e) {
    var valid = this._checkPatternValidity(e);

    if (!valid) {
      e.preventDefault();
    }
  },

  /**
   * Gets regEx depending on the input type
   */
  get _patternRegExp() {
    var pattern;
    switch (this.type) {
      case 'number':
        pattern = /[0-9.,e-]/;
        break;
    }

    return pattern;
  },

  /**
   * Checks if the input is valid.
   */
  _checkPatternValidity: function(e) {
    var value = (this.value || '').concat(String.fromCharCode(e.which));
    var regexp = this._patternRegExp;
    var isPrintableChar = this._isPrintable(e);

    if (!regexp) {
      return true;
    }

    for (var i = 0; i < value.length; i++) {
      if (isPrintableChar && !regexp.test(value[i])) {
        return false;
      }
    }
    return true;
  },

  /**
  * @suppress {checkTypes}
  */
  _bindValueChanged: function() {
    if (this.value !== this.bindValue) {
      this.value = !(this.bindValue || this.bindValue === 0 || this.bindValue === false) ? '' : this.bindValue;
    }

    //manually notify because we don't want to notify until after setting value
    this.fire('bind-value-changed', {value: this.bindValue});
  },

  _isPrintable: function(event) {
    // What a control/printable character is varies wildly based on the browser.
    // - most control characters (arrows, backspace) do not send a `keypress` event
    //   in Chrome, but the *do* on Firefox
    // - in Firefox, when they do send a `keypress` event, control chars have
    //   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
    // - printable characters always send a keypress event.
    // - in Firefox, printable chars always have a keyCode = 0. In Chrome, the keyCode
    //   always matches the charCode.
    // None of this makes any sense.
    // For these keys, ASCII code == browser keycode.
    var anyNonPrintable =
      (event.keyCode === 8) ||  // backspace
      (event.keyCode === 9) ||  // tab
      (event.keyCode === 13) ||  // enter
      (event.keyCode === 27);     // escape
    // For these keys, make sure it's a browser keycode and not an ASCII code.
    var mozNonPrintable =
      (event.keyCode === 19) ||  // pause
      (event.keyCode === 20) ||  // caps lock
      (event.keyCode === 45) ||  // insert
      (event.keyCode === 46) ||  // delete
      (event.keyCode === 144) ||  // num lock
      (event.keyCode === 145) ||  // scroll lock
      (event.keyCode > 32 && event.keyCode < 41) || // page up/down, end, home, arrows
      (event.keyCode > 111 && event.keyCode < 124); // fn keys
    return !anyNonPrintable && !(event.charCode === 0 && mozNonPrintable);
  }
});
