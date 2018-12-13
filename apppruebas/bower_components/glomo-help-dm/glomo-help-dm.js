(function() {

  'use strict';

  Polymer({

    is: 'glomo-help-dm',

    properties: {

      helpInfo: {
        type: Object,
        notify: true
      },

      helpOptions: {
        type: Array,
        notify: true,
        value: function() {
          return [
            'glomo-help-info-option-1',
            'glomo-help-info-option-2',
            'glomo-help-info-option-3',
            'glomo-help-info-option-4'
          ];
        }
      },

      img: {
        type: String,
        notify: true,
        value: 'images/apps/app-bbva-help.png'
      },
      /**
       * Flag to enable Help Info Additional Content
       */
      setAdditionalContent: {
        type: Boolean,
        value: false
      },
      /**
       * Aditional Content
       * @type Object
       */
      helpAdditionalContent: {
        type: Object,
        notify: true
      },
      /**
       * Phone Number
       */
      tel: {
        type: String,
        value: '018002262663'
      }
    },

    setPlatform: function() {
      this.dispatchEvent(new CustomEvent('open-control-veil', {
        bubbles: true,
        composed: true
      }));
      var platform = this._getPlatform();
      this.set('helpInfo', {
        header: 'glomo-help-header-message',
        footer: 'glomo-help-footer-message',
        tel: this.tel,
        platform: platform
      });
      if (this.setAdditionalContent === true) {
        this.set('helpOptions', [
          'glomo-help-info-option-1',
          'glomo-help-info-option-2'
        ]);
        this.set('helpAdditionalContent', {
          paragraph: 'glomo-help-additional-paragraph',
          options: [
            'glomo-help-additional-option-1',
            'glomo-help-additional-option-2',
            'glomo-help-additional-option-3'
          ],
          callButton: 'glomo-help-additional-call-button'
        });
      }
      this.async(function() {
        this.dispatchEvent(new CustomEvent('close-control-veil', {
          bubbles: true,
          composed: true
        }));
      }, 1500);
    },

    _getPlatform: function() {
      return (/iPhone/).test(window.navigator.userAgent)
        ? { shop: 'glomo-help-platform-ios', link: 'http://appstore.com/lineabancomer' }
        : { shop: 'glomo-help-platform-android', link: 'https://play.google.com/store/search?q=lineabancomer' };
    }
  });
}());