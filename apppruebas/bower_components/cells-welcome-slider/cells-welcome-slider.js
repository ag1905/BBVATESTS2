(function() {
  'use strict';

  Polymer({

    /**
    * Fired when click register button
    * @event request-register
    */

    /**
    * Fired when click access button
    * @event request-access
    */

    /**
    * Fired when click legal terms link
    * @event request-legal-terms
    */

    is: 'cells-welcome-slider',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Slides.
       * @type {Array}
       * ```
       * [{
       *   animation: '<path-to-apng-image>',
       *   title: 'Slide title',
       *   text: 'Slide text',
       *   backgroundColor: 'Slide background color',
       *   backgroundImage: 'Slide background image',
       *   delay: 'Slide duration'
       * }]
       * ```
       */
      slides: Array,
      /**
       * Whether to show registration button.
       * @type {Boolean}
       */
      showRegisterButton: {
        type: Boolean,
        value: false
      },
      /**
       * Stops the animation, but not the slideshow.
       * @type {Boolean}
       */
      frozen: {
        type: Boolean,
        value: false
      },
      /**
       * Shows an automatic slideshow.
       * @type {Boolean}
       */
      autoplay: {
        type: Boolean,
        value: false
      },
      /**
       * Slide selected
       * @type {Number}
       */
      slideActive: {
        type: Number
      },
      /**
       * Whether to show legal terms link.
       * @type {Boolean}
       */
      showLegalTerms: {
        type: Boolean,
        value: false
      },
      /**
       * Disable swipe
       * @type {Boolean}
       */
      disableSwipe: {
        type: Boolean,
        value: false
      },
      /**
       * Show arrows in sides to swipe
       * @type {Boolean}
       */
      showArrows: {
        type: Boolean,
        value: false
      },
      /**
       * Show text to register user
       * @type {Boolean}
       */
      showRegisterText: {
        type: Boolean,
        value: false
      }
    },

    start: function() {
      this.$.slider.frozen = false;
      this.$.slider.play();
    },

    stop: function() {
      this.$.slider.frozen = true;
      this.$.slider.stop();
    },

    /*
    * Notify event on click register
    */
    _onRegisterClick: function() {
      this.dispatchEvent(new CustomEvent('request-register', {bubbles: true, composed: true}));
    },
    /*
    * Notify event on click access
    */
    _onAccessClick: function() {
      this.dispatchEvent(new CustomEvent('request-access', {bubbles: true, composed: true}));
    },
    /*
    * Notify event on click legal terms
    */
    _onLegalTermsClick: function() {
      this.dispatchEvent(new CustomEvent('request-legal-terms', {bubbles: true, composed: true}));
    }
  });
}());