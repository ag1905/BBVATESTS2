(function() {

  'use strict';

  Polymer({

    is: 'glomo-atm-locator',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Started component
       */
      started: Boolean,
      /**
       * Location in the map
       */
      location: Object,
      /**
       * Location default
       */
      locationDefault: Object,
      /**
       * Api Key for the google map
       */
      apiKey: String,
      /**
       * markers in the map
       */
      markers: {
        type: Array
      },
      /**
       * Selected marker
       */
      selected: {
        type: Object,
        notify: true
      },
      /**
       * Selected active detail
       */
      selectedActive: Boolean,
      /**
       * Collapsed list with button state
       */
      collapsedList: Boolean,
      /**
       * Hide list state
       */
      hideList: Boolean,
      /**
       * List half state
       */
      halfList: {
        type: Boolean,
        value: true
      },
      /**
       * Display pois in current location
       */
      displayPois: Boolean,
      /**
       * Set the styles for google map
       */
      mapStyles: Array,
      /**
      * Additional map options for google.maps.Map constructor.
      */
      additionalMapOptions: Object,
      /**
       * Zoom of map
       */
      zoom: Number,
      /**
       * Zoom default
       */
      zoomDefualt: {
        type: Number,
        value: 16
      },
      /**
       * Map type to display. One of 'roadmap', 'satellite', 'hybrid', 'terrain'.
       */
      mapType: String,
      /**
       * If true, prevent the user from zooming the map interactively.
       */
      disableZoom: Boolean,
      /**
       * A maximum zoom level which will be displayed on the map.
       */
      maxZoom: Number,
      /**
       * A minimum zoom level which will be displayed on the map.
       */
      minZoom: Number,
      /**
       * Language of map
       */
      lang: String,
      /**
       * Show hide button search this area
       */
      showSearchButton: Boolean,
      /**
       * Enable checked if has display pois in map
       */
      enableDisplayPois: {
        type: Boolean,
        value: true
      },
      /**
       * Radius size, in Km
       */
      radius: {
        type: Number,
        value: 2.5
      }
    },

    listeners: {
      'cells-maps-no-display-pois': '_hideList',
      'cells-maps-display-pois': '_showList',
      'on-click-center-location': '_onClickCenter',
      'google-map-dragend': '_endDrag',
      'cells-map-marker-clicked': '_toggleDetail',
      'go-route': '_onClickItemList',
      'full-list-state': '_hideButtonSearch'
    },

    /**
     * Init
     */
    init: function() {
      if (this.started) {
        this.halfList = true;
      } else {
        this.dispatchEvent(new CustomEvent('init-location', {
          detail: this.locationDefault,
          bubbles: true,
          composed: true
        }));

        this.set('location', this.locationDefault);
        this.askForLocation();
      }

      this.started = true;
    },

    /**
     * Reset
     */
    reset: function() {
      this.location = undefined;
      this.selected = undefined;
      this.selectedActive = false;
      this._hideButtonSearch();
      this.collapsedList = false;
      this.zoom = this.zoomDefualt;
      this.started = false;
    },

    /**
     * Force set location
     */
    setLocation: function(location) {
      this.set('location', Object.assign({}, location));
    },

    /**
     * Dispatch an event to check if is the first time the user visit ATM & Branches Locator
     */
    checkWelcome: function() {
      this.dispatchEvent(new CustomEvent('check-atm-locator-welcome'));
    },

    /**
     * Ask for current location
     */
    askForLocation: function() {
      this.async(function() {
        this.$.atmMap.askForLocation();
      }, 500);
    },

    /**
     * Parse all markers to set them in the map.
     */
    _computeParsedMarkers: function(data) {
      return data.map(function(marker) {
        marker.icon = this._getMarkerIcon(marker.type);
        return marker;
      }, this);
    },

    /**
     * returns the marker icon URL.
     */
    _getMarkerIcon: function(icon) {
      return this.resolveUrl('images/' + icon + '.svg');
    },

    /**
     * On drag end event of map
     */
    _hideList: function() {
      this.closeDetail();
      this.displayPois = false;
      this.hideList = true;
      this.showSearchButton = true;
    },

    /**
     * On drag end event of map
     */
    _endDrag: function() {
      if (this.displayPois) {
        this.closeDetail();
      }
    },

    /**
     * On drag end event of map and not has endpoints
     */
    _showList: function() {
      this.hideList = false;
      this.showSearchButton = false;
      this.displayPois = true;
    },

    /**
     * Toggle collapsible list
     */
    _toggleCollapsible: function(selectedActive, hideList) {
      return selectedActive || hideList;
    },

    /**
     * On click center button
     */
    _onClickCenter: function() {
      this.zoom = this.zoomDefualt;
      this.dispatchEvent(new CustomEvent('search-new-area', {
        detail: this.location,
        bubbles: true,
        composed: true
      }));
    },

    /**
     * On click detail
     */
    notifyOnClickDetail: function() {
      this.dispatchEvent(new CustomEvent('on-click-detail-selected', {
        bubbles: true,
        composed: true,
        detail: {
          id: this.selected && this.selected.links[0].id,
          type: this.selected && this.selected.type,
          distance: this.selected && this.selected.distance
        }
      }));
      this.closeDetail();
    },

    /**
     * On click operation of detail
     */
    _onClickOperation: function(payload) {
      if (payload && payload.detail && payload.detail.id === 'route') {
        this._notifyRoute(this.selected.geolocation);
      }
    },

    /**
     * On click item list
     */
    _onClickItemList: function(payload) {
      this._notifyRoute(payload.detail);
    },

    /**
     * Notify go to route
     */
    _notifyRoute: function(destination) {
      this.dispatchEvent(new CustomEvent('generate-route-maps', {
        bubbles: true,
        composed: true,
        detail: {
          origin: this.location,
          destination: destination
        }
      }));
    },

    /**
     * Close detail
     */
    closeDetail: function() {
      this.hideList = false;
      this.selectedActive = false;
      this.collapsedList = true;
    },

    /**
     * On click marker of map
     */
    _toggleDetail: function(payload) {
      if (payload && payload.detail && payload.detail.id) {
        this.hideList = true;
        this.selectedActive = true;
      }
    },

    /**
     * Checked selected active and return class name
     */
    _checkedDetail: function(active) {
      return active ? 'active' : '';
    },

    /**
     * Checked operations
     */
    _checkedOperations: function(operations) {
      return operations || [];
    },

    /**
     * Hide serach button
     */
    hideSearchButton: function(e) {
      this._hideButtonSearch();
      this._resizeZoom();
      this.dispatchEvent(new CustomEvent('search-new-area', {
        detail: this.location,
        bubbles: true,
        composed: true
      }));
    },

    _resizeZoom: function() {
      this.zoom = this._getZoom(this.radius);
    },

    _getZoom: function(radius) {
      radius = radius * 0.621371; //parse km to milles
      return Math.round(14 - Math.log(radius) / Math.LN2);
    },

    _hideButtonSearch: function() {
      this.showSearchButton = false;
    }
  });
}());