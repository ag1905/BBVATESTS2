(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cells"] = factory();
	else
		root["cells"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// auto calculated properties
var AUTO_CALCULATED_RESERVED_ANALYTICS_PROPERTIES = exports.AUTO_CALCULATED_RESERVED_ANALYTICS_PROPERTIES = ['page.pageInfo.pageName', 'page.pageInfo.server', 'user.device.userAgent', 'user.device.mobile'];

var ADOBE_PROVIDER_SCRIPT_SKELETON = exports.ADOBE_PROVIDER_SCRIPT_SKELETON = '//assets.adobedtm.com/';
var GOOGLE_PROVIDER_SCRIPT = exports.GOOGLE_PROVIDER_SCRIPT = 'https://www.google-analytics.com/analytics.js';

var DEFAULT_DATA_LAYER_NAME = exports.DEFAULT_DATA_LAYER_NAME = 'digitalData'; // Name of the data layer to expose in the window object

var FULL_CHANNEL_VALUE_PATH = exports.FULL_CHANNEL_VALUE_PATH = '*';

var ANALYTICS_WORDS = exports.ANALYTICS_WORDS = {
  PRIVATE: 'privada',
  PUBLIC: 'publica',
  YES: 'si',
  NO: 'no'
};

// Format taken from:
// https://drive.google.com/file/d/0B1LHjxcYuyz1ckJQMThpYTBqM1U/edit
var DEFAULT_DATA_LAYER = exports.DEFAULT_DATA_LAYER = {
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
    attributes: [{
      location: '', // 'superior izquierda', 'superior derecha', 'superior centro', 'centro', 'centro izquierda', 'centro derecha', 'inferior izquierda', 'inferior derecha', 'inferior centro'
      campaignFormat: '', // 'carrusel', 'banner home', 'bocadillo', 'banner crm', 'ventana bloqueante', 'zona one click'
      collectiveCode: '', // 123234234
      campaignName: '', // 'vete de vacaciones con tu prestamo'
      product: '', // 'anticipo nomina'
      productCode: '', // 12234
      quantity: '' // '750 $'
    }],
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

exports.default = {
  DEFAULT_DATA_LAYER: DEFAULT_DATA_LAYER,
  AUTO_CALCULATED_RESERVED_ANALYTICS_PROPERTIES: AUTO_CALCULATED_RESERVED_ANALYTICS_PROPERTIES,
  ANALYTICS_WORDS: ANALYTICS_WORDS,
  FULL_CHANNEL_VALUE_PATH: FULL_CHANNEL_VALUE_PATH,
  ADOBE_PROVIDER_SCRIPT_SKELETON: ADOBE_PROVIDER_SCRIPT_SKELETON,
  GOOGLE_PROVIDER_SCRIPT: GOOGLE_PROVIDER_SCRIPT,
  DEFAULT_DATA_LAYER_NAME: DEFAULT_DATA_LAYER_NAME
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObj = __webpack_require__(3);

function getPathSegments(path) {
	var pathArr = path.split('.');
	var parts = [];

	for (var i = 0; i < pathArr.length; i++) {
		var p = pathArr[i];

		while (p[p.length - 1] === '\\' && pathArr[i + 1] !== undefined) {
			p = p.slice(0, -1) + '.';
			p += pathArr[++i];
		}

		parts.push(p);
	}

	return parts;
}

module.exports = {
	get: function get(obj, path, value) {
		if (!isObj(obj) || typeof path !== 'string') {
			return value === undefined ? obj : value;
		}

		var pathArr = getPathSegments(path);

		for (var i = 0; i < pathArr.length; i++) {
			if (!Object.prototype.propertyIsEnumerable.call(obj, pathArr[i])) {
				return value;
			}

			obj = obj[pathArr[i]];

			if (obj === undefined || obj === null) {
				// `obj` is either `undefined` or `null` so we want to stop the loop, and
				// if this is not the last bit of the path, and
				// if it did't return `undefined`
				// it would return `null` if `obj` is `null`
				// but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
				if (i !== pathArr.length - 1) {
					return value;
				}

				break;
			}
		}

		return obj;
	},
	set: function set(obj, path, value) {
		if (!isObj(obj) || typeof path !== 'string') {
			return;
		}

		var pathArr = getPathSegments(path);

		for (var i = 0; i < pathArr.length; i++) {
			var p = pathArr[i];

			if (!isObj(obj[p])) {
				obj[p] = {};
			}

			if (i === pathArr.length - 1) {
				obj[p] = value;
			}

			obj = obj[p];
		}
	},
	delete: function _delete(obj, path) {
		if (!isObj(obj) || typeof path !== 'string') {
			return;
		}

		var pathArr = getPathSegments(path);

		for (var i = 0; i < pathArr.length; i++) {
			var p = pathArr[i];

			if (i === pathArr.length - 1) {
				delete obj[p];
				return;
			}

			obj = obj[p];

			if (!isObj(obj)) {
				return;
			}
		}
	},
	has: function has(obj, path) {
		if (!isObj(obj) || typeof path !== 'string') {
			return false;
		}

		var pathArr = getPathSegments(path);

		for (var i = 0; i < pathArr.length; i++) {
			if (isObj(obj)) {
				if (!(pathArr[i] in obj)) {
					return false;
				}

				obj = obj[pathArr[i]];
			} else {
				return false;
			}
		}

		return true;
	}
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _base = __webpack_require__(5);

var _base2 = _interopRequireDefault(_base);

var _adobeAnalytics = __webpack_require__(11);

var _adobeAnalytics2 = _interopRequireDefault(_adobeAnalytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class implementing custom behaviour for Adobe Analytics collector.
 *
 * @extends BaseAnalyticsCollector
 */
var AdobeAnalyticsCollector = function (_BaseAnalyticsCollect) {
  _inherits(AdobeAnalyticsCollector, _BaseAnalyticsCollect);

  /**
   * Create an analytics collector implementing Adobe Analytics Provider.
   *
   * @param  {Object} config Configuration needed to init Adobe Analytics Collector.
   */
  function AdobeAnalyticsCollector(config) {
    _classCallCheck(this, AdobeAnalyticsCollector);

    config = _extends(config, {
      provider: new _adobeAnalytics2.default(config)
    });

    return _possibleConstructorReturn(this, (AdobeAnalyticsCollector.__proto__ || Object.getPrototypeOf(AdobeAnalyticsCollector)).call(this, config));
  }

  return AdobeAnalyticsCollector;
}(_base2.default);

exports.default = AdobeAnalyticsCollector;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (x) {
	var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
	return x !== null && (type === 'object' || type === 'function');
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.3.6 2017-04-05*/
/*global module:false, define:false*/
/*jshint latedef:false*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined) {
    define(function () {
        'use strict';

        var impl = {};

        impl.mobileDetectRules = {
            "phones": {
                "iPhone": "\\biPhone\\b|\\biPod\\b",
                "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
                "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                "Dell": "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                "Samsung": "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C",
                "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                "Asus": "Asus.*Galaxy|PadFone.*Mobile",
                "NokiaLumia": "Lumia [0-9]{3,4}",
                "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                "Palm": "PalmSource|Palm",
                "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                "Alcatel": "Alcatel",
                "Nintendo": "Nintendo 3DS",
                "Amoi": "Amoi",
                "INQ": "INQ",
                "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            },
            "tablets": {
                "iPad": "iPad|iPad.*Mobile",
                "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
                "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587",
                "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
                "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z",
                "BlackBerryTablet": "PlayBook|RIM Tablet",
                "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                "IRUTablet": "M702pro",
                "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                "NokiaLumiaTablet": "Lumia 2520",
                "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                "FlyTablet": "IQ310|Fly Vision",
                "bqTablet": "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus",
                "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                "NecTablet": "\\bN-06D|\\bN-08D",
                "PantechTablet": "Pantech.*P4100",
                "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
                "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
                "NabiTablet": "Android.*\\bNabi",
                "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                "PlaystationTablet": "Playstation.*(Portable|Vita)",
                "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                "GalapadTablet": "Android.*\\bG1\\b",
                "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
                "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                "DPSTablet": "DPS Dream 9|DPS Dual 7",
                "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
                "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
                "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
                "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                "iMobileTablet": "i-mobile i-note",
                "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
                "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                "AMPETablet": "Android.* A78 ",
                "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                "TecnoTablet": "TECNO P9",
                "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                "FX2Tablet": "FX2 PAD7|FX2 PAD10",
                "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                "CaptivaTablet": "CAPTIVA PAD",
                "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                "JaytechTablet": "TPC-PA762",
                "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
                "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
                "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                "UbislateTablet": "UbiSlate[\\s]?7C",
                "PocketBookTablet": "Pocketbook",
                "KocasoTablet": "\\b(TB-1207)\\b",
                "HisenseTablet": "\\b(F5281|E2371)\\b",
                "Hudl": "Hudl HT7S3|Hudl 2",
                "TelstraTablet": "T-Hub2",
                "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b"
            },
            "oss": {
                "AndroidOS": "Android",
                "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
                "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
                "MeeGoOS": "MeeGo",
                "MaemoOS": "Maemo",
                "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
                "webOS": "webOS|hpwOS",
                "badaOS": "\\bBada\\b",
                "BREWOS": "BREW"
            },
            "uas": {
                "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
                "Dolfin": "\\bDolfin\\b",
                "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
                "Skyfire": "Skyfire",
                "Edge": "Mobile Safari\/[.0-9]* Edge",
                "IE": "IEMobile|MSIEMobile",
                "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                "Bolt": "bolt",
                "TeaShark": "teashark",
                "Blazer": "Blazer",
                "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                "UCBrowser": "UC.*Browser|UCWEB",
                "baiduboxapp": "baiduboxapp",
                "baidubrowser": "baidubrowser",
                "DiigoBrowser": "DiigoBrowser",
                "Puffin": "Puffin",
                "Mercury": "\\bMercury\\b",
                "ObigoBrowser": "Obigo",
                "NetFront": "NF-Browser",
                "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
            },
            "props": {
                "Mobile": "Mobile\/[VER]",
                "Build": "Build\/[VER]",
                "Version": "Version\/[VER]",
                "VendorID": "VendorID\/[VER]",
                "iPad": "iPad.*CPU[a-z ]+[VER]",
                "iPhone": "iPhone.*CPU[a-z ]+[VER]",
                "iPod": "iPod.*CPU[a-z ]+[VER]",
                "Kindle": "Kindle\/[VER]",
                "Chrome": ["Chrome\/[VER]", "CriOS\/[VER]", "CrMo\/[VER]"],
                "Coast": ["Coast\/[VER]"],
                "Dolfin": "Dolfin\/[VER]",
                "Firefox": ["Firefox\/[VER]", "FxiOS\/[VER]"],
                "Fennec": "Fennec\/[VER]",
                "Edge": "Edge\/[VER]",
                "IE": ["IEMobile\/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident\/[0-9.]+;.*rv:[VER]"],
                "NetFront": "NetFront\/[VER]",
                "NokiaBrowser": "NokiaBrowser\/[VER]",
                "Opera": [" OPR\/[VER]", "Opera Mini\/[VER]", "Version\/[VER]"],
                "Opera Mini": "Opera Mini\/[VER]",
                "Opera Mobi": "Version\/[VER]",
                "UC Browser": "UC Browser[VER]",
                "MQQBrowser": "MQQBrowser\/[VER]",
                "MicroMessenger": "MicroMessenger\/[VER]",
                "baiduboxapp": "baiduboxapp\/[VER]",
                "baidubrowser": "baidubrowser\/[VER]",
                "SamsungBrowser": "SamsungBrowser\/[VER]",
                "Iron": "Iron\/[VER]",
                "Safari": ["Version\/[VER]", "Safari\/[VER]"],
                "Skyfire": "Skyfire\/[VER]",
                "Tizen": "Tizen\/[VER]",
                "Webkit": "webkit[ \/][VER]",
                "PaleMoon": "PaleMoon\/[VER]",
                "Gecko": "Gecko\/[VER]",
                "Trident": "Trident\/[VER]",
                "Presto": "Presto\/[VER]",
                "Goanna": "Goanna\/[VER]",
                "iOS": " \\bi?OS\\b [VER][ ;]{1}",
                "Android": "Android [VER]",
                "BlackBerry": ["BlackBerry[\\w]+\/[VER]", "BlackBerry.*Version\/[VER]", "Version\/[VER]"],
                "BREW": "BREW [VER]",
                "Java": "Java\/[VER]",
                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                "Windows Phone": "Windows Phone [VER]",
                "Windows CE": "Windows CE\/[VER]",
                "Windows NT": "Windows NT [VER]",
                "Symbian": ["SymbianOS\/[VER]", "Symbian\/[VER]"],
                "webOS": ["webOS\/[VER]", "hpwOS\/[VER];"]
            },
            "utils": {
                "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
                "DesktopMode": "WPDesktop",
                "TV": "SonyDTV|HbbTV",
                "WebKit": "(webkit)[ \/]([\\w.]+)",
                "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                "Watch": "SM-V700"
            }
        };

        // following patterns come from http://detectmobilebrowsers.com/
        impl.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i
        };

        var hasOwnProp = Object.prototype.hasOwnProperty,
            isArray;

        impl.FALLBACK_PHONE = 'UnknownPhone';
        impl.FALLBACK_TABLET = 'UnknownTablet';
        impl.FALLBACK_MOBILE = 'UnknownMobile';

        isArray = 'isArray' in Array ? Array.isArray : function (value) {
            return Object.prototype.toString.call(value) === '[object Array]';
        };

        function equalIC(a, b) {
            return a != null && b != null && a.toLowerCase() === b.toLowerCase();
        }

        function containsIC(array, value) {
            var valueLC,
                i,
                len = array.length;
            if (!len || !value) {
                return false;
            }
            valueLC = value.toLowerCase();
            for (i = 0; i < len; ++i) {
                if (valueLC === array[i].toLowerCase()) {
                    return true;
                }
            }
            return false;
        }

        function convertPropsToRegExp(object) {
            for (var key in object) {
                if (hasOwnProp.call(object, key)) {
                    object[key] = new RegExp(object[key], 'i');
                }
            }
        }

        (function init() {
            var key,
                values,
                value,
                i,
                len,
                verPos,
                mobileDetectRules = impl.mobileDetectRules;
            for (key in mobileDetectRules.props) {
                if (hasOwnProp.call(mobileDetectRules.props, key)) {
                    values = mobileDetectRules.props[key];
                    if (!isArray(values)) {
                        values = [values];
                    }
                    len = values.length;
                    for (i = 0; i < len; ++i) {
                        value = values[i];
                        verPos = value.indexOf('[VER]');
                        if (verPos >= 0) {
                            value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                        }
                        values[i] = new RegExp(value, 'i');
                    }
                    mobileDetectRules.props[key] = values;
                }
            }
            convertPropsToRegExp(mobileDetectRules.oss);
            convertPropsToRegExp(mobileDetectRules.phones);
            convertPropsToRegExp(mobileDetectRules.tablets);
            convertPropsToRegExp(mobileDetectRules.uas);
            convertPropsToRegExp(mobileDetectRules.utils);

            // copy some patterns to oss0 which are tested first (see issue#15)
            mobileDetectRules.oss0 = {
                WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
                WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
            };
        })();

        /**
         * Test userAgent string against a set of rules and find the first matched key.
         * @param {Object} rules (key is String, value is RegExp)
         * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
         * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
         * @private
         */
        impl.findMatch = function (rules, userAgent) {
            for (var key in rules) {
                if (hasOwnProp.call(rules, key)) {
                    if (rules[key].test(userAgent)) {
                        return key;
                    }
                }
            }
            return null;
        };

        /**
         * Test userAgent string against a set of rules and return an array of matched keys.
         * @param {Object} rules (key is String, value is RegExp)
         * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
         * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
         * @private
         */
        impl.findMatches = function (rules, userAgent) {
            var result = [];
            for (var key in rules) {
                if (hasOwnProp.call(rules, key)) {
                    if (rules[key].test(userAgent)) {
                        result.push(key);
                    }
                }
            }
            return result;
        };

        /**
         * Check the version of the given property in the User-Agent.
         *
         * @param {String} propertyName
         * @param {String} userAgent
         * @return {String} version or <tt>null</tt> if version not found
         * @private
         */
        impl.getVersionStr = function (propertyName, userAgent) {
            var props = impl.mobileDetectRules.props,
                patterns,
                i,
                len,
                match;
            if (hasOwnProp.call(props, propertyName)) {
                patterns = props[propertyName];
                len = patterns.length;
                for (i = 0; i < len; ++i) {
                    match = patterns[i].exec(userAgent);
                    if (match !== null) {
                        return match[1];
                    }
                }
            }
            return null;
        };

        /**
         * Check the version of the given property in the User-Agent.
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} propertyName
         * @param {String} userAgent
         * @return {Number} version or <tt>NaN</tt> if version not found
         * @private
         */
        impl.getVersion = function (propertyName, userAgent) {
            var version = impl.getVersionStr(propertyName, userAgent);
            return version ? impl.prepareVersionNo(version) : NaN;
        };

        /**
         * Prepare the version number.
         *
         * @param {String} version
         * @return {Number} the version number as a floating number
         * @private
         */
        impl.prepareVersionNo = function (version) {
            var numbers;

            numbers = version.split(/[a-z._ \/\-]/i);
            if (numbers.length === 1) {
                version = numbers[0];
            }
            if (numbers.length > 1) {
                version = numbers[0] + '.';
                numbers.shift();
                version += numbers.join('');
            }
            return Number(version);
        };

        impl.isMobileFallback = function (userAgent) {
            return impl.detectMobileBrowsers.fullPattern.test(userAgent) || impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4));
        };

        impl.isTabletFallback = function (userAgent) {
            return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
        };

        impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
            if (cache.mobile !== undefined) {
                return;
            }
            var phone, tablet, phoneSized;

            // first check for stronger tablet rules, then phone (see issue#5)
            tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
            if (tablet) {
                cache.mobile = cache.tablet = tablet;
                cache.phone = null;
                return; // unambiguously identified as tablet
            }

            phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
            if (phone) {
                cache.mobile = cache.phone = phone;
                cache.tablet = null;
                return; // unambiguously identified as phone
            }

            // our rules haven't found a match -> try more general fallback rules
            if (impl.isMobileFallback(userAgent)) {
                phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
                if (phoneSized === undefined) {
                    cache.mobile = impl.FALLBACK_MOBILE;
                    cache.tablet = cache.phone = null;
                } else if (phoneSized) {
                    cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                    cache.tablet = null;
                } else {
                    cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                    cache.phone = null;
                }
            } else if (impl.isTabletFallback(userAgent)) {
                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                cache.phone = null;
            } else {
                // not mobile at all!
                cache.mobile = cache.tablet = cache.phone = null;
            }
        };

        // t is a reference to a MobileDetect instance
        impl.mobileGrade = function (t) {
            // impl note:
            // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
            // When changes are made in Mobile_Detect.php, copy this method and replace:
            //     $this-> / t.
            //     self::MOBILE_GRADE_(.) / '$1'
            //     , self::VERSION_TYPE_FLOAT / (nothing)
            //     isIOS() / os('iOS')
            //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
            var $isMobile = t.mobile() !== null;

            if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os('iOS') && t.version('iPad') >= 4.3 || t.os('iOS') && t.version('iPhone') >= 3.1 || t.os('iOS') && t.version('iPod') >= 3.1 ||

            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            t.version('Android') > 2.1 && t.is('Webkit') ||

            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version('Windows Phone OS') >= 7.0 ||

            // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is('BlackBerry') && t.version('BlackBerry') >= 6.0 ||
            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match('Playbook.*Tablet') ||

            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            t.version('webOS') >= 1.4 && t.match('Palm|Pre|Pixi') ||
            // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match('hp.*TouchPad') ||

            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            t.is('Firefox') && t.version('Firefox') >= 12 ||

            // Chrome for Android - Tested on Android 4.0, 4.1 device
            t.is('Chrome') && t.is('AndroidOS') && t.version('Android') >= 4.0 ||

            // Skyfire 4.1 - Tested on Android 2.3 device
            t.is('Skyfire') && t.version('Skyfire') >= 4.1 && t.is('AndroidOS') && t.version('Android') >= 2.3 ||

            // Opera Mobile 11.5-12: Tested on Android 2.3
            t.is('Opera') && t.version('Opera Mobi') > 11 && t.is('AndroidOS') ||

            // Meego 1.2 - Tested on Nokia 950 and N9
            t.is('MeeGoOS') ||

            // Tizen (pre-release) - Tested on early hardware
            t.is('Tizen') ||

            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is('Dolfin') && t.version('Bada') >= 2.0 ||

            // UC Browser - Tested on Android 2.3 device
            (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android') >= 2.3 ||

            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            t.match('Kindle Fire') || t.is('Kindle') && t.version('Kindle') >= 3.0 ||

            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is('AndroidOS') && t.is('NookTablet') ||

            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version('Chrome') >= 11 && !$isMobile ||

            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version('Safari') >= 5.0 && !$isMobile ||

            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version('Firefox') >= 4.0 && !$isMobile ||

            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version('MSIE') >= 7.0 && !$isMobile ||

            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version('Opera') >= 10 && !$isMobile) {
                return 'A';
            }

            if (t.os('iOS') && t.version('iPad') < 4.3 || t.os('iOS') && t.version('iPhone') < 3.1 || t.os('iOS') && t.version('iPod') < 3.1 ||

            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
            t.is('Blackberry') && t.version('BlackBerry') >= 5 && t.version('BlackBerry') < 6 ||

            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
            t.version('Opera Mini') >= 5.0 && t.version('Opera Mini') <= 6.5 && (t.version('Android') >= 2.3 || t.is('iOS')) ||

            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

            // @todo: report this (tested on Nokia N71)
            t.version('Opera Mobi') >= 11 && t.is('SymbianOS')) {
                return 'B';
            }

            if (
            // Blackberry 4.x - Tested on the Curve 8330
            t.version('BlackBerry') < 5.0 ||
            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile') <= 5.2) {
                return 'C';
            }

            //All older smartphone platforms and featurephones - Any device that doesn't support media queries
            //will receive the basic, C grade experience.
            return 'C';
        };

        impl.detectOS = function (ua) {
            return impl.findMatch(impl.mobileDetectRules.oss0, ua) || impl.findMatch(impl.mobileDetectRules.oss, ua);
        };

        impl.getDeviceSmallerSide = function () {
            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
        };

        /**
         * Constructor for MobileDetect object.
         * <br>
         * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
         * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
         *     <strong>Find information how to download and install:</strong>
         *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
         * </div>
         *
         * @example <pre>
         *     var md = new MobileDetect(window.navigator.userAgent);
         *     if (md.mobile()) {
         *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
         *     }
         * </pre>
         *
         * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
         * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
         *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
         *        as phone.
         *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
         *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
         *        for Android</a>.<br>
         *        If you provide a value < 0, then this "fuzzy" check is disabled.
         * @constructor
         * @global
         */
        function MobileDetect(userAgent, maxPhoneWidth) {
            this.ua = userAgent || '';
            this._cache = {};
            //600dp is typical 7" tablet minimum width
            this.maxPhoneWidth = maxPhoneWidth || 600;
        }

        MobileDetect.prototype = {
            constructor: MobileDetect,

            /**
             * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
             * <br>
             * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
             * <br>
             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
             * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
             * <code>UnknownMobile</code> is returned.<br>
             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
             * <br>
             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
             * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
             * <br>
             * In most cases you will use the return value just as a boolean.
             *
             * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
             * @function MobileDetect#mobile
             */
            mobile: function mobile() {
                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                return this._cache.mobile;
            },

            /**
             * Returns the detected phone type/family string or <tt>null</tt>.
             * <br>
             * The returned tablet (family or producer) is one of following keys:<br>
             * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
             * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
             * Wolfgang, Alcatel, Nintendo, Amoi, INQ, GenericPhone</tt><br>
             * <br>
             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
             * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
             * <br>
             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
             * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
             * will return <code>UnknownMobile</code>.<br>
             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
             * <br>
             * In most cases you will use the return value just as a boolean.
             *
             * @returns {String} the key of the phone family or producer, e.g. "iPhone"
             * @function MobileDetect#phone
             */
            phone: function phone() {
                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                return this._cache.phone;
            },

            /**
             * Returns the detected tablet type/family string or <tt>null</tt>.
             * <br>
             * The returned tablet (family or producer) is one of following keys:<br>
             * <br><tt>iPad, NexusTablet, SamsungTablet, Kindle, SurfaceTablet, HPTablet, AsusTablet,
             * BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet, AcerTablet,
             * ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet, LenovoTablet,
             * DellTablet, YarvikTablet, MedionTablet, ArnovaTablet, IntensoTablet, IRUTablet,
             * MegafonTablet, EbodaTablet, AllViewTablet, ArchosTablet, AinolTablet,
             * NokiaLumiaTablet, SonyTablet, PhilipsTablet, CubeTablet, CobyTablet, MIDTablet,
             * MSITablet, SMiTTablet, RockChipTablet, FlyTablet, bqTablet, HuaweiTablet,
             * NecTablet, PantechTablet, BronchoTablet, VersusTablet, ZyncTablet,
             * PositivoTablet, NabiTablet, KoboTablet, DanewTablet, TexetTablet,
             * PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
             * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
             * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
             * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
             * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
             * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
             * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
             * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
             * OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet, OndaTablet,
             * JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet, LavaTablet,
             * AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MiTablet, NibiruTablet,
             * NexoTablet, LeaderTablet, UbislateTablet, PocketBookTablet, KocasoTablet,
             * HisenseTablet, Hudl, TelstraTablet, GenericTablet</tt><br>
             * <br>
             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
             * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
             * <br>
             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
             * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
             * will return <code>UnknownMobile</code>.<br>
             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
             * <br>
             * In most cases you will use the return value just as a boolean.
             *
             * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
             * @function MobileDetect#tablet
             */
            tablet: function tablet() {
                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                return this._cache.tablet;
            },

            /**
             * Returns the (first) detected user-agent string or <tt>null</tt>.
             * <br>
             * The returned user-agent is one of following keys:<br>
             * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
             * Safari, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
             * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
             * <br>
             * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
             * cases where a mobile device pretends to be more than one particular browser. You can get the
             * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
             * providing one of the defined keys as first argument to {@link MobileDetect#is}.
             *
             * @returns {String} the key for the detected user-agent or <tt>null</tt>
             * @function MobileDetect#userAgent
             */
            userAgent: function userAgent() {
                if (this._cache.userAgent === undefined) {
                    this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
                }
                return this._cache.userAgent;
            },

            /**
             * Returns all detected user-agent strings.
             * <br>
             * The array is empty or contains one or more of following keys:<br>
             * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
             * Safari, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
             * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
             * <br>
             * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
             * cases where a mobile device pretends to be more than one particular browser. You can get the
             * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
             * providing one of the defined keys as first argument to {@link MobileDetect#is}.
             *
             * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
             * @function MobileDetect#userAgents
             */
            userAgents: function userAgents() {
                if (this._cache.userAgents === undefined) {
                    this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
                }
                return this._cache.userAgents;
            },

            /**
             * Returns the detected operating system string or <tt>null</tt>.
             * <br>
             * The operating system is one of following keys:<br>
             * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
             * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
             *
             * @returns {String} the key for the detected operating system.
             * @function MobileDetect#os
             */
            os: function os() {
                if (this._cache.os === undefined) {
                    this._cache.os = impl.detectOS(this.ua);
                }
                return this._cache.os;
            },

            /**
             * Get the version (as Number) of the given property in the User-Agent.
             * <br>
             * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
             *
             * @param {String} key a key defining a thing which has a version.<br>
             *        You can use one of following keys:<br>
             * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
             * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
             * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
             * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
             * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
             * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
             *
             * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
             *          Be careful when comparing this value with '==' operator!
             * @function MobileDetect#version
             */
            version: function version(key) {
                return impl.getVersion(key, this.ua);
            },

            /**
             * Get the version (as String) of the given property in the User-Agent.
             * <br>
             *
             * @param {String} key a key defining a thing which has a version.<br>
             *        You can use one of following keys:<br>
             * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
             * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
             * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
             * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
             * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
             * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
             *
             * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
             *
             * @function MobileDetect#versionStr
             */
            versionStr: function versionStr(key) {
                return impl.getVersionStr(key, this.ua);
            },

            /**
             * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
             *
             * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
             *        tablet family.<br>
             *        For a complete list of possible values, see {@link MobileDetect#userAgent},
             *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
             *        Additionally you have following keys:<br>
             * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
             *
             * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
             *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
             * @function MobileDetect#is
             */
            is: function is(key) {
                return containsIC(this.userAgents(), key) || equalIC(key, this.os()) || equalIC(key, this.phone()) || equalIC(key, this.tablet()) || containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
            },

            /**
             * Do a quick test against navigator::userAgent.
             *
             * @param {String|RegExp} pattern the pattern, either as String or RegExp
             *                        (a string will be converted to a case-insensitive RegExp).
             * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
             * @function MobileDetect#match
             */
            match: function match(pattern) {
                if (!(pattern instanceof RegExp)) {
                    pattern = new RegExp(pattern, 'i');
                }
                return pattern.test(this.ua);
            },

            /**
             * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
             * <br>
             * Obviously this method makes sense in browser environments only (not for Node.js)!
             * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
             *        The argument is optional and if not present or falsy, the value of the constructor is taken.
             * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
             *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
             *          Will always return <code>undefined</code> server-side.
             */
            isPhoneSized: function isPhoneSized(maxPhoneWidth) {
                return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
            },

            /**
             * Returns the mobile grade ('A', 'B', 'C').
             *
             * @returns {String} one of the mobile grades ('A', 'B', 'C').
             * @function MobileDetect#mobileGrade
             */
            mobileGrade: function mobileGrade() {
                if (this._cache.grade === undefined) {
                    this._cache.grade = impl.mobileGrade(this);
                }
                return this._cache.grade;
            }
        };

        // environment-dependent
        if (typeof window !== 'undefined' && window.screen) {
            MobileDetect.isPhoneSized = function (maxPhoneWidth) {
                return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
            };
        } else {
            MobileDetect.isPhoneSized = function () {};
        }

        // should not be replaced by a completely new object - just overwrite existing methods
        MobileDetect._impl = impl;

        MobileDetect.version = '1.3.6 2017-04-05';

        return MobileDetect;
    }); // end of call of define()
})(function (undefined) {
    if (typeof module !== 'undefined' && module.exports) {
        return function (factory) {
            module.exports = factory();
        };
    } else if (true) {
        return __webpack_require__(13);
    } else if (typeof window !== 'undefined') {
        return function (factory) {
            window.MobileDetect = factory();
        };
    } else {
        // please file a bug if you get this error!
        throw new Error('unknown environment');
    }
}());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_MAIN_NODE = 'app__content';

