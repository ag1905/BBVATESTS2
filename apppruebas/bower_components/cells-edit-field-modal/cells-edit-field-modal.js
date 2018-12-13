(function() {
  'use strict';

  Polymer({

    is: 'cells-edit-field-modal',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * @desc  Field value to edit
       * @type  {String}
       */
      value: {
        type: String,
        notify: true,
        observer: '_valueChanged'
      },
      /**
       * @desc  Field name and input placeholder
       * @type  {String}
       */
      placeholder: {
        type: String
      },
      /**
       * @desc  Header title
       * @type  {String}
       * @value Edit
       */
      title: {
        type: String
      },
      /**
       * @desc Flags whether the modal is open or not
       * @type {Boolean}
       */
      opened: {
        type: Boolean,
        observer: '_modalStatus',
        value: false
      },
      /**
       * @desc  Flags if modal window should close on "closing"
       * @type  {Boolean}
       * @value false
       */
      closeOn: {
        type: Boolean,
        value: false
      },
      /**
       * @desc  Icon to use into modal's header
       * @type  {String}
       * @value 'coronita:close'
       */
      closeIcon: {
        type: String,
        value: 'coronita:close'
      },
      /**
       * @desc  Regular expression pattern to validate input value
       * @type  {String}
       * @value '.+'
       */
      pattern: {
        type: String,
        value: '.+'
      },
      /**
       * @desc  Min value length
       * @type  {Number}
       * @value 1
       */
      minLength: {
        type: Number
      },
      /**
       * @desc  Max value length
       * @type  {Number}
       */
      maxLength: {
        type: Number
      },
      /**
       * @desc  Disabled form
       * @type  {Boolean}
       */
      disabled: {
        type: Boolean
      },
      /**
       * @desc  Input type
       * @type  {String}
       * @value 'text'
       */
      type: {
        type: String,
        value: 'text'
      }
    },

    /**
     * Opens modal
     */
    open: function(payload) {
      if (payload) {
        this.set('value', payload);
      }

      this.set('opened', true);
    },

    /*
    * Notify modal status (close/Opens)
    */
    _modalStatus: function(opened) {
      this.fire(opened ? 'cells-open-edit-field' : 'cells-close-edit-field');
    },

    /**
     * Closes modal.
     * If property <em>closeOn</em> is set to <b>true</b>, modal will
     * close automatically.
     * In any case, event is fired.
     */
    close: function() {
      this.fire('cells-close-edit-field', this.value);

      if (this.closeOn) {
        this.set('opened', false);
        this.reset();
      }
    },

    /**
     * Notify event on save
     */
    save: function() {
      this.fire('cells-save-edit-field', this.value);
    },

    /**
     * Reset input
     */
    reset: function() {
      this.set('value', '');
    },

    /**
     * Observer callback triggered after any change on <em>_value</em>.
     * Will set save button disabled if:
     * - new value equals default value
     * - new value is empty
     * - new value doesn't pass pattern test (if <em>pattern</em> is set)
     * - new value has min and max length requirements (if <em>minLength</em> and/or <em>maxLength</em> are set)
     *
     * @param   newValue {String} User's input value
     * @private
     */
    _valueChanged: function(newValue, oldValue) {
      var isDisabled = oldValue === undefined && newValue.trim();
      if (!isDisabled) {
        if (this.pattern) {
          var pattern = new RegExp(this.pattern);
          isDisabled = !pattern.test(newValue);
        }
        if (this.minLength) {
          isDisabled = newValue.trim().length < this.minLength;
        }
        if (this.maxLength) {
          isDisabled = newValue.trim().length > this.maxLength;
        }
      }

      this.set('disabled', isDisabled);
    }

    /**
     * Fired on clicking over "close" button.
     * @event   'cells-close-edit-field'
     * @returns {Object}
     */

    /**
     * Fired on clicking over "save" button.
     * @event   'cells-save-edit-field'
     * @returns {Object}
     */
  });
}());
