(function() {

  'use strict';

  Polymer({

    is: 'cells-navigation-bar',

    hostAttributes: {
      role: 'navigation'
    },

    properties: {
      /**
       * Index of the current selected item.
       */
      selected: {
        type: Number,
        notify: true
      },
      /**
       * Menu items.
       *
       * ```json
       * [{
       *   label: 'translation-key',
       *   icon: 'icon-id',
       *   id: 'itemId',
       *   link: '#/target'
       * }]
       * ```
       */
      items: {
        type: Array,
        observer: '_initNotificationList',
        value: function() {
          return [
            {
              'label': 'Tarjetas',
              'icon': 'coronita:BBVAcontigo',
              'link': '#'
            },
            {
              'label': 'Check Up',
              'icon': 'coronita:frequency',
              'link': '#'
            },
            {
              'label': 'Para mí',
              'icon': 'coronita:myprofile',
              'link': '#'
            },
            {
              'label': 'Notificaciones',
              'icon': 'coronita:email',
              'link': '#'
            }
          ];
        }
      },

      /**
       * Icon size of each item.
       */
      iconSize: {
        type: Number,
        value: 18
      },

      preventNavigation: {
        type: Boolean,
        value: false
      },

      demoItem: {
        type: Boolean,
        value: false
      },
      /**
       * Boolean to disable the assignment
       * of selected item on click
       * to the property selected
       */
      disableSelected: Boolean
    },

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    _initNotificationList: function() {
      var l = this.items.length;
      for (var i = 0; i < l; i++) {
        this.items[i].notificationIndex = 0;
      }
    },

    _onSelect: function(e) {
      if (this.preventNavigation) {
        e.preventDefault();
      }

      e.stopPropagation();

      if (!this.disableSelected) {
        this.selected = e.model.index;
      }

      this.dispatchEvent(new CustomEvent('selected-item', {
        bubbles: true,
        composed: true,
        detail: e.model.item
      }));
    },

    _checkedSelected: function(index, selected) {
      return (index === selected) ? 'iron-selected' : '';
    },

    /**
     * Prevents removing href attribute of links if link property is not defined.
     * Links without href attribute are not focusable.
     */
    _computeLink: function(link) {
      if (!link || !link.trim()) {
        return '#';
      } else {
        return link;
      }
    }

    /**
     * Fired after selecting an item.
     * @event selected-item
     * @param {Object} event.model.item label, icon, id and link properties.
     */

  });

}());