/**
 * Function wrapper checks for compatibility for event constructor.
 *
 * @method createEvent
 * @param  {String} eventName Event name.
 * @return {Event}
 */
var createEvent = function createEvent(eventName) {
  if (typeof Event === 'function') {
    return new Event(eventName);
  }

  var event = document.createEvent('Event');

  event.initEvent(eventName, true, true);
  return event;
};

/**
 * Class defining base Analytics Collector functionality.
 */

var BaseAnalyticsCollector = function () {

  /**
   * Creates a Base Analytics Collector.
   *
   * @param  {Object} provider                    Analytics Provider to collect data.
   * @param  {String} [{mainNode=DEFAULT_MAIN_NODE}= {}] Id for HTML target node to listen events from.
   */
  function BaseAnalyticsCollector() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        provider = _ref.provider,
        _ref$mainNode = _ref.mainNode,
        mainNode = _ref$mainNode === undefined ? DEFAULT_MAIN_NODE : _ref$mainNode;

    _classCallCheck(this, BaseAnalyticsCollector);

    this.mainNode = null;
    this.node = null;
    this.provider = null;

    _extends(this, {
      provider: provider,
      mainNode: mainNode
    });

    this.provider.init(this.startTracking.bind(this));
  }

  /**
   * Sends an event to the implemented provider out of the automatic system.
   *
   * @method sendEvent
   * @param  {String} action Action to be sent to the analytics tracker.
   * @param  {Object} data Data to be sent to the analytics tracker.
   */


  _createClass(BaseAnalyticsCollector, [{
    key: 'sendEvent',
    value: function sendEvent(action, data) {
      this.provider.sendEvent(action, data);
    }

    /**
     * Starts listening to bridge events on main node and delegates to corresponding
     * provider methods implementation.
     *
     * @method startTracking
     */

  }, {
    key: 'startTracking',
    value: function startTracking() {
      this.node = document.querySelector('#' + this.mainNode);

      if (this.node) {
        this.listenerTrackEvent = this.provider._trackEvent.bind(this.provider);
        this.listenerTemplateTransitionEnd = this.provider._setFootPrint.bind(this.provider);

        window.onerror = this.provider._trackError.bind(this.provider);
        this.node.addEventListener('track-event', this.listenerTrackEvent);
        this.node.addEventListener('template-transition-end', this.listenerTemplateTransitionEnd);

        var event = createEvent('analytics-collector-ready');

        this.node.dispatchEvent(event);
      }
    }

    /**
     * Stop listening to bridge events.
     *
     * @method stopTracking
     */

  }, {
    key: 'stopTracking',
    value: function stopTracking() {
      if (this.node) {
        this.node.removeEventListener('track-event', this.listenerTrackEvent);
        this.node.removeEventListener('template-transition-end', this.listenerTemplateTransitionEnd);
      }
    }
  }]);

  return BaseAnalyticsCollector;
}();

