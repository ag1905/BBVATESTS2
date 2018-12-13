(function() {

  'use strict';

  Polymer({

    is: 'glomo-list-apps-dm',
    properties: {
      appsCollection: {
        type: Array,
        observer: '_setAction',
        notify: true,
        value: function() {
          return [{
            img: 'app-bbva-wallet.png',
            label: 'cells-bbva-wallet',
            linkGooglePlay: 'com.bbva.bbvawalletmx',
            linkAppStore: 'bbva-wallet-mexico/id970582311?mt=8'
          },
          {
            img: 'app-bbva-send.png',
            label: 'cells-bbva-send',
            linkGooglePlay: 'com.bbvasend.inicio',
            linkAppStore: 'bbva-send/id1044879220?mt=8'
          },
          {
            img: 'app-multipagos.png',
            label: 'cells-bbva-multipay',
            linkGooglePlay: 'com.bbva.pagosbancomer',
            linkAppStore: 'pagos-bancomer/id1118007135?mt=8'
          },
          {
            img: 'app-nomina-bancomer.png',
            label: 'cells-bancomer-my-paysheet',
            linkGooglePlay: 'com.bbva.nominados',
            linkAppStore: 'mi-nomina-bancomer/id1166341405?mt=8'
          },
          {
            img: 'app-linea-bancomer.png',
            label: 'cells-bancomer-line',
            linkGooglePlay: 'com.bbva.conmigo',
            linkAppStore: 'l%C3%ADnea-bancomer/id990830942?mt=8'
          },
          {
            img: 'app-bbva-plan.png',
            label: 'cells-bbva-plan',
            linkGooglePlay: 'com.bancomer.bbva.bbvasave',
            linkAppStore: 'bbva-plan/id1157146764?mt=8'
          }];
        }
      }
    },

    _setAction: function(apps) {
      this.dispatchEvent(new CustomEvent('open-control-veil', {
        bubbles: true,
        composed: true
      }));
      apps.map(function(app) {
        app.action = (/iPhone/).test(window.navigator.userAgent) ? 'https://itunes.apple.com/us/app/' + app.linkAppStore : 'https://play.google.com/store/apps/details?id=' + app.linkGooglePlay;
      });
      this.async(function() {
        this.dispatchEvent(new CustomEvent('close-control-veil', {
          bubbles: true,
          composed: true
        }));
      }, 1500);
    }
  });
}());
