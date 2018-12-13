(function() {
  'use strict';
  Polymer({
    is: 'cells-handle-life-cycle',
    properties: {
      /**
       * Name of the page to handle
       * @type {String}
       */
      pageName: {
        type: String
      },
      /**
       * Token name
       * @type {String}
       */
      tokenName: {
        type: String,
        value: 'tsec'
      },
      /**
       * List with the pages to cache
       * @type {Array}
       */
      cache: {
        type: Array
      }
    },
    /**
     * Init page
     * @param {Object} attached includes value, if are ready page
     */
    init: function(attached) {
      if (attached && attached.value) {
        if (!this.private || this.private && this.accessToken()) {
          this.dispatchEvent(new CustomEvent('init-page', {
            bubbles: true,
            composed: true
          }));
        }
      }
    },
     /**
     * Init page with navigation
     * @param {Object} attached includes destination page name, if are ready page
     */
    initWithNavigation: function(navigation) {
      if (navigation.detail.page) {
        this.dispatchEvent(new CustomEvent('init-page-with-navigation', {
          bubbles: true,
          composed: true
        }));
      }
    },
    /**
     * Reset page
     * @param {Object} attached includes value, if are ready page
     */
    reset: function() {
      this.dispatchEvent(new CustomEvent('reset', {
        bubbles: true,
        composed: true
      }));
    },
    /**
     * Watch if navigation is from pageName to a non cacheable page
     * @param {Object} navigation includes value.fromPage and value.currentPage names
     */
    navigation: function(navigation) {
      var previousPage = navigation.value.fromPage;
      var currentPage = navigation.value.currentPage;

      if (previousPage && this.pageName && previousPage === this.pageName && !(this.cache && this.cache.indexOf(currentPage) > -1)) {
        this.async(function() {
          this.reset();
        }.bind(this), 100);
      }
    },
    /**
     * Checked acces token page
     * @return {Boolean}
     */
    accessToken: function() {
      var token = this._getToken();
      if (!token) {
        this.dispatchEvent(new CustomEvent('access-token-error', {
          bubbles: true,
          composed: true
        }));
        return false;
      }

      return true;
    },
    /**
     * Get params with the token name property
     */
    _getToken: function() {
      try {
        return window.sessionStorage.getItem(this.tokenName);
      } catch (e) {
        console.info('Failed on get ' + this.tokenName + ' property.', e);
        return undefined;
      }
    }

    /**
     * Fired when tokenName property is not found in sessionStorage
     * after calling accessToken()
     * @event access-token-error
     */

    /**
     * Fired when navigates to a non cacheable page
     * @event reset
     */

    /**
     * Dispatched before navigation event
    * @event init-page-with-navigation
    */
  });
}());