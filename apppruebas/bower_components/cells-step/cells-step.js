/* global CellsBehaviors */
(function(CellsBehaviors) {

  'use strict';

  Polymer({

    is: 'cells-step',

    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.StepPropBehavior,
      CellsBehaviors.StepBasicBehavior
    ]
  });

}(CellsBehaviors));
