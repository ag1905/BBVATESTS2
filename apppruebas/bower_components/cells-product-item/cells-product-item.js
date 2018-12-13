Polymer({

  is: 'cells-product-item',

  properties: {

    /**
    * Name of the product.
    */
    name: {
      type: String,
      value: false
    },

    /**
    * Description that appears under the name.
    * Include {masked: true} in the object if you want to mask it.
    */
    description: {
      type: Object,
      value: function() {
        return {
          masked: false
        };
      }
    },

    /**
    * Image source URL to that will be displayed.
    **/
    imgSrc: {
      type: String
    },

    /**
    * Width of the image.
    */
    imgWidth: {
      type: Number,
      value: 60
    },

    /*
    * Alt of the image.
    */
    imgAlt: {
      type: String,
      value: ''
    },

    /**
    * Height of the image.
    */
    imgHeight: {
      type: Number,
      value: 38
    },

    /**
    * Object for primary amount. Expected properties are 'label' (string), 'amount' (string) and 'currency' (string)
    */
    primaryAmount: {
      type: Object
    },

    /**
    * Object for secondary amount. Expected properties are 'label' (string), 'amount' (string) and 'currency' (string)
    */
    secondaryAmount: {
      type: Object
    },

    /**
    * Amount's local currency.
    */
    localCurrency: String,

    /**
    * Visible chars on masked strings.
    */
    visibleChars: {
      type: Number,
      value: 4
    },

    /**
    * If true, an overlay icon (defined by imgOverlayIcon property)
    * will be shown above the image (defined by imgSrc property)
    */
    showImgOverlay: {
      type: Boolean,
      value: false
    },

    /**
    * Icon code of the overlay image
    */
    imgOverlayIcon: {
      type: String
    },

    /**
    * Icon size of the overlay image
    */
    imgOverlayIconSize: {
      type: Number,
      value: 16
    },

    /**
    * Allows to define an aria-level for the product name. If 0 is provided, product name won't be treated as a heading.
    */
    headingLevel: {
      type: Number,
      value: 2
    },

    /**
    * Scale of the amounts to display
    */
    scale: {
      type: Number
    },

    /**
    * Set of abbreviations that can be applied depending on scale property value.<br>
    * Example:
    * ```js
    * {
    *   2: 'hundreds',
    *   3: 'thousands',
    *   4: 'tenthousands',
    *   6: 'Mill…',
    *   9: 'Bill…'
    * }
    * ```
    */
    abbreviations: {
      type: Object
    },

    /**
     * Set to true to hide the decimal part of the amounts
     */
    decimalsHidden: {
      type: Boolean,
      value: false
    },

    /**
     * Value that indicates the status of the card.
    */
    status: {
      type: String,
      value: ''
    },
    /**
    * Url of the default image of the card.
    * Used if there is an error on loading the 'imageSrc'.
    */
    defaultImage: {
      type: String,
      value: ''
    }
  }

});
