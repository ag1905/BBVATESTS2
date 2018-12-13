// auto calculated properties
export const AUTO_CALCULATED_RESERVED_ANALYTICS_PROPERTIES = [
  'page.pageInfo.pageName',
  'page.pageInfo.server',
  'user.device.userAgent',
  'user.device.mobile'
];

export const ADOBE_PROVIDER_SCRIPT_SKELETON = '//assets.adobedtm.com/';
export const GOOGLE_PROVIDER_SCRIPT = 'https://www.google-analytics.com/analytics.js';

export const DEFAULT_DATA_LAYER_NAME = 'digitalData'; // Name of the data layer to expose in the window object

export const FULL_CHANNEL_VALUE_PATH = '*';

export const ANALYTICS_WORDS = {
  PRIVATE: 'privada',
  PUBLIC: 'publica',
  YES: 'si',
  NO: 'no'
};

// Format taken from:
// https://drive.google.com/file/d/0B1LHjxcYuyz1ckJQMThpYTBqM1U/edit
export const DEFAULT_DATA_LAYER = {
  versionDL: '1.10',
  pageInstanceID: 'de', // 'de', 'pro', 'pre', 'qa', 'ei', 'aus'
  page: {
    pageInfo: {
      pageName: '', // 'privada:personas:prestamos:creditos de consumo'
      pageIntent: '', // 'informacion' / 'transaccion' / 'landing page' / 'home' / 'subhome'/ 'subhome 1' / 'catalogo de producto'
      pageSegment: '', // 'Personas', 'Premium', 'Pymes y Negocios', 'Empresas', 'Corporativos', 'Instituciones', 'General'
      sysEnv: '', // 'escritorio', 'web-movil', 'app'
      version: '', // '1.1'
      channel: '', // 'online', 'branch', 'atm', 'call center'
      language: '', // 'ES'
      geoRegion: '', // 'US'
      level1: '', // 'home'
      level2: '', // 'prestamos'
      level3: '', // 'credito consumo'
      level4: '', // 'libre inversión'
      level5: '', // ...other breadcrumb
      level6: '', // ...other breadcrumb
      level7: '', // ...other breadcrumb
      level8: '', // ...other breadcrumb
      level9: '', // ...other breadcrumb
      level10: '', // ...other breadcrumb
      area: '', // 'publica' / 'privada'
      server: '', // window.location.hostname
      bussinessUnit: '', // 'BBVA Frances' / 'BBVA Spain' / 'BBVA Bancomer'
      errorPage: '' // '404' / '401' / '400' / '403' / '500'
    },
    pageActivity: {
      search: {
        onSiteSearchResults: '', // 11 / 52 / <search result count>
        onSiteSearchTerm: '', // 'tarjetas' / 'bbva ofertas' / '<search phrase>'
        originalPage: '' // 'privada:personas:seguros'
      },
      nameOfVideoDisplayed: '' // 'AfMhVTfrK4k'
    }
  },
  internalCampaign: {
    attributes: [
      {
        location: '', // 'superior izquierda', 'superior derecha', 'superior centro', 'centro', 'centro izquierda', 'centro derecha', 'inferior izquierda', 'inferior derecha', 'inferior centro'
        campaignFormat: '', // 'carrusel', 'banner home', 'bocadillo', 'banner crm', 'ventana bloqueante', 'zona one click'
        collectiveCode: '', // 123234234
        campaignName: '', // 'vete de vacaciones con tu prestamo'
        product: '', // 'anticipo nomina'
        productCode: '', // 12234
        quantity: '' // '750 $'
      }
    ],
    event: {
      eventInfo: {
        eventName: '', // 'IntCmpClick'
        siteActionName: '' // 'superior izquierda:bocadillo:25:contrata tu cuenta blue:cuenta blue:123:720$' (format <location:campaign-format:collective-code:campaign-name:product:productCode:quantity>)
      }
    }
  },
  user: {
    device: {
      userAgent: '', // 'Mozilla/5.0' / 'AppleWebKit/537.36' / 'Chrome/49.0.2623.112' / 'Safari/537.36'
      mobile: '' // 'si' / 'no'
    },
    userState: '', // 'logado' / 'no logado'
    profileID: '', // '15DBg54j'
    segment: {
      global: '', // '001002' (country code + client type code)
      profile: '' // 'preaprobado' / 'aprobado' / 'gente bbva'
    },
    gender: '', // 'masculino' / 'femenino' / 'desconocido'
    country: '', // 'Argentina'
    state: '', // 'Buenos Aires'
    age: '' // 25
  },
  application: {
    transactionID: '', // '1234567'
    application: {
      type: '', // 'contratacion' / 'formulario' / 'operativa' / 'consulta' / 'simulador' / 'alta clientes' / 'autogestion'
      name: '' // 'prestamo one click' / 'tarjeta visa oro'
    },
    fulfilllmentModel: '', // 'online' / 'offline' / 'online / offline'
    amount: '', // '1000' / '198' / '231'
    paymentAmount: '', // '100000' / '1940000' / '231000'
    numberOfPayments: '', // 8 / 5 / 20
    paymentDate: '', // '2016-02- 15' / '15' (YYYY-MM- DD o DD si es el día de cada mes en que se va a pagar).
    paymentType: '', // 'unico' / 'a plazos'
    serviceCharge: '', // '38' / '15' / '20'
    typology: '', // 'tarjeta avianca lifemiles platinum'
    currency: '', // 'USD' / 'EUR' / 'COP'
    programTypeHired: '', // 'cliente fiel'
    offer: '', // 'tasa de interes 0%'
    operationNumber: '', // '1234567'
    term: '', // '7' / '3' / '14'
    interestRate: '', // '7' / '3' / '14'
    process: '', // 'transferencia' / 'traspasos' / 'aportaciones'
    step: '', // '4 confirmar' / '3 clave sms'
    interactionLevel: '', // 'check terminos y condiciones'
    state: '', // 'inicio' / 'finalizado' / 'contratado' / 'aprobado' / 'rechazado' / 'en revision'
    errorType: '' // 'clave incorrecta'
  },
  product: {
    primaryCategory: '', // 'prestamos' / 'tarjetas' / 'cuentas' / 'seguros' / 'inversiones' / 'depositos'
    productSubtype: '', // 'tarjeta debito' / 'cuenta de ahorro' / 'seguro vida' / 'préstamo hipotecario'
    productName: '' // 'tarjeta visa oro' / 'mastercard heroes' / 'seguro oncologico' / 'cuenta de ahorro blue kids' / 'préstamo hipotecario tradicional'
  }
};

export default {
  DEFAULT_DATA_LAYER,
  AUTO_CALCULATED_RESERVED_ANALYTICS_PROPERTIES,
  ANALYTICS_WORDS,
  FULL_CHANNEL_VALUE_PATH,
  ADOBE_PROVIDER_SCRIPT_SKELETON,
  GOOGLE_PROVIDER_SCRIPT,
  DEFAULT_DATA_LAYER_NAME
};
