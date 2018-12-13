(function() {
  'use strict';

  const ESC_KEY = 27;

  Polymer({

    is: 'cells-middle-modal',

    behaviors: [
      CellsBehaviors.i18nBehavior,
    ],

    properties: {
      /**
       * Allows the modal to hide itself when the overlay is clicked
       */
      closeOnClick: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
      /**
       * Allows adding an icon to close the modal. If no focusTarget is defined, this icon will receive the focus each time the modal is opened.
       */
      closeIcon: {
        type: String,
      },
      /**
       * Allows adding a header with an icon to close the modal. If no focusTarget is defined, this icon will receive the focus each time the modal is opened.
       */
      mainHeaderText: {
        type: String,
      },
      /**
       * Allows to define an aria-level for the main header text. If 0 is provided, main header text won't be treated as a heading.
       */
      headingLevel: {
        type: Number,
        value: 1,
      },
      /**
       * If true, makes modal visible
       */
      open: {
        type: Boolean,
        observer: '_open',
        reflectToAttribute: true,
        notify: true,
      },
      /**
       * Set the Id of one of the modal contents here to automatically move the focus to that element (if it's focusable) each time the modal is opened.
       */
      focusTarget: {
        type: String,
      },
      /**
       * Disable the use of the esc key to close the modal.
       */
      noCloseOnEscKey: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
    },

    hostAttributes: {
      'aria-hidden': 'true',
      'role': 'dialog',
    },

    created: function() {
      this._onKeyDown = this._onKeyDown.bind(this);
    },

    ready: function() {
      this.addEventListener('click', this._clickHandler);
      this.addEventListener('keydown', this._manageTabFocusout);
    },

    attached: function() {
      document.addEventListener('focus', function(event) {
        this._focusTrap(event);
      }.bind(this), true);

      Polymer.RenderStatus.afterNextRender(this, function() {
        // if the content is taller than the modal, reset scrollTop to 0
        if (this.$$('.md-content').offsetHeight > this.offsetHeight) {
          this.scrollTop = 0;
        }
      });
    },

    /**
     * Returns a specific class name for the modal content div if a main header text exists
     * @param {String} mainHeaderText
     * @return {String} Class for style.
     */
    _mainHeaderClass: function(mainHeaderText) {
      return this.closeIcon ? 'main-header-text with-close-icon' : 'main-header-text';
    },

    /**
     * Manage focus trap
     * @param {FocusEvent} event
     */
    _focusTrap: function(event) {
      if (this.open && Polymer.dom(event).path.indexOf(this) === -1) {
        event.stopPropagation();
        this.$.dialog.focus();
      }
    },

    /**
     * Manages opening and closing the modal
     * @param {Boolean} newValue
     */
    _open: function(newValue, previousValue) {
      if (newValue) {
        this._show();
      } else if (previousValue) {
        this._hide();
      }
    },

    /**
     * Returns current active element taking Shadow DOM in account
     * @return {HTMLElement}
     */
    _deepActiveElement: function() {
      var active = document.activeElement || document.body;
      while (active.root && Polymer.dom(active.root).activeElement) {
        active = Polymer.dom(active.root).activeElement;
      }
      return active;
    },

    /**
     * Show `cells-middle-modal`
     */
    _show: function() {
      var dialog = this.$.dialog;
      document.addEventListener('keydown', this._onKeyDown, true);
      this.set('_focusOrigin', this._deepActiveElement());
      this.setAttribute('aria-hidden', 'false');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var target = Polymer.dom(this).querySelector('#' + this.focusTarget) || Polymer.dom(this.root).querySelector('#' + this.focusTarget);
          if (this.focusTarget && !!target) {
            setTimeout(() => {
              target.focus();
            }, 20);
          } else if (this.closeIcon) {
            this.$$('#btn-close').focus();
          } else {
            dialog.focus();
          }
          /**
           * Fired when `cells-middle-modal` is opened.
           * @event cells-middle-modal-opened
           */
          this.dispatchEvent(new CustomEvent('cells-middle-modal-opened', {
            bubbles: true,
            composed: true,
          }));
        });
      });
    },

    /**
     * Close modal and unlisten keyDown event when Esc key is pressed and dialog is open
     * @param {KeyboardEvent} event
     */
    _onKeyDown: function(event) {
      if (this.open && event.keyCode === ESC_KEY && !this.noCloseOnEscKey) {
        this.open = false;
        document.removeEventListener('keydown', this._onKeyDown, true);
      }
    },

    /**
     * Hide `cells-middle-modal`
     */
    _hide: function() {
      this.setAttribute('aria-hidden', 'true');
      if (this._focusOrigin) {
        this._focusOrigin.focus();
      }
      /**
       * Fired when `cells-middle-modal` is hidden.
       * @event cells-middle-modal-hidden
       */
      this.dispatchEvent(new CustomEvent('cells-middle-modal-hidden', {
        bubbles: true,
        composed: true,
      }));
    },

    /**
     * Hide `cells-middle-modal` if attribute `closeOnClick` is set to true
     */
    _onClick: function() {
      if (this.closeOnClick) {
        this.open = false;
      }
    },
    /**
     * Fires 'cells-middle-modal-click-close' event before hiding the modal.
     */
    _onClickClose: function() {
      /**
       * Fired when `cells-middle-modal` is closed using the close button.
       * @event cells-middle-modal-close
       */
      this.dispatchEvent(new CustomEvent('cells-middle-modal-click-close', {
        bubbles: true,
        composed: true,
      }));
      this.open = false;
    },

    _clickHandler: function(e) {
      var target = Polymer.dom(e).localTarget;
      if (target && (target.dataset.action === 'hide' || target.closest('[data-action="hide"]'))) {
        this.open = false;
      }
    },

    _manageTabFocusout: function(event) {
      if (this.open && event.keyCode === 9) {
        var target = Polymer.dom(event).rootTarget;
        var focusElements = Polymer.dom(this).querySelectorAll('a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),[tabindex]:not([tabindex="-1"])');
        if (target === focusElements[focusElements.length - 1] && !event.shiftKey) {
          event.preventDefault();
          this.$.dialog.focus();
        } else if (target === this.$.dialog && event.shiftKey) {
          event.preventDefault();
          focusElements[focusElements.length - 1].focus();
        }
      }
    },
  });
}());
