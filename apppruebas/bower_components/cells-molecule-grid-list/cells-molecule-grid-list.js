(function() {

  'use strict';

  Polymer({

    is: 'cells-molecule-grid-list',

    behaviors: [
      Polymer.Templatizer,
      Polymer.IronResizableBehavior
    ],

    properties: {
      /**
       * List of items to display.
       */
      list: {
        type: Array,
        value: function() {
          return [];
        },
        observer: '_resetGrid'
      },

      /**
       * Number of columns per row.
       */
      columns: {
        type: Number,
        reflectToAttribute: true
      },

      /**
      * Margin between columns in fixed mode.
      */
      columnMargin: {
        type: Number,
        value: 32
      },

      /**
      * Fixed width of column.
      */
      columnSize: {
        type: Number,
        value: 280
      },

      /**
      * Use fixed size columns instead of flexible columns.
      */
      columnSizeFixed: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * grid with borders inside and outside
       */
      withBorders: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * grid with borders only inside
       */
      borderInside: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
      * grid without borders
      */
      noBorders: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    },

    observers: [
      '_resetStyles(columnSize, columnMargin, columnSizeFixed, noBorders)'
    ],

    listeners: {
      'iron-resize': '_resetGrid'
    },

    ready: function() {
      var template = Polymer.dom(this).querySelector('template');

      if (template) {
        this.templatize(template);
      } else {
        var templateList = Polymer.dom(this.root).querySelector('#templateList');
        templateList.remove();
        var index = 0;
        this.removeAttribute('list');
        this.getContentChildren().forEach(function(children) {
          var container = Polymer.dom(this.root).querySelector('.container');
          var list = this.create('li', {className: 'list__item'});
          var link = this.create('a', {className: 'link__item'});
          link.setAttribute('data-item', 'item-' + index);
          link.setAttribute('href', '#');
          list.appendChild(link);
          link.appendChild(children);
          container.appendChild(list);
          index++;
        }, this);
      }
    },

    _onDomChange: function(e) {
      var template = Polymer.dom(e).rootTarget;
      var container;
      var instance;

      if (template.items) {
        template.items.forEach(function(item, index) {
          container = Polymer.dom(this.$$('[data-item=item-' + index + ']'));
          instance = this.stamp({ item: item });

          container.appendChild(instance.root);
        }, this);
      }
    },

    _resetGrid: function() {
      if (this.list.length) {
        var totalItemWidth = this.columnSize + this.columnMargin;
        var maxItemsPerRow = Math.floor(this.clientWidth / totalItemWidth);
        var itemsPerRow = (maxItemsPerRow > this.list.length) ? this.list.length : maxItemsPerRow;
        if (this.columnSizeFixed && (this.clientWidth > totalItemWidth)) {
          this.$.grid.style.width = (itemsPerRow * totalItemWidth) + 1 + 'px';
        }
      }
    },

    _resetStyles: function(size, margin, fixed) {
      if (fixed) {
        this.customStyle['--cells-molecule-grid-list-column-size-fixed-width'] = size + 'px';
        this.customStyle['--cells-molecule-grid-list-column-size-fixed-margin'] = (margin / 2) + 'px';
        this.updateStyles();
        this._resetGrid();
      }
    }
  });

}());
