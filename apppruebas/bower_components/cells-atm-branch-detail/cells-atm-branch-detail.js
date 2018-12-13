(function() {

  'use strict';

  Polymer({

    is: 'cells-atm-branch-detail',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      operations: {
        type: Array,
        value: [
          {
            label: 'cells-atm-branch-detail-share-operation',
            id: 'share',
            icon: 'coronita:share',
            disabled: true
          },
          {
            label: 'cells-atm-branch-detail-directions-operation',
            id: 'route',
            icon: 'coronita:walkingdirections'
          }
        ]
      },
      pois: {
        type: Object,
        observer: '_poisObserver'
      },
      /**
       * Loaded data
       * @type {Boolean}
       */
      loaded: {
        type: Boolean,
        value: false
      },
      /**
       * Images of types
       * @type {Object}
       */
      images: Object,
      /**
       * Number of skeleton items
       * @type {Number}
       */
      skeletonItems: {
        type: Number,
        value: 5
      },
      /**
       * Location origin
       * @type {Object}
       */
      location: Object,
      /**
       * Image url
       * @type {String}
       */
      imgUrl: String
    },
    /**
     * Reset
     */
    reset: function() {
      this.loaded = false;
      this.pois = {};
      this.poisId = '';
      this.type = '';
      this.imgUrl = '';
    },
    /**
     * Pois observer
     */
    _poisObserver: function(pois) {
      if (pois.description) {
        this.set('imgUrl', this._setImage(this.pois.type));
        this.loaded = true;
      }
    },
    /**
     * Set url image depends on pois type
     */
    _setImage: function(type) {
      return this.images && this.images[type];
    },
    /**
     * Fire navigation event when action is clicked
     */
    _navigateFromAction: function(e) {
      var detail;
      var event;

      if (e && e.detail) {
        event = e.detail.id === 'route' ? '-' + e.detail.id : '';

        if (e.detail.id === 'route') {
          detail = {
            origin: this.location,
            destination: this.pois.geolocation
          };
        }
      }

      this.dispatchEvent(new CustomEvent('on-click-operations' + event, {
        bubbles: true,
        composed: true,
        detail: detail
      }));
    },
    /**
     * Fire navigation event when one of closest pois is clicked
     */
    _navigateToPois: function(e) {
      if (e && e.currentTarget) {
        this.dispatchEvent(new CustomEvent('navigate-to-pois', {
          detail: {
            continue: 'poisDetail',
            urlParams: {
              type: e.currentTarget.dataset && e.currentTarget.dataset.type,
              poisId: e.currentTarget.dataset && e.currentTarget.dataset.poisId
            },
            distance: e.currentTarget.dataset && e.currentTarget.dataset.distance
          },
          bubbles: true,
          composed: true
        }));
      }
    },
    /*
     * Generate array to render skeleton items
     */
    _generateSkeleton: function(skeletonItems) {
      return Array.from(Array(skeletonItems), function(_, items) {
        return items;
      });
    }
  });
}());