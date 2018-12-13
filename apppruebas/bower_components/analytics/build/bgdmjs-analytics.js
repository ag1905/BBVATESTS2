(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bgdmjs_analitycs"] = factory();
	else
		root["bgdmjs_analitycs"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: default */
/* exports used: default */
/*!******************************************!*\
  !*** ./src/js/data-layer/data-layer.es7 ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application__ = __webpack_require__(/*! ./application */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_campaign__ = __webpack_require__(/*! ./internal-campaign */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__(/*! ./page */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__privacy__ = __webpack_require__(/*! ./privacy */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product__ = __webpack_require__(/*! ./product */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(/*! ./user */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dot_prop__ = __webpack_require__(/*! dot-prop */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dot_prop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_dot_prop__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








/**
 * Representa la estructura de datos principal a usarse en la capa de datos
 * creada para registrar información relacionada con marketing y analítica.
 *
 * Esta capa de datos no se corresponde a la idea de datos como almacén para una BBDD.
 * Es decir, no hace referencia al almacenamiento de la información para el correcto
 * funcionamiento de la página web sino que se corresponde más con el concepto de estructura
 * de la información que la página web va a tratar, enfocado, en este caso, a ser usado por
 * un TMS (Tag Manager System).
 *
 * Este Data Layer guardará variables, objetos, eventos, etc. Estos elementos estarán
 * disponibles para la web, pero no son necesarios para el funcionamiento de la misma.
 *
 * Los datos que podemos almacenar en un Data Layer, pueden tener naturaleza dinámica y estática.
 * - Estática : Forma en la que podemos almacenar los datos independientemente de la estructura
 *              o diseño de la web. Los datos pueden cambiar dependiendo de la página donde se
 *              encuentre, pero no son alterados por la interacción del usuario.
 *              Si se produce un cambio en el diseño o la estructura de los datos (si se han
 *              delimitado correctamente con identificadores en el DOM), no afecta a su funcionamiento.
 *              Por ejemplo: dominio, nombre de la página, idioma...
 * - Dinámica : Esta parte de los datos es la que es modificada por la interacción de usuario en tiempo
 *              de ejecución, por las acciones y eventos que desencadena el usuario al navegar por la web.
 *              Por ejemplo: el dato que introduce el usuario en el campo 'búsqueda' y se envía al pulsar
 *              un botón.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer
 * @class     bgdmjs.analytics.dataLayer.DataLayer
 * @see       {@link https://docs.google.com/document/d/1WIZJUShuSmR6k8nDsNqK_IkFX_RS4cz_ielnjYHO92U|Prueba de concepto}
 * @see       {@link https://drive.google.com/file/d/0B1LHjxcYuyz1ckJQMThpYTBqM1U|Guía Completa Data Layer}
 */

var BgdmjsAnalyticsDataLayerDataLayer = function () {

  /**
   * Constructor de la clase.
   *
   * @method constructor
   *
   * @constructor
   */

  /**
   * Información del usuario y su dispositivo.
   *
   * @property user
   * @type     {bgdmjs.analytics.dataLayer.User|null}
   */

  /**
   * Información privada del usuario.
   *
   * @property privacy
   * @type     {bgdmjs.analytics.dataLayer.Privacy|null}
   */

  /**
   * Información de la página siendo vista por el usuario o a la cual se dirige.
   *
   * @property page
   * @type     {bgdmjs.analytics.dataLayer.Page|null}
   */

  /**
   * Información de la aplicación.
   *
   * @property application
   * @type     {bgdmjs.analytics.dataLayer.Application|null}
   */
  function BgdmjsAnalyticsDataLayerDataLayer() {
    _classCallCheck(this, BgdmjsAnalyticsDataLayerDataLayer);

    this.application = null;
    this.internalCampaign = null;
    this.page = null;
    this.pageInstanceID = 'de';
    this.privacy = null;
    this.product = null;
    this.user = null;
    this.versionDL = '1.0.2';

    this.application = new __WEBPACK_IMPORTED_MODULE_0__application__["a" /* default */]();
    this.internalCampaign = new __WEBPACK_IMPORTED_MODULE_1__internal_campaign__["a" /* default */]();
    this.page = new __WEBPACK_IMPORTED_MODULE_2__page__["a" /* default */]();
    this.privacy = new __WEBPACK_IMPORTED_MODULE_3__privacy__["a" /* default */]();
    this.product = new __WEBPACK_IMPORTED_MODULE_4__product__["a" /* default */]();
    this.user = new __WEBPACK_IMPORTED_MODULE_5__user__["a" /* default */]();
  }

  /**
   * Devuelve el valor correspondiente a la ruta especificada.
   *
   * @method get
   *
   * @param {String} path     Ruta del valor a obtener usando `.` como separador.
   * @param {*}      defValue Valor a retornar si el valor de la ruta es `undefined`.
   *
   * @return {*} Value of path.
   */

  /**
   * Versión del Data Layer.
   * Esta versión coincidirá con la con las versiones del Data Layer que se vayan actualizando e implementando
   *
   * @property versionDL
   * @type     {string}
   */

  /**
   * Información del producto seleccionado por el usuario.
   *
   * @property product
   * @type     {bgdmjs.analytics.dataLayer.Product|null}
   */

  /**
   * Tiene como objetivo distinguir el Data Layer entre los
   * distintos entornos (desarrollo, calidad, producción...)
   *
   * Valores posibles:
   * - aus : aceptación de usuario
   * - de  : desarrollo
   * - ei  : integrado
   * - pro : producción
   * - pre : preproducción
   * - qa  : calidad
   *
   * @property pageInstanceID
   * @type     {string}
   */

  /**
   * Información de la campaña.
   *
   * @property internalCampaign
   * @type     {bgdmjs.analytics.dataLayer.InternalCampaign|null}
   */


  _createClass(BgdmjsAnalyticsDataLayerDataLayer, [{
    key: 'get',
    value: function get(path, defValue) {
      return __WEBPACK_IMPORTED_MODULE_6_dot_prop___default.a.get(this, path, defValue);
    }

    /**
     * Asigna el valor a la ruta especificada.
     *
     * @method set
     *
     * @param {String} path  Ruta del valor a asignar usando `.` como separador.
     * @param {*}      value Valor a asignar.
     */

  }, {
    key: 'set',
    value: function set(path, value) {
      __WEBPACK_IMPORTED_MODULE_6_dot_prop___default.a.set(this, path, value);
    }
  }]);

  return BgdmjsAnalyticsDataLayerDataLayer;
}();

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerDataLayer;
;

/***/ }),
/* 1 */
/* unknown exports provided */
/* exports used: default */
/*!*****************************!*\
  !*** ./~/dot-prop/index.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObj = __webpack_require__(/*! is-obj */ 2);

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
			return obj;
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
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./~/is-obj/index.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (x) {
	var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
	return x !== null && (type === 'object' || type === 'function');
};

/***/ }),
/* 3 */
/* unknown exports provided */
/* exports used: default */
/*!******************************************!*\
  !*** ./~/mobile-detect/mobile-detect.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.3.5 2016-11-14*/
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
                "Samsung": "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F",
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
                "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280",
                "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\\b",
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
                "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
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

        MobileDetect.version = '1.3.5 2016-11-14';

        return MobileDetect;
    }); // end of call of define()
})(function (undefined) {
    if (typeof module !== 'undefined' && module.exports) {
        return function (factory) {
            module.exports = factory();
        };
    } else if (true) {
        return __webpack_require__(/*! !webpack amd define */ 18);
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
/* 4 */
/* exports provided: default */
/* exports used: default */
/*!*******************************************!*\
  !*** ./src/js/data-layer/application.es7 ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Recoge la información relativa al proceso y funnel.
 *
 * Los datos de este apartado se rellenarían en caso de fichas de
 * producto (datos del products), así como en todos los pasos que
 * formen parte de un proceso relacionado con el producto.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer
 * @class     bgdmjs.analytics.dataLayer.Application
 */
var BgdmjsAnalyticsDataLayerApplication = function () {
  function BgdmjsAnalyticsDataLayerApplication() {
    _classCallCheck(this, BgdmjsAnalyticsDataLayerApplication);

    this.amount = 0.0;
    this.currency = '';
    this.errorType = '';
    this.fulfillmentModel = '';
    this.interactionLevel = '';
    this.interestRate = '';
    this.name = '';
    this.numberOfPayments = 0;
    this.offer = '';
    this.operationNumber = '';
    this.paymentAmount = 0;
    this.paymentDate = '';
    this.paymentType = '';
    this.process = '';
    this.programTypeHired = '';
    this.serviceCharge = '';
    this.state = '';
    this.step = '';
    this.term = 0;
    this.transactionID = '';
    this.type = '';
    this.typology = '';
  }
  /**
   * Monto al que asciende el producto seleccionado.
   * No se deben poner comas en los números, sólo `.`
   * para indicar los decimales.
   *
   * @property amount
   * @type     {number}
   */

  /**
   * Tipo de moneda utilizada en el proceso.
   * Código ISO de 3 letras.
   *
   * @property currency
   * @type     {string}
   */

  /**
   * Error ocurrido al completar un formulario.
   *
   * @property errorType
   * @type     {string}
   */

  /**
   * Recoge cómo se completa el proceso.
   * Valores posibles:
   * - offline        : Si el proceso se completa 0nline.
   * - online         : Si el proceso, a pesar de iniciarse online, se termina offline (por
   *                    ejemplo, un proceso de contratación que, en la última pantalla, envíe
   *                    al cliente a las oficinas para que ésta sea efectiva).
   * - online/offline : Para procesos que dependiendo de las casuísticas pueden acabar online u offline
   *                    (ej. Dependiendo de los datos de usuario finaliza el proceso online u offline).
   *
   * @property fulfillmentModel
   * @type     {string}
   */

  /**
   * Interacción del usuario dentro del level que implique
   * una identificación dentro del proceso `application`.
   *
   * @property currency
   * @type     {string}
   */

  /**
   * Tasa de interés.
   *
   * @property interestRate
   * @type     {number}
   */

  /**
   * Nombre detallado del funnel.
   *
   * @property name
   * @type     {string}
   */

  /**
   * Cantidad de cuotas del producto seleccionado.
   *
   * @property numberOfPayments
   * @type     {number}
   */

  /**
   * Nombre de la oferta propuesta al usuario.
   *
   * @property offer
   * @type     {string}
   */

  /**
   * Número serializado de la operación.
   *
   * @property operationNumber
   * @type     {string}
   */

  /**
   * Monto de las cuotas del producto seleccionado.
   *
   * @property paymentAmount
   * @type     {number}
   */

  /**
   * Día en el que se hará el pago del proceso actual.
   * Formato ISO 8601.
   *
   * @property paymentDate
   * @type     {string}
   */

  /**
   * Tipo de pago usado en el proceso.
   *
   * @property paymentType
   * @type     {string}
   */

  /**
   * Subcategoría del producto sobre el que se ejecuta el `application`.
   * La variable `process` será informada sólo si su valor es diferente
   * al de la variable `typology`, es decir, primero deberá informarse
   * `tipology` y sólo si es necesario, la variable `process`.
   *
   * @property process
   * @type     {string}
   */

  /**
   * Tipo del programa contratado.
   *
   * @property programTypeHired
   * @type     {string}
   */

  /**
   * Valor de la comisión que se le aplica al cliente por el servicio.
   *
   * @property serviceCharge
   * @type     {string}
   */

  /**
   * Estado en el que se encuentra el proceso.
   * Posibles valores:
   * - inicio
   * - finalizado
   * - contratado
   * - aprobado
   * - rechazado
   * - en revision
   *
   * - inicio      : Este valor se informará en la primera pantalla de un proceso o funnel,
   *                 pues se considera que en ese caso, el estado del proceso es `inicio`.
   * - finalizado  : Este estado aplica a la pantalla final de un funnel (Thank you page)
   *                 en aquellos casos en los que el funnel no finaliza con una contratación
   *                 online y no se requiera aprobación, o el proceso haya finalizado pero
   *                 la aprobación no sucede en esa navegación del proceso.
   * - contratado  : Este estado aplica a la pantalla final de un funnel (Thank you page) en
   *                 aquellos casos en los que el funnel finaliza con una contratación online.
   * - aprobado    : Este estado aplica a la pantalla del proceso en la que el funnel sea aprobado.
   * - rechazado   : Este estado aplica a la pantalla del proceso en la que el estado de la
   *                 petición sea “rechazado”.
   * - en revision : Este estado aplica a la pantalla del proceso en la que el estado de la
   *                 petición sea “en revisión”.
   *
   * @property state
   * @type     {string}
   */

  /**
   * Paso del proceso en el que se encuentra el usuario que
   * coincidirá con el último level de la variable page con valor.
   *
   * @property step
   * @type     {string}
   */

  /**
   * Plazo para el pago del producto especificado en días.
   *
   * @property term
   * @type     {number}
   */

  /**
   * Identificador único de un proceso de contratación
   * que se inicia online y finaliza offline para cada
   * usuario que lo inicia.
   *
   * @property transactionID
   * @type     {string}
   */

  /**
   * Almacena la categoría o finalidad del proceso.
   * Valores posibles:
   * - `alta clientes`
   * - `autogestion`
   * - `consulta`
   * - `contratacion`
   * - `formulario`
   * - `operativa`
   * - `simulador`
   *
   * @property type
   * @type     {string}
   */

  /**
   * Tipología del producto o del proceso que se selecciona
   * una vez iniciado el funnel.
   *
   * @property typology
   * @type     {string}
   */


  _createClass(BgdmjsAnalyticsDataLayerApplication, [{
    key: 'application',


    /**
     * Devuelve el nombre y tipo del funnel.
     *
     * @return {Object}
     */
    get: function get() {
      return {
        name: this.name,
        type: this.type
      };
    }
  }]);

  return BgdmjsAnalyticsDataLayerApplication;
}();

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerApplication;
;

/***/ }),
/* 5 */
/* exports provided: default */
/* exports used: default */
/*!*************************************************!*\
  !*** ./src/js/data-layer/internal-campaign.es7 ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_campaign_attribute__ = __webpack_require__(/*! ./internal-campaign/attribute */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_campaign_event_info__ = __webpack_require__(/*! ./internal-campaign/event-info */ 7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Recoge la información relativa a las campañas que se exponen al usuario,
 * así como las interacciones que el usuario hace con las mismas.
 *
 * Este apartado sólo se informará cuando haya información de campañas expuestas al
 * usuario (o éste interactúe con ellas), en caso contrario, los campos irán sin informar.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer
 * @class     bgdmjs.analytics.dataLayer.InternalCampaign
 */

var BgdmjsAnalyticsDataLayerInternalCampaign = function () {
    function BgdmjsAnalyticsDataLayerInternalCampaign() {
        _classCallCheck(this, BgdmjsAnalyticsDataLayerInternalCampaign);

        this.attributes = [];
        this.event = {};
    }
    /**
     * Atributos de la campaña.
     *
     * @property attributes
     * @type     {bgdmjs.analytics.dataLayer.internalCampaign.Attribute[]}
     */

    /**
     * Evento recibido sobre la campaña.
     *
     * @property event
     * @type     {bgdmjs.analytics.dataLayer.internalCampaign.EventInfo}
     */


    _createClass(BgdmjsAnalyticsDataLayerInternalCampaign, [{
        key: 'addCampaign',


        /**
         * Agrega una campaña al listado.
         *
         * @method addCampaign
         *
         * @param {Object} config Objeto a usar para configurar la campaña.
         */
        value: function addCampaign(config) {
            if (config) {
                if (config instanceof __WEBPACK_IMPORTED_MODULE_0__internal_campaign_attribute__["a" /* default */]) {
                    this.attributes.push(config);
                } else if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
                    var _attribute = new __WEBPACK_IMPORTED_MODULE_0__internal_campaign_attribute__["a" /* default */]();
                    _extends(_attribute, config);
                    this.attributes.push(_attribute);
                }
            }
        }

        /**
         * Asigna a la campaña la información del evento recibido.
         *
         * @method setEvent
         *
         * @param {string} action Acción de la campaña del evento.
         * @param {string} name   Nombre del evento.
         */

    }, {
        key: 'setEvent',
        value: function setEvent(action) {
            var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'IntCmpClick';

            if (action && name) {
                var _event = new __WEBPACK_IMPORTED_MODULE_1__internal_campaign_event_info__["a" /* default */]();
                if (action) {
                    _event.siteActionName = action;
                }
                if (name) {
                    _event.eventName = name;
                }
                this.event = {
                    eventInfo: _event
                };
            }
        }
    }]);

    return BgdmjsAnalyticsDataLayerInternalCampaign;
}();

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerInternalCampaign;

/***/ }),
/* 6 */
/* exports provided: default */
/* exports used: default */
/*!***********************************************************!*\
  !*** ./src/js/data-layer/internal-campaign/attribute.es7 ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Atributos de cada campaña.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer.internalCampaign
 * @class     bgdmjs.analytics.dataLayer.internalCampaign.Attribute
 */
var BgdmjsAnalyticsDataLayerInternalCampaignAttribute = function BgdmjsAnalyticsDataLayerInternalCampaignAttribute() {
  _classCallCheck(this, BgdmjsAnalyticsDataLayerInternalCampaignAttribute);

  this.campaignFormat = '';
  this.campaignName = '';
  this.collectiveCode = '';
  this.location = '';
  this.product = '';
  this.productCode = '';
  this.quantity = '';
}
/**
 * Formato de la campaña.
 * Valores posibles:
 * - `carrusel`
 * - `banner home`
 * - `bocadillo`
 * - `banner crm`
 * - `ventana bloqueante`
 * - `zona one click`
 *
 * @property campaignFormat
 * @type     {string}
 */

/**
 * Nombre de la campaña.
 *
 * @property campaignName
 * @type     {string}
 */

/**
 * Código de Colectivo sin descripción, es decir,
 * sólo almacenaría el código númerico del collectivo.
 *
 * @property collectiveCode
 * @type     {string}
 */

/**
 * Zona de la página en la que está cargada la campaña.
 * Valores posibles:
 * - `superior izquierda`
 * - `superior derecha`
 * - `superior centro`
 * - `centro`
 * - `centro izquierda`
 * - `centro derecha`
 * - `inferior izquierda`
 * - `inferior derecha`
 * - `inferior centro`
 *
 * @property location
 * @type     {string}
 */

/**
 * Nombre del producto ofrecido en la campaña. 
 * Si el nombre de la campaña identifica de manera
 * unívoca un producto, este valor será vacío.
 *
 * @property product
 * @type     {string}
 */

/**
 * Código del producto ofrecido en la campaña. 
 * Si el nombre de la campaña identifica de manera
 * unívoca un producto, este valor será vacío.
 *
 * @property productCode
 * @type     {string}
 */

/**
 * En caso de que la campaña muestre un valor, diferente para
 * varios usuarios, se completará este campo con el valor del
 * importe cantidad o monto incluyendo la moneda, en caso de
 * ser necesario.
 *
 * Esta propiedad informará la cantidad más representativa de
 * la campaña junto con la moneda.
 *
 * Por ejemplo, en la campaña de anticipo de nómina, cada usuario
 * puede tener un anticipo diferente, por lo que se incluirá el
 * tipo de moneda de la campaña. 
 *
 * En campañas de préstamos pueden
 * ser ofrecidos importes diferentes a cada usuario, en este caso
 * el valor de `quantity` será el monto del préstamo ofrecido.
 *
 * En hipotecas pueden ofrecerse condiciones de interés concretos
 * (TAE + 1% por ejemplo) en este caso el calor será (1%).
 *
 * Valores de ejemplo: (654 €, 10.000 MXN, 1%...)
 *
 * @property quantity
 * @type     {string}
 */
;

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerInternalCampaignAttribute;

/***/ }),
/* 7 */
/* exports provided: default */
/* exports used: default */
/*!************************************************************!*\
  !*** ./src/js/data-layer/internal-campaign/event-info.es7 ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Información del evento recibido en una campaña.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer.internalCampaign
 * @class     bgdmjs.analytics.dataLayer.internalCampaign.EventInfo
 */
var InternalCampaignEventInfo = function InternalCampaignEventInfo() {
  _classCallCheck(this, InternalCampaignEventInfo);

  this.eventName = 'IntCmpClick';
  this.siteActionName = '';
}
/**
 * Evento que recoge los clicks que los usuarios realizan en
 * las campañas internas.
 *
 * @property eventName
 * @type     {string}
 */

/**
 * Recoge los datos de la campaña interna sobre la
 * que el usuario ha hecho click.
 *
 * Se pondrá el valor para que sea igual a los datos de la campaña
 * interna sobre la que el usuario ha hecho click.
 *
 * Dichos datos serán concatenados y constituirán el ID único de la
 * campaña (ej: centro:banner home:25:contrata tu cuenta:cuenta blue:123:100$).
 *
 * @property siteActionName
 * @type     {string}
 */
;

/* harmony default export */ __webpack_exports__["a"] = InternalCampaignEventInfo;

/***/ }),
/* 8 */
/* exports provided: default */
/* exports used: default */
/*!************************************!*\
  !*** ./src/js/data-layer/page.es7 ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_activity__ = __webpack_require__(/*! ./page/activity */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_info__ = __webpack_require__(/*! ./page/info */ 10);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Almacena la información relacionada con la página y la actividad
 * del usuario en dicha página.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer
 * @class     bgdmjs.analytics.dataLayer.Page
 */

var BgdmjsAnalyticsDataLayerPage =

/**
 * Constructor de la clase.
 *
 * @constructor
 */

/**
 * Actividad en la página.
 *
 * @type {bgdmjs.analytics.dataLayer.page.Activity|null}
 */
function BgdmjsAnalyticsDataLayerPage() {
  _classCallCheck(this, BgdmjsAnalyticsDataLayerPage);

  this.pageActivity = null;
  this.pageInfo = null;

  this.pageActivity = new __WEBPACK_IMPORTED_MODULE_0__page_activity__["a" /* default */]();
  this.pageInfo = new __WEBPACK_IMPORTED_MODULE_1__page_info__["a" /* default */]();
}
/**
 * Información de la página.
 *
 * @type {bgdmjs.analytics.dataLayer.page.Info|null}
 */
;

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerPage;

/***/ }),
/* 9 */
/* exports provided: default */
/* exports used: default */
/*!*********************************************!*\
  !*** ./src/js/data-layer/page/activity.es7 ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search__ = __webpack_require__(/*! ./search */ 11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * Recoge la información relativa a interacciones específicas del usuario con la web,
 * como realización de búsquedas en el buscador interno o visualización de vídeos.
 *
 * En tanto el usuario no interactúe con esos elementos, estos valores irán vacíos
 * como en el ejemplo.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer.page
 * @class     bgdmjs.analytics.dataLayer.page.Activity
 */

var BgdmjsAnalyticsDataLayerPageActivity =

/**
 * Constructor de la clase.
 *
 * @method constructor
 *
 * @constructor
 */

/**
 * Identificador (contenido en la URL) con el que se
 * identifica el video visualizado.
 *
 * @property nameOfVideoDisplayed
 * @type     {string}
 */
function BgdmjsAnalyticsDataLayerPageActivity() {
  _classCallCheck(this, BgdmjsAnalyticsDataLayerPageActivity);

  this.nameOfVideoDisplayed = '';
  this.search = null;

  this.search = new __WEBPACK_IMPORTED_MODULE_0__search__["a" /* default */]();
}
/**
 * Información de la búsqueda realizada.
 *
 * @property search
 * @type     {bgdmjs.analytics.dataLayer.page.Search|null}
 */
;

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerPageActivity;

/***/ }),
/* 10 */
/* exports provided: default */
/* exports used: default */
/*!*****************************************!*\
  !*** ./src/js/data-layer/page/info.es7 ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Recoge la información relativa a la página visualizada por el usuario,
 * de manera que esta información deberá actualizarse con cada carga de pantalla,
 * pero también para los eventos asíncronos.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer.page
 * @class     bgdmjs.analytics.dataLayer.page.Info
 */
var BgdmjsAnalyticsDataLayerPageInfo = function () {
  _createClass(BgdmjsAnalyticsDataLayerPageInfo, [{
    key: 'pageName',


    /**
     * El campo pageName tiene la función de registrar el nombre de
     * las páginas del site de forma que puedan ser identificadas.
     *
     * Se obtiene a partir del `area`, `pageSegment` y de los
     * `levels`, todos separados por ':'.
     *
     * @property pageName
     * @type     {string}
     * @readonly
     */

    /**
     * Niveles de profundidad de la navegación (conceptualmente, sería
     * similar al funcionamiento de las migas de pan de la web).
     *
     * @property levels
     * @type     {string[]}
     */

    /**
     * Región de visita.
     * Terminología ISO 3166-2 igual a la de la propiedad `language`.
     *
     * @property geoRegion
     * @type     {string}
     */

    /**
     * Categoría del canal (en la web siempre será online).
     * Valores posibles:
     * - branch
     * - atm
     * - call center
     * - online
     *
     * @property channel
     * @type     {string}
     */

    /**
     * Si el usuario se encuentra en la parte pública o en la parte privada del sitio.
     * Valores posibles: `publica`, `privada`.
     *
     * @property area
     * @type     {string}
     */

    /**
     * Listado de dominios considerados como privados.
     *
     * @property privateDomains
     * @type    {string[]}
     * @static
     */
    get: function get() {
      return [this.area, this.pageSegment].concat(_toConsumableArray(this.levels.filter(function (l) {
        return !!l;
      }))).join(':');
    }

    /**
     * Esta variable indica el nivel más general del canal al que
     * pertenece cada una de las páginas etiquetadas.
     *
     * Se empleará para indicar en qué secciones se encuentra la página.
     *
     * Valores cerrados en función del país.
     *
     * @property pageSegment
     * @type     {string}
     */

    /**
     * Tipo de página (objetivo de la misma).
     * Valores posibles:
     * - Informacion          : Englobaría consultas, simuladores, formularios y páginas que sean de
     *                          información como el buscador, el localizador de cajeros, posición global etc..
     * - Transaccion          : Serían páginas que estén contenidas en procesos para los que es necesario
     *                          introducir una clave, como operativas y contrataciones.
     * - Landing Page         : Nuevas páginas creadas para aterrizaje de campañas.
     * - Home                 : La home del site
     * - Subhome              : Serían las Subhomes de productos, dependiendo del país en algunos casos
     *                          podemos encontrarnos con dos niveles de subhome.
     *                          La subhome sería el nivel más alto y la subhome1 el nivel más bajo.
     * - Catalogo de Producto : Dentro de esta tipología de página se encontrarían todas las fichas de producto.
     *
     * @property pageIntent
     * @type     {string}
     */

    /**
     * Idioma seleccionado por el usuario.
     * Se informará usando la terminología ISO de 2 caracteres.
     * Así, por ejemplo, para el español se usará `ES`, para el inglés `EN`.
     *
     * @property language
     * @type     {string}
     */

    /**
     * Especifica el error que se ha producido en la página.
     * Si está vacío, no se ha producido ningún error.
     *
     * @property errorPage
     * @type     {string}
     */

    /**
     * Banco o unidad de negocio.
     * Valores en función del país: 'BBVA España', 'BBVA Bancomer', etc.
     *
     * @property businessUnit
     * @type     {string}
     */

    /**
     * Listado de dominios considerados como públicos.
     *
     * @property publicDomains
     * @type     {string[]}
     * @static
     */

    /**
     * Servidor donde está alojada la página actual.
     *
     * @property server
     * @type     {string}
     */

    /**
     * Entorno de la web por dispositivo.
     * Posibles valores:
     * - app
     * - escritorio
     * - web-movil
     *
     * @property sysEnv
     * @type     {string}
     */

    /**
     * Número identificador de versión de la web que está cargada.
     *
     * @property version
     * @type     {string}
     */

  }]);

  /**
   * Constructor de la clase.
   *
   * @method constructor
   *
   * @constructor
   */
  function BgdmjsAnalyticsDataLayerPageInfo() {
    _classCallCheck(this, BgdmjsAnalyticsDataLayerPageInfo);

    this.area = '';
    this.businessUnit = '';
    this.channel = 'online';
    this.errorPage = '';
    this.geoRegion = '';
    this.language = '';
    this.levels = [];
    this.pageIntent = '';
    this.pageSegment = '';
    this.server = window.location.hostname;
    this.sysEnv = 'app';
    this.version = '';

    this.__initArea();
  }

  /**
   * Inicializa el área en función del dominio actual.
   *
   * @method __initArea
   *
   * @private
   */


  _createClass(BgdmjsAnalyticsDataLayerPageInfo, [{
    key: '__initArea',
    value: function __initArea() {
      if (!this.area) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = BgdmjsAnalyticsDataLayerPageInfo.publicDomains[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _domain = _step.value;

            if (_domain === this.server) {
              this.area = 'publica';
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (!this.area) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = BgdmjsAnalyticsDataLayerPageInfo.privateDomains[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _domain2 = _step2.value;

              if (_domain2 === this.server) {
                this.area = 'privada';
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }
    }

    /**
     * Asigna al nivel especificado el valor indicado.
     *
     * @method setLevel
     *
     * @param {number} index Índice del nivel.
     * @param {string} value Valor a asignar.
     */

  }, {
    key: 'setLevel',
    value: function setLevel(index, value) {
      this.levels[index] = value;
    }
  }]);

  return BgdmjsAnalyticsDataLayerPageInfo;
}();

BgdmjsAnalyticsDataLayerPageInfo.privateDomains = ['localhost'];
BgdmjsAnalyticsDataLayerPageInfo.publicDomains = [];
/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerPageInfo;

/***/ }),
/* 11 */
/* exports provided: default */
/* exports used: default */
/*!*******************************************!*\
  !*** ./src/js/data-layer/page/search.es7 ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Información de la búsqueda realizada por el usuario.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer.page
 * @class     bgdmjs.analytics.dataLayer.page.Search
 */
var BgdmjsAnalyticsDataLayerPageSearch = function BgdmjsAnalyticsDataLayerPageSearch() {
  _classCallCheck(this, BgdmjsAnalyticsDataLayerPageSearch);

  this.onSiteSearchResults = 0;
  this.onSiteSearchTerm = '';
  this.originalPage = '';
}
/**
 * Número de resultados que devuelve una búsqueda en el buscador
 * interno del sitio cuando un usuario realiza una búsqueda.
 *
 * @property onSiteSearchResults
 * @type     {number}
 */

/**
 * Término buscado en el buscador del sitio.
 *
 * @property onSiteSearchTerm
 * @type     {string}
 */

/**
 * Nombre de la página `pageName` desde la que se realiza la búsqueda.
 *
 * @property originalPage
 * @type     {string}
 */
;

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerPageSearch;

/***/ }),
/* 12 */
/* exports provided: default */
/* exports used: default */
/*!***************************************!*\
  !*** ./src/js/data-layer/privacy.es7 ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__privacy_category__ = __webpack_require__(/*! ./privacy/category */ 13);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * Clasifica las categorías de acceso a los datos.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer
 * @class     bgdmjs.analytics.dataLayer.Privacy
 */

var BgdmjsAnalyticsDataLayerPrivacy = function () {
  function BgdmjsAnalyticsDataLayerPrivacy() {
    _classCallCheck(this, BgdmjsAnalyticsDataLayerPrivacy);

    this.accessCategories = [];
  }
  /**
   * Lista de categorías.
   *
   * @type {bgdmjs.analytics.dataLayer.privacy.Category[]}
   */


  _createClass(BgdmjsAnalyticsDataLayerPrivacy, [{
    key: 'addCategory',


    /**
     * Agrega una categoría a la lista.
     *
     * @param {string}   name    Nombre de la categoría.
     * @param {string[]} domains Dominios permitidos de la categoría.
     */
    value: function addCategory(name, domains) {
      if (!Array.isArray(domains)) {
        domains = [domains];
      }
      var _category = new __WEBPACK_IMPORTED_MODULE_0__privacy_category__["a" /* default */]();
      _category.categoryName = name;
      _category.domains = domains;
      this.accessCategories.push(_category);
    }
  }]);

  return BgdmjsAnalyticsDataLayerPrivacy;
}();

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerPrivacy;
;

/***/ }),
/* 13 */
/* exports provided: default */
/* exports used: default */
/*!************************************************!*\
  !*** ./src/js/data-layer/privacy/category.es7 ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Representa una categoría de acceso a datos.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer.privacy
 * @class     bgdmjs.analytics.dataLayer.privacy.Category
 */
var BgdmjsAnalyticsDataLayerPrivacyCategory = function BgdmjsAnalyticsDataLayerPrivacyCategory() {
  _classCallCheck(this, BgdmjsAnalyticsDataLayerPrivacyCategory);

  this.categoryName = '';
  this.domains = [];
}
/**
 * Nombre de la categoría que se corresponderá
 * con el de la variable `Security`.
 *
 * @property categoryName
 * @type     {string}
 */

/**
 * Array de dominios de la herramienta que accede
 * al área de privacidad.
 *
 * @type {string[]}
 */
;

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerPrivacyCategory;
;

/***/ }),
/* 14 */
/* exports provided: default */
/* exports used: default */
/*!***************************************!*\
  !*** ./src/js/data-layer/product.es7 ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Recoge la información relativa a las campañas que se exponen al usuario,
 * así como las interacciones que el usuario hace con las mismas.
 *
 * Este apartado sólo se informará cuando haya información de campañas expuestas al
 * usuario (o éste interactúe con ellas), en caso contrario, los campos irán sin informar.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer
 * @class     bgdmjs.analytics.dataLayer.Product
 */
var BgdmjsAnalyticsDataLayerProduct = function BgdmjsAnalyticsDataLayerProduct() {
  _classCallCheck(this, BgdmjsAnalyticsDataLayerProduct);

  this.primaryCategory = '';
  this.productName = '';
  this.productSubtype = '';
}
/**
 * Recoge el valor más general de la categoría de un producto.
 * Valores posibles:
 * - cuentas
 * - depositos
 * - inversiones
 * - prestamos
 * - seguros
 * - tarjetas
 *
 * @property primaryCategory
 * @type     {string}
 */

/**
 * Nombre detallado del producto.
 *
 * @property productName
 * @type     {string}
 */

/**
 * Subcategoría del producto.
 *
 * Recoge un valor más detallado sobre la categoría a la que pertenece el
 * producto (por ejemplo “tarjeta de credito”, “tarjeta de debito”, etc).
 * Este campo sólo se informará si existe un subtipo de producto; en caso
 * contrario, se dejará sin informar.
 *
 * @property productSubtype
 * @type     {string}
 */
;

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerProduct;
;

/***/ }),
/* 15 */
/* exports provided: default */
/* exports used: default */
/*!************************************!*\
  !*** ./src/js/data-layer/user.es7 ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_device__ = __webpack_require__(/*! ./user/device */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_segment__ = __webpack_require__(/*! ./user/segment */ 17);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Almacena la información relativa al perfil del cliente.
 *
 * Debe informarse tanto para los eventos síncronos como asíncronos.
 *
 * Datos como “logado/no logado” o el profile ID se informarán en toda la
 * navegación, mientras que el tipo de cliente (profile) sólo se informará
 * en aquellos funnels en los que el cliente es clasificado por tipología
 * (como sucede por ejemplo en el funnel de Agendamiento).
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer
 * @class     bgdmjs.analytics.dataLayer.User
 */

var BgdmjsAnalyticsDataLayerUser =

/**
 * Constructor de la clase.
 *
 * @constructor
 */

/**
 * Información del segmento del cliente.
 *
 * @type {bgdmjs.analytics.dataLayer.user.Segment|null}
 */

/**
 * Género del usuario.
 *
 * @property gender
 * @type     {string}
 */

/**
 * País de origen del usuario.
 *
 * @property country
 * @type     {string}
 */
function BgdmjsAnalyticsDataLayerUser() {
  _classCallCheck(this, BgdmjsAnalyticsDataLayerUser);

  this.age = 0;
  this.country = '';
  this.device = null;
  this.gender = '';
  this.profileID = '';
  this.segment = null;
  this.userState = '';

  this.device = new __WEBPACK_IMPORTED_MODULE_0__user_device__["a" /* default */]();
  this.segment = new __WEBPACK_IMPORTED_MODULE_1__user_segment__["a" /* default */]();
}
/**
 * Si el usuario está logado o no.
 * Valores posibles: `logado`, `no logado`.
 *
 * @property userState
 * @type     {string}
 */

/**
 * Identificador único del cliente.
 *
 * Este valor debe estar encriptado y NUNCA debe coincidir con el
 * número interno que el Banco guarda en sus bases de datos de Clientes.
 *
 * Cada país generará un único identificador por usuario que
 * permita ser cruzado con el back-end interno. .
 *
 * @property profileID
 * @type     {string}
 */

/**
 * Información del dispositivo.
 *
 * @property device
 * @type     {bgdmjs.analytics.dataLayer.user.Device|null}
 */

/**
 * Edad del usuario.
 *
 * @property age
 * @type     {number}
 */
;

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerUser;
;

/***/ }),
/* 16 */
/* exports provided: default */
/* exports used: default */
/*!*******************************************!*\
  !*** ./src/js/data-layer/user/device.es7 ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobile_detect__ = __webpack_require__(/*! mobile-detect */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobile_detect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobile_detect__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * Recoge la información del dispositivo del usuario.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer.user
 * @class     bgdmjs.analytics.dataLayer.user.Device
 */

var BgdmjsAnalyticsDataLayerUserDevice = function BgdmjsAnalyticsDataLayerUserDevice() {
  _classCallCheck(this, BgdmjsAnalyticsDataLayerUserDevice);

  this.mobile = !!new __WEBPACK_IMPORTED_MODULE_0_mobile_detect___default.a(navigator.userAgent).mobile() ? 'si' : 'no';
  this.userAgent = navigator.userAgent;
}
/**
 * Valor calculado a partir del userAgent en el que `si` será el
 * resultado si el usuario se conecta desde un dispositivo móvil.
 *
 * @property mobile
 * @type     {string}
 */

/**
 * Valor `userAgent` del navegador desde el que se conecta el usuario.
 * Este valor identificará el tipo de dispositivo y versión del mismo.
 *
 * @property userAgent
 * @type     {string}
 */
;

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerUserDevice;

/***/ }),
/* 17 */
/* exports provided: default */
/* exports used: default */
/*!********************************************!*\
  !*** ./src/js/data-layer/user/segment.es7 ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Recoge la información del perfil del usuario.
 *
 * @package   bgdmjs.analytics
 * @namespace bgdmjs.analytics.dataLayer.user
 * @class     bgdmjs.analytics.dataLayer.user.Segment
 */
var BgdmjsAnalyticsDataLayerUserSegment = function BgdmjsAnalyticsDataLayerUserSegment() {
  _classCallCheck(this, BgdmjsAnalyticsDataLayerUserSegment);

  this.global = '';
  this.profile = '';
}
/**
 * Perfil del cliente para la parte privada.
 * Esta variable se formará por la concatenación del código del país y
 * del código que identifique el segmento o tipo de cliente (ej: 001002).
 *
 * Los códigos de cada país son:
 *
 * - Argentina : 005
 * - Bancomer  : 003
 * - Chile     : 008
 * - Colombia  : 004
 * - Compass   : 006
 * - España    : 724
 * - Perú      : 001
 * - Venezuela : 007
 *
 * @property global
 * @type     {string}
 */

/**
 * Cuando un cliente realiza un proceso, éste puede ser
 * clasificado como un tipo específico de cliente.
 *
 * Se trata de una tipología en la que se clasifica al
 * cliente en relación con un proceso/producto concreto.
 *
 * Esta clasificación del cliente en relación con un
 * producto específico se recoge en esta variable.
 *
 * @property profile
 * @type     {string}
 */
;

/* harmony default export */ __webpack_exports__["a"] = BgdmjsAnalyticsDataLayerUserSegment;
;

/***/ }),
/* 18 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 19 */
/* exports provided: default */
/* all exports used */
/*!***********************!*\
  !*** ./src/index.es7 ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_data_layer_data_layer__ = __webpack_require__(/*! ./js/data-layer/data-layer */ 0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


//

var AnalyticsModel = function AnalyticsModel() {
  _classCallCheck(this, AnalyticsModel);

  this.DataLayer = __WEBPACK_IMPORTED_MODULE_0__js_data_layer_data_layer__["a" /* default */];
};

var analytics = new AnalyticsModel();

/* harmony default export */ __webpack_exports__["default"] = analytics;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZDgxZTg3YzQ0NWM0OGZjZGFhMSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci9kYXRhLWxheWVyLmVzNyIsIndlYnBhY2s6Ly8vLi9+L2RvdC1wcm9wL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtb2JqL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbW9iaWxlLWRldGVjdC9tb2JpbGUtZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kYXRhLWxheWVyL2FwcGxpY2F0aW9uLmVzNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci9pbnRlcm5hbC1jYW1wYWlnbi5lczciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RhdGEtbGF5ZXIvaW50ZXJuYWwtY2FtcGFpZ24vYXR0cmlidXRlLmVzNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci9pbnRlcm5hbC1jYW1wYWlnbi9ldmVudC1pbmZvLmVzNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci9wYWdlLmVzNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci9wYWdlL2FjdGl2aXR5LmVzNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci9wYWdlL2luZm8uZXM3Iiwid2VicGFjazovLy8uL3NyYy9qcy9kYXRhLWxheWVyL3BhZ2Uvc2VhcmNoLmVzNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci9wcml2YWN5LmVzNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci9wcml2YWN5L2NhdGVnb3J5LmVzNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci9wcm9kdWN0LmVzNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci91c2VyLmVzNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGF0YS1sYXllci91c2VyL2RldmljZS5lczciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2RhdGEtbGF5ZXIvdXNlci9zZWdtZW50LmVzNyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguZXM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQSxjQUFjLEVBQUU7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsRUFBRTtBQUNqQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2hMQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG9CQUFvQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFVBQVU7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNySEE7O0FBRUEsb0dBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLDJDQUEyQyxJQUFJO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsRUFBRSxPQUFPLEVBQUUsMENBQTBDO0FBQ2xJLDRJQUE0SSxLQUFLO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxpQ0FBaUMscUJBQXFCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUIscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsT0FBTztBQUMxQixxQkFBcUIsTUFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsT0FBTztBQUMxQixvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwyQkFBMkIsZ0JBQWdCLGVBQWUsb0JBQW9CO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQseUJBQXlCLE1BQU0sMEJBQTBCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBCQUEwQixXQUFXLHlCQUF5QixNQUFNLDBCQUEwQjtBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEIsV0FBVyx5QkFBeUIsTUFBTSwwQkFBMEI7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEIsV0FBVyx5QkFBeUIsTUFBTSwwQkFBMEI7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDZCQUE2QjtBQUNuRTtBQUNBLHlDQUF5Qyw4QkFBOEI7QUFDdkUsdUVBQXVFLHNCQUFzQjtBQUM3RjtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDZCQUE2QjtBQUNuRTtBQUNBLHlDQUF5Qyw4QkFBOEI7QUFDdkUsdUVBQXVFLHNCQUFzQjtBQUM3RjtBQUNBLHlCQUF5QixNQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0EsbUVBQW1FLDZCQUE2QjtBQUNoRyx1QkFBdUIsc0JBQXNCLEdBQUcseUJBQXlCLEdBQUcsMEJBQTBCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQSx5QkFBeUIsa0JBQWtCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUssRUFBRTtBQUNQLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJOzs7Ozs7Ozs7Ozs7QUN6N0JELGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDMVFBO0FBQUEsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsb0dBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRLGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsbUJBQW1CLE9BQU87QUFDMUI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVELGlHOzs7Ozs7Ozs7Ozs7QUNuR0EsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSwwRzs7Ozs7Ozs7Ozs7O0FDL0dBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxrRjs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLHFGOzs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUFBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSwyRjs7Ozs7Ozs7Ozs7O0FDbENBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdFIiwiZmlsZSI6ImJnZG1qcy1hbmFseXRpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJiZ2RtanNfYW5hbGl0eWNzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJnZG1qc19hbmFsaXR5Y3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNkODFlODdjNDQ1YzQ4ZmNkYWExIiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuaW1wb3J0IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckFwcGxpY2F0aW9uIGZyb20gJy4vYXBwbGljYXRpb24nO1xuaW1wb3J0IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckludGVybmFsQ2FtcGFpZ24gZnJvbSAnLi9pbnRlcm5hbC1jYW1wYWlnbic7XG5pbXBvcnQgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclByaXZhY3kgZnJvbSAnLi9wcml2YWN5JztcbmltcG9ydCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQcm9kdWN0IGZyb20gJy4vcHJvZHVjdCc7XG5pbXBvcnQgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IGRvdFByb3AgZnJvbSAnZG90LXByb3AnO1xuLyoqXG4gKiBSZXByZXNlbnRhIGxhIGVzdHJ1Y3R1cmEgZGUgZGF0b3MgcHJpbmNpcGFsIGEgdXNhcnNlIGVuIGxhIGNhcGEgZGUgZGF0b3NcbiAqIGNyZWFkYSBwYXJhIHJlZ2lzdHJhciBpbmZvcm1hY2nDs24gcmVsYWNpb25hZGEgY29uIG1hcmtldGluZyB5IGFuYWzDrXRpY2EuXG4gKlxuICogRXN0YSBjYXBhIGRlIGRhdG9zIG5vIHNlIGNvcnJlc3BvbmRlIGEgbGEgaWRlYSBkZSBkYXRvcyBjb21vIGFsbWFjw6luIHBhcmEgdW5hIEJCREQuXG4gKiBFcyBkZWNpciwgbm8gaGFjZSByZWZlcmVuY2lhIGFsIGFsbWFjZW5hbWllbnRvIGRlIGxhIGluZm9ybWFjacOzbiBwYXJhIGVsIGNvcnJlY3RvXG4gKiBmdW5jaW9uYW1pZW50byBkZSBsYSBww6FnaW5hIHdlYiBzaW5vIHF1ZSBzZSBjb3JyZXNwb25kZSBtw6FzIGNvbiBlbCBjb25jZXB0byBkZSBlc3RydWN0dXJhXG4gKiBkZSBsYSBpbmZvcm1hY2nDs24gcXVlIGxhIHDDoWdpbmEgd2ViIHZhIGEgdHJhdGFyLCBlbmZvY2FkbywgZW4gZXN0ZSBjYXNvLCBhIHNlciB1c2FkbyBwb3JcbiAqIHVuIFRNUyAoVGFnIE1hbmFnZXIgU3lzdGVtKS5cbiAqXG4gKiBFc3RlIERhdGEgTGF5ZXIgZ3VhcmRhcsOhIHZhcmlhYmxlcywgb2JqZXRvcywgZXZlbnRvcywgZXRjLiBFc3RvcyBlbGVtZW50b3MgZXN0YXLDoW5cbiAqIGRpc3BvbmlibGVzIHBhcmEgbGEgd2ViLCBwZXJvIG5vIHNvbiBuZWNlc2FyaW9zIHBhcmEgZWwgZnVuY2lvbmFtaWVudG8gZGUgbGEgbWlzbWEuXG4gKlxuICogTG9zIGRhdG9zIHF1ZSBwb2RlbW9zIGFsbWFjZW5hciBlbiB1biBEYXRhIExheWVyLCBwdWVkZW4gdGVuZXIgbmF0dXJhbGV6YSBkaW7DoW1pY2EgeSBlc3TDoXRpY2EuXG4gKiAtIEVzdMOhdGljYSA6IEZvcm1hIGVuIGxhIHF1ZSBwb2RlbW9zIGFsbWFjZW5hciBsb3MgZGF0b3MgaW5kZXBlbmRpZW50ZW1lbnRlIGRlIGxhIGVzdHJ1Y3R1cmFcbiAqICAgICAgICAgICAgICBvIGRpc2XDsW8gZGUgbGEgd2ViLiBMb3MgZGF0b3MgcHVlZGVuIGNhbWJpYXIgZGVwZW5kaWVuZG8gZGUgbGEgcMOhZ2luYSBkb25kZSBzZVxuICogICAgICAgICAgICAgIGVuY3VlbnRyZSwgcGVybyBubyBzb24gYWx0ZXJhZG9zIHBvciBsYSBpbnRlcmFjY2nDs24gZGVsIHVzdWFyaW8uXG4gKiAgICAgICAgICAgICAgU2kgc2UgcHJvZHVjZSB1biBjYW1iaW8gZW4gZWwgZGlzZcOxbyBvIGxhIGVzdHJ1Y3R1cmEgZGUgbG9zIGRhdG9zIChzaSBzZSBoYW5cbiAqICAgICAgICAgICAgICBkZWxpbWl0YWRvIGNvcnJlY3RhbWVudGUgY29uIGlkZW50aWZpY2Fkb3JlcyBlbiBlbCBET00pLCBubyBhZmVjdGEgYSBzdSBmdW5jaW9uYW1pZW50by5cbiAqICAgICAgICAgICAgICBQb3IgZWplbXBsbzogZG9taW5pbywgbm9tYnJlIGRlIGxhIHDDoWdpbmEsIGlkaW9tYS4uLlxuICogLSBEaW7DoW1pY2EgOiBFc3RhIHBhcnRlIGRlIGxvcyBkYXRvcyBlcyBsYSBxdWUgZXMgbW9kaWZpY2FkYSBwb3IgbGEgaW50ZXJhY2Npw7NuIGRlIHVzdWFyaW8gZW4gdGllbXBvXG4gKiAgICAgICAgICAgICAgZGUgZWplY3VjacOzbiwgcG9yIGxhcyBhY2Npb25lcyB5IGV2ZW50b3MgcXVlIGRlc2VuY2FkZW5hIGVsIHVzdWFyaW8gYWwgbmF2ZWdhciBwb3IgbGEgd2ViLlxuICogICAgICAgICAgICAgIFBvciBlamVtcGxvOiBlbCBkYXRvIHF1ZSBpbnRyb2R1Y2UgZWwgdXN1YXJpbyBlbiBlbCBjYW1wbyAnYsO6c3F1ZWRhJyB5IHNlIGVudsOtYSBhbCBwdWxzYXJcbiAqICAgICAgICAgICAgICB1biBib3TDs24uXG4gKlxuICogQHBhY2thZ2UgICBiZ2RtanMuYW5hbHl0aWNzXG4gKiBAbmFtZXNwYWNlIGJnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyXG4gKiBAY2xhc3MgICAgIGJnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyLkRhdGFMYXllclxuICogQHNlZSAgICAgICB7QGxpbmsgaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xV0laSlVTaHVTbVI2azhuRHNOcUtfSWtGWF9SUzRjel9pZWxuallITzkyVXxQcnVlYmEgZGUgY29uY2VwdG99XG4gKiBAc2VlICAgICAgIHtAbGluayBodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzBCMUxIanhjWXV5ejFja0pRTVRocFlUQnFNMVV8R3XDrWEgQ29tcGxldGEgRGF0YSBMYXllcn1cbiAqL1xuXG52YXIgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyRGF0YUxheWVyID0gZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBkZSBsYSBjbGFzZS5cbiAgICpcbiAgICogQG1ldGhvZCBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG5cbiAgLyoqXG4gICAqIEluZm9ybWFjacOzbiBkZWwgdXN1YXJpbyB5IHN1IGRpc3Bvc2l0aXZvLlxuICAgKlxuICAgKiBAcHJvcGVydHkgdXNlclxuICAgKiBAdHlwZSAgICAge2JnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyLlVzZXJ8bnVsbH1cbiAgICovXG5cbiAgLyoqXG4gICAqIEluZm9ybWFjacOzbiBwcml2YWRhIGRlbCB1c3VhcmlvLlxuICAgKlxuICAgKiBAcHJvcGVydHkgcHJpdmFjeVxuICAgKiBAdHlwZSAgICAge2JnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyLlByaXZhY3l8bnVsbH1cbiAgICovXG5cbiAgLyoqXG4gICAqIEluZm9ybWFjacOzbiBkZSBsYSBww6FnaW5hIHNpZW5kbyB2aXN0YSBwb3IgZWwgdXN1YXJpbyBvIGEgbGEgY3VhbCBzZSBkaXJpZ2UuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBwYWdlXG4gICAqIEB0eXBlICAgICB7YmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIuUGFnZXxudWxsfVxuICAgKi9cblxuICAvKipcbiAgICogSW5mb3JtYWNpw7NuIGRlIGxhIGFwbGljYWNpw7NuLlxuICAgKlxuICAgKiBAcHJvcGVydHkgYXBwbGljYXRpb25cbiAgICogQHR5cGUgICAgIHtiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5BcHBsaWNhdGlvbnxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyRGF0YUxheWVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJEYXRhTGF5ZXIpO1xuXG4gICAgdGhpcy5hcHBsaWNhdGlvbiA9IG51bGw7XG4gICAgdGhpcy5pbnRlcm5hbENhbXBhaWduID0gbnVsbDtcbiAgICB0aGlzLnBhZ2UgPSBudWxsO1xuICAgIHRoaXMucGFnZUluc3RhbmNlSUQgPSAnZGUnO1xuICAgIHRoaXMucHJpdmFjeSA9IG51bGw7XG4gICAgdGhpcy5wcm9kdWN0ID0gbnVsbDtcbiAgICB0aGlzLnVzZXIgPSBudWxsO1xuICAgIHRoaXMudmVyc2lvbkRMID0gJzEuMC4yJztcblxuICAgIHRoaXMuYXBwbGljYXRpb24gPSBuZXcgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyQXBwbGljYXRpb24oKTtcbiAgICB0aGlzLmludGVybmFsQ2FtcGFpZ24gPSBuZXcgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVySW50ZXJuYWxDYW1wYWlnbigpO1xuICAgIHRoaXMucGFnZSA9IG5ldyBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlKCk7XG4gICAgdGhpcy5wcml2YWN5ID0gbmV3IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclByaXZhY3koKTtcbiAgICB0aGlzLnByb2R1Y3QgPSBuZXcgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUHJvZHVjdCgpO1xuICAgIHRoaXMudXNlciA9IG5ldyBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJVc2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV2dWVsdmUgZWwgdmFsb3IgY29ycmVzcG9uZGllbnRlIGEgbGEgcnV0YSBlc3BlY2lmaWNhZGEuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoICAgICBSdXRhIGRlbCB2YWxvciBhIG9idGVuZXIgdXNhbmRvIGAuYCBjb21vIHNlcGFyYWRvci5cbiAgICogQHBhcmFtIHsqfSAgICAgIGRlZlZhbHVlIFZhbG9yIGEgcmV0b3JuYXIgc2kgZWwgdmFsb3IgZGUgbGEgcnV0YSBlcyBgdW5kZWZpbmVkYC5cbiAgICpcbiAgICogQHJldHVybiB7Kn0gVmFsdWUgb2YgcGF0aC5cbiAgICovXG5cbiAgLyoqXG4gICAqIFZlcnNpw7NuIGRlbCBEYXRhIExheWVyLlxuICAgKiBFc3RhIHZlcnNpw7NuIGNvaW5jaWRpcsOhIGNvbiBsYSBjb24gbGFzIHZlcnNpb25lcyBkZWwgRGF0YSBMYXllciBxdWUgc2UgdmF5YW4gYWN0dWFsaXphbmRvIGUgaW1wbGVtZW50YW5kb1xuICAgKlxuICAgKiBAcHJvcGVydHkgdmVyc2lvbkRMXG4gICAqIEB0eXBlICAgICB7c3RyaW5nfVxuICAgKi9cblxuICAvKipcbiAgICogSW5mb3JtYWNpw7NuIGRlbCBwcm9kdWN0byBzZWxlY2Npb25hZG8gcG9yIGVsIHVzdWFyaW8uXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBwcm9kdWN0XG4gICAqIEB0eXBlICAgICB7YmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIuUHJvZHVjdHxudWxsfVxuICAgKi9cblxuICAvKipcbiAgICogVGllbmUgY29tbyBvYmpldGl2byBkaXN0aW5ndWlyIGVsIERhdGEgTGF5ZXIgZW50cmUgbG9zXG4gICAqIGRpc3RpbnRvcyBlbnRvcm5vcyAoZGVzYXJyb2xsbywgY2FsaWRhZCwgcHJvZHVjY2nDs24uLi4pXG4gICAqXG4gICAqIFZhbG9yZXMgcG9zaWJsZXM6XG4gICAqIC0gYXVzIDogYWNlcHRhY2nDs24gZGUgdXN1YXJpb1xuICAgKiAtIGRlICA6IGRlc2Fycm9sbG9cbiAgICogLSBlaSAgOiBpbnRlZ3JhZG9cbiAgICogLSBwcm8gOiBwcm9kdWNjacOzblxuICAgKiAtIHByZSA6IHByZXByb2R1Y2Npw7NuXG4gICAqIC0gcWEgIDogY2FsaWRhZFxuICAgKlxuICAgKiBAcHJvcGVydHkgcGFnZUluc3RhbmNlSURcbiAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAqL1xuXG4gIC8qKlxuICAgKiBJbmZvcm1hY2nDs24gZGUgbGEgY2FtcGHDsWEuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBpbnRlcm5hbENhbXBhaWduXG4gICAqIEB0eXBlICAgICB7YmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIuSW50ZXJuYWxDYW1wYWlnbnxudWxsfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJEYXRhTGF5ZXIsIFt7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KHBhdGgsIGRlZlZhbHVlKSB7XG4gICAgICByZXR1cm4gZG90UHJvcC5nZXQodGhpcywgcGF0aCwgZGVmVmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzaWduYSBlbCB2YWxvciBhIGxhIHJ1dGEgZXNwZWNpZmljYWRhLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzZXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoICBSdXRhIGRlbCB2YWxvciBhIGFzaWduYXIgdXNhbmRvIGAuYCBjb21vIHNlcGFyYWRvci5cbiAgICAgKiBAcGFyYW0geyp9ICAgICAgdmFsdWUgVmFsb3IgYSBhc2lnbmFyLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQocGF0aCwgdmFsdWUpIHtcbiAgICAgIGRvdFByb3Auc2V0KHRoaXMsIHBhdGgsIHZhbHVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyRGF0YUxheWVyO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJEYXRhTGF5ZXI7XG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZGF0YS1sYXllci9kYXRhLWxheWVyLmVzN1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc09iaiA9IHJlcXVpcmUoJ2lzLW9iaicpO1xuXG5mdW5jdGlvbiBnZXRQYXRoU2VnbWVudHMocGF0aCkge1xuXHR2YXIgcGF0aEFyciA9IHBhdGguc3BsaXQoJy4nKTtcblx0dmFyIHBhcnRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHAgPSBwYXRoQXJyW2ldO1xuXG5cdFx0d2hpbGUgKHBbcC5sZW5ndGggLSAxXSA9PT0gJ1xcXFwnICYmIHBhdGhBcnJbaSArIDFdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHAgPSBwLnNsaWNlKDAsIC0xKSArICcuJztcblx0XHRcdHAgKz0gcGF0aEFyclsrK2ldO1xuXHRcdH1cblxuXHRcdHBhcnRzLnB1c2gocCk7XG5cdH1cblxuXHRyZXR1cm4gcGFydHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRnZXQ6IGZ1bmN0aW9uIGdldChvYmosIHBhdGgsIHZhbHVlKSB7XG5cdFx0aWYgKCFpc09iaihvYmopIHx8IHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cblx0XHR2YXIgcGF0aEFyciA9IGdldFBhdGhTZWdtZW50cyhwYXRoKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aEFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBwYXRoQXJyW2ldKSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdG9iaiA9IG9ialtwYXRoQXJyW2ldXTtcblxuXHRcdFx0aWYgKG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbCkge1xuXHRcdFx0XHQvLyBgb2JqYCBpcyBlaXRoZXIgYHVuZGVmaW5lZGAgb3IgYG51bGxgIHNvIHdlIHdhbnQgdG8gc3RvcCB0aGUgbG9vcCwgYW5kXG5cdFx0XHRcdC8vIGlmIHRoaXMgaXMgbm90IHRoZSBsYXN0IGJpdCBvZiB0aGUgcGF0aCwgYW5kXG5cdFx0XHRcdC8vIGlmIGl0IGRpZCd0IHJldHVybiBgdW5kZWZpbmVkYFxuXHRcdFx0XHQvLyBpdCB3b3VsZCByZXR1cm4gYG51bGxgIGlmIGBvYmpgIGlzIGBudWxsYFxuXHRcdFx0XHQvLyBidXQgd2Ugd2FudCBgZ2V0KHtmb286IG51bGx9LCAnZm9vLmJhcicpYCB0byBlcXVhbCBgdW5kZWZpbmVkYCwgb3IgdGhlIHN1cHBsaWVkIHZhbHVlLCBub3QgYG51bGxgXG5cdFx0XHRcdGlmIChpICE9PSBwYXRoQXJyLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9LFxuXHRzZXQ6IGZ1bmN0aW9uIHNldChvYmosIHBhdGgsIHZhbHVlKSB7XG5cdFx0aWYgKCFpc09iaihvYmopIHx8IHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBwYXRoQXJyID0gZ2V0UGF0aFNlZ21lbnRzKHBhdGgpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcCA9IHBhdGhBcnJbaV07XG5cblx0XHRcdGlmICghaXNPYmoob2JqW3BdKSkge1xuXHRcdFx0XHRvYmpbcF0gPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGkgPT09IHBhdGhBcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRvYmpbcF0gPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0b2JqID0gb2JqW3BdO1xuXHRcdH1cblx0fSxcblx0ZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKG9iaiwgcGF0aCkge1xuXHRcdGlmICghaXNPYmoob2JqKSB8fCB0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgcGF0aEFyciA9IGdldFBhdGhTZWdtZW50cyhwYXRoKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aEFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHAgPSBwYXRoQXJyW2ldO1xuXG5cdFx0XHRpZiAoaSA9PT0gcGF0aEFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdGRlbGV0ZSBvYmpbcF07XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0b2JqID0gb2JqW3BdO1xuXG5cdFx0XHRpZiAoIWlzT2JqKG9iaikpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aGFzOiBmdW5jdGlvbiBoYXMob2JqLCBwYXRoKSB7XG5cdFx0aWYgKCFpc09iaihvYmopIHx8IHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHZhciBwYXRoQXJyID0gZ2V0UGF0aFNlZ21lbnRzKHBhdGgpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaXNPYmoob2JqKSkge1xuXHRcdFx0XHRpZiAoIShwYXRoQXJyW2ldIGluIG9iaikpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvYmogPSBvYmpbcGF0aEFycltpXV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvdC1wcm9wL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh4KSB7XG5cdHZhciB0eXBlID0gdHlwZW9mIHggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHgpO1xuXHRyZXR1cm4geCAhPT0gbnVsbCAmJiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1vYmovaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVEhJUyBGSUxFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBFRElUIVxuLyohbW9iaWxlLWRldGVjdCB2MS4zLjUgMjAxNi0xMS0xNCovXG4vKmdsb2JhbCBtb2R1bGU6ZmFsc2UsIGRlZmluZTpmYWxzZSovXG4vKmpzaGludCBsYXRlZGVmOmZhbHNlKi9cbi8qIUBsaWNlbnNlIENvcHlyaWdodCAyMDEzLCBIZWlucmljaCBHb2VibCwgTGljZW5zZTogTUlULCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hnb2VibC9tb2JpbGUtZGV0ZWN0LmpzKi9cbihmdW5jdGlvbiAoZGVmaW5lLCB1bmRlZmluZWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIGltcGwgPSB7fTtcblxuICAgICAgICBpbXBsLm1vYmlsZURldGVjdFJ1bGVzID0ge1xuICAgICAgICAgICAgXCJwaG9uZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiaVBob25lXCI6IFwiXFxcXGJpUGhvbmVcXFxcYnxcXFxcYmlQb2RcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiQmxhY2tCZXJyeVwiOiBcIkJsYWNrQmVycnl8XFxcXGJCQjEwXFxcXGJ8cmltWzAtOV0rXCIsXG4gICAgICAgICAgICAgICAgXCJIVENcIjogXCJIVEN8SFRDLiooU2Vuc2F0aW9ufEV2b3xWaXNpb258RXhwbG9yZXJ8NjgwMHw4MTAwfDg5MDB8QTcyNzJ8UzUxMGV8QzExMGV8TGVnZW5kfERlc2lyZXxUODI4Mil8QVBYNTE1Q0tUfFF0ZWs5MDkwfEFQQTkyOTJLVHxIRF9taW5pfFNlbnNhdGlvbi4qWjcxMGV8UEc4NjEwMHxaNzE1ZXxEZXNpcmUuKihBODE4MXxIRCl8QURSNjIwMHxBRFI2NDAwTHxBRFI2NDI1fDAwMUhUfEluc3BpcmUgNEd8QW5kcm9pZC4qXFxcXGJFVk9cXFxcYnxULU1vYmlsZSBHMXxaNTIwbVwiLFxuICAgICAgICAgICAgICAgIFwiTmV4dXNcIjogXCJOZXh1cyBPbmV8TmV4dXMgU3xHYWxheHkuKk5leHVzfEFuZHJvaWQuKk5leHVzLipNb2JpbGV8TmV4dXMgNHxOZXh1cyA1fE5leHVzIDZcIixcbiAgICAgICAgICAgICAgICBcIkRlbGxcIjogXCJEZWxsLipTdHJlYWt8RGVsbC4qQWVyb3xEZWxsLipWZW51ZXxERUxMLipWZW51ZSBQcm98RGVsbCBGbGFzaHxEZWxsIFNtb2tlfERlbGwgTWluaSAzaVh8WENEMjh8WENEMzV8XFxcXGIwMDFETFxcXFxifFxcXFxiMTAxRExcXFxcYnxcXFxcYkdTMDFcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiTW90b3JvbGFcIjogXCJNb3Rvcm9sYXxEUk9JRFh8RFJPSUQgQklPTklDfFxcXFxiRHJvaWRcXFxcYi4qQnVpbGR8QW5kcm9pZC4qWG9vbXxIUkkzOXxNT1QtfEExMjYwfEExNjgwfEE1NTV8QTg1M3xBODU1fEE5NTN8QTk1NXxBOTU2fE1vdG9yb2xhLipFTEVDVFJJRll8TW90b3JvbGEuKmkxfGk4Njd8aTk0MHxNQjIwMHxNQjMwMHxNQjUwMXxNQjUwMnxNQjUwOHxNQjUxMXxNQjUyMHxNQjUyNXxNQjUyNnxNQjYxMXxNQjYxMnxNQjYzMnxNQjgxMHxNQjg1NXxNQjg2MHxNQjg2MXxNQjg2NXxNQjg3MHxNRTUwMXxNRTUwMnxNRTUxMXxNRTUyNXxNRTYwMHxNRTYzMnxNRTcyMnxNRTgxMXxNRTg2MHxNRTg2M3xNRTg2NXxNVDYyMHxNVDcxMHxNVDcxNnxNVDcyMHxNVDgxMHxNVDg3MHxNVDkxN3xNb3Rvcm9sYS4qVElUQU5JVU18V1g0MzV8V1g0NDV8WFQzMDB8WFQzMDF8WFQzMTF8WFQzMTZ8WFQzMTd8WFQzMTl8WFQzMjB8WFQzOTB8WFQ1MDJ8WFQ1MzB8WFQ1MzF8WFQ1MzJ8WFQ1MzV8WFQ2MDN8WFQ2MTB8WFQ2MTF8WFQ2MTV8WFQ2ODF8WFQ3MDF8WFQ3MDJ8WFQ3MTF8WFQ3MjB8WFQ4MDB8WFQ4MDZ8WFQ4NjB8WFQ4NjJ8WFQ4NzV8WFQ4ODJ8WFQ4ODN8WFQ4OTR8WFQ5MDF8WFQ5MDd8WFQ5MDl8WFQ5MTB8WFQ5MTJ8WFQ5Mjh8WFQ5MjZ8WFQ5MTV8WFQ5MTl8WFQ5MjV8WFQxMDIxfFxcXFxiTW90byBFXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIlNhbXN1bmdcIjogXCJcXFxcYlNhbXN1bmdcXFxcYnxTTS1HOTI1MHxHVC0xOTMwMHxTR0gtSTMzN3xCR1QtUzUyMzB8R1QtQjIxMDB8R1QtQjI3MDB8R1QtQjI3MTB8R1QtQjMyMTB8R1QtQjMzMTB8R1QtQjM0MTB8R1QtQjM3MzB8R1QtQjM3NDB8R1QtQjU1MTB8R1QtQjU1MTJ8R1QtQjU3MjJ8R1QtQjY1MjB8R1QtQjczMDB8R1QtQjczMjB8R1QtQjczMzB8R1QtQjczNTB8R1QtQjc1MTB8R1QtQjc3MjJ8R1QtQjc4MDB8R1QtQzMwMTB8R1QtQzMwMTF8R1QtQzMwNjB8R1QtQzMyMDB8R1QtQzMyMTJ8R1QtQzMyMTJJfEdULUMzMjYyfEdULUMzMjIyfEdULUMzMzAwfEdULUMzMzAwS3xHVC1DMzMwM3xHVC1DMzMwM0t8R1QtQzMzMTB8R1QtQzMzMjJ8R1QtQzMzMzB8R1QtQzMzNTB8R1QtQzM1MDB8R1QtQzM1MTB8R1QtQzM1MzB8R1QtQzM2MzB8R1QtQzM3ODB8R1QtQzUwMTB8R1QtQzUyMTJ8R1QtQzY2MjB8R1QtQzY2MjV8R1QtQzY3MTJ8R1QtRTEwNTB8R1QtRTEwNzB8R1QtRTEwNzV8R1QtRTEwODB8R1QtRTEwODF8R1QtRTEwODV8R1QtRTEwODd8R1QtRTExMDB8R1QtRTExMDd8R1QtRTExMTB8R1QtRTExMjB8R1QtRTExMjV8R1QtRTExMzB8R1QtRTExNjB8R1QtRTExNzB8R1QtRTExNzV8R1QtRTExODB8R1QtRTExODJ8R1QtRTEyMDB8R1QtRTEyMTB8R1QtRTEyMjV8R1QtRTEyMzB8R1QtRTEzOTB8R1QtRTIxMDB8R1QtRTIxMjB8R1QtRTIxMjF8R1QtRTIxNTJ8R1QtRTIyMjB8R1QtRTIyMjJ8R1QtRTIyMzB8R1QtRTIyMzJ8R1QtRTIyNTB8R1QtRTIzNzB8R1QtRTI1NTB8R1QtRTI2NTJ8R1QtRTMyMTB8R1QtRTMyMTN8R1QtSTU1MDB8R1QtSTU1MDN8R1QtSTU3MDB8R1QtSTU4MDB8R1QtSTU4MDF8R1QtSTY0MTB8R1QtSTY0MjB8R1QtSTcxMTB8R1QtSTc0MTB8R1QtSTc1MDB8R1QtSTgwMDB8R1QtSTgxNTB8R1QtSTgxNjB8R1QtSTgxOTB8R1QtSTgzMjB8R1QtSTgzMzB8R1QtSTgzNTB8R1QtSTg1MzB8R1QtSTg3MDB8R1QtSTg3MDN8R1QtSTg5MTB8R1QtSTkwMDB8R1QtSTkwMDF8R1QtSTkwMDN8R1QtSTkwMTB8R1QtSTkwMjB8R1QtSTkwMjN8R1QtSTkwNzB8R1QtSTkwODJ8R1QtSTkxMDB8R1QtSTkxMDN8R1QtSTkyMjB8R1QtSTkyNTB8R1QtSTkzMDB8R1QtSTkzMDV8R1QtSTk1MDB8R1QtSTk1MDV8R1QtTTM1MTB8R1QtTTU2NTB8R1QtTTc1MDB8R1QtTTc2MDB8R1QtTTc2MDN8R1QtTTg4MDB8R1QtTTg5MTB8R1QtTjcwMDB8R1QtUzMxMTB8R1QtUzMzMTB8R1QtUzMzNTB8R1QtUzMzNTN8R1QtUzMzNzB8R1QtUzM2NTB8R1QtUzM2NTN8R1QtUzM3NzB8R1QtUzM4NTB8R1QtUzUyMTB8R1QtUzUyMjB8R1QtUzUyMjl8R1QtUzUyMzB8R1QtUzUyMzN8R1QtUzUyNTB8R1QtUzUyNTN8R1QtUzUyNjB8R1QtUzUyNjN8R1QtUzUyNzB8R1QtUzUzMDB8R1QtUzUzMzB8R1QtUzUzNTB8R1QtUzUzNjB8R1QtUzUzNjN8R1QtUzUzNjl8R1QtUzUzODB8R1QtUzUzODBEfEdULVM1NTYwfEdULVM1NTcwfEdULVM1NjAwfEdULVM1NjAzfEdULVM1NjEwfEdULVM1NjIwfEdULVM1NjYwfEdULVM1NjcwfEdULVM1NjkwfEdULVM1NzUwfEdULVM1NzgwfEdULVM1ODMwfEdULVM1ODM5fEdULVM2MTAyfEdULVM2NTAwfEdULVM3MDcwfEdULVM3MjAwfEdULVM3MjIwfEdULVM3MjMwfEdULVM3MjMzfEdULVM3MjUwfEdULVM3NTAwfEdULVM3NTMwfEdULVM3NTUwfEdULVM3NTYyfEdULVM3NzEwfEdULVM4MDAwfEdULVM4MDAzfEdULVM4NTAwfEdULVM4NTMwfEdULVM4NjAwfFNDSC1BMzEwfFNDSC1BNTMwfFNDSC1BNTcwfFNDSC1BNjEwfFNDSC1BNjMwfFNDSC1BNjUwfFNDSC1BNzkwfFNDSC1BNzk1fFNDSC1BODUwfFNDSC1BODcwfFNDSC1BODkwfFNDSC1BOTMwfFNDSC1BOTUwfFNDSC1BOTcwfFNDSC1BOTkwfFNDSC1JMTAwfFNDSC1JMTEwfFNDSC1JNDAwfFNDSC1JNDA1fFNDSC1JNTAwfFNDSC1JNTEwfFNDSC1JNTE1fFNDSC1JNjAwfFNDSC1JNzMwfFNDSC1JNzYwfFNDSC1JNzcwfFNDSC1JODMwfFNDSC1JOTEwfFNDSC1JOTIwfFNDSC1JOTU5fFNDSC1MQzExfFNDSC1OMTUwfFNDSC1OMzAwfFNDSC1SMTAwfFNDSC1SMzAwfFNDSC1SMzUxfFNDSC1SNDAwfFNDSC1SNDEwfFNDSC1UMzAwfFNDSC1VMzEwfFNDSC1VMzIwfFNDSC1VMzUwfFNDSC1VMzYwfFNDSC1VMzY1fFNDSC1VMzcwfFNDSC1VMzgwfFNDSC1VNDEwfFNDSC1VNDMwfFNDSC1VNDUwfFNDSC1VNDYwfFNDSC1VNDcwfFNDSC1VNDkwfFNDSC1VNTQwfFNDSC1VNTUwfFNDSC1VNjIwfFNDSC1VNjQwfFNDSC1VNjUwfFNDSC1VNjYwfFNDSC1VNzAwfFNDSC1VNzQwfFNDSC1VNzUwfFNDSC1VODEwfFNDSC1VODIwfFNDSC1VOTAwfFNDSC1VOTQwfFNDSC1VOTYwfFNDUy0yNlVDfFNHSC1BMTA3fFNHSC1BMTE3fFNHSC1BMTI3fFNHSC1BMTM3fFNHSC1BMTU3fFNHSC1BMTY3fFNHSC1BMTc3fFNHSC1BMTg3fFNHSC1BMTk3fFNHSC1BMjI3fFNHSC1BMjM3fFNHSC1BMjU3fFNHSC1BNDM3fFNHSC1BNTE3fFNHSC1BNTk3fFNHSC1BNjM3fFNHSC1BNjU3fFNHSC1BNjY3fFNHSC1BNjg3fFNHSC1BNjk3fFNHSC1BNzA3fFNHSC1BNzE3fFNHSC1BNzI3fFNHSC1BNzM3fFNHSC1BNzQ3fFNHSC1BNzY3fFNHSC1BNzc3fFNHSC1BNzk3fFNHSC1BODE3fFNHSC1BODI3fFNHSC1BODM3fFNHSC1BODQ3fFNHSC1BODY3fFNHSC1BODc3fFNHSC1BODg3fFNHSC1BODk3fFNHSC1BOTI3fFNHSC1CMTAwfFNHSC1CMTMwfFNHSC1CMjAwfFNHSC1CMjIwfFNHSC1DMTAwfFNHSC1DMTEwfFNHSC1DMTIwfFNHSC1DMTMwfFNHSC1DMTQwfFNHSC1DMTYwfFNHSC1DMTcwfFNHSC1DMTgwfFNHSC1DMjAwfFNHSC1DMjA3fFNHSC1DMjEwfFNHSC1DMjI1fFNHSC1DMjMwfFNHSC1DNDE3fFNHSC1DNDUwfFNHSC1EMzA3fFNHSC1EMzQ3fFNHSC1EMzU3fFNHSC1ENDA3fFNHSC1ENDE1fFNHSC1ENzgwfFNHSC1EODA3fFNHSC1EOTgwfFNHSC1FMTA1fFNHSC1FMjAwfFNHSC1FMzE1fFNHSC1FMzE2fFNHSC1FMzE3fFNHSC1FMzM1fFNHSC1FNTkwfFNHSC1FNjM1fFNHSC1FNzE1fFNHSC1FODkwfFNHSC1GMzAwfFNHSC1GNDgwfFNHSC1JMjAwfFNHSC1JMzAwfFNHSC1JMzIwfFNHSC1JNTUwfFNHSC1JNTc3fFNHSC1JNjAwfFNHSC1JNjA3fFNHSC1JNjE3fFNHSC1JNjI3fFNHSC1JNjM3fFNHSC1JNjc3fFNHSC1JNzAwfFNHSC1JNzE3fFNHSC1JNzI3fFNHSC1pNzQ3TXxTR0gtSTc3N3xTR0gtSTc4MHxTR0gtSTgyN3xTR0gtSTg0N3xTR0gtSTg1N3xTR0gtSTg5NnxTR0gtSTg5N3xTR0gtSTkwMHxTR0gtSTkwN3xTR0gtSTkxN3xTR0gtSTkyN3xTR0gtSTkzN3xTR0gtSTk5N3xTR0gtSjE1MHxTR0gtSjIwMHxTR0gtTDE3MHxTR0gtTDcwMHxTR0gtTTExMHxTR0gtTTE1MHxTR0gtTTIwMHxTR0gtTjEwNXxTR0gtTjUwMHxTR0gtTjYwMHxTR0gtTjYyMHxTR0gtTjYyNXxTR0gtTjcwMHxTR0gtTjcxMHxTR0gtUDEwN3xTR0gtUDIwN3xTR0gtUDMwMHxTR0gtUDMxMHxTR0gtUDUyMHxTR0gtUDczNXxTR0gtUDc3N3xTR0gtUTEwNXxTR0gtUjIxMHxTR0gtUjIyMHxTR0gtUjIyNXxTR0gtUzEwNXxTR0gtUzMwN3xTR0gtVDEwOXxTR0gtVDExOXxTR0gtVDEzOXxTR0gtVDIwOXxTR0gtVDIxOXxTR0gtVDIyOXxTR0gtVDIzOXxTR0gtVDI0OXxTR0gtVDI1OXxTR0gtVDMwOXxTR0gtVDMxOXxTR0gtVDMyOXxTR0gtVDMzOXxTR0gtVDM0OXxTR0gtVDM1OXxTR0gtVDM2OXxTR0gtVDM3OXxTR0gtVDQwOXxTR0gtVDQyOXxTR0gtVDQzOXxTR0gtVDQ1OXxTR0gtVDQ2OXxTR0gtVDQ3OXxTR0gtVDQ5OXxTR0gtVDUwOXxTR0gtVDUxOXxTR0gtVDUzOXxTR0gtVDU1OXxTR0gtVDU4OXxTR0gtVDYwOXxTR0gtVDYxOXxTR0gtVDYyOXxTR0gtVDYzOXxTR0gtVDY1OXxTR0gtVDY2OXxTR0gtVDY3OXxTR0gtVDcwOXxTR0gtVDcxOXxTR0gtVDcyOXxTR0gtVDczOXxTR0gtVDc0NnxTR0gtVDc0OXxTR0gtVDc1OXxTR0gtVDc2OXxTR0gtVDgwOXxTR0gtVDgxOXxTR0gtVDgzOXxTR0gtVDkxOXxTR0gtVDkyOXxTR0gtVDkzOXxTR0gtVDk1OXxTR0gtVDk4OXxTR0gtVTEwMHxTR0gtVTIwMHxTR0gtVTgwMHxTR0gtVjIwNXxTR0gtVjIwNnxTR0gtWDEwMHxTR0gtWDEwNXxTR0gtWDEyMHxTR0gtWDE0MHxTR0gtWDQyNnxTR0gtWDQyN3xTR0gtWDQ3NXxTR0gtWDQ5NXxTR0gtWDQ5N3xTR0gtWDUwN3xTR0gtWDYwMHxTR0gtWDYxMHxTR0gtWDYyMHxTR0gtWDYzMHxTR0gtWDcwMHxTR0gtWDgyMHxTR0gtWDg5MHxTR0gtWjEzMHxTR0gtWjE1MHxTR0gtWjE3MHxTR0gtWlgxMHxTR0gtWlgyMHxTSFctTTExMHxTUEgtQTEyMHxTUEgtQTQwMHxTUEgtQTQyMHxTUEgtQTQ2MHxTUEgtQTUwMHxTUEgtQTU2MHxTUEgtQTYwMHxTUEgtQTYyMHxTUEgtQTY2MHxTUEgtQTcwMHxTUEgtQTc0MHxTUEgtQTc2MHxTUEgtQTc5MHxTUEgtQTgwMHxTUEgtQTgyMHxTUEgtQTg0MHxTUEgtQTg4MHxTUEgtQTkwMHxTUEgtQTk0MHxTUEgtQTk2MHxTUEgtRDYwMHxTUEgtRDcwMHxTUEgtRDcxMHxTUEgtRDcyMHxTUEgtSTMwMHxTUEgtSTMyNXxTUEgtSTMzMHxTUEgtSTM1MHxTUEgtSTUwMHxTUEgtSTYwMHxTUEgtSTcwMHxTUEgtTDcwMHxTUEgtTTEwMHxTUEgtTTIyMHxTUEgtTTI0MHxTUEgtTTMwMHxTUEgtTTMwNXxTUEgtTTMyMHxTUEgtTTMzMHxTUEgtTTM1MHxTUEgtTTM2MHxTUEgtTTM3MHxTUEgtTTM4MHxTUEgtTTUxMHxTUEgtTTU0MHxTUEgtTTU1MHxTUEgtTTU2MHxTUEgtTTU3MHxTUEgtTTU4MHxTUEgtTTYxMHxTUEgtTTYyMHxTUEgtTTYzMHxTUEgtTTgwMHxTUEgtTTgxMHxTUEgtTTg1MHxTUEgtTTkwMHxTUEgtTTkxMHxTUEgtTTkyMHxTUEgtTTkzMHxTUEgtTjEwMHxTUEgtTjIwMHxTUEgtTjI0MHxTUEgtTjMwMHxTUEgtTjQwMHxTUEgtWjQwMHxTV0MtRTEwMHxTQ0gtaTkwOXxHVC1ONzEwMHxHVC1ONzEwNXxTQ0gtSTUzNXxTTS1OOTAwQXxTR0gtSTMxN3xTR0gtVDk5OUx8R1QtUzUzNjBCfEdULUk4MjYyfEdULVM2ODAyfEdULVM2MzEyfEdULVM2MzEwfEdULVM1MzEyfEdULVM1MzEwfEdULUk5MTA1fEdULUk4NTEwfEdULVM2NzkwTnxTTS1HNzEwNXxTTS1OOTAwNXxHVC1TNTMwMXxHVC1JOTI5NXxHVC1JOTE5NXxTTS1DMTAxfEdULVM3MzkyfEdULVM3NTYwfEdULUI3NjEwfEdULUk1NTEwfEdULVM3NTgyfEdULVM3NTMwRXxHVC1JODc1MHxTTS1HOTAwNlZ8U00tRzkwMDhWfFNNLUc5MDA5RHxTTS1HOTAwQXxTTS1HOTAwRHxTTS1HOTAwRnxTTS1HOTAwSHxTTS1HOTAwSXxTTS1HOTAwSnxTTS1HOTAwS3xTTS1HOTAwTHxTTS1HOTAwTXxTTS1HOTAwUHxTTS1HOTAwUjR8U00tRzkwMFN8U00tRzkwMFR8U00tRzkwMFZ8U00tRzkwMFc4fFNIVi1FMTYwS3xTQ0gtUDcwOXxTQ0gtUDcyOXxTTS1UMjU1OHxHVC1JOTIwNXxTTS1HOTM1MHxTTS1KMTIwRlwiLFxuICAgICAgICAgICAgICAgIFwiTEdcIjogXCJcXFxcYkxHXFxcXGI7fExHWy0gXT8oQzgwMHxDOTAwfEU0MDB8RTYxMHxFOTAwfEUtOTAwfEYxNjB8RjE4MEt8RjE4MEx8RjE4MFN8NzMwfDg1NXxMMTYwfExTNzQwfExTODQwfExTOTcwfExVNjIwMHxNUzY5MHxNUzY5NXxNUzc3MHxNUzg0MHxNUzg3MHxNUzkxMHxQNTAwfFA3MDB8UDcwNXxWTTY5NnxBUzY4MHxBUzY5NXxBWDg0MHxDNzI5fEU5NzB8R1M1MDV8MjcyfEMzOTV8RTczOUJLfEU5NjB8TDU1Q3xMNzVDfExTNjk2fExTODYwfFA3NjlCS3xQMzUwfFA1MDB8UDUwOXxQODcwfFVOMjcyfFVTNzMwfFZTODQwfFZTOTUwfExOMjcyfExONTEwfExTNjcwfExTODU1fExXNjkwfE1OMjcwfE1ONTEwfFA1MDl8UDc2OXxQOTMwfFVOMjAwfFVOMjcwfFVONTEwfFVONjEwfFVTNjcwfFVTNzQwfFVTNzYwfFVYMjY1fFVYODQwfFZOMjcxfFZONTMwfFZTNjYwfFZTNzAwfFZTNzQwfFZTNzUwfFZTOTEwfFZTOTIwfFZTOTMwfFZYOTIwMHxWWDExMDAwfEFYODQwQXxMVzc3MHxQNTA2fFA5MjV8UDk5OXxFNjEyfEQ5NTV8RDgwMnxNUzMyMylcIixcbiAgICAgICAgICAgICAgICBcIlNvbnlcIjogXCJTb255U1R8U29ueUxUfFNvbnlFcmljc3NvbnxTb255RXJpY3Nzb25MVDE1aXZ8TFQxOGl8RTEwaXxMVDI4aHxMVDI2d3xTb255RXJpY3Nzb25NVDI3aXxDNTMwM3xDNjkwMnxDNjkwM3xDNjkwNnxDNjk0M3xEMjUzM1wiLFxuICAgICAgICAgICAgICAgIFwiQXN1c1wiOiBcIkFzdXMuKkdhbGF4eXxQYWRGb25lLipNb2JpbGVcIixcbiAgICAgICAgICAgICAgICBcIk5va2lhTHVtaWFcIjogXCJMdW1pYSBbMC05XXszLDR9XCIsXG4gICAgICAgICAgICAgICAgXCJNaWNyb21heFwiOiBcIk1pY3JvbWF4LipcXFxcYihBMjEwfEE5MnxBODh8QTcyfEExMTF8QTExMFF8QTExNXxBMTE2fEExMTB8QTkwU3xBMjZ8QTUxfEEzNXxBNTR8QTI1fEEyN3xBODl8QTY4fEE2NXxBNTd8QTkwKVxcXFxiXCIsXG4gICAgICAgICAgICAgICAgXCJQYWxtXCI6IFwiUGFsbVNvdXJjZXxQYWxtXCIsXG4gICAgICAgICAgICAgICAgXCJWZXJ0dVwiOiBcIlZlcnR1fFZlcnR1LipMdGR8VmVydHUuKkFzY2VudHxWZXJ0dS4qQXl4dGF8VmVydHUuKkNvbnN0ZWxsYXRpb24oRnxRdWVzdCk/fFZlcnR1LipNb25pa2F8VmVydHUuKlNpZ25hdHVyZVwiLFxuICAgICAgICAgICAgICAgIFwiUGFudGVjaFwiOiBcIlBBTlRFQ0h8SU0tQTg1MFN8SU0tQTg0MFN8SU0tQTgzMEx8SU0tQTgzMEt8SU0tQTgzMFN8SU0tQTgyMEx8SU0tQTgxMEt8SU0tQTgxMFN8SU0tQTgwMFN8SU0tVDEwMEt8SU0tQTcyNUx8SU0tQTc4MEx8SU0tQTc3NUN8SU0tQTc3MEt8SU0tQTc2MFN8SU0tQTc1MEt8SU0tQTc0MFN8SU0tQTczMFN8SU0tQTcyMEx8SU0tQTcxMEt8SU0tQTY5MEx8SU0tQTY5MFN8SU0tQTY1MFN8SU0tQTYzMEt8SU0tQTYwMFN8VkVHQSBQVEwyMXxQVDAwM3xQODAxMHxBRFI5MTBMfFA2MDMwfFA2MDIwfFA5MDcwfFA0MTAwfFA5MDYwfFA1MDAwfENETTg5OTJ8VFhUODA0NXxBRFI4OTk1fElTMTFQVHxQMjAzMHxQNjAxMHxQODAwMHxQVDAwMnxJUzA2fENETTg5OTl8UDkwNTB8UFQwMDF8VFhUODA0MHxQMjAyMHxQOTAyMHxQMjAwMHxQNzA0MHxQNzAwMHxDNzkwXCIsXG4gICAgICAgICAgICAgICAgXCJGbHlcIjogXCJJUTIzMHxJUTQ0NHxJUTQ1MHxJUTQ0MHxJUTQ0MnxJUTQ0MXxJUTI0NXxJUTI1NnxJUTIzNnxJUTI1NXxJUTIzNXxJUTI0NXxJUTI3NXxJUTI0MHxJUTI4NXxJUTI4MHxJUTI3MHxJUTI2MHxJUTI1MFwiLFxuICAgICAgICAgICAgICAgIFwiV2lrb1wiOiBcIktJVEUgNEd8SElHSFdBWXxHRVRBV0FZfFNUQUlSV0FZfERBUktTSURFfERBUktGVUxMfERBUktOSUdIVHxEQVJLTU9PTnxTTElERXxXQVggNEd8UkFJTkJPV3xCTE9PTXxTVU5TRVR8R09BKD8hbm5hKXxMRU5OWXxCQVJSWXxJR0dZfE9aWll8Q0lOSyBGSVZFfENJTksgUEVBWHxDSU5LIFBFQVggMnxDSU5LIFNMSU18Q0lOSyBTTElNIDJ8Q0lOSyArfENJTksgS0lOR3xDSU5LIFBFQVh8Q0lOSyBTTElNfFNVQkxJTVwiLFxuICAgICAgICAgICAgICAgIFwiaU1vYmlsZVwiOiBcImktbW9iaWxlIChJUXxpLVNUWUxFfGlkZWF8WkFBfEhpdHopXCIsXG4gICAgICAgICAgICAgICAgXCJTaW1WYWxsZXlcIjogXCJcXFxcYihTUC04MHxYVC05MzB8U1gtMzQwfFhULTkzMHxTWC0zMTB8U1AtMzYwfFNQNjB8U1BULTgwMHxTUC0xMjB8U1BULTgwMHxTUC0xNDB8U1BYLTV8U1BYLTh8U1AtMTAwfFNQWC04fFNQWC0xMilcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiV29sZmdhbmdcIjogXCJBVC1CMjREfEFULUFTNTBIRHxBVC1BUzQwV3xBVC1BUzU1SER8QVQtQVM0NXEyfEFULUIyNkR8QVQtQVM1MFFcIixcbiAgICAgICAgICAgICAgICBcIkFsY2F0ZWxcIjogXCJBbGNhdGVsXCIsXG4gICAgICAgICAgICAgICAgXCJOaW50ZW5kb1wiOiBcIk5pbnRlbmRvIDNEU1wiLFxuICAgICAgICAgICAgICAgIFwiQW1vaVwiOiBcIkFtb2lcIixcbiAgICAgICAgICAgICAgICBcIklOUVwiOiBcIklOUVwiLFxuICAgICAgICAgICAgICAgIFwiR2VuZXJpY1Bob25lXCI6IFwiVGFwYXRhbGt8UERBO3xTQUdFTXxcXFxcYm1tcFxcXFxifHBvY2tldHxcXFxcYnBzcFxcXFxifHN5bWJpYW58U21hcnRwaG9uZXxzbWFydGZvbnx0cmVvfHVwLmJyb3dzZXJ8dXAubGlua3x2b2RhZm9uZXxcXFxcYndhcFxcXFxifG5va2lhfFNlcmllczQwfFNlcmllczYwfFM2MHxTb255RXJpY3Nzb258TjkwMHxNQVVJLipXQVAuKkJyb3dzZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidGFibGV0c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJpUGFkXCI6IFwiaVBhZHxpUGFkLipNb2JpbGVcIixcbiAgICAgICAgICAgICAgICBcIk5leHVzVGFibGV0XCI6IFwiQW5kcm9pZC4qTmV4dXNbXFxcXHNdKyg3fDl8MTApXCIsXG4gICAgICAgICAgICAgICAgXCJTYW1zdW5nVGFibGV0XCI6IFwiU0FNU1VORy4qVGFibGV0fEdhbGF4eS4qVGFifFNDLTAxQ3xHVC1QMTAwMHxHVC1QMTAwM3xHVC1QMTAxMHxHVC1QMzEwNXxHVC1QNjIxMHxHVC1QNjgwMHxHVC1QNjgxMHxHVC1QNzEwMHxHVC1QNzMwMHxHVC1QNzMxMHxHVC1QNzUwMHxHVC1QNzUxMHxTQ0gtSTgwMHxTQ0gtSTgxNXxTQ0gtSTkwNXxTR0gtSTk1N3xTR0gtSTk4N3xTR0gtVDg0OXxTR0gtVDg1OXxTR0gtVDg2OXxTUEgtUDEwMHxHVC1QMzEwMHxHVC1QMzEwOHxHVC1QMzExMHxHVC1QNTEwMHxHVC1QNTExMHxHVC1QNjIwMHxHVC1QNzMyMHxHVC1QNzUxMXxHVC1OODAwMHxHVC1QODUxMHxTR0gtSTQ5N3xTUEgtUDUwMHxTR0gtVDc3OXxTQ0gtSTcwNXxTQ0gtSTkxNXxHVC1OODAxM3xHVC1QMzExM3xHVC1QNTExM3xHVC1QODExMHxHVC1OODAxMHxHVC1OODAwNXxHVC1OODAyMHxHVC1QMTAxM3xHVC1QNjIwMXxHVC1QNzUwMXxHVC1ONTEwMHxHVC1ONTEwNXxHVC1ONTExMHxTSFYtRTE0MEt8U0hWLUUxNDBMfFNIVi1FMTQwU3xTSFYtRTE1MFN8U0hWLUUyMzBLfFNIVi1FMjMwTHxTSFYtRTIzMFN8U0hXLU0xODBLfFNIVy1NMTgwTHxTSFctTTE4MFN8U0hXLU0xODBXfFNIVy1NMzAwV3xTSFctTTMwNVd8U0hXLU0zODBLfFNIVy1NMzgwU3xTSFctTTM4MFd8U0hXLU00MzBXfFNIVy1NNDgwS3xTSFctTTQ4MFN8U0hXLU00ODBXfFNIVy1NNDg1V3xTSFctTTQ4Nld8U0hXLU01MDBXfEdULUk5MjI4fFNDSC1QNzM5fFNDSC1JOTI1fEdULUk5MjAwfEdULVA1MjAwfEdULVA1MjEwfEdULVA1MjEwWHxTTS1UMzExfFNNLVQzMTB8U00tVDMxMFh8U00tVDIxMHxTTS1UMjEwUnxTTS1UMjExfFNNLVA2MDB8U00tUDYwMXxTTS1QNjA1fFNNLVA5MDB8U00tUDkwMXxTTS1UMjE3fFNNLVQyMTdBfFNNLVQyMTdTfFNNLVA2MDAwfFNNLVQzMTAwfFNHSC1JNDY3fFhFNTAwfFNNLVQxMTB8R1QtUDUyMjB8R1QtSTkyMDBYfEdULU41MTEwWHxHVC1ONTEyMHxTTS1QOTA1fFNNLVQxMTF8U00tVDIxMDV8U00tVDMxNXxTTS1UMzIwfFNNLVQzMjBYfFNNLVQzMjF8U00tVDUyMHxTTS1UNTI1fFNNLVQ1MzBOVXxTTS1UMjMwTlV8U00tVDMzME5VfFNNLVQ5MDB8WEU1MDBUMUN8U00tUDYwNVZ8U00tUDkwNVZ8U00tVDMzN1Z8U00tVDUzN1Z8U00tVDcwN1Z8U00tVDgwN1Z8U00tUDYwMFh8U00tUDkwMFh8U00tVDIxMFh8U00tVDIzMHxTTS1UMjMwWHxTTS1UMzI1fEdULVA3NTAzfFNNLVQ1MzF8U00tVDMzMHxTTS1UNTMwfFNNLVQ3MDV8U00tVDcwNUN8U00tVDUzNXxTTS1UMzMxfFNNLVQ4MDB8U00tVDcwMHxTTS1UNTM3fFNNLVQ4MDd8U00tUDkwN0F8U00tVDMzN0F8U00tVDUzN0F8U00tVDcwN0F8U00tVDgwN0F8U00tVDIzN3xTTS1UODA3UHxTTS1QNjA3VHxTTS1UMjE3VHxTTS1UMzM3VHxTTS1UODA3VHxTTS1UMTE2TlF8U00tUDU1MHxTTS1UMzUwfFNNLVQ1NTB8U00tVDkwMDB8U00tUDkwMDB8U00tVDcwNVl8U00tVDgwNXxHVC1QMzExM3xTTS1UNzEwfFNNLVQ4MTB8U00tVDgxNXxTTS1UMzYwfFNNLVQ1MzN8U00tVDExM3xTTS1UMzM1fFNNLVQ3MTV8U00tVDU2MHxTTS1UNjcwfFNNLVQ2Nzd8U00tVDM3N3xTTS1UNTY3fFNNLVQzNTdUfFNNLVQ1NTV8U00tVDU2MXxTTS1UNzEzfFNNLVQ3MTl8U00tVDgxM3xTTS1UODE5fFNNLVQ1ODB8U00tVDM1NVl8U00tVDI4MFwiLFxuICAgICAgICAgICAgICAgIFwiS2luZGxlXCI6IFwiS2luZGxlfFNpbGsuKkFjY2VsZXJhdGVkfEFuZHJvaWQuKlxcXFxiKEtGT1R8S0ZUVHxLRkpXSXxLRkpXQXxLRk9URXxLRlNPV0l8S0ZUSFdJfEtGVEhXQXxLRkFQV0l8S0ZBUFdBfFdGSldBRXxLRlNBV0F8S0ZTQVdJfEtGQVNXSXxLRkFSV0kpXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIlN1cmZhY2VUYWJsZXRcIjogXCJXaW5kb3dzIE5UIFswLTkuXSs7IEFSTTsuKihUYWJsZXR8QVJNQkpTKVwiLFxuICAgICAgICAgICAgICAgIFwiSFBUYWJsZXRcIjogXCJIUCBTbGF0ZSAoN3w4fDEwKXxIUCBFbGl0ZVBhZCA5MDB8aHAtdGFibGV0fEVsaXRlQm9vay4qVG91Y2h8SFAgOHxTbGF0ZSAyMXxIUCBTbGF0ZUJvb2sgMTBcIixcbiAgICAgICAgICAgICAgICBcIkFzdXNUYWJsZXRcIjogXCJeLipQYWRGb25lKCg/IU1vYmlsZSkuKSokfFRyYW5zZm9ybWVyfFRGMTAxfFRGMTAxR3xURjMwMFR8VEYzMDBUR3xURjMwMFRMfFRGNzAwVHxURjcwMEtMfFRGNzAxVHxURjgxMEN8TUUxNzF8TUUzMDFUfE1FMzAyQ3xNRTM3MU1HfE1FMzcwVHxNRTM3Mk1HfE1FMTcyVnxNRTE3M1h8TUU0MDBDfFNsaWRlciBTTDEwMXxcXFxcYkswMEZcXFxcYnxcXFxcYkswMENcXFxcYnxcXFxcYkswMEVcXFxcYnxcXFxcYkswMExcXFxcYnxUWDIwMUxBfE1FMTc2Q3xNRTEwMkF8XFxcXGJNODBUQVxcXFxifE1FMzcyQ0x8TUU1NjBDR3xNRTM3MkNHfE1FMzAyS0x8IEswMTAgfCBLMDExIHwgSzAxNyB8IEswMUUgfE1FNTcyQ3xNRTEwM0t8TUUxNzBDfE1FMTcxQ3xcXFxcYk1FNzBDXFxcXGJ8TUU1ODFDfE1FNTgxQ0x8TUU4NTEwQ3xNRTE4MUN8UDAxWXxQTzFNQXxQMDFaXCIsXG4gICAgICAgICAgICAgICAgXCJCbGFja0JlcnJ5VGFibGV0XCI6IFwiUGxheUJvb2t8UklNIFRhYmxldFwiLFxuICAgICAgICAgICAgICAgIFwiSFRDdGFibGV0XCI6IFwiSFRDX0ZseWVyX1A1MTJ8SFRDIEZseWVyfEhUQyBKZXRzdHJlYW18SFRDLVA3MTVhfEhUQyBFVk8gVmlldyA0R3xQRzQxMjAwfFBHMDk0MTBcIixcbiAgICAgICAgICAgICAgICBcIk1vdG9yb2xhVGFibGV0XCI6IFwieG9vbXxzaG9sZXN0fE1aNjE1fE1aNjA1fE1aNTA1fE1aNjAxfE1aNjAyfE1aNjAzfE1aNjA0fE1aNjA2fE1aNjA3fE1aNjA4fE1aNjA5fE1aNjE1fE1aNjE2fE1aNjE3XCIsXG4gICAgICAgICAgICAgICAgXCJOb29rVGFibGV0XCI6IFwiQW5kcm9pZC4qTm9va3xOb29rQ29sb3J8bm9vayBicm93c2VyfEJOUlYyMDB8Qk5SVjIwMEF8Qk5UVjI1MHxCTlRWMjUwQXxCTlRWNDAwfEJOVFY2MDB8TG9naWNQRCBab29tMlwiLFxuICAgICAgICAgICAgICAgIFwiQWNlclRhYmxldFwiOiBcIkFuZHJvaWQuKjsgXFxcXGIoQTEwMHxBMTAxfEExMTB8QTIwMHxBMjEwfEEyMTF8QTUwMHxBNTAxfEE1MTB8QTUxMXxBNzAwfEE3MDF8VzUwMHxXNTAwUHxXNTAxfFc1MDFQfFc1MTB8VzUxMXxXNzAwfEcxMDB8RzEwMFd8QjEtQTcxfEIxLTcxMHxCMS03MTF8QTEtODEwfEExLTgxMXxBMS04MzApXFxcXGJ8VzMtODEwfFxcXFxiQTMtQTEwXFxcXGJ8XFxcXGJBMy1BMTFcXFxcYnxcXFxcYkEzLUEyMFxcXFxifFxcXFxiQTMtQTMwXCIsXG4gICAgICAgICAgICAgICAgXCJUb3NoaWJhVGFibGV0XCI6IFwiQW5kcm9pZC4qKEFUMTAwfEFUMTA1fEFUMjAwfEFUMjA1fEFUMjcwfEFUMjc1fEFUMzAwfEFUMzA1fEFUMVM1fEFUNTAwfEFUNTcwfEFUNzAwfEFUODMwKXxUT1NISUJBLipGT0xJT1wiLFxuICAgICAgICAgICAgICAgIFwiTEdUYWJsZXRcIjogXCJcXFxcYkwtMDZDfExHLVY5MDl8TEctVjkwMHxMRy1WNzAwfExHLVY1MTB8TEctVjUwMHxMRy1WNDEwfExHLVY0MDB8TEctVks4MTBcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiRnVqaXRzdVRhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiKEYtMDFEfEYtMDJGfEYtMDVFfEYtMTBEfE01MzJ8UTU3MilcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiUHJlc3RpZ2lvVGFibGV0XCI6IFwiUE1QMzE3MEJ8UE1QMzI3MEJ8UE1QMzQ3MEJ8UE1QNzE3MEJ8UE1QMzM3MEJ8UE1QMzU3MEN8UE1QNTg3MEN8UE1QMzY3MEJ8UE1QNTU3MEN8UE1QNTc3MER8UE1QMzk3MEJ8UE1QMzg3MEN8UE1QNTU4MEN8UE1QNTg4MER8UE1QNTc4MER8UE1QNTU4OEN8UE1QNzI4MEN8UE1QNzI4MEMzR3xQTVA3MjgwfFBNUDc4ODBEfFBNUDU1OTdEfFBNUDU1OTd8UE1QNzEwMER8UEVSMzQ2NHxQRVIzMjc0fFBFUjM1NzR8UEVSMzg4NHxQRVI1Mjc0fFBFUjU0NzR8UE1QNTA5N0NQUk98UE1QNTA5N3xQTVA3MzgwRHxQTVA1Mjk3Q3xQTVA1Mjk3Q19RVUFEfFBNUDgxMkV8UE1QODEyRTNHfFBNUDgxMkZ8UE1QODEwRXxQTVA4ODBURHxQTVQzMDE3fFBNVDMwMzd8UE1UMzA0N3xQTVQzMDU3fFBNVDcwMDh8UE1UNTg4N3xQTVQ1MDAxfFBNVDUwMDJcIixcbiAgICAgICAgICAgICAgICBcIkxlbm92b1RhYmxldFwiOiBcIkxlbm92byBUQUJ8SWRlYShUYWJ8UGFkKSggQTF8QTEwfCBLMXwpfFRoaW5rUGFkKFsgXSspP1RhYmxldHxZVDMtWDkwTHxZVDMtWDkwRnxZVDMtWDkwWHxMZW5vdm8uKihTMjEwOXxTMjExMHxTNTAwMHxTNjAwMHxLMzAxMXxBMzAwMHxBMzUwMHxBMTAwMHxBMjEwN3xBMjEwOXxBMTEwN3xBNTUwMHxBNzYwMHxCNjAwMHxCODAwMHxCODA4MCkoLXwpKEZMfEZ8SFZ8SHwpXCIsXG4gICAgICAgICAgICAgICAgXCJEZWxsVGFibGV0XCI6IFwiVmVudWUgMTF8VmVudWUgOHxWZW51ZSA3fERlbGwgU3RyZWFrIDEwfERlbGwgU3RyZWFrIDdcIixcbiAgICAgICAgICAgICAgICBcIllhcnZpa1RhYmxldFwiOiBcIkFuZHJvaWQuKlxcXFxiKFRBQjIxMHxUQUIyMTF8VEFCMjI0fFRBQjI1MHxUQUIyNjB8VEFCMjY0fFRBQjMxMHxUQUIzNjB8VEFCMzY0fFRBQjQxMHxUQUI0MTF8VEFCNDIwfFRBQjQyNHxUQUI0NTB8VEFCNDYwfFRBQjQ2MXxUQUI0NjR8VEFCNDY1fFRBQjQ2N3xUQUI0Njh8VEFCMDctMTAwfFRBQjA3LTEwMXxUQUIwNy0xNTB8VEFCMDctMTUxfFRBQjA3LTE1MnxUQUIwNy0yMDB8VEFCMDctMjAxLTNHfFRBQjA3LTIxMHxUQUIwNy0yMTF8VEFCMDctMjEyfFRBQjA3LTIxNHxUQUIwNy0yMjB8VEFCMDctNDAwfFRBQjA3LTQ4NXxUQUIwOC0xNTB8VEFCMDgtMjAwfFRBQjA4LTIwMS0zR3xUQUIwOC0yMDEtMzB8VEFCMDktMTAwfFRBQjA5LTIxMXxUQUIwOS00MTB8VEFCMTAtMTUwfFRBQjEwLTIwMXxUQUIxMC0yMTF8VEFCMTAtNDAwfFRBQjEwLTQxMHxUQUIxMy0yMDF8VEFCMjc0RVVLfFRBQjI3NUVVS3xUQUIzNzRFVUt8VEFCNDYyRVVLfFRBQjQ3NEVVS3xUQUI5LTIwMClcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiTWVkaW9uVGFibGV0XCI6IFwiQW5kcm9pZC4qXFxcXGJPWU9cXFxcYnxMSUZFLiooUDkyMTJ8UDk1MTR8UDk1MTZ8Uzk1MTIpfExJRkVUQUJcIixcbiAgICAgICAgICAgICAgICBcIkFybm92YVRhYmxldFwiOiBcIjk3RzR8QU4xMEcyfEFON2JHM3xBTjdmRzN8QU44RzN8QU44Y0czfEFON0czfEFOOUczfEFON2RHM3xBTjdkRzNTVHxBTjdkRzNDaGlsZFBhZHxBTjEwYkczfEFOMTBiRzNEVHxBTjlHMlwiLFxuICAgICAgICAgICAgICAgIFwiSW50ZW5zb1RhYmxldFwiOiBcIklOTTgwMDJLUHxJTk0xMDEwRlB8SU5NODA1TkR8SW50ZW5zbyBUYWJ8VEFCMTAwNFwiLFxuICAgICAgICAgICAgICAgIFwiSVJVVGFibGV0XCI6IFwiTTcwMnByb1wiLFxuICAgICAgICAgICAgICAgIFwiTWVnYWZvblRhYmxldFwiOiBcIk1lZ2FGb24gVjl8XFxcXGJaVEUgVjlcXFxcYnxBbmRyb2lkLipcXFxcYk1UN0FcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiRWJvZGFUYWJsZXRcIjogXCJFLUJvZGEgKFN1cHJlbWV8SW1wcmVzc3BlZWR8SXp6eWNvbW18RXNzZW50aWFsKVwiLFxuICAgICAgICAgICAgICAgIFwiQWxsVmlld1RhYmxldFwiOiBcIkFsbHZpZXcuKihWaXZhfEFsbGRyb3xDaXR5fFNwZWVkfEFsbCBUVnxGcmVuenl8UXVhc2FyfFNoaW5lfFRYMXxBWDF8QVgyKVwiLFxuICAgICAgICAgICAgICAgIFwiQXJjaG9zVGFibGV0XCI6IFwiXFxcXGIoMTAxRzl8ODBHOXxBMTAxSVQpXFxcXGJ8UWlsaXZlIDk3UnxBcmNob3M1fFxcXFxiQVJDSE9TICg3MHw3OXw4MHw5MHw5N3wxMDF8RkFNSUxZUEFEfCkoYnwpKEcxMHwgQ29iYWx0fCBUSVRBTklVTShIRHwpfCBYZW5vbnwgTmVvbnxYU0t8IDJ8IFhTIDJ8IFBMQVRJTlVNfCBDQVJCT058R0FNRVBBRClcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiQWlub2xUYWJsZXRcIjogXCJOT1ZPN3xOT1ZPOHxOT1ZPMTB8Tm92bzdBdXJvcmF8Tm92bzdCYXNpY3xOT1ZPN1BBTEFESU58bm92bzktU3BhcmtcIixcbiAgICAgICAgICAgICAgICBcIk5va2lhTHVtaWFUYWJsZXRcIjogXCJMdW1pYSAyNTIwXCIsXG4gICAgICAgICAgICAgICAgXCJTb255VGFibGV0XCI6IFwiU29ueS4qVGFibGV0fFhwZXJpYSBUYWJsZXR8U29ueSBUYWJsZXQgU3xTTy0wM0V8U0dQVDEyfFNHUFQxM3xTR1BUMTE0fFNHUFQxMjF8U0dQVDEyMnxTR1BUMTIzfFNHUFQxMTF8U0dQVDExMnxTR1BUMTEzfFNHUFQxMzF8U0dQVDEzMnxTR1BUMTMzfFNHUFQyMTF8U0dQVDIxMnxTR1BUMjEzfFNHUDMxMXxTR1AzMTJ8U0dQMzIxfEVCUkQxMTAxfEVCUkQxMTAyfEVCUkQxMjAxfFNHUDM1MXxTR1AzNDF8U0dQNTExfFNHUDUxMnxTR1A1MjF8U0dQNTQxfFNHUDU1MXxTR1A2MjF8U0dQNjEyfFNPVDMxXCIsXG4gICAgICAgICAgICAgICAgXCJQaGlsaXBzVGFibGV0XCI6IFwiXFxcXGIoUEkyMDEwfFBJMzAwMHxQSTMxMDB8UEkzMTA1fFBJMzExMHxQSTMyMDV8UEkzMjEwfFBJMzkwMHxQSTQwMTB8UEk3MDAwfFBJNzEwMClcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiQ3ViZVRhYmxldFwiOiBcIkFuZHJvaWQuKihLOEdUfFU5R1R8VTEwR1R8VTE2R1R8VTE3R1R8VTE4R1R8VTE5R1R8VTIwR1R8VTIzR1R8VTMwR1QpfENVQkUgVThHVFwiLFxuICAgICAgICAgICAgICAgIFwiQ29ieVRhYmxldFwiOiBcIk1JRDEwNDJ8TUlEMTA0NXxNSUQxMTI1fE1JRDExMjZ8TUlENzAxMnxNSUQ3MDE0fE1JRDcwMTV8TUlENzAzNHxNSUQ3MDM1fE1JRDcwMzZ8TUlENzA0MnxNSUQ3MDQ4fE1JRDcxMjd8TUlEODA0MnxNSUQ4MDQ4fE1JRDgxMjd8TUlEOTA0MnxNSUQ5NzQwfE1JRDk3NDJ8TUlENzAyMnxNSUQ3MDEwXCIsXG4gICAgICAgICAgICAgICAgXCJNSURUYWJsZXRcIjogXCJNOTcwMXxNOTAwMHxNOTEwMHxNODA2fE0xMDUyfE04MDZ8VDcwM3xNSUQ3MDF8TUlENzEzfE1JRDcxMHxNSUQ3Mjd8TUlENzYwfE1JRDgzMHxNSUQ3Mjh8TUlEOTMzfE1JRDEyNXxNSUQ4MTB8TUlENzMyfE1JRDEyMHxNSUQ5MzB8TUlEODAwfE1JRDczMXxNSUQ5MDB8TUlEMTAwfE1JRDgyMHxNSUQ3MzV8TUlEOTgwfE1JRDEzMHxNSUQ4MzN8TUlENzM3fE1JRDk2MHxNSUQxMzV8TUlEODYwfE1JRDczNnxNSUQxNDB8TUlEOTMwfE1JRDgzNXxNSUQ3MzN8TUlENFgxMFwiLFxuICAgICAgICAgICAgICAgIFwiTVNJVGFibGV0XCI6IFwiTVNJIFxcXFxiKFByaW1vIDczS3xQcmltbyA3M0x8UHJpbW8gODFMfFByaW1vIDc3fFByaW1vIDkzfFByaW1vIDc1fFByaW1vIDc2fFByaW1vIDczfFByaW1vIDgxfFByaW1vIDkxfFByaW1vIDkwfEVuam95IDcxfEVuam95IDd8RW5qb3kgMTApXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIlNNaVRUYWJsZXRcIjogXCJBbmRyb2lkLiooXFxcXGJNSURcXFxcYnxNSUQtNTYwfE1UVi1UMTIwMHxNVFYtUE5ENTMxfE1UVi1QMTEwMXxNVFYtUE5ENTMwKVwiLFxuICAgICAgICAgICAgICAgIFwiUm9ja0NoaXBUYWJsZXRcIjogXCJBbmRyb2lkLiooUksyODE4fFJLMjgwOEF8UksyOTE4fFJLMzA2Nil8UksyNzM4fFJLMjgwOEFcIixcbiAgICAgICAgICAgICAgICBcIkZseVRhYmxldFwiOiBcIklRMzEwfEZseSBWaXNpb25cIixcbiAgICAgICAgICAgICAgICBcImJxVGFibGV0XCI6IFwiQW5kcm9pZC4qKGJxKT8uKihFbGNhbm98Q3VyaWV8RWRpc29ufE1heHdlbGx8S2VwbGVyfFBhc2NhbHxUZXNsYXxIeXBhdGlhfFBsYXRvbnxOZXd0b258TGl2aW5nc3RvbmV8Q2VydmFudGVzfEF2YW50fEFxdWFyaXMgW0V8TV0xMCl8TWF4d2VsbC4qTGl0ZXxNYXh3ZWxsLipQbHVzXCIsXG4gICAgICAgICAgICAgICAgXCJIdWF3ZWlUYWJsZXRcIjogXCJNZWRpYVBhZHxNZWRpYVBhZCA3IFlvdXRofElERU9TIFM3fFM3LTIwMWN8UzctMjAydXxTNy0xMDF8UzctMTAzfFM3LTEwNHxTNy0xMDV8UzctMTA2fFM3LTIwMXxTNy1TbGltXCIsXG4gICAgICAgICAgICAgICAgXCJOZWNUYWJsZXRcIjogXCJcXFxcYk4tMDZEfFxcXFxiTi0wOERcIixcbiAgICAgICAgICAgICAgICBcIlBhbnRlY2hUYWJsZXRcIjogXCJQYW50ZWNoLipQNDEwMFwiLFxuICAgICAgICAgICAgICAgIFwiQnJvbmNob1RhYmxldFwiOiBcIkJyb25jaG8uKihONzAxfE43MDh8TjgwMnxhNzEwKVwiLFxuICAgICAgICAgICAgICAgIFwiVmVyc3VzVGFibGV0XCI6IFwiVE9VQ0hQQUQuKls3ODkxMF18XFxcXGJUT1VDSFRBQlxcXFxiXCIsXG4gICAgICAgICAgICAgICAgXCJaeW5jVGFibGV0XCI6IFwiejEwMDB8Wjk5IDJHfHo5OXx6OTMwfHo5OTl8ejk5MHx6OTA5fFo5MTl8ejkwMFwiLFxuICAgICAgICAgICAgICAgIFwiUG9zaXRpdm9UYWJsZXRcIjogXCJUQjA3U1RBfFRCMTBTVEF8VEIwN0ZUQXxUQjEwRlRBXCIsXG4gICAgICAgICAgICAgICAgXCJOYWJpVGFibGV0XCI6IFwiQW5kcm9pZC4qXFxcXGJOYWJpXCIsXG4gICAgICAgICAgICAgICAgXCJLb2JvVGFibGV0XCI6IFwiS29ibyBUb3VjaHxcXFxcYkswODBcXFxcYnxcXFxcYlZveFxcXFxiIEJ1aWxkfFxcXFxiQXJjXFxcXGIgQnVpbGRcIixcbiAgICAgICAgICAgICAgICBcIkRhbmV3VGFibGV0XCI6IFwiRFNsaWRlLipcXFxcYig3MDB8NzAxUnw3MDJ8NzAzUnw3MDR8ODAyfDk3MHw5NzF8OTcyfDk3M3w5NzR8MTAxMHwxMDEyKVxcXFxiXCIsXG4gICAgICAgICAgICAgICAgXCJUZXhldFRhYmxldFwiOiBcIk5hdmlQYWR8VEItNzcyQXxUTS03MDQ1fFRNLTcwNTV8VE0tOTc1MHxUTS03MDE2fFRNLTcwMjR8VE0tNzAyNnxUTS03MDQxfFRNLTcwNDN8VE0tNzA0N3xUTS04MDQxfFRNLTk3NDF8VE0tOTc0N3xUTS05NzQ4fFRNLTk3NTF8VE0tNzAyMnxUTS03MDIxfFRNLTcwMjB8VE0tNzAxMXxUTS03MDEwfFRNLTcwMjN8VE0tNzAyNXxUTS03MDM3V3xUTS03MDM4V3xUTS03MDI3V3xUTS05NzIwfFRNLTk3MjV8VE0tOTczN1d8VE0tMTAyMHxUTS05NzM4V3xUTS05NzQwfFRNLTk3NDNXfFRCLTgwN0F8VEItNzcxQXxUQi03MjdBfFRCLTcyNUF8VEItNzE5QXxUQi04MjNBfFRCLTgwNUF8VEItNzIzQXxUQi03MTVBfFRCLTcwN0F8VEItNzA1QXxUQi03MDlBfFRCLTcxMUF8VEItODkwSER8VEItODgwSER8VEItNzkwSER8VEItNzgwSER8VEItNzcwSER8VEItNzIxSER8VEItNzEwSER8VEItNDM0SER8VEItODYwSER8VEItODQwSER8VEItNzYwSER8VEItNzUwSER8VEItNzQwSER8VEItNzMwSER8VEItNzIySER8VEItNzIwSER8VEItNzAwSER8VEItNTAwSER8VEItNDcwSER8VEItNDMxSER8VEItNDMwSER8VEItNTA2fFRCLTUwNHxUQi00NDZ8VEItNDM2fFRCLTQxNnxUQi0xNDZTRXxUQi0xMjZTRVwiLFxuICAgICAgICAgICAgICAgIFwiUGxheXN0YXRpb25UYWJsZXRcIjogXCJQbGF5c3RhdGlvbi4qKFBvcnRhYmxlfFZpdGEpXCIsXG4gICAgICAgICAgICAgICAgXCJUcmVrc3RvclRhYmxldFwiOiBcIlNUMTA0MTYtMXxWVDEwNDE2LTF8U1Q3MDQwOC0xfFNUNzAyeHgtMXxTVDcwMnh4LTJ8U1Q4MDIwOHxTVDk3MjE2fFNUNzAxMDQtMnxWVDEwNDE2LTJ8U1QxMDIxNi0yQXxTdXJmVGFiXCIsXG4gICAgICAgICAgICAgICAgXCJQeWxlQXVkaW9UYWJsZXRcIjogXCJcXFxcYihQVEJMMTBDRVV8UFRCTDEwQ3xQVEJMNzJCQ3xQVEJMNzJCQ0VVfFBUQkw3Q0VVfFBUQkw3Q3xQVEJMOTJCQ3xQVEJMOTJCQ0VVfFBUQkw5Q0VVfFBUQkw5Q1VLfFBUQkw5QylcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiQWR2YW5UYWJsZXRcIjogXCJBbmRyb2lkLiogXFxcXGIoRTNBfFQzWHxUNUN8VDVCfFQzRXxUM0N8VDNCfFQxSnxUMUZ8VDJBfFQxSHxUMWl8RTFDfFQxLUV8VDUtQXxUNHxFMS1CfFQyQ2l8VDEtQnxUMS1EfE8xLUF8RTEtQXxUMS1BfFQzQXxUNGkpXFxcXGIgXCIsXG4gICAgICAgICAgICAgICAgXCJEYW55VGVjaFRhYmxldFwiOiBcIkdlbml1cyBUYWIgRzN8R2VuaXVzIFRhYiBTMnxHZW5pdXMgVGFiIFEzfEdlbml1cyBUYWIgRzR8R2VuaXVzIFRhYiBRNHxHZW5pdXMgVGFiIEctSUl8R2VuaXVzIFRBQiBHSUl8R2VuaXVzIFRBQiBHSUlJfEdlbml1cyBUYWIgUzFcIixcbiAgICAgICAgICAgICAgICBcIkdhbGFwYWRUYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYkcxXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIk1pY3JvbWF4VGFibGV0XCI6IFwiRnVuYm9va3xNaWNyb21heC4qXFxcXGIoUDI1MHxQNTYwfFAzNjB8UDM2MnxQNjAwfFAzMDB8UDM1MHxQNTAwfFAyNzUpXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIkthcmJvbm5UYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYihBMzl8QTM3fEEzNHxTVDh8U1QxMHxTVDd8U21hcnQgVGFiM3xTbWFydCBUYWIyKVxcXFxiXCIsXG4gICAgICAgICAgICAgICAgXCJBbGxGaW5lVGFibGV0XCI6IFwiRmluZTcgR2VuaXVzfEZpbmU3IFNoaW5lfEZpbmU3IEFpcnxGaW5lOCBTdHlsZXxGaW5lOSBNb3JlfEZpbmUxMCBKb3l8RmluZTExIFdpZGVcIixcbiAgICAgICAgICAgICAgICBcIlBST1NDQU5UYWJsZXRcIjogXCJcXFxcYihQRU02M3xQTFQxMDIzR3xQTFQxMDQxfFBMVDEwNDR8UExUMTA0NEd8UExUMTA5MXxQTFQ0MzExfFBMVDQzMTFQTHxQTFQ0MzE1fFBMVDcwMzB8UExUNzAzM3xQTFQ3MDMzRHxQTFQ3MDM1fFBMVDcwMzVEfFBMVDcwNDRLfFBMVDcwNDVLfFBMVDcwNDVLQnxQTFQ3MDcxS0d8UExUNzA3MnxQTFQ3MjIzR3xQTFQ3MjI1R3xQTFQ3Nzc3R3xQTFQ3ODEwS3xQTFQ3ODQ5R3xQTFQ3ODUxR3xQTFQ3ODUyR3xQTFQ4MDE1fFBMVDgwMzF8UExUODAzNHxQTFQ4MDM2fFBMVDgwODBLfFBMVDgwODJ8UExUODA4OHxQTFQ4MjIzR3xQTFQ4MjM0R3xQTFQ4MjM1R3xQTFQ4ODE2S3xQTFQ5MDExfFBMVDkwNDVLfFBMVDkyMzNHfFBMVDk3MzV8UExUOTc2MEd8UExUOTc3MEcpXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIllPTkVTVGFibGV0XCI6IFwiQlExMDc4fEJDMTAwM3xCQzEwNzd8Uks5NzAyfEJDOTczMHxCQzkwMDF8SVQ5MDAxfEJDNzAwOHxCQzcwMTB8QkM3MDh8QkM3Mjh8QkM3MDEyfEJDNzAzMHxCQzcwMjd8QkM3MDI2XCIsXG4gICAgICAgICAgICAgICAgXCJDaGFuZ0ppYVRhYmxldFwiOiBcIlRQQzcxMDJ8VFBDNzEwM3xUUEM3MTA1fFRQQzcxMDZ8VFBDNzEwN3xUUEM3MjAxfFRQQzcyMDN8VFBDNzIwNXxUUEM3MjEwfFRQQzc3MDh8VFBDNzcwOXxUUEM3NzEyfFRQQzcxMTB8VFBDODEwMXxUUEM4MTAzfFRQQzgxMDV8VFBDODEwNnxUUEM4MjAzfFRQQzgyMDV8VFBDODUwM3xUUEM5MTA2fFRQQzk3MDF8VFBDOTcxMDF8VFBDOTcxMDN8VFBDOTcxMDV8VFBDOTcxMDZ8VFBDOTcxMTF8VFBDOTcxMTN8VFBDOTcyMDN8VFBDOTc2MDN8VFBDOTc4MDl8VFBDOTcyMDV8VFBDMTAxMDF8VFBDMTAxMDN8VFBDMTAxMDZ8VFBDMTAxMTF8VFBDMTAyMDN8VFBDMTAyMDV8VFBDMTA1MDNcIixcbiAgICAgICAgICAgICAgICBcIkdVVGFibGV0XCI6IFwiVFgtQTEzMDF8VFgtTTkwMDJ8UTcwMnxrZjAyNlwiLFxuICAgICAgICAgICAgICAgIFwiUG9pbnRPZlZpZXdUYWJsZXRcIjogXCJUQUItUDUwNnxUQUItbmF2aS03LTNHLU18VEFCLVA1MTd8VEFCLVAtNTI3fFRBQi1QNzAxfFRBQi1QNzAzfFRBQi1QNzIxfFRBQi1QNzMxTnxUQUItUDc0MXxUQUItUDgyNXxUQUItUDkwNXxUQUItUDkyNXxUQUItUFI5NDV8VEFCLVBMMTAxNXxUQUItUDEwMjV8VEFCLVBJMTA0NXxUQUItUDEzMjV8VEFCLVBST1RBQlswLTldK3xUQUItUFJPVEFCMjV8VEFCLVBST1RBQjI2fFRBQi1QUk9UQUIyN3xUQUItUFJPVEFCMjZYTHxUQUItUFJPVEFCMi1JUFM5fFRBQi1QUk9UQUIzMC1JUFM5fFRBQi1QUk9UQUIyNVhYTHxUQUItUFJPVEFCMjYtSVBTMTB8VEFCLVBST1RBQjMwLUlQUzEwXCIsXG4gICAgICAgICAgICAgICAgXCJPdmVybWF4VGFibGV0XCI6IFwiT1YtKFN0ZWVsQ29yZXxOZXdCYXNlfEJhc2Vjb3JlfEJhc2VvbmV8RXhlbGxlbnxRdWF0dG9yfEVkdVRhYnxTb2x1dGlvbnxBQ1RJT058QmFzaWNUYWJ8VGVkZHlUYWJ8TWFnaWNUYWJ8U3RyZWFtfFRCLTA4fFRCLTA5KVwiLFxuICAgICAgICAgICAgICAgIFwiSENMVGFibGV0XCI6IFwiSENMLipUYWJsZXR8Q29ubmVjdC0zRy0yLjB8Q29ubmVjdC0yRy0yLjB8TUUgVGFibGV0IFUxfE1FIFRhYmxldCBVMnxNRSBUYWJsZXQgRzF8TUUgVGFibGV0IFgxfE1FIFRhYmxldCBZMnxNRSBUYWJsZXQgU3luY1wiLFxuICAgICAgICAgICAgICAgIFwiRFBTVGFibGV0XCI6IFwiRFBTIERyZWFtIDl8RFBTIER1YWwgN1wiLFxuICAgICAgICAgICAgICAgIFwiVmlzdHVyZVRhYmxldFwiOiBcIlY5NyBIRHxpNzUgM0d8VmlzdHVyZSBWNCggSEQpP3xWaXN0dXJlIFY1KCBIRCk/fFZpc3R1cmUgVjEwXCIsXG4gICAgICAgICAgICAgICAgXCJDcmVzdGFUYWJsZXRcIjogXCJDVFAoLSk/ODEwfENUUCgtKT84MTh8Q1RQKC0pPzgyOHxDVFAoLSk/ODM4fENUUCgtKT84ODh8Q1RQKC0pPzk3OHxDVFAoLSk/OTgwfENUUCgtKT85ODd8Q1RQKC0pPzk4OHxDVFAoLSk/OTg5XCIsXG4gICAgICAgICAgICAgICAgXCJNZWRpYXRla1RhYmxldFwiOiBcIlxcXFxiTVQ4MTI1fE1UODM4OXxNVDgxMzV8TVQ4Mzc3XFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIkNvbmNvcmRlVGFibGV0XCI6IFwiQ29uY29yZGUoWyBdKyk/VGFifENvbkNvcmRlIFJlYWRNYW5cIixcbiAgICAgICAgICAgICAgICBcIkdvQ2xldmVyVGFibGV0XCI6IFwiR09DTEVWRVIgVEFCfEE3R09DTEVWRVJ8TTEwNDJ8TTc4NDF8TTc0MnxSMTA0MkJLfFIxMDQxfFRBQiBBOTc1fFRBQiBBNzg0MnxUQUIgQTc0MXxUQUIgQTc0MUx8VEFCIE03MjNHfFRBQiBNNzIxfFRBQiBBMTAyMXxUQUIgSTkyMXxUQUIgUjcyMXxUQUIgSTcyMHxUQUIgVDc2fFRBQiBSNzB8VEFCIFI3Ni4yfFRBQiBSMTA2fFRBQiBSODMuMnxUQUIgTTgxM0d8VEFCIEk3MjF8R0NUQTcyMnxUQUIgSTcwfFRBQiBJNzF8VEFCIFM3M3xUQUIgUjczfFRBQiBSNzR8VEFCIFI5M3xUQUIgUjc1fFRBQiBSNzYuMXxUQUIgQTczfFRBQiBBOTN8VEFCIEE5My4yfFRBQiBUNzJ8VEFCIFI4M3xUQUIgUjk3NHxUQUIgUjk3M3xUQUIgQTEwMXxUQUIgQTEwM3xUQUIgQTEwNHxUQUIgQTEwNC4yfFIxMDVCS3xNNzEzR3xBOTcyQkt8VEFCIEE5NzF8VEFCIFI5NzQuMnxUQUIgUjEwNHxUQUIgUjgzLjN8VEFCIEExMDQyXCIsXG4gICAgICAgICAgICAgICAgXCJNb2RlY29tVGFibGV0XCI6IFwiRnJlZVRBQiA5MDAwfEZyZWVUQUIgNy40fEZyZWVUQUIgNzAwNHxGcmVlVEFCIDc4MDB8RnJlZVRBQiAyMDk2fEZyZWVUQUIgNy41fEZyZWVUQUIgMTAxNHxGcmVlVEFCIDEwMDEgfEZyZWVUQUIgODAwMXxGcmVlVEFCIDk3MDZ8RnJlZVRBQiA5NzAyfEZyZWVUQUIgNzAwM3xGcmVlVEFCIDcwMDJ8RnJlZVRBQiAxMDAyfEZyZWVUQUIgNzgwMXxGcmVlVEFCIDEzMzF8RnJlZVRBQiAxMDA0fEZyZWVUQUIgODAwMnxGcmVlVEFCIDgwMTR8RnJlZVRBQiA5NzA0fEZyZWVUQUIgMTAwM1wiLFxuICAgICAgICAgICAgICAgIFwiVm9uaW5vVGFibGV0XCI6IFwiXFxcXGIoQXJndXNbIF9dP1N8RGlhbW9uZFsgX10/NzlIRHxFbWVyYWxkWyBfXT83OEV8THVuYVsgX10/NzBDfE9ueXhbIF9dP1N8T255eFsgX10/WnxPcmluWyBfXT9IRHxPcmluWyBfXT9TfE90aXNbIF9dP1N8U3BlZWRTdGFyWyBfXT9TfE1hZ25ldFsgX10/TTl8UHJpbXVzWyBfXT85NFsgX10/M0d8UHJpbXVzWyBfXT85NEhEfFByaW11c1sgX10/UVN8QW5kcm9pZC4qXFxcXGJROFxcXFxifFNpcml1c1sgX10/RVZPWyBfXT9RU3xTaXJpdXNbIF9dP1FTfFNwaXJpdFsgX10/UylcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiRUNTVGFibGV0XCI6IFwiVjA3T1QyfFRNMTA1QXxTMTBPVDF8VFIxMENTMVwiLFxuICAgICAgICAgICAgICAgIFwiU3RvcmV4VGFibGV0XCI6IFwiZVplZVtfJ10/KFRhYnxHbylbMC05XSt8VGFiTEM3fExvb25leSBUdW5lcyBUYWJcIixcbiAgICAgICAgICAgICAgICBcIlZvZGFmb25lVGFibGV0XCI6IFwiU21hcnRUYWIoWyBdKyk/WzAtOV0rfFNtYXJ0VGFiSUkxMHxTbWFydFRhYklJN3xWRi0xNDk3XCIsXG4gICAgICAgICAgICAgICAgXCJFc3NlbnRpZWxCVGFibGV0XCI6IFwiU21hcnRbICddP1RBQlsgXSs/WzAtOV0rfEZhbWlseVsgJ10/VEFCMlwiLFxuICAgICAgICAgICAgICAgIFwiUm9zc01vb3JUYWJsZXRcIjogXCJSTS03OTB8Uk0tOTk3fFJNRC04NzhHfFJNRC05NzRSfFJNVC03MDVBfFJNVC03MDF8Uk1FLTYwMXxSTVQtNTAxfFJNVC03MTFcIixcbiAgICAgICAgICAgICAgICBcImlNb2JpbGVUYWJsZXRcIjogXCJpLW1vYmlsZSBpLW5vdGVcIixcbiAgICAgICAgICAgICAgICBcIlRvbGlub1RhYmxldFwiOiBcInRvbGlubyB0YWIgWzAtOS5dK3x0b2xpbm8gc2hpbmVcIixcbiAgICAgICAgICAgICAgICBcIkF1ZGlvU29uaWNUYWJsZXRcIjogXCJcXFxcYkMtMjJRfFQ3LVFDfFQtMTdCfFQtMTdQXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIkFNUEVUYWJsZXRcIjogXCJBbmRyb2lkLiogQTc4IFwiLFxuICAgICAgICAgICAgICAgIFwiU2trVGFibGV0XCI6IFwiQW5kcm9pZC4qIChTS1lQQUR8UEhPRU5JWHxDWUNMT1BTKVwiLFxuICAgICAgICAgICAgICAgIFwiVGVjbm9UYWJsZXRcIjogXCJURUNOTyBQOVwiLFxuICAgICAgICAgICAgICAgIFwiSlhEVGFibGV0XCI6IFwiQW5kcm9pZC4qIFxcXFxiKEYzMDAwfEEzMzAwfEpYRDUwMDB8SlhEMzAwMHxKWEQyMDAwfEpYRDMwMEJ8SlhEMzAwfFM1ODAwfFM3ODAwfFM2MDJifFM1MTEwYnxTNzMwMHxTNTMwMHxTNjAyfFM2MDN8UzUxMDB8UzUxMTB8UzYwMXxTNzEwMGF8UDMwMDBGfFAzMDAwc3xQMTAxfFAyMDBzfFAxMDAwbXxQMjAwbXxQOTEwMHxQMTAwMHN8UzY2MDBifFM5MDh8UDEwMDB8UDMwMHxTMTh8UzY2MDB8UzkxMDApXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcImlKb3lUYWJsZXRcIjogXCJUYWJsZXQgKFNwaXJpdCA3fEVzc2VudGlhfEdhbGF0ZWF8RnVzaW9ufE9uaXggN3xMYW5kYXxUaXRhbnxTY29vYnl8RGVveHxTdGVsbGF8VGhlbWlzfEFyZ29ufFVuaXF1ZSA3fFN5Z251c3xIZXhlbnxGaW5pdHkgN3xDcmVhbXxDcmVhbSBYMnxKYWRlfE5lb24gN3xOZXJvbiA3fEthbmR5fFNjYXBlfFNhcGh5ciA3fFJlYmVsfEJpb3h8UmViZWx8UmViZWwgOEdCfE15c3R8RHJhY28gN3xNeXN0fFRhYjctMDA0fE15c3R8VGFkZW8gSm9uZXN8VGFibGV0IEJvaW5nfEFycm93fERyYWNvIER1YWwgQ2FtfEF1cml4fE1pbnR8QW1pdHl8UmV2b2x1dGlvbnxGaW5pdHkgOXxOZW9uIDl8VDl3fEFtaXR5IDRHQiBEdWFsIENhbXxTdG9uZSA0R0J8U3RvbmUgOEdCfEFuZHJvbWVkYXxTaWxrZW58WDJ8QW5kcm9tZWRhIElJfEhhbGxleXxGbGFtZXxTYXBoeXIgOSw3fFRvdWNoIDh8UGxhbmV0fFRyaXRvbnxVbmlxdWUgMTB8SGV4ZW4gMTB8TWVtcGhpcyA0R0J8TWVtcGhpcyA4R0J8T25peCAxMClcIixcbiAgICAgICAgICAgICAgICBcIkZYMlRhYmxldFwiOiBcIkZYMiBQQUQ3fEZYMiBQQUQxMFwiLFxuICAgICAgICAgICAgICAgIFwiWG9yb1RhYmxldFwiOiBcIktpZHNQQUQgNzAxfFBBRFsgXT83MTJ8UEFEWyBdPzcxNHxQQURbIF0/NzE2fFBBRFsgXT83MTd8UEFEWyBdPzcxOHxQQURbIF0/NzIwfFBBRFsgXT83MjF8UEFEWyBdPzcyMnxQQURbIF0/NzkwfFBBRFsgXT83OTJ8UEFEWyBdPzkwMHxQQURbIF0/OTcxNUR8UEFEWyBdPzk3MTZEUnxQQURbIF0/OTcxOERSfFBBRFsgXT85NzE5UVJ8UEFEWyBdPzk3MjBRUnxUZWxlUEFEMTAzMHxUZWxlcGFkMTAzMnxUZWxlUEFENzMwfFRlbGVQQUQ3MzF8VGVsZVBBRDczMnxUZWxlUEFENzM1UXxUZWxlUEFEODMwfFRlbGVQQUQ5NzMwfFRlbGVQQUQ3OTV8TWVnYVBBRCAxMzMxfE1lZ2FQQUQgMTg1MXxNZWdhUEFEIDIxNTFcIixcbiAgICAgICAgICAgICAgICBcIlZpZXdzb25pY1RhYmxldFwiOiBcIlZpZXdQYWQgMTBwaXxWaWV3UGFkIDEwZXxWaWV3UGFkIDEwc3xWaWV3UGFkIEU3MnxWaWV3UGFkN3xWaWV3UGFkIEUxMDB8Vmlld1BhZCA3ZXxWaWV3U29uaWMgVkI3MzN8VkIxMDBhXCIsXG4gICAgICAgICAgICAgICAgXCJPZHlzVGFibGV0XCI6IFwiTE9PWHxYRU5PMTB8T0RZU1sgLV0oU3BhY2V8RVZPfFhwcmVzc3xOT09OKXxcXFxcYlhFTElPXFxcXGJ8WGVsaW8xMFByb3xYRUxJTzdQSE9ORVRBQnxYRUxJTzEwRVhUUkVNRXxYRUxJT1BUMnxORU9fUVVBRDEwXCIsXG4gICAgICAgICAgICAgICAgXCJDYXB0aXZhVGFibGV0XCI6IFwiQ0FQVElWQSBQQURcIixcbiAgICAgICAgICAgICAgICBcIkljb25iaXRUYWJsZXRcIjogXCJOZXRUQUJ8TlQtMzcwMnxOVC0zNzAyU3xOVC0zNzAyU3xOVC0zNjAzUHxOVC0zNjAzUHxOVC0wNzA0U3xOVC0wNzA0U3xOVC0zODA1Q3xOVC0zODA1Q3xOVC0wODA2Q3xOVC0wODA2Q3xOVC0wOTA5VHxOVC0wOTA5VHxOVC0wOTA3U3xOVC0wOTA3U3xOVC0wOTAyU3xOVC0wOTAyU1wiLFxuICAgICAgICAgICAgICAgIFwiVGVjbGFzdFRhYmxldFwiOiBcIlQ5OCA0R3xcXFxcYlA4MFxcXFxifFxcXFxiWDkwSERcXFxcYnxYOTggQWlyfFg5OCBBaXIgM0d8XFxcXGJYODlcXFxcYnxQODAgM0d8XFxcXGJYODBoXFxcXGJ8UDk4IEFpcnxcXFxcYlg4OUhEXFxcXGJ8UDk4IDNHfFxcXFxiUDkwSERcXFxcYnxQODkgM0d8WDk4IDNHfFxcXFxiUDcwaFxcXFxifFA3OUhEIDNHfEcxOGQgM0d8XFxcXGJQNzlIRFxcXFxifFxcXFxiUDg5c1xcXFxifFxcXFxiQTg4XFxcXGJ8XFxcXGJQMTBIRFxcXFxifFxcXFxiUDE5SERcXFxcYnxHMTggM0d8XFxcXGJQNzhIRFxcXFxifFxcXFxiQTc4XFxcXGJ8XFxcXGJQNzVcXFxcYnxHMTdzIDNHfEcxN2ggM0d8XFxcXGJQODV0XFxcXGJ8XFxcXGJQOTBcXFxcYnxcXFxcYlAxMVxcXFxifFxcXFxiUDk4dFxcXFxifFxcXFxiUDk4SERcXFxcYnxcXFxcYkcxOGRcXFxcYnxcXFxcYlA4NXNcXFxcYnxcXFxcYlAxMUhEXFxcXGJ8XFxcXGJQODhzXFxcXGJ8XFxcXGJBODBIRFxcXFxifFxcXFxiQTgwc2VcXFxcYnxcXFxcYkExMGhcXFxcYnxcXFxcYlA4OVxcXFxifFxcXFxiUDc4c1xcXFxifFxcXFxiRzE4XFxcXGJ8XFxcXGJQODVcXFxcYnxcXFxcYkE3MGhcXFxcYnxcXFxcYkE3MFxcXFxifFxcXFxiRzE3XFxcXGJ8XFxcXGJQMThcXFxcYnxcXFxcYkE4MHNcXFxcYnxcXFxcYkExMXNcXFxcYnxcXFxcYlA4OEhEXFxcXGJ8XFxcXGJBODBoXFxcXGJ8XFxcXGJQNzZzXFxcXGJ8XFxcXGJQNzZoXFxcXGJ8XFxcXGJQOThcXFxcYnxcXFxcYkExMEhEXFxcXGJ8XFxcXGJQNzhcXFxcYnxcXFxcYlA4OFxcXFxifFxcXFxiQTExXFxcXGJ8XFxcXGJBMTB0XFxcXGJ8XFxcXGJQNzZhXFxcXGJ8XFxcXGJQNzZ0XFxcXGJ8XFxcXGJQNzZlXFxcXGJ8XFxcXGJQODVIRFxcXFxifFxcXFxiUDg1YVxcXFxifFxcXFxiUDg2XFxcXGJ8XFxcXGJQNzVIRFxcXFxifFxcXFxiUDc2dlxcXFxifFxcXFxiQTEyXFxcXGJ8XFxcXGJQNzVhXFxcXGJ8XFxcXGJBMTVcXFxcYnxcXFxcYlA3NlRpXFxcXGJ8XFxcXGJQODFIRFxcXFxifFxcXFxiQTEwXFxcXGJ8XFxcXGJUNzYwVkVcXFxcYnxcXFxcYlQ3MjBIRFxcXFxifFxcXFxiUDc2XFxcXGJ8XFxcXGJQNzNcXFxcYnxcXFxcYlA3MVxcXFxifFxcXFxiUDcyXFxcXGJ8XFxcXGJUNzIwU0VcXFxcYnxcXFxcYkM1MjBUaVxcXFxifFxcXFxiVDc2MFxcXFxifFxcXFxiVDcyMFZFXFxcXGJ8VDcyMC0zR0V8VDcyMC1XaUZpXCIsXG4gICAgICAgICAgICAgICAgXCJPbmRhVGFibGV0XCI6IFwiXFxcXGIoVjk3NWl8VmkzMHxWWDUzMHxWNzAxfFZpNjB8VjcwMXN8Vmk1MHxWODAxc3xWNzE5fFZ4NjEwd3xWWDYxMFd8VjgxOWl8VmkxMHxWWDU4MFd8VmkxMHxWNzExc3xWODEzfFY4MTF8VjgyMHd8VjgyMHxWaTIwfFY3MTF8VkkzMFd8VjcxMnxWODkxd3xWOTcyfFY4MTl3fFY4MjB3fFZpNjB8VjgyMHd8VjcxMXxWODEzc3xWODAxfFY4MTl8Vjk3NXN8VjgwMXxWODE5fFY4MTl8VjgxOHxWODExfFY3MTJ8Vjk3NW18VjEwMXd8Vjk2MXd8VjgxMnxWODE4fFY5NzF8Vjk3MXN8VjkxOXxWOTg5fFYxMTZ3fFYxMDJ3fFY5NzN8Vmk0MClcXFxcYltcXFxcc10rXCIsXG4gICAgICAgICAgICAgICAgXCJKYXl0ZWNoVGFibGV0XCI6IFwiVFBDLVBBNzYyXCIsXG4gICAgICAgICAgICAgICAgXCJCbGF1cHVua3RUYWJsZXRcIjogXCJFbmRlYXZvdXIgODAwTkd8RW5kZWF2b3VyIDEwMTBcIixcbiAgICAgICAgICAgICAgICBcIkRpZ21hVGFibGV0XCI6IFwiXFxcXGIoaUR4MTB8aUR4OXxpRHg4fGlEeDd8aUR4RDd8aUR4RDh8aURzUTh8aURzUTd8aURzUTh8aURzRDEwfGlEbkQ3fDNUUzgwNEh8aURzUTExfGlEajd8aURzMTApXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIkV2b2xpb1RhYmxldFwiOiBcIkFSSUFfTWluaV93aWZpfEFyaWFbIF9dTWluaXxFdm9saW8gWDEwfEV2b2xpbyBYN3xFdm9saW8gWDh8XFxcXGJFdm90YWJcXFxcYnxcXFxcYk5ldXJhXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIkxhdmFUYWJsZXRcIjogXCJRUEFEIEU3MDR8XFxcXGJJdm9yeVNcXFxcYnxFLVRBQiBJVk9SWXxcXFxcYkUtVEFCXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIkFvY1RhYmxldFwiOiBcIk1XMDgxMXxNVzA4MTJ8TVcwOTIyfE1USzgzODJ8TVcxMDMxfE1XMDgzMXxNVzA4MjF8TVcwOTMxfE1XMDcxMlwiLFxuICAgICAgICAgICAgICAgIFwiTXBtYW5UYWJsZXRcIjogXCJNUDExIE9DVEF8TVAxMCBPQ1RBfE1QUUMxMTE0fE1QUUMxMDA0fE1QUUM5OTR8TVBRQzk3NHxNUFFDOTczfE1QUUM4MDR8TVBRQzc4NHxNUFFDNzgwfFxcXFxiTVBHN1xcXFxifE1QRENHNzV8TVBEQ0c3MXxNUERDMTAwNnxNUDEwMURDfE1QREM5MDAwfE1QREM5MDV8TVBEQzcwNkhEfE1QREM3MDZ8TVBEQzcwNXxNUERDMTEwfE1QREMxMDB8TVBEQzk5fE1QREM5N3xNUERDODh8TVBEQzh8TVBEQzc3fE1QNzA5fE1JRDcwMXxNSUQ3MTF8TUlEMTcwfE1QREM3MDN8TVBRQzEwMTBcIixcbiAgICAgICAgICAgICAgICBcIkNlbGtvblRhYmxldFwiOiBcIkNUNjk1fENUODg4fENUW1xcXFxzXT85MTB8Q1Q3IFRhYnxDVDkgVGFifENUMyBUYWJ8Q1QyIFRhYnxDVDEgVGFifEM4MjB8QzcyMHxcXFxcYkNULTFcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiV29sZGVyVGFibGV0XCI6IFwibWlUYWIgXFxcXGIoRElBTU9ORHxTUEFDRXxCUk9PS0xZTnxORU98RkxZfE1BTkhBVFRBTnxGVU5LfEVWT0xVVElPTnxTS1l8R09DQVJ8SVJPTnxHRU5JVVN8UE9QfE1JTlR8RVBTSUxPTnxCUk9BRFdBWXxKVU1QfEhPUHxMRUdFTkR8TkVXIEFHRXxMSU5FfEFEVkFOQ0V8RkVFTHxGT0xMT1d8TElLRXxMSU5LfExJVkV8VEhJTkt8RlJFRURPTXxDSElDQUdPfENMRVZFTEFORHxCQUxUSU1PUkUtR0h8SU9XQXxCT1NUT058U0VBVFRMRXxQSE9FTklYfERBTExBU3xJTiAxMDF8TWFzdGVyQ2hlZilcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiTWlUYWJsZXRcIjogXCJcXFxcYk1JIFBBRFxcXFxifFxcXFxiSE0gTk9URSAxV1xcXFxiXCIsXG4gICAgICAgICAgICAgICAgXCJOaWJpcnVUYWJsZXRcIjogXCJOaWJpcnUgTTF8TmliaXJ1IEp1cGl0ZXIgT25lXCIsXG4gICAgICAgICAgICAgICAgXCJOZXhvVGFibGV0XCI6IFwiTkVYTyBOT1ZBfE5FWE8gMTB8TkVYTyBBVklPfE5FWE8gRlJFRXxORVhPIEdPfE5FWE8gRVZPfE5FWE8gM0d8TkVYTyBTTUFSVHxORVhPIEtJRERPfE5FWE8gTU9CSVwiLFxuICAgICAgICAgICAgICAgIFwiTGVhZGVyVGFibGV0XCI6IFwiVEJMVDEwUXxUQkxUMTBJfFRCTC0xMFdES0J8VEJMLTEwV0RLQk8yMDEzfFRCTC1XMjMwVjJ8VEJMLVc0NTB8VEJMLVc1MDB8U1Y1NzJ8VEJMVDdJfFRCQS1BQzctOEd8VEJMVDc5fFRCTC04VzE2fFRCTC0xMFczMnxUQkwtMTBXS0J8VEJMLVcxMDBcIixcbiAgICAgICAgICAgICAgICBcIlViaXNsYXRlVGFibGV0XCI6IFwiVWJpU2xhdGVbXFxcXHNdPzdDXCIsXG4gICAgICAgICAgICAgICAgXCJQb2NrZXRCb29rVGFibGV0XCI6IFwiUG9ja2V0Ym9va1wiLFxuICAgICAgICAgICAgICAgIFwiS29jYXNvVGFibGV0XCI6IFwiXFxcXGIoVEItMTIwNylcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiSGlzZW5zZVRhYmxldFwiOiBcIlxcXFxiKEY1MjgxfEUyMzcxKVxcXFxiXCIsXG4gICAgICAgICAgICAgICAgXCJIdWRsXCI6IFwiSHVkbCBIVDdTM3xIdWRsIDJcIixcbiAgICAgICAgICAgICAgICBcIlRlbHN0cmFUYWJsZXRcIjogXCJULUh1YjJcIixcbiAgICAgICAgICAgICAgICBcIkdlbmVyaWNUYWJsZXRcIjogXCJBbmRyb2lkLipcXFxcYjk3RFxcXFxifFRhYmxldCg/IS4qUEMpfEJOVFYyNTBBfE1JRC1XQ0RNQXxMb2dpY1BEIFpvb20yfFxcXFxiQTdFQlxcXFxifENhdE5vdmE4fEExXzA3fENUNzA0fENUMTAwMnxcXFxcYk03MjFcXFxcYnxyazMwc2RrfFxcXFxiRVZPVEFCXFxcXGJ8TTc1OEF8RVQ5MDR8QUxVTUlVTTEwfFNtYXJ0ZnJlbiBUYWJ8RW5kZWF2b3VyIDEwMTB8VGFibGV0LVBDLTR8VGFnaSBUYWJ8XFxcXGJNNnByb1xcXFxifENUMTAyMFd8YXJjIDEwSER8XFxcXGJUUDc1MFxcXFxiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm9zc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJBbmRyb2lkT1NcIjogXCJBbmRyb2lkXCIsXG4gICAgICAgICAgICAgICAgXCJCbGFja0JlcnJ5T1NcIjogXCJibGFja2JlcnJ5fFxcXFxiQkIxMFxcXFxifHJpbSB0YWJsZXQgb3NcIixcbiAgICAgICAgICAgICAgICBcIlBhbG1PU1wiOiBcIlBhbG1PU3xhdmFudGdvfGJsYXplcnxlbGFpbmV8aGlwdG9wfHBhbG18cGx1Y2tlcnx4aWlub1wiLFxuICAgICAgICAgICAgICAgIFwiU3ltYmlhbk9TXCI6IFwiU3ltYmlhbnxTeW1iT1N8U2VyaWVzNjB8U2VyaWVzNDB8U1lCLVswLTldK3xcXFxcYlM2MFxcXFxiXCIsXG4gICAgICAgICAgICAgICAgXCJXaW5kb3dzTW9iaWxlT1NcIjogXCJXaW5kb3dzIENFLiooUFBDfFNtYXJ0cGhvbmV8TW9iaWxlfFswLTldezN9eFswLTldezN9KXxXaW5kb3cgTW9iaWxlfFdpbmRvd3MgUGhvbmUgWzAtOS5dK3xXQ0U7XCIsXG4gICAgICAgICAgICAgICAgXCJXaW5kb3dzUGhvbmVPU1wiOiBcIldpbmRvd3MgUGhvbmUgMTAuMHxXaW5kb3dzIFBob25lIDguMXxXaW5kb3dzIFBob25lIDguMHxXaW5kb3dzIFBob25lIE9TfFhCTFdQN3xadW5lV1A3fFdpbmRvd3MgTlQgNi5bMjNdOyBBUk07XCIsXG4gICAgICAgICAgICAgICAgXCJpT1NcIjogXCJcXFxcYmlQaG9uZS4qTW9iaWxlfFxcXFxiaVBvZHxcXFxcYmlQYWRcIixcbiAgICAgICAgICAgICAgICBcIk1lZUdvT1NcIjogXCJNZWVHb1wiLFxuICAgICAgICAgICAgICAgIFwiTWFlbW9PU1wiOiBcIk1hZW1vXCIsXG4gICAgICAgICAgICAgICAgXCJKYXZhT1NcIjogXCJKMk1FXFwvfFxcXFxiTUlEUFxcXFxifFxcXFxiQ0xEQ1xcXFxiXCIsXG4gICAgICAgICAgICAgICAgXCJ3ZWJPU1wiOiBcIndlYk9TfGhwd09TXCIsXG4gICAgICAgICAgICAgICAgXCJiYWRhT1NcIjogXCJcXFxcYkJhZGFcXFxcYlwiLFxuICAgICAgICAgICAgICAgIFwiQlJFV09TXCI6IFwiQlJFV1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1YXNcIjoge1xuICAgICAgICAgICAgICAgIFwiQ2hyb21lXCI6IFwiXFxcXGJDck1vXFxcXGJ8Q3JpT1N8QW5kcm9pZC4qQ2hyb21lXFwvWy4wLTldKiAoTW9iaWxlKT9cIixcbiAgICAgICAgICAgICAgICBcIkRvbGZpblwiOiBcIlxcXFxiRG9sZmluXFxcXGJcIixcbiAgICAgICAgICAgICAgICBcIk9wZXJhXCI6IFwiT3BlcmEuKk1pbml8T3BlcmEuKk1vYml8QW5kcm9pZC4qT3BlcmF8TW9iaWxlLipPUFJcXC9bMC05Ll0rfENvYXN0XFwvWzAtOS5dK1wiLFxuICAgICAgICAgICAgICAgIFwiU2t5ZmlyZVwiOiBcIlNreWZpcmVcIixcbiAgICAgICAgICAgICAgICBcIkVkZ2VcIjogXCJNb2JpbGUgU2FmYXJpXFwvWy4wLTldKiBFZGdlXCIsXG4gICAgICAgICAgICAgICAgXCJJRVwiOiBcIklFTW9iaWxlfE1TSUVNb2JpbGVcIixcbiAgICAgICAgICAgICAgICBcIkZpcmVmb3hcIjogXCJmZW5uZWN8ZmlyZWZveC4qbWFlbW98KE1vYmlsZXxUYWJsZXQpLipGaXJlZm94fEZpcmVmb3guKk1vYmlsZXxGeGlPU1wiLFxuICAgICAgICAgICAgICAgIFwiQm9sdFwiOiBcImJvbHRcIixcbiAgICAgICAgICAgICAgICBcIlRlYVNoYXJrXCI6IFwidGVhc2hhcmtcIixcbiAgICAgICAgICAgICAgICBcIkJsYXplclwiOiBcIkJsYXplclwiLFxuICAgICAgICAgICAgICAgIFwiU2FmYXJpXCI6IFwiVmVyc2lvbi4qTW9iaWxlLipTYWZhcml8U2FmYXJpLipNb2JpbGV8TW9iaWxlU2FmYXJpXCIsXG4gICAgICAgICAgICAgICAgXCJVQ0Jyb3dzZXJcIjogXCJVQy4qQnJvd3NlcnxVQ1dFQlwiLFxuICAgICAgICAgICAgICAgIFwiYmFpZHVib3hhcHBcIjogXCJiYWlkdWJveGFwcFwiLFxuICAgICAgICAgICAgICAgIFwiYmFpZHVicm93c2VyXCI6IFwiYmFpZHVicm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJEaWlnb0Jyb3dzZXJcIjogXCJEaWlnb0Jyb3dzZXJcIixcbiAgICAgICAgICAgICAgICBcIlB1ZmZpblwiOiBcIlB1ZmZpblwiLFxuICAgICAgICAgICAgICAgIFwiTWVyY3VyeVwiOiBcIlxcXFxiTWVyY3VyeVxcXFxiXCIsXG4gICAgICAgICAgICAgICAgXCJPYmlnb0Jyb3dzZXJcIjogXCJPYmlnb1wiLFxuICAgICAgICAgICAgICAgIFwiTmV0RnJvbnRcIjogXCJORi1Ccm93c2VyXCIsXG4gICAgICAgICAgICAgICAgXCJHZW5lcmljQnJvd3NlclwiOiBcIk5va2lhQnJvd3NlcnxPdmlCcm93c2VyfE9uZUJyb3dzZXJ8VHdvbmt5QmVhbUJyb3dzZXJ8U0VNQy4qQnJvd3NlcnxGbHlGbG93fE1pbmltb3xOZXRGcm9udHxOb3ZhcnJhLVZpc2lvbnxNUVFCcm93c2VyfE1pY3JvTWVzc2VuZ2VyXCIsXG4gICAgICAgICAgICAgICAgXCJQYWxlTW9vblwiOiBcIkFuZHJvaWQuKlBhbGVNb29ufE1vYmlsZS4qUGFsZU1vb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicHJvcHNcIjoge1xuICAgICAgICAgICAgICAgIFwiTW9iaWxlXCI6IFwiTW9iaWxlXFwvW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcIkJ1aWxkXCI6IFwiQnVpbGRcXC9bVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiVmVyc2lvblwiOiBcIlZlcnNpb25cXC9bVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiVmVuZG9ySURcIjogXCJWZW5kb3JJRFxcL1tWRVJdXCIsXG4gICAgICAgICAgICAgICAgXCJpUGFkXCI6IFwiaVBhZC4qQ1BVW2EteiBdK1tWRVJdXCIsXG4gICAgICAgICAgICAgICAgXCJpUGhvbmVcIjogXCJpUGhvbmUuKkNQVVthLXogXStbVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiaVBvZFwiOiBcImlQb2QuKkNQVVthLXogXStbVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiS2luZGxlXCI6IFwiS2luZGxlXFwvW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcIkNocm9tZVwiOiBbXCJDaHJvbWVcXC9bVkVSXVwiLCBcIkNyaU9TXFwvW1ZFUl1cIiwgXCJDck1vXFwvW1ZFUl1cIl0sXG4gICAgICAgICAgICAgICAgXCJDb2FzdFwiOiBbXCJDb2FzdFxcL1tWRVJdXCJdLFxuICAgICAgICAgICAgICAgIFwiRG9sZmluXCI6IFwiRG9sZmluXFwvW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcIkZpcmVmb3hcIjogW1wiRmlyZWZveFxcL1tWRVJdXCIsIFwiRnhpT1NcXC9bVkVSXVwiXSxcbiAgICAgICAgICAgICAgICBcIkZlbm5lY1wiOiBcIkZlbm5lY1xcL1tWRVJdXCIsXG4gICAgICAgICAgICAgICAgXCJFZGdlXCI6IFwiRWRnZVxcL1tWRVJdXCIsXG4gICAgICAgICAgICAgICAgXCJJRVwiOiBbXCJJRU1vYmlsZVxcL1tWRVJdO1wiLCBcIklFTW9iaWxlIFtWRVJdXCIsIFwiTVNJRSBbVkVSXTtcIiwgXCJUcmlkZW50XFwvWzAtOS5dKzsuKnJ2OltWRVJdXCJdLFxuICAgICAgICAgICAgICAgIFwiTmV0RnJvbnRcIjogXCJOZXRGcm9udFxcL1tWRVJdXCIsXG4gICAgICAgICAgICAgICAgXCJOb2tpYUJyb3dzZXJcIjogXCJOb2tpYUJyb3dzZXJcXC9bVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiT3BlcmFcIjogW1wiIE9QUlxcL1tWRVJdXCIsIFwiT3BlcmEgTWluaVxcL1tWRVJdXCIsIFwiVmVyc2lvblxcL1tWRVJdXCJdLFxuICAgICAgICAgICAgICAgIFwiT3BlcmEgTWluaVwiOiBcIk9wZXJhIE1pbmlcXC9bVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiT3BlcmEgTW9iaVwiOiBcIlZlcnNpb25cXC9bVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiVUMgQnJvd3NlclwiOiBcIlVDIEJyb3dzZXJbVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiTVFRQnJvd3NlclwiOiBcIk1RUUJyb3dzZXJcXC9bVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiTWljcm9NZXNzZW5nZXJcIjogXCJNaWNyb01lc3NlbmdlclxcL1tWRVJdXCIsXG4gICAgICAgICAgICAgICAgXCJiYWlkdWJveGFwcFwiOiBcImJhaWR1Ym94YXBwXFwvW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcImJhaWR1YnJvd3NlclwiOiBcImJhaWR1YnJvd3NlclxcL1tWRVJdXCIsXG4gICAgICAgICAgICAgICAgXCJTYW1zdW5nQnJvd3NlclwiOiBcIlNhbXN1bmdCcm93c2VyXFwvW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcIklyb25cIjogXCJJcm9uXFwvW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcIlNhZmFyaVwiOiBbXCJWZXJzaW9uXFwvW1ZFUl1cIiwgXCJTYWZhcmlcXC9bVkVSXVwiXSxcbiAgICAgICAgICAgICAgICBcIlNreWZpcmVcIjogXCJTa3lmaXJlXFwvW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcIlRpemVuXCI6IFwiVGl6ZW5cXC9bVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiV2Via2l0XCI6IFwid2Via2l0WyBcXC9dW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcIlBhbGVNb29uXCI6IFwiUGFsZU1vb25cXC9bVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiR2Vja29cIjogXCJHZWNrb1xcL1tWRVJdXCIsXG4gICAgICAgICAgICAgICAgXCJUcmlkZW50XCI6IFwiVHJpZGVudFxcL1tWRVJdXCIsXG4gICAgICAgICAgICAgICAgXCJQcmVzdG9cIjogXCJQcmVzdG9cXC9bVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiR29hbm5hXCI6IFwiR29hbm5hXFwvW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcImlPU1wiOiBcIiBcXFxcYmk/T1NcXFxcYiBbVkVSXVsgO117MX1cIixcbiAgICAgICAgICAgICAgICBcIkFuZHJvaWRcIjogXCJBbmRyb2lkIFtWRVJdXCIsXG4gICAgICAgICAgICAgICAgXCJCbGFja0JlcnJ5XCI6IFtcIkJsYWNrQmVycnlbXFxcXHddK1xcL1tWRVJdXCIsIFwiQmxhY2tCZXJyeS4qVmVyc2lvblxcL1tWRVJdXCIsIFwiVmVyc2lvblxcL1tWRVJdXCJdLFxuICAgICAgICAgICAgICAgIFwiQlJFV1wiOiBcIkJSRVcgW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcIkphdmFcIjogXCJKYXZhXFwvW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcIldpbmRvd3MgUGhvbmUgT1NcIjogW1wiV2luZG93cyBQaG9uZSBPUyBbVkVSXVwiLCBcIldpbmRvd3MgUGhvbmUgW1ZFUl1cIl0sXG4gICAgICAgICAgICAgICAgXCJXaW5kb3dzIFBob25lXCI6IFwiV2luZG93cyBQaG9uZSBbVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiV2luZG93cyBDRVwiOiBcIldpbmRvd3MgQ0VcXC9bVkVSXVwiLFxuICAgICAgICAgICAgICAgIFwiV2luZG93cyBOVFwiOiBcIldpbmRvd3MgTlQgW1ZFUl1cIixcbiAgICAgICAgICAgICAgICBcIlN5bWJpYW5cIjogW1wiU3ltYmlhbk9TXFwvW1ZFUl1cIiwgXCJTeW1iaWFuXFwvW1ZFUl1cIl0sXG4gICAgICAgICAgICAgICAgXCJ3ZWJPU1wiOiBbXCJ3ZWJPU1xcL1tWRVJdXCIsIFwiaHB3T1NcXC9bVkVSXTtcIl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInV0aWxzXCI6IHtcbiAgICAgICAgICAgICAgICBcIkJvdFwiOiBcIkdvb2dsZWJvdHxmYWNlYm9va2V4dGVybmFsaGl0fEFkc0JvdC1Hb29nbGV8R29vZ2xlIEtleXdvcmQgU3VnZ2VzdGlvbnxGYWNlYm90fFlhbmRleEJvdHxZYW5kZXhNb2JpbGVCb3R8YmluZ2JvdHxpYV9hcmNoaXZlcnxBaHJlZnNCb3R8RXpvb21zfEdTTEZib3R8V0JTZWFyY2hCb3R8VHdpdHRlcmJvdHxUd2VldG1lbWVCb3R8VHdpa2xlfFBhcGVyTGlCb3R8V290Ym94fFVud2luZEZldGNob3J8RXhhYm90fE1KMTJib3R8WWFuZGV4SW1hZ2VzfFR1cm5pdGluQm90fFBpbmdkb21cIixcbiAgICAgICAgICAgICAgICBcIk1vYmlsZUJvdFwiOiBcIkdvb2dsZWJvdC1Nb2JpbGV8QWRzQm90LUdvb2dsZS1Nb2JpbGV8WWFob29TZWVrZXJcXC9NMUExLVIyRDJcIixcbiAgICAgICAgICAgICAgICBcIkRlc2t0b3BNb2RlXCI6IFwiV1BEZXNrdG9wXCIsXG4gICAgICAgICAgICAgICAgXCJUVlwiOiBcIlNvbnlEVFZ8SGJiVFZcIixcbiAgICAgICAgICAgICAgICBcIldlYktpdFwiOiBcIih3ZWJraXQpWyBcXC9dKFtcXFxcdy5dKylcIixcbiAgICAgICAgICAgICAgICBcIkNvbnNvbGVcIjogXCJcXFxcYihOaW50ZW5kb3xOaW50ZW5kbyBXaWlVfE5pbnRlbmRvIDNEU3xQTEFZU1RBVElPTnxYYm94KVxcXFxiXCIsXG4gICAgICAgICAgICAgICAgXCJXYXRjaFwiOiBcIlNNLVY3MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZvbGxvd2luZyBwYXR0ZXJucyBjb21lIGZyb20gaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXJzLmNvbS9cbiAgICAgICAgaW1wbC5kZXRlY3RNb2JpbGVCcm93c2VycyA9IHtcbiAgICAgICAgICAgIGZ1bGxQYXR0ZXJuOiAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2ksXG4gICAgICAgICAgICBzaG9ydFBhdHRlcm46IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLFxuICAgICAgICAgICAgdGFibGV0UGF0dGVybjogL2FuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2lcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgICAgICBpc0FycmF5O1xuXG4gICAgICAgIGltcGwuRkFMTEJBQ0tfUEhPTkUgPSAnVW5rbm93blBob25lJztcbiAgICAgICAgaW1wbC5GQUxMQkFDS19UQUJMRVQgPSAnVW5rbm93blRhYmxldCc7XG4gICAgICAgIGltcGwuRkFMTEJBQ0tfTU9CSUxFID0gJ1Vua25vd25Nb2JpbGUnO1xuXG4gICAgICAgIGlzQXJyYXkgPSAnaXNBcnJheScgaW4gQXJyYXkgPyBBcnJheS5pc0FycmF5IDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBlcXVhbElDKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhICE9IG51bGwgJiYgYiAhPSBudWxsICYmIGEudG9Mb3dlckNhc2UoKSA9PT0gYi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY29udGFpbnNJQyhhcnJheSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZUxDLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgbGVuID0gYXJyYXkubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKCFsZW4gfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVMQyA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVMQyA9PT0gYXJyYXlbaV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjb252ZXJ0UHJvcHNUb1JlZ0V4cChvYmplY3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IG5ldyBSZWdFeHAob2JqZWN0W2tleV0sICdpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgKGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIGxlbixcbiAgICAgICAgICAgICAgICB2ZXJQb3MsXG4gICAgICAgICAgICAgICAgbW9iaWxlRGV0ZWN0UnVsZXMgPSBpbXBsLm1vYmlsZURldGVjdFJ1bGVzO1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gbW9iaWxlRGV0ZWN0UnVsZXMucHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzT3duUHJvcC5jYWxsKG1vYmlsZURldGVjdFJ1bGVzLnByb3BzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IG1vYmlsZURldGVjdFJ1bGVzLnByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVyUG9zID0gdmFsdWUuaW5kZXhPZignW1ZFUl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJQb3MgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHZlclBvcykgKyAnKFtcXFxcdy5fXFxcXCtdKyknICsgdmFsdWUuc3Vic3RyaW5nKHZlclBvcyArIDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2ldID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVEZXRlY3RSdWxlcy5wcm9wc1trZXldID0gdmFsdWVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnZlcnRQcm9wc1RvUmVnRXhwKG1vYmlsZURldGVjdFJ1bGVzLm9zcyk7XG4gICAgICAgICAgICBjb252ZXJ0UHJvcHNUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlcy5waG9uZXMpO1xuICAgICAgICAgICAgY29udmVydFByb3BzVG9SZWdFeHAobW9iaWxlRGV0ZWN0UnVsZXMudGFibGV0cyk7XG4gICAgICAgICAgICBjb252ZXJ0UHJvcHNUb1JlZ0V4cChtb2JpbGVEZXRlY3RSdWxlcy51YXMpO1xuICAgICAgICAgICAgY29udmVydFByb3BzVG9SZWdFeHAobW9iaWxlRGV0ZWN0UnVsZXMudXRpbHMpO1xuXG4gICAgICAgICAgICAvLyBjb3B5IHNvbWUgcGF0dGVybnMgdG8gb3NzMCB3aGljaCBhcmUgdGVzdGVkIGZpcnN0IChzZWUgaXNzdWUjMTUpXG4gICAgICAgICAgICBtb2JpbGVEZXRlY3RSdWxlcy5vc3MwID0ge1xuICAgICAgICAgICAgICAgIFdpbmRvd3NQaG9uZU9TOiBtb2JpbGVEZXRlY3RSdWxlcy5vc3MuV2luZG93c1Bob25lT1MsXG4gICAgICAgICAgICAgICAgV2luZG93c01vYmlsZU9TOiBtb2JpbGVEZXRlY3RSdWxlcy5vc3MuV2luZG93c01vYmlsZU9TXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUZXN0IHVzZXJBZ2VudCBzdHJpbmcgYWdhaW5zdCBhIHNldCBvZiBydWxlcyBhbmQgZmluZCB0aGUgZmlyc3QgbWF0Y2hlZCBrZXkuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBydWxlcyAoa2V5IGlzIFN0cmluZywgdmFsdWUgaXMgUmVnRXhwKVxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50IHRoZSBuYXZpZ2F0b3IudXNlckFnZW50IChvciBIVFRQLUhlYWRlciAnVXNlci1BZ2VudCcpLlxuICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IHRoZSBtYXRjaGVkIGtleSBpZiBmb3VuZCwgb3RoZXJ3aXNlIDx0dD5udWxsPC90dD5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGltcGwuZmluZE1hdGNoID0gZnVuY3Rpb24gKHJ1bGVzLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBydWxlcykge1xuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wLmNhbGwocnVsZXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGVzW2tleV0udGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRlc3QgdXNlckFnZW50IHN0cmluZyBhZ2FpbnN0IGEgc2V0IG9mIHJ1bGVzIGFuZCByZXR1cm4gYW4gYXJyYXkgb2YgbWF0Y2hlZCBrZXlzLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcnVsZXMgKGtleSBpcyBTdHJpbmcsIHZhbHVlIGlzIFJlZ0V4cClcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudCB0aGUgbmF2aWdhdG9yLnVzZXJBZ2VudCAob3IgSFRUUC1IZWFkZXIgJ1VzZXItQWdlbnQnKS5cbiAgICAgICAgICogQHJldHVybnMge0FycmF5fSBhbiBhcnJheSBvZiBtYXRjaGVkIGtleXMsIG1heSBiZSBlbXB0eSB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoLCBidXQgbm90IDx0dD5udWxsPC90dD5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGltcGwuZmluZE1hdGNoZXMgPSBmdW5jdGlvbiAocnVsZXMsIHVzZXJBZ2VudCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChydWxlcywga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZXNba2V5XS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayB0aGUgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIFVzZXItQWdlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHZlcnNpb24gb3IgPHR0Pm51bGw8L3R0PiBpZiB2ZXJzaW9uIG5vdCBmb3VuZFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgaW1wbC5nZXRWZXJzaW9uU3RyID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSwgdXNlckFnZW50KSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnByb3BzLFxuICAgICAgICAgICAgICAgIHBhdHRlcm5zLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgbGVuLFxuICAgICAgICAgICAgICAgIG1hdGNoO1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AuY2FsbChwcm9wcywgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdHRlcm5zID0gcHJvcHNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICBsZW4gPSBwYXR0ZXJucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybnNbaV0uZXhlYyh1c2VyQWdlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayB0aGUgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgaW4gdGhlIFVzZXItQWdlbnQuXG4gICAgICAgICAqIFdpbGwgcmV0dXJuIGEgZmxvYXQgbnVtYmVyLiAoZWcuIDJfMCB3aWxsIHJldHVybiAyLjAsIDQuMy4xIHdpbGwgcmV0dXJuIDQuMzEpXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHZlcnNpb24gb3IgPHR0Pk5hTjwvdHQ+IGlmIHZlcnNpb24gbm90IGZvdW5kXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBpbXBsLmdldFZlcnNpb24gPSBmdW5jdGlvbiAocHJvcGVydHlOYW1lLCB1c2VyQWdlbnQpIHtcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gaW1wbC5nZXRWZXJzaW9uU3RyKHByb3BlcnR5TmFtZSwgdXNlckFnZW50KTtcbiAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uID8gaW1wbC5wcmVwYXJlVmVyc2lvbk5vKHZlcnNpb24pIDogTmFOO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmVwYXJlIHRoZSB2ZXJzaW9uIG51bWJlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHZlcnNpb25cbiAgICAgICAgICogQHJldHVybiB7TnVtYmVyfSB0aGUgdmVyc2lvbiBudW1iZXIgYXMgYSBmbG9hdGluZyBudW1iZXJcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGltcGwucHJlcGFyZVZlcnNpb25ObyA9IGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVycztcblxuICAgICAgICAgICAgbnVtYmVycyA9IHZlcnNpb24uc3BsaXQoL1thLXouXyBcXC9cXC1dL2kpO1xuICAgICAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobnVtYmVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbiA9IG51bWJlcnNbMF0gKyAnLic7XG4gICAgICAgICAgICAgICAgbnVtYmVycy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHZlcnNpb24gKz0gbnVtYmVycy5qb2luKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodmVyc2lvbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgaW1wbC5pc01vYmlsZUZhbGxiYWNrID0gZnVuY3Rpb24gKHVzZXJBZ2VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGltcGwuZGV0ZWN0TW9iaWxlQnJvd3NlcnMuZnVsbFBhdHRlcm4udGVzdCh1c2VyQWdlbnQpIHx8IGltcGwuZGV0ZWN0TW9iaWxlQnJvd3NlcnMuc2hvcnRQYXR0ZXJuLnRlc3QodXNlckFnZW50LnN1YnN0cigwLCA0KSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaW1wbC5pc1RhYmxldEZhbGxiYWNrID0gZnVuY3Rpb24gKHVzZXJBZ2VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGltcGwuZGV0ZWN0TW9iaWxlQnJvd3NlcnMudGFibGV0UGF0dGVybi50ZXN0KHVzZXJBZ2VudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaW1wbC5wcmVwYXJlRGV0ZWN0aW9uQ2FjaGUgPSBmdW5jdGlvbiAoY2FjaGUsIHVzZXJBZ2VudCwgbWF4UGhvbmVXaWR0aCkge1xuICAgICAgICAgICAgaWYgKGNhY2hlLm1vYmlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBob25lLCB0YWJsZXQsIHBob25lU2l6ZWQ7XG5cbiAgICAgICAgICAgIC8vIGZpcnN0IGNoZWNrIGZvciBzdHJvbmdlciB0YWJsZXQgcnVsZXMsIHRoZW4gcGhvbmUgKHNlZSBpc3N1ZSM1KVxuICAgICAgICAgICAgdGFibGV0ID0gaW1wbC5maW5kTWF0Y2goaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy50YWJsZXRzLCB1c2VyQWdlbnQpO1xuICAgICAgICAgICAgaWYgKHRhYmxldCkge1xuICAgICAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnRhYmxldCA9IHRhYmxldDtcbiAgICAgICAgICAgICAgICBjYWNoZS5waG9uZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyB1bmFtYmlndW91c2x5IGlkZW50aWZpZWQgYXMgdGFibGV0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBob25lID0gaW1wbC5maW5kTWF0Y2goaW1wbC5tb2JpbGVEZXRlY3RSdWxlcy5waG9uZXMsIHVzZXJBZ2VudCk7XG4gICAgICAgICAgICBpZiAocGhvbmUpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBjYWNoZS5waG9uZSA9IHBob25lO1xuICAgICAgICAgICAgICAgIGNhY2hlLnRhYmxldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyB1bmFtYmlndW91c2x5IGlkZW50aWZpZWQgYXMgcGhvbmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb3VyIHJ1bGVzIGhhdmVuJ3QgZm91bmQgYSBtYXRjaCAtPiB0cnkgbW9yZSBnZW5lcmFsIGZhbGxiYWNrIHJ1bGVzXG4gICAgICAgICAgICBpZiAoaW1wbC5pc01vYmlsZUZhbGxiYWNrKHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICBwaG9uZVNpemVkID0gTW9iaWxlRGV0ZWN0LmlzUGhvbmVTaXplZChtYXhQaG9uZVdpZHRoKTtcbiAgICAgICAgICAgICAgICBpZiAocGhvbmVTaXplZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGltcGwuRkFMTEJBQ0tfTU9CSUxFO1xuICAgICAgICAgICAgICAgICAgICBjYWNoZS50YWJsZXQgPSBjYWNoZS5waG9uZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwaG9uZVNpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnBob25lID0gaW1wbC5GQUxMQkFDS19QSE9ORTtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUudGFibGV0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBjYWNoZS50YWJsZXQgPSBpbXBsLkZBTExCQUNLX1RBQkxFVDtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUucGhvbmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW1wbC5pc1RhYmxldEZhbGxiYWNrKHVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5tb2JpbGUgPSBjYWNoZS50YWJsZXQgPSBpbXBsLkZBTExCQUNLX1RBQkxFVDtcbiAgICAgICAgICAgICAgICBjYWNoZS5waG9uZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vdCBtb2JpbGUgYXQgYWxsIVxuICAgICAgICAgICAgICAgIGNhY2hlLm1vYmlsZSA9IGNhY2hlLnRhYmxldCA9IGNhY2hlLnBob25lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyB0IGlzIGEgcmVmZXJlbmNlIHRvIGEgTW9iaWxlRGV0ZWN0IGluc3RhbmNlXG4gICAgICAgIGltcGwubW9iaWxlR3JhZGUgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgLy8gaW1wbCBub3RlOlxuICAgICAgICAgICAgLy8gVG8ga2VlcCBpbiBzeW5jIHcvIE1vYmlsZV9EZXRlY3QucGhwIGVhc2lseSwgdGhlIGZvbGxvd2luZyBjb2RlIGlzIHRpZ2h0bHkgYWxpZ25lZCB0byB0aGUgUEhQIHZlcnNpb24uXG4gICAgICAgICAgICAvLyBXaGVuIGNoYW5nZXMgYXJlIG1hZGUgaW4gTW9iaWxlX0RldGVjdC5waHAsIGNvcHkgdGhpcyBtZXRob2QgYW5kIHJlcGxhY2U6XG4gICAgICAgICAgICAvLyAgICAgJHRoaXMtPiAvIHQuXG4gICAgICAgICAgICAvLyAgICAgc2VsZjo6TU9CSUxFX0dSQURFXyguKSAvICckMSdcbiAgICAgICAgICAgIC8vICAgICAsIHNlbGY6OlZFUlNJT05fVFlQRV9GTE9BVCAvIChub3RoaW5nKVxuICAgICAgICAgICAgLy8gICAgIGlzSU9TKCkgLyBvcygnaU9TJylcbiAgICAgICAgICAgIC8vICAgICBbcmVnXSAvIChub3RoaW5nKSAgIDwtLSBqc2RlbGl2ciBjb21wbGFpbmluZyBhYm91dCB1bmVzY2FwZWQgdW5pY29kZSBjaGFyYWN0ZXIgVSswMEFFXG4gICAgICAgICAgICB2YXIgJGlzTW9iaWxlID0gdC5tb2JpbGUoKSAhPT0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgLy8gQXBwbGUgaU9TIDMuMi01LjEgLSBUZXN0ZWQgb24gdGhlIG9yaWdpbmFsIGlQYWQgKDQuMyAvIDUuMCksIGlQYWQgMiAoNC4zKSwgaVBhZCAzICg1LjEpLCBvcmlnaW5hbCBpUGhvbmUgKDMuMSksIGlQaG9uZSAzICgzLjIpLCAzR1MgKDQuMyksIDQgKDQuMyAvIDUuMCksIGFuZCA0UyAoNS4xKVxuICAgICAgICAgICAgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUGFkJykgPj0gNC4zIHx8IHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBob25lJykgPj0gMy4xIHx8IHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBvZCcpID49IDMuMSB8fFxuXG4gICAgICAgICAgICAvLyBBbmRyb2lkIDIuMS0yLjMgLSBUZXN0ZWQgb24gdGhlIEhUQyBJbmNyZWRpYmxlICgyLjIpLCBvcmlnaW5hbCBEcm9pZCAoMi4yKSwgSFRDIEFyaWEgKDIuMSksIEdvb2dsZSBOZXh1cyBTICgyLjMpLiBGdW5jdGlvbmFsIG9uIDEuNSAmIDEuNiBidXQgcGVyZm9ybWFuY2UgbWF5IGJlIHNsdWdnaXNoLCB0ZXN0ZWQgb24gR29vZ2xlIEcxICgxLjUpXG4gICAgICAgICAgICAvLyBBbmRyb2lkIDMuMSAoSG9uZXljb21iKSAgLSBUZXN0ZWQgb24gdGhlIFNhbXN1bmcgR2FsYXh5IFRhYiAxMC4xIGFuZCBNb3Rvcm9sYSBYT09NXG4gICAgICAgICAgICAvLyBBbmRyb2lkIDQuMCAoSUNTKSAgLSBUZXN0ZWQgb24gYSBHYWxheHkgTmV4dXMuIE5vdGU6IHRyYW5zaXRpb24gcGVyZm9ybWFuY2UgY2FuIGJlIHBvb3Igb24gdXBncmFkZWQgZGV2aWNlc1xuICAgICAgICAgICAgLy8gQW5kcm9pZCA0LjEgKEplbGx5IEJlYW4pICAtIFRlc3RlZCBvbiBhIEdhbGF4eSBOZXh1cyBhbmQgR2FsYXh5IDdcbiAgICAgICAgICAgIHQudmVyc2lvbignQW5kcm9pZCcpID4gMi4xICYmIHQuaXMoJ1dlYmtpdCcpIHx8XG5cbiAgICAgICAgICAgIC8vIFdpbmRvd3MgUGhvbmUgNy03LjUgLSBUZXN0ZWQgb24gdGhlIEhUQyBTdXJyb3VuZCAoNy4wKSBIVEMgVHJvcGh5ICg3LjUpLCBMRy1FOTAwICg3LjUpLCBOb2tpYSBMdW1pYSA4MDBcbiAgICAgICAgICAgIHQudmVyc2lvbignV2luZG93cyBQaG9uZSBPUycpID49IDcuMCB8fFxuXG4gICAgICAgICAgICAvLyBCbGFja2JlcnJ5IDcgLSBUZXN0ZWQgb24gQmxhY2tCZXJyeSBUb3JjaCA5ODEwXG4gICAgICAgICAgICAvLyBCbGFja2JlcnJ5IDYuMCAtIFRlc3RlZCBvbiB0aGUgVG9yY2ggOTgwMCBhbmQgU3R5bGUgOTY3MFxuICAgICAgICAgICAgdC5pcygnQmxhY2tCZXJyeScpICYmIHQudmVyc2lvbignQmxhY2tCZXJyeScpID49IDYuMCB8fFxuICAgICAgICAgICAgLy8gQmxhY2tiZXJyeSBQbGF5Ym9vayAoMS4wLTIuMCkgLSBUZXN0ZWQgb24gUGxheUJvb2tcbiAgICAgICAgICAgIHQubWF0Y2goJ1BsYXlib29rLipUYWJsZXQnKSB8fFxuXG4gICAgICAgICAgICAvLyBQYWxtIFdlYk9TICgxLjQtMi4wKSAtIFRlc3RlZCBvbiB0aGUgUGFsbSBQaXhpICgxLjQpLCBQcmUgKDEuNCksIFByZSAyICgyLjApXG4gICAgICAgICAgICB0LnZlcnNpb24oJ3dlYk9TJykgPj0gMS40ICYmIHQubWF0Y2goJ1BhbG18UHJlfFBpeGknKSB8fFxuICAgICAgICAgICAgLy8gUGFsbSBXZWJPUyAzLjAgIC0gVGVzdGVkIG9uIEhQIFRvdWNoUGFkXG4gICAgICAgICAgICB0Lm1hdGNoKCdocC4qVG91Y2hQYWQnKSB8fFxuXG4gICAgICAgICAgICAvLyBGaXJlZm94IE1vYmlsZSAoMTIgQmV0YSkgLSBUZXN0ZWQgb24gQW5kcm9pZCAyLjMgZGV2aWNlXG4gICAgICAgICAgICB0LmlzKCdGaXJlZm94JykgJiYgdC52ZXJzaW9uKCdGaXJlZm94JykgPj0gMTIgfHxcblxuICAgICAgICAgICAgLy8gQ2hyb21lIGZvciBBbmRyb2lkIC0gVGVzdGVkIG9uIEFuZHJvaWQgNC4wLCA0LjEgZGV2aWNlXG4gICAgICAgICAgICB0LmlzKCdDaHJvbWUnKSAmJiB0LmlzKCdBbmRyb2lkT1MnKSAmJiB0LnZlcnNpb24oJ0FuZHJvaWQnKSA+PSA0LjAgfHxcblxuICAgICAgICAgICAgLy8gU2t5ZmlyZSA0LjEgLSBUZXN0ZWQgb24gQW5kcm9pZCAyLjMgZGV2aWNlXG4gICAgICAgICAgICB0LmlzKCdTa3lmaXJlJykgJiYgdC52ZXJzaW9uKCdTa3lmaXJlJykgPj0gNC4xICYmIHQuaXMoJ0FuZHJvaWRPUycpICYmIHQudmVyc2lvbignQW5kcm9pZCcpID49IDIuMyB8fFxuXG4gICAgICAgICAgICAvLyBPcGVyYSBNb2JpbGUgMTEuNS0xMjogVGVzdGVkIG9uIEFuZHJvaWQgMi4zXG4gICAgICAgICAgICB0LmlzKCdPcGVyYScpICYmIHQudmVyc2lvbignT3BlcmEgTW9iaScpID4gMTEgJiYgdC5pcygnQW5kcm9pZE9TJykgfHxcblxuICAgICAgICAgICAgLy8gTWVlZ28gMS4yIC0gVGVzdGVkIG9uIE5va2lhIDk1MCBhbmQgTjlcbiAgICAgICAgICAgIHQuaXMoJ01lZUdvT1MnKSB8fFxuXG4gICAgICAgICAgICAvLyBUaXplbiAocHJlLXJlbGVhc2UpIC0gVGVzdGVkIG9uIGVhcmx5IGhhcmR3YXJlXG4gICAgICAgICAgICB0LmlzKCdUaXplbicpIHx8XG5cbiAgICAgICAgICAgIC8vIFNhbXN1bmcgQmFkYSAyLjAgLSBUZXN0ZWQgb24gYSBTYW1zdW5nIFdhdmUgMywgRG9scGhpbiBicm93c2VyXG4gICAgICAgICAgICAvLyBAdG9kbzogbW9yZSB0ZXN0cyBoZXJlIVxuICAgICAgICAgICAgdC5pcygnRG9sZmluJykgJiYgdC52ZXJzaW9uKCdCYWRhJykgPj0gMi4wIHx8XG5cbiAgICAgICAgICAgIC8vIFVDIEJyb3dzZXIgLSBUZXN0ZWQgb24gQW5kcm9pZCAyLjMgZGV2aWNlXG4gICAgICAgICAgICAodC5pcygnVUMgQnJvd3NlcicpIHx8IHQuaXMoJ0RvbGZpbicpKSAmJiB0LnZlcnNpb24oJ0FuZHJvaWQnKSA+PSAyLjMgfHxcblxuICAgICAgICAgICAgLy8gS2luZGxlIDMgYW5kIEZpcmUgIC0gVGVzdGVkIG9uIHRoZSBidWlsdC1pbiBXZWJLaXQgYnJvd3NlciBmb3IgZWFjaFxuICAgICAgICAgICAgdC5tYXRjaCgnS2luZGxlIEZpcmUnKSB8fCB0LmlzKCdLaW5kbGUnKSAmJiB0LnZlcnNpb24oJ0tpbmRsZScpID49IDMuMCB8fFxuXG4gICAgICAgICAgICAvLyBOb29rIENvbG9yIDEuNC4xIC0gVGVzdGVkIG9uIG9yaWdpbmFsIE5vb2sgQ29sb3IsIG5vdCBOb29rIFRhYmxldFxuICAgICAgICAgICAgdC5pcygnQW5kcm9pZE9TJykgJiYgdC5pcygnTm9va1RhYmxldCcpIHx8XG5cbiAgICAgICAgICAgIC8vIENocm9tZSBEZXNrdG9wIDExLTIxIC0gVGVzdGVkIG9uIE9TIFggMTAuNyBhbmQgV2luZG93cyA3XG4gICAgICAgICAgICB0LnZlcnNpb24oJ0Nocm9tZScpID49IDExICYmICEkaXNNb2JpbGUgfHxcblxuICAgICAgICAgICAgLy8gU2FmYXJpIERlc2t0b3AgNC01IC0gVGVzdGVkIG9uIE9TIFggMTAuNyBhbmQgV2luZG93cyA3XG4gICAgICAgICAgICB0LnZlcnNpb24oJ1NhZmFyaScpID49IDUuMCAmJiAhJGlzTW9iaWxlIHx8XG5cbiAgICAgICAgICAgIC8vIEZpcmVmb3ggRGVza3RvcCA0LTEzIC0gVGVzdGVkIG9uIE9TIFggMTAuNyBhbmQgV2luZG93cyA3XG4gICAgICAgICAgICB0LnZlcnNpb24oJ0ZpcmVmb3gnKSA+PSA0LjAgJiYgISRpc01vYmlsZSB8fFxuXG4gICAgICAgICAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA3LTkgLSBUZXN0ZWQgb24gV2luZG93cyBYUCwgVmlzdGEgYW5kIDdcbiAgICAgICAgICAgIHQudmVyc2lvbignTVNJRScpID49IDcuMCAmJiAhJGlzTW9iaWxlIHx8XG5cbiAgICAgICAgICAgIC8vIE9wZXJhIERlc2t0b3AgMTAtMTIgLSBUZXN0ZWQgb24gT1MgWCAxMC43IGFuZCBXaW5kb3dzIDdcbiAgICAgICAgICAgIC8vIEByZWZlcmVuY2U6IGh0dHA6Ly9teS5vcGVyYS5jb20vY29tbXVuaXR5L29wZW53ZWIvaWRvcGVyYS9cbiAgICAgICAgICAgIHQudmVyc2lvbignT3BlcmEnKSA+PSAxMCAmJiAhJGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBhZCcpIDwgNC4zIHx8IHQub3MoJ2lPUycpICYmIHQudmVyc2lvbignaVBob25lJykgPCAzLjEgfHwgdC5vcygnaU9TJykgJiYgdC52ZXJzaW9uKCdpUG9kJykgPCAzLjEgfHxcblxuICAgICAgICAgICAgLy8gQmxhY2tiZXJyeSA1LjA6IFRlc3RlZCBvbiB0aGUgU3Rvcm0gMiA5NTUwLCBCb2xkIDk3NzBcbiAgICAgICAgICAgIHQuaXMoJ0JsYWNrYmVycnknKSAmJiB0LnZlcnNpb24oJ0JsYWNrQmVycnknKSA+PSA1ICYmIHQudmVyc2lvbignQmxhY2tCZXJyeScpIDwgNiB8fFxuXG4gICAgICAgICAgICAvL09wZXJhIE1pbmkgKDUuMC02LjUpIC0gVGVzdGVkIG9uIGlPUyAzLjIvNC4zIGFuZCBBbmRyb2lkIDIuM1xuICAgICAgICAgICAgdC52ZXJzaW9uKCdPcGVyYSBNaW5pJykgPj0gNS4wICYmIHQudmVyc2lvbignT3BlcmEgTWluaScpIDw9IDYuNSAmJiAodC52ZXJzaW9uKCdBbmRyb2lkJykgPj0gMi4zIHx8IHQuaXMoJ2lPUycpKSB8fFxuXG4gICAgICAgICAgICAvLyBOb2tpYSBTeW1iaWFuXjMgLSBUZXN0ZWQgb24gTm9raWEgTjggKFN5bWJpYW5eMyksIEM3IChTeW1iaWFuXjMpLCBhbHNvIHdvcmtzIG9uIE45NyAoU3ltYmlhbl4xKVxuICAgICAgICAgICAgdC5tYXRjaCgnTm9raWFOOHxOb2tpYUM3fE45Ny4qU2VyaWVzNjB8U3ltYmlhbi8zJykgfHxcblxuICAgICAgICAgICAgLy8gQHRvZG86IHJlcG9ydCB0aGlzICh0ZXN0ZWQgb24gTm9raWEgTjcxKVxuICAgICAgICAgICAgdC52ZXJzaW9uKCdPcGVyYSBNb2JpJykgPj0gMTEgJiYgdC5pcygnU3ltYmlhbk9TJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0InO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBCbGFja2JlcnJ5IDQueCAtIFRlc3RlZCBvbiB0aGUgQ3VydmUgODMzMFxuICAgICAgICAgICAgdC52ZXJzaW9uKCdCbGFja0JlcnJ5JykgPCA1LjAgfHxcbiAgICAgICAgICAgIC8vIFdpbmRvd3MgTW9iaWxlIC0gVGVzdGVkIG9uIHRoZSBIVEMgTGVvIChXaW5NbyA1LjIpXG4gICAgICAgICAgICB0Lm1hdGNoKCdNU0lFTW9iaWxlfFdpbmRvd3MgQ0UuKk1vYmlsZScpIHx8IHQudmVyc2lvbignV2luZG93cyBNb2JpbGUnKSA8PSA1LjIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0MnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0FsbCBvbGRlciBzbWFydHBob25lIHBsYXRmb3JtcyBhbmQgZmVhdHVyZXBob25lcyAtIEFueSBkZXZpY2UgdGhhdCBkb2Vzbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllc1xuICAgICAgICAgICAgLy93aWxsIHJlY2VpdmUgdGhlIGJhc2ljLCBDIGdyYWRlIGV4cGVyaWVuY2UuXG4gICAgICAgICAgICByZXR1cm4gJ0MnO1xuICAgICAgICB9O1xuXG4gICAgICAgIGltcGwuZGV0ZWN0T1MgPSBmdW5jdGlvbiAodWEpIHtcbiAgICAgICAgICAgIHJldHVybiBpbXBsLmZpbmRNYXRjaChpbXBsLm1vYmlsZURldGVjdFJ1bGVzLm9zczAsIHVhKSB8fCBpbXBsLmZpbmRNYXRjaChpbXBsLm1vYmlsZURldGVjdFJ1bGVzLm9zcywgdWEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGltcGwuZ2V0RGV2aWNlU21hbGxlclNpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNjcmVlbi53aWR0aCA8IHdpbmRvdy5zY3JlZW4uaGVpZ2h0ID8gd2luZG93LnNjcmVlbi53aWR0aCA6IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25zdHJ1Y3RvciBmb3IgTW9iaWxlRGV0ZWN0IG9iamVjdC5cbiAgICAgICAgICogPGJyPlxuICAgICAgICAgKiBTdWNoIGFuIG9iamVjdCB3aWxsIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIGdpdmVuIHVzZXItYWdlbnQgc3RyaW5nIGFuZCBjYWNoZSBtb3N0IG9mIHRoZSBkZXRlY3QgcXVlcmllcy48YnI+XG4gICAgICAgICAqIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3OyBib3JkZXI6IDFweCBzb2xpZCAjYmNlOGYxOyBjb2xvcjogIzNhODdhZDsgcGFkZGluZzogMTRweDsgYm9yZGVyLXJhZGl1czogMnB4OyBtYXJnaW4tdG9wOiAyMHB4XCI+XG4gICAgICAgICAqICAgICA8c3Ryb25nPkZpbmQgaW5mb3JtYXRpb24gaG93IHRvIGRvd25sb2FkIGFuZCBpbnN0YWxsOjwvc3Ryb25nPlxuICAgICAgICAgKiAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oZ29lYmwvbW9iaWxlLWRldGVjdC5qcy9cIj5naXRodWIuY29tL2hnb2VibC9tb2JpbGUtZGV0ZWN0LmpzLzwvYT5cbiAgICAgICAgICogPC9kaXY+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlIDxwcmU+XG4gICAgICAgICAqICAgICB2YXIgbWQgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgICogICAgIGlmIChtZC5tb2JpbGUoKSkge1xuICAgICAgICAgKiAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAobWQubW9iaWxlR3JhZGUoKSA9PT0gJ0EnKSA/ICcvbW9iaWxlLycgOiAnL2x5bngvJztcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICogPC9wcmU+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWdlbnQgdHlwaWNhbGx5IHRha2VuIGZyb20gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgb3IgaHR0cF9oZWFkZXJbJ1VzZXItQWdlbnQnXVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW21heFBob25lV2lkdGg9NjAwXSA8c3Ryb25nPm9ubHkgZm9yIGJyb3dzZXJzPC9zdHJvbmc+IHNwZWNpZnkgYSB2YWx1ZSBmb3IgdGhlIG1heGltdW1cbiAgICAgICAgICogICAgICAgIHdpZHRoIG9mIHNtYWxsZXN0IGRldmljZSBzaWRlIChpbiBsb2dpY2FsIFwiQ1NTXCIgcGl4ZWxzKSB1bnRpbCBhIGRldmljZSBkZXRlY3RlZCBhcyBtb2JpbGUgd2lsbCBiZSBoYW5kbGVkXG4gICAgICAgICAqICAgICAgICBhcyBwaG9uZS5cbiAgICAgICAgICogICAgICAgIFRoaXMgaXMgb25seSB1c2VkIGluIGNhc2VzIHdoZXJlIHRoZSBkZXZpY2UgY2Fubm90IGJlIGNsYXNzaWZpZWQgYXMgcGhvbmUgb3IgdGFibGV0Ljxicj5cbiAgICAgICAgICogICAgICAgIFNlZSA8YSBocmVmPVwiaHR0cDovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9ndWlkZS9wcmFjdGljZXMvc2NyZWVuc19zdXBwb3J0Lmh0bWxcIj5EZWNsYXJpbmcgVGFibGV0IExheW91dHNcbiAgICAgICAgICogICAgICAgIGZvciBBbmRyb2lkPC9hPi48YnI+XG4gICAgICAgICAqICAgICAgICBJZiB5b3UgcHJvdmlkZSBhIHZhbHVlIDwgMCwgdGhlbiB0aGlzIFwiZnV6enlcIiBjaGVjayBpcyBkaXNhYmxlZC5cbiAgICAgICAgICogQGNvbnN0cnVjdG9yXG4gICAgICAgICAqIEBnbG9iYWxcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE1vYmlsZURldGVjdCh1c2VyQWdlbnQsIG1heFBob25lV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMudWEgPSB1c2VyQWdlbnQgfHwgJyc7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgICAgICAgLy82MDBkcCBpcyB0eXBpY2FsIDdcIiB0YWJsZXQgbWluaW11bSB3aWR0aFxuICAgICAgICAgICAgdGhpcy5tYXhQaG9uZVdpZHRoID0gbWF4UGhvbmVXaWR0aCB8fCA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICBNb2JpbGVEZXRlY3QucHJvdG90eXBlID0ge1xuICAgICAgICAgICAgY29uc3RydWN0b3I6IE1vYmlsZURldGVjdCxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXR1cm5zIHRoZSBkZXRlY3RlZCBwaG9uZSBvciB0YWJsZXQgdHlwZSBvciA8dHQ+bnVsbDwvdHQ+IGlmIGl0IGlzIG5vdCBhIG1vYmlsZSBkZXZpY2UuXG4gICAgICAgICAgICAgKiA8YnI+XG4gICAgICAgICAgICAgKiBGb3IgYSBsaXN0IG9mIHBvc3NpYmxlIHJldHVybiB2YWx1ZXMgc2VlIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9IGFuZCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uPGJyPlxuICAgICAgICAgICAgICogPGJyPlxuICAgICAgICAgICAgICogSWYgdGhlIGRldmljZSBpcyBub3QgZGV0ZWN0ZWQgYnkgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZnJvbSBNb2JpbGUtRGV0ZWN0LCBhIHRlc3QgaXMgbWFkZSBhZ2FpbnN0XG4gICAgICAgICAgICAgKiB0aGUgcGF0dGVybnMgb2YgPGEgaHJlZj1cImh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vXCI+ZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tPC9hPi4gSWYgdGhpcyB0ZXN0XG4gICAgICAgICAgICAgKiBpcyBwb3NpdGl2ZSwgYSB2YWx1ZSBvZiA8Y29kZT5Vbmtub3duUGhvbmU8L2NvZGU+LCA8Y29kZT5Vbmtub3duVGFibGV0PC9jb2RlPiBvclxuICAgICAgICAgICAgICogPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gaXMgcmV0dXJuZWQuPGJyPlxuICAgICAgICAgICAgICogV2hlbiB1c2VkIGluIGJyb3dzZXIsIHRoZSBkZWNpc2lvbiB3aGV0aGVyIHBob25lIG9yIHRhYmxldCBpcyBtYWRlIGJhc2VkIG9uIDxjb2RlPnNjcmVlbi53aWR0aC9oZWlnaHQ8L2NvZGU+Ljxicj5cbiAgICAgICAgICAgICAqIDxicj5cbiAgICAgICAgICAgICAqIFdoZW4gdXNlZCBzZXJ2ZXItc2lkZSAobm9kZS5qcyksIHRoZXJlIGlzIG5vIHdheSB0byB0ZWxsIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gPGNvZGU+VW5rbm93blRhYmxldDwvY29kZT5cbiAgICAgICAgICAgICAqIGFuZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiwgc28geW91IHdpbGwgZ2V0IDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IGhlcmUuPGJyPlxuICAgICAgICAgICAgICogQmUgYXdhcmUgdGhhdCBzaW5jZSB2MS4wLjAgaW4gdGhpcyBzcGVjaWFsIGNhc2UgeW91IHdpbGwgZ2V0IDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IG9ubHkgZm9yOlxuICAgICAgICAgICAgICoge0BsaW5rIE1vYmlsZURldGVjdCNtb2JpbGV9LCBub3QgZm9yIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9IGFuZCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uXG4gICAgICAgICAgICAgKiBJbiB2ZXJzaW9ucyBiZWZvcmUgdjEuMC4wIGFsbCAzIG1ldGhvZHMgcmV0dXJuZWQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gd2hpY2ggd2FzIHRlZGlvdXMgdG8gdXNlLlxuICAgICAgICAgICAgICogPGJyPlxuICAgICAgICAgICAgICogSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCB1c2UgdGhlIHJldHVybiB2YWx1ZSBqdXN0IGFzIGEgYm9vbGVhbi5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUga2V5IGZvciB0aGUgcGhvbmUgZmFtaWx5IG9yIHRhYmxldCBmYW1pbHksIGUuZy4gXCJOZXh1c1wiLlxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCNtb2JpbGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbW9iaWxlOiBmdW5jdGlvbiBtb2JpbGUoKSB7XG4gICAgICAgICAgICAgICAgaW1wbC5wcmVwYXJlRGV0ZWN0aW9uQ2FjaGUodGhpcy5fY2FjaGUsIHRoaXMudWEsIHRoaXMubWF4UGhvbmVXaWR0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLm1vYmlsZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJucyB0aGUgZGV0ZWN0ZWQgcGhvbmUgdHlwZS9mYW1pbHkgc3RyaW5nIG9yIDx0dD5udWxsPC90dD4uXG4gICAgICAgICAgICAgKiA8YnI+XG4gICAgICAgICAgICAgKiBUaGUgcmV0dXJuZWQgdGFibGV0IChmYW1pbHkgb3IgcHJvZHVjZXIpIGlzIG9uZSBvZiBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAgICAgKiA8YnI+PHR0PmlQaG9uZSwgQmxhY2tCZXJyeSwgSFRDLCBOZXh1cywgRGVsbCwgTW90b3JvbGEsIFNhbXN1bmcsIExHLCBTb255LCBBc3VzLFxuICAgICAgICAgICAgICogTm9raWFMdW1pYSwgTWljcm9tYXgsIFBhbG0sIFZlcnR1LCBQYW50ZWNoLCBGbHksIFdpa28sIGlNb2JpbGUsIFNpbVZhbGxleSxcbiAgICAgICAgICAgICAqIFdvbGZnYW5nLCBBbGNhdGVsLCBOaW50ZW5kbywgQW1vaSwgSU5RLCBHZW5lcmljUGhvbmU8L3R0Pjxicj5cbiAgICAgICAgICAgICAqIDxicj5cbiAgICAgICAgICAgICAqIElmIHRoZSBkZXZpY2UgaXMgbm90IGRldGVjdGVkIGJ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIGZyb20gTW9iaWxlLURldGVjdCwgYSB0ZXN0IGlzIG1hZGUgYWdhaW5zdFxuICAgICAgICAgICAgICogdGhlIHBhdHRlcm5zIG9mIDxhIGhyZWY9XCJodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tL1wiPmRldGVjdG1vYmlsZWJyb3dzZXJzLmNvbTwvYT4uIElmIHRoaXMgdGVzdFxuICAgICAgICAgICAgICogaXMgcG9zaXRpdmUsIGEgdmFsdWUgb2YgPGNvZGU+VW5rbm93blBob25lPC9jb2RlPiBvciA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiBpcyByZXR1cm5lZC48YnI+XG4gICAgICAgICAgICAgKiBXaGVuIHVzZWQgaW4gYnJvd3NlciwgdGhlIGRlY2lzaW9uIHdoZXRoZXIgcGhvbmUgb3IgdGFibGV0IGlzIG1hZGUgYmFzZWQgb24gPGNvZGU+c2NyZWVuLndpZHRoL2hlaWdodDwvY29kZT4uPGJyPlxuICAgICAgICAgICAgICogPGJyPlxuICAgICAgICAgICAgICogV2hlbiB1c2VkIHNlcnZlci1zaWRlIChub2RlLmpzKSwgdGhlcmUgaXMgbm8gd2F5IHRvIHRlbGwgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiA8Y29kZT5Vbmtub3duVGFibGV0PC9jb2RlPlxuICAgICAgICAgICAgICogYW5kIDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+LCBzbyB5b3Ugd2lsbCBnZXQgPGNvZGU+bnVsbDwvY29kZT4gaGVyZSwgd2hpbGUge0BsaW5rIE1vYmlsZURldGVjdCNtb2JpbGV9XG4gICAgICAgICAgICAgKiB3aWxsIHJldHVybiA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPi48YnI+XG4gICAgICAgICAgICAgKiBCZSBhd2FyZSB0aGF0IHNpbmNlIHYxLjAuMCBpbiB0aGlzIHNwZWNpYWwgY2FzZSB5b3Ugd2lsbCBnZXQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gb25seSBmb3I6XG4gICAgICAgICAgICAgKiB7QGxpbmsgTW9iaWxlRGV0ZWN0I21vYmlsZX0sIG5vdCBmb3Ige0BsaW5rIE1vYmlsZURldGVjdCNwaG9uZX0gYW5kIHtAbGluayBNb2JpbGVEZXRlY3QjdGFibGV0fS5cbiAgICAgICAgICAgICAqIEluIHZlcnNpb25zIGJlZm9yZSB2MS4wLjAgYWxsIDMgbWV0aG9kcyByZXR1cm5lZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiB3aGljaCB3YXMgdGVkaW91cyB0byB1c2UuXG4gICAgICAgICAgICAgKiA8YnI+XG4gICAgICAgICAgICAgKiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIHVzZSB0aGUgcmV0dXJuIHZhbHVlIGp1c3QgYXMgYSBib29sZWFuLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBrZXkgb2YgdGhlIHBob25lIGZhbWlseSBvciBwcm9kdWNlciwgZS5nLiBcImlQaG9uZVwiXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3Bob25lXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBob25lOiBmdW5jdGlvbiBwaG9uZSgpIHtcbiAgICAgICAgICAgICAgICBpbXBsLnByZXBhcmVEZXRlY3Rpb25DYWNoZSh0aGlzLl9jYWNoZSwgdGhpcy51YSwgdGhpcy5tYXhQaG9uZVdpZHRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUucGhvbmU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgdGhlIGRldGVjdGVkIHRhYmxldCB0eXBlL2ZhbWlseSBzdHJpbmcgb3IgPHR0Pm51bGw8L3R0Pi5cbiAgICAgICAgICAgICAqIDxicj5cbiAgICAgICAgICAgICAqIFRoZSByZXR1cm5lZCB0YWJsZXQgKGZhbWlseSBvciBwcm9kdWNlcikgaXMgb25lIG9mIGZvbGxvd2luZyBrZXlzOjxicj5cbiAgICAgICAgICAgICAqIDxicj48dHQ+aVBhZCwgTmV4dXNUYWJsZXQsIFNhbXN1bmdUYWJsZXQsIEtpbmRsZSwgU3VyZmFjZVRhYmxldCwgSFBUYWJsZXQsIEFzdXNUYWJsZXQsXG4gICAgICAgICAgICAgKiBCbGFja0JlcnJ5VGFibGV0LCBIVEN0YWJsZXQsIE1vdG9yb2xhVGFibGV0LCBOb29rVGFibGV0LCBBY2VyVGFibGV0LFxuICAgICAgICAgICAgICogVG9zaGliYVRhYmxldCwgTEdUYWJsZXQsIEZ1aml0c3VUYWJsZXQsIFByZXN0aWdpb1RhYmxldCwgTGVub3ZvVGFibGV0LFxuICAgICAgICAgICAgICogRGVsbFRhYmxldCwgWWFydmlrVGFibGV0LCBNZWRpb25UYWJsZXQsIEFybm92YVRhYmxldCwgSW50ZW5zb1RhYmxldCwgSVJVVGFibGV0LFxuICAgICAgICAgICAgICogTWVnYWZvblRhYmxldCwgRWJvZGFUYWJsZXQsIEFsbFZpZXdUYWJsZXQsIEFyY2hvc1RhYmxldCwgQWlub2xUYWJsZXQsXG4gICAgICAgICAgICAgKiBOb2tpYUx1bWlhVGFibGV0LCBTb255VGFibGV0LCBQaGlsaXBzVGFibGV0LCBDdWJlVGFibGV0LCBDb2J5VGFibGV0LCBNSURUYWJsZXQsXG4gICAgICAgICAgICAgKiBNU0lUYWJsZXQsIFNNaVRUYWJsZXQsIFJvY2tDaGlwVGFibGV0LCBGbHlUYWJsZXQsIGJxVGFibGV0LCBIdWF3ZWlUYWJsZXQsXG4gICAgICAgICAgICAgKiBOZWNUYWJsZXQsIFBhbnRlY2hUYWJsZXQsIEJyb25jaG9UYWJsZXQsIFZlcnN1c1RhYmxldCwgWnluY1RhYmxldCxcbiAgICAgICAgICAgICAqIFBvc2l0aXZvVGFibGV0LCBOYWJpVGFibGV0LCBLb2JvVGFibGV0LCBEYW5ld1RhYmxldCwgVGV4ZXRUYWJsZXQsXG4gICAgICAgICAgICAgKiBQbGF5c3RhdGlvblRhYmxldCwgVHJla3N0b3JUYWJsZXQsIFB5bGVBdWRpb1RhYmxldCwgQWR2YW5UYWJsZXQsXG4gICAgICAgICAgICAgKiBEYW55VGVjaFRhYmxldCwgR2FsYXBhZFRhYmxldCwgTWljcm9tYXhUYWJsZXQsIEthcmJvbm5UYWJsZXQsIEFsbEZpbmVUYWJsZXQsXG4gICAgICAgICAgICAgKiBQUk9TQ0FOVGFibGV0LCBZT05FU1RhYmxldCwgQ2hhbmdKaWFUYWJsZXQsIEdVVGFibGV0LCBQb2ludE9mVmlld1RhYmxldCxcbiAgICAgICAgICAgICAqIE92ZXJtYXhUYWJsZXQsIEhDTFRhYmxldCwgRFBTVGFibGV0LCBWaXN0dXJlVGFibGV0LCBDcmVzdGFUYWJsZXQsXG4gICAgICAgICAgICAgKiBNZWRpYXRla1RhYmxldCwgQ29uY29yZGVUYWJsZXQsIEdvQ2xldmVyVGFibGV0LCBNb2RlY29tVGFibGV0LCBWb25pbm9UYWJsZXQsXG4gICAgICAgICAgICAgKiBFQ1NUYWJsZXQsIFN0b3JleFRhYmxldCwgVm9kYWZvbmVUYWJsZXQsIEVzc2VudGllbEJUYWJsZXQsIFJvc3NNb29yVGFibGV0LFxuICAgICAgICAgICAgICogaU1vYmlsZVRhYmxldCwgVG9saW5vVGFibGV0LCBBdWRpb1NvbmljVGFibGV0LCBBTVBFVGFibGV0LCBTa2tUYWJsZXQsXG4gICAgICAgICAgICAgKiBUZWNub1RhYmxldCwgSlhEVGFibGV0LCBpSm95VGFibGV0LCBGWDJUYWJsZXQsIFhvcm9UYWJsZXQsIFZpZXdzb25pY1RhYmxldCxcbiAgICAgICAgICAgICAqIE9keXNUYWJsZXQsIENhcHRpdmFUYWJsZXQsIEljb25iaXRUYWJsZXQsIFRlY2xhc3RUYWJsZXQsIE9uZGFUYWJsZXQsXG4gICAgICAgICAgICAgKiBKYXl0ZWNoVGFibGV0LCBCbGF1cHVua3RUYWJsZXQsIERpZ21hVGFibGV0LCBFdm9saW9UYWJsZXQsIExhdmFUYWJsZXQsXG4gICAgICAgICAgICAgKiBBb2NUYWJsZXQsIE1wbWFuVGFibGV0LCBDZWxrb25UYWJsZXQsIFdvbGRlclRhYmxldCwgTWlUYWJsZXQsIE5pYmlydVRhYmxldCxcbiAgICAgICAgICAgICAqIE5leG9UYWJsZXQsIExlYWRlclRhYmxldCwgVWJpc2xhdGVUYWJsZXQsIFBvY2tldEJvb2tUYWJsZXQsIEtvY2Fzb1RhYmxldCxcbiAgICAgICAgICAgICAqIEhpc2Vuc2VUYWJsZXQsIEh1ZGwsIFRlbHN0cmFUYWJsZXQsIEdlbmVyaWNUYWJsZXQ8L3R0Pjxicj5cbiAgICAgICAgICAgICAqIDxicj5cbiAgICAgICAgICAgICAqIElmIHRoZSBkZXZpY2UgaXMgbm90IGRldGVjdGVkIGJ5IHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIGZyb20gTW9iaWxlLURldGVjdCwgYSB0ZXN0IGlzIG1hZGUgYWdhaW5zdFxuICAgICAgICAgICAgICogdGhlIHBhdHRlcm5zIG9mIDxhIGhyZWY9XCJodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tL1wiPmRldGVjdG1vYmlsZWJyb3dzZXJzLmNvbTwvYT4uIElmIHRoaXMgdGVzdFxuICAgICAgICAgICAgICogaXMgcG9zaXRpdmUsIGEgdmFsdWUgb2YgPGNvZGU+VW5rbm93blRhYmxldDwvY29kZT4gb3IgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gaXMgcmV0dXJuZWQuPGJyPlxuICAgICAgICAgICAgICogV2hlbiB1c2VkIGluIGJyb3dzZXIsIHRoZSBkZWNpc2lvbiB3aGV0aGVyIHBob25lIG9yIHRhYmxldCBpcyBtYWRlIGJhc2VkIG9uIDxjb2RlPnNjcmVlbi53aWR0aC9oZWlnaHQ8L2NvZGU+Ljxicj5cbiAgICAgICAgICAgICAqIDxicj5cbiAgICAgICAgICAgICAqIFdoZW4gdXNlZCBzZXJ2ZXItc2lkZSAobm9kZS5qcyksIHRoZXJlIGlzIG5vIHdheSB0byB0ZWxsIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gPGNvZGU+VW5rbm93blRhYmxldDwvY29kZT5cbiAgICAgICAgICAgICAqIGFuZCA8Y29kZT5Vbmtub3duTW9iaWxlPC9jb2RlPiwgc28geW91IHdpbGwgZ2V0IDxjb2RlPm51bGw8L2NvZGU+IGhlcmUsIHdoaWxlIHtAbGluayBNb2JpbGVEZXRlY3QjbW9iaWxlfVxuICAgICAgICAgICAgICogd2lsbCByZXR1cm4gPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4uPGJyPlxuICAgICAgICAgICAgICogQmUgYXdhcmUgdGhhdCBzaW5jZSB2MS4wLjAgaW4gdGhpcyBzcGVjaWFsIGNhc2UgeW91IHdpbGwgZ2V0IDxjb2RlPlVua25vd25Nb2JpbGU8L2NvZGU+IG9ubHkgZm9yOlxuICAgICAgICAgICAgICoge0BsaW5rIE1vYmlsZURldGVjdCNtb2JpbGV9LCBub3QgZm9yIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9IGFuZCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uXG4gICAgICAgICAgICAgKiBJbiB2ZXJzaW9ucyBiZWZvcmUgdjEuMC4wIGFsbCAzIG1ldGhvZHMgcmV0dXJuZWQgPGNvZGU+VW5rbm93bk1vYmlsZTwvY29kZT4gd2hpY2ggd2FzIHRlZGlvdXMgdG8gdXNlLlxuICAgICAgICAgICAgICogPGJyPlxuICAgICAgICAgICAgICogSW4gbW9zdCBjYXNlcyB5b3Ugd2lsbCB1c2UgdGhlIHJldHVybiB2YWx1ZSBqdXN0IGFzIGEgYm9vbGVhbi5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUga2V5IG9mIHRoZSB0YWJsZXQgZmFtaWx5IG9yIHByb2R1Y2VyLCBlLmcuIFwiU2Ftc3VuZ1RhYmxldFwiXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3RhYmxldFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0YWJsZXQ6IGZ1bmN0aW9uIHRhYmxldCgpIHtcbiAgICAgICAgICAgICAgICBpbXBsLnByZXBhcmVEZXRlY3Rpb25DYWNoZSh0aGlzLl9jYWNoZSwgdGhpcy51YSwgdGhpcy5tYXhQaG9uZVdpZHRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGUudGFibGV0O1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXR1cm5zIHRoZSAoZmlyc3QpIGRldGVjdGVkIHVzZXItYWdlbnQgc3RyaW5nIG9yIDx0dD5udWxsPC90dD4uXG4gICAgICAgICAgICAgKiA8YnI+XG4gICAgICAgICAgICAgKiBUaGUgcmV0dXJuZWQgdXNlci1hZ2VudCBpcyBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgICAgICogPGJyPjx0dD5DaHJvbWUsIERvbGZpbiwgT3BlcmEsIFNreWZpcmUsIEVkZ2UsIElFLCBGaXJlZm94LCBCb2x0LCBUZWFTaGFyaywgQmxhemVyLFxuICAgICAgICAgICAgICogU2FmYXJpLCBVQ0Jyb3dzZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsIERpaWdvQnJvd3NlciwgUHVmZmluLCBNZXJjdXJ5LFxuICAgICAgICAgICAgICogT2JpZ29Ccm93c2VyLCBOZXRGcm9udCwgR2VuZXJpY0Jyb3dzZXIsIFBhbGVNb29uPC90dD48YnI+XG4gICAgICAgICAgICAgKiA8YnI+XG4gICAgICAgICAgICAgKiBJbiBtb3N0IGNhc2VzIGNhbGxpbmcge0BsaW5rIE1vYmlsZURldGVjdCN1c2VyQWdlbnR9IHdpbGwgYmUgc3VmZmljaWVudC4gQnV0IHRoZXJlIGFyZSByYXJlXG4gICAgICAgICAgICAgKiBjYXNlcyB3aGVyZSBhIG1vYmlsZSBkZXZpY2UgcHJldGVuZHMgdG8gYmUgbW9yZSB0aGFuIG9uZSBwYXJ0aWN1bGFyIGJyb3dzZXIuIFlvdSBjYW4gZ2V0IHRoZVxuICAgICAgICAgICAgICogbGlzdCBvZiBhbGwgbWF0Y2hlcyB3aXRoIHtAbGluayBNb2JpbGVEZXRlY3QjdXNlckFnZW50c30gb3IgY2hlY2sgZm9yIGEgcGFydGljdWxhciB2YWx1ZSBieVxuICAgICAgICAgICAgICogcHJvdmlkaW5nIG9uZSBvZiB0aGUgZGVmaW5lZCBrZXlzIGFzIGZpcnN0IGFyZ3VtZW50IHRvIHtAbGluayBNb2JpbGVEZXRlY3QjaXN9LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBrZXkgZm9yIHRoZSBkZXRlY3RlZCB1c2VyLWFnZW50IG9yIDx0dD5udWxsPC90dD5cbiAgICAgICAgICAgICAqIEBmdW5jdGlvbiBNb2JpbGVEZXRlY3QjdXNlckFnZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVzZXJBZ2VudDogZnVuY3Rpb24gdXNlckFnZW50KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZS51c2VyQWdlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS51c2VyQWdlbnQgPSBpbXBsLmZpbmRNYXRjaChpbXBsLm1vYmlsZURldGVjdFJ1bGVzLnVhcywgdGhpcy51YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS51c2VyQWdlbnQ7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgYWxsIGRldGVjdGVkIHVzZXItYWdlbnQgc3RyaW5ncy5cbiAgICAgICAgICAgICAqIDxicj5cbiAgICAgICAgICAgICAqIFRoZSBhcnJheSBpcyBlbXB0eSBvciBjb250YWlucyBvbmUgb3IgbW9yZSBvZiBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAgICAgKiA8YnI+PHR0PkNocm9tZSwgRG9sZmluLCBPcGVyYSwgU2t5ZmlyZSwgRWRnZSwgSUUsIEZpcmVmb3gsIEJvbHQsIFRlYVNoYXJrLCBCbGF6ZXIsXG4gICAgICAgICAgICAgKiBTYWZhcmksIFVDQnJvd3NlciwgYmFpZHVib3hhcHAsIGJhaWR1YnJvd3NlciwgRGlpZ29Ccm93c2VyLCBQdWZmaW4sIE1lcmN1cnksXG4gICAgICAgICAgICAgKiBPYmlnb0Jyb3dzZXIsIE5ldEZyb250LCBHZW5lcmljQnJvd3NlciwgUGFsZU1vb248L3R0Pjxicj5cbiAgICAgICAgICAgICAqIDxicj5cbiAgICAgICAgICAgICAqIEluIG1vc3QgY2FzZXMgY2FsbGluZyB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudH0gd2lsbCBiZSBzdWZmaWNpZW50LiBCdXQgdGhlcmUgYXJlIHJhcmVcbiAgICAgICAgICAgICAqIGNhc2VzIHdoZXJlIGEgbW9iaWxlIGRldmljZSBwcmV0ZW5kcyB0byBiZSBtb3JlIHRoYW4gb25lIHBhcnRpY3VsYXIgYnJvd3Nlci4gWW91IGNhbiBnZXQgdGhlXG4gICAgICAgICAgICAgKiBsaXN0IG9mIGFsbCBtYXRjaGVzIHdpdGgge0BsaW5rIE1vYmlsZURldGVjdCN1c2VyQWdlbnRzfSBvciBjaGVjayBmb3IgYSBwYXJ0aWN1bGFyIHZhbHVlIGJ5XG4gICAgICAgICAgICAgKiBwcm92aWRpbmcgb25lIG9mIHRoZSBkZWZpbmVkIGtleXMgYXMgZmlyc3QgYXJndW1lbnQgdG8ge0BsaW5rIE1vYmlsZURldGVjdCNpc30uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHJldHVybnMge0FycmF5fSB0aGUgYXJyYXkgb2YgZGV0ZWN0ZWQgdXNlci1hZ2VudCBrZXlzIG9yIDx0dD5bXTwvdHQ+XG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXNlckFnZW50czogZnVuY3Rpb24gdXNlckFnZW50cygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGUudXNlckFnZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlLnVzZXJBZ2VudHMgPSBpbXBsLmZpbmRNYXRjaGVzKGltcGwubW9iaWxlRGV0ZWN0UnVsZXMudWFzLCB0aGlzLnVhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlLnVzZXJBZ2VudHM7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgdGhlIGRldGVjdGVkIG9wZXJhdGluZyBzeXN0ZW0gc3RyaW5nIG9yIDx0dD5udWxsPC90dD4uXG4gICAgICAgICAgICAgKiA8YnI+XG4gICAgICAgICAgICAgKiBUaGUgb3BlcmF0aW5nIHN5c3RlbSBpcyBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgICAgICogPGJyPjx0dD5BbmRyb2lkT1MsIEJsYWNrQmVycnlPUywgUGFsbU9TLCBTeW1iaWFuT1MsIFdpbmRvd3NNb2JpbGVPUywgV2luZG93c1Bob25lT1MsXG4gICAgICAgICAgICAgKiBpT1MsIE1lZUdvT1MsIE1hZW1vT1MsIEphdmFPUywgd2ViT1MsIGJhZGFPUywgQlJFV09TPC90dD48YnI+XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIGtleSBmb3IgdGhlIGRldGVjdGVkIG9wZXJhdGluZyBzeXN0ZW0uXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I29zXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9zOiBmdW5jdGlvbiBvcygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGUub3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS5vcyA9IGltcGwuZGV0ZWN0T1ModGhpcy51YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS5vcztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHRoZSB2ZXJzaW9uIChhcyBOdW1iZXIpIG9mIHRoZSBnaXZlbiBwcm9wZXJ0eSBpbiB0aGUgVXNlci1BZ2VudC5cbiAgICAgICAgICAgICAqIDxicj5cbiAgICAgICAgICAgICAqIFdpbGwgcmV0dXJuIGEgZmxvYXQgbnVtYmVyLiAoZWcuIDJfMCB3aWxsIHJldHVybiAyLjAsIDQuMy4xIHdpbGwgcmV0dXJuIDQuMzEpXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBhIGtleSBkZWZpbmluZyBhIHRoaW5nIHdoaWNoIGhhcyBhIHZlcnNpb24uPGJyPlxuICAgICAgICAgICAgICogICAgICAgIFlvdSBjYW4gdXNlIG9uZSBvZiBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAgICAgKiA8YnI+PHR0Pk1vYmlsZSwgQnVpbGQsIFZlcnNpb24sIFZlbmRvcklELCBpUGFkLCBpUGhvbmUsIGlQb2QsIEtpbmRsZSwgQ2hyb21lLCBDb2FzdCxcbiAgICAgICAgICAgICAqIERvbGZpbiwgRmlyZWZveCwgRmVubmVjLCBFZGdlLCBJRSwgTmV0RnJvbnQsIE5va2lhQnJvd3NlciwgT3BlcmEsIE9wZXJhIE1pbmksXG4gICAgICAgICAgICAgKiBPcGVyYSBNb2JpLCBVQyBCcm93c2VyLCBNUVFCcm93c2VyLCBNaWNyb01lc3NlbmdlciwgYmFpZHVib3hhcHAsIGJhaWR1YnJvd3NlcixcbiAgICAgICAgICAgICAqIFNhbXN1bmdCcm93c2VyLCBJcm9uLCBTYWZhcmksIFNreWZpcmUsIFRpemVuLCBXZWJraXQsIFBhbGVNb29uLCBHZWNrbywgVHJpZGVudCxcbiAgICAgICAgICAgICAqIFByZXN0bywgR29hbm5hLCBpT1MsIEFuZHJvaWQsIEJsYWNrQmVycnksIEJSRVcsIEphdmEsIFdpbmRvd3MgUGhvbmUgT1MsIFdpbmRvd3NcbiAgICAgICAgICAgICAqIFBob25lLCBXaW5kb3dzIENFLCBXaW5kb3dzIE5ULCBTeW1iaWFuLCB3ZWJPUzwvdHQ+PGJyPlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSB2ZXJzaW9uIGFzIGZsb2F0IG9yIDx0dD5OYU48L3R0PiBpZiBVc2VyLUFnZW50IGRvZXNuJ3QgY29udGFpbiB0aGlzIHZlcnNpb24uXG4gICAgICAgICAgICAgKiAgICAgICAgICBCZSBjYXJlZnVsIHdoZW4gY29tcGFyaW5nIHRoaXMgdmFsdWUgd2l0aCAnPT0nIG9wZXJhdG9yIVxuICAgICAgICAgICAgICogQGZ1bmN0aW9uIE1vYmlsZURldGVjdCN2ZXJzaW9uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZlcnNpb246IGZ1bmN0aW9uIHZlcnNpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltcGwuZ2V0VmVyc2lvbihrZXksIHRoaXMudWEpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXQgdGhlIHZlcnNpb24gKGFzIFN0cmluZykgb2YgdGhlIGdpdmVuIHByb3BlcnR5IGluIHRoZSBVc2VyLUFnZW50LlxuICAgICAgICAgICAgICogPGJyPlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgYSBrZXkgZGVmaW5pbmcgYSB0aGluZyB3aGljaCBoYXMgYSB2ZXJzaW9uLjxicj5cbiAgICAgICAgICAgICAqICAgICAgICBZb3UgY2FuIHVzZSBvbmUgb2YgZm9sbG93aW5nIGtleXM6PGJyPlxuICAgICAgICAgICAgICogPGJyPjx0dD5Nb2JpbGUsIEJ1aWxkLCBWZXJzaW9uLCBWZW5kb3JJRCwgaVBhZCwgaVBob25lLCBpUG9kLCBLaW5kbGUsIENocm9tZSwgQ29hc3QsXG4gICAgICAgICAgICAgKiBEb2xmaW4sIEZpcmVmb3gsIEZlbm5lYywgRWRnZSwgSUUsIE5ldEZyb250LCBOb2tpYUJyb3dzZXIsIE9wZXJhLCBPcGVyYSBNaW5pLFxuICAgICAgICAgICAgICogT3BlcmEgTW9iaSwgVUMgQnJvd3NlciwgTVFRQnJvd3NlciwgTWljcm9NZXNzZW5nZXIsIGJhaWR1Ym94YXBwLCBiYWlkdWJyb3dzZXIsXG4gICAgICAgICAgICAgKiBTYW1zdW5nQnJvd3NlciwgSXJvbiwgU2FmYXJpLCBTa3lmaXJlLCBUaXplbiwgV2Via2l0LCBQYWxlTW9vbiwgR2Vja28sIFRyaWRlbnQsXG4gICAgICAgICAgICAgKiBQcmVzdG8sIEdvYW5uYSwgaU9TLCBBbmRyb2lkLCBCbGFja0JlcnJ5LCBCUkVXLCBKYXZhLCBXaW5kb3dzIFBob25lIE9TLCBXaW5kb3dzXG4gICAgICAgICAgICAgKiBQaG9uZSwgV2luZG93cyBDRSwgV2luZG93cyBOVCwgU3ltYmlhbiwgd2ViT1M8L3R0Pjxicj5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgXCJyYXdcIiB2ZXJzaW9uIGFzIFN0cmluZyBvciA8dHQ+bnVsbDwvdHQ+IGlmIFVzZXItQWdlbnQgZG9lc24ndCBjb250YWluIHRoaXMgdmVyc2lvbi5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I3ZlcnNpb25TdHJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmVyc2lvblN0cjogZnVuY3Rpb24gdmVyc2lvblN0cihrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1wbC5nZXRWZXJzaW9uU3RyKGtleSwgdGhpcy51YSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdsb2JhbCB0ZXN0IGtleSBhZ2FpbnN0IHVzZXJBZ2VudCwgb3MsIHBob25lLCB0YWJsZXQgYW5kIHNvbWUgb3RoZXIgcHJvcGVydGllcyBvZiB1c2VyQWdlbnQgc3RyaW5nLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIGtleSAoY2FzZS1pbnNlbnNpdGl2ZSkgb2YgYSB1c2VyQWdlbnQsIGFuIG9wZXJhdGluZyBzeXN0ZW0sIHBob25lIG9yXG4gICAgICAgICAgICAgKiAgICAgICAgdGFibGV0IGZhbWlseS48YnI+XG4gICAgICAgICAgICAgKiAgICAgICAgRm9yIGEgY29tcGxldGUgbGlzdCBvZiBwb3NzaWJsZSB2YWx1ZXMsIHNlZSB7QGxpbmsgTW9iaWxlRGV0ZWN0I3VzZXJBZ2VudH0sXG4gICAgICAgICAgICAgKiAgICAgICAge0BsaW5rIE1vYmlsZURldGVjdCNvc30sIHtAbGluayBNb2JpbGVEZXRlY3QjcGhvbmV9LCB7QGxpbmsgTW9iaWxlRGV0ZWN0I3RhYmxldH0uPGJyPlxuICAgICAgICAgICAgICogICAgICAgIEFkZGl0aW9uYWxseSB5b3UgaGF2ZSBmb2xsb3dpbmcga2V5czo8YnI+XG4gICAgICAgICAgICAgKiA8YnI+PHR0PkJvdCwgTW9iaWxlQm90LCBEZXNrdG9wTW9kZSwgVFYsIFdlYktpdCwgQ29uc29sZSwgV2F0Y2g8L3R0Pjxicj5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gPHR0PnRydWU8L3R0PiB3aGVuIHRoZSBnaXZlbiBrZXkgaXMgb25lIG9mIHRoZSBkZWZpbmVkIGtleXMgb2YgdXNlckFnZW50LCBvcywgcGhvbmUsXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgdGFibGV0IG9yIG9uZSBvZiB0aGUgbGlzdGVkIGFkZGl0aW9uYWwga2V5cywgb3RoZXJ3aXNlIDx0dD5mYWxzZTwvdHQ+XG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I2lzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlzOiBmdW5jdGlvbiBpcyhrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbnNJQyh0aGlzLnVzZXJBZ2VudHMoKSwga2V5KSB8fCBlcXVhbElDKGtleSwgdGhpcy5vcygpKSB8fCBlcXVhbElDKGtleSwgdGhpcy5waG9uZSgpKSB8fCBlcXVhbElDKGtleSwgdGhpcy50YWJsZXQoKSkgfHwgY29udGFpbnNJQyhpbXBsLmZpbmRNYXRjaGVzKGltcGwubW9iaWxlRGV0ZWN0UnVsZXMudXRpbHMsIHRoaXMudWEpLCBrZXkpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEbyBhIHF1aWNrIHRlc3QgYWdhaW5zdCBuYXZpZ2F0b3I6OnVzZXJBZ2VudC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IHBhdHRlcm4gdGhlIHBhdHRlcm4sIGVpdGhlciBhcyBTdHJpbmcgb3IgUmVnRXhwXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIChhIHN0cmluZyB3aWxsIGJlIGNvbnZlcnRlZCB0byBhIGNhc2UtaW5zZW5zaXRpdmUgUmVnRXhwKS5cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSA8dHQ+dHJ1ZTwvdHQ+IHdoZW4gdGhlIHBhdHRlcm4gbWF0Y2hlcywgb3RoZXJ3aXNlIDx0dD5mYWxzZTwvdHQ+XG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I21hdGNoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbiBtYXRjaChwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEocGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2knKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIG1vYmlsZSBkZXZpY2UgY2FuIGJlIGNvbnNpZGVyZWQgYXMgcGhvbmUgcmVnYXJkaW5nIDxjb2RlPnNjcmVlbi53aWR0aDwvY29kZT4uXG4gICAgICAgICAgICAgKiA8YnI+XG4gICAgICAgICAgICAgKiBPYnZpb3VzbHkgdGhpcyBtZXRob2QgbWFrZXMgc2Vuc2UgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMgb25seSAobm90IGZvciBOb2RlLmpzKSFcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4UGhvbmVXaWR0aF0gdGhlIG1heGltdW0gbG9naWNhbCBwaXhlbHMgKGFrYS4gQ1NTLXBpeGVscykgdG8gYmUgY29uc2lkZXJlZCBhcyBwaG9uZS48YnI+XG4gICAgICAgICAgICAgKiAgICAgICAgVGhlIGFyZ3VtZW50IGlzIG9wdGlvbmFsIGFuZCBpZiBub3QgcHJlc2VudCBvciBmYWxzeSwgdGhlIHZhbHVlIG9mIHRoZSBjb25zdHJ1Y3RvciBpcyB0YWtlbi5cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufHVuZGVmaW5lZH0gPGNvZGU+dW5kZWZpbmVkPC9jb2RlPiBpZiBzY3JlZW4gc2l6ZSB3YXNuJ3QgZGV0ZWN0YWJsZSwgZWxzZSA8Y29kZT50cnVlPC9jb2RlPlxuICAgICAgICAgICAgICogICAgICAgICAgd2hlbiBzY3JlZW4ud2lkdGggaXMgbGVzcyBvciBlcXVhbCB0byBtYXhQaG9uZVdpZHRoLCBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+Ljxicj5cbiAgICAgICAgICAgICAqICAgICAgICAgIFdpbGwgYWx3YXlzIHJldHVybiA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IHNlcnZlci1zaWRlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpc1Bob25lU2l6ZWQ6IGZ1bmN0aW9uIGlzUGhvbmVTaXplZChtYXhQaG9uZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1vYmlsZURldGVjdC5pc1Bob25lU2l6ZWQobWF4UGhvbmVXaWR0aCB8fCB0aGlzLm1heFBob25lV2lkdGgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXR1cm5zIHRoZSBtb2JpbGUgZ3JhZGUgKCdBJywgJ0InLCAnQycpLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IG9uZSBvZiB0aGUgbW9iaWxlIGdyYWRlcyAoJ0EnLCAnQicsICdDJykuXG4gICAgICAgICAgICAgKiBAZnVuY3Rpb24gTW9iaWxlRGV0ZWN0I21vYmlsZUdyYWRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG1vYmlsZUdyYWRlOiBmdW5jdGlvbiBtb2JpbGVHcmFkZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGUuZ3JhZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZS5ncmFkZSA9IGltcGwubW9iaWxlR3JhZGUodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS5ncmFkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBlbnZpcm9ubWVudC1kZXBlbmRlbnRcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5zY3JlZW4pIHtcbiAgICAgICAgICAgIE1vYmlsZURldGVjdC5pc1Bob25lU2l6ZWQgPSBmdW5jdGlvbiAobWF4UGhvbmVXaWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXhQaG9uZVdpZHRoIDwgMCA/IHVuZGVmaW5lZCA6IGltcGwuZ2V0RGV2aWNlU21hbGxlclNpZGUoKSA8PSBtYXhQaG9uZVdpZHRoO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE1vYmlsZURldGVjdC5pc1Bob25lU2l6ZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNob3VsZCBub3QgYmUgcmVwbGFjZWQgYnkgYSBjb21wbGV0ZWx5IG5ldyBvYmplY3QgLSBqdXN0IG92ZXJ3cml0ZSBleGlzdGluZyBtZXRob2RzXG4gICAgICAgIE1vYmlsZURldGVjdC5faW1wbCA9IGltcGw7XG5cbiAgICAgICAgTW9iaWxlRGV0ZWN0LnZlcnNpb24gPSAnMS4zLjUgMjAxNi0xMS0xNCc7XG5cbiAgICAgICAgcmV0dXJuIE1vYmlsZURldGVjdDtcbiAgICB9KTsgLy8gZW5kIG9mIGNhbGwgb2YgZGVmaW5lKClcbn0pKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICByZXR1cm4gZGVmaW5lO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgICAgICAgICB3aW5kb3cuTW9iaWxlRGV0ZWN0ID0gZmFjdG9yeSgpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBsZWFzZSBmaWxlIGEgYnVnIGlmIHlvdSBnZXQgdGhpcyBlcnJvciFcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGVudmlyb25tZW50Jyk7XG4gICAgfVxufSgpKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbW9iaWxlLWRldGVjdC9tb2JpbGUtZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogUmVjb2dlIGxhIGluZm9ybWFjacOzbiByZWxhdGl2YSBhbCBwcm9jZXNvIHkgZnVubmVsLlxuICpcbiAqIExvcyBkYXRvcyBkZSBlc3RlIGFwYXJ0YWRvIHNlIHJlbGxlbmFyw61hbiBlbiBjYXNvIGRlIGZpY2hhcyBkZVxuICogcHJvZHVjdG8gKGRhdG9zIGRlbCBwcm9kdWN0cyksIGFzw60gY29tbyBlbiB0b2RvcyBsb3MgcGFzb3MgcXVlXG4gKiBmb3JtZW4gcGFydGUgZGUgdW4gcHJvY2VzbyByZWxhY2lvbmFkbyBjb24gZWwgcHJvZHVjdG8uXG4gKlxuICogQHBhY2thZ2UgICBiZ2RtanMuYW5hbHl0aWNzXG4gKiBAbmFtZXNwYWNlIGJnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyXG4gKiBAY2xhc3MgICAgIGJnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyLkFwcGxpY2F0aW9uXG4gKi9cbnZhciBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJBcHBsaWNhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyQXBwbGljYXRpb24oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckFwcGxpY2F0aW9uKTtcblxuICAgIHRoaXMuYW1vdW50ID0gMC4wO1xuICAgIHRoaXMuY3VycmVuY3kgPSAnJztcbiAgICB0aGlzLmVycm9yVHlwZSA9ICcnO1xuICAgIHRoaXMuZnVsZmlsbG1lbnRNb2RlbCA9ICcnO1xuICAgIHRoaXMuaW50ZXJhY3Rpb25MZXZlbCA9ICcnO1xuICAgIHRoaXMuaW50ZXJlc3RSYXRlID0gJyc7XG4gICAgdGhpcy5uYW1lID0gJyc7XG4gICAgdGhpcy5udW1iZXJPZlBheW1lbnRzID0gMDtcbiAgICB0aGlzLm9mZmVyID0gJyc7XG4gICAgdGhpcy5vcGVyYXRpb25OdW1iZXIgPSAnJztcbiAgICB0aGlzLnBheW1lbnRBbW91bnQgPSAwO1xuICAgIHRoaXMucGF5bWVudERhdGUgPSAnJztcbiAgICB0aGlzLnBheW1lbnRUeXBlID0gJyc7XG4gICAgdGhpcy5wcm9jZXNzID0gJyc7XG4gICAgdGhpcy5wcm9ncmFtVHlwZUhpcmVkID0gJyc7XG4gICAgdGhpcy5zZXJ2aWNlQ2hhcmdlID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9ICcnO1xuICAgIHRoaXMuc3RlcCA9ICcnO1xuICAgIHRoaXMudGVybSA9IDA7XG4gICAgdGhpcy50cmFuc2FjdGlvbklEID0gJyc7XG4gICAgdGhpcy50eXBlID0gJyc7XG4gICAgdGhpcy50eXBvbG9neSA9ICcnO1xuICB9XG4gIC8qKlxuICAgKiBNb250byBhbCBxdWUgYXNjaWVuZGUgZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvLlxuICAgKiBObyBzZSBkZWJlbiBwb25lciBjb21hcyBlbiBsb3MgbsO6bWVyb3MsIHPDs2xvIGAuYFxuICAgKiBwYXJhIGluZGljYXIgbG9zIGRlY2ltYWxlcy5cbiAgICpcbiAgICogQHByb3BlcnR5IGFtb3VudFxuICAgKiBAdHlwZSAgICAge251bWJlcn1cbiAgICovXG5cbiAgLyoqXG4gICAqIFRpcG8gZGUgbW9uZWRhIHV0aWxpemFkYSBlbiBlbCBwcm9jZXNvLlxuICAgKiBDw7NkaWdvIElTTyBkZSAzIGxldHJhcy5cbiAgICpcbiAgICogQHByb3BlcnR5IGN1cnJlbmN5XG4gICAqIEB0eXBlICAgICB7c3RyaW5nfVxuICAgKi9cblxuICAvKipcbiAgICogRXJyb3Igb2N1cnJpZG8gYWwgY29tcGxldGFyIHVuIGZvcm11bGFyaW8uXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBlcnJvclR5cGVcbiAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAqL1xuXG4gIC8qKlxuICAgKiBSZWNvZ2UgY8OzbW8gc2UgY29tcGxldGEgZWwgcHJvY2Vzby5cbiAgICogVmFsb3JlcyBwb3NpYmxlczpcbiAgICogLSBvZmZsaW5lICAgICAgICA6IFNpIGVsIHByb2Nlc28gc2UgY29tcGxldGEgMG5saW5lLlxuICAgKiAtIG9ubGluZSAgICAgICAgIDogU2kgZWwgcHJvY2VzbywgYSBwZXNhciBkZSBpbmljaWFyc2Ugb25saW5lLCBzZSB0ZXJtaW5hIG9mZmxpbmUgKHBvclxuICAgKiAgICAgICAgICAgICAgICAgICAgZWplbXBsbywgdW4gcHJvY2VzbyBkZSBjb250cmF0YWNpw7NuIHF1ZSwgZW4gbGEgw7psdGltYSBwYW50YWxsYSwgZW52w61lXG4gICAqICAgICAgICAgICAgICAgICAgICBhbCBjbGllbnRlIGEgbGFzIG9maWNpbmFzIHBhcmEgcXVlIMOpc3RhIHNlYSBlZmVjdGl2YSkuXG4gICAqIC0gb25saW5lL29mZmxpbmUgOiBQYXJhIHByb2Nlc29zIHF1ZSBkZXBlbmRpZW5kbyBkZSBsYXMgY2FzdcOtc3RpY2FzIHB1ZWRlbiBhY2FiYXIgb25saW5lIHUgb2ZmbGluZVxuICAgKiAgICAgICAgICAgICAgICAgICAgKGVqLiBEZXBlbmRpZW5kbyBkZSBsb3MgZGF0b3MgZGUgdXN1YXJpbyBmaW5hbGl6YSBlbCBwcm9jZXNvIG9ubGluZSB1IG9mZmxpbmUpLlxuICAgKlxuICAgKiBAcHJvcGVydHkgZnVsZmlsbG1lbnRNb2RlbFxuICAgKiBAdHlwZSAgICAge3N0cmluZ31cbiAgICovXG5cbiAgLyoqXG4gICAqIEludGVyYWNjacOzbiBkZWwgdXN1YXJpbyBkZW50cm8gZGVsIGxldmVsIHF1ZSBpbXBsaXF1ZVxuICAgKiB1bmEgaWRlbnRpZmljYWNpw7NuIGRlbnRybyBkZWwgcHJvY2VzbyBgYXBwbGljYXRpb25gLlxuICAgKlxuICAgKiBAcHJvcGVydHkgY3VycmVuY3lcbiAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAqL1xuXG4gIC8qKlxuICAgKiBUYXNhIGRlIGludGVyw6lzLlxuICAgKlxuICAgKiBAcHJvcGVydHkgaW50ZXJlc3RSYXRlXG4gICAqIEB0eXBlICAgICB7bnVtYmVyfVxuICAgKi9cblxuICAvKipcbiAgICogTm9tYnJlIGRldGFsbGFkbyBkZWwgZnVubmVsLlxuICAgKlxuICAgKiBAcHJvcGVydHkgbmFtZVxuICAgKiBAdHlwZSAgICAge3N0cmluZ31cbiAgICovXG5cbiAgLyoqXG4gICAqIENhbnRpZGFkIGRlIGN1b3RhcyBkZWwgcHJvZHVjdG8gc2VsZWNjaW9uYWRvLlxuICAgKlxuICAgKiBAcHJvcGVydHkgbnVtYmVyT2ZQYXltZW50c1xuICAgKiBAdHlwZSAgICAge251bWJlcn1cbiAgICovXG5cbiAgLyoqXG4gICAqIE5vbWJyZSBkZSBsYSBvZmVydGEgcHJvcHVlc3RhIGFsIHVzdWFyaW8uXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBvZmZlclxuICAgKiBAdHlwZSAgICAge3N0cmluZ31cbiAgICovXG5cbiAgLyoqXG4gICAqIE7Dum1lcm8gc2VyaWFsaXphZG8gZGUgbGEgb3BlcmFjacOzbi5cbiAgICpcbiAgICogQHByb3BlcnR5IG9wZXJhdGlvbk51bWJlclxuICAgKiBAdHlwZSAgICAge3N0cmluZ31cbiAgICovXG5cbiAgLyoqXG4gICAqIE1vbnRvIGRlIGxhcyBjdW90YXMgZGVsIHByb2R1Y3RvIHNlbGVjY2lvbmFkby5cbiAgICpcbiAgICogQHByb3BlcnR5IHBheW1lbnRBbW91bnRcbiAgICogQHR5cGUgICAgIHtudW1iZXJ9XG4gICAqL1xuXG4gIC8qKlxuICAgKiBEw61hIGVuIGVsIHF1ZSBzZSBoYXLDoSBlbCBwYWdvIGRlbCBwcm9jZXNvIGFjdHVhbC5cbiAgICogRm9ybWF0byBJU08gODYwMS5cbiAgICpcbiAgICogQHByb3BlcnR5IHBheW1lbnREYXRlXG4gICAqIEB0eXBlICAgICB7c3RyaW5nfVxuICAgKi9cblxuICAvKipcbiAgICogVGlwbyBkZSBwYWdvIHVzYWRvIGVuIGVsIHByb2Nlc28uXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBwYXltZW50VHlwZVxuICAgKiBAdHlwZSAgICAge3N0cmluZ31cbiAgICovXG5cbiAgLyoqXG4gICAqIFN1YmNhdGVnb3LDrWEgZGVsIHByb2R1Y3RvIHNvYnJlIGVsIHF1ZSBzZSBlamVjdXRhIGVsIGBhcHBsaWNhdGlvbmAuXG4gICAqIExhIHZhcmlhYmxlIGBwcm9jZXNzYCBzZXLDoSBpbmZvcm1hZGEgc8OzbG8gc2kgc3UgdmFsb3IgZXMgZGlmZXJlbnRlXG4gICAqIGFsIGRlIGxhIHZhcmlhYmxlIGB0eXBvbG9neWAsIGVzIGRlY2lyLCBwcmltZXJvIGRlYmVyw6EgaW5mb3JtYXJzZVxuICAgKiBgdGlwb2xvZ3lgIHkgc8OzbG8gc2kgZXMgbmVjZXNhcmlvLCBsYSB2YXJpYWJsZSBgcHJvY2Vzc2AuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBwcm9jZXNzXG4gICAqIEB0eXBlICAgICB7c3RyaW5nfVxuICAgKi9cblxuICAvKipcbiAgICogVGlwbyBkZWwgcHJvZ3JhbWEgY29udHJhdGFkby5cbiAgICpcbiAgICogQHByb3BlcnR5IHByb2dyYW1UeXBlSGlyZWRcbiAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAqL1xuXG4gIC8qKlxuICAgKiBWYWxvciBkZSBsYSBjb21pc2nDs24gcXVlIHNlIGxlIGFwbGljYSBhbCBjbGllbnRlIHBvciBlbCBzZXJ2aWNpby5cbiAgICpcbiAgICogQHByb3BlcnR5IHNlcnZpY2VDaGFyZ2VcbiAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAqL1xuXG4gIC8qKlxuICAgKiBFc3RhZG8gZW4gZWwgcXVlIHNlIGVuY3VlbnRyYSBlbCBwcm9jZXNvLlxuICAgKiBQb3NpYmxlcyB2YWxvcmVzOlxuICAgKiAtIGluaWNpb1xuICAgKiAtIGZpbmFsaXphZG9cbiAgICogLSBjb250cmF0YWRvXG4gICAqIC0gYXByb2JhZG9cbiAgICogLSByZWNoYXphZG9cbiAgICogLSBlbiByZXZpc2lvblxuICAgKlxuICAgKiAtIGluaWNpbyAgICAgIDogRXN0ZSB2YWxvciBzZSBpbmZvcm1hcsOhIGVuIGxhIHByaW1lcmEgcGFudGFsbGEgZGUgdW4gcHJvY2VzbyBvIGZ1bm5lbCxcbiAgICogICAgICAgICAgICAgICAgIHB1ZXMgc2UgY29uc2lkZXJhIHF1ZSBlbiBlc2UgY2FzbywgZWwgZXN0YWRvIGRlbCBwcm9jZXNvIGVzIGBpbmljaW9gLlxuICAgKiAtIGZpbmFsaXphZG8gIDogRXN0ZSBlc3RhZG8gYXBsaWNhIGEgbGEgcGFudGFsbGEgZmluYWwgZGUgdW4gZnVubmVsIChUaGFuayB5b3UgcGFnZSlcbiAgICogICAgICAgICAgICAgICAgIGVuIGFxdWVsbG9zIGNhc29zIGVuIGxvcyBxdWUgZWwgZnVubmVsIG5vIGZpbmFsaXphIGNvbiB1bmEgY29udHJhdGFjacOzblxuICAgKiAgICAgICAgICAgICAgICAgb25saW5lIHkgbm8gc2UgcmVxdWllcmEgYXByb2JhY2nDs24sIG8gZWwgcHJvY2VzbyBoYXlhIGZpbmFsaXphZG8gcGVyb1xuICAgKiAgICAgICAgICAgICAgICAgbGEgYXByb2JhY2nDs24gbm8gc3VjZWRlIGVuIGVzYSBuYXZlZ2FjacOzbiBkZWwgcHJvY2Vzby5cbiAgICogLSBjb250cmF0YWRvICA6IEVzdGUgZXN0YWRvIGFwbGljYSBhIGxhIHBhbnRhbGxhIGZpbmFsIGRlIHVuIGZ1bm5lbCAoVGhhbmsgeW91IHBhZ2UpIGVuXG4gICAqICAgICAgICAgICAgICAgICBhcXVlbGxvcyBjYXNvcyBlbiBsb3MgcXVlIGVsIGZ1bm5lbCBmaW5hbGl6YSBjb24gdW5hIGNvbnRyYXRhY2nDs24gb25saW5lLlxuICAgKiAtIGFwcm9iYWRvICAgIDogRXN0ZSBlc3RhZG8gYXBsaWNhIGEgbGEgcGFudGFsbGEgZGVsIHByb2Nlc28gZW4gbGEgcXVlIGVsIGZ1bm5lbCBzZWEgYXByb2JhZG8uXG4gICAqIC0gcmVjaGF6YWRvICAgOiBFc3RlIGVzdGFkbyBhcGxpY2EgYSBsYSBwYW50YWxsYSBkZWwgcHJvY2VzbyBlbiBsYSBxdWUgZWwgZXN0YWRvIGRlIGxhXG4gICAqICAgICAgICAgICAgICAgICBwZXRpY2nDs24gc2VhIOKAnHJlY2hhemFkb+KAnS5cbiAgICogLSBlbiByZXZpc2lvbiA6IEVzdGUgZXN0YWRvIGFwbGljYSBhIGxhIHBhbnRhbGxhIGRlbCBwcm9jZXNvIGVuIGxhIHF1ZSBlbCBlc3RhZG8gZGUgbGFcbiAgICogICAgICAgICAgICAgICAgIHBldGljacOzbiBzZWEg4oCcZW4gcmV2aXNpw7Nu4oCdLlxuICAgKlxuICAgKiBAcHJvcGVydHkgc3RhdGVcbiAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAqL1xuXG4gIC8qKlxuICAgKiBQYXNvIGRlbCBwcm9jZXNvIGVuIGVsIHF1ZSBzZSBlbmN1ZW50cmEgZWwgdXN1YXJpbyBxdWVcbiAgICogY29pbmNpZGlyw6EgY29uIGVsIMO6bHRpbW8gbGV2ZWwgZGUgbGEgdmFyaWFibGUgcGFnZSBjb24gdmFsb3IuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBzdGVwXG4gICAqIEB0eXBlICAgICB7c3RyaW5nfVxuICAgKi9cblxuICAvKipcbiAgICogUGxhem8gcGFyYSBlbCBwYWdvIGRlbCBwcm9kdWN0byBlc3BlY2lmaWNhZG8gZW4gZMOtYXMuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB0ZXJtXG4gICAqIEB0eXBlICAgICB7bnVtYmVyfVxuICAgKi9cblxuICAvKipcbiAgICogSWRlbnRpZmljYWRvciDDum5pY28gZGUgdW4gcHJvY2VzbyBkZSBjb250cmF0YWNpw7NuXG4gICAqIHF1ZSBzZSBpbmljaWEgb25saW5lIHkgZmluYWxpemEgb2ZmbGluZSBwYXJhIGNhZGFcbiAgICogdXN1YXJpbyBxdWUgbG8gaW5pY2lhLlxuICAgKlxuICAgKiBAcHJvcGVydHkgdHJhbnNhY3Rpb25JRFxuICAgKiBAdHlwZSAgICAge3N0cmluZ31cbiAgICovXG5cbiAgLyoqXG4gICAqIEFsbWFjZW5hIGxhIGNhdGVnb3LDrWEgbyBmaW5hbGlkYWQgZGVsIHByb2Nlc28uXG4gICAqIFZhbG9yZXMgcG9zaWJsZXM6XG4gICAqIC0gYGFsdGEgY2xpZW50ZXNgXG4gICAqIC0gYGF1dG9nZXN0aW9uYFxuICAgKiAtIGBjb25zdWx0YWBcbiAgICogLSBgY29udHJhdGFjaW9uYFxuICAgKiAtIGBmb3JtdWxhcmlvYFxuICAgKiAtIGBvcGVyYXRpdmFgXG4gICAqIC0gYHNpbXVsYWRvcmBcbiAgICpcbiAgICogQHByb3BlcnR5IHR5cGVcbiAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaXBvbG9nw61hIGRlbCBwcm9kdWN0byBvIGRlbCBwcm9jZXNvIHF1ZSBzZSBzZWxlY2Npb25hXG4gICAqIHVuYSB2ZXogaW5pY2lhZG8gZWwgZnVubmVsLlxuICAgKlxuICAgKiBAcHJvcGVydHkgdHlwb2xvZ3lcbiAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckFwcGxpY2F0aW9uLCBbe1xuICAgIGtleTogJ2FwcGxpY2F0aW9uJyxcblxuXG4gICAgLyoqXG4gICAgICogRGV2dWVsdmUgZWwgbm9tYnJlIHkgdGlwbyBkZWwgZnVubmVsLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckFwcGxpY2F0aW9uO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJBcHBsaWNhdGlvbjtcbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9kYXRhLWxheWVyL2FwcGxpY2F0aW9uLmVzN1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmltcG9ydCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJJbnRlcm5hbENhbXBhaWduQXR0cmlidXRlIGZyb20gJy4vaW50ZXJuYWwtY2FtcGFpZ24vYXR0cmlidXRlJztcbmltcG9ydCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJJbnRlcm5hbENhbXBhaWduRXZlbnRJbmZvIGZyb20gJy4vaW50ZXJuYWwtY2FtcGFpZ24vZXZlbnQtaW5mbyc7XG4vKipcbiAqIFJlY29nZSBsYSBpbmZvcm1hY2nDs24gcmVsYXRpdmEgYSBsYXMgY2FtcGHDsWFzIHF1ZSBzZSBleHBvbmVuIGFsIHVzdWFyaW8sXG4gKiBhc8OtIGNvbW8gbGFzIGludGVyYWNjaW9uZXMgcXVlIGVsIHVzdWFyaW8gaGFjZSBjb24gbGFzIG1pc21hcy5cbiAqXG4gKiBFc3RlIGFwYXJ0YWRvIHPDs2xvIHNlIGluZm9ybWFyw6EgY3VhbmRvIGhheWEgaW5mb3JtYWNpw7NuIGRlIGNhbXBhw7FhcyBleHB1ZXN0YXMgYWxcbiAqIHVzdWFyaW8gKG8gw6lzdGUgaW50ZXJhY3TDumUgY29uIGVsbGFzKSwgZW4gY2FzbyBjb250cmFyaW8sIGxvcyBjYW1wb3MgaXLDoW4gc2luIGluZm9ybWFyLlxuICpcbiAqIEBwYWNrYWdlICAgYmdkbWpzLmFuYWx5dGljc1xuICogQG5hbWVzcGFjZSBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllclxuICogQGNsYXNzICAgICBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5JbnRlcm5hbENhbXBhaWduXG4gKi9cblxudmFyIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckludGVybmFsQ2FtcGFpZ24gPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVySW50ZXJuYWxDYW1wYWlnbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckludGVybmFsQ2FtcGFpZ24pO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICB0aGlzLmV2ZW50ID0ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0cmlidXRvcyBkZSBsYSBjYW1wYcOxYS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBhdHRyaWJ1dGVzXG4gICAgICogQHR5cGUgICAgIHtiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5pbnRlcm5hbENhbXBhaWduLkF0dHJpYnV0ZVtdfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRXZlbnRvIHJlY2liaWRvIHNvYnJlIGxhIGNhbXBhw7FhLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGV2ZW50XG4gICAgICogQHR5cGUgICAgIHtiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5pbnRlcm5hbENhbXBhaWduLkV2ZW50SW5mb31cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckludGVybmFsQ2FtcGFpZ24sIFt7XG4gICAgICAgIGtleTogJ2FkZENhbXBhaWduJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZ3JlZ2EgdW5hIGNhbXBhw7FhIGFsIGxpc3RhZG8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgYWRkQ2FtcGFpZ25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBPYmpldG8gYSB1c2FyIHBhcmEgY29uZmlndXJhciBsYSBjYW1wYcOxYS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDYW1wYWlnbihjb25maWcpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnIGluc3RhbmNlb2YgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVySW50ZXJuYWxDYW1wYWlnbkF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChjb25maWcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBjb25maWcgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNvbmZpZykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2F0dHJpYnV0ZSA9IG5ldyBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJJbnRlcm5hbENhbXBhaWduQXR0cmlidXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIF9leHRlbmRzKF9hdHRyaWJ1dGUsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlcy5wdXNoKF9hdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBc2lnbmEgYSBsYSBjYW1wYcOxYSBsYSBpbmZvcm1hY2nDs24gZGVsIGV2ZW50byByZWNpYmlkby5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBzZXRFdmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIEFjY2nDs24gZGUgbGEgY2FtcGHDsWEgZGVsIGV2ZW50by5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICBOb21icmUgZGVsIGV2ZW50by5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEV2ZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEV2ZW50KGFjdGlvbikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdJbnRDbXBDbGljayc7XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24gJiYgbmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBfZXZlbnQgPSBuZXcgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVySW50ZXJuYWxDYW1wYWlnbkV2ZW50SW5mbygpO1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgX2V2ZW50LnNpdGVBY3Rpb25OYW1lID0gYWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBfZXZlbnQuZXZlbnROYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRJbmZvOiBfZXZlbnRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckludGVybmFsQ2FtcGFpZ247XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckludGVybmFsQ2FtcGFpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZGF0YS1sYXllci9pbnRlcm5hbC1jYW1wYWlnbi5lczdcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBBdHJpYnV0b3MgZGUgY2FkYSBjYW1wYcOxYS5cbiAqXG4gKiBAcGFja2FnZSAgIGJnZG1qcy5hbmFseXRpY3NcbiAqIEBuYW1lc3BhY2UgYmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIuaW50ZXJuYWxDYW1wYWlnblxuICogQGNsYXNzICAgICBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5pbnRlcm5hbENhbXBhaWduLkF0dHJpYnV0ZVxuICovXG52YXIgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVySW50ZXJuYWxDYW1wYWlnbkF0dHJpYnV0ZSA9IGZ1bmN0aW9uIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllckludGVybmFsQ2FtcGFpZ25BdHRyaWJ1dGUoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJJbnRlcm5hbENhbXBhaWduQXR0cmlidXRlKTtcblxuICB0aGlzLmNhbXBhaWduRm9ybWF0ID0gJyc7XG4gIHRoaXMuY2FtcGFpZ25OYW1lID0gJyc7XG4gIHRoaXMuY29sbGVjdGl2ZUNvZGUgPSAnJztcbiAgdGhpcy5sb2NhdGlvbiA9ICcnO1xuICB0aGlzLnByb2R1Y3QgPSAnJztcbiAgdGhpcy5wcm9kdWN0Q29kZSA9ICcnO1xuICB0aGlzLnF1YW50aXR5ID0gJyc7XG59XG4vKipcbiAqIEZvcm1hdG8gZGUgbGEgY2FtcGHDsWEuXG4gKiBWYWxvcmVzIHBvc2libGVzOlxuICogLSBgY2FycnVzZWxgXG4gKiAtIGBiYW5uZXIgaG9tZWBcbiAqIC0gYGJvY2FkaWxsb2BcbiAqIC0gYGJhbm5lciBjcm1gXG4gKiAtIGB2ZW50YW5hIGJsb3F1ZWFudGVgXG4gKiAtIGB6b25hIG9uZSBjbGlja2BcbiAqXG4gKiBAcHJvcGVydHkgY2FtcGFpZ25Gb3JtYXRcbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogTm9tYnJlIGRlIGxhIGNhbXBhw7FhLlxuICpcbiAqIEBwcm9wZXJ0eSBjYW1wYWlnbk5hbWVcbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogQ8OzZGlnbyBkZSBDb2xlY3Rpdm8gc2luIGRlc2NyaXBjacOzbiwgZXMgZGVjaXIsXG4gKiBzw7NsbyBhbG1hY2VuYXLDrWEgZWwgY8OzZGlnbyBuw7ptZXJpY28gZGVsIGNvbGxlY3Rpdm8uXG4gKlxuICogQHByb3BlcnR5IGNvbGxlY3RpdmVDb2RlXG4gKiBAdHlwZSAgICAge3N0cmluZ31cbiAqL1xuXG4vKipcbiAqIFpvbmEgZGUgbGEgcMOhZ2luYSBlbiBsYSBxdWUgZXN0w6EgY2FyZ2FkYSBsYSBjYW1wYcOxYS5cbiAqIFZhbG9yZXMgcG9zaWJsZXM6XG4gKiAtIGBzdXBlcmlvciBpenF1aWVyZGFgXG4gKiAtIGBzdXBlcmlvciBkZXJlY2hhYFxuICogLSBgc3VwZXJpb3IgY2VudHJvYFxuICogLSBgY2VudHJvYFxuICogLSBgY2VudHJvIGl6cXVpZXJkYWBcbiAqIC0gYGNlbnRybyBkZXJlY2hhYFxuICogLSBgaW5mZXJpb3IgaXpxdWllcmRhYFxuICogLSBgaW5mZXJpb3IgZGVyZWNoYWBcbiAqIC0gYGluZmVyaW9yIGNlbnRyb2BcbiAqXG4gKiBAcHJvcGVydHkgbG9jYXRpb25cbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogTm9tYnJlIGRlbCBwcm9kdWN0byBvZnJlY2lkbyBlbiBsYSBjYW1wYcOxYS7igKhcbiAqIFNpIGVsIG5vbWJyZSBkZSBsYSBjYW1wYcOxYSBpZGVudGlmaWNhIGRlIG1hbmVyYVxuICogdW7DrXZvY2EgdW4gcHJvZHVjdG8sIGVzdGUgdmFsb3Igc2Vyw6EgdmFjw61vLlxuICpcbiAqIEBwcm9wZXJ0eSBwcm9kdWN0XG4gKiBAdHlwZSAgICAge3N0cmluZ31cbiAqL1xuXG4vKipcbiAqIEPDs2RpZ28gZGVsIHByb2R1Y3RvIG9mcmVjaWRvIGVuIGxhIGNhbXBhw7FhLuKAqFxuICogU2kgZWwgbm9tYnJlIGRlIGxhIGNhbXBhw7FhIGlkZW50aWZpY2EgZGUgbWFuZXJhXG4gKiB1bsOtdm9jYSB1biBwcm9kdWN0bywgZXN0ZSB2YWxvciBzZXLDoSB2YWPDrW8uXG4gKlxuICogQHByb3BlcnR5IHByb2R1Y3RDb2RlXG4gKiBAdHlwZSAgICAge3N0cmluZ31cbiAqL1xuXG4vKipcbiAqIEVuIGNhc28gZGUgcXVlIGxhIGNhbXBhw7FhIG11ZXN0cmUgdW4gdmFsb3IsIGRpZmVyZW50ZSBwYXJhXG4gKiB2YXJpb3MgdXN1YXJpb3MsIHNlIGNvbXBsZXRhcsOhIGVzdGUgY2FtcG8gY29uIGVsIHZhbG9yIGRlbFxuICogaW1wb3J0ZSBjYW50aWRhZCBvIG1vbnRvIGluY2x1eWVuZG8gbGEgbW9uZWRhLCBlbiBjYXNvIGRlXG4gKiBzZXIgbmVjZXNhcmlvLlxuICpcbiAqIEVzdGEgcHJvcGllZGFkIGluZm9ybWFyw6EgbGEgY2FudGlkYWQgbcOhcyByZXByZXNlbnRhdGl2YSBkZVxuICogbGEgY2FtcGHDsWEganVudG8gY29uIGxhIG1vbmVkYS5cbiAqXG4gKiBQb3IgZWplbXBsbywgZW4gbGEgY2FtcGHDsWEgZGUgYW50aWNpcG8gZGUgbsOzbWluYSwgY2FkYSB1c3VhcmlvXG4gKiBwdWVkZSB0ZW5lciB1biBhbnRpY2lwbyBkaWZlcmVudGUsIHBvciBsbyBxdWUgc2UgaW5jbHVpcsOhIGVsXG4gKiB0aXBvIGRlIG1vbmVkYSBkZSBsYSBjYW1wYcOxYS7igKhcbiAqXG4gKiBFbiBjYW1wYcOxYXMgZGUgcHLDqXN0YW1vcyBwdWVkZW5cbiAqIHNlciBvZnJlY2lkb3MgaW1wb3J0ZXMgZGlmZXJlbnRlcyBhIGNhZGEgdXN1YXJpbywgZW4gZXN0ZSBjYXNvXG4gKiBlbCB2YWxvciBkZSBgcXVhbnRpdHlgIHNlcsOhIGVsIG1vbnRvIGRlbCBwcsOpc3RhbW8gb2ZyZWNpZG8uXG4gKlxuICogRW4gaGlwb3RlY2FzIHB1ZWRlbiBvZnJlY2Vyc2UgY29uZGljaW9uZXMgZGUgaW50ZXLDqXMgY29uY3JldG9zXG4gKiAoVEFFICsgMSUgcG9yIGVqZW1wbG8pIGVuIGVzdGUgY2FzbyBlbCBjYWxvciBzZXLDoSAoMSUpLlxuICpcbiAqIFZhbG9yZXMgZGUgZWplbXBsbzogKDY1NCDigqwsIDEwLjAwMCBNWE4sIDElLi4uKVxuICpcbiAqIEBwcm9wZXJ0eSBxdWFudGl0eVxuICogQHR5cGUgICAgIHtzdHJpbmd9XG4gKi9cbjtcblxuZXhwb3J0IGRlZmF1bHQgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVySW50ZXJuYWxDYW1wYWlnbkF0dHJpYnV0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9kYXRhLWxheWVyL2ludGVybmFsLWNhbXBhaWduL2F0dHJpYnV0ZS5lczdcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBJbmZvcm1hY2nDs24gZGVsIGV2ZW50byByZWNpYmlkbyBlbiB1bmEgY2FtcGHDsWEuXG4gKlxuICogQHBhY2thZ2UgICBiZ2RtanMuYW5hbHl0aWNzXG4gKiBAbmFtZXNwYWNlIGJnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyLmludGVybmFsQ2FtcGFpZ25cbiAqIEBjbGFzcyAgICAgYmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIuaW50ZXJuYWxDYW1wYWlnbi5FdmVudEluZm9cbiAqL1xudmFyIEludGVybmFsQ2FtcGFpZ25FdmVudEluZm8gPSBmdW5jdGlvbiBJbnRlcm5hbENhbXBhaWduRXZlbnRJbmZvKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW50ZXJuYWxDYW1wYWlnbkV2ZW50SW5mbyk7XG5cbiAgdGhpcy5ldmVudE5hbWUgPSAnSW50Q21wQ2xpY2snO1xuICB0aGlzLnNpdGVBY3Rpb25OYW1lID0gJyc7XG59XG4vKipcbiAqIEV2ZW50byBxdWUgcmVjb2dlIGxvcyBjbGlja3MgcXVlIGxvcyB1c3VhcmlvcyByZWFsaXphbiBlblxuICogbGFzIGNhbXBhw7FhcyBpbnRlcm5hcy5cbiAqXG4gKiBAcHJvcGVydHkgZXZlbnROYW1lXG4gKiBAdHlwZSAgICAge3N0cmluZ31cbiAqL1xuXG4vKipcbiAqIFJlY29nZSBsb3MgZGF0b3MgZGUgbGEgY2FtcGHDsWEgaW50ZXJuYSBzb2JyZSBsYVxuICogcXVlIGVsIHVzdWFyaW8gaGEgaGVjaG8gY2xpY2suXG4gKlxuICogU2UgcG9uZHLDoSBlbCB2YWxvciBwYXJhIHF1ZSBzZWEgaWd1YWwgYSBsb3MgZGF0b3MgZGUgbGEgY2FtcGHDsWFcbiAqIGludGVybmEgc29icmUgbGEgcXVlIGVsIHVzdWFyaW8gaGEgaGVjaG8gY2xpY2suXG4gKlxuICogRGljaG9zIGRhdG9zIHNlcsOhbiBjb25jYXRlbmFkb3MgeSBjb25zdGl0dWlyw6FuIGVsIElEIMO6bmljbyBkZSBsYVxuICogY2FtcGHDsWEgKGVqOiBjZW50cm86YmFubmVyIGhvbWU6MjU6Y29udHJhdGEgdHUgY3VlbnRhOmN1ZW50YSBibHVlOjEyMzoxMDAkKS5cbiAqXG4gKiBAcHJvcGVydHkgc2l0ZUFjdGlvbk5hbWVcbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG47XG5cbmV4cG9ydCBkZWZhdWx0IEludGVybmFsQ2FtcGFpZ25FdmVudEluZm87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZGF0YS1sYXllci9pbnRlcm5hbC1jYW1wYWlnbi9ldmVudC1pbmZvLmVzN1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5pbXBvcnQgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZUFjdGl2aXR5IGZyb20gJy4vcGFnZS9hY3Rpdml0eSc7XG5pbXBvcnQgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZUluZm8gZnJvbSAnLi9wYWdlL2luZm8nO1xuLyoqXG4gKiBBbG1hY2VuYSBsYSBpbmZvcm1hY2nDs24gcmVsYWNpb25hZGEgY29uIGxhIHDDoWdpbmEgeSBsYSBhY3RpdmlkYWRcbiAqIGRlbCB1c3VhcmlvIGVuIGRpY2hhIHDDoWdpbmEuXG4gKlxuICogQHBhY2thZ2UgICBiZ2RtanMuYW5hbHl0aWNzXG4gKiBAbmFtZXNwYWNlIGJnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyXG4gKiBAY2xhc3MgICAgIGJnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyLlBhZ2VcbiAqL1xuXG52YXIgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZSA9XG5cbi8qKlxuICogQ29uc3RydWN0b3IgZGUgbGEgY2xhc2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuLyoqXG4gKiBBY3RpdmlkYWQgZW4gbGEgcMOhZ2luYS5cbiAqXG4gKiBAdHlwZSB7YmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIucGFnZS5BY3Rpdml0eXxudWxsfVxuICovXG5mdW5jdGlvbiBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZSk7XG5cbiAgdGhpcy5wYWdlQWN0aXZpdHkgPSBudWxsO1xuICB0aGlzLnBhZ2VJbmZvID0gbnVsbDtcblxuICB0aGlzLnBhZ2VBY3Rpdml0eSA9IG5ldyBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlQWN0aXZpdHkoKTtcbiAgdGhpcy5wYWdlSW5mbyA9IG5ldyBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlSW5mbygpO1xufVxuLyoqXG4gKiBJbmZvcm1hY2nDs24gZGUgbGEgcMOhZ2luYS5cbiAqXG4gKiBAdHlwZSB7YmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIucGFnZS5JbmZvfG51bGx9XG4gKi9cbjtcblxuZXhwb3J0IGRlZmF1bHQgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9kYXRhLWxheWVyL3BhZ2UuZXM3XG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmltcG9ydCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlU2VhcmNoIGZyb20gJy4vc2VhcmNoJztcbi8qKlxuICogUmVjb2dlIGxhIGluZm9ybWFjacOzbiByZWxhdGl2YSBhIGludGVyYWNjaW9uZXMgZXNwZWPDrWZpY2FzIGRlbCB1c3VhcmlvIGNvbiBsYSB3ZWIsXG4gKiBjb21vIHJlYWxpemFjacOzbiBkZSBiw7pzcXVlZGFzIGVuIGVsIGJ1c2NhZG9yIGludGVybm8gbyB2aXN1YWxpemFjacOzbiBkZSB2w61kZW9zLlxuICpcbiAqIEVuIHRhbnRvIGVsIHVzdWFyaW8gbm8gaW50ZXJhY3TDumUgY29uIGVzb3MgZWxlbWVudG9zLCBlc3RvcyB2YWxvcmVzIGlyw6FuIHZhY8Otb3NcbiAqIGNvbW8gZW4gZWwgZWplbXBsby5cbiAqXG4gKiBAcGFja2FnZSAgIGJnZG1qcy5hbmFseXRpY3NcbiAqIEBuYW1lc3BhY2UgYmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIucGFnZVxuICogQGNsYXNzICAgICBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5wYWdlLkFjdGl2aXR5XG4gKi9cblxudmFyIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclBhZ2VBY3Rpdml0eSA9XG5cbi8qKlxuICogQ29uc3RydWN0b3IgZGUgbGEgY2xhc2UuXG4gKlxuICogQG1ldGhvZCBjb25zdHJ1Y3RvclxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbi8qKlxuICogSWRlbnRpZmljYWRvciAoY29udGVuaWRvIGVuIGxhIFVSTCkgY29uIGVsIHF1ZSBzZVxuICogaWRlbnRpZmljYSBlbCB2aWRlbyB2aXN1YWxpemFkby5cbiAqXG4gKiBAcHJvcGVydHkgbmFtZU9mVmlkZW9EaXNwbGF5ZWRcbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlQWN0aXZpdHkoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlQWN0aXZpdHkpO1xuXG4gIHRoaXMubmFtZU9mVmlkZW9EaXNwbGF5ZWQgPSAnJztcbiAgdGhpcy5zZWFyY2ggPSBudWxsO1xuXG4gIHRoaXMuc2VhcmNoID0gbmV3IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclBhZ2VTZWFyY2goKTtcbn1cbi8qKlxuICogSW5mb3JtYWNpw7NuIGRlIGxhIGLDunNxdWVkYSByZWFsaXphZGEuXG4gKlxuICogQHByb3BlcnR5IHNlYXJjaFxuICogQHR5cGUgICAgIHtiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5wYWdlLlNlYXJjaHxudWxsfVxuICovXG47XG5cbmV4cG9ydCBkZWZhdWx0IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclBhZ2VBY3Rpdml0eTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9kYXRhLWxheWVyL3BhZ2UvYWN0aXZpdHkuZXM3XG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIFJlY29nZSBsYSBpbmZvcm1hY2nDs24gcmVsYXRpdmEgYSBsYSBww6FnaW5hIHZpc3VhbGl6YWRhIHBvciBlbCB1c3VhcmlvLFxuICogZGUgbWFuZXJhIHF1ZSBlc3RhIGluZm9ybWFjacOzbiBkZWJlcsOhIGFjdHVhbGl6YXJzZSBjb24gY2FkYSBjYXJnYSBkZSBwYW50YWxsYSxcbiAqIHBlcm8gdGFtYmnDqW4gcGFyYSBsb3MgZXZlbnRvcyBhc8OtbmNyb25vcy5cbiAqXG4gKiBAcGFja2FnZSAgIGJnZG1qcy5hbmFseXRpY3NcbiAqIEBuYW1lc3BhY2UgYmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIucGFnZVxuICogQGNsYXNzICAgICBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5wYWdlLkluZm9cbiAqL1xudmFyIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclBhZ2VJbmZvID0gZnVuY3Rpb24gKCkge1xuICBfY3JlYXRlQ2xhc3MoQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZUluZm8sIFt7XG4gICAga2V5OiAncGFnZU5hbWUnLFxuXG5cbiAgICAvKipcbiAgICAgKiBFbCBjYW1wbyBwYWdlTmFtZSB0aWVuZSBsYSBmdW5jacOzbiBkZSByZWdpc3RyYXIgZWwgbm9tYnJlIGRlXG4gICAgICogbGFzIHDDoWdpbmFzIGRlbCBzaXRlIGRlIGZvcm1hIHF1ZSBwdWVkYW4gc2VyIGlkZW50aWZpY2FkYXMuXG4gICAgICpcbiAgICAgKiBTZSBvYnRpZW5lIGEgcGFydGlyIGRlbCBgYXJlYWAsIGBwYWdlU2VnbWVudGAgeSBkZSBsb3NcbiAgICAgKiBgbGV2ZWxzYCwgdG9kb3Mgc2VwYXJhZG9zIHBvciAnOicuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFnZU5hbWVcbiAgICAgKiBAdHlwZSAgICAge3N0cmluZ31cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIE5pdmVsZXMgZGUgcHJvZnVuZGlkYWQgZGUgbGEgbmF2ZWdhY2nDs24gKGNvbmNlcHR1YWxtZW50ZSwgc2Vyw61hXG4gICAgICogc2ltaWxhciBhbCBmdW5jaW9uYW1pZW50byBkZSBsYXMgbWlnYXMgZGUgcGFuIGRlIGxhIHdlYikuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGV2ZWxzXG4gICAgICogQHR5cGUgICAgIHtzdHJpbmdbXX1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFJlZ2nDs24gZGUgdmlzaXRhLlxuICAgICAqIFRlcm1pbm9sb2fDrWEgSVNPIDMxNjYtMiBpZ3VhbCBhIGxhIGRlIGxhIHByb3BpZWRhZCBgbGFuZ3VhZ2VgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdlb1JlZ2lvblxuICAgICAqIEB0eXBlICAgICB7c3RyaW5nfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ2F0ZWdvcsOtYSBkZWwgY2FuYWwgKGVuIGxhIHdlYiBzaWVtcHJlIHNlcsOhIG9ubGluZSkuXG4gICAgICogVmFsb3JlcyBwb3NpYmxlczpcbiAgICAgKiAtIGJyYW5jaFxuICAgICAqIC0gYXRtXG4gICAgICogLSBjYWxsIGNlbnRlclxuICAgICAqIC0gb25saW5lXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY2hhbm5lbFxuICAgICAqIEB0eXBlICAgICB7c3RyaW5nfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2kgZWwgdXN1YXJpbyBzZSBlbmN1ZW50cmEgZW4gbGEgcGFydGUgcMO6YmxpY2EgbyBlbiBsYSBwYXJ0ZSBwcml2YWRhIGRlbCBzaXRpby5cbiAgICAgKiBWYWxvcmVzIHBvc2libGVzOiBgcHVibGljYWAsIGBwcml2YWRhYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBhcmVhXG4gICAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBMaXN0YWRvIGRlIGRvbWluaW9zIGNvbnNpZGVyYWRvcyBjb21vIHByaXZhZG9zLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHByaXZhdGVEb21haW5zXG4gICAgICogQHR5cGUgICAge3N0cmluZ1tdfVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBbdGhpcy5hcmVhLCB0aGlzLnBhZ2VTZWdtZW50XS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMubGV2ZWxzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gISFsO1xuICAgICAgfSkpKS5qb2luKCc6Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXN0YSB2YXJpYWJsZSBpbmRpY2EgZWwgbml2ZWwgbcOhcyBnZW5lcmFsIGRlbCBjYW5hbCBhbCBxdWVcbiAgICAgKiBwZXJ0ZW5lY2UgY2FkYSB1bmEgZGUgbGFzIHDDoWdpbmFzIGV0aXF1ZXRhZGFzLlxuICAgICAqXG4gICAgICogU2UgZW1wbGVhcsOhIHBhcmEgaW5kaWNhciBlbiBxdcOpIHNlY2Npb25lcyBzZSBlbmN1ZW50cmEgbGEgcMOhZ2luYS5cbiAgICAgKlxuICAgICAqIFZhbG9yZXMgY2VycmFkb3MgZW4gZnVuY2nDs24gZGVsIHBhw61zLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBhZ2VTZWdtZW50XG4gICAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaXBvIGRlIHDDoWdpbmEgKG9iamV0aXZvIGRlIGxhIG1pc21hKS5cbiAgICAgKiBWYWxvcmVzIHBvc2libGVzOlxuICAgICAqIC0gSW5mb3JtYWNpb24gICAgICAgICAgOiBFbmdsb2JhcsOtYSBjb25zdWx0YXMsIHNpbXVsYWRvcmVzLCBmb3JtdWxhcmlvcyB5IHDDoWdpbmFzIHF1ZSBzZWFuIGRlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIGluZm9ybWFjacOzbiBjb21vIGVsIGJ1c2NhZG9yLCBlbCBsb2NhbGl6YWRvciBkZSBjYWplcm9zLCBwb3NpY2nDs24gZ2xvYmFsIGV0Yy4uXG4gICAgICogLSBUcmFuc2FjY2lvbiAgICAgICAgICA6IFNlcsOtYW4gcMOhZ2luYXMgcXVlIGVzdMOpbiBjb250ZW5pZGFzIGVuIHByb2Nlc29zIHBhcmEgbG9zIHF1ZSBlcyBuZWNlc2FyaW9cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgaW50cm9kdWNpciB1bmEgY2xhdmUsIGNvbW8gb3BlcmF0aXZhcyB5IGNvbnRyYXRhY2lvbmVzLlxuICAgICAqIC0gTGFuZGluZyBQYWdlICAgICAgICAgOiBOdWV2YXMgcMOhZ2luYXMgY3JlYWRhcyBwYXJhIGF0ZXJyaXphamUgZGUgY2FtcGHDsWFzLlxuICAgICAqIC0gSG9tZSAgICAgICAgICAgICAgICAgOiBMYSBob21lIGRlbCBzaXRlXG4gICAgICogLSBTdWJob21lICAgICAgICAgICAgICA6IFNlcsOtYW4gbGFzIFN1YmhvbWVzIGRlIHByb2R1Y3RvcywgZGVwZW5kaWVuZG8gZGVsIHBhw61zIGVuIGFsZ3Vub3MgY2Fzb3NcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9kZW1vcyBlbmNvbnRyYXJub3MgY29uIGRvcyBuaXZlbGVzIGRlIHN1YmhvbWUuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIExhIHN1YmhvbWUgc2Vyw61hIGVsIG5pdmVsIG3DoXMgYWx0byB5IGxhIHN1YmhvbWUxIGVsIG5pdmVsIG3DoXMgYmFqby5cbiAgICAgKiAtIENhdGFsb2dvIGRlIFByb2R1Y3RvIDogRGVudHJvIGRlIGVzdGEgdGlwb2xvZ8OtYSBkZSBww6FnaW5hIHNlIGVuY29udHJhcsOtYW4gdG9kYXMgbGFzIGZpY2hhcyBkZSBwcm9kdWN0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwYWdlSW50ZW50XG4gICAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBJZGlvbWEgc2VsZWNjaW9uYWRvIHBvciBlbCB1c3VhcmlvLlxuICAgICAqIFNlIGluZm9ybWFyw6EgdXNhbmRvIGxhIHRlcm1pbm9sb2fDrWEgSVNPIGRlIDIgY2FyYWN0ZXJlcy5cbiAgICAgKiBBc8OtLCBwb3IgZWplbXBsbywgcGFyYSBlbCBlc3Bhw7FvbCBzZSB1c2Fyw6EgYEVTYCwgcGFyYSBlbCBpbmdsw6lzIGBFTmAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGFuZ3VhZ2VcbiAgICAgKiBAdHlwZSAgICAge3N0cmluZ31cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEVzcGVjaWZpY2EgZWwgZXJyb3IgcXVlIHNlIGhhIHByb2R1Y2lkbyBlbiBsYSBww6FnaW5hLlxuICAgICAqIFNpIGVzdMOhIHZhY8Otbywgbm8gc2UgaGEgcHJvZHVjaWRvIG5pbmfDum4gZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZXJyb3JQYWdlXG4gICAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBCYW5jbyBvIHVuaWRhZCBkZSBuZWdvY2lvLlxuICAgICAqIFZhbG9yZXMgZW4gZnVuY2nDs24gZGVsIHBhw61zOiAnQkJWQSBFc3Bhw7FhJywgJ0JCVkEgQmFuY29tZXInLCBldGMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYnVzaW5lc3NVbml0XG4gICAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBMaXN0YWRvIGRlIGRvbWluaW9zIGNvbnNpZGVyYWRvcyBjb21vIHDDumJsaWNvcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwdWJsaWNEb21haW5zXG4gICAgICogQHR5cGUgICAgIHtzdHJpbmdbXX1cbiAgICAgKiBAc3RhdGljXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBTZXJ2aWRvciBkb25kZSBlc3TDoSBhbG9qYWRhIGxhIHDDoWdpbmEgYWN0dWFsLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHNlcnZlclxuICAgICAqIEB0eXBlICAgICB7c3RyaW5nfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRW50b3JubyBkZSBsYSB3ZWIgcG9yIGRpc3Bvc2l0aXZvLlxuICAgICAqIFBvc2libGVzIHZhbG9yZXM6XG4gICAgICogLSBhcHBcbiAgICAgKiAtIGVzY3JpdG9yaW9cbiAgICAgKiAtIHdlYi1tb3ZpbFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHN5c0VudlxuICAgICAqIEB0eXBlICAgICB7c3RyaW5nfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogTsO6bWVybyBpZGVudGlmaWNhZG9yIGRlIHZlcnNpw7NuIGRlIGxhIHdlYiBxdWUgZXN0w6EgY2FyZ2FkYS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB2ZXJzaW9uXG4gICAgICogQHR5cGUgICAgIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfV0pO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBkZSBsYSBjbGFzZS5cbiAgICpcbiAgICogQG1ldGhvZCBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclBhZ2VJbmZvKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlSW5mbyk7XG5cbiAgICB0aGlzLmFyZWEgPSAnJztcbiAgICB0aGlzLmJ1c2luZXNzVW5pdCA9ICcnO1xuICAgIHRoaXMuY2hhbm5lbCA9ICdvbmxpbmUnO1xuICAgIHRoaXMuZXJyb3JQYWdlID0gJyc7XG4gICAgdGhpcy5nZW9SZWdpb24gPSAnJztcbiAgICB0aGlzLmxhbmd1YWdlID0gJyc7XG4gICAgdGhpcy5sZXZlbHMgPSBbXTtcbiAgICB0aGlzLnBhZ2VJbnRlbnQgPSAnJztcbiAgICB0aGlzLnBhZ2VTZWdtZW50ID0gJyc7XG4gICAgdGhpcy5zZXJ2ZXIgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgdGhpcy5zeXNFbnYgPSAnYXBwJztcbiAgICB0aGlzLnZlcnNpb24gPSAnJztcblxuICAgIHRoaXMuX19pbml0QXJlYSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaWNpYWxpemEgZWwgw6FyZWEgZW4gZnVuY2nDs24gZGVsIGRvbWluaW8gYWN0dWFsLlxuICAgKlxuICAgKiBAbWV0aG9kIF9faW5pdEFyZWFcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZUluZm8sIFt7XG4gICAga2V5OiAnX19pbml0QXJlYScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9faW5pdEFyZWEoKSB7XG4gICAgICBpZiAoIXRoaXMuYXJlYSkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlSW5mby5wdWJsaWNEb21haW5zW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIF9kb21haW4gPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKF9kb21haW4gPT09IHRoaXMuc2VydmVyKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXJlYSA9ICdwdWJsaWNhJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmFyZWEpIHtcbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlSW5mby5wcml2YXRlRG9tYWluc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICAgICAgICB2YXIgX2RvbWFpbjIgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgICAgICAgaWYgKF9kb21haW4yID09PSB0aGlzLnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJlYSA9ICdwcml2YWRhJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgICAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc2lnbmEgYWwgbml2ZWwgZXNwZWNpZmljYWRvIGVsIHZhbG9yIGluZGljYWRvLlxuICAgICAqXG4gICAgICogQG1ldGhvZCBzZXRMZXZlbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IMONbmRpY2UgZGVsIG5pdmVsLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBWYWxvciBhIGFzaWduYXIuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldExldmVsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TGV2ZWwoaW5kZXgsIHZhbHVlKSB7XG4gICAgICB0aGlzLmxldmVsc1tpbmRleF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZUluZm87XG59KCk7XG5cbkJnZG1qc0FuYWx5dGljc0RhdGFMYXllclBhZ2VJbmZvLnByaXZhdGVEb21haW5zID0gWydsb2NhbGhvc3QnXTtcbkJnZG1qc0FuYWx5dGljc0RhdGFMYXllclBhZ2VJbmZvLnB1YmxpY0RvbWFpbnMgPSBbXTtcbmV4cG9ydCBkZWZhdWx0IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclBhZ2VJbmZvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2RhdGEtbGF5ZXIvcGFnZS9pbmZvLmVzN1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBJbmZvcm1hY2nDs24gZGUgbGEgYsO6c3F1ZWRhIHJlYWxpemFkYSBwb3IgZWwgdXN1YXJpby5cbiAqXG4gKiBAcGFja2FnZSAgIGJnZG1qcy5hbmFseXRpY3NcbiAqIEBuYW1lc3BhY2UgYmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIucGFnZVxuICogQGNsYXNzICAgICBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5wYWdlLlNlYXJjaFxuICovXG52YXIgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZVNlYXJjaCA9IGZ1bmN0aW9uIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclBhZ2VTZWFyY2goKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQYWdlU2VhcmNoKTtcblxuICB0aGlzLm9uU2l0ZVNlYXJjaFJlc3VsdHMgPSAwO1xuICB0aGlzLm9uU2l0ZVNlYXJjaFRlcm0gPSAnJztcbiAgdGhpcy5vcmlnaW5hbFBhZ2UgPSAnJztcbn1cbi8qKlxuICogTsO6bWVybyBkZSByZXN1bHRhZG9zIHF1ZSBkZXZ1ZWx2ZSB1bmEgYsO6c3F1ZWRhIGVuIGVsIGJ1c2NhZG9yXG4gKiBpbnRlcm5vIGRlbCBzaXRpbyBjdWFuZG8gdW4gdXN1YXJpbyByZWFsaXphIHVuYSBiw7pzcXVlZGEuXG4gKlxuICogQHByb3BlcnR5IG9uU2l0ZVNlYXJjaFJlc3VsdHNcbiAqIEB0eXBlICAgICB7bnVtYmVyfVxuICovXG5cbi8qKlxuICogVMOpcm1pbm8gYnVzY2FkbyBlbiBlbCBidXNjYWRvciBkZWwgc2l0aW8uXG4gKlxuICogQHByb3BlcnR5IG9uU2l0ZVNlYXJjaFRlcm1cbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogTm9tYnJlIGRlIGxhIHDDoWdpbmEgYHBhZ2VOYW1lYCBkZXNkZSBsYSBxdWUgc2UgcmVhbGl6YSBsYSBiw7pzcXVlZGEuXG4gKlxuICogQHByb3BlcnR5IG9yaWdpbmFsUGFnZVxuICogQHR5cGUgICAgIHtzdHJpbmd9XG4gKi9cbjtcblxuZXhwb3J0IGRlZmF1bHQgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUGFnZVNlYXJjaDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9kYXRhLWxheWVyL3BhZ2Uvc2VhcmNoLmVzN1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuaW1wb3J0IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclByaXZhY3lDYXRlZ29yeSBmcm9tICcuL3ByaXZhY3kvY2F0ZWdvcnknO1xuLyoqXG4gKiBDbGFzaWZpY2EgbGFzIGNhdGVnb3LDrWFzIGRlIGFjY2VzbyBhIGxvcyBkYXRvcy5cbiAqXG4gKiBAcGFja2FnZSAgIGJnZG1qcy5hbmFseXRpY3NcbiAqIEBuYW1lc3BhY2UgYmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXJcbiAqIEBjbGFzcyAgICAgYmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIuUHJpdmFjeVxuICovXG5cbnZhciBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQcml2YWN5ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQcml2YWN5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQcml2YWN5KTtcblxuICAgIHRoaXMuYWNjZXNzQ2F0ZWdvcmllcyA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBMaXN0YSBkZSBjYXRlZ29yw61hcy5cbiAgICpcbiAgICogQHR5cGUge2JnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyLnByaXZhY3kuQ2F0ZWdvcnlbXX1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUHJpdmFjeSwgW3tcbiAgICBrZXk6ICdhZGRDYXRlZ29yeScsXG5cblxuICAgIC8qKlxuICAgICAqIEFncmVnYSB1bmEgY2F0ZWdvcsOtYSBhIGxhIGxpc3RhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgbmFtZSAgICBOb21icmUgZGUgbGEgY2F0ZWdvcsOtYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBkb21haW5zIERvbWluaW9zIHBlcm1pdGlkb3MgZGUgbGEgY2F0ZWdvcsOtYS5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkQ2F0ZWdvcnkobmFtZSwgZG9tYWlucykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRvbWFpbnMpKSB7XG4gICAgICAgIGRvbWFpbnMgPSBbZG9tYWluc107XG4gICAgICB9XG4gICAgICB2YXIgX2NhdGVnb3J5ID0gbmV3IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclByaXZhY3lDYXRlZ29yeSgpO1xuICAgICAgX2NhdGVnb3J5LmNhdGVnb3J5TmFtZSA9IG5hbWU7XG4gICAgICBfY2F0ZWdvcnkuZG9tYWlucyA9IGRvbWFpbnM7XG4gICAgICB0aGlzLmFjY2Vzc0NhdGVnb3JpZXMucHVzaChfY2F0ZWdvcnkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQcml2YWN5O1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQcml2YWN5O1xuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2RhdGEtbGF5ZXIvcHJpdmFjeS5lczdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogUmVwcmVzZW50YSB1bmEgY2F0ZWdvcsOtYSBkZSBhY2Nlc28gYSBkYXRvcy5cbiAqXG4gKiBAcGFja2FnZSAgIGJnZG1qcy5hbmFseXRpY3NcbiAqIEBuYW1lc3BhY2UgYmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIucHJpdmFjeVxuICogQGNsYXNzICAgICBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5wcml2YWN5LkNhdGVnb3J5XG4gKi9cbnZhciBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQcml2YWN5Q2F0ZWdvcnkgPSBmdW5jdGlvbiBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQcml2YWN5Q2F0ZWdvcnkoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQcml2YWN5Q2F0ZWdvcnkpO1xuXG4gIHRoaXMuY2F0ZWdvcnlOYW1lID0gJyc7XG4gIHRoaXMuZG9tYWlucyA9IFtdO1xufVxuLyoqXG4gKiBOb21icmUgZGUgbGEgY2F0ZWdvcsOtYSBxdWUgc2UgY29ycmVzcG9uZGVyw6FcbiAqIGNvbiBlbCBkZSBsYSB2YXJpYWJsZSBgU2VjdXJpdHlgLlxuICpcbiAqIEBwcm9wZXJ0eSBjYXRlZ29yeU5hbWVcbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogQXJyYXkgZGUgZG9taW5pb3MgZGUgbGEgaGVycmFtaWVudGEgcXVlIGFjY2VkZVxuICogYWwgw6FyZWEgZGUgcHJpdmFjaWRhZC5cbiAqXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbjtcblxuZXhwb3J0IGRlZmF1bHQgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUHJpdmFjeUNhdGVnb3J5O1xuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2RhdGEtbGF5ZXIvcHJpdmFjeS9jYXRlZ29yeS5lczdcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogUmVjb2dlIGxhIGluZm9ybWFjacOzbiByZWxhdGl2YSBhIGxhcyBjYW1wYcOxYXMgcXVlIHNlIGV4cG9uZW4gYWwgdXN1YXJpbyxcbiAqIGFzw60gY29tbyBsYXMgaW50ZXJhY2Npb25lcyBxdWUgZWwgdXN1YXJpbyBoYWNlIGNvbiBsYXMgbWlzbWFzLlxuICpcbiAqIEVzdGUgYXBhcnRhZG8gc8OzbG8gc2UgaW5mb3JtYXLDoSBjdWFuZG8gaGF5YSBpbmZvcm1hY2nDs24gZGUgY2FtcGHDsWFzIGV4cHVlc3RhcyBhbFxuICogdXN1YXJpbyAobyDDqXN0ZSBpbnRlcmFjdMO6ZSBjb24gZWxsYXMpLCBlbiBjYXNvIGNvbnRyYXJpbywgbG9zIGNhbXBvcyBpcsOhbiBzaW4gaW5mb3JtYXIuXG4gKlxuICogQHBhY2thZ2UgICBiZ2RtanMuYW5hbHl0aWNzXG4gKiBAbmFtZXNwYWNlIGJnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyXG4gKiBAY2xhc3MgICAgIGJnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyLlByb2R1Y3RcbiAqL1xudmFyIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclByb2R1Y3QgPSBmdW5jdGlvbiBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJQcm9kdWN0KCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyUHJvZHVjdCk7XG5cbiAgdGhpcy5wcmltYXJ5Q2F0ZWdvcnkgPSAnJztcbiAgdGhpcy5wcm9kdWN0TmFtZSA9ICcnO1xuICB0aGlzLnByb2R1Y3RTdWJ0eXBlID0gJyc7XG59XG4vKipcbiAqIFJlY29nZSBlbCB2YWxvciBtw6FzIGdlbmVyYWwgZGUgbGEgY2F0ZWdvcsOtYSBkZSB1biBwcm9kdWN0by5cbiAqIFZhbG9yZXMgcG9zaWJsZXM6XG4gKiAtIGN1ZW50YXNcbiAqIC0gZGVwb3NpdG9zXG4gKiAtIGludmVyc2lvbmVzXG4gKiAtIHByZXN0YW1vc1xuICogLSBzZWd1cm9zXG4gKiAtIHRhcmpldGFzXG4gKlxuICogQHByb3BlcnR5IHByaW1hcnlDYXRlZ29yeVxuICogQHR5cGUgICAgIHtzdHJpbmd9XG4gKi9cblxuLyoqXG4gKiBOb21icmUgZGV0YWxsYWRvIGRlbCBwcm9kdWN0by5cbiAqXG4gKiBAcHJvcGVydHkgcHJvZHVjdE5hbWVcbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogU3ViY2F0ZWdvcsOtYSBkZWwgcHJvZHVjdG8uXG4gKlxuICogUmVjb2dlIHVuIHZhbG9yIG3DoXMgZGV0YWxsYWRvIHNvYnJlIGxhIGNhdGVnb3LDrWEgYSBsYSBxdWUgcGVydGVuZWNlIGVsXG4gKiBwcm9kdWN0byAocG9yIGVqZW1wbG8g4oCcdGFyamV0YSBkZSBjcmVkaXRv4oCdLCDigJx0YXJqZXRhIGRlIGRlYml0b+KAnSwgZXRjKS5cbiAqIEVzdGUgY2FtcG8gc8OzbG8gc2UgaW5mb3JtYXLDoSBzaSBleGlzdGUgdW4gc3VidGlwbyBkZSBwcm9kdWN0bzsgZW4gY2Fzb1xuICogY29udHJhcmlvLCBzZSBkZWphcsOhIHNpbiBpbmZvcm1hci5cbiAqXG4gKiBAcHJvcGVydHkgcHJvZHVjdFN1YnR5cGVcbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG47XG5cbmV4cG9ydCBkZWZhdWx0IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclByb2R1Y3Q7XG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZGF0YS1sYXllci9wcm9kdWN0LmVzN1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuaW1wb3J0IEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclVzZXJEZXZpY2UgZnJvbSAnLi91c2VyL2RldmljZSc7XG5pbXBvcnQgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyVXNlclNlZ21lbnQgZnJvbSAnLi91c2VyL3NlZ21lbnQnO1xuLyoqXG4gKiBBbG1hY2VuYSBsYSBpbmZvcm1hY2nDs24gcmVsYXRpdmEgYWwgcGVyZmlsIGRlbCBjbGllbnRlLlxuICpcbiAqIERlYmUgaW5mb3JtYXJzZSB0YW50byBwYXJhIGxvcyBldmVudG9zIHPDrW5jcm9ub3MgY29tbyBhc8OtbmNyb25vcy5cbiAqXG4gKiBEYXRvcyBjb21vIOKAnGxvZ2Fkby9ubyBsb2dhZG/igJ0gbyBlbCBwcm9maWxlIElEIHNlIGluZm9ybWFyw6FuIGVuIHRvZGEgbGFcbiAqIG5hdmVnYWNpw7NuLCBtaWVudHJhcyBxdWUgZWwgdGlwbyBkZSBjbGllbnRlIChwcm9maWxlKSBzw7NsbyBzZSBpbmZvcm1hcsOhXG4gKiBlbiBhcXVlbGxvcyBmdW5uZWxzIGVuIGxvcyBxdWUgZWwgY2xpZW50ZSBlcyBjbGFzaWZpY2FkbyBwb3IgdGlwb2xvZ8OtYVxuICogKGNvbW8gc3VjZWRlIHBvciBlamVtcGxvIGVuIGVsIGZ1bm5lbCBkZSBBZ2VuZGFtaWVudG8pLlxuICpcbiAqIEBwYWNrYWdlICAgYmdkbWpzLmFuYWx5dGljc1xuICogQG5hbWVzcGFjZSBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllclxuICogQGNsYXNzICAgICBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci5Vc2VyXG4gKi9cblxudmFyIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclVzZXIgPVxuXG4vKipcbiAqIENvbnN0cnVjdG9yIGRlIGxhIGNsYXNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbi8qKlxuICogSW5mb3JtYWNpw7NuIGRlbCBzZWdtZW50byBkZWwgY2xpZW50ZS5cbiAqXG4gKiBAdHlwZSB7YmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIudXNlci5TZWdtZW50fG51bGx9XG4gKi9cblxuLyoqXG4gKiBHw6luZXJvIGRlbCB1c3VhcmlvLlxuICpcbiAqIEBwcm9wZXJ0eSBnZW5kZXJcbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogUGHDrXMgZGUgb3JpZ2VuIGRlbCB1c3VhcmlvLlxuICpcbiAqIEBwcm9wZXJ0eSBjb3VudHJ5XG4gKiBAdHlwZSAgICAge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyVXNlcigpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclVzZXIpO1xuXG4gIHRoaXMuYWdlID0gMDtcbiAgdGhpcy5jb3VudHJ5ID0gJyc7XG4gIHRoaXMuZGV2aWNlID0gbnVsbDtcbiAgdGhpcy5nZW5kZXIgPSAnJztcbiAgdGhpcy5wcm9maWxlSUQgPSAnJztcbiAgdGhpcy5zZWdtZW50ID0gbnVsbDtcbiAgdGhpcy51c2VyU3RhdGUgPSAnJztcblxuICB0aGlzLmRldmljZSA9IG5ldyBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJVc2VyRGV2aWNlKCk7XG4gIHRoaXMuc2VnbWVudCA9IG5ldyBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJVc2VyU2VnbWVudCgpO1xufVxuLyoqXG4gKiBTaSBlbCB1c3VhcmlvIGVzdMOhIGxvZ2FkbyBvIG5vLlxuICogVmFsb3JlcyBwb3NpYmxlczogYGxvZ2Fkb2AsIGBubyBsb2dhZG9gLlxuICpcbiAqIEBwcm9wZXJ0eSB1c2VyU3RhdGVcbiAqIEB0eXBlICAgICB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogSWRlbnRpZmljYWRvciDDum5pY28gZGVsIGNsaWVudGUuXG4gKlxuICogRXN0ZSB2YWxvciBkZWJlIGVzdGFyIGVuY3JpcHRhZG8geSBOVU5DQSBkZWJlIGNvaW5jaWRpciBjb24gZWxcbiAqIG7Dum1lcm8gaW50ZXJubyBxdWUgZWwgQmFuY28gZ3VhcmRhIGVuIHN1cyBiYXNlcyBkZSBkYXRvcyBkZSBDbGllbnRlcy5cbiAqXG4gKiBDYWRhIHBhw61zIGdlbmVyYXLDoSB1biDDum5pY28gaWRlbnRpZmljYWRvciBwb3IgdXN1YXJpbyBxdWVcbiAqIHBlcm1pdGEgc2VyIGNydXphZG8gY29uIGVsIGJhY2stZW5kIGludGVybm8uIC5cbiAqXG4gKiBAcHJvcGVydHkgcHJvZmlsZUlEXG4gKiBAdHlwZSAgICAge3N0cmluZ31cbiAqL1xuXG4vKipcbiAqIEluZm9ybWFjacOzbiBkZWwgZGlzcG9zaXRpdm8uXG4gKlxuICogQHByb3BlcnR5IGRldmljZVxuICogQHR5cGUgICAgIHtiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci51c2VyLkRldmljZXxudWxsfVxuICovXG5cbi8qKlxuICogRWRhZCBkZWwgdXN1YXJpby5cbiAqXG4gKiBAcHJvcGVydHkgYWdlXG4gKiBAdHlwZSAgICAge251bWJlcn1cbiAqL1xuO1xuXG5leHBvcnQgZGVmYXVsdCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJVc2VyO1xuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2RhdGEtbGF5ZXIvdXNlci5lczdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmltcG9ydCBNb2JpbGVEZXRlY3QgZnJvbSAnbW9iaWxlLWRldGVjdCc7XG4vKipcbiAqIFJlY29nZSBsYSBpbmZvcm1hY2nDs24gZGVsIGRpc3Bvc2l0aXZvIGRlbCB1c3VhcmlvLlxuICpcbiAqIEBwYWNrYWdlICAgYmdkbWpzLmFuYWx5dGljc1xuICogQG5hbWVzcGFjZSBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci51c2VyXG4gKiBAY2xhc3MgICAgIGJnZG1qcy5hbmFseXRpY3MuZGF0YUxheWVyLnVzZXIuRGV2aWNlXG4gKi9cblxudmFyIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclVzZXJEZXZpY2UgPSBmdW5jdGlvbiBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJVc2VyRGV2aWNlKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyVXNlckRldmljZSk7XG5cbiAgdGhpcy5tb2JpbGUgPSAhIW5ldyBNb2JpbGVEZXRlY3QobmF2aWdhdG9yLnVzZXJBZ2VudCkubW9iaWxlKCkgPyAnc2knIDogJ25vJztcbiAgdGhpcy51c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xufVxuLyoqXG4gKiBWYWxvciBjYWxjdWxhZG8gYSBwYXJ0aXIgZGVsIHVzZXJBZ2VudCBlbiBlbCBxdWUgYHNpYCBzZXLDoSBlbFxuICogcmVzdWx0YWRvIHNpIGVsIHVzdWFyaW8gc2UgY29uZWN0YSBkZXNkZSB1biBkaXNwb3NpdGl2byBtw7N2aWwuXG4gKlxuICogQHByb3BlcnR5IG1vYmlsZVxuICogQHR5cGUgICAgIHtzdHJpbmd9XG4gKi9cblxuLyoqXG4gKiBWYWxvciBgdXNlckFnZW50YCBkZWwgbmF2ZWdhZG9yIGRlc2RlIGVsIHF1ZSBzZSBjb25lY3RhIGVsIHVzdWFyaW8uXG4gKiBFc3RlIHZhbG9yIGlkZW50aWZpY2Fyw6EgZWwgdGlwbyBkZSBkaXNwb3NpdGl2byB5IHZlcnNpw7NuIGRlbCBtaXNtby5cbiAqXG4gKiBAcHJvcGVydHkgdXNlckFnZW50XG4gKiBAdHlwZSAgICAge3N0cmluZ31cbiAqL1xuO1xuXG5leHBvcnQgZGVmYXVsdCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJVc2VyRGV2aWNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2RhdGEtbGF5ZXIvdXNlci9kZXZpY2UuZXM3XG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIFJlY29nZSBsYSBpbmZvcm1hY2nDs24gZGVsIHBlcmZpbCBkZWwgdXN1YXJpby5cbiAqXG4gKiBAcGFja2FnZSAgIGJnZG1qcy5hbmFseXRpY3NcbiAqIEBuYW1lc3BhY2UgYmdkbWpzLmFuYWx5dGljcy5kYXRhTGF5ZXIudXNlclxuICogQGNsYXNzICAgICBiZ2RtanMuYW5hbHl0aWNzLmRhdGFMYXllci51c2VyLlNlZ21lbnRcbiAqL1xudmFyIEJnZG1qc0FuYWx5dGljc0RhdGFMYXllclVzZXJTZWdtZW50ID0gZnVuY3Rpb24gQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyVXNlclNlZ21lbnQoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJVc2VyU2VnbWVudCk7XG5cbiAgdGhpcy5nbG9iYWwgPSAnJztcbiAgdGhpcy5wcm9maWxlID0gJyc7XG59XG4vKipcbiAqIFBlcmZpbCBkZWwgY2xpZW50ZSBwYXJhIGxhIHBhcnRlIHByaXZhZGEuXG4gKiBFc3RhIHZhcmlhYmxlIHNlIGZvcm1hcsOhIHBvciBsYSBjb25jYXRlbmFjacOzbiBkZWwgY8OzZGlnbyBkZWwgcGHDrXMgeVxuICogZGVsIGPDs2RpZ28gcXVlIGlkZW50aWZpcXVlIGVsIHNlZ21lbnRvIG8gdGlwbyBkZSBjbGllbnRlIChlajogMDAxMDAyKS5cbiAqXG4gKiBMb3MgY8OzZGlnb3MgZGUgY2FkYSBwYcOtcyBzb246XG4gKlxuICogLSBBcmdlbnRpbmEgOiAwMDVcbiAqIC0gQmFuY29tZXIgIDogMDAzXG4gKiAtIENoaWxlICAgICA6IDAwOFxuICogLSBDb2xvbWJpYSAgOiAwMDRcbiAqIC0gQ29tcGFzcyAgIDogMDA2XG4gKiAtIEVzcGHDsWEgICAgOiA3MjRcbiAqIC0gUGVyw7ogICAgICA6IDAwMVxuICogLSBWZW5lenVlbGEgOiAwMDdcbiAqXG4gKiBAcHJvcGVydHkgZ2xvYmFsXG4gKiBAdHlwZSAgICAge3N0cmluZ31cbiAqL1xuXG4vKipcbiAqIEN1YW5kbyB1biBjbGllbnRlIHJlYWxpemEgdW4gcHJvY2Vzbywgw6lzdGUgcHVlZGUgc2VyXG4gKiBjbGFzaWZpY2FkbyBjb21vIHVuIHRpcG8gZXNwZWPDrWZpY28gZGUgY2xpZW50ZS5cbiAqXG4gKiBTZSB0cmF0YSBkZSB1bmEgdGlwb2xvZ8OtYSBlbiBsYSBxdWUgc2UgY2xhc2lmaWNhIGFsXG4gKiBjbGllbnRlIGVuIHJlbGFjacOzbiBjb24gdW4gcHJvY2Vzby9wcm9kdWN0byBjb25jcmV0by5cbiAqXG4gKiBFc3RhIGNsYXNpZmljYWNpw7NuIGRlbCBjbGllbnRlIGVuIHJlbGFjacOzbiBjb24gdW5cbiAqIHByb2R1Y3RvIGVzcGVjw61maWNvIHNlIHJlY29nZSBlbiBlc3RhIHZhcmlhYmxlLlxuICpcbiAqIEBwcm9wZXJ0eSBwcm9maWxlXG4gKiBAdHlwZSAgICAge3N0cmluZ31cbiAqL1xuO1xuXG5leHBvcnQgZGVmYXVsdCBCZ2RtanNBbmFseXRpY3NEYXRhTGF5ZXJVc2VyU2VnbWVudDtcbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9kYXRhLWxheWVyL3VzZXIvc2VnbWVudC5lczdcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5pbXBvcnQgQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyIGZyb20gJy4vanMvZGF0YS1sYXllci9kYXRhLWxheWVyJztcbi8vXG5cbnZhciBBbmFseXRpY3NNb2RlbCA9IGZ1bmN0aW9uIEFuYWx5dGljc01vZGVsKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5hbHl0aWNzTW9kZWwpO1xuXG4gIHRoaXMuRGF0YUxheWVyID0gQmdkbWpzQW5hbHl0aWNzRGF0YUxheWVyO1xufTtcblxudmFyIGFuYWx5dGljcyA9IG5ldyBBbmFseXRpY3NNb2RlbCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhbmFseXRpY3M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguZXM3XG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9