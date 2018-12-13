/*eslint wrap-iife: [1, "inside"] */
(function() {
  'use strict';
  var memoryCache = {};

  Polymer({
    is: 'cells-ajax',

    /**
     * Fired when a request is sent.
     *
     * @event request
     */

    /**
     * Fired when a response is received.
     *
     * @event response
     */

    /**
     * Fired when an error is received.
     *
     * @event error
     */

    properties: {

      /**
       * History to save the key and timestamp created in the localStorage by the component
       */
      keysStore: {
        type: Object,
        value: function() {
          return {};
        }
      },

      /**
       * Force http request to background threads of mobile device.
       */
      native: {
        type: Boolean,
        value: false
      },
      /**
       * Cache type to use, currently available `memory` and `local`.
       */
      cache: {
        type: String
      },

      /**
       * Length of time in milliseconds to cache the request.
       */
      cacheTime: {
        type: Number
      },

      /**
       * The URL target of the request.
       */
      url: {
        type: String,
        notify: true
      },

      /**
       * An object that contains query parameters to be appended to the
       * specified `url` when generating a request. If you wish to set the body
       * content when making a POST request, you should use the `body` property
       * instead.
       */
      params: {
        type: Object,
        value: function() {
          return {};
        }
      },

      /**
       * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
       * Default is 'GET'.
       */
      method: {
        type: String,
        value: 'GET'
      },

      /**
       * HTTP request headers to send.
       *
       * Example:
       *
       *     <iron-ajax
       *         auto
       *         url="http://somesite.com"
       *         headers='{"X-Requested-With": "XMLHttpRequest"}'
       *         handle-as="json"></iron-ajax>
       *
       * Note: setting a `Content-Type` header here will override the value
       * specified by the `contentType` property of this element.
       */
      headers: {
        type: Object,
        value: function() {
          return {};
        }
      },

      /**
       * Content type to use when sending data. If the `contentType` property
       * is set and a `Content-Type` header is specified in the `headers`
       * property, the `headers` property value will take precedence.
       */
      contentType: {
        type: String,
        value: null
      },

      /**
       * Body content to send with the request, typically used with "POST"
       * requests.
       *
       * If body is a string it will be sent unmodified.
       *
       * If Content-Type is set to a value listed below, then
       * the body will be encoded accordingly.
       *
       *    * `content-type="application/json"`
       *      * body is encoded like `{"foo":"bar baz","x":1}`
       *    * `content-type="application/x-www-form-urlencoded"`
       *      * body is encoded like `foo=bar+baz&x=1`
       *
       * Otherwise the body will be passed to the browser unmodified, and it
       * will handle any encoding (e.g. for FormData, Blob, ArrayBuffer).
       *
       * @type (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object)
       */
      body: {
        type: Object,
        value: null
      },

      /**
       * Toggle whether XHR is synchronous or asynchronous. Don't change this
       * to true unless You Know What You Are Doing™.
       */
      sync: {
        type: Boolean,
        value: false
      },

      /**
       * Specifies what data to store in the `response` property, and
       * to deliver as `event.detail.response` in `response` events.
       *
       * One of:
       *
       *    `text`: uses `XHR.responseText`.
       *
       *    `xml`: uses `XHR.responseXML`.
       *
       *    `json`: uses `XHR.responseText` parsed as JSON.
       *
       *    `arraybuffer`: uses `XHR.response`.
       *
       *    `blob`: uses `XHR.response`.
       *
       *    `document`: uses `XHR.response`.
       */
      handleAs: {
        type: String,
        value: 'json'
      },

      /**
       * Set the withCredentials flag on the request.
       */
      withCredentials: {
        type: Boolean,
        value: false
      },

      /**
       * Set the timeout flag on the request.
       */
      timeout: {
        type: Number,
        value: 0
      },

      /**
       * If true, automatically performs an Ajax request when either `url` or
       * `params` changes.
       */
      auto: {
        type: Boolean,
        value: false
      },

      /**
       * If true, error messages will automatically be logged to the console.
       */
      verbose: {
        type: Boolean,
        value: false
      },

      /**
       * The most recent request made by this iron-ajax element.
       */
      lastRequest: {
        type: Object,
        notify: true,
        readOnly: true
      },

      /**
       * True while lastRequest is in flight.
       */
      loading: {
        type: Boolean,
        notify: true,
        readOnly: true
      },

      /**
       * lastRequest's response.
       *
       * Note that lastResponse and lastError are set when lastRequest finishes,
       * so if loading is true, then lastResponse and lastError will correspond
       * to the result of the previous request.
       *
       * The type of the response is determined by the value of `handleAs` at
       * the time that the request was generated.
       *
       * @type {Object}
       */
      lastResponse: {
        type: Object,
        notify: true,
        readOnly: true
      },

      /**
       * lastRequest's error, if any.
       *
       * @type {Object}
       */
      lastError: {
        type: Object,
        notify: true,
        readOnly: true
      },

      /**
       * An Array of all in-flight requests originating from this iron-ajax
       * element.
       */
      activeRequests: {
        type: Array,
        notify: true,
        readOnly: true,
        value: function() {
          return [];
        }
      },

      /**
       * Length of time in milliseconds to debounce multiple automatically generated requests.
       */
      debounceDuration: {
        type: Number,
        value: 0,
        notify: true
      },

      /**
       * Prefix to be stripped from a JSON response before parsing it.
       *
       * In order to prevent an attack using CSRF with Array responses
       * (http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)
       * many backends will mitigate this by prefixing all JSON response bodies
       * with a string that would be nonsensical to a JavaScript parser.
       *
       */
      jsonPrefix: {
        type: String,
        value: ''
      },

      /**
       * Types of cache.
       */
      cacheTypes: {
        type: Array,
        readOnly: true,
        value: function() {
          return ['none', 'memory', 'local'];
        }
      }
    },

    /**
     * Performs an AJAX request to the specified URL.
     *
     * @return {!IronRequestElement}
     */
    generateRequest: function() {
      var request;
      var response;

      //Evaluate type of cellsHttp
      if (this.native && window.cordova) {
        this.cellsHttp = this.$.cellsHttpNative;
      } else {
        this.cellsHttp = this.$.cellsHttp;
      }

      var requestOptions = this.cellsHttp.toRequestOptions();
      var validCacheType = this.cacheTypes.indexOf(this.cache);

      if ((validCacheType >= 0) && (this.cache !== 'none') && requestOptions.method === 'GET') {
        var key = this.getRequestKey(requestOptions);
        response = this.getResponseCached(key, this.cache);
      }

      if (response) {
        request = document.createElement('iron-request');
        request.completes
          .then(this.cellsHttp._handleResponse.bind(this, request))
          .catch(this.cellsHttp._handleError.bind(this, request))
          .then(this.cellsHttp._discardRequest.bind(this, request));

        this.fire('request', {
          request: request,
          options: requestOptions
        });

        request._setResponse(response);
        request.resolveCompletes(request);

      } else {
        request = this.cellsHttp.generateRequest();
        var cacheOptions = this._getCacheOptions(requestOptions);
        request.completes
          .then(this._setResponseCached.bind(this, request, cacheOptions))
          .catch(function(error) {
            console.log('Error', error);
          });
      }

      this._setLastRequest(request);
      this._setLoading(true);
      this.activeRequests.push(request);
      /*eslint consistent-this: ["error", "self"]*/
      var self = this;
      request.completes
        .then(function(resp) {
          self._setLoading(false);
          self.cellsHttp._discardRequest.bind(this, request);
        })
        .catch(function(error) {
          console.log('Error', error);
        });
      return request;
    },

    /**
     * Set to null the cache for the given key.
     *
     * @param  {String} name Request identifyer.
     */

    removeFromCache: function(key) {
      var cache = this.cache || 'local';
      if (cache === 'local') {
        this._removeFromLocalCache(key);
      } else {
        this._removeFromMemoryCache(key);
      }
    },

    /**
     * Clear the cache of the type given
     *
     * @param {String} cache
     */

    clearCache: function(cache) {
      cache = cache || this.cache;
      switch (cache) {
        case 'local':
          this._removeLocalCache();
          break;
        case 'memory':
          memoryCache = {};
          break;
      }
    },

    /**
     * Creates a string key based on request.
     *
     * @param  {Object} requestOptions
     * @return {String} Created key
     */
    getRequestKey: function(requestOptions) {
      requestOptions = requestOptions || this.requestOptions;

      // Include params on key to distinguish requests with same url but
      // different params.
      var paramKey = '';
      if (typeof requestOptions.params === 'string') {
        paramKey = requestOptions.params;
      } else if (typeof requestOptions.params === 'object') {
        for (var key in requestOptions.params) {
          if (requestOptions.params[key]) {
            paramKey += '_' + requestOptions.params[key];
          }
        }
      }

      var keyName = requestOptions.url + paramKey;

      return keyName;
    },

    /**
     * Create the expiration key.
     *
     * @param  {String} key [key from expiration]
     * @return {String} [expiration key]
     */
    getCacheExpirationKey: function(key) {
      return 'expiration_' + key;
    },

    /**
     * Calculates expiration value for cache.
     *
     * @param  {Number} cache cache time
     * @return {Number} expiration time
     */
    _getCacheExpirationValue: function(cacheTime) {
      cacheTime = isNaN(cacheTime) ? cacheTime : this.cacheTime;
      if (isNaN(cacheTime)) {
        cacheTime = 10 * 60 * 1000; // 10 minutes.
      }
      return new Date().getTime() + cacheTime;
    },

    getResponseCached: function(key, cache) {
      var response;
      key = key || this.getRequestKey(this.cellsHttp.toRequestOptions());
      cache = cache || this.cache;
      var expirationKey = this.getCacheExpirationKey(key);
      switch (cache) {
        case 'local':
          response = this._getLocalCache(key);
          break;
        case 'memory':
          response = this._getMemoryCache(key);
          break;
      }
      return response;
    },

    /**
     * Checks if cache has expired
     *
     * @param  {Object} expiration info about response expirtion time
     * @return {Boolean} true if cache is expired
     */
    _isCacheExpired: function(expiration) {
      return navigator && navigator.onLine && expiration && parseInt(expiration) < new Date().getTime();
    },

    _getCacheOptions: function(requestOptions) {
      return {
        type: this.cache,
        key: this.getRequestKey(requestOptions),
        time: this._getCacheExpirationValue(this.cacheTime)
      };
    },

    _removeLocalCache: function() {
      for (var key in this.keysStore) {
        if (this.keysStore.hasOwnProperty(key)) {
          this._removeFromLocalCache(key);
        }
      }
    },

    _setResponseCached: function(request, cacheOptions) {
      var expiration = {
        key: this.getCacheExpirationKey(cacheOptions.key),
        value: cacheOptions.time
      };
      switch (cacheOptions.type) {
        case 'local':
          this._setLocalCache(cacheOptions.key, request.response, expiration);
          break;
        case 'memory':
          this._setMemoryCache(cacheOptions.key, request.response, expiration);
          break;
      }
    },

    /**
     * Save request response in local storage
     *
     * @param  {String} key Request identifyer based on props
     * @param  {Object} response Data obtained from request
     * @param  {Object} expiration Info about response expirtion time
     * @private
     */
    _setLocalCache: function(key, response, expiration) {
      this.keysStore[key] = expiration.value;
      this.$.ironLocalStorage.name = key;
      this.$.ironLocalStorage.value = response;
      this.$.ironLocalStorage.save();
    },

    /**
     * Get response from local storage.
     *
     * @param  {String} name Request identifyer based on props.
     * @return {Object} value Cached response
     * @private
     */
    _getLocalCache: function(key) {
      var value = null;
      var expiration;
      this.$.ironLocalStorage.name = key;
      this.$.ironLocalStorage.reload();
      expiration = this.$.ironLocalStorage.value;
      if (this._isCacheExpired(expiration)) {
        this._removeFromLocalCache(key);
      } else {
        this.$.ironLocalStorage.name = key;
        this.$.ironLocalStorage.reload();
        value = this.$.ironLocalStorage.value;
      }
      return value;
    },

    /**
     * Set to null the local cache for the given key.
     *
     * @param  {String} name Request identifyer based on props.
     * @private
     */
    _removeFromLocalCache: function(key) {
      window.localStorage.removeItem(key);
      delete this.keysStore[key];
    },

    _setMemoryCache: function(key, response, expiration) {
      memoryCache[key] = JSON.stringify(response);
      this.keysStore[key] = expiration.value;
    },

    _getMemoryCache: function(key) {
      var value = null;
      var expiration = this.keysStore[key];
      if (this._isCacheExpired(expiration)) {
        this._removeFromMemoryCache(key);
      } else {
        value = memoryCache[key] ? JSON.parse(memoryCache[key]) : null;
      }
      return value;
    },

    _removeFromMemoryCache: function(key) {
      delete memoryCache[key];
      delete this.keysStore[key];
    },

    _onRequest: function(event, data) {
      event.stopPropagation();
      this._setLastRequest(data);
      this.fire('request', data);
    },

    _onResponse: function(event, request) {
      event.stopPropagation();
      this._setLastResponse(request.response);
      this.fire('response', request);
    },
    _onError: function(event, data) {
      event.stopPropagation();
      this._setLastError(data);
      this.fire('error', data);
    },
    _discardRequest: function(request) {
      var requestIndex = this.activeRequests.indexOf(request);

      if (requestIndex > -1) {
        this.activeRequests.splice(requestIndex, 1);
      }
    }
  });

})();
