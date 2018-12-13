Polymer({
  is: 'cells-stripes-spinner-veil',

  properties: {
    /**
     * Status of spinner-veil
     */
    open: {
      type: Boolean,
      observer: '_setToggleSpinner'
    },

    _threads: {
      type: Number,
      value: 0
    }
  },

  /**
   * Open or hide spinner based on open property
   */
  _setToggleSpinner: function() {
    if (this.open) {
      this.show();
    } else {
      this.hide();
    }
  },
  /**
   * Shows spinner
   */
  show: function() {
    this.classList.add('is-visible');
    this._threads++;
  },
  /**
   * Hides spinner
   */
  hide: function() {
    if (--this._threads <= 0) {
      this.classList.remove('is-visible');
    }
  }
});
