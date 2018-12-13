(function() {

  'use strict';

  Polymer({

    is: 'cells-sign',

    behaviors: [
      window.CellsBehaviors.i18nBehavior
    ],

    properties: {
			/**
			 * Image of panel view
			 */
      imgSrc: {
        type: String
      },
      /**
       * Sign text before [signform] area
       */
      signText: {
        type: String,
        value: 'cells-sign-text'
      }
    }
  });

}());
