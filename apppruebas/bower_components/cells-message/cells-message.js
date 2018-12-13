(function() {

  'use strict';

  Polymer({

    is: 'cells-message',

    behaviors: [
      CellsBehaviors.i18nBehavior
    ],

    properties: {
     /**
      * Content for Top Title
      */
      topSubtitle: {
        type: String
      },
     /**
      * Content for Title
      */
      title: {
        type: String
      },
     /**
      * Content for subTitle
      */
      subtitle: {
        type: String
      },
     /**
      * Content message
      */
      contentText: {
        type: String
      },
     /**
      * Content for list
      */
      list: {
        type: Array
      },
     /**
      * Boolean for list ordered
      */
      listOrder: {
        type: Boolean,
        value: false
      }
    }
  });

}());
