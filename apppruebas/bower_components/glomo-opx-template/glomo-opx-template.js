(function() {
  'use strict';
  Polymer({
    is: 'glomo-opx-template',

    hostAttributes: {
      'data-template': true
    },

    behaviors: [
      Polymer.CellsTemplateAnimationBehavior
    ],

    properties: {

      /**
       * The height of the header when it is at its full size.
       *
       * By default, the height will be measured when it is ready.  If the height
       * changes later the user needs to either set this value to reflect the
       * new height or invoke `measureHeaderHeight()`.
       */
      headerHeight: {
        type: Number,
        value: 0
      },

      /**
       * Will be used to delay the firing of 'cells-scroll-complete' event after scrolling into an element.
       * It's a multiple of 2 hundred (200).
       *
       * @type  {Number}
       * @value 4
       */
      scrollTime: {
        type: Number,
        value: 4
      },
      /**
       * Flags if template will use two header configurations.
       * @type  {Boolean}
       */
      doubleHeader: {
        type: Boolean,
        value: false
      },
      /**
       * Header animation timeout (in ms.)
       * Must be equal to CSS animation delay.
       *
       * @type  {Number}
       * @value 400
       */
      _headerAnimationTimeout: {
        type: Number,
        value: 400
      },
      /**
       * Collapsed
       * @type  {Boolean}
       */
      collapseOpened: {
        type: Boolean,
        observer: 'onOpened'
      },
      /**
       * Delay on scroll top
       * @type  {Number}
       */
      delayScrollTop: Number
    },

    listeners: {
      'template-cached': '_resetLayerScroll',
      'change-template-animation': '_onChangeAnimation'
    },

    /**
     * Toggles #app__confirm zone.
     *
     * @params  show {Boolean}
     * @private
     */
    showConfirm: function(opened) {
      this[opened ? 'open' : 'close']();
    },
    /**
     * Open confirm zone
     */
    open: function() {
      this.$.app__confirm.show();
    },
    /**
     * Close confirm zone
     */
    close: function() {
      this.$.app__confirm.hide();
    },
    /**
     * Applies CSS styles for displaying main header.
     */
    showMainHeader: function() {
      if (this.doubleHeader && this.classList.contains('second-header-on')) {
        this.classList.remove('second-header-on');
        this.fire('second-header-off');
      }
    },

    /**
     * Applies CSS styles for hiding main header and displaying secondary one.
     */
    showSecondHeader: function() {
      if (this.doubleHeader) {
        this.classList.add('main-header-off');
        this.fire('main-header-off');
        setTimeout(function() {
          this.classList.remove('main-header-off');
          this.classList.add('second-header-on');
          this.fire('second-header-on');
        }.bind(this), this._headerAnimationTimeout);
      }
    },

    /**
     * Public method for reset Scroll
     */
    resetLayerScroll: function() {
      this.async(function() {
        this._resetLayerScroll();
      }, this.delayScrollTop);
    },

    /**
    * Dispatch event when scoll value changes
    */
    _onContentScroll: function(ev) {
      this.dispatchEvent(new CustomEvent('template-content-scroll', {
        detail: ev.detail.target.scrollTop,
        bubbles: true,
        composed: true
      }));
    },

    /**
     * Move scroll to 0
     */
    _resetLayerScroll: function() {
      Polymer.RenderStatus.afterNextRender(this, function() {
        this.$$('paper-scroll-header-panel').scrollToTop(true);
      });
    },

    _onChangeAnimation: function(ev) {
      ev.stopPropagation();
      this.animationType = ev.detail.animationType;
    },

    /**
     * Scrolls #mainContainer up to the offset top of an inner component.
     * @param payload {Event}
     */
    scrollItemIntoView: function(payload) {
      if (payload && payload instanceof Event) {
        payload = payload.detail;
      }

      payload = payload && payload.hasOwnProperty('data')
        ? payload.data
        : payload;

      if (payload && payload instanceof HTMLElement) {

        this.$.app__section.scroll(payload.offsetTop, true);

        //Obtain current performance
        var now = window.performance && window.performance.now
          ? window.performance.now.bind(window.performance)
          : Date.now;

        //Fire event on calculated time lapse
        setTimeout(
          function() {
            this.fire('cells-scroll-complete', payload);
          }.bind(this),
          (now() / (this.scrollTime * 200))
        );
      }
    },

    /** TODO: iron-collapse should have an spinner or another stuff while summary is being calculated.
     * By this reason, scroll fails because is executed before the summary (with fees) is displayed.
     */
    onOpened: function(value) {
      this.async(function() {
        this.$.app__confirm.scrollIntoView(false);
      }, 400);
    }


    /**
     * Fired on finishing <em>scrollItemIntoView</em>.
     * Event's payload is the scrolled HTMLElement.
     *
     * @event 'cells-scroll-complete'
     */

    /**
     * Fired on hiding main header.
     *
     * @event 'main-header-off'
     */

    /**
     * Fired on displaying secondary header.
     *
     * @event 'second-header-on'
     */

    /**
     * Fired on hiding secondary header.
     *
     * @event 'second-header-off'
     */
  });
}());
