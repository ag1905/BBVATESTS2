(function() {

  'use strict';

  Polymer({

    is: 'glomo-help',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {

      /**
      * Header, footer and button message content
      */
      helpInfo: {
        type: Object
      },
      /**
       * Path to load image
       */
      img: {
        type: String
      },
      /**
      * List of help options
      */
      helpOptions: {
        type: Array
      },
      /**
      * Help Aditional Content
      */
      helpAdditionalContent: {
        type: Object
      },
      /**
       * Show button of platform Link
       */
      showPlatformLink: {
        type: Boolean,
        value: true
      },
      /**
       * Show button to call BBVA
       */
      showCallButton: {
        type: Boolean,
        value: false
      },
      /**
       * Show Footer
       */
      showFooter: {
        type: Boolean,
        value: true
      }
    },
    /**
     * Return class if footer is hidden
     * @return String
     */
    _withoutFooterClass: function(footer) {
      return footer ? '' : 'without-footer';
    }
  });
}());
