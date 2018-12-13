Polymer({
  is: 'cells-organism-menu-sidebar',

  behaviors: [
    /* global CellsBehaviors */
    CellsBehaviors.i18nBehavior
  ],

  hostAttributes: {
    'role': 'navigation'
  },

  properties: {
    /**
     * user CDM
     */
    userId: {
      type: String
    },

    /**
     * set the user object
     *
     * @example
     * {
     *    firstName: 'María',
     *    avatar: {
     *      url: './user-avatar.jpg'
     *    }
     * }
     */
    user: {
      type: Object,
      value: function() {
        return {};
      },
      observer: '_userObserver'
    },

    /**
     * set true if user is logged
     */
    userLogged: {
      type: Boolean,
      value: false
    },

    /**
     * True if the user is reminded, false otherwise.
     */
    userReminded: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * A fallback avatar that could be configurated from outside
     */
    defaultAvatarUrl: {
      type: String,
      value: '../images/user-avatar-default.svg'
    },

    /**
     * Size for the avatar image. The size is applied to width and height.
     */
    avatarSize: {
      type: Number,
      value: 80
    },

    /**
     * The avatar to use in html, fetched from user or default
     */
    _avatarUrl: {
      type: String
    },

    /**
     * Show or hide the link down name profile
     */
    disableProfileLink: {
      type: Boolean,
      value: false
    },

    /**
     * Sections inyected from outside. However, there is a default value in case. Each item can have a status property
     * to indicate it is disabled when user is logged or not (status.showNoLogged and status.showLogged).
     * It's an array of object that looks like:
     * {{ label: {String}, icon: {String}, link: {String}, action: {String}, status:{Object}  }}
     *
     * @example
     * [{
     *    label: 'changeuser-translationKey-label',
     *    icon: 'coronita:on',
     *    link: '#',
     *    action: 'change-user',
     *    status: {
     *     showNoLogged: false,
     *     showLogged: true
     *    }
     * },
     * {
     *    label: 'about-translationKey-label',
     *    icon: 'coronita:bar',
     *    link: '#/about',
     * }]
     */
    availableSections: {
      type: Array
    },

    /**
     * Icon size for menu items.
     */
    sectionIconSize: {
      type: Number,
      value: 18
    },

    /**
     * this is used for icon loggout.
     */
    iconLogoutId: {
      type: String
    },

    /**
     * Set the debounce duration, delaying the toggle effect
     */
    debounceDuration: {
      type: Number,
      value: 0
    },

    /**
     * Prevent default logout
     */
    preventLogout: Boolean,

    /**
     * Hide Avatar
     */
    hideAvatar: Boolean
  },

  /**
   * Initializes component back to default state
   */
  reset: function() {
    this.userId = '';
    this.user = {};
    this.userLogged = false;
    /**
     * is fired when the component is reset
     * @event reset-menu-sidebar
     */
    this.dispatchEvent(new CustomEvent('reset-menu-sidebar', {
      bubbles: true,
      composed: true
    }));
  },

  /**
   * Toggle styles when user is logged and set the userLogged
   */
  _userObserver: function(user) {
    if (user.firstName && !this.hideAvatar) {
      this._avatarUrl = this.get('user.avatar.url') || this.defaultAvatarUrl;
    }

    this.userReminded = !!user.firstName;
  },

  /**
   * If user is not setted, the user is not logged
   */
  cleanUserLogged: function() {
    this.userLogged = false;
  },

  /**
   * Toggle the menu sidebar
   * @event toggle-menu
   */
  toggle: function() {
    this.debounce('toggle', function() {
      this.dispatchEvent(new CustomEvent('toggle-menu', {
        bubbles: true,
        composed: true
      }));
    }, this.debounceDuration);
  },
  /**
   * Fired when user press to logout button
   * @event logout
   */
  /**
   * Closes menu and fires 'logout' 224ms after to avoid transition collisions
   */
  doLogout: function() {
    this.toggle();

    this.async(function() {
      if (!this.preventLogout) {
        this.onLogout();
      } else {
        this.dispatchEvent(new CustomEvent('do-logout', {
          bubbles: true,
          composed: true
        }));
      }
    }, 224);
  },

  /**
   * Do a navigation to access
   */
  onLogout: function() {
    this.reset();
    this.dispatchEvent(new CustomEvent('launch-logout', {
      bubbles: true,
      composed: true
    }));
  },

  /**
   * Fired when siderbar has been closed due to 'Close Session' / 'Logout' pressing
   * @event launch-logout
   */

  /**
   * Fired when user press on an item that has action. The item will name the event.
   * @event item.action
   */

  /**
   * Fired when user press on an item that has action. The item will name the event.
   * @event link-clicked
   * @param action indicates the action to perform within the link
   */

  /**
   * Perform a custom action if item said so. If not it will navigate (default behavior),
   * then it closes the menu.
   */
  _linkClicked: function(e) {
    if (e.model.item.action) {
      this.dispatchEvent(new CustomEvent(e.model.item.action, {
        bubbles: true,
        composed: true
      }));
      e.preventDefault();

      this.dispatchEvent(new CustomEvent('link-clicked', {
        bubbles: true,
        composed: true,
        detail: e.model.item.action
      }));
    }
    if (!e.model.item.status.disableToggle) {
      this.toggle();
    }
  },

  _profile: function() {
    /**
     * Fired when user press the link profile.
     * @event link-profile
     */
    this.dispatchEvent(new CustomEvent('link-profile', {
      bubbles: true,
      composed: true
    }));
  },

  /**
   * Change the avatar when the image can not be loaded for a local image
   */
  _avatarUrlError: function() {
    if (this._avatarUrl === this.defaultAvatarUrl) { //if besides, the default image got error then load the component image
      this._avatarUrl = this.resolveUrl('./images/user-avatar-default.svg');
    } else { //if image from service gots error try with default
      this._avatarUrl = this.defaultAvatarUrl;
    }
  },

  /**
   * Checked Action
   */
  _linkIsButton: function(item) {
    return item.action || !item.link;
  },

  /**
   * Checked hideAvatar, and return class
   */
  _checkedHideAvatart: function(hide) {
    return hide ? 'user--not-avatar' : '';
  },

  /**
   * Set disabled atrribute depends on status of item and user. If item hasn't status or status.showNoLogged or
   * status.showLogged is false the item will be disabled.
   */
  _checkButtonDisabled: function(item, userLogged) {
    return !item.status || item.status && !item.status.showNoLogged && !userLogged || item.status && !item.status.showLogged && userLogged;
  },

  /**
   * Set disabled class depends on status of item and user. If item hasn't status or status.showNoLogged or
   * status.showLogged are false the item will be disabled.
  */
  _checkLinkDisabled: function(item, userLogged) {
    if (!item.status || item.status && !item.status.showNoLogged && !userLogged || item.status && !item.status.showLogged && userLogged) {
      return 'disabled';
    }
  },

  /**
   * Set tabindex depends on status of item and user
  */
  _checktabIndex: function(item, userLogged) {
    if (!item.status || !item.status.showNoLogged && !userLogged || item.status && !item.status.showLogged && userLogged) {
      return -1;
    }
  },

  /**
   * Checked userReminded and loggged, and return class
   */
  _checkedReminded: function(logged, userReminded) {
    return userReminded && !logged ? 'disabled' : '';
  }
});
