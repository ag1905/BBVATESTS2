Polymer({

  is: 'cells-molecule-spinner',

  behaviors: [
    CellsBehaviors.i18nBehavior
  ],

  properties: {
    /**
     * Informative message.
     */
    message: {
      type: String,
      value: ''
    },

    /**
     * Informative messages of process spinner.
     */
    messages: {
      type: Array,
      observer: 'reset',
      value: function() {
        return [
          'cells-molecule-spinner-loading-products',
          'cells-molecule-spinner-loading-credentials',
          'cells-molecule-spinner-loading-connection',
        ];
      }
    },

    /**
     * Type Process Spinner
     */
    process: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: 'init'
    },

    /**
     * Current Process
     */
    currentProcess: Number,

    /**
     * Delay first process
     */
    delay: Number,

    /**
     * If true, pause spinner and show finish tick.
     */
    finish: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * Icon to show while spinner play.
     */
    startIcon: {
      type: String,
      value: ''
    },

    /**
     * Icon to show when spinner finish.
     */
    endIcon: {
      type: String,
      value: ''
    },

    _icon: String
  },

  observers: [
    '_iconChange(startIcon, endIcon, finish)'
  ],

  /**
   * Icon Change after set finish
   */
  _iconChange: function(startIcon, endIcon, finish) {
    this._icon = finish ? endIcon : startIcon;
  },
  /**
   * Init process
   */
  init: function(enabled) {
    if (enabled) {
      this.reset();
    }
  },
  /**
   * Reset process
   */
  reset: function() {
    this.currentProcess = 0;
    this.message = this.messages && this.messages[0];
  },
  /**
   * Start spinner process and move the fake first step after delay
   */
  startProcess: function() {
    this.async(function() {
      this.nextProcess();
    }, this.delay);
  },
  /**
   * Next step in spinner process
   */
  nextProcess: function() {
    this.currentProcess = this.currentProcess + 1;
    this.message = this.messages && this.messages[this.currentProcess];
  }
});
