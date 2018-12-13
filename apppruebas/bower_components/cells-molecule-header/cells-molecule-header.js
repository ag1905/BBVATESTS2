/* global CellsBehaviors */
Polymer({
  is: 'cells-molecule-header',

  behaviors: [
    CellsBehaviors.i18nBehavior
  ],

  properties: {

    /**
     * userInfo CDM.
     */
    userInfo: {
      type: Object
    },

    /**
     * Header title
     */
    title: {
      type: String
    },

    /**
     * ID for the menu icon
     */
    menuIcon: {
      type: String,
      value: 'coronita:menu'
    },

    /**
     * Indicates if the menu button has to be shown
     */
    hideMenuButton: {
      boolean: String,
      value: false
    },

    /**
     * ID for the back icon
     */
    backIcon: {
      type: String,
      value: 'coronita:back'
    },

    /**
     * ID for the search icon
     */
    searchIcon: {
      type: String,
      value: 'coronita:search'
    },

    /**
     * If true, show a search button
     */
    search: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, replace menu button for back button
     */
    back: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, replace menu button for back button
     */
    backText: {
      type: String,
      observer: '_backTextObserver'
    },

    /**
     * Customized action for back button
     */
    backAction: String,

    /**
     * If true, show a greeting in the title zone
     */
    greetingAsTitle: {
      type: Boolean,
      value: false
    },

    /**
     * Internationalization key for greeting
     */
    greetingKey: {
      type: String
    },

    /**
     * If true, show BBVA's logo in the title zone
     */
    bankNameAsTitle: {
      type: Boolean,
      value: false
    },

    /**
     * If true, show masked number with custom title
     */
    haveMaskedNumber: {
      type: Boolean,
      value: false
    },

    /**
     * Show BBVA logo image by default
     */
    logoSrc: {
      type: String,
      value: 'http://bbva-files.s3.amazonaws.com/cells/assets/glomo/images/logo-bbva.svg'
    },

    /**
     * Assing width size to logoSrc image, by default, 50
     */
    logoWidth: {
      type: Number,
      value: 50
    },

    /**
     * Left icon size
     */
    leftIconSize: {
      type: Number,
      value: 18
    },

    /**
     * Right icon size
     */
    rightIconSize: {
      type: Number,
      value: 18
    },

    /**
     * User name logged to show
     */
    _userName: {
      type: String,
      computed: '_computeUserName(greetingAsTitle, userInfo.firstName)'
    },

    /**
     * Data product object
     */
    product: {
      type: Object,
      observer: '_titleObserver'
    },

    /**
     * Data product group
     */
    group: {
      type: String
    },

    /**
     * Formatted product number without masked
     */
    formattedNumber: {
      type: String
    },

    /**
     * Formatted product number mask option (status: true/false, chars: number of visible characters, separator: separator character)
     */
    mask: {
      type: Object,
      value: function() {
        return {
          'separator': '•',
          'chars': 5,
          'status': true
        };
      }
    },

    /**
     * Switch position currency received
     */
    currencySwitchIn: {
      type: Object
    },

    /**
     * Switch position currency sent
     */
    currencySwitchOut: {
      type: Object,
      notify: true
    },

    /**
     * If true, show switch element, by default, false
     */
    showCurrencySwitch: {
      type: Boolean,
      value: false
    },

    /**
     * If true, this component could show switch element
     */
    canHaveSwitch: {
      type: Boolean
    },

    /**
     * If true, switch element must be positioned to the right
     */
    activeSwitch: {
      type: Boolean
    },

    /**
     * Navigation to continued page
     */
    continue: {
      type: String
    },

    /**
     * Control if user is logged
     */
    isLogged: {
      type: Boolean
    },

    /**
     * Navigation to operative page
     */
    operative: {
      type: String
    },

    /**
     * Secondary class to include new colors
     */
    secondaryClass: {
      type: String,
      value: 'header--light-grey'
    },

    /**
     * Product Id selected
     */
    productId: String,

    /**
     * Remove spaces
     */
    removeSpaces: {
      type: Boolean,
      value: false
    },
    /**
     * show Product Type
     */
    showProductType: {
      type: Boolean,
      value: false
    },

  },

  observers: [
    '_setSwitchVisible(product, canHaveSwitch)'
  ],

  listeners: {
    'cells-toggle-button-active-changed': 'onSwitchChanged'
  },

  reset: function() {
    this.set('showCurrencySwitch', false);
    this.set('activeSwitch', false);
    this.set('haveMaskedNumber', false);
    this.set('continue', '');
  },

  setColors: function(colors) {
    this.updateStyles({
      '--cells-molecule-header-bg-color': colors && colors.backgroundColor || 'transparent',
      '--cells-molecule-header-color': colors && colors.color || 'initial'
    });
  },

  setSecondaryClass: function() {
    this.classList.add(this.secondaryClass);
  },

  removeSecondaryClass: function() {
    this.classList.remove(this.secondaryClass);
  },

  _setHeader: function(config) {
    for (var property in config) {
      if (config.hasOwnProperty(property)) {
        this.set(property, config[property]);
      }
    }
  },

  _titleObserver: function(product) {
    if (!product) {
      return;
    }
    var productNumber;
    if (this.showProductType) {
      this.set('title', (product.accountType || {}).name);
      this.set('haveMaskedNumber', false);
    } else {
      if (this.group === 'fund' && product && product.numberFormats && product.numberFormats.length > 0) {
        productNumber = product.numberFormats[0].number;
      } else {
        productNumber = product.number;
      }

      if (productNumber) {
        this.set('haveMaskedNumber', true);
        var formattedNumber = this.removeSpaces ? productNumber.replace(/ /g, '') : productNumber;
        this.set('formattedNumber', formattedNumber);
      }
    }
  },

  _computeUserName: function(greetingAsTitle, firstName) {
    return greetingAsTitle && firstName;
  },

  /**
   * Fires an event that other components may use
   * to open the sidebar.
   */
  _controlMenu: function() {
    this.fire('toggle-menu');
  },

  _onSearch: function(ev) {
    /**
     * Event fired when the search button is clicked.
     * @event 'cells-molecule-header-search-button-pressed'
     */
    this.fire('cells-molecule-header-search-button-pressed');
    ev.stopPropagation();
  },

  /**
   */
  _backTextObserver: function(text) {
    var button = this.$.btnBackIcon;
    if (!text) {
      text = 'cells-molecule-header-back-label';
    }
    this.getMsg(text).then(function(translation) {
      button.setAttribute('aria-label', translation || 'Close');
    }.bind(this));
  },

  _goBack: function(ev) {
    ev.stopPropagation();
    if (this.backAction) {
      this.fire(this.backAction, this._checkedParams());
    } else {
      this.fire('request-back-navigation');
    }
  },

  _setSwitchVisible: function(product, canHaveSwitch) {
    this.set('showCurrencySwitch', canHaveSwitch && product && product.cardType && product.cardType.id === 'CREDIT_CARD' && product.currencies && product.currencies.length > 1);
  },

  /**
   * put max-width header title if currencySwitch showing
   * @return boolean
   */
  _ifShowCurrencySwitch: function(showCurrencySwitch) {
    this.customStyle['--cells-molecule-header-header__title-max-with'] = showCurrencySwitch ? '110px' : 'inherit';
    this.updateStyles();
    return !!showCurrencySwitch;
  },

  /**
   * Notify event to navigation to continue page with params
   * @return boolean
   */
  navigate: function(params) {
    if (this.continue) {
      var event = ['navigation-to', this.continue];

      if (this.productId && this.productId !== 'undefined') {
        event.push('product-id');
      }

      if (this.operative) {
        event.push(this.operative);
      }

      if (this.isLogged) {
        event.push('logged');
      }
      this.fire(event.join('-'), this._checkedParams(params));
    }
  },
  /**
   * Notify event to navigation to new page with params
   * @return boolean
   */
  navigateToPage: function(payload) {
    if (payload.page) {
      var event = 'navigation-to-' + payload.page + (this.productId && this.productId !== 'undefined' ? '-product-id' : '');
      this.fire(event, this._checkedParams(payload.params));
    }
  },

  _checkedParams: function(params) {
    params = params || {};
    if (this.productId) {
      params.productId = this.productId;
    }

    if (this.continue) {
      params.continue = this.continue;
    }

    if (this.operative) {
      params.operative = this.operative;
    }

    return params;
  },

  /**
   * event fired when switch is clicked
   */
  onSwitchChanged: function(e) {
    var switched = e.detail;
    e.stopPropagation();
    this.set('activeSwitch', switched);
    this.set('currencySwitchOut', this.product.currencies[Number(switched)].currency);
    this.fire('selected-currency-switch', this.currencySwitchOut);
  },
  /**
   * Translate menu title when keyboard is u
   */
  translateMenuTitle: function() {
    var title = this.$.title;
    if (title.classList.contains('translate')) {
      title.classList.remove('translate');
    } else {
      title.classList.add('translate');
    }
  }

  /**
   * Event fired when the menu button is clicked.
   * @event 'toggle-menu'
   */
});