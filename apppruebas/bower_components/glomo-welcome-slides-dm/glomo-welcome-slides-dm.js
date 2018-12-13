(function() {

  'use strict';

  Polymer({

    is: 'glomo-welcome-slides-dm',

    properties: {
      slides: {
        notify: true,
        type: Array,
        value: function() {
          return [
            {
              'animation': 'videos/welcome/step3.apng',
              'title': '¡No más filas!',
              'text': 'Realiza transferencias, consulta tu saldo, paga servicios y maneja tu dinero sin ir a una sucursal',
              'backgroundColor': '#003E7B',
              'backgroundImage': 'https://bbva-files.s3.amazonaws.com/cells/assets/glomo/images/access/fractal-bbva-core-blue.svg',
              'delay': 6020
            },
            {
              'animation': 'videos/welcome/step4.apng',
              'title': 'Siempre informado',
              'text': 'Entérate al instante de cualquier movimiento importante en tus cuentas o tarjetas.',
              'backgroundColor': '#00CDCD',
              'backgroundImage': 'https://bbva-files.s3.amazonaws.com/cells/assets/glomo/images/access/fractal-bbva-core-blue.svg',
              'delay': 5500
            }
          ];
        }
      }
    }
  });
}());