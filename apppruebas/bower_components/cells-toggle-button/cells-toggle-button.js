(function() {

  'use strict';

  Polymer({

    is: 'cells-toggle-button',

    properties: {
      active: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        observer: '_activeObserver'
      },

      contentLeft: {
        type: String
      },

      iconLeft: {
        type: Boolean,
        value: false
      },

      contentRight: {
        type: String
      },

      iconRight: {
        type: Boolean,
        value: false
      }
    },

    listeners: {
      track: '_ontrack',
      click: '_onClick'
    },

    attached: function() {
      Polymer.RenderStatus.afterNextRender(this, function() {
        this.setScrollDirection('y');
      });
    },

    _onClick: function() {
      this.set('active', !this.active);
    },

    _ontrack: function(event) {
      var track = event.detail;

      if (track.state === 'start') {
        this._trackStart(track);
      } else if (track.state === 'track') {
        this._trackMove(track);
      } else if (track.state === 'end') {
        this._trackEnd(track);
      }
    },

    _trackStart: function(track) {
      this._width = this.$.toggleButton.offsetWidth;
      this._trackChecked = this.checked;
      this.$.toggleButton.classList.add('dragging');
    },

    _trackMove: function(track) {
      var dx = track.dx;
      this._x = Math.min(this._width,
        Math.max(0, this._trackChecked ? this._width + dx : dx));
      this.translate3d(this._x + 'px', 0, 0, this.$.toggleButton);
      this.set('active', this._x > (this._width / 2));
    },

    _trackEnd: function(track) {
      this.$.toggleButton.classList.remove('dragging');
      this.transform('', this.$.toggleButton);
    },

    _activeObserver: function(value) {
      this.$.toggleButton.classList.toggle('active', value);
      this.dispatchEvent(new CustomEvent('cells-toggle-button-active-changed', {
        bubbles: true,
        composed: true,
        detail: value
      }));
    }
  });

  /**
   * Fired when the checked state changes.
   *
   * @event cells-toggle-button-active-changed
   */

}());
