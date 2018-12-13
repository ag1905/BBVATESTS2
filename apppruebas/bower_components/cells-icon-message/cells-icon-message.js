(function() {

  'use strict';

  Polymer({

    is: 'cells-icon-message',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {

      /**
       * Message type. Used for styling purposes and to set the icon label
       * if one of the valid types if used.
       */
      type: {
        type: String,
        value: null,
        reflectToAttribute: true
      },

      /**
       * List of allowed types.
       */
      validTypes: {
        type: Array,
        value: function() {
          return ['info', 'warning', 'error', 'success'];
        }
      },

      /**
       * Size of the icon (width and height).
       * Odd values are allowed.
       */
      iconSize: {
        type: Number,
        value: 24
      },

      /**
       * Icon ID.
       */
      icon: {
        type: String,
        value: ''
      },

      /**
       * URL of the image to be used as icon.
       */
      src: {
        type: String,
        value: ''
      },

      /**
       * Alternative text for the icon (`aria-label`).
       * The alternative text is automatically set depending on the `type` attribute if your are
       * using one of the default `validTypes` and it has a translation key (example: cells-icon-message-warning).
       * `success` type has no translation key.
       */
      iconLabel: {
        type: String,
        value: null
      },

      /**
       * Text message. Inline HTML elements are allowed (`<strong>`, `<b>`, `<em>`, `<i>`, etc.)
       */
      message: {
        type: String,
        value: null
      },

      _iconLabel: {
        type: String,
        computed: '_computeIconLabel(iconLabel, type, validTypes)'
      },

      _hasIconOrImage: {
        type: Boolean,
        computed: '_computeHasIconOrImage(icon, src)'
      }
    },

    /**
     * Returns iconLabel if the attribute is set or
     * the corresponding translation key for each valid type if the type is not 'success'
     * or false to remove the aria-label attribute from the icon.
     */
    _computeIconLabel: function(iconLabel, type, validTypes) {
      if (iconLabel) {
        return iconLabel;
      }

      if (validTypes.indexOf(type) >= 0 && type !== 'success') {
        return this.is + '-' + type;
      }

      return false;
    },

    _computeIconLabelHidden: function(iconLabel) {
      return iconLabel ? false : 'true';
    },

    _computeHasIconOrImage: function(icon, src) {
      return icon || src;
    }

  });

}());
