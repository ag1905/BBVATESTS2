(function() {
  'use strict';

  Polymer({

    is: 'cells-step-concept',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.StepBehavior
    ],

    properties: {
      /**
       * Concept
       * @type {String}
       */
      concept: {
        type: String,
        notify: true
      },
      /**
       * Used for certain countries
       * @type {String}
       */
      reference: {
        type: String,
        notify: true
      },
      /**
       * Show reference
       * @type {Boolean}
       */
      showReference: {
        type: Boolean,
        value: false,
        observer: '_showReferenceObserver'
      },
      /**
       * Concept to validate
       * @type {String}
       */
      _concept: {
        type: String
      },
      /**
       * Reference to validate
       * @type {String}
       */
      _reference: {
        type: String,
        value: ''
      },

      /**
      * Define not allowed concept chars
      */
      allowedChars: {
        type: String
      },

      /**
       * State of the step
       * @type {Boolean}
       */
      active: {
        type: Boolean
      },

      /**
       * Reference to validate
       * @type {Boolean}
       */
      disableBtn: {
        type: Boolean,
        computed: 'disableButton(active, _reference)'
      },

      /**
      * Limit concept characters
      */
      max: {
        type: String,
        value: '255'
      },
      /**
* The icon code of the icon-set. View documentation for the icon component
*/
      iconCode: {
        type: String,
        value: 'coronita:close'
      },
      /**
       * The icon size of the icon. View documentation for the icon component
       */
      iconSize: {
        type: String,
        value: 'icon-size-18'
      }
    },

    listeners: {
      'change-pressed': '_onChangePressed'
    },


    /**
     * Is valid input
     */
    isValid: function() {
      return !this.$.conceptInput.invalid;
    },

    /**
     * Disable or enable continue button
     */
    disableButton: function(active, reference) {
      return !!(!active || (active && this.showReference && reference === ''));
    },

    /**
     * Reset step
     */
    reset: function() {
      this.concept = null;
      this._concept = null;
      this.reference = null;
      this._isValid = false;
      this._setReference();
    },

    /**
     * Show refrence if has
     */
    _showReferenceObserver: function(value) {
      if (value) {
        this._setReference();
      }
    },
    /**
     * Set reference
     */
    _setReference: function() {
      this.set('_reference', new Date().toLocaleDateString(window.I18nMsg.lang || 'es'));
    },
    /**
     * On change pressed step
     */
    _onChangePressed: function(e) {
      e.stopPropagation();
      this.concept = null;
      this._concept = null;
      this.reference = null;
      this.collapsed = false;

      this.dispatchEvent(new CustomEvent('concept-has-change', {
        bubbles: true,
        composed: true,
        detail: {
          concept: this.concept,
          reference: this.reference
        }
      }));
      this.dispatchEvent(new CustomEvent('change-step-state', {
        detail: this,
        bubbles: true,
        composed: true
      }));
    },
    /**
     * On click continue button
     */
    _onContinue: function(e) {
      if (e) {
        e.stopPropagation();
      }

      this.concept = this._concept || '';
      this._concept = this._concept ? this._concept : this.t('cells-step-default-concept');
      this.reference = this._reference || '';
      this.collapsed = true;

      if (this.previousSibling && this.collapsed) {
        this.previousSibling.decorated = false;
      }

      this.dispatchEvent(new CustomEvent('continue-pressed', {
        bubbles: true,
        composed: true,
        detail: {
          concept: this.concept,
          reference: this.reference
        }
      }));
    }

    /**
     * @event continue-pressed
     * @desc fired when the continue button is pressed. Contains an object with the concept and reference
     */

    /**
     * @event change-pressed
     * @desc fired when the change button is pressed. Contains an object with the concept and reference
     */
  });
}());