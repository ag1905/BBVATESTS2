(function() {

  'use strict';

  Polymer({

    is: 'cells-avatar-actions-header',

    behaviors: [
      window.CellsBehaviors.i18nBehavior
    ],
    properties: {
      /**
       * List of operations.
       */
      operations: {
        type: Array
      },

      /**
       * User to show
       */
      user: {
        type: Object,
        observer: '_setUserProperties'
      },

      /**
       * Avatar url
       */
      _userAvatarUrl: {
        type: String,
        value: ''
      },

      /**
       * Avatar alternative text
       */
      _userAvatarAltText: {
        type: String,
        value: ''
      },

      /**
       * User name
       */
      _userName: {
        type: String,
        value: ''
      },

      /**
       * Number of columns in grid mode.
       */
      gridColumns: {
        type: Number
      },

      /**
       * Maximum visible operations. Set to 0 to show all.
       */
      limit: {
        type: Number
      },

      /**
       * Icon size.
       */
      iconSize: {
        type: Number
      },

      /*
        * class to personalize the header.
        */
      customClass: {
        type: String
      },
      /**
       * Show loading zone
       * @type {Boolean}
       */
      loaded: {
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
       * Turns avatar into a button to navigate
       */
      disableProfileButton: {
        type: Boolean,
        value: false
      }
    },

    /**
     * Set _userAvatarUrl and _userAvatarAltText.
     */
    _setUserProperties: function() {
      if (this.user && this.user.avatars && this.user.avatars.url) {
        this._userAvatarUrl = this.user.avatars.url;
      } else {
        this._userAvatarUrl = '';
      }

      if (this.user && this.user.firstName && this.user.lastName) {
        this._userAvatarAltText = this.user.firstName.concat(' ' + this.user.lastName);
      } else {
        this._userAvatarAltText = '';
      }

      if (this.user && this.user.firstName) {
        this._userName = this.user.firstName;
      }
      if (this.greetingKey === undefined) {
        this.set('greetingKey', 'cells-avatar-actions-header-default-greeting');
      }
    },
    /**
     * Fire navigation event when action is clicked
     */
    _navigateFromAction: function(e) {
      if (e && e.detail && e.detail.eventName) {
        this.dispatchEvent(new CustomEvent(e.detail.eventName, {
          detail: e.detail.eventDetail,
          bubbles: true,
          composed: true
        }));
      }
    },

    /**
     * Set loaded property to hide skeleton
     */
    setLoaded: function() {
      this.set('loaded', true);
    },
    /**
     * Navigate to profile
     */
    _goToProfile: function() {
      this.dispatchEvent(new CustomEvent('navigation-to-profile', {
        bubbles: true,
        composed: true
      }));
    }
  });
}());