exports.default = BaseAnalyticsCollector;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _index = __webpack_require__(10);

var _dotProp = __webpack_require__(1);

var _dotProp2 = _interopRequireDefault(_dotProp);

var _mobileDetect = __webpack_require__(4);

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var set = _dotProp2.default.set,
    get = _dotProp2.default.get,
    has = _dotProp2.default.has;


var SHOULD_PERSIST_DATA_LAYER = false;
var md = new _mobileDetect2.default(window.navigator.userAgent);

/**
 * DataLayer class.
 * Stores properties to be sent to Adobe.
 */

var DataLayer = function () {

  /**
   * Create a DataLayer with given configuration.
   *
   * @param  {Object} [config={}] DataLayer custom configuration object. Allows to override default DataLayer properties.
   */
  function DataLayer() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DataLayer);

    this.data = null;
    this.autoCalculateReservedProperties = true;
    var _config$dataLayer = config.dataLayer,
        dataLayer = _config$dataLayer === undefined ? _constants.DEFAULT_DATA_LAYER : _config$dataLayer,
        _config$autoCalculate = config.autoCalculateReservedProperties,
        autoCalculateReservedProperties = _config$autoCalculate === undefined ? true : _config$autoCalculate;

    var data = this.init(dataLayer, autoCalculateReservedProperties);

    _extends(this, {
      data: data,
      autoCalculateReservedProperties: autoCalculateReservedProperties
    });
  }

  /**
   * Initialize a new DataLayer based on given dataLayer and if it's a custom one or default one.
   *
   * @method init
   * @param  {Object}   dataLayer                         DataLayer structure.
   * @param  {Boolean}  autoCalculateReservedProperties   Determines if DataLayer should auto calculate reserved analytics properties.
   * @return {Object}   Initialized DataLayer.
   */


  _createClass(DataLayer, [{
    key: 'init',
    value: function init(dataLayer, autoCalculateReservedProperties) {
      var server = window.location.hostname || 'localhost';
      var data = (0, _index.clone)(_extends({}, dataLayer), true);

      if (autoCalculateReservedProperties) {
        set(data, 'page.pageInfo.server', server);
        set(data, 'user.device.userAgent', window.navigator.userAgent);
        set(data, 'user.device.mobile', md.mobile() || md.phone() || md.tablet() ? _constants.ANALYTICS_WORDS.YES : _constants.ANALYTICS_WORDS.NO);
      }

      return data;
    }

    /**
     * Update and return new DataLayer with provided data and channel value (if data is binded to a channel).
     *
     * @method update
     * @param  {Object} data Data to update DataLayer.
     * @param  {Object} channelValue Datasource to update data properties binded to channel.
     * @return {Object} New DataLayer.
     */

  }, {
    key: 'update',
    value: function update(data) {
      var _this = this;

      var channelValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // we unflatten the data, without regard of reserved properties.
      return this.unflatten(data, channelValue).then(function (unflattenData) {
        var initialDataLayer = (0, _index.clone)(_this.data, true); // we clone the initial data.
        var extendConfig = { deep: true, circular: true };
        var updatedDataLayer = (0, _index.extend)(extendConfig, initialDataLayer, unflattenData); // we extend the initial data with unflatten data.

        if (_this.autoCalculateReservedProperties) {
          var pageName = _this.getPageName(updatedDataLayer);

          if (pageName) {
            set(updatedDataLayer, 'page.pageInfo.pageName', pageName);
          }
        }

        if (SHOULD_PERSIST_DATA_LAYER) {
          _this.data = updatedDataLayer;
        }

        return updatedDataLayer;
      });
    }

    /**
     * Unflatten given data object structure to a flat object including deep properties
     * and retrieve binded values from channel value, cordova, etc...
     *
     * @method unflatten
     * @param  {Object} data Data to unflatten.
     * @param  {Object} channelValue Datasource to update data properties binded to channel.
     * @return {Object} Unflatted flat object with deep properties structure.
     */

  }, {
    key: 'unflatten',
    value: function unflatten(data, channelValue) {
      var _this2 = this;

      var unflattenData = {};
      var promises = [];

      for (var key in data) {
        var isAutoCalculatedProperty = _constants.AUTO_CALCULATED_RESERVED_ANALYTICS_PROPERTIES.includes(key);

        if (data.hasOwnProperty(key) && (!isAutoCalculatedProperty || !this.autoCalculateReservedProperties)) {
          (function () {
            var value = data[key];

            if (value instanceof Object) {
              var isBindFromChannel = has(value, 'bind');
              var isCordovaFunction = has(value, 'cordova');

              // check for channel values & bind property of analytics object value...
              if (isBindFromChannel && channelValue) {
                promises.push(_this2.unflattenFromChannelValue(key, data[key], channelValue));
              } else if (isCordovaFunction) {
                promises.push(_this2.unflattenFromCordovaFunction(key, data[key]));
              } else {
                // empty channel data or required format not followed...we reset the value.
                value = null;

                if (isBindFromChannel) {
                  if (!channelValue) {
                    // show warn
                    console.warn(key + ' property value could not be resolved - empty channel data - IGNORED.');
                  } else {
                    // show warn
                    console.warn(key + ' property is not following convention for analytics channel binding - IGNORED.');
                  }
                } else if (isCordovaFunction) {
                  // show warn
                  console.warn('Cordova function could not be executed or an error has ocurred - IGNORED.');
                }
              }
            } else {
              promises.push(new Promise(function (resolve, reject) {
                resolve({ key: key, value: value });
              }));
            }
          })();
        }
      }

      return Promise.all(promises).then(function (result) {
        result.forEach(function (item) {
          var key = item.key,
              value = item.value;


          if (key && value) {
            set(unflattenData, key, value);
          }
        });

        return unflattenData;
      });
    }

    /**
     * Unflatten given data object structure to a flat object including deep properties
     * and retrieve binded values from channel value.
     *
     * @method unflattenFromChannelValue
     * @param  {Object} key Property key.
     * @param  {Object} object Object containing property to be unflatted.
     * @param  {Object} channelValue Datasource to update data properties binded to channel.
     * @return {Promise} Promise object that contains key and value of unflatted property binded to channel value.
     */

  }, {
    key: 'unflattenFromChannelValue',
    value: function unflattenFromChannelValue(key, object, channelValue) {
      return new Promise(function (resolve, reject) {
        // we get path from binding value from analytics...
        var channelObjectPath = object.bind;
        var value = void 0;

        if (channelObjectPath !== _constants.FULL_CHANNEL_VALUE_PATH) {
          // we recover real value from channel object path...
          value = get(channelValue, channelObjectPath);
        } else {
          // we recover FULL channel value...
          value = channelValue;
        }

        resolve({ key: key, value: value });
      });
    }

    /**
     * Unflatten given data object structure to a flat object including deep properties
     * and retrieve binded values from cordova.
     *
     * @method unflattenFromCordovaFunction
     * @param  {Object} key Property key.
     * @param  {Object} object Object containing property to be unflatted.
     * @return {Promise} Promise object that contains key and value of unflatted property binded to cordova function.
     */

  }, {
    key: 'unflattenFromCordovaFunction',
    value: function unflattenFromCordovaFunction(key, object) {
      return new Promise(function (resolve, reject) {
        var cordovaFunctionName = object.cordova;
        var cordovaFunction = window.ADB[cordovaFunctionName];

        var cordovaFunctionSuccess = function cordovaFunctionSuccess(value) {
          resolve({ key: key, value: value });
        };
        var cordovaFunctionError = function cordovaFunctionError(error) {
          return value = null;
        };

        cordovaFunction(cordovaFunctionSuccess, cordovaFunctionError);
      });
    }

    /**
     * Builds pageName based on area, pageSegment, and pageLevels taken from given DataLayer data.
     *
     * @method getPageName
     * @param  {Object} data DataLayer data.
     * @return {String} Page name.
     */

  }, {
    key: 'getPageName',
    value: function getPageName(data) {
      var pages = [];

      var area = get(data, 'page.pageInfo.area');
      var segment = get(data, 'page.pageInfo.pageSegment');

      if (area) {
        pages.push(area);
      }

      if (segment) {
        pages.push(segment);
      }

      for (var i = 1; i <= 10; i++) {
        var level = get(data, 'page.pageInfo.level' + i);

        if (level) {
          pages.push(level);
        } else {
          break;
        }
      }

      if (pages.length > 0) {
        var pageName = pages.join(':');
        return pageName;
      }

      return null;
    }
  }]);

  return DataLayer;
}();

