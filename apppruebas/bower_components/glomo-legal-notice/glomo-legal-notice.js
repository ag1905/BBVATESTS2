(function() {

  'use strict';

  Polymer({

    is: 'glomo-legal-notice',

    behaviors: [
      window.CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
      * Modal legal notice page content
      * @type {String}
      */
      legalNoticeContent: {
        type: String,
        observer: 'loadedNoticeContent'
      },
      /**
      * Loaded iframe
      * @type {Boolean}
      */
      loaded: {
        type: Boolean,
        value: false
      }
    },

    /**
    * Notify loaded notice content
    */
    loadedNoticeContent: function() {
      this.async(function() {
        this.set('loaded', true);
      }.bind(this), 1000);
    },
    /**
    * Notify user accept legal notice
    */
    acceptLegalNotice: function(ev) {
      ev.preventDefault();
      this.fire('legal-notice-accepted');
    },
    /**
    * Notify user cancel legal notice
    */
    cancelLegalNotice: function() {
      this.fire('legal-notice-cancelled');
    }
  });
}());