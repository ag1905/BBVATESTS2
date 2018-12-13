Polymer({

  is: 'cells-molecule-skeleton',

  properties: {
    /**
    * Option items repeat
    * @type {Number}
    */
    skeletonItems: {
      type: Number,
      value: 3
    },

    /**
    * Option sub items repeat
    * @type {Number}
    */
    skeletonSubItems: {
      type: Number,
      value: 3
    },
    /**
    * Skeleton Type (account-list or card-list)
    * @type {String}
    */
    skeletonType: {
      type: String,
      observer: '_updateSkeleton'
    },

    /**
    * Skeleton for account list
    * @type {Boolean}
    */
    skeletonAccountList: {
      type: Boolean,
      value: false
    },

    /**
    * Skeleton for cards list
    * @type {Boolean}
    */
    skeletonCardList: {
      type: Boolean,
      value: false
    }
  },

  listeners: {
    'skeleton-screen.transitionend': '_removeDom'
  },

  _updateSkeleton: function() {
    var skeletonType = this.skeletonType.toLowerCase();
    this.skeletonAccountList = skeletonType && (skeletonType === 'account' || skeletonType === 'account-list' || skeletonType === 'accountlist');
    this.skeletonCardList = skeletonType && (skeletonType === 'card' || skeletonType === 'card-list' || skeletonType === 'cardlist');
  },

  /**
  * Create an array of stated size
  * @param  {Number} necessary array size, default 3
  * @return {Array} result
  */
  _createLengthArray: function(lenArray) {
    return new Array(lenArray);
  },

  /**
  * Listen for the transitionend event
  * @param  {event}
  */
  _removeDom: function(event) {
    if (this.parentNode.$$) {
      if (this.parentNode.$$('cells-molecule-skeleton') !== null) {
        this.parentNode.removeChild(this);
      }
    }
  }

});