exports.default = DataLayer;
;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _adobeAnalytics = __webpack_require__(2);

var _adobeAnalytics2 = _interopRequireDefault(_adobeAnalytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @TODO: Revisar esta exportación ya que webpack la puede hacer.
window.AdobeAnalyticsCollector = _adobeAnalytics2.default;
module.exports = _adobeAnalytics2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = clone;
/*
	Tree Kit

	Copyright (c) 2014 - 2016 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

/*
	Stand-alone fork of extend.js, without options.
*/

function clone(originalObject, circular) {
	// First create an empty object with
	// same prototype of our original source

	var propertyIndex,
	    descriptor,
	    keys,
	    current,
	    nextSource,
	    indexOf,
	    copies = [{
		source: originalObject,
		target: Array.isArray(originalObject) ? [] : Object.create(Object.getPrototypeOf(originalObject))
	}],
	    cloneObject = copies[0].target,
	    sourceReferences = [originalObject],
	    targetReferences = [cloneObject];

	// First in, first out
	while (current = copies.shift()) // jshint ignore:line
	{
		keys = Object.getOwnPropertyNames(current.source);

		for (propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
			// Save the source's descriptor
			descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);

			if (!descriptor.value || _typeof(descriptor.value) !== 'object') {
				Object.defineProperty(current.target, keys[propertyIndex], descriptor);
				continue;
			}

			nextSource = descriptor.value;
			descriptor.value = Array.isArray(nextSource) ? [] : Object.create(Object.getPrototypeOf(nextSource));

			if (circular) {
				indexOf = sourceReferences.indexOf(nextSource);

				if (indexOf !== -1) {
					// The source is already referenced, just assign reference
					descriptor.value = targetReferences[indexOf];
					Object.defineProperty(current.target, keys[propertyIndex], descriptor);
					continue;
				}

				sourceReferences.push(nextSource);
				targetReferences.push(descriptor.value);
			}

			Object.defineProperty(current.target, keys[propertyIndex], descriptor);

			copies.push({ source: nextSource, target: descriptor.value });
		}
	}

	return cloneObject;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = extend;
/*
	Tree Kit

	Copyright (c) 2014 - 2016 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

/*
	== Extend function ==
*/

/*
	options:
		* own: only copy own properties that are enumerable
		* nonEnum: copy non-enumerable properties as well, works only with own:true
		* descriptor: preserve property's descriptor
		* deep: perform a deep (recursive) extend
		* maxDepth: used in conjunction with deep, when max depth is reached an exception is raised, default to 100 when
			the 'circular' option is off, or default to null if 'circular' is on
		* circular: circular references reconnection
		* move: move properties to target (delete properties from the sources)
		* preserve: existing properties in the target object are not overwritten
		* nofunc: skip functions
		* deepFunc: in conjunction with 'deep', this will process sources functions like objects rather than
			copying/referencing them directly into the source, thus, the result will not be a function, it forces 'deep'
		* proto: try to clone objects with the right prototype, using Object.create() or mutating it with Object.setPrototypeOf(),
			it forces option 'own'.
		* inherit: rather than mutating target prototype for source prototype like the 'proto' option does, here it is
			the source itself that IS the prototype for the target. Force option 'own' and disable 'proto'.
		* skipRoot: the prototype of the target root object is NOT mutated only if this option is set.
		* flat: extend into the target top-level only, compose name with the path of the source, force 'deep',
			disable 'unflat', 'proto', 'inherit'
		* unflat: assume sources are in the 'flat' format, expand all properties deeply into the target, disable 'flat'
		* deepFilter
			* blacklist: list of black-listed prototype: the recursiveness of the 'deep' option will be disabled
				for object whose prototype is listed
			* whitelist: the opposite of blacklist
*/
function extend(options, target) {
	//console.log( "\nextend():\n" , arguments ) ;
	var i,
	    source,
	    newTarget = false,
	    length = arguments.length;

	if (length < 3) {
		return target;
	}

	var sources = Array.prototype.slice.call(arguments, 2);
	length = sources.length;

	if (!options || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
		options = {};
	}

	var runtime = { depth: 0, prefix: '' };

	if (!options.maxDepth && options.deep && !options.circular) {
		options.maxDepth = 100;
	}

	if (options.deepFunc) {
		options.deep = true;
	}

	if (options.deepFilter && _typeof(options.deepFilter) === 'object') {
		if (options.deepFilter.whitelist && (!Array.isArray(options.deepFilter.whitelist) || !options.deepFilter.whitelist.length)) {
			delete options.deepFilter.whitelist;
		}
		if (options.deepFilter.blacklist && (!Array.isArray(options.deepFilter.blacklist) || !options.deepFilter.blacklist.length)) {
			delete options.deepFilter.blacklist;
		}
		if (!options.deepFilter.whitelist && !options.deepFilter.blacklist) {
			delete options.deepFilter;
		}
	}

	// 'flat' option force 'deep'
	if (options.flat) {
		options.deep = true;
		options.proto = false;
		options.inherit = false;
		options.unflat = false;
		if (typeof options.flat !== 'string') {
			options.flat = '.';
		}
	}

	if (options.unflat) {
		options.deep = false;
		options.proto = false;
		options.inherit = false;
		options.flat = false;
		if (typeof options.unflat !== 'string') {
			options.unflat = '.';
		}
	}

	// If the prototype is applied, only owned properties should be copied
	if (options.inherit) {
		options.own = true;options.proto = false;
	} else if (options.proto) {
		options.own = true;
	}

	if (!target || (typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && typeof target !== 'function') {
		newTarget = true;
	}

	if (!options.skipRoot && (options.inherit || options.proto)) {
		for (i = length - 1; i >= 0; i--) {
			source = sources[i];
			if (source && ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' || typeof source === 'function')) {
				if (options.inherit) {
					if (newTarget) {
						target = Object.create(source);
					} else {
						Object.setPrototypeOf(target, source);
					}
				} else if (options.proto) {
					if (newTarget) {
						target = Object.create(Object.getPrototypeOf(source));
					} else {
						Object.setPrototypeOf(target, Object.getPrototypeOf(source));
					}
				}

				break;
			}
		}
	} else if (newTarget) {
		target = {};
	}

	runtime.references = { sources: [], targets: [] };

	for (i = 0; i < length; i++) {
		source = sources[i];
		if (!source || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) !== 'object' && typeof source !== 'function') {
			continue;
		}
		extendOne(runtime, options, target, source);
	}

	return target;
}

function extendOne(runtime, options, target, source) {
	//console.log( "\nextendOne():\n" , arguments ) ;
	//process.exit() ;

	var j,
	    jmax,
	    sourceKeys,
	    sourceKey,
	    sourceValue,
	    sourceValueProto,
	    value,
	    sourceDescriptor,
	    targetKey,
	    targetPointer,
	    path,
	    indexOfSource = -1;

	// Max depth check
	if (options.maxDepth && runtime.depth > options.maxDepth) {
		throw new Error('[tree] extend(): max depth reached(' + options.maxDepth + ')');
	}

	if (options.circular) {
		runtime.references.sources.push(source);
		runtime.references.targets.push(target);
	}

	if (options.own) {
		if (options.nonEnum) {
			sourceKeys = Object.getOwnPropertyNames(source);
		} else {
			sourceKeys = Object.keys(source);
		}
	} else {
		sourceKeys = source;
	}

	for (sourceKey in sourceKeys) {
		if (options.own) {
			sourceKey = sourceKeys[sourceKey];
		}

		// If descriptor is on, get it now
		if (options.descriptor) {
			sourceDescriptor = Object.getOwnPropertyDescriptor(source, sourceKey);
			sourceValue = sourceDescriptor.value;
		} else {
			// We have to trigger an eventual getter only once
			sourceValue = source[sourceKey];
		}

		targetPointer = target;
		targetKey = runtime.prefix + sourceKey;

		// Do not copy if property is a function and we don't want them
		if (options.nofunc && typeof sourceValue === 'function') {
			continue;
		}

		// 'unflat' mode computing
		if (options.unflat && runtime.depth === 0) {
			path = sourceKey.split(options.unflat);
			jmax = path.length - 1;

			if (jmax) {
				for (j = 0; j < jmax; j++) {
					if (!targetPointer[path[j]] || _typeof(targetPointer[path[j]]) !== 'object' && typeof targetPointer[path[j]] !== 'function') {
						targetPointer[path[j]] = {};
					}

					targetPointer = targetPointer[path[j]];
				}

				targetKey = runtime.prefix + path[jmax];
			}
		}

		if (options.deep && sourceValue && ((typeof sourceValue === 'undefined' ? 'undefined' : _typeof(sourceValue)) === 'object' || options.deepFunc && typeof sourceValue === 'function') && (!options.descriptor || !sourceDescriptor.get) && (
		// not a condition we just cache sourceValueProto now
		(sourceValueProto = Object.getPrototypeOf(sourceValue)) || true) && (!options.deepFilter || (!options.deepFilter.whitelist || options.deepFilter.whitelist.indexOf(sourceValueProto) !== -1) && (!options.deepFilter.blacklist || options.deepFilter.blacklist.indexOf(sourceValueProto) === -1))) {
			if (options.circular) {
				indexOfSource = runtime.references.sources.indexOf(sourceValue);
			}

			if (options.flat) {
				// No circular references reconnection when in 'flat' mode
				if (indexOfSource >= 0) {
					continue;
				}

				extendOne({ depth: runtime.depth + 1, prefix: runtime.prefix + sourceKey + options.flat, references: runtime.references }, options, targetPointer, sourceValue);
			} else {
				if (indexOfSource >= 0) {
					// Circular references reconnection...
					if (options.descriptor) {
						Object.defineProperty(targetPointer, targetKey, {
							value: runtime.references.targets[indexOfSource],
							enumerable: sourceDescriptor.enumerable,
							writable: sourceDescriptor.writable,
							configurable: sourceDescriptor.configurable
						});
					} else {
						targetPointer[targetKey] = runtime.references.targets[indexOfSource];
					}

					continue;
				}

				if (!targetPointer[targetKey] || !targetPointer.hasOwnProperty(targetKey) || _typeof(targetPointer[targetKey]) !== 'object' && typeof targetPointer[targetKey] !== 'function') {
					if (Array.isArray(sourceValue)) {
						value = [];
					} else if (options.proto) {
						value = Object.create(sourceValueProto);
					} // jshint ignore:line
					else if (options.inherit) {
							value = Object.create(sourceValue);
						} else {
							value = {};
						}

					if (options.descriptor) {
						Object.defineProperty(targetPointer, targetKey, {
							value: value,
							enumerable: sourceDescriptor.enumerable,
							writable: sourceDescriptor.writable,
							configurable: sourceDescriptor.configurable
						});
					} else {
						targetPointer[targetKey] = value;
					}
				} else if (options.proto && Object.getPrototypeOf(targetPointer[targetKey]) !== sourceValueProto) {
					Object.setPrototypeOf(targetPointer[targetKey], sourceValueProto);
				} else if (options.inherit && Object.getPrototypeOf(targetPointer[targetKey]) !== sourceValue) {
					Object.setPrototypeOf(targetPointer[targetKey], sourceValue);
				}

				if (options.circular) {
					runtime.references.sources.push(sourceValue);
					runtime.references.targets.push(targetPointer[targetKey]);
				}

				// Recursively extends sub-object
				extendOne({ depth: runtime.depth + 1, prefix: '', references: runtime.references }, options, targetPointer[targetKey], sourceValue);
			}
		} else if (options.preserve && targetPointer[targetKey] !== undefined) {
			// Do not overwrite, and so do not delete source's properties that were not moved
			continue;
		} else if (!options.inherit) {
			if (options.descriptor) {
				Object.defineProperty(targetPointer, targetKey, sourceDescriptor);
			} else {
				targetPointer[targetKey] = sourceValue;
			}
		}

		// Delete owned property of the source object
		if (options.move) {
			delete source[sourceKey];
		}
	}
}

// export default function extend (target) {
//     for(var i=1; i<arguments.length; ++i) {
//         var from = arguments[i];
//         if(typeof from !== 'object') continue;
//         for(var j in from) {
//             if(from.hasOwnProperty(j)) {
//                 target[j] = typeof from[j]==='object'
//                 ? extend({}, target[j], from[j])
//                 : from[j];
//             }
//         }
//     }
//     return target;
// }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = exports.clone = undefined;

var _clone = __webpack_require__(8);

var _clone2 = _interopRequireDefault(_clone);

var _extend = __webpack_require__(9);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.clone = _clone2.default;
exports.extend = _extend2.default;
exports.default = {
  clone: _clone2.default,
  extend: _extend2.default
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(12);

var _base2 = _interopRequireDefault(_base);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class implementing custom behaviour for Adobe Analytics provider.
 *
 * @extends BaseProvider
 */
var AdobeAnalyticsProvider = function (_BaseProvider) {
  _inherits(AdobeAnalyticsProvider, _BaseProvider);

  /**
   * Create a Adobe Analytics Provider.
   *
   * @param  {Object} config Configuration needed to init Adobe Analytics Provider
   */
  function AdobeAnalyticsProvider(config) {
    _classCallCheck(this, AdobeAnalyticsProvider);

    var _this = _possibleConstructorReturn(this, (AdobeAnalyticsProvider.__proto__ || Object.getPrototypeOf(AdobeAnalyticsProvider)).call(this, config));

    _this.helperScript = null;
    return _this;
  }

  /**
   * Check for adobe analytics tag script on header document.
   *
   * @method init
   * @param  {Function} cb Callback to be executed when checkForAdobeAnalyticsScript function has finished.
   */


  _createClass(AdobeAnalyticsProvider, [{
    key: 'init',
    value: function init(cb) {
      this.checkForAdobeAnalyticsScript(cb);
    }

    /**
     * Check for adobe analytics tag script on header document.
     *
     * @method checkForAdobeAnalyticsScript
     * @param  {Function} cb Callback to be executed, if present, when function has finished.
     */

  }, {
    key: 'checkForAdobeAnalyticsScript',
    value: function checkForAdobeAnalyticsScript(cb) {
      var tag = document.querySelector('[src*="' + _constants.ADOBE_PROVIDER_SCRIPT_SKELETON + '"]');

      if (!tag) {
        throw new Error('Adobe Analytics script tag must be present on header.');
        return;
      }

      if (this.helperScript) {
        this.loadScript(this.helperScript, cb);
      } else if (cb) {
        cb();
      }
    }

    /**
     * Loads asynchronously ADB_Helper script and append it to document header.
     * When it finish, will execute given callback.
     *
     * @method loadScript
     * @param  {Function} cb Callback to be executed when ga script has finished loading.
     */

  }, {
    key: 'loadScript',
    value: function loadScript(helperScript, cb) {
      var script = document.createElement('script');

      script.onload = cb || null;
      script.src = helperScript;
      script.async = 1;
      document.head.appendChild(script);
    }

    /**
     * Send given action and updatedData to be tracked by Adobe Analytics provider.
     *
     * @method sendEvent
     * @param  {String} action Action to be sent to the tracker.
     * @param  {String} updatedData Data to be sent to the tracker.
     */

  }, {
    key: 'sendEvent',
    value: function sendEvent(action, updatedData) {
      window[this.dataLayerName] = updatedData;
      window._satellite.track(action);
    }
  }]);

  return AdobeAnalyticsProvider;
}(_base2.default);

exports.default = AdobeAnalyticsProvider;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dataLayer = __webpack_require__(6);

var _dataLayer2 = _interopRequireDefault(_dataLayer);

var _dotProp = __webpack_require__(1);

var _dotProp2 = _interopRequireDefault(_dotProp);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var get = _dotProp2.default.get,
    has = _dotProp2.default.has;

/**
 * Class defining base Analytics Provider functionality.
 */

var BaseProvider = function () {

  /**
   * Create a BaseProvider.
   *
   * @param  {Object} [config={}] Configuration needed to init Base Provider (dataLayer, dataLayerName)
   */
  function BaseProvider() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, BaseProvider);

    this.dataLayer = null;
    this.dataLayerName = null;
    this.helperScript = null;
    this.onAnalyticReceived = null;

    var dataLayer = new _dataLayer2.default(config);
    var _config$dataLayerName = config.dataLayerName,
        dataLayerName = _config$dataLayerName === undefined ? _constants.DEFAULT_DATA_LAYER_NAME : _config$dataLayerName,
        _config$helperScript = config.helperScript,
        helperScript = _config$helperScript === undefined ? '' : _config$helperScript,
        _config$onAnalyticRec = config.onAnalyticReceived,
        onAnalyticReceived = _config$onAnalyticRec === undefined ? null : _config$onAnalyticRec;


    _extends(this, {
      dataLayer: dataLayer,
      dataLayerName: dataLayerName,
      helperScript: helperScript,
      onAnalyticReceived: onAnalyticReceived
    });
  }

  /**
   *  Initialization method for providers. Entry point for loadScript calls.
   *  Must execute cb to continues the Analytics collection.
   *
   * @method init
   * @param  {Function} cb Callback to continues Analytics collection process.
   * @interface
   */


  _createClass(BaseProvider, [{
    key: 'init',
    value: function init(cb) {
      throw new Error('init method must be implemented on each analytics provider.');
    }

    /**
     * Lady loading corresponding analytics script.
     *
     * @method loadScript
     * @param  {Function} cb Callback to continues Analytics collection process.
     * @interface
     */

  }, {
    key: 'loadScript',
    value: function loadScript(cb) {
      throw new Error('loadScript method must be implemented on each analytics provider.');
    }

    /**
     * Send given event to corresponding analytics provider.
     *
     * @method sendEvent
     * @interface
     */

  }, {
    key: 'sendEvent',
    value: function sendEvent() {
      throw new Error('sendEvent method must be implemented on each analytics provider.');
    }

    /**
     * Send analytics event data to implemented provider.
     *
     * @private
     * @method _trackEvent
     * @param  {BridgeEvent} e Bridge event that contains detail, event and action data.
     */

  }, {
    key: '_trackEvent',
    value: function _trackEvent(e) {
      var _this = this;

      var _getMetricsFromEvent2 = this._getMetricsFromEvent(e),
          _getMetricsFromEvent3 = _getMetricsFromEvent2.analytics,
          action = _getMetricsFromEvent3.action,
          data = _getMetricsFromEvent3.data,
          _getMetricsFromEvent4 = _getMetricsFromEvent2.channel,
          name = _getMetricsFromEvent4.name,
          value = _getMetricsFromEvent4.value;

      // TODO: revisar destructuring...no me termina de convencer cuando existen casos no controlados


      if (!action || !data) {
        return;
      }

      this.dataLayer.update(data, value).then(function (updatedData) {
        _this.sendEvent(action, updatedData);

        if (_this.onAnalyticReceived) {
          _this.onAnalyticReceived({ type: action, detail: data });
        }
      });
    }

    /**
     * Send page view event data to implemented provider.
     *
     * @private
     * @method _setFootPrint
     * @param  {BridgeEvent} e Bridge event that contains page, action and data.
     */

  }, {
    key: '_setFootPrint',
    value: function _setFootPrint(e) {
      var _this2 = this;

      var _getMetricsFromFootpr = this._getMetricsFromFootprint(e),
          _getMetricsFromFootpr2 = _getMetricsFromFootpr.analytics,
          action = _getMetricsFromFootpr2.action,
          data = _getMetricsFromFootpr2.data,
          name = _getMetricsFromFootpr.page.name;

      // TODO: revisar destructuring...no me termina de convencer cuando existen casos no controlados


      if (!action || !data) {
        return;
      }

      this.dataLayer.update(data).then(function (updatedData) {
        _this2.sendEvent(action, updatedData);

        if (_this2.onAnalyticReceived) {
          _this2.onAnalyticReceived({ type: action, detail: data });
        }
      });
    }

    /**
     * Send window error event data to implemented provider.
     *
     * @private
     * @method _trackError
     * @param  {Event} e Error event.
     */

  }, {
    key: '_trackError',
    value: function _trackError(e) {}

    /**
     * Extract metrics from given event and normalices them in a friendly-format object.
     *
     * @private
     * @method _getMetricsFromEvent
     * @param  {BridgeEvent} e Bridge event that contains detail, event and action data.
     * @return {Object} Object that contains channel name, current channel state, analytics action and analytics data.
     */

  }, {
    key: '_getMetricsFromEvent',
    value: function _getMetricsFromEvent(e) {
      var detail = e.detail || {};
      var event = detail.event || {}; // get(e, 'detail.event');
      var analytics = detail.detail || {}; // get(e, 'detail.detail');
      var channelName = get(event, 'type');
      var channelValue = event && event.detail && event.detail.value || event.detail;
      var analyticsData = get(analytics, this.dataLayerName);

      var analyticsAction = get(analytics, 'action');

      if (analyticsAction instanceof Object) {
        var isBindFromChannel = has(analyticsAction, 'bind');

        if (isBindFromChannel) {
          // we get path from binding value from analytics...
          var channelObjectPath = analyticsAction.bind;
          var value = void 0;

          if (channelValue) {
            if (channelObjectPath !== _constants.FULL_CHANNEL_VALUE_PATH) {
              // we recover real value from channel object path...
              analyticsAction = get(channelValue, channelObjectPath);
            } else {
              // we recover FULL channel value...
              analyticsAction = channelValue;
            }
          } else {
            // show warn
            console.warn(analyticsAction + ' property value could not be resolved - empty channel data - IGNORED.');
          }
        } else {
          // show warn
          console.warn(analyticsAction + ' property is not following convention for analytics channel binding - IGNORED.');
        }
      }

      return {
        channel: {
          name: channelName,
          value: channelValue
        },
        analytics: {
          action: analyticsAction,
          data: analyticsData
        }
      };
    }

    /**
     * Extract metrics from given event and normalices them in a friendly-format object.
     *
     * @private
     * @method _getMetricsFromFootprint
     * @param  {BridgeEvent} e Bridge event that contains page, action and data.
     * @return {Object} Object that contains page name, analytics action and analytics data.
     */

  }, {
    key: '_getMetricsFromFootprint',
    value: function _getMetricsFromFootprint(e) {
      var detail = e.detail || {};
      var pageName = detail.name || {}; // get(e, 'detail.name');
      var analytics = detail.node && detail.node.analytics || {}; // get(e, 'detail.node.analytics');

      var analyticsAction = get(analytics, 'action');
      var analyticsData = get(analytics, this.dataLayerName);

      return {
        page: {
          name: pageName
        },
        analytics: {
          action: analyticsAction,
          data: analyticsData
        }
      };
    }
  }]);

  return BaseProvider;
}();

exports.default = BaseProvider;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=cells-adobe-analytics-collector.js.map