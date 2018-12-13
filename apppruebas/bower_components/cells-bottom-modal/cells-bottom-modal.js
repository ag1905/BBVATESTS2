(function() {

  'use strict';

  function classNames(obj) {
    var classes = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key]) {
        classes.push(key);
      }
    }

    return classes.join(' ');
  }

  Polymer({

    is: 'cells-bottom-modal',

    behaviors: [
      /* global CellsBehaviors */
      CellsBehaviors.i18nBehavior,
      Polymer.IronOverlayBehavior,
      Polymer.IronScrollTargetBehavior
    ],

    hostAttributes: {
      'vertical-align': 'bottom',
      'auto-fit-on-attach': 'true'
    },

    properties: {
      /**
       * True if the user is currently dragging down or up.
       */
      dragging: {
        type: Boolean,
        value: false,
        readOnly: true,
        notify: true
      },

      /**
       * Number of pixels scrolled from top.
       * @private
       */
      yScrollTop: {
        type: Number,
        readOnly: true,
        value: 0
      },

      /**
       * True if the overlay is currently displayed.
       */
      opened: {
        type: Boolean,
        value: false,
        observer: '_openedObserver'
      },

      /**
       * Sets whether the modal should expand to fit its content.
       */
      expand: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Sets whether the modal should fit the viewport height.
       */
      fullHeight: {
        type: Boolean,
        value: false
      },

      /**
       * Shows the close icon only when the modal occupies the full height of the view
       */
      iconOnlyFullHeight: {
        type: Boolean,
        value: false
      },

      _canCloseByDraggingDown: {
        type: Boolean,
        value: false
      },

      /**
       * Close icon ID.
       */
      closeIconId: {
        type: String,
        value: ''
      },

      /**
       * Close icon size.
       */
      closeIconSize: {
        type: Number,
        value: 18
      },

      _hideCloseIcon: {
        type: Boolean,
        value: false
      },

      _isInitiallyFullHeightModal: {
        type: Boolean,
        computed: '_isInitiallyFullHeightModalComputed(_offsetTop, expand, fullHeight)'
      }
    },

    listeners: {
      track: '_onTrack',
      click: '_onClick',
      'iron-overlay-canceled': '_onCancel'
    },

    observers: [
      '_backdropObserver(withBackdrop)',
      '_fullHeightObserver(fullHeight, opened)',
      '_iconOnlyFullHeightObserver(_offsetTop, iconOnlyFullHeight)'
    ],

    get _backdropTarget() {
      if (Polymer.Element) {
        return Polymer.dom(this).parentNode;
      }

      var ownerRoot = Polymer.dom(this).getOwnerRoot();
      var parentNode = Polymer.dom(this).parentNode;
      return (parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
        ? Polymer.dom(ownerRoot.host.root)
        : parentNode;
    },

    created: function() {
      this._onBackButton = this._onBackButton.bind(this);
    },

    attached: function() {
      Polymer.RenderStatus.afterNextRender(this, function() {
        this.set('scrollTarget', this.$.body);
        this._scrollHandler();
      });

      this._slotSupported = Polymer.Element ? true : false;
      this._hideCloseIcon = this.iconOnlyFullHeight;
    },

    _backdropObserver: function(withBackdrop) {
      if (withBackdrop) {
        this._backdrop = this._backdrop || this.create('div');
        this._backdropTarget.appendChild(this._backdrop);
      } else if (this._backdrop) {
        if (this._backdrop.parentNode) {
          this._backdrop.parentNode.removeChild(this._backdrop);
        }
      }
    },

    _fullHeightObserver: function(fullHeight, opened) {
      if (fullHeight && opened) {
        this._hideCloseIcon = false;
        this.classList.add('full-height');
      }
    },

    /**
     * Closes the modal.
     * @ignore overrides behavior close() method to make the content transition
     */
    close: function() {
      this._close(false);
    },

    _openedObserver: function(opened, previousState) {
      if (opened) {
        this._addBackdrop();
        this._open();
      } else if (previousState) {
        // opened is false and _openedObserver has been called previously
        // previousState is undefined the first time
        this._reset();
        this._removeBackdrop();
      }
    },

    _open: function() {
      this.fire('open');
      this.fire('overlay-opening');

      /**
       * Give enough time to remove inline "display: none" from <cells-bottom-modal>
       * to trigger the opening animation (display property is not animatable).
       */
      requestAnimationFrame(function() {
        this._offsetTop = this.offsetTop;
        this.$.content.setAttribute('visible', true);
      }.bind(this));

      document.body.setAttribute('modalopen', '');
      document.addEventListener('backbutton', this._onBackButton, true);
    },

    /**
     * Closes first the content and then set opened to false (closes the overlay).
     * @param  {Boolean} canceled Whether the user has closed the modal by choosing
     * an option (not canceled) or by clicking the overlay, the close icon or
     * pressing the esk key (canceled).
     */
    _close: function(canceled) {
      this.$.content.removeAttribute('visible');
      this._setCanceled(canceled);
      this.async(function() {
        this.opened = false;
      }, 160);
    },

    _reset: function() {
      document.body.removeAttribute('modalopen');
      document.removeEventListener('backbutton', this._onBackButton, true);

      this.classList.remove('full-height');
      this.$.content.removeAttribute('visible');

      this._hideCloseIcon = this.iconOnlyFullHeight;

      // perf: reset scroll only if the content has been scrolled
      if (this.yScrollTop > 0) {
        this.scroll(0, 0);
      }

      this.fire('overlay-closed');
      this.fire('close', {
        canceled: this.closingReason.canceled
      });
    },

    _onTrack: function(e) {
      var state = {
        'start': this._onTrackStart.bind(this),
        'track': this._trackY.bind(this),
        'end': this._onTrackEnd.bind(this)
      };

      state[e.detail.state](e);
    },

    _onTrackStart: function(e) {
      if (Polymer.dom(e).path) {
        this._setCanCloseByDraggingDown(e);
      }

      this._setDragging(true);
    },

    _trackY: function(e) {
      if (e.detail.dy > 0) {
        this._dragDownHandler(e);
      } else {
        this._dragUpHandler(e);
      }
    },

    _onTrackEnd: function(e) {
      this._setDragging(false);
      this.set('_canCloseByDraggingDown', false);
    },

    _dragUpHandler: function(e) {
      if (this.expand || this.fullHeight) {
        return;
      }

      if (this.iconOnlyFullHeight) {
        this._hideCloseIcon = false;
      }

      this.classList.add('full-height');
    },

    _dragDownHandler: function(e) {
      if (this._canCloseByDraggingDown) {
        this.cancel();
        this.set('_canCloseByDraggingDown', false);
      }
    },

    _scrollHandler: function() {
      this._setYScrollTop(this._scrollTop);
    },

    _onBackButton: function(ev) {
      ev.stopPropagation();
      this._close(true);
    },

    _onClick: function(e) {
      var target = Polymer.dom(e).localTarget;
      if (target && target.hasAttribute('data-action')) {
        switch (target.dataset.action) {
          case 'close':
            this.close();
            break;
          case 'cancel':
            this.cancel();
            break;
        }
      }
    },

    _computeContentClass: function(dragging, yScrollTop) {
      return classNames({
        'has-shadow': yScrollTop > 0,
        'is-dragging': dragging && !this.expand
      });
    },

    _setCanCloseByDraggingDown: function(e) {
      var path = Polymer.dom(e).path;

      // if the modal is initially expanded to the full viewport height
      // closing by swipe down is not allowed
      if (this._isInitiallyFullHeightModal) {
        this.set('_canCloseByDraggingDown', false);
      } else if (path.indexOf(this.$.header) !== -1) {
        this.set('_canCloseByDraggingDown', true);
      }
    },

    _onCancel: function(e) {
      e.preventDefault();
      this._close(true);
    },

    _addBackdrop: function() {
      if (this._backdrop) {
        Polymer.dom(this._backdrop).appendChild(this.backdropElement);
      }
    },

    _removeBackdrop: function() {
      if (this._backdrop && this._backdrop.children.length > 0) {
        this.async(function() {
          Polymer.dom(this._backdrop).removeChild(this.backdropElement);
        }, 260);
      }
    },

    _isInitiallyFullHeightModalComputed: function(offsetTop, expand, fullHeight) {
      return (offsetTop === 0 && expand) || fullHeight;
    },

    _iconOnlyFullHeightObserver: function(offsetTop, iconOnlyFullHeight) {
      this._hideCloseIcon = offsetTop !== 0 && iconOnlyFullHeight;
    }

    /**
     * Fired when the modal is opened.
     * @event open
     */

    /**
     * Fired when the modal is closed.
     * @event close
     * @param {{canceled: Boolean}} detail True if the user closes the modal by clicking the overlay or the close button.
     */

  });

}());
