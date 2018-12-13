(function() {
  /* global moment */
  'use strict';

  Polymer({

    is: 'cells-molecule-card-cover-cvv',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Full card data
       * @type {Object}
       **/
      card: Object,
      /**
       * Front image of card
       * @type {String}
       **/
      frontImage: String,
      /**
       * Back image of card
       * @type {String}
       **/
      backgImage: String,
      /**
       * Boolean to hide or not button to show cvv
       * @type {Boolean}
       **/
      hasCvv: {
        type: Boolean,
        value: false
      },
      /**
       * String class when no cvv
       * @type {Boolean}
       **/
      hasCvvClass: {
        type: String,
        computed: '_computeSetCvvClass(hasCvv)'
      },
      /**
       * Cvv of card
       * @type {String}
       **/
      _cvv: {
        type: String,
        computed: '_parseCvv(card)'
      },
      /**
       * Class name of status card
       * @type {String}
       **/
      frontDefault: {
        type: Boolean,
        value: true
      },
      /**
       * Card number
       * @type {String}
       **/
      cardNumber: {
        type: String,
        computed: '_computeMaskedNumber(card)'
      },
      /**
       * Card date
       * @type {String}
       **/
      cardDate: {
        type: String,
        computed: '_computeMaskedDate(card)'
      },
      /**
       * Copy text
       * @type {String}
       **/
      copyCard: {
        type: String,
        value: 'cells-molecule-card-cover-cvv-show-number'
      },
      /**
       * In number hidden
       * @type {Boolean}
       */
      isCardMasked: {
        type: Boolean,
        value: true,
        observer: '_changeText'
      },
      /**
       * Card status
       * @type {String}
       **/
      _cardStatus: {
        type: String,
        computed: '_computeCardStatus(card)'
      },
      /**
       * Is not operative card
       * @type {Boolean}
       **/
      isNotOperative: Boolean,
      /**
       * Has status class
       * @type {String}
       **/
      hasStatus: {
        type: String,
        value: ''
      },
      /**
       * Icons size
       * @type {String}
       **/
      iconSize: {
        type: String,
        value: '17'
      },
      /**
       * Default images
       * @type {Object}
       **/
      defaultImages: Object,
      /**
       * Spiner card open
       * @type {Boolean}
       **/
      spinnerCardOpen: {
        type: Boolean,
        notify: true
      },
      /**
      * Indicates if the front image has been loaded
      * @type {Boolean}
      */
      frontImageLoaded: {
        notify: true,
        type: Boolean,
        value: false
      }
    },
    /**
     * Notify event on click view cvv
     **/
    _viewCvv: function(e) {
      e.preventDefault();
      this.set('frontDefault', !this.frontDefault);

      if (this.isCardMasked) {
        this.fire('cells-molecule-card-cover-cvv-click-view-cvv');
      }
    },
    /**
     * Computed class when no cvv
     **/
    _computeSetCvvClass: function(hasCvv) {
      return !hasCvv ? 'noCvv' : '';
    },
    /**
     * Checked class to rotate card
     **/
    _checkedStatus: function(frontDefault) {
      return (frontDefault) ? 'front' : 'back';
    },

    _computeMaskedNumber: function(card) {
      var cardNumber;
      var num;
      var i;
      var nDots;

      if (card && card.number) {
        cardNumber = card.number;

        if (cardNumber.indexOf('*') > -1) {
          num = cardNumber.replace('*', '•');
          nDots = 16 - num.length;
          for (i = 0; i < nDots; i += 1) {
            num = '•' + num;
          }
          num = [num.substr(0, 4), num.substr(4, 4), num.substr(8, 4), num.substr(12, 4)].join(' ');
        } else {
          num = cardNumber;
        }
        return num;
      }
    },

    _computeMaskedDate: function(card) {
      var dateCard;
      var date;

      if (card && card.expirationDate) {
        dateCard = card.expirationDate;

        if (dateCard.indexOf('*') > -1) {
          date = '••/••';
        } else {
          date = moment(dateCard).format('MM/YY');
        }
        return date;
      }
    },

    _parseCvv: function(card) {
      if (card.securityData && card.securityData.length) {
        return card.securityData[0].code;
      }
    },

    _cardNumberOperation: function() {
      if (this.isCardMasked) {
        this.spinnerCardOpen = true;
        this.fire('cells-molecule-card-cover-cvv-unmask-data');
      } else {
        this.fire('cells-molecule-card-cover-cvv-copy-card-number', this.card.number);
      }
    },

    _changeText: function() {
      this.spinnerCardOpen = false;
      this.set('copyCard', 'cells-molecule-card-cover-cvv-' + (!this.isCardMasked ? 'copy' : 'show') + '-number');
    },

    _computeCardStatus: function(card) {
      var cardStatus = card.overdraft ? 'OVERDRAFT' : card.status.id;
      var status = {
        title: '',
        text: '',
        icon: '',
        key: ''
      };
      var possibleStatus = {
        'BLOCKED': {
          title: 'cells-molecule-card-cover-cvv-blocked-title',
          text: 'cells-molecule-card-cover-cvv-blocked',
          icon: 'coronita:block',
          key: 'locked',
          blockDate: false,
          blockDateText: '',
          continueText: 'cells-molecule-card-cover-cvv-blocked-continue'
        },
        'INOPERATIVE': {
          title: 'cells-molecule-card-cover-cvv-inoperative-title',
          text: 'cells-molecule-card-cover-cvv-inoperative',
          icon: 'coronita:clock',
          key: 'activate'
        },
        'OFF': {
          title: 'cells-molecule-card-cover-cvv-off-title',
          text: 'cells-molecule-card-cover-cvv-off',
          icon: 'coronita:on',
          key: 'off'
        },
        'CANCELED': {
          title: 'cells-molecule-card-cover-cvv-expired-title',
          text: 'cells-molecule-card-cover-cvv-expired',
          icon: 'coronita:block',
          key: 'canceled'
        },
        'OVERDRAFT': {
          title: 'cells-molecule-card-cover-cvv-overdraft-title',
          text: 'cells-molecule-card-cover-cvv-overdraft',
          icon: 'coronita:alert',
          key: 'overdraft'
        },
        'PARTIALLY_ON': {
          preLinkText: 'cells-molecule-card-cover-cvv-partially-on-pre-link',
          linkText: 'cells-molecule-card-cover-cvv-partially-on-link',
          icon: '',
          text: '',
          key: 'partiallyOn'
        }
      };

      if (cardStatus !== 'OPERATIVE') {
        if (cardStatus === 'BLOCKED' && card.blocks && card.blocks.length) {
          status = possibleStatus[cardStatus];
          status.blockDateText = this._generateBlockDate(card.blocks);
          status.blockDate = status.blockDateText ? true : false;
        } else {
          status = possibleStatus[cardStatus];
        }

        if (status && status.blockDate) {
          status.text = status.blockDateText ? status.text : 'cells-molecule-card-cover-cvv-blocked-alt';
        }

        this.set('hasStatus', cardStatus !== 'OVERDRAFT' ? 'off' : '');
        this.set('isNotOperative', true);
      } else if (cardStatus === 'OPERATIVE' && card.activations && card.activations.length) {
        if (card.activations[0].activationId === 'ON_OFF') {
          if (!card.activations[0].isActive) {
            status = possibleStatus.OFF;
            this.set('hasStatus', 'off');
            this.set('isNotOperative', true);
          } else if (this._isPartiallyOn(card.activations)) {
            status = possibleStatus.PARTIALLY_ON;
            this.set('hasStatus', 'partiallyOn');
          } else {
            this.hasStatus = '';
          }
        }
      }
      return status;
    },

    _generateBlockDate: function(blocks) {
      return blocks[0].blockDate ? moment(blocks[0].blockDate).format('D [de] MMMM [de] YYYY') : '';
    },

    _isPartiallyOn: function(activations) {
      return activations.some(function(activation, _, array) {
        return array[0].isActive !== activation.isActive;
      });
    },

    _statusLinkClick: function() {
      this.dispatchEvent(new CustomEvent('cells-molecule-card-cover-cvv-link-clicked', {
        bubbles: true,
        composed: true,
        detail: {
          productId: this.card.cardId
        }
      }));
    }
  });
}());
