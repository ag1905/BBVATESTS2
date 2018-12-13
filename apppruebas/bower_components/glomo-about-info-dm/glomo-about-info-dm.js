(function() {

  'use strict';

  Polymer({

    is: 'glomo-about-info-dm',

    behaviors: [
      CellsBehaviors.DeviceBehavior
    ],

    properties: {

      /**
       * Device info
       */
      deviceInfo: {
        type: Array,
        notify: true,
        value: function() {
          return [];
        }
      },
      /**
       * App version
       * @type String
       */
      appVersion: {
        type: String,
        value: ''
      },
      /**
       * Compile Version
       * @type String
       */
      compileVersion: {
        type: String,
        value: ''
      }
    },

    /**
     * Set formatted device info
     */
    setDeviceInfo: function() {
      this.dispatchEvent(new CustomEvent('open-control-veil', {
        bubbles: true,
        composed: true
      }));
      let deviceInfo = this.getDeviceInfo();
      let result = [
        {
          key: 'glomo-about-app-version',
          value: this.appVersion
        }
      ];
      if (this.compileVersion !== '') {
        result.push({
          key: 'glomo-about-compile-version',
          value: this.compileVersion
        });
      }
      result.push(
        {
          key: 'glomo-about-operation-system',
          value: deviceInfo.OS
        }, {
          key: 'glomo-about-operation-system-version',
          value: deviceInfo.version
        }, {
          key: 'glomo-about-device-model',
          value: deviceInfo.model
        }
      );
      this.set('deviceInfo', result);
      this.async(function() {
        this.dispatchEvent(new CustomEvent('close-control-veil', {
          bubbles: true,
          composed: true
        }));
      }, 1500);
    },

    /**
     * Get device info from user agent
     */
    getDeviceInfo() {
      let helper = window.navigator.userAgent.match(/\(([^)]+)\)/)[1].split(';');
      return {
        OS: this._getOS() || helper[0],
        version: helper[1],
        model: helper[2] || helper[0]
      };
    },
    /**
     * Get Device OS
     */
    _getOS() {
      return (this.isIOS) ? 'iOS' : (this.isAndroid) ? 'Android' : false;
    }
  });
}());
