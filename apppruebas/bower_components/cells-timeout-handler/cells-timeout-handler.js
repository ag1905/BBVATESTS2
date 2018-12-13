(function() {

  'use strict';

  Polymer({

    is: 'cells-timeout-handler',

    properties: {

      foregroundTimeout: {
        type: Number,
        value: 120000
      },

      backgroundTimeout: {
        type: Number,
        value: 300000
      },

      _lastHideTimestamp: {
        type: Number
      }
    },

    detached: function() {
      this.stop();
    },

    start: function() {
      this.listen(document, 'visibilitychange', '_onVisibilityChanged');
      this.listen(document, 'click', '_setActivityDebounce');
      this.listen(document, 'scroll', '_setActivityDebounce');
      this.listen(document, 'template-content-scroll', '_setActivityDebounce');
      this._setActivityDebounce();
    },

    stop: function() {
      this.unlisten(document, 'visibilitychange', '_onVisibilityChanged');
      this.unlisten(document, 'click', '_setActivityDebounce');
      this.unlisten(document, 'scroll', '_setActivityDebounce');
      this.unlisten(document, 'template-content-scroll', '_setActivityDebounce');
      this._cancelActivityDebounce();
    },

    _setActivityDebounce: function() {
      this.debounce('_onForegroundTimeoutExpired', this._onForegroundTimeoutExpired, this.foregroundTimeout);
    },

    _cancelActivityDebounce: function() {
      this.cancelDebouncer('_onForegroundTimeoutExpired');
    },

    _onForegroundTimeoutExpired: function() {
      this._fireTimeoutEvent('foreground');
    },

    _isHidden: function() {
      return document.hidden;
    },

    _onVisibilityChanged: function() {
      if (this._isHidden()) {
        this._onHide();
      } else {
        this._onShow();
      }
    },

    _onHide: function() {
      this._lastHideTimestamp = Date.now();
      this._cancelActivityDebounce();
    },

    _onShow: function() {
      var msecsHidden = Date.now() - this._lastHideTimestamp;
      if (msecsHidden > this.backgroundTimeout) {
        this._fireTimeoutEvent('background');
      } else {
        this._setActivityDebounce();
      }
    },

    _fireTimeoutEvent: function(detail) {
      this.dispatchEvent(new CustomEvent('timeout-expired', {
        detail: detail,
        bubbles: true,
        composed: true
      }));
    }
  });
}());