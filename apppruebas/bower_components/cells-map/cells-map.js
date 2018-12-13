(function() {

  'use strict';

  Polymer({

    is: 'cells-map',

    properties: {
      /**
       * Position: Location in the map
       * @type {Object}
       */
      location: {
        type: Object,
        notify: true
      },

      /**
       * Me: Location in the map
       * @type {Object}
       */
      me: {
        type: Object,
        observer: '_setMeLocation'
      },

      /**
       * Google Api Key
       * @type {String}
       */
      apiKey: String,

      /**
       * Poi selected
       * @type {Object}
       */
      selected: {
        type: Object,
        notify: true
      },

      /**
      * Additional map options for google.maps.Map constructor.
      */
      additionalMapOptions: Object,

      /**
       * Icon: the icon for the mark.
       * @type {String}
       */
      locationIcon: {
        type: String,
        value: 'me'
      },

      /**
       * Set the styles for google map
       * @type {Array}
       */
      mapStyles: {
        type: Array,
        value: function() {
          return [
            {
              'featureType': 'poi',
              'elementType': 'labels',
              'stylers': [
                { 'visibility': 'off' }
              ]
            }
          ];
        }
      },

      /**
       * This array will be populated by the future POIS.
       * @type {Array}
       */
      markers: {
        type: Array,
        value: function() {
          return [];
        }
      },

      /**
       * Map
       * @type {Object}
       */
      map: Object,

      /**
       * Zoom of map
       * @type {Number}
       */
      zoom: {
        type: Number,
        value: 16
      },

      /**
       * Map type to display. One of 'roadmap', 'satellite', 'hybrid', 'terrain'.
       * @type {Number}
       */
      mapType: String,

      /**
       * If true, prevent the user from zooming the map interactively.
       * @type {Boolean}
       */
      disableZoom: Boolean,

      /**
       * A maximum zoom level which will be displayed on the map.
       * @type {Number}
       */
      maxZoom: Number,

      /**
       * A minimum zoom level which will be displayed on the map.
       * @type {Number}
       */
      minZoom: Number,

      /**
       * Language of map
       * @type {String}
       */
      language: String,

      /**
       * Enable display pois
       * @type {Boolean}
       */
      enableDisplayPois: Boolean,
      /**
       * Hide Me marker
       * @type {Boolean}
       */
      hideMe: Boolean,
      /**
       * Icon center
       * @type {String}
       */
      iconCenter: {
        type: String,
        value: 'coronita:mylocation'
      }
    },

    listeners: {
      'google-map-dragend': '_onDragEnd'
    },

    /**
     * This function is fired when the user clicks on a marker.
     * @return {void}
     */
    _onMarkerClick: function(e) {
      var poi = e.model && e.model.__data__ && e.model.__data__.marker || {};

      this.selected = poi;
      this.dispatchEvent(new CustomEvent('cells-map-marker-clicked', {
        bubbles: true,
        composed: true,
        detail: poi
      }));
    },

    _setMeLocation: function(me) {
      if (me && me.latitude && me.longitude) {
        this.location = Object.assign({}, me);
        this.dispatchEvent(new CustomEvent('set-me-location', {
          detail: me,
          bubbles: true,
          composed: true
        }));
      }
    },

    /**
     * This function set the map center when google-map-click event is fired
     * @return {void}
     */
    _centerToLocation: function() {
      if (this.me && !this.hideMe) {
        this.location = Object.assign({}, this.me);
      }

      this.dispatchEvent(new CustomEvent('on-click-center' + (this.hideMe ? '-no' : '') + '-location', {
        bubbles: true,
        composed: true
      }));
    },

    _onDragEnd: function() {
      if (this.enableDisplayPois) {
        this._checkedDisplayPois();
      }
    },

    _checkedDisplayPois: function() {
      var response = this.markers && this.markers.reduce(function(acc, marker) {
        acc.push(this.map.getBounds().contains({
          lat: Number(marker.geolocation.latitude),
          lng: Number(marker.geolocation.longitude)
        }));

        return acc;
      }.bind(this), []);

      var event = 'cells-maps' + (response && !response.length || response && response.length && !response.includes(true) ? '-no' : '') + '-display-pois';
      this.dispatchEvent(new CustomEvent(event, {
        bubbles: true,
        composed: true
      }));
    },

    _canLoadMap: function(location, apiKey) {
      return apiKey && location && location.latitude && location.longitude;
    },

    askForLocation: function() {
      var options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      };

      var success = this._onPosition.bind(this);
      var error = this._onError.bind(this);

      navigator.geolocation.getCurrentPosition(success, error, options);
    },

    /**
     * Success callback when the Geolocation API returns results.
     *
     * @param {Position} pos A position object from the Geolocation API.
     */
    _onPosition: function(pos) {
      var location = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      };

      this.iconCenter = 'coronita:mylocation';
      this.set('me', location);
      this.dispatchEvent(new CustomEvent('cells-map-get-pois', {
        detail: location,
        bubbles: true,
        composed: true
      }));
    },
    /**
     * Error callback when the Geolocation API returns an error.
     *
     * @param {Position} err The error that was returned.
     */
    _onError: function(err) {
      var error;
      if (err) {
        error = {
          error: err.code + ': ' + err.message,
          code: err.code
        };
      }

      this.iconCenter = 'coronita:help';
      this.hideMe = true;
      this.set('me', this.location);

      this.dispatchEvent(new CustomEvent('geolocation-error', {
        detail: error,
        bubbles: true,
        composed: true
      }));
    }
  });
}());