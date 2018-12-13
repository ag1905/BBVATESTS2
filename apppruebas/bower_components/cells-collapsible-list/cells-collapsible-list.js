(function() {

  'use strict';

  Polymer({

    is: 'cells-collapsible-list',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      items: {
        type: Array,
        observer: 'init'
      },

      /* Number of items to show on state half collapsed */
      nItemsOnSemiCollapsed: {
        type: Number,
        value: 2
      },

      /* Show some items of the list determined by nItemsOnSemiCollapsed */
      halfCollapsed: {
        type: Boolean,
        value: true,
        reflectToAttribute: true,
        notify: true,
        observer: '_setHalfState'
      },

      /* Show the whole list */
      complete: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_setFullState'
      },

      /* Hide the list */
      collapsed: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_setCollapseState'
      },

      /* Hide the list and buttons*/
      isHidden: {
        type: Boolean,
        reflectToAttribute: true,
        notify: true,
        observer: '_resetState'
      },

      /* Check if the full list is enable to hide*/
      _readyToCollapse: {
        type: Boolean
      },

      /* Start position of user tap */
      _startY: {
        type: Number
      },

      /* End position of user tap */
      _endY: {
        type: Number
      },

      /*To add class to button hide  */
      hideButtonClass: {
        type: String
      },

      closeListBtn: {
        type: String,
        value: 'cells-collapsible-list-close-list'
      }
    },

    listeners: {
      'scrollContainer.down': '_setInitialPosition',
      'scrollContainer.up': '_handleTrack'
    },

    init: function() {
      Polymer.RenderStatus.afterNextRender(this, function() {
        this.halfCollapsed = this.complete ? false : true;
        this._setHeight();
      });
    },

    _setHeight: function() {
      if (this.items && this.items.length > 0) {
        this.isHidden = false;
        if (this.complete) {
          this._setFullState();
          this._readyToCollapse = true;
        } else if (this.collapsed) {
          this._setCollapseState();
        } else {
          this._setHalfState();
          this._dispatchState('half-list-state');
        }
      } else {
        this.style.height = 0;
        this._dispatchState('no-list-state');
      }
    },

    _resetState: function() {
      if (this.isHidden) {
        this.halfCollapsed = false;
        this.complete = false;
        this.collapsed = false;
        this.classList.remove('fromHalf');
      }
    },

    _setHalfState: function() {
      if (this.halfCollapsed) {
        this.style.height = this._getTotalHeigth() + 'px';
        this.collapsed = false;
        this.complete = false;
        this.isHidden = false;
        this.classList.remove('fromHalf');
      }
    },

    _setFullState: function() {
      if (this.complete) {
        this.style.height = '100%';
        this.collapsed = false;
        this.halfCollapsed = false;
        this.classList.remove('fromHalf');
        this.isHidden = false;
        this._dispatchState('full-list-state');
      }
    },

    _setCollapseState: function() {
      if (this.collapsed) {
        if (this.halfCollapsed) {
          this.halfCollapsed = false;
          this.classList.add('fromHalf');
        }
        this.style.height = 'calc(100vh - (100vh - 50px))';
        this.complete = false;
        this.isHidden = false;
        this._dispatchState('collapsed-list-state');
      }
    },

    _getTotalHeigth: function() {
      var i = 0;
      var elHeigth = 0;
      var nItems;

      if (this.items && this.items.length) {
        nItems = this.nItemsOnSemiCollapsed <= this.items.length ? this.nItemsOnSemiCollapsed : this.items.length;

        for (i; i < nItems; i++) {
          elHeigth += this.$$('#item-' + this.items[i].id).offsetHeight;
        }
      }

      return elHeigth;
    },

    _setInitialPosition: function(e) {
      this._startY = e.detail.y;
    },

    _handleTrack: function(e) {
      this._endY = e.detail.y;

      //GOING UP
      if (this._startY > this._endY) {
        this._checkScrollUp();

      //GOING DOWN
      } else if (this._startY < this._endY) {
        this._checkScrollDown();
      }
    },

    _checkScrollUp: function() {
      if (this.halfCollapsed) {
        //SET FULL STATE
        this.complete = true;
        this._readyToCollapse = true;
      } else if (this.complete) {
        //DISABLE COLLAPSE OPTION
        this._readyToCollapse = false;
        this.hideButtonClass = 'with-shadow';
      }
    },

    _checkScrollDown: function() {
      if (this.$.scrollContainer.scrollTop === 0) {
        this.hideButtonClass = '';

        //SET COLLAPSE STATE AND COLLAPSABLE
        if (this._readyToCollapse && this.complete) {
          this.collapsed = true;
          this.halfCollapsed = false;
        } else {
          //ENABLE COLLAPSE
          this._readyToCollapse = true;
        }
      } else {
        this.hideButtonClass = 'with-shadow';
      }
    },

    fireModel: function(e) {
      this.dispatchEvent(new CustomEvent('item-selected', {
        bubbles: true,
        composed: true,
        detail: {
          main: e.model.item.main,
          id: e.model.item.links[0].id,
          type: e.model.item.extraClass === 'primary' ? 'branch' : 'atm',
          distance: e.model.item.distance
        }
      }));
    },

    _showList: function() {
      this.complete = true;
    },

    _hideList: function() {
      this.collapsed = true;
    },

    _dispatchGoRoute: function(e) {
      this.dispatchEvent(new CustomEvent('go-route', {
        bubbles: true,
        composed: true,
        detail: e.model.item.geolocation
      }));
    },

    _dispatchState: function(ev) {
      this.dispatchEvent(new CustomEvent(ev, {
        bubbles: true,
        composed: true
      }));
    },
  });
}());