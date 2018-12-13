(function() {
  'use strict';

  Polymer({
    /* global moment */
    is: 'cells-product-summary-card',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {

      /**
       * Card whose information will be displayed
       */
      card: {
        type: Object,
        observer: '_cardChanged'
      },

      /**
       * Show additional items list if true
       */
      hasAdditionalItems: {
        type: Boolean,
        value: false
      },

      /**
       * Local currency code of the card
       */
      localCurrency: {
        type: String
      },

      selectedCurrency: {
        type: String,
        value: null
      },

      /**
       * Main (field: currencies: {isMajor === true}) currency of 'card'
       */
      _majorCurrency: {
        type: String,
        computed: '_computeMajorCurrency(card, selectedCurrency)'
      },

      /**
       * Image to display aside the cards heading
       */
      _imgSrc: {
        type: Object,
        computed: '_computeImgSrc(card.images)'
      },

      /**
       * Current progress in the progress bar
       */
      _progressValue: {
        type: Number
      },

      /**
       * Maximum progress in the progress bar
       */
      _progressMax: {
        type: Number
      },

      /**
       * Main key - values to display
       */
      _mainItems: {
        type: Array,
        computed: '_computeMainItems(card, _majorCurrency)'
      },

      /**
       * Optional key - values to display
       */
      _optionalItems: {
        type: Array,
        observer: '_optionalItemsChanged',
        computed: '_computeOptionalItems(card, _majorCurrency)'
      },
      /**
      * Optional key - values to display
      */
      optionalItemsAlign: {
        type: String,
        value: 'inline'
      },
      /**
       * Additional / Secondary key - values to display
       */
      _additionalItems: {
        type: Array,
        computed: '_computeAdditionalItems(card, _majorCurrency, hasAdditionalItems)'
      },

      /**
      * Additional key - values to display
      */
      additionalItemsAlign: {
        type: String,
        value: 'inline'
      },
      /**
       * Payments methods
       */
      _paymentMethods: {
        type: Object,
        computed: '_computePaymentMethods(card)'
      },
      /**
       * Payments methods amounts
       */
      _paymentMethodsAmounts: {
        type: Object,
        computed: '_computePaymentMethodsAmounts(card, _majorCurrency)'
      },

      _additionalInfo: {
        type: String,
        value: ''
      },
      /**
       * Loaded data
       * @type {Boolean}
       */
      loading: {
        type: Boolean,
        value: true
      },
      /**
       * Boolean to hide or not button to show cvv
       * @type {Boolean}
       **/
      hasCvv: {
        type: Boolean,
        value: false
      },
      negativeClass: {
        type: String
      },
      defaultImages: {
        type: Object
      },
      _spinnerCardOpen: {
        type: Boolean
      },

      /**
       * Config of modal info
       * @type {Object}
       **/
      configModalInfo: {
        type: Object,
        notify: true
      },
      /**
       * Indicates if the front images has been loaded
       * @type {Boolean}
       */
      frontImageLoaded: {
        notify: true,
        type: Boolean,
        value: false,
        observer: '_toggleLoading'
      },
      /**
       * Show switch to turn on/off the card
       * @type {Boolean}
       */
      showOnOffSwitch: {
        type: Boolean,
        value: false
      },
      /**
       * Set title of switch
       * @type {String}
       */
      titleSwitch: String,
      /**
       * Set label of switch
       * @type {String}
       */
      labelSwitch: String,
      /**
       * Set checked of switch
       * @type {Boolean}
       */
      checkedSwitch: {
        type: Boolean,
        computed: '_setSwitchStatus(card)'
      }
    },

    listeners: {
      'cells-product-summary-more-info': '_notifyCard',
      'cells-product-summary-optional-items-key-icon': '_onTapIcon',
      'cells-switch-label-tap': '_onTapLabelSwitch'
    },

    /**
     * Reset
     */
    reset: function() {
      this.loading = true;
      this.isCardMasked = true;
      this.set('negativeClass', '');
      this._spinnerCardOpen = false;
      this.set('card.images', [{url: ''}, {url: ''}]);
      this.enabledSwitch = false;
    },

    _cardChanged: function() {
      this.enabledSwitch = true;
    },
    /**
     * Navigate to more info page
     */
    _notifyCard: function() {
      this.fire('cells-product-summary-more-info-navigation', {
        productId: this.card.cardId
      });
    },

    /**
     * Gets the card front image URL to display
     * @param {Array} images - Images inside card object
     * @return {Object} Url of the images to display
     */
    _computeImgSrc: function(images) {
      var cardImages = {};

      if (images && images.length !== 0) {
        cardImages.frontImg = images[0].url;
        cardImages.backImg = images[1].url;
      }

      return cardImages;
    },
    /**
     * Toggle loading status when image is loaded
     */
    _toggleLoading: function(loaded) {
      this.loading = !loaded;
    },

    /**
     * Gets the card major currency
     * @param {Object} card - Card to display
     * @return {String} Major currency
     */
    _computeMajorCurrency: function(card, selectedCurrency) {
      if (!card) {
        return;
      }
      if (selectedCurrency) {
        return selectedCurrency;
      }
      return card.currencies && card.currencies.filter(function(currency) {
        return currency.isMajor === true;
      })[0].currency;
    },

    /**
     * Set's '_mainItems' for all card types
     * @param {Object} card - Card object
     * @param {String} majorCurrency - Currency whose balance must to be get
     * @return {Array} - New '_mainItems'
     */
    _computeMainItems: function(card, majorCurrency) {
      if (!card) {
        return;
      }
      var main;
      var currentBalance = this._getMonetaryValueByCurrency(majorCurrency, card, ['availableBalance', 'currentBalances']);

      currentBalance.class = 'amount-huge';

      if (currentBalance && currentBalance.amount) {
        main = [ this._buildKeyValueItem('cells-product-summary-card-basic-availableBalanceCards', currentBalance) ];
      }
      return main;
    },

    /**
     * Set's _optionalItems'
     * @param {Object} card - Card object
     * @param {String} majorCurrency - Currency whose balance must to be get
     * @return {Array} - New '_optionalItems'
     */
    _computeOptionalItems: function(card, majorCurrency) {
      if (!card) {
        return;
      }
      var optionalItems;

      if (card.cardType.id === 'CREDIT_CARD') {
        var currentBalance = this._getMonetaryValueByCurrency(majorCurrency, card, ['disposedBalance', 'currentBalances']);
        var grantedCredit = this._getMonetaryValueByCurrency(majorCurrency, card, [ 'grantedCredits' ]);

        if (currentBalance.amount < 0) {
          var icon = {
            keyIcon: 'coronita:help',
            id: 'negative'
          };
        }

        if (currentBalance && currentBalance.amount && grantedCredit && grantedCredit.amount) {
          currentBalance.class = 'amount-large';
          grantedCredit.class = 'amount-large';
          optionalItems = [
            this._buildKeyValueItem('cells-product-summary-card-basic-disposedBalanceCreditCards', currentBalance, icon),
            this._buildKeyValueItem('cells-product-summary-card-basic-grantedCreditCreditCards', grantedCredit)
          ];
        }
      }

      return optionalItems;
    },

    /**
     * Sets '_progressValue' and '_progressMax'
     * @param {Array} newOptionalItems - Just setted '_optionalItems'
     */
    _optionalItemsChanged: function(newOptionalItems) {
      var progressValue;
      var progressMax;

      if (newOptionalItems && newOptionalItems.length === 2) {
        progressValue = newOptionalItems[0].value.amount;
        progressMax = newOptionalItems[1].value.amount;
      }

      this.set('_progressValue', progressValue);
      this.set('_progressMax', progressMax);
      if (progressValue > progressMax) {
        this.set('negativeClass', 'card-product--negative-value');
      }
    },

    /**
     * Set's _additionalItems'
     * @param {Object} card - Card object
     * @param {String} majorCurrency - Currency whose balance must to be get
     * @param {hasAdditionalItems} majorCurrency - If false, '_additionalItems' won't be set
     * @return {Array} - New '_additionalItems'
     */
    _computeAdditionalItems: function(card, majorCurrency, hasAdditionalItems) {
      if (!card) {
        return;
      }
      var additionalItems = [];

      if (hasAdditionalItems) {
        var pendingBalance = this._getMonetaryValueByCurrency(majorCurrency, card, ['availableBalance', 'pendingBalances']);
        var rewards = this._getCardPoints(card.rewards);

        if (pendingBalance) {
          additionalItems = [ this._buildKeyValueItem('cells-product-summary-card-basic-pendingBalances', pendingBalance) ];
        }

        if (rewards) {
          additionalItems.push(rewards);
        }

      } else {
        this._additionalInfo = 'noAdditionalInfo';
      }


      return additionalItems;
    },
    _getCardPoints: function(rewards) {
      return rewards.reduce(function(acc, reward) {
        if (reward.rewardId === 'BANCOMER_POINTS') {
          acc = {
            key: 'cells-product-summary-card-card-points-title',
            value: reward.nonMonetaryValue + ' ' + this.t('cells-product-summary-card-card-points-text')
          };
        }
        return acc;
      }.bind(this), {});
    },
    /**
     * Builds an object with key and a monetary value
     * @param {String} key - Key
     * @param {Object} value - Balance object with the following structure: {amount: 1234, currency: 'EUR'}
     * @return {Object} key-montaryValue with the following structure: { key: key, value: { amount: 1234, currency: 'EUR'} }
     */
    _buildKeyValueItem: function(key, value, icon) {
      return {
        key: key,
        icon: icon || '',
        value: {
          amount: value.amount,
          currencyCode: value.currency,
          class: value.class || ''
        },
        localCurrency: this.localCurrency
      };
    },

    /**
     * @param {Array} balances - Balances to filter
     * @param {String} currency - Currency used to filter de balances
     * @return {Number} Amount of the balance in the given currency
     */
    _getMonetaryValueByCurrency: function(currency, card, path) {
      var value = path.reduce(function(acc, index) {
        return acc[index] || {};
      }, card);
      if (Array.isArray(value)) {
        value = value.filter(function(balance) {
          return balance.currency === currency;
        })[0];
      }
      return value;
    },

    /**
     * Returns a formatted date
     * @param {String} date - Date to be formatted.
     * @return {String} Formatted date
     */
    _formatDate: function(date) {
      var formattedDateMonth = '';
      var formattedDate = '';
      date = new Date(date);

      formattedDateMonth = moment(date).format('MMMM');
      formattedDateMonth = formattedDateMonth.charAt(0).toUpperCase() + formattedDateMonth.slice(1);

      formattedDate = moment(date).format('D') + ' ' + formattedDateMonth;

      return formattedDate;
    },

    _computePaymentMethods: function(card) {
      return card.paymentMethods && card.paymentMethods[0];
    },

    _computePaymentMethodsAmounts: function(card, majorCurrency) {
      var amounts = {};
      var majorCurrencyCard = majorCurrency || this._majorCurrency;
      var value;

      if (card.paymentMethods && card.paymentMethods[0] && card.paymentMethods[0].paymentAmounts) {
        card.paymentMethods[0].paymentAmounts.forEach(function(el, index) {
          value = el.values.filter(function(balance) {
            return balance.currency === majorCurrencyCard;
          })[0];

          amounts[this._parseKey(el)] = {
            'name': el.name,
            'values': value
          };
        }, this);
      }
      return amounts;
    },

    _parseKey: function(el) {
      var arr = el.id.toLowerCase().split('_');
      var name = arr[0];
      arr.slice(1).forEach(function(keyEl) {
        name += (keyEl.charAt(0).toUpperCase() + keyEl.slice(1));
      });
      return name;
    },

    _onCardUnmaskedOk: function() {
      this.isCardMasked = false;
    },

    _onCardUnmaskedError: function() {
      this.hideSpinner();
      this.fire('cells-molecule-card-cover-cvv-unmask-data-error', this.t('cells-molecule-card-cover-cvv-unmask-card-error'));
    },

    _onTextCopiedSuccess: function(payload) {
      this.fire('cells-molecule-card-cover-cvv-copy-card-number-success', this.t('cells-molecule-card-cover-cvv-copy-number-success'));
    },

    _onTextCopiedError: function(payload) {
      this.fire('cells-molecule-card-cover-cvv-copy-card-number-error', this.t('cells-molecule-card-cover-cvv-copy-number-error'));
    },

    hideSpinner: function() {
      this._spinnerCardOpen = false;
    },

    _onTapIcon: function(e) {
      var iconId = e.currentTarget.id || e.detail.id;
      this.set('configModalInfo', {
        btns: {
          primary: {
            text: 'Entendido',
            info: '',
            class: 'primary'
          }
        },
        notification: {
          icon: 'coronita:info',
          heading: this._showHeadingMessage(iconId) ? 'cells-modal-info-card-' + iconId + '-heading' : '',
          class: 'white-background',
          iconSize: 26,
          alternativeMessage: 'cells-modal-info-card-' + iconId + '-message'
        }
      });
    },
    _showHeadingMessage: function(iconId) {
      return iconId !== 'negative';
    },

    _setSwitchStatus: function(card) {
      var status = false;
      if (card && card.activations && card.activations.length !== 0) {
        status = card.activations.some(function(item) {
          return item.activationId === 'ON_OFF' && item.isActive;
        });
      }
      return status;
    },
    /**
     * Handler of tap switch label
     */
    _onTapLabelSwitch: function() {
      this.dispatchEvent(new CustomEvent('cells-product-summary-card-switch-label-tap', {
        bubbles: true,
        composed: true,
        detail: {
          productId: this.card.cardId
        }
      }));
    }
  });
}());