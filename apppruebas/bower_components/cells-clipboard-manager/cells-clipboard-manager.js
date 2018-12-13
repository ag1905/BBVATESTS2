(function() {

  'use strict';

  Polymer({

    is: 'cells-clipboard-manager',

    properties: {
      /**
       * Text to copy
       * @type {String}
       */
      text: {
        type: String,
        observer: '_notifyCopy'
      }
    },

    /**
     * Notify if copy has been done
     */
    _notifyCopy: function(text) {
      if (text) {
        if (this._copyText()) {
          this._notifySuccess(text);
        } else {
          this._notifyError(text);
        }
        this.text = '';
      }
    },

    /**
     * Return true if text is copied
     */
    _copyText: function() {
      var range = document.createRange();
      var selection = window.getSelection();

      range.selectNodeContents(this.$.textContainer);
      selection.removeAllRanges();
      selection.addRange(range);

      return document.execCommand('copy');
    },

    /**
     * Fire event text-copied
     */
    _notifySuccess: function(text) {
      this.fire('text-copied', text);
    },

    /**
     * Fire event clipboard-error
     */
    _notifyError: function() {
      this.fire('clipboard-error');
    }
  });

}());
