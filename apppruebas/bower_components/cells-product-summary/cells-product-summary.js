(function() {

  'use strict';

  Polymer({

    /**
     * More info button is pressed
     * @event cells-product-summary-more-info
     */
    is: 'cells-product-summary',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Source of the heading image.
       */
      imgSrc: {
        type: String
      },

      /**
       * Source of the heading image shown until the heading image loads.
       */
      imgPlaceholder: {
        type: String,
        value: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88h8AAu0B9XNPCQQAAAAASUVORK5CYII='
      },

      /**
       * Heading image width.
       */
      imgWidth: {
        type: Number,
        value: 45
      },

      /**
       * Heading image height.
       */
      imgHeight: {
        type: Number,
        value: 30
      },

      /**
       * type of error message
       */
      typeError: {
        type: String,
        value: 'error'
      },

      /**
       * icon for error message
       */
      iconError: {
        type: String
      },

      /**
       * Error message
       */
      errorMessage: {
        type: String,
        value: 'error message'
      },

      /**
       * Product name.
       * If not set, the header won't be shown.
       */
      heading: {
        type: String,
        value: null
      },

      /**
       * Aria Level of the card heading from 1 to 6.
       * If 0 is provided, the text won't be treated as a heading.
       */
      headingLevel: {
        type: Number,
        value: 2
      },

      /**
       * Masked product number shown next to product name.
       */
      maskedHeading: String,

      /**
       * Mask character or characters used.
       */
      maskCharsHeading: {
        type: String,
        value: '&bull;'
      },

      /**
       * Number of characters to be visible.
       */
      visibleCharsHeading: {
        type: Number,
        value: 4
      },

      /**
       * Icon code to display after the heading text.
       */
      iconCode: {
        type: String
      },

      /**
       * Icon size for the heading icon.
       */
      iconSize: {
        type: String
      },

      /**
       * Total value to be shown in progressBar.
       * If not set, the progress bar won't be shown.
       */
      progressValue: {
        type: Number
      },

      /**
       * Maximum value to be shown in progressBar.
       */
      progressMax: {
        type: Number,
        value: 100
      },

      _rightProgress: {
        type: Number,
        computed: '_computeRightProgress(progressValue, progressMax)'
      },

      /**
       * Main list of keys and values shown in stacked reversed layout.<br>
       * Check out `<cells-key-values>` docs for more info.
       */
      mainItems: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /**
       * Second list of keys and values.
       * @see `<cells-key-values>`.
       */
      optionalItems: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /**
      * Optional key - Key values align mode
      */
      optionalItemsAlign: {
        type: String,
        value: 'inline'
      },

      /**
       * Third list of key and values.
       * @see `<cells-key-values>`.
       */
      additionalItems: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /**
      * Additional key - Key values align mode
      */
      additionalItemsAlign: {
        type: String,
        value: 'inline'
      },

      /**
       * Text for the "More info" button.
       */
      labelMoreInfo: {
        type: String,
        value: 'cells-product-summary-more-info'
      },

      /**
       * Set to true to hide the "More info" button.
       */
      hideMoreInfoButton: {
        type: Boolean,
        value: false
      },

      /**
       * Indicates if component has no data
       */
      loading: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: '_loadingChanged'
      },

      /**
       * Indicates if component has error data
       */
      error: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    },

    /**
     * Initializes component back to default state
     */
    reset: function(data) {
      if (data.value === false) {
        this.loading = true;
        this.error = false;
        this.imgSrc = '';
        this.heading = '';
        this.maskedHeading = '';
        this.iconCode = '';
        this.mainItems = [];
        this.optionalItems = [];
        this.additionalItems = [];
      }
    },

    /**
     * Component's data is loaded
     */
    onData: function() {
      this.error = false;
      this.loading = false;
    },

    /**
     * Component's data is not completed
     */
    onError: function(data) {
      this.error = true;
      this.loading = false;
    },

    /**
     * Fires a 'more-info' event when more info button is clicked.
     */
    _moreInfoClicked: function(e) {
      this.fire('cells-product-summary-more-info');
    },

    _computeRightProgress: function(progressValue, progressMax) {
      if (progressValue) {
        return progressMax - progressValue;
      }
    },

    _loadingChanged: function(loading) {
      if (loading) {
        this.$.spinner.paused = false;
        this.listen(this, 'transitionend', '_onTransitionEnd');
      }
    },

    _onTransitionEnd: function(e) {
      this.unlisten(this, 'transitionend', '_onTransitionEnd');

      window.requestAnimationFrame(function() {
        if (!this.loading) {
          this.$.spinner.paused = true;
        }
      }.bind(this));
    },

    /**
     * Fired after cicking more-info icon after key value.
     * @event  cells-product-summary-optional-items-key-icon
     * @param {{id: String}} icon id clicked
     */
    _optionalItemsKeyIconTapped: function(e) {
      this.dispatchEvent(new CustomEvent('cells-product-summary-optional-items-key-icon', {
        bubbles: true,
        composed: true,
        detail: {
          id: e.currentTarget.id
        }
      }));
    }

  });

}());
