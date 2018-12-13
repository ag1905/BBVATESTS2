(function() {
  /* global moment */
  'use strict';

  Polymer({

    is: 'cells-oc-banner',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
      * Campaing
      */
      campaign: {
        type: Object,
        observer: '_campaingObserver'
      },

      /**
       * image shown in the banner
       */
      image: {
        type: Object,
        computed: '_computeImage(campaign)'
      },

      /**
       * url for images location
       */
      imageLocation: {
        type: String,
        value: ''
      },

      /**
       * Check is the banner has image configured
       */
      _hasImage: {
        type: Boolean,
        computed: '_computeHasImage(campaign)'
      },

      /**
      * hidden status
      */
      hidden: {
        type: Boolean,
        value: true,
        reflectToAttribute: true
      },

      /**
      * Type offer
      */
      type: String,

      /**
      * ISO 4217 code for the location
      */
      localCurrency: String,

      /**
      * Format date of additional Info
      */
      formatDate: {
        type: String,
        value: 'DD/MM/YY'
      },

      /**
      * Locale for date, additional Info
      */
      localeDate: String,

      /**
       * days left to finish the campaign
       */
      _daysLeft: {
        type: Boolean,
        value: false
      },

      /**
       * Message to show with _daysLeft
       */
      daysLeftMessage: String,

      /**
       * Hide close icon
       */
      noClose: {
        type: Boolean,
        value: false
      },
      /**
       * Animate banner
       */
      animated: {
        type: Boolean,
        value: false,
        observer: 'setAnimationClass'
      },
      /**
       * Enables initial animation
       */
      stopped: {
        type: Boolean,
        value: false,
        observer: 'stopInitialAnimation'
      }
    },

    setAnimationClass: function() {
      if (this.animated) {
        this.classList.add('animated');
        this.$.banner.classList.remove('banner-opened');
        this.$.banner.classList.add('banner-closed');
        if (!this.stopped) {
          this.openBanner();
        }
      } else {
        this.classList.remove('animated');
        this.$.banner.classList.add('banner-opened');
        this.$.banner.classList.remove('banner-closed');
        this.$.collapse.opened = true;
      }
    },

    /**
      * Open the banner
    */
    openBanner: function() {
      this.$.collapse.toggle();
      setTimeout(function() {
        this.$.banner.classList.add('banner-opened');
        this.$.banner.classList.remove('banner-closed');
      }.bind(this), 1800);
    },

    /**
     * Close the banner
     */
    closeBanner: function() {
      this.$.banner.classList.remove('banner-opened');
      this.$.banner.classList.add('banner-closed');
      setTimeout(function() {
        this.updateStyles({
          '--cells-oc-banner-background-color': 'none'
        });
      }.bind(this), 500);

      this.dispatchEvent(new CustomEvent('cells-oc-banner-close', {
        detail: {
          offerId: this.campaign.offerId
        },
        bubbles: true,
        composed: true
      }));
    },

    /**
     * Fire navigation event when action is clicked
     */
    _navigateFromAction: function() {
      var type = this.type ? '-' + this.type : '';
      this.dispatchEvent(new CustomEvent(('cells-oc-banner-click' + type), {
        detail: {
          offerId: this.campaign.offerId,
          productId: this.campaign.product.contractId
        },
        bubbles: true,
        composed: true
      }));
      this.dispatchEvent(new CustomEvent(('set-is-simulation-allowed'), {
        detail: this.campaign.isSimulationAllowed,
        bubbles: true,
        composed: true
      }));
      this.dispatchEvent(new CustomEvent(('set-is-improved'), {
        detail: this.campaign.isImproved,
        bubbles: true,
        composed: true
      }));
    },

    /**
     * Sets the message for remaining days
     */

    _campaingObserver: function(campaign) {
      var today = moment(new Date());
      var date = moment(campaign.endDate);
      var diff = date.diff(today, 'days');
      var type = campaign && campaign.offerType && campaign.offerType.id || '';

      switch (diff) {
        case 0: {
          this._daysLeft = true;
          this.daysLeftMessage = this.t('cells-oc-banner-last-day');
          break;
        }
        case 1: {
          this._daysLeft = true;
          this.daysLeftMessage = this.t('cells-oc-banner-one-day-left');
          break;
        }
        case 2:
        case 3: {
          this._daysLeft = true;
          this.daysLeftMessage = this.t('cells-oc-banner-several-days-left', '', {days: diff});
          break;
        }
        default: {
          this._daysLeft = false;
          this.daysLeftMessage = this.t('cells-oc-banner-valid-until');
        }
      }

      this.type = type.toLowerCase().replace(/_/g, '-');
      this.updateStyles({
        '--cells-oc-banner-background-color': campaign.campaignColor
      });
      this.set('hidden', false);
    },

    _computeImage: function(campaign) {
      var image = campaign.smallImg || {};

      if (image.src) {
        image.url = this.imageLocation + image.src;
      }

      return image;
    },

    _computeHasImage: function(campaign) {
      return !!(campaign.smallImg || {}).src;
    }
  });
}());