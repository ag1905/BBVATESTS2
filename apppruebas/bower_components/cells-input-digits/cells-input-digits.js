(function() {

  'use strict';

  Polymer({

    is: 'cells-input-digits',

    behaviors: [
      window.CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * String that will compose for the IDs of each input
       */
      naming: String,
      /**
       * Number of fields
       */
      inputFields: Number,
      /**
       * Text for submit button
       */
      submitText: {
        type: String,
        value: 'cells-input-digits-ok'
      },
      /**
       * Digit inputs are disabled
       */
      disabled: {
        type: Boolean,
        value: false
      },
      type: {
        type: String,
        value: 'number'
      },
      _capNaming: {
        type: String,
        computed: '_computeCapNaming(naming)'
      },
      _fields: {
        type: Array,
        computed: '_computeFields(naming, inputFields)'
      },
      _inputs: Array,
      _digitsResult: Number,
      /**
       * Assigns a maximum width to the component
       */
      calculateMaxwidth: {
        type: Boolean,
        value: false
      },
      _maxwidth: {
        type: String,
        computed: '_computeMaxwidth(calculateMaxwidth, inputFields)'
      },

      /**
      * Clear inputs value
      */
      clearDigits: {
        type: Boolean,
        value: false,
        observer: 'reset',
        notify: true
      }
    },

    listeners: {
      'submit.click': 'submit'
    },

    observers: [
      '_inputsChanged(inputFields)'
    ],

    _computeCapNaming: function(naming) {
      return naming.substr(0, 1).toUpperCase() + naming.substr(1).toLowerCase();
    },

    _computeFields: function(naming, inputFields) {
      var inputs = [];
      for (var i = 0; i < inputFields; i++) {
        inputs.push({
          name: this._capNaming + i
        });
      }
      return inputs;
    },

    _inputsChanged: function(inputFields) {
      Polymer.RenderStatus.afterNextRender(this, function() {
        var inputs = Polymer.dom(this.root).querySelectorAll('cells-molecule-input');
        this.set('_inputs', inputs);
      });
    },

    _checkInputNum: function(e) {
      var event = Polymer.dom(e);
      var inputLength = event.localTarget.value ? event.localTarget.value.length : 0;

      // Disable submit button if no input
      if (inputLength === 0) {
        this.$.submit.disabled = true;
      }

      // Input one digit
      if (inputLength === 1) {
        this._focusNext(e);
        if (this.allInputsFilled()) {
          this.$.submit.disabled = false;
        }
        return;
      }

      // Prevent from inputing more than 1 digit but pass to next
      if (inputLength > 1) {
        var val = event.localTarget.value.slice(0, 1);
        var extra = event.localTarget.value.slice(-1);
        event.localTarget.set('value', val);
        this._giveValueToNextInput(e, extra);
        return;
      }

      // Focus previous input on Delete/Backspace
      if (inputLength === 0 && this._lastKeyCode === 8) {
        this._focusPrevious(e);
        /**
         * Fired when any of the digits is erased
         * @event digit-erased
         */
        this.fire('digit-erased');
        return;
      }
    },

    _checkKeyDown: function(e) {
      this.set('_lastKeyCode', e.keyCode);

      // Go to previous input on Delete/Backspace and no input in currentTarget/localTarget
      var event = Polymer.dom(e);
      var val = event.localTarget.value;
      var prevSibling = this._getPrevSibling(e);
      if (e.keyCode === 8 && Boolean(val === undefined || val.length === 0) && prevSibling) {
        prevSibling.focus();
      }
    },

    _getNextSibling: function(e) {
      var event = Polymer.dom(e);
      return event.localTarget.nextElementSibling;
    },

    _getPrevSibling: function(e) {
      var event = Polymer.dom(e);
      return event.localTarget.previousElementSibling;
    },

    _focusNext: function(e) {
      var sibling = this._getNextSibling(e);
      var submitBtn = this.$.submit;
      var event = Polymer.dom(e);
      var idOfLastInput = 'input' + this._capNaming + (this.inputFields - 1);
      var lastInputisCurrent = Boolean(event.localTarget.id === idOfLastInput);
      var siblingIsLast = Boolean(sibling.id === idOfLastInput);

      if (this.allInputsFilled()) {
        submitBtn.disabled = false;

        if (sibling.nodeName !== 'CELLS-MOLECULE-INPUT' || lastInputisCurrent || siblingIsLast) {
          sibling = submitBtn;
        }
      }
      sibling.focus();
    },

    _focusPrevious: function(e) {
      var prevSibling = this._getPrevSibling(e);
      if (prevSibling && prevSibling.nodeName === 'CELLS-MOLECULE-INPUT') {
        prevSibling.focus();
      }
    },

    _giveValueToNextInput: function(e, extra) {
      var sibling = this._getNextSibling(e);
      sibling.focus();
      sibling.set('value', extra);
      this._focusNext(e);
    },

    /**
     * Fires an event `submit-digits`,
     * if all inputs are filled with the resulting Number as paylod
     */
    submit: function(e) {
      var digits = '';

      if (this.allInputsFilled()) {
        this._inputs.forEach(function(input) {
          digits += input.value;
        });

        this.set('_digitsResult', parseInt(digits));
        /**
         * Fired on submit() with the resulting Number as payload
         * @event submit-digits
         */
        this.fire('submit-digits', this._digitsResult);
        this.reset();
      }
    },

    /**
     * Checks if all inputs have a digit
     */
    allInputsFilled: function() {
      var result = true;
      var inputs = Polymer.dom(this.root).querySelectorAll('cells-molecule-input');

      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === undefined || inputs[i].value.length !== 1) {
          result = false;
          return result;
        }
      }
      return result;
    },

    /**
     * Focus on first input
     */
    focus: function() {
      if (this._inputs && this._inputs.length > 0) {
        this._inputs[0].focus();
      }
    },
    /**
     * Calculate the maxwidth of the component in order to make it flexible/responsive
     */
    _computeMaxwidth: function(calculateMaxwidth, inputFields) {
      if (calculateMaxwidth) {
        Polymer.RenderStatus.afterNextRender(this, function() {
          var input = Polymer.dom(this.root).querySelector('cells-molecule-input');
          var buttonSubmit = Polymer.dom(this.root).querySelector('.button-submit');
          var maxwidth = '';
          maxwidth = (input.offsetWidth * inputFields) + buttonSubmit.offsetWidth;
          this.style.maxWidth = maxwidth + 'px';
        });
      }
    },
    /**
     * Empty all inputs
     */
    reset: function() {
      if (this._inputs) {
        this._inputs.forEach(function(input) {
          input.value = '';
        });
        this.$.submit.disabled = true;
      }
      this.clearDigits = false;
    }
  });
}());
