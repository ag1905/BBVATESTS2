(function() {
  'use strict';
  Polymer({
    is: 'cells-step-searcher',
    behaviors: [
      CellsBehaviors.i18nBehavior,
      CellsBehaviors.StepPropBehavior,
      CellsBehaviors.StepBasicBehavior
    ],
    properties: {
      /**
       * Flags if is searching mode
       * @type  {Boolean}
       */
      searching: {
        reflectToAttribute: true,
        type: Boolean,
        value: false
      },
      /**
       * Flags when to show the shared zone.
       * @type    {Boolean}
       * @private
       */
      _showShared: {
        computed: '_mustShowShared(collapsed)',
        type: Boolean
      }
    },
    /**
     * Calculates the value of <em>_showShared</em>.
     * @private
     */
    _mustShowShared: function() {
      return this.collapsed !== true;
    }
  });
}());
