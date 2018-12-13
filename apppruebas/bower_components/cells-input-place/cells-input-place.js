(function() {
  /* global google */
  'use strict';

  Polymer({

    is: 'cells-input-place',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * Required: A Maps API key. To obtain an API key, see developers.google.com/maps/documentation/javascript/tutorial#api_key.
       */
      apiKey: {
        type: String,
        notify: true
      },
      /**
       * Indicates the Google API is loaded and that Autocomplete suggestions and geocoding functions are available
       */
      apiLoaded: {
        type: Boolean,
        notify: true,
        value: false,
        readOnly: true
      },
      /**
       * Option of autocomplete
       * https://developers.google.com/places/web-service/query
       */
      autoCompleteOptions: {
        type: Object,
        value: {}
      },
      /**
       * Whether to hide the error message
       * If true, the control does not validate that the value is complete (lat/lng, search term, place_id)
       * and has been chosen from the places drop down.
       */
      hideError: {
        type: Boolean,
        value: false
      },
      /**
       * true if the control is disabled
       */
      disabled: {
        type: Boolean,
        notify: true,
        value: false
      },
      /** @private */
      _geocoder: {
        type: Object
      },
      /**
       * bias search results to a country code  (ISO 3166-1 Alpha-2 country code, case insensitive).
       */
      searchCountryCode: {
        type: String,
        value: ''
      },
      /**
       * bias search results to a bounding rectangle.
       * object properties (all are required):
       * {
       *    east: number,  // East longitude in degrees.
       *    west: number,  // West longitude in degrees.
       *    north: number, // North latitude in degrees.
       *    south: number, // South latitude in degrees.
       * }
       *
       */
      searchBounds: {
        type: Object
      },

      /**
       * bias search results by type
       * permitted values:
       *   address
       *   geocode
       *   establishment
       *   (regions)
       *   (cities)
       */
      searchType: {
        type: String,
        value: ''
      },
      /**
       * error message to display if place is invalid (and hideError is false).
       * Default value is "Invalid - please select a place".
       */
      errorMessage: {
        type: String,
        value: '',
        notify: true
      },
      /**
       * True if the entered text is not valid - i.e. not a selected place and not previously geocoded
       */
      invalid: {
        type: Boolean,
        notify: true,
        readOnly: true,
        value: false
      },
      /**
       * Internal representation of invalid, True if the entered text is not valid - i.e. not a selected place and not previously geocoded
       */
      _invalid: {
        type: Boolean,
        value: false
      },
      /**
       * Floating label for paper-input
       * @type {String}
       */
      label: {
        type: String,
        notify: true,
        value: ''
      },
      /**
       * Placeholder for paper-input
       * @type {String}
       */
      placeholder: {
        type: String,
        notify: true,
        value: ''
      },
      /**
       * an object - { lat: number, lng: number } - representing the geolocation of the
       * entered / selected place
       */
      latLng: {
        type: Object,
        notify: true,
        readOnly: true,
        value: function() {
          return {
            lat: 0,
            lng: 0
          };
        }
      },
      /**
       * An object containing the place selected or geocoded:
       * ```
       *   place_id
       *   formatted_address
       *   latLng { lat: lng: }
       *   search
       *   basic:
       *     name
       *     address
       *     city
       *     state
       *     stateCode
       *     postalCode
       *     country
       *     countryCode
       *     phone
       *   placeDetails: additional properties from the google place result
       *```
       */
      place: {
        type: Object,
        notify: true,
        readOnly: true,
        value: function() {
          return {};
        }
      },
      /** @private */
      _places: {
        type: Object
      },
      _service: {
        type: Object
      },
      /**
       * true if the entry is a required field
       */
      required: {
        type: Boolean,
        notify: true,
        value: false
      },
      /**
       * An object representing the initial or returned value of the control.
       * ```
       * Properties:
       *   search:  string - the search string
       *   place_id:  string - the google maps place_id
       *   latLng:  object {lat: number, lng: number} - latitude/Longitude
       *```
       */
      value: {
        type: Object,
        notify: true,
        observer: '_valueChanged'
      },
      /**
       * Value on input
       */
      valueInput: {
        type: String,
        notify: true,
        value: '',
        observer: '_svalChanged'
      },
      /**
       * @private
       * The url for the google maps api
       */
      _gmapApiUrl: {
        type: String,
        notify: true,
        computed: '_computeUrl(apiKey)'
      },
      /**
       * @private
       * jsonp loaded bool
       */
      _ijplLoaded: {
        type: Boolean
      },
      /**
       * Hide input
       */
      hideInput: Boolean,
      /**
       * Disabled move .pac-container element to #suggestions, and remove of before body tag
       */
      disabledMoveContainer: Boolean,
      /**
       * Show Message empty results
       */
      showMessage: Boolean
    },

    listeners: {
      'cells-molecule-input-icon-tap': 'reset',
      'on-click-clean': 'reset'
    },

    observers: [
      '_searchBiasChanged(searchCountryCode,searchBounds,searchBoundsStrict,searchType)'
    ],

    ready: function() {
      var apiElement = this.$$('google-maps-api');
      this.scopeSubtree(this.$.suggestions, true);

      if (apiElement && apiElement.libraryLoaded) {
        this._mapsApiLoaded();
      }
    },

    _computeUrl: function(akey) {
      return 'https://maps.googleapis.com/maps/api/js?callback=%%callback%%&v=3.exp&libraries=drawing,geometry,places,visualization&key=' + akey;
    },

    _mapsApiLoaded: function() {
      if (!this._geocoder && !this._places && this.$.locationsearch && this.$.locationsearch.$.input) {
        this._geocoder = new google.maps.Geocoder();
        this._service = new google.maps.places.AutocompleteService();
        this._places = new google.maps.places.Autocomplete(this.$$('#locationsearch').$$('#input'), this.autoCompleteOptions);
        google.maps.event.addListener(this._places, 'place_changed', this._onChangePlace.bind(this));
        this._setApiLoaded(true);
        this._searchBiasChanged();

        if (!this.disabledMoveContainer) {
          this._moveContainer();
        }

        this.dispatchEvent(new CustomEvent('api-loaded', {
          bubbles: true,
          composed: true,
          detail: {
            text: 'Google api is ready'
          }
        }));
      }
    },

    _moveContainer: function() {
      setTimeout(function() {
        var container = document.querySelector('.pac-container');
        if (container && this.$.suggestions) {
          this.$.suggestions.prepend(container);
        }
      }.bind(this), 1000);
    },

    /**
     * observer for changes to search bias
     */
    _searchBiasChanged: function(searchCountryCode, searchBounds, searchBoundsStrict, searchType) {
      if (this.apiLoaded) {

        if (this.searchBounds &&
          this.searchBounds.hasOwnProperty('east') &&
          this.searchBounds.hasOwnProperty('west') &&
          this.searchBounds.hasOwnProperty('north') &&
          this.searchBounds.hasOwnProperty('south')
        ) {
          this._places.setBounds(this.searchBounds);
        } else {
          this._places.setBounds();
        }
        if (this.searchCountryCode && this.searchCountryCode.length === 2) {
          this._places.setComponentRestrictions({
            country: this.searchCountryCode.toString()
          });
        } else {
          this._places.setComponentRestrictions();
        }
        if (this.searchType && ['address', 'geocode', 'establishment', '(regions)', '(cities)'].includes(this.searchType)) {
          this._places.setTypes([ this.searchType.toString() ]);
        } else {
          this._places.setTypes([]);
        }
      }
    },

    _valueChanged: function(newValue, oldValue) {
      // update the search term and the invalid flag if the value is being set for the first time,
      // or if the value has changed and is not the same as the search term
      if (!oldValue || (newValue.search !== oldValue.search || newValue.search !== this.valueInput)) {
        this.valueInput = newValue && newValue.search ? newValue.search : '';
        this._invalid = !newValue || !(newValue.place_id && newValue.latLng && newValue.latLng.lat && newValue.latLng
          .lng);
        if (!this.hideError) {
          this._setInvalid(this.required ? this._invalid : this._invalid && (newValue && newValue.search));
        }
      }

      if (this._service && this.valueInput) {
        this._service.getPlacePredictions({input: this.valueInput}, function(pred) {
          this.showMessage = !pred;
        }.bind(this));
      }
    },

    _svalChanged: function(newValue, oldValue) {
      // reset the invalid property if the user has typed in the input field

      // if the newValue matches the selected place, which could happen if
      // the user types after selecting a place, then deletes the typing
      if (newValue && this.place && this.place.search && newValue === this.place.search) {
        this.value = {
          place_id: this.place.place_id,
          search: newValue,
          latLng: {
            lat: this.place.latLng.lat,
            lng: this.place.latLng.lng
          }
        };

        this.dispatchEvent(new CustomEvent('on-set-place', {
          bubbles: true,
          composed: true,
          detail: this.place
        }));

        this._invalid = false;
        this._setInvalid(false);
        return;
      }

      // if blank and not a required input
      if (!newValue && !this.required) {
        this.value = {
          place_id: '',
          search: '',
          latLng: {
            lat: 0,
            lng: 0
          }
        };
        this._setPlace({});
        this._invalid = true;
        if (!this.hideError) {
          this._setInvalid(false);
        }
        return;
      }

      // if the new _value matches the value.search, which could happen if
      // the value is changed externally (possibly through data binding) which
      // causes _value to be changed triggering this function _svalChanged()
      if (newValue && this.value && this.value.search && newValue === this.value.search) {
        // nothing has really changed, just return
        return;
      }

      // otherwise, the value is invalid
      this.value = {
        place_id: '',
        search: newValue,
        latLng: {
          lat: 0,
          lng: 0
        }
      };
      this._setPlace({});
      this._invalid = true;
      if (!this.hideError) {
        this._setInvalid(true);
      }

      return;
    },

    reset: function(e) {
      this.valueInput = '';
      this.showMessage = false;
    },
    /**
     * Geocodes an address
     * @param  {string} address address to be geocoded
     * @param  {object} options Optional - Geocoder Request options
     * @return {Promise<place>}         A promise for a place object or a status on failure
     */
    geocode: function(address, options) {
      return new Promise(function(resolve, reject) {
        if (!this._geocoder) {
          reject('Geocoder not ready.');
        } else {
          var opts = options ? options : {};
          opts.address = address ? address : '';
          this._geocoder.geocode(opts, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
              var p = this._extractPlaceInfo(results[0], opts.address);
              resolve(p);
            } else {
              reject(status);
            }
          }.bind(this));
        }
      }.bind(this));
    },
    /**
     * Reverse Geocodes a latLng
     * @param  {object} latlng latitude/Longitude {lat: , lng: } to be reverse geocoded
     * @param  {object} options Optional - Geocoder Request options
     * @return {Promise<place>}         A promise for a place object or a status on failure
     */
    reverseGeocode: function(latlng, options) {
      return new Promise(function(resolve, reject) {
        if (!this._geocoder) {
          reject('Geocoder not ready.');
        } else {
          var opts = options ? options : {};
          if (latlng) {
            opts.location = latlng;
          }
          this._geocoder.geocode(opts, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
              var p = this._extractPlaceInfo(results[0], '');
              resolve(p);
            } else {
              reject(status);
            }
          }.bind(this));
        }
      }.bind(this));
    },

    _onChangePlace: function(e) {
      var pl = this._places.getPlace();
      if (pl.geometry) {
        var p = this._extractPlaceInfo(pl, this.$.locationsearch.$.input.value);
        this._setPlace(p);
        this._invalid = false;
        this._setInvalid(false);
        this._setLatLng({
          lat: p.latLng.lat,
          lng: p.latLng.lng
        });
        this.valueInput = this.$.locationsearch.$.input.value;
        this.value = {
          search: this.$.locationsearch.$.input.value,
          place_id: p.place_id,
          latLng: {
            lat: p.latLng.lat,
            lng: p.latLng.lng
          }
        };
      }
    },

    /**
     * extracts and simplifies a google place result
     * @param  PlaceResult pl google place result
     * @return place
     */
    _extractPlaceInfo: function(pl, searchTerm) {
      var p = this._generatePlace(pl, searchTerm);

      // extract address components
      var address = {
        street_number: '',
        route: ''
      };

      for (var i = 0, ii = pl.address_components.length; i < ii; i++) {
        p.placeDetails.address_components.push(JSON.parse(JSON.stringify(pl.address_components[i])));

        switch (pl.address_components[i].types[0]) {
          case 'locality':
            p.basic.city = pl.address_components[i].long_name;
            break;

          case 'administrative_area_level_1':
            p.basic.stateCode = pl.address_components[i].short_name;
            p.basic.state = pl.address_components[i].long_name;
            break;

          case 'country':
            p.basic.country = pl.address_components[i].long_name;
            p.basic.countryCode = pl.address_components[i].short_name;
            break;

          case 'postal_code':
            p.basic.postalCode = pl.address_components[i].long_name;
            break;

          case 'street_number':
            address.street_number = pl.address_components[i].short_name;
            p.basic.address = address.street_number + ' ' + address.route;
            p.basic.streetNumber = address.street_number;
            break;
          case 'route':
            address.route = pl.address_components[i].long_name;
            p.basic.address = address.street_number + ' ' + address.route;
            p.basic.route = address.route;
            break;
          default:
            address[pl.address_components[i].types[0]] = pl.address_components[i].long_name;
        }
      }

      return p;
    },

    /**
     * Generate place default
     */
    _generatePlace: function(pl, searchTerm) {
      return {
        place_id: pl.place_id,
        formatted_address: pl.formatted_address,
        search: searchTerm ? searchTerm : pl.formatted_address,
        latLng: {
          lat: pl.geometry.location.lat(),
          lng: pl.geometry.location.lng()
        },
        basic: {
          name: pl.name || '',
          address: '',
          city: '',
          state: '',
          stateCode: '',
          postalCode: '',
          country: '',
          countryCode: '',
          phone: pl.formatted_phone_number || ''
        },
        placeDetails: {
          address_components: [],
          icon: pl.icon,
          international_phone_number: pl.international_phone_number || '',
          permanently_closed: pl.permanently_closed || false,
          types: pl.types ? JSON.parse(JSON.stringify(pl.types)) : [],
          website: pl.website || '',
          url: pl.url || '',
          utc_offset: pl.utc_offset
        }
      };
    },

    /**
     * Updates the current place, value and latLng with the place provided
     * @param  IpipPlace newPlace the new place
     */
    putPlace: function(newPlace) {
      if (newPlace && newPlace.place_id && newPlace.latLng) {
        this._setPlace(JSON.parse(JSON.stringify(newPlace)));
        this._setLatLng({
          lat: newPlace.latLng.lat,
          lng: newPlace.latLng.lng
        });
        this.value = {
          place_id: newPlace.place_id,
          search: newPlace.search,
          latLng: {
            lat: newPlace.latLng.lat,
            lng: newPlace.latLng.lng
          }
        };
        this.valueInput = newPlace.search;
      }
    },
    /**
     * sets the focus to the input field
     */
    focus: function() {
      this.$$('#locationsearch').$.input.focus();
    }
  });
}());