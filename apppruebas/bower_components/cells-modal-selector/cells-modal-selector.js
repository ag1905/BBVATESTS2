(function() {
  'use strict';

  Polymer({

    is: 'cells-modal-selector',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
      /**
       * @type {Boolean}
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true
      },
      /**
       * Selected
       * @type {Number}
       */
      selected: {
        type: Number,
        notify: true
      },
      /**
       * List of items loaded
       * @type {Object}
       *```
       *[{
       *  'id': '004',
       *  'name': 'Other item 4'
       *}]
       *```
       */
      items: {
        type: Array
      },
      /**
       * Item selected
       * @type {Object}
       */
      itemSelected: {
        type: Object,
        notify: true
      },

      /**
       * Auto close on select item
       * @type {Object}
       */
      autoClose: {
        type: Boolean,
        value: true
      },

      /**
       * Target where a11y will be applied
       */
      target: {
        type: Object,
        value: function() {
          return this.querySelector('li');
        }
      }
    },
    /**
     * On click option
     */
    onSelectItem: function(ev) {
      this.set('selected', ev.model.index);
      this.set('itemSelected', ev.model.item);

      if (this.autoClose) {
        this.close();
      }
    },
    /**
     * Open modal
     */
    open: function() {
      this.set('opened', true);
    },
    /**
     * Close modal
     */
    close: function() {
      this.set('opened', false);
    },
    /**
     * If has image return class name
     */
    _hasImage: function(image) {
      if (image) {
        return 'cells-modal-selector-img';
      }
    },

    /**
     * Checked selected
     */
    _checkedSelected: function(selected, index) {
      return selected === index ? 'selected' : '';
    },
    /**
     * Get image
     */
    _getImage: function(image) {
      return image ? 'background-image: url(' + image + ')' : '';
    },

    _onEnter: function(event) {
      var target = event.detail.keyboardEvent.target;
      var item = this.$.itemListIterator.itemForElement(target);
      var index = this.$.itemListIterator.indexForElement(target);

      this.onSelectItem({
        model: {
          item: item,
          index: index
        }
      });
    },

    _selectPreviousItem: function(event) {
      var element = event.detail.keyboardEvent.target.previousElementSibling;
      if (element) {
        element.focus();
      }
    },

    _selectNextItem: function(event) {
      var element = event.detail.keyboardEvent.target.nextElementSibling;
      if (element) {
        element.focus();
      }
    },

    reset: function(payload) {
      if (payload) {
        this.set('selected', payload.selected);
        this.set('itemSelected', payload.name);
      } else {
        this.set('selected', undefined);
        this.set('itemSelected', {});
      }

      this.$.modal.querySelectorAll('li.selected').forEach(function(item) {
        item.classList.remove('selected');
      });
    }
  });
}());