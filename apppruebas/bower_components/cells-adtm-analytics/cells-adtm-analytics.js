(function (window) {
  'use strict';

  Polymer({

    is: 'cells-adtm-analytics',

    behaviors: [CellsBehaviors.analyticsBehavior],

    /**
      * Entry point node of our application
    */
    properties: {

      /**
        * Name of the data layer to expose in the window object
      */
      dtm: {
        type: String,
        value: 'digitalData'
      },

      /**
        * ID of the entry point of our application used to listen the events.
      */
      mainNode: String,

      /**
        * Object to override default manual values of the DataLayer for the application
      */
      customConfig: {
        type: Object,
        observer: '_setCustomConfig'
      }
    },

    created: function () {
      this._addDataLayer();
      this._addADBHelper();
    },

    attached: function () {
      this.startTracking(this.mainNode);
    },

    detached: function () {
      this.stopTracking();
    },

    ready: function () {
      if (window.bgdmjs) {
        this.data = new window.bgdmjs_analitycs.default.DataLayer();
      } else {
        return;
      }
    },

    /**
      * Fires the event to the Adobe Tag Manager.
    */
    sendEvent: function (action) {
      _satellite.track(action);
    },

    /**
      * Observer to add custom configuration for the DataLayer
    */
    _setCustomConfig: function (config) {
      if (config) {
        this.setVars(config);
      }
    },

    /**
      * Adds bgdmjs-analytics.min.js into the head of the application.
    */
    _addDataLayer: function() {
      var script = document.createElement('script');
      script.src = this.resolveUrl('../analytics/build/bgdmjs-analytics.min.js');
      document.getElementsByTagName('head')[0].appendChild(script);
    },

    /**
      * Adds ADB_Helper library to the head of the application.
    */
    _addADBHelper: function () {
      var script = document.createElement('script');
      script.src = this.resolveUrl('ADB_Helper.js');
      document.getElementsByTagName('head')[0].appendChild(script);
    },

    /**
      * Receive a payload of data to insert into the DataLayer
    */
    updateDataLayer: function (payload) {
      this.setVars(payload);
    },

    /**
      * Get the event to send to the tool
    */
    _getAction: function (data, keys) {
      return data[keys.shift()];
    },

    /**
      * Get the analytics data from the payload
    */
    _getData: function (data, keys) {
      return data[keys.pop()];
    },


    _setDataLayer: function () {
      window[this.dtm] = this.data;
    },

    /**
      * Set the footprint for every view
    */
    _setFootPrint: function (e) {
      var trackingInfo = e.detail.spec.properties.analytics;
      var keys;
      var action;
      var data;
      if (trackingInfo) {
        keys = Object.keys(trackingInfo);
        action = this._getAction(trackingInfo, keys);
        data = this._getData(trackingInfo, keys);
        this.setVars(data);
        this._setDataLayer(data);
        this.sendEvent(action);
      }
    },

    /**
      * Listen custom event from a component, set the vars and fire the event to the Adobe Tag Manager.
    */
    _trackEvent: function (e) {
      var trackingInfo = e.detail.detail;
      var keys = Object.keys(trackingInfo);
      var action = this._getAction(trackingInfo, keys);
      var data = this._getData(trackingInfo, keys);
      this.setVars(data);
      this._setDataLayer();
      this.sendEvent(action)
    }


  });
} (window));
