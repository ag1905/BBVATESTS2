(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cellsPolymer"] = factory();
	else
		root["cellsPolymer"] = factory();
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _polymerBridge = __webpack_require__(/*! ./polymer-bridge */ 1);
	
	var _polymerBridge2 = _interopRequireDefault(_polymerBridge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.CellsPolymerBridge = _polymerBridge2.default;
	module.exports = _polymerBridge2.default;

/***/ }),
/* 1 */
/*!*******************************!*\
  !*** ./src/polymer-bridge.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _bridge = __webpack_require__(/*! cells-bridge/src/bridge */ 2);
	
	var _bridge2 = _interopRequireDefault(_bridge);
	
	var _polymerComponentConnector = __webpack_require__(/*! ./polymer-component-connector */ 91);
	
	var _polymerComponentConnector2 = _interopRequireDefault(_polymerComponentConnector);
	
	var _polymerTemplateManager = __webpack_require__(/*! ./polymer-template-manager */ 92);
	
	var _polymerTemplateManager2 = _interopRequireDefault(_polymerTemplateManager);
	
	var _polymerComponent = __webpack_require__(/*! ./polymer-component */ 95);
	
	var _polymerComponent2 = _interopRequireDefault(_polymerComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellsPolymerBridge = function (_CellsBridge) {
	  _inherits(CellsPolymerBridge, _CellsBridge);
	
	  function CellsPolymerBridge(config) {
	    _classCallCheck(this, CellsPolymerBridge);
	
	    var _this = _possibleConstructorReturn(this, (CellsPolymerBridge.__proto__ || Object.getPrototypeOf(CellsPolymerBridge)).call(this, config));
	
	    if (config.avoidPolymerEventCache === true) {
	      var origGetEvent = Polymer.Base._getEvent;
	      Polymer.Base._getEvent = function (type, bubbles, cancelable) {
	        return origGetEvent(type, bubbles, cancelable, false);
	      };
	    }
	    return _this;
	  }
	
	  _createClass(CellsPolymerBridge, [{
	    key: '_initDependencies',
	    value: function _initDependencies(dependencies) {
	      dependencies = _extends({
	        ComponentConnector: _polymerComponentConnector2.default,
	        TemplateManager: _polymerTemplateManager2.default
	      }, dependencies);
	      _get(CellsPolymerBridge.prototype.__proto__ || Object.getPrototypeOf(CellsPolymerBridge.prototype), '_initDependencies', this).call(this, dependencies);
	    }
	  }, {
	    key: '_createCellsComponent',
	    value: function _createCellsComponent(spec, context) {
	      return new _polymerComponent2.default(spec, context);
	    }
	  }]);
	
	  return CellsPolymerBridge;
	}(_bridge2.default);
	
	exports.default = CellsPolymerBridge;

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./~/cells-bridge/src/bridge.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// eslint-disable-next-line no-unused-vars
	
	
	var _string = __webpack_require__(/*! string */ 3);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _dom = __webpack_require__(/*! ./manager/dom */ 7);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _page = __webpack_require__(/*! ./manager/page */ 10);
	
	var _page2 = _interopRequireDefault(_page);
	
	var _componentConnector = __webpack_require__(/*! ./component-connector */ 14);
	
	var _componentConnector2 = _interopRequireDefault(_componentConnector);
	
	var _router = __webpack_require__(/*! ./router */ 47);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _sanitizer = __webpack_require__(/*! ./sanitizer */ 13);
	
	var _sanitizer2 = _interopRequireDefault(_sanitizer);
	
	var _events = __webpack_require__(/*! ./manager/events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _import = __webpack_require__(/*! ./manager/import */ 81);
	
	var _import2 = _interopRequireDefault(_import);
	
	var _template = __webpack_require__(/*! ./manager/template */ 82);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _component = __webpack_require__(/*! ./component */ 84);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _bridgeChannels = __webpack_require__(/*! ./manager/bridge-channels */ 85);
	
	var _bridgeChannels2 = _interopRequireDefault(_bridgeChannels);
	
	var _actionChannels = __webpack_require__(/*! ./manager/action-channels */ 90);
	
	var _actionChannels2 = _interopRequireDefault(_actionChannels);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var coreInstances = 0;
	var globalChannel = {};
	
	// @TODO: Agregar los imports y eliminar los `new this.*`
	// @TODO: Revisar los métodos que manipulan templates. Quizás deban ser responsabilidad del TemplateManager
	
	var CellsBridge = function () {
	  /**
	   * The name of the initial template that gets rendered
	   *
	   * @type {String}
	   */
	
	  /**
	   * Lib version.
	   *
	   * @type {string}
	   */
	
	  /**
	   * Proactive Render
	   * Render future pages.
	   *
	   * @type {Boolean}
	   */
	
	  /**
	   * Prints debug info
	   *
	   * @type {Boolean}
	   */
	
	  /**
	  * URL templates Path
	  *
	  * URL path to load templates.
	  *
	  * @type {String}
	  */
	
	  /**
	   * PubSub Context
	   *
	   * 'global'   => Notifies all components of all bridge instances.
	   * 'local'    => Notifies components created by the current bridge instance.
	   *
	   * @type {String}
	   */
	
	  /**
	   *
	   */
	  function CellsBridge(config) {
	    _classCallCheck(this, CellsBridge);
	
	    this.ComponentConnector = null;
	    this.DomManager = null;
	    this.ImportManager = null;
	    this.PageManager = null;
	    this.Router = null;
	    this.TemplateManager = null;
	    this.Sanitizer = null;
	    this.BridgeChannelManager = null;
	    this.binding = 'always';
	    this.prplLevel = 2;
	    this.cache = true;
	    this.channel = 'global';
	    this.componentsPath = '';
	    this.templatesPath = '';
	    this.crossContainerId = '__cross';
	    this.debug = true;
	    this.preCache = false;
	    this.preRender = false;
	    this.storagePrefix = '__bridge-';
	    this.version = '1.0.7';
	    this.viewLimit = 6;
	    this.initialTemplate = 'login';
	    this.externalEvents = ['page-ready', 'parse-route', 'after-publish', 'nav-request', 'before-set-attr-to-node', 'after-set-attr-to-node', 'before-create-node', 'after-create-node', 'before-import', 'after-import', 'page-request', 'page-response', 'data-load', 'template-transition-end', 'track-event', 'template-registered'];
	
	
	    if (!config || (typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
	      config = {};
	    }
	
	    var dependencies = config.dependencies;
	    delete config.dependencies;
	    _extends(this, config);
	
	    this._initDependencies(dependencies);
	
	    if (this.channel === 'global') {
	      this.ComponentConnector.manager.channels = globalChannel;
	    }
	
	    if (!this.mainNode) {
	      console.warn('You should indicate the main node of your app');
	    } else {
	      this._plugExternalEvents();
	    }
	
	    this.id = coreInstances++;
	    this._initCrossComponents();
	
	    if (this.cache) {
	      this.PageManager.persistent = true;
	    }
	    if (this.generateRequestUrl) {
	      console.assert(typeof this.generateRequestUrl === 'function', 'generateRequestUrl has to be a function');
	      this.PageManager.generateRequestUrl = this.generateRequestUrl;
	    }
	    if (this.onPageDefinitionNotFound) {
	      console.assert(typeof this.onPageDefinitionNotFound === 'function', 'onPageDefinitionNotFound has to be a function');
	      this.PageManager.onPageDefinitionNotFound = this.onPageDefinitionNotFound;
	    }
	    window.$core = window.$core || [];
	    /* istanbul ignore else */
	    if (this.debug) {
	      window.$core.push(this);
	      this.printDebugInfo();
	    } else {
	      window.$core.push({
	        logout: this.logout.bind(this),
	        subscribeToEvent: this.subscribeToEvent.bind(this)
	      });
	    }
	
	    this.BridgeChannelManager.initAppContextChannel();
	    this.ActionChannelManager.subscribeAll();
	
	    // 1. Listen for route changes
	    // @TODO: Revisar este binding de un método de otro objeto a otro objeto
	    this.Router.handler = this.routeHandler.bind(this);
	    this.Router.addRoutes(this.routes);
	    this.Router.start();
	
	    _events2.default.on('nav-request', function (info) {
	      var event = info.event;
	      var navigationDetail = info.detail;
	      var page = navigationDetail.page;
	      var params = navigationDetail.params;
	      var p = {};
	      if (!page && navigationDetail.paramPage && event.detail) {
	        page = event.detail[navigationDetail.paramPage];
	      }
	      if (event.detail && params) {
	        for (var param in params) {
	          if (params.hasOwnProperty(param)) {
	            p[params[param]] = event.detail[param];
	          }
	        }
	      }
	      this.Router.go(page, p);
	      _extends(this, config);
	    }.bind(this));
	  }
	
	  /**
	  * Events to expose
	  *
	  *
	  * @type {Array}
	  */
	
	  /**
	   * Max number of views
	   *
	   * Keeps this number of template alive.
	   *
	   * @type {Number}
	   */
	
	  /**
	   * Prefix for LocalStorage keys
	   *
	   * @type {String}
	   */
	
	  /**
	   * Proactive Cache.
	   * Loads future pages definition.
	   *
	   * @type {Boolean}
	   */
	
	  /**
	   * Cross container node Id
	   *
	   * @type {String}
	   */
	
	  /**
	   * URL Components Path
	   *
	   * URL path to load components.
	   *
	   * @type {String}
	   */
	
	  /**
	   * Pages Cache
	   *
	   * Saves page definitions into localstorage.
	   *
	   * @type {Boolean}
	   */
	
	  /**
	   * Binding Type
	   *
	   * 'always'      => Register all components of all views. Never unregister them.
	   * 'delayed'     => Like 'always' but waits for idle to start the animation.
	   * 'ui'          => Register only ui and cross components of all views. Never
	   *                  unregister them. Datamanagers are only connected when the
	   *                  animation of the current view finishes.
	   * 'currentview' => Register all components of the current view when the
	   *                  animation finishes.
	   *
	   * @type {String}
	   */
	
	
	  _createClass(CellsBridge, [{
	    key: '_plugExternalEvents',
	    value: function _plugExternalEvents() {
	      var _this = this;
	
	      var len = this.externalEvents.length;
	      var mainNode = document.querySelector('#' + this.mainNode);
	      var setExternalEvent = function setExternalEvent(name, payload) {
	        var event = payload ? new CustomEvent(name, { detail: payload }) : new CustomEvent(name);
	        mainNode.dispatchEvent(event);
	      };
	      if (mainNode) {
	        var _loop = function _loop(i) {
	          _events2.default.on(_this.externalEvents[i], function (data) {
	            setExternalEvent(_this.externalEvents[i], data);
	          });
	        };
	
	        for (var i = 0; i < len; i++) {
	          _loop(i);
	        }
	        this._initEventChannels();
	      } else {
	        console.warn('The defined main node does not exist');
	      }
	    }
	  }, {
	    key: '_initEventChannels',
	    value: function _initEventChannels() {
	      var mainNode = document.querySelector('#' + this.mainNode);
	      this.BridgeChannelManager.initEventChannels(mainNode, this.externalEvents);
	      this._addInitialSubscribersToEvents();
	    }
	  }, {
	    key: '_addInitialSubscribersToEvents',
	    value: function _addInitialSubscribersToEvents() {
	      if (this.eventSubscriptions && this.eventSubscriptions.length > 0) {
	        this._subscribeToEvents(this.eventSubscriptions);
	      }
	    }
	  }, {
	    key: '_subscribeToEvents',
	    value: function _subscribeToEvents(eventSubscriptions) {
	      eventSubscriptions.forEach(function (subscription) {
	        this.subscribeToEvent(subscription.event, subscription.callback);
	      }.bind(this));
	    }
	  }, {
	    key: '_initCrossComponents',
	    value: function _initCrossComponents() {
	      // Cross components case: creates a cardboard template
	      var crossContainer = this.TemplateManager.create(this.crossContainerId, {
	        tagName: 'div'
	      });
	      document.body.appendChild(crossContainer.node);
	    }
	  }, {
	    key: '_initDependencies',
	    value: function _initDependencies(dependencies) {
	      dependencies = _extends({
	        ComponentConnector: _componentConnector2.default,
	        DomManager: _dom2.default,
	        ImportManager: _import2.default,
	        PageManager: _page2.default,
	        TemplateManager: _template2.default,
	        Router: _router2.default,
	        Sanitizer: _sanitizer2.default,
	        BridgeChannelManager: _bridgeChannels2.default,
	        ActionChannelManager: _actionChannels2.default
	      }, dependencies);
	      for (var dependence in dependencies) {
	        if (dependencies.hasOwnProperty(dependence)) {
	          this[dependence] = new dependencies[dependence](this);
	        }
	      }
	    }
	  }, {
	    key: '_createCellsComponent',
	    value: function _createCellsComponent(spec, context) {
	      return new _component2.default(spec, context);
	    }
	  }, {
	    key: 'createCCComponent',
	    value: function createCCComponent(spec) {
	      var container = this.TemplateManager.get(this.crossContainerId);
	      var node = container.node.querySelector(spec.tagName);
	      if (!node) {
	        var cmp = this._createCellsComponent(spec, this);
	        cmp.__parentTemplate = container;
	        this.ComponentConnector.register(cmp.node, cmp.spec.connections);
	        return cmp;
	      } else {
	        this.ComponentConnector.progressiveRegister(node, spec.connections);
	      }
	    }
	  }, {
	    key: 'createUIComponent',
	    value: function createUIComponent(spec) {
	      var bindingType = this.binding;
	      var cmp = this._createCellsComponent(spec, this);
	      if (bindingType === 'always' || bindingType === 'delayed' || bindingType === 'ui') {
	        this.ComponentConnector.register(cmp.node, cmp.connections);
	      }
	      return cmp;
	    }
	  }, {
	    key: 'createDMComponent',
	    value: function createDMComponent(spec) {
	      var bindingType = this.binding;
	      var cmp = this._createCellsComponent(spec, this);
	      if (bindingType === 'always' || bindingType === 'delayed') {
	        this.ComponentConnector.register(cmp.node, cmp.connections);
	      }
	      return cmp;
	    }
	  }, {
	    key: '_createLocalComponent',
	    value: function _createLocalComponent(type, items, template) {
	      var collection = [];
	      for (var i = 0, l = items.length; i < l; i++) {
	        var spec = items[i];
	        var cmp = this['create' + type + 'Component'](spec);
	        if (cmp) {
	          cmp.__parentTemplate = cmp.__parentTemplate || template;
	          collection.push(cmp);
	        }
	      }
	      return collection;
	    }
	  }, {
	    key: 'createComponentsByType',
	    value: function createComponentsByType(collection, template) {
	      var itemsToInject = [];
	      var sortedList = ['CC', 'UI', 'DM'];
	      for (var j = 0, k = sortedList.length; j < k; j++) {
	        var type = sortedList[j];
	        var items = collection[type];
	        itemsToInject = itemsToInject.concat(this._createLocalComponent(type, items, template));
	      }
	      return itemsToInject;
	    }
	  }, {
	    key: '_createComponents',
	    value: function _createComponents(response, template) {
	      var isPreRendering = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	      var options = this;
	      var collection = this.Sanitizer.split(response.components);
	      var components = this.createComponentsByType(collection, template);
	      var unresolvedComponents = [];
	      var templateParents = [];
	
	      for (var i = 0, l = components.length; i < l; i++) {
	        // 9. Sets default attributes
	        components[i].setProps();
	        var component = components[i];
	        var parentName = component.__parentTemplate.name;
	        if (!templateParents[parentName]) {
	          templateParents[parentName] = this.TemplateManager.get(parentName);
	        }
	        // 9.1 Append components to template
	        templateParents[parentName].append(component);
	
	        if (component.isUnresolved()) {
	          unresolvedComponents.push(component);
	        }
	      }
	      _events2.default.emit('page-ready');
	      this.ImportManager.loadComponent(unresolvedComponents, this.selectTemplate.bind(this, response.page, isPreRendering), options.componentsPath);
	    }
	  }, {
	    key: 'loadTemplate',
	    value: function loadTemplate(name, params) {
	      var options = this;
	      return this.PageManager.get(name, {
	        cache: options.cache,
	        params: params,
	        method: options.method,
	        body: options.body,
	        headers: options.headers
	      }, {
	        app: this.app,
	        templates: this.templatesPath
	      });
	    }
	  }, {
	    key: 'createTemplate',
	    value: function createTemplate(response) {
	      var isPreRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      var spec = response;
	      var name = response.page;
	      var node = this.TemplateManager.getNode(name);
	      this.BridgeChannelManager.getPrivate(name);
	      // Template is cached
	      if (node && !node.invalidate) {
	        this.selectTemplate(name, isPreRendering);
	      } else {
	        if (node) {
	          node.invalidate = false;
	        }
	        // Template not cached and has definition
	        if (spec && spec.template) {
	          if (this.prplLevel > 0) {
	            this.ImportManager.loadBundleForTemplate(this.componentsPath, name, this._createTemplateFromSpec.bind(this, name, spec, isPreRendering));
	          } else {
	            this._createTemplateFromSpec(name, spec, isPreRendering);
	          }
	        }
	      }
	      this._preRender(response, isPreRendering);
	    }
	  }, {
	    key: '_preRender',
	    value: function _preRender(response, isPreRendering) {
	      if (this.preCache === true && response.pages) {
	        for (var page in response.pages) {
	          var pageAlreadyLoaded = page === name || this.TemplateManager.cache[page];
	          if (pageAlreadyLoaded) {
	            continue;
	          }
	          this.loadTemplate(page).then(function (templateResponse) {
	            if (this.preRender) {
	              if (isPreRendering === false) {
	                var doPreRender = true;
	                if (templateResponse.page) {
	                  var create = this.createTemplate.bind(this, templateResponse, doPreRender);
	                  this._idleCallback(create);
	                } else {
	                  console.warn('Missing page. ', templateResponse);
	                }
	              }
	            }
	          }.bind(this));
	        }
	      }
	    }
	  }, {
	    key: '_createTemplateFromSpec',
	    value: function _createTemplateFromSpec(name, spec) {
	      var isPreRendering = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	      // 4. Creates the new template
	      var template = this.TemplateManager.create(name, spec.template);
	      this.ComponentConnector.register(template.node, template.connections);
	      // Add new routes in router
	      if (spec.pages) {
	        this.Router.addRoutes(spec.pages);
	      }
	      // 5. Import it when doesn't exists
	      if (template.isUnresolved()) {
	        this.ImportManager.loadComponent(template, this._createComponents.bind(this, spec, template, isPreRendering), this.componentsPath);
	      } else {
	        this._createComponents.call(this, spec, template, isPreRendering);
	      }
	    }
	
	    /**
	     * Id for template node
	     *
	     * @param  {String} name Template name
	     *
	     * @return {String}
	     */
	
	  }, {
	    key: 'parseTemplateId',
	    value: function parseTemplateId(name) {
	      return 'cells-template-' + name.replace(/\./g, '-');
	    }
	  }, {
	    key: 'parse',
	    value: function parse(name, value) {
	      name = (0, _string2.default)('parse-' + name).camelize().s;
	      return typeof this[name] === 'function' ? this[name](value) : value;
	    }
	  }, {
	    key: 'printDebugInfo',
	    value: function printDebugInfo() {
	      var getColor = function getColor(option, color) {
	        var hexColor = option ? color : '#b0bec5';
	        return 'background:' + hexColor + '; color:#fff; padding:2px 4px; margin-right: 5px;';
	      };
	      console.log('%cbridge version: ' + this.version + ' %cbinding: ' + this.binding + ' %ccache: ' + this.cache + ' %cpreCache: ' + this.preCache + ' %cpreRender: ' + this.preRender, getColor(this.version, '#003f8d'), getColor(this.binding, '#0065ba'), getColor(this.cache, '#0093e2'), getColor(this.preCache, '#00aeeb'), getColor(this.preRender, '#41cef8') //#00aeeb
	      );
	
	      if (this.id > 0) {
	        console.log('%cWARNING: There are ' + (this.id + 1) + ' simultaneous instances of the Bridge running.', getColor(this.id, '#FF0000'));
	      }
	    }
	  }, {
	    key: 'routeHandler',
	    value: function routeHandler() {
	      var route = this.Router.currentRoute;
	
	      // route = this.parse('route', route);
	      _events2.default.emit('parse-route', route);
	      // 2. Load a new page when route changes
	      this.loadTemplate(route.name, route.params).then(this.createTemplate.bind(this));
	      // 3. Publish URL params to global params.
	      for (var param in route.params) {
	        if (route.params.hasOwnProperty(param)) {
	          var eventData = {
	            detail: {
	              value: route.params[param]
	            },
	            type: (0, _string2.default)(param).dasherize().s + '-changed'
	          };
	
	          this.ComponentConnector.manager.get(param).next(eventData);
	        }
	      }
	    }
	  }, {
	    key: 'registerCurrentTemplate',
	    value: function registerCurrentTemplate(currentTemplate, previousTemplate) {
	      var options = this;
	      this.registerChildren(currentTemplate, options.binding === 'ui' ? 'DM' : null);
	      if (previousTemplate && previousTemplate !== currentTemplate) {
	        this.unregisterChildren(previousTemplate, options.binding === 'ui' ? 'DM' : null);
	      }
	      if (this.BridgeChannelManager) {
	        var oldName = previousTemplate ? previousTemplate.name : undefined;
	        this.BridgeChannelManager.updateAppContext(oldName, currentTemplate.name);
	        this.BridgeChannelManager.initPrivateChannel(oldName, currentTemplate.name);
	      }
	      _events2.default.emit('template-registered', { template: currentTemplate.name });
	    }
	  }, {
	    key: 'registerChildren',
	    value: function registerChildren(template, type) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = template.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var component = _step.value;
	
	          if (type && type === component.type || !type) {
	            this.ComponentConnector.register(component.node, component.connections);
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
	    }
	  }, {
	    key: 'unregisterChildren',
	    value: function unregisterChildren(template, type) {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = template.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var component = _step2.value;
	
	          if (type && type === component.type || !type) {
	            this.ComponentConnector.unregister(component.node);
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
	  }, {
	    key: 'selectTemplate',
	    value: function selectTemplate(name) {
	      var isPreRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      var options = this;
	      var template = this.TemplateManager.get(name);
	      if ((options.binding === 'currentview' || options.binding === 'ui') && isPreRendering !== true) {
	        var onTemplateAnimationFinishes = this.registerCurrentTemplate.bind(this, template, this.TemplateManager.get(this.TemplateManager.selected));
	        if (template.node.animationCompleteEvent) {
	          _events2.default.listenToOnce(template.node, template.node.animationCompleteEvent, onTemplateAnimationFinishes);
	        } else {
	          _events2.default.once('template-transition-end', onTemplateAnimationFinishes);
	        }
	      }
	      if (options.onRender) {
	        if (template.fixedChildren.length > 0) {
	          options.onRender(template.node, template.fixedChildren);
	        } else {
	          options.onRender(template.node);
	        }
	      }
	      // 10. Shows the template created
	      if (isPreRendering !== true) {
	        var animateTemplate = this.TemplateManager.select.bind(this.TemplateManager, name, this.BridgeChannelManager, options.binding);
	        if (options.binding === 'delayed') {
	          this._idleCallback(animateTemplate);
	        } else {
	          animateTemplate();
	        }
	      }
	    }
	  }, {
	    key: '_idleCallback',
	    value: function _idleCallback(fn) {
	      this.BridgeChannelManager.getIdleCallbackChannel().first().subscribe(fn);
	    }
	
	    /**
	     *
	     * It subscribe the main node to an event channel.
	     *
	     * @param {*} eventName is the name of the event to subscribe
	     * @param {*} callback is the function to call when the event channel is activated with a new value
	     */
	
	  }, {
	    key: 'subscribeToEvent',
	    value: function subscribeToEvent(eventName, callback) {
	      if (this.externalEvents.indexOf(eventName) < 0) {
	        console.warn('Trying to subscribe to a non existing event: ', eventName);
	        return;
	      }
	      if (typeof callback !== 'function') {
	        console.warn('You must provide a function callback to subscribe to the event: ', eventName);
	        return;
	      }
	      var mainNode = this.getMainNode();
	      this.BridgeChannelManager.subscribeToEvent(mainNode, eventName, callback);
	    }
	  }, {
	    key: 'getMainNode',
	    value: function getMainNode() {
	      return document.querySelector('#' + this.mainNode);
	    }
	  }, {
	    key: '_resetBridgeChannels',
	    value: function _resetBridgeChannels() {
	      this.BridgeChannelManager.resetBridgeChannels(this.getMainNode());
	    }
	
	    /**
	     *
	     * Performs a logout action. It resets all channels, removes templates from DOM
	     * and redirects to the initial page
	     *
	     */
	
	  }, {
	    key: 'logout',
	    value: function logout() {
	
	      if (this.TemplateManager.selected === this.initialTemplate) {
	        return;
	      }
	
	      var removeTemplates = function () {
	        this.TemplateManager.removeTemplates(this.initialTemplate, this.crossContainerId);
	      }.bind(this);
	
	      var removeCrossComponents = function () {
	        this.TemplateManager.removeTemplateChildrens(this.crossContainerId);
	      }.bind(this);
	
	      var removeInitialTemplateToForceFreshLoadingAndCCRegistration = function () {
	        this.TemplateManager.removeTemplate(this.initialTemplate);
	      }.bind(this);
	
	      this._resetBridgeChannels();
	      removeCrossComponents();
	      removeInitialTemplateToForceFreshLoadingAndCCRegistration();
	      _events2.default.once('template-registered', removeTemplates);
	      this._addInitialSubscribersToEvents();
	      this.Router.go(this.initialTemplate);
	    }
	  }]);
	
	  return CellsBridge;
	}();
	
	exports.default = CellsBridge;

/***/ }),
/* 3 */
/*!********************************!*\
  !*** ./~/string/lib/string.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*
	string.js - Copyright (C) 2012-2014, JP Richardson <jprichardson@gmail.com>
	*/
	
	!function () {
	  "use strict";
	
	  var VERSION = '3.3.3';
	
	  var ENTITIES = {};
	
	  // from http://semplicewebsites.com/removing-accents-javascript
	  var latin_map = { "Á": "A", "Ă": "A", "Ắ": "A", "Ặ": "A", "Ằ": "A", "Ẳ": "A", "Ẵ": "A", "Ǎ": "A", "Â": "A", "Ấ": "A", "Ậ": "A", "Ầ": "A", "Ẩ": "A", "Ẫ": "A", "Ä": "A", "Ǟ": "A", "Ȧ": "A", "Ǡ": "A", "Ạ": "A", "Ȁ": "A", "À": "A", "Ả": "A", "Ȃ": "A", "Ā": "A", "Ą": "A", "Å": "A", "Ǻ": "A", "Ḁ": "A", "Ⱥ": "A", "Ã": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ḃ": "B", "Ḅ": "B", "Ɓ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ć": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ĉ": "C", "Ċ": "C", "Ƈ": "C", "Ȼ": "C", "Ď": "D", "Ḑ": "D", "Ḓ": "D", "Ḋ": "D", "Ḍ": "D", "Ɗ": "D", "Ḏ": "D", "ǲ": "D", "ǅ": "D", "Đ": "D", "Ƌ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "É": "E", "Ĕ": "E", "Ě": "E", "Ȩ": "E", "Ḝ": "E", "Ê": "E", "Ế": "E", "Ệ": "E", "Ề": "E", "Ể": "E", "Ễ": "E", "Ḙ": "E", "Ë": "E", "Ė": "E", "Ẹ": "E", "Ȅ": "E", "È": "E", "Ẻ": "E", "Ȇ": "E", "Ē": "E", "Ḗ": "E", "Ḕ": "E", "Ę": "E", "Ɇ": "E", "Ẽ": "E", "Ḛ": "E", "Ꝫ": "ET", "Ḟ": "F", "Ƒ": "F", "Ǵ": "G", "Ğ": "G", "Ǧ": "G", "Ģ": "G", "Ĝ": "G", "Ġ": "G", "Ɠ": "G", "Ḡ": "G", "Ǥ": "G", "Ḫ": "H", "Ȟ": "H", "Ḩ": "H", "Ĥ": "H", "Ⱨ": "H", "Ḧ": "H", "Ḣ": "H", "Ḥ": "H", "Ħ": "H", "Í": "I", "Ĭ": "I", "Ǐ": "I", "Î": "I", "Ï": "I", "Ḯ": "I", "İ": "I", "Ị": "I", "Ȉ": "I", "Ì": "I", "Ỉ": "I", "Ȋ": "I", "Ī": "I", "Į": "I", "Ɨ": "I", "Ĩ": "I", "Ḭ": "I", "Ꝺ": "D", "Ꝼ": "F", "Ᵹ": "G", "Ꞃ": "R", "Ꞅ": "S", "Ꞇ": "T", "Ꝭ": "IS", "Ĵ": "J", "Ɉ": "J", "Ḱ": "K", "Ǩ": "K", "Ķ": "K", "Ⱪ": "K", "Ꝃ": "K", "Ḳ": "K", "Ƙ": "K", "Ḵ": "K", "Ꝁ": "K", "Ꝅ": "K", "Ĺ": "L", "Ƚ": "L", "Ľ": "L", "Ļ": "L", "Ḽ": "L", "Ḷ": "L", "Ḹ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ḻ": "L", "Ŀ": "L", "Ɫ": "L", "ǈ": "L", "Ł": "L", "Ǉ": "LJ", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ń": "N", "Ň": "N", "Ņ": "N", "Ṋ": "N", "Ṅ": "N", "Ṇ": "N", "Ǹ": "N", "Ɲ": "N", "Ṉ": "N", "Ƞ": "N", "ǋ": "N", "Ñ": "N", "Ǌ": "NJ", "Ó": "O", "Ŏ": "O", "Ǒ": "O", "Ô": "O", "Ố": "O", "Ộ": "O", "Ồ": "O", "Ổ": "O", "Ỗ": "O", "Ö": "O", "Ȫ": "O", "Ȯ": "O", "Ȱ": "O", "Ọ": "O", "Ő": "O", "Ȍ": "O", "Ò": "O", "Ỏ": "O", "Ơ": "O", "Ớ": "O", "Ợ": "O", "Ờ": "O", "Ở": "O", "Ỡ": "O", "Ȏ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ō": "O", "Ṓ": "O", "Ṑ": "O", "Ɵ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Õ": "O", "Ṍ": "O", "Ṏ": "O", "Ȭ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ɛ": "E", "Ɔ": "O", "Ȣ": "OU", "Ṕ": "P", "Ṗ": "P", "Ꝓ": "P", "Ƥ": "P", "Ꝕ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝙ": "Q", "Ꝗ": "Q", "Ŕ": "R", "Ř": "R", "Ŗ": "R", "Ṙ": "R", "Ṛ": "R", "Ṝ": "R", "Ȑ": "R", "Ȓ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꜿ": "C", "Ǝ": "E", "Ś": "S", "Ṥ": "S", "Š": "S", "Ṧ": "S", "Ş": "S", "Ŝ": "S", "Ș": "S", "Ṡ": "S", "Ṣ": "S", "Ṩ": "S", "ẞ": "SS", "Ť": "T", "Ţ": "T", "Ṱ": "T", "Ț": "T", "Ⱦ": "T", "Ṫ": "T", "Ṭ": "T", "Ƭ": "T", "Ṯ": "T", "Ʈ": "T", "Ŧ": "T", "Ɐ": "A", "Ꞁ": "L", "Ɯ": "M", "Ʌ": "V", "Ꜩ": "TZ", "Ú": "U", "Ŭ": "U", "Ǔ": "U", "Û": "U", "Ṷ": "U", "Ü": "U", "Ǘ": "U", "Ǚ": "U", "Ǜ": "U", "Ǖ": "U", "Ṳ": "U", "Ụ": "U", "Ű": "U", "Ȕ": "U", "Ù": "U", "Ủ": "U", "Ư": "U", "Ứ": "U", "Ự": "U", "Ừ": "U", "Ử": "U", "Ữ": "U", "Ȗ": "U", "Ū": "U", "Ṻ": "U", "Ų": "U", "Ů": "U", "Ũ": "U", "Ṹ": "U", "Ṵ": "U", "Ꝟ": "V", "Ṿ": "V", "Ʋ": "V", "Ṽ": "V", "Ꝡ": "VY", "Ẃ": "W", "Ŵ": "W", "Ẅ": "W", "Ẇ": "W", "Ẉ": "W", "Ẁ": "W", "Ⱳ": "W", "Ẍ": "X", "Ẋ": "X", "Ý": "Y", "Ŷ": "Y", "Ÿ": "Y", "Ẏ": "Y", "Ỵ": "Y", "Ỳ": "Y", "Ƴ": "Y", "Ỷ": "Y", "Ỿ": "Y", "Ȳ": "Y", "Ɏ": "Y", "Ỹ": "Y", "Ź": "Z", "Ž": "Z", "Ẑ": "Z", "Ⱬ": "Z", "Ż": "Z", "Ẓ": "Z", "Ȥ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ĳ": "IJ", "Œ": "OE", "ᴀ": "A", "ᴁ": "AE", "ʙ": "B", "ᴃ": "B", "ᴄ": "C", "ᴅ": "D", "ᴇ": "E", "ꜰ": "F", "ɢ": "G", "ʛ": "G", "ʜ": "H", "ɪ": "I", "ʁ": "R", "ᴊ": "J", "ᴋ": "K", "ʟ": "L", "ᴌ": "L", "ᴍ": "M", "ɴ": "N", "ᴏ": "O", "ɶ": "OE", "ᴐ": "O", "ᴕ": "OU", "ᴘ": "P", "ʀ": "R", "ᴎ": "N", "ᴙ": "R", "ꜱ": "S", "ᴛ": "T", "ⱻ": "E", "ᴚ": "R", "ᴜ": "U", "ᴠ": "V", "ᴡ": "W", "ʏ": "Y", "ᴢ": "Z", "á": "a", "ă": "a", "ắ": "a", "ặ": "a", "ằ": "a", "ẳ": "a", "ẵ": "a", "ǎ": "a", "â": "a", "ấ": "a", "ậ": "a", "ầ": "a", "ẩ": "a", "ẫ": "a", "ä": "a", "ǟ": "a", "ȧ": "a", "ǡ": "a", "ạ": "a", "ȁ": "a", "à": "a", "ả": "a", "ȃ": "a", "ā": "a", "ą": "a", "ᶏ": "a", "ẚ": "a", "å": "a", "ǻ": "a", "ḁ": "a", "ⱥ": "a", "ã": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ḃ": "b", "ḅ": "b", "ɓ": "b", "ḇ": "b", "ᵬ": "b", "ᶀ": "b", "ƀ": "b", "ƃ": "b", "ɵ": "o", "ć": "c", "č": "c", "ç": "c", "ḉ": "c", "ĉ": "c", "ɕ": "c", "ċ": "c", "ƈ": "c", "ȼ": "c", "ď": "d", "ḑ": "d", "ḓ": "d", "ȡ": "d", "ḋ": "d", "ḍ": "d", "ɗ": "d", "ᶑ": "d", "ḏ": "d", "ᵭ": "d", "ᶁ": "d", "đ": "d", "ɖ": "d", "ƌ": "d", "ı": "i", "ȷ": "j", "ɟ": "j", "ʄ": "j", "ǳ": "dz", "ǆ": "dz", "é": "e", "ĕ": "e", "ě": "e", "ȩ": "e", "ḝ": "e", "ê": "e", "ế": "e", "ệ": "e", "ề": "e", "ể": "e", "ễ": "e", "ḙ": "e", "ë": "e", "ė": "e", "ẹ": "e", "ȅ": "e", "è": "e", "ẻ": "e", "ȇ": "e", "ē": "e", "ḗ": "e", "ḕ": "e", "ⱸ": "e", "ę": "e", "ᶒ": "e", "ɇ": "e", "ẽ": "e", "ḛ": "e", "ꝫ": "et", "ḟ": "f", "ƒ": "f", "ᵮ": "f", "ᶂ": "f", "ǵ": "g", "ğ": "g", "ǧ": "g", "ģ": "g", "ĝ": "g", "ġ": "g", "ɠ": "g", "ḡ": "g", "ᶃ": "g", "ǥ": "g", "ḫ": "h", "ȟ": "h", "ḩ": "h", "ĥ": "h", "ⱨ": "h", "ḧ": "h", "ḣ": "h", "ḥ": "h", "ɦ": "h", "ẖ": "h", "ħ": "h", "ƕ": "hv", "í": "i", "ĭ": "i", "ǐ": "i", "î": "i", "ï": "i", "ḯ": "i", "ị": "i", "ȉ": "i", "ì": "i", "ỉ": "i", "ȋ": "i", "ī": "i", "į": "i", "ᶖ": "i", "ɨ": "i", "ĩ": "i", "ḭ": "i", "ꝺ": "d", "ꝼ": "f", "ᵹ": "g", "ꞃ": "r", "ꞅ": "s", "ꞇ": "t", "ꝭ": "is", "ǰ": "j", "ĵ": "j", "ʝ": "j", "ɉ": "j", "ḱ": "k", "ǩ": "k", "ķ": "k", "ⱪ": "k", "ꝃ": "k", "ḳ": "k", "ƙ": "k", "ḵ": "k", "ᶄ": "k", "ꝁ": "k", "ꝅ": "k", "ĺ": "l", "ƚ": "l", "ɬ": "l", "ľ": "l", "ļ": "l", "ḽ": "l", "ȴ": "l", "ḷ": "l", "ḹ": "l", "ⱡ": "l", "ꝉ": "l", "ḻ": "l", "ŀ": "l", "ɫ": "l", "ᶅ": "l", "ɭ": "l", "ł": "l", "ǉ": "lj", "ſ": "s", "ẜ": "s", "ẛ": "s", "ẝ": "s", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ᵯ": "m", "ᶆ": "m", "ń": "n", "ň": "n", "ņ": "n", "ṋ": "n", "ȵ": "n", "ṅ": "n", "ṇ": "n", "ǹ": "n", "ɲ": "n", "ṉ": "n", "ƞ": "n", "ᵰ": "n", "ᶇ": "n", "ɳ": "n", "ñ": "n", "ǌ": "nj", "ó": "o", "ŏ": "o", "ǒ": "o", "ô": "o", "ố": "o", "ộ": "o", "ồ": "o", "ổ": "o", "ỗ": "o", "ö": "o", "ȫ": "o", "ȯ": "o", "ȱ": "o", "ọ": "o", "ő": "o", "ȍ": "o", "ò": "o", "ỏ": "o", "ơ": "o", "ớ": "o", "ợ": "o", "ờ": "o", "ở": "o", "ỡ": "o", "ȏ": "o", "ꝋ": "o", "ꝍ": "o", "ⱺ": "o", "ō": "o", "ṓ": "o", "ṑ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "õ": "o", "ṍ": "o", "ṏ": "o", "ȭ": "o", "ƣ": "oi", "ꝏ": "oo", "ɛ": "e", "ᶓ": "e", "ɔ": "o", "ᶗ": "o", "ȣ": "ou", "ṕ": "p", "ṗ": "p", "ꝓ": "p", "ƥ": "p", "ᵱ": "p", "ᶈ": "p", "ꝕ": "p", "ᵽ": "p", "ꝑ": "p", "ꝙ": "q", "ʠ": "q", "ɋ": "q", "ꝗ": "q", "ŕ": "r", "ř": "r", "ŗ": "r", "ṙ": "r", "ṛ": "r", "ṝ": "r", "ȑ": "r", "ɾ": "r", "ᵳ": "r", "ȓ": "r", "ṟ": "r", "ɼ": "r", "ᵲ": "r", "ᶉ": "r", "ɍ": "r", "ɽ": "r", "ↄ": "c", "ꜿ": "c", "ɘ": "e", "ɿ": "r", "ś": "s", "ṥ": "s", "š": "s", "ṧ": "s", "ş": "s", "ŝ": "s", "ș": "s", "ṡ": "s", "ṣ": "s", "ṩ": "s", "ʂ": "s", "ᵴ": "s", "ᶊ": "s", "ȿ": "s", "ɡ": "g", "ß": "ss", "ᴑ": "o", "ᴓ": "o", "ᴝ": "u", "ť": "t", "ţ": "t", "ṱ": "t", "ț": "t", "ȶ": "t", "ẗ": "t", "ⱦ": "t", "ṫ": "t", "ṭ": "t", "ƭ": "t", "ṯ": "t", "ᵵ": "t", "ƫ": "t", "ʈ": "t", "ŧ": "t", "ᵺ": "th", "ɐ": "a", "ᴂ": "ae", "ǝ": "e", "ᵷ": "g", "ɥ": "h", "ʮ": "h", "ʯ": "h", "ᴉ": "i", "ʞ": "k", "ꞁ": "l", "ɯ": "m", "ɰ": "m", "ᴔ": "oe", "ɹ": "r", "ɻ": "r", "ɺ": "r", "ⱹ": "r", "ʇ": "t", "ʌ": "v", "ʍ": "w", "ʎ": "y", "ꜩ": "tz", "ú": "u", "ŭ": "u", "ǔ": "u", "û": "u", "ṷ": "u", "ü": "u", "ǘ": "u", "ǚ": "u", "ǜ": "u", "ǖ": "u", "ṳ": "u", "ụ": "u", "ű": "u", "ȕ": "u", "ù": "u", "ủ": "u", "ư": "u", "ứ": "u", "ự": "u", "ừ": "u", "ử": "u", "ữ": "u", "ȗ": "u", "ū": "u", "ṻ": "u", "ų": "u", "ᶙ": "u", "ů": "u", "ũ": "u", "ṹ": "u", "ṵ": "u", "ᵫ": "ue", "ꝸ": "um", "ⱴ": "v", "ꝟ": "v", "ṿ": "v", "ʋ": "v", "ᶌ": "v", "ⱱ": "v", "ṽ": "v", "ꝡ": "vy", "ẃ": "w", "ŵ": "w", "ẅ": "w", "ẇ": "w", "ẉ": "w", "ẁ": "w", "ⱳ": "w", "ẘ": "w", "ẍ": "x", "ẋ": "x", "ᶍ": "x", "ý": "y", "ŷ": "y", "ÿ": "y", "ẏ": "y", "ỵ": "y", "ỳ": "y", "ƴ": "y", "ỷ": "y", "ỿ": "y", "ȳ": "y", "ẙ": "y", "ɏ": "y", "ỹ": "y", "ź": "z", "ž": "z", "ẑ": "z", "ʑ": "z", "ⱬ": "z", "ż": "z", "ẓ": "z", "ȥ": "z", "ẕ": "z", "ᵶ": "z", "ᶎ": "z", "ʐ": "z", "ƶ": "z", "ɀ": "z", "ﬀ": "ff", "ﬃ": "ffi", "ﬄ": "ffl", "ﬁ": "fi", "ﬂ": "fl", "ĳ": "ij", "œ": "oe", "ﬆ": "st", "ₐ": "a", "ₑ": "e", "ᵢ": "i", "ⱼ": "j", "ₒ": "o", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "ₓ": "x" };
	
	  //******************************************************************************
	  // Added an initialize function which is essentially the code from the S
	  // constructor.  Now, the S constructor calls this and a new method named
	  // setValue calls it as well.  The setValue function allows constructors for
	  // modules that extend string.js to set the initial value of an object without
	  // knowing the internal workings of string.js.
	  //
	  // Also, all methods which return a new S object now call:
	  //
	  //      return new this.constructor(s);
	  //
	  // instead of:
	  //
	  //      return new S(s);
	  //
	  // This allows extended objects to keep their proper instanceOf and constructor.
	  //******************************************************************************
	
	  function initialize(object, s) {
	    if (s !== null && s !== undefined) {
	      if (typeof s === 'string') object.s = s;else object.s = s.toString();
	    } else {
	      object.s = s; //null or undefined
	    }
	
	    object.orig = s; //original object, currently only used by toCSV() and toBoolean()
	
	    if (s !== null && s !== undefined) {
	      if (object.__defineGetter__) {
	        object.__defineGetter__('length', function () {
	          return object.s.length;
	        });
	      } else {
	        object.length = s.length;
	      }
	    } else {
	      object.length = -1;
	    }
	  }
	
	  function S(s) {
	    initialize(this, s);
	  }
	
	  var __nsp = String.prototype;
	  var __sp = S.prototype = {
	
	    between: function between(left, right) {
	      var s = this.s;
	      var startPos = s.indexOf(left);
	      var endPos = s.indexOf(right, startPos + left.length);
	      if (endPos == -1 && right != null) return new this.constructor('');else if (endPos == -1 && right == null) return new this.constructor(s.substring(startPos + left.length));else return new this.constructor(s.slice(startPos + left.length, endPos));
	    },
	
	    //# modified slightly from https://github.com/epeli/underscore.string
	    camelize: function camelize() {
	      var s = this.trim().s.replace(/(\-|_|\s)+(.)?/g, function (mathc, sep, c) {
	        return c ? c.toUpperCase() : '';
	      });
	      return new this.constructor(s);
	    },
	
	    capitalize: function capitalize() {
	      return new this.constructor(this.s.substr(0, 1).toUpperCase() + this.s.substring(1).toLowerCase());
	    },
	
	    charAt: function charAt(index) {
	      return this.s.charAt(index);
	    },
	
	    chompLeft: function chompLeft(prefix) {
	      var s = this.s;
	      if (s.indexOf(prefix) === 0) {
	        s = s.slice(prefix.length);
	        return new this.constructor(s);
	      } else {
	        return this;
	      }
	    },
	
	    chompRight: function chompRight(suffix) {
	      if (this.endsWith(suffix)) {
	        var s = this.s;
	        s = s.slice(0, s.length - suffix.length);
	        return new this.constructor(s);
	      } else {
	        return this;
	      }
	    },
	
	    //#thanks Google
	    collapseWhitespace: function collapseWhitespace() {
	      var s = this.s.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
	      return new this.constructor(s);
	    },
	
	    contains: function contains(ss) {
	      return this.s.indexOf(ss) >= 0;
	    },
	
	    count: function count(ss) {
	      return __webpack_require__(/*! ./_count */ 4)(this.s, ss);
	    },
	
	    //#modified from https://github.com/epeli/underscore.string
	    dasherize: function dasherize() {
	      var s = this.trim().s.replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
	      return new this.constructor(s);
	    },
	
	    equalsIgnoreCase: function equalsIgnoreCase(prefix) {
	      var s = this.s;
	      return s.toLowerCase() == prefix.toLowerCase();
	    },
	
	    latinise: function latinise() {
	      var s = this.replace(/[^A-Za-z0-9\[\] ]/g, function (x) {
	        return latin_map[x] || x;
	      });
	      return new this.constructor(s);
	    },
	
	    decodeHtmlEntities: function decodeHtmlEntities() {
	      //https://github.com/substack/node-ent/blob/master/index.js
	      var s = this.s;
	      s = s.replace(/&#(\d+);?/g, function (_, code) {
	        return String.fromCharCode(code);
	      }).replace(/&#[xX]([A-Fa-f0-9]+);?/g, function (_, hex) {
	        return String.fromCharCode(parseInt(hex, 16));
	      }).replace(/&([^;\W]+;?)/g, function (m, e) {
	        var ee = e.replace(/;$/, '');
	        var target = ENTITIES[e] || e.match(/;$/) && ENTITIES[ee];
	
	        if (typeof target === 'number') {
	          return String.fromCharCode(target);
	        } else if (typeof target === 'string') {
	          return target;
	        } else {
	          return m;
	        }
	      });
	
	      return new this.constructor(s);
	    },
	
	    endsWith: function endsWith() {
	      var suffixes = Array.prototype.slice.call(arguments, 0);
	      for (var i = 0; i < suffixes.length; ++i) {
	        var l = this.s.length - suffixes[i].length;
	        if (l >= 0 && this.s.indexOf(suffixes[i], l) === l) return true;
	      }
	      return false;
	    },
	
	    escapeHTML: function escapeHTML() {
	      //from underscore.string
	      return new this.constructor(this.s.replace(/[&<>"']/g, function (m) {
	        return '&' + reversedEscapeChars[m] + ';';
	      }));
	    },
	
	    ensureLeft: function ensureLeft(prefix) {
	      var s = this.s;
	      if (s.indexOf(prefix) === 0) {
	        return this;
	      } else {
	        return new this.constructor(prefix + s);
	      }
	    },
	
	    ensureRight: function ensureRight(suffix) {
	      var s = this.s;
	      if (this.endsWith(suffix)) {
	        return this;
	      } else {
	        return new this.constructor(s + suffix);
	      }
	    },
	
	    humanize: function humanize() {
	      //modified from underscore.string
	      if (this.s === null || this.s === undefined) return new this.constructor('');
	      var s = this.underscore().replace(/_id$/, '').replace(/_/g, ' ').trim().capitalize();
	      return new this.constructor(s);
	    },
	
	    isAlpha: function isAlpha() {
	      return !/[^a-z\xDF-\xFF]|^$/.test(this.s.toLowerCase());
	    },
	
	    isAlphaNumeric: function isAlphaNumeric() {
	      return !/[^0-9a-z\xDF-\xFF]/.test(this.s.toLowerCase());
	    },
	
	    isEmpty: function isEmpty() {
	      return this.s === null || this.s === undefined ? true : /^[\s\xa0]*$/.test(this.s);
	    },
	
	    isLower: function isLower() {
	      return this.isAlpha() && this.s.toLowerCase() === this.s;
	    },
	
	    isNumeric: function isNumeric() {
	      return !/[^0-9]/.test(this.s);
	    },
	
	    isUpper: function isUpper() {
	      return this.isAlpha() && this.s.toUpperCase() === this.s;
	    },
	
	    left: function left(N) {
	      if (N >= 0) {
	        var s = this.s.substr(0, N);
	        return new this.constructor(s);
	      } else {
	        return this.right(-N);
	      }
	    },
	
	    lines: function lines() {
	      //convert windows newlines to unix newlines then convert to an Array of lines
	      return this.replaceAll('\r\n', '\n').s.split('\n');
	    },
	
	    pad: function pad(len, ch) {
	      //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      len = len - this.s.length;
	      var left = Array(Math.ceil(len / 2) + 1).join(ch);
	      var right = Array(Math.floor(len / 2) + 1).join(ch);
	      return new this.constructor(left + this.s + right);
	    },
	
	    padLeft: function padLeft(len, ch) {
	      //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      return new this.constructor(Array(len - this.s.length + 1).join(ch) + this.s);
	    },
	
	    padRight: function padRight(len, ch) {
	      //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      return new this.constructor(this.s + Array(len - this.s.length + 1).join(ch));
	    },
	
	    parseCSV: function parseCSV(delimiter, qualifier, escape, lineDelimiter) {
	      //try to parse no matter what
	      delimiter = delimiter || ',';
	      escape = escape || '\\';
	      if (typeof qualifier == 'undefined') qualifier = '"';
	
	      var i = 0,
	          fieldBuffer = [],
	          fields = [],
	          len = this.s.length,
	          inField = false,
	          inUnqualifiedString = false,
	          self = this;
	      var ca = function ca(i) {
	        return self.s.charAt(i);
	      };
	      if (typeof lineDelimiter !== 'undefined') var rows = [];
	
	      if (!qualifier) inField = true;
	
	      while (i < len) {
	        var current = ca(i);
	        switch (current) {
	          case escape:
	            //fix for issues #32 and #35
	            if (inField && (escape !== qualifier || ca(i + 1) === qualifier)) {
	              i += 1;
	              fieldBuffer.push(ca(i));
	              break;
	            }
	            if (escape !== qualifier) break;
	          case qualifier:
	            inField = !inField;
	            break;
	          case delimiter:
	            if (inUnqualifiedString) {
	              inField = false;
	              inUnqualifiedString = false;
	            }
	            if (inField && qualifier) fieldBuffer.push(current);else {
	              fields.push(fieldBuffer.join(''));
	              fieldBuffer.length = 0;
	            }
	            break;
	          case lineDelimiter:
	            if (inUnqualifiedString) {
	              inField = false;
	              inUnqualifiedString = false;
	              fields.push(fieldBuffer.join(''));
	              rows.push(fields);
	              fields = [];
	              fieldBuffer.length = 0;
	            } else if (inField) {
	              fieldBuffer.push(current);
	            } else {
	              if (rows) {
	                fields.push(fieldBuffer.join(''));
	                rows.push(fields);
	                fields = [];
	                fieldBuffer.length = 0;
	              }
	            }
	            break;
	          case ' ':
	            if (inField) fieldBuffer.push(current);
	            break;
	          default:
	            if (inField) fieldBuffer.push(current);else if (current !== qualifier) {
	              fieldBuffer.push(current);
	              inField = true;
	              inUnqualifiedString = true;
	            }
	            break;
	        }
	        i += 1;
	      }
	
	      fields.push(fieldBuffer.join(''));
	      if (rows) {
	        rows.push(fields);
	        return rows;
	      }
	      return fields;
	    },
	
	    replaceAll: function replaceAll(ss, r) {
	      //var s = this.s.replace(new RegExp(ss, 'g'), r);
	      var s = this.s.split(ss).join(r);
	      return new this.constructor(s);
	    },
	
	    splitLeft: function splitLeft(sep, maxSplit, limit) {
	      return __webpack_require__(/*! ./_splitLeft */ 5)(this.s, sep, maxSplit, limit);
	    },
	
	    splitRight: function splitRight(sep, maxSplit, limit) {
	      return __webpack_require__(/*! ./_splitRight */ 6)(this.s, sep, maxSplit, limit);
	    },
	
	    strip: function strip() {
	      var ss = this.s;
	      for (var i = 0, n = arguments.length; i < n; i++) {
	        ss = ss.split(arguments[i]).join('');
	      }
	      return new this.constructor(ss);
	    },
	
	    stripLeft: function stripLeft(chars) {
	      var regex;
	      var pattern;
	      var ss = ensureString(this.s);
	
	      if (chars === undefined) {
	        pattern = /^\s+/g;
	      } else {
	        regex = escapeRegExp(chars);
	        pattern = new RegExp("^[" + regex + "]+", "g");
	      }
	
	      return new this.constructor(ss.replace(pattern, ""));
	    },
	
	    stripRight: function stripRight(chars) {
	      var regex;
	      var pattern;
	      var ss = ensureString(this.s);
	
	      if (chars === undefined) {
	        pattern = /\s+$/g;
	      } else {
	        regex = escapeRegExp(chars);
	        pattern = new RegExp("[" + regex + "]+$", "g");
	      }
	
	      return new this.constructor(ss.replace(pattern, ""));
	    },
	
	    right: function right(N) {
	      if (N >= 0) {
	        var s = this.s.substr(this.s.length - N, N);
	        return new this.constructor(s);
	      } else {
	        return this.left(-N);
	      }
	    },
	
	    setValue: function setValue(s) {
	      initialize(this, s);
	      return this;
	    },
	
	    slugify: function slugify() {
	      var sl = new S(new S(this.s).latinise().s.replace(/[^\w\s-]/g, '').toLowerCase()).dasherize().s;
	      if (sl.charAt(0) === '-') sl = sl.substr(1);
	      return new this.constructor(sl);
	    },
	
	    startsWith: function startsWith() {
	      var prefixes = Array.prototype.slice.call(arguments, 0);
	      for (var i = 0; i < prefixes.length; ++i) {
	        if (this.s.lastIndexOf(prefixes[i], 0) === 0) return true;
	      }
	      return false;
	    },
	
	    stripPunctuation: function stripPunctuation() {
	      //return new this.constructor(this.s.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""));
	      return new this.constructor(this.s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " "));
	    },
	
	    stripTags: function stripTags() {
	      //from sugar.js
	      var s = this.s,
	          args = arguments.length > 0 ? arguments : [''];
	      multiArgs(args, function (tag) {
	        s = s.replace(RegExp('<\/?' + tag + '[^<>]*>', 'gi'), '');
	      });
	      return new this.constructor(s);
	    },
	
	    template: function template(values, opening, closing) {
	      var s = this.s;
	      var opening = opening || Export.TMPL_OPEN;
	      var closing = closing || Export.TMPL_CLOSE;
	
	      var open = opening.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$');
	      var close = closing.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$');
	      var r = new RegExp(open + '(.+?)' + close, 'g');
	      //, r = /\{\{(.+?)\}\}/g
	      var matches = s.match(r) || [];
	
	      matches.forEach(function (match) {
	        var key = match.substring(opening.length, match.length - closing.length).trim(); //chop {{ and }}
	        var value = typeof values[key] == 'undefined' ? '' : values[key];
	        s = s.replace(match, value);
	      });
	      return new this.constructor(s);
	    },
	
	    times: function times(n) {
	      return new this.constructor(new Array(n + 1).join(this.s));
	    },
	
	    titleCase: function titleCase() {
	      var s = this.s;
	      if (s) {
	        s = s.replace(/(^[a-z]| [a-z]|-[a-z]|_[a-z])/g, function ($1) {
	          return $1.toUpperCase();
	        });
	      }
	      return new this.constructor(s);
	    },
	
	    toBoolean: function toBoolean() {
	      if (typeof this.orig === 'string') {
	        var s = this.s.toLowerCase();
	        return s === 'true' || s === 'yes' || s === 'on' || s === '1';
	      } else return this.orig === true || this.orig === 1;
	    },
	
	    toFloat: function toFloat(precision) {
	      var num = parseFloat(this.s);
	      if (precision) return parseFloat(num.toFixed(precision));else return num;
	    },
	
	    toInt: function toInt() {
	      //thanks Google
	      // If the string starts with '0x' or '-0x', parse as hex.
	      return (/^\s*-?0x/i.test(this.s) ? parseInt(this.s, 16) : parseInt(this.s, 10)
	      );
	    },
	
	    trim: function trim() {
	      var s;
	      if (typeof __nsp.trim === 'undefined') s = this.s.replace(/(^\s*|\s*$)/g, '');else s = this.s.trim();
	      return new this.constructor(s);
	    },
	
	    trimLeft: function trimLeft() {
	      var s;
	      if (__nsp.trimLeft) s = this.s.trimLeft();else s = this.s.replace(/(^\s*)/g, '');
	      return new this.constructor(s);
	    },
	
	    trimRight: function trimRight() {
	      var s;
	      if (__nsp.trimRight) s = this.s.trimRight();else s = this.s.replace(/\s+$/, '');
	      return new this.constructor(s);
	    },
	
	    truncate: function truncate(length, pruneStr) {
	      //from underscore.string, author: github.com/rwz
	      var str = this.s;
	
	      length = ~~length;
	      pruneStr = pruneStr || '...';
	
	      if (str.length <= length) return new this.constructor(str);
	
	      var tmpl = function tmpl(c) {
	        return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
	      },
	          template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'
	
	      if (template.slice(template.length - 2).match(/\w\w/)) template = template.replace(/\s*\S+$/, '');else template = new S(template.slice(0, template.length - 1)).trimRight().s;
	
	      return (template + pruneStr).length > str.length ? new S(str) : new S(str.slice(0, template.length) + pruneStr);
	    },
	
	    toCSV: function toCSV() {
	      var delim = ',',
	          qualifier = '"',
	          escape = '\\',
	          encloseNumbers = true,
	          keys = false;
	      var dataArray = [];
	
	      function hasVal(it) {
	        return it !== null && it !== '';
	      }
	
	      if (_typeof(arguments[0]) === 'object') {
	        delim = arguments[0].delimiter || delim;
	        delim = arguments[0].separator || delim;
	        qualifier = arguments[0].qualifier || qualifier;
	        encloseNumbers = !!arguments[0].encloseNumbers;
	        escape = arguments[0].escape || escape;
	        keys = !!arguments[0].keys;
	      } else if (typeof arguments[0] === 'string') {
	        delim = arguments[0];
	      }
	
	      if (typeof arguments[1] === 'string') qualifier = arguments[1];
	
	      if (arguments[1] === null) qualifier = null;
	
	      if (this.orig instanceof Array) dataArray = this.orig;else {
	        //object
	        for (var key in this.orig) {
	          if (this.orig.hasOwnProperty(key)) if (keys) dataArray.push(key);else dataArray.push(this.orig[key]);
	        }
	      }
	
	      var rep = escape + qualifier;
	      var buildString = [];
	      for (var i = 0; i < dataArray.length; ++i) {
	        var shouldQualify = hasVal(qualifier);
	        if (typeof dataArray[i] == 'number') shouldQualify &= encloseNumbers;
	
	        if (shouldQualify) buildString.push(qualifier);
	
	        if (dataArray[i] !== null && dataArray[i] !== undefined) {
	          var d = new S(dataArray[i]).replaceAll(qualifier, rep).s;
	          buildString.push(d);
	        } else buildString.push('');
	
	        if (shouldQualify) buildString.push(qualifier);
	
	        if (delim) buildString.push(delim);
	      }
	
	      //chop last delim
	      //console.log(buildString.length)
	      buildString.length = buildString.length - 1;
	      return new this.constructor(buildString.join(''));
	    },
	
	    toString: function toString() {
	      return this.s;
	    },
	
	    //#modified from https://github.com/epeli/underscore.string
	    underscore: function underscore() {
	      var s = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/([A-Z\d]+)([A-Z][a-z])/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
	      return new this.constructor(s);
	    },
	
	    unescapeHTML: function unescapeHTML() {
	      //from underscore.string
	      return new this.constructor(this.s.replace(/\&([^;]+);/g, function (entity, entityCode) {
	        var match;
	
	        if (entityCode in escapeChars) {
	          return escapeChars[entityCode];
	        } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
	          return String.fromCharCode(parseInt(match[1], 16));
	        } else if (match = entityCode.match(/^#(\d+)$/)) {
	          return String.fromCharCode(~~match[1]);
	        } else {
	          return entity;
	        }
	      }));
	    },
	
	    valueOf: function valueOf() {
	      return this.s.valueOf();
	    },
	
	    //#Added a New Function called wrapHTML.
	    wrapHTML: function wrapHTML(tagName, tagAttrs) {
	      var s = this.s,
	          el = tagName == null ? 'span' : tagName,
	          elAttr = '',
	          wrapped = '';
	      if ((typeof tagAttrs === "undefined" ? "undefined" : _typeof(tagAttrs)) == 'object') for (var prop in tagAttrs) {
	        elAttr += ' ' + prop + '="' + new this.constructor(tagAttrs[prop]).escapeHTML() + '"';
	      }s = wrapped.concat('<', el, elAttr, '>', this, '</', el, '>');
	      return new this.constructor(s);
	    }
	  };
	
	  var methodsAdded = [];
	  function extendPrototype() {
	    for (var name in __sp) {
	      (function (name) {
	        var func = __sp[name];
	        if (!__nsp.hasOwnProperty(name)) {
	          methodsAdded.push(name);
	          __nsp[name] = function () {
	            String.prototype.s = this;
	            return func.apply(this, arguments);
	          };
	        }
	      })(name);
	    }
	  }
	
	  function restorePrototype() {
	    for (var i = 0; i < methodsAdded.length; ++i) {
	      delete String.prototype[methodsAdded[i]];
	    }methodsAdded.length = 0;
	  }
	
	  /*************************************
	  /* Attach Native JavaScript String Properties
	  /*************************************/
	
	  var nativeProperties = getNativeStringProperties();
	  for (var name in nativeProperties) {
	    (function (name) {
	      var stringProp = __nsp[name];
	      if (typeof stringProp == 'function') {
	        //console.log(stringProp)
	        if (!__sp[name]) {
	          if (nativeProperties[name] === 'string') {
	            __sp[name] = function () {
	              //console.log(name)
	              return new this.constructor(stringProp.apply(this, arguments));
	            };
	          } else {
	            __sp[name] = stringProp;
	          }
	        }
	      }
	    })(name);
	  }
	
	  /*************************************
	  /* Function Aliases
	  /*************************************/
	
	  __sp.repeat = __sp.times;
	  __sp.include = __sp.contains;
	  __sp.toInteger = __sp.toInt;
	  __sp.toBool = __sp.toBoolean;
	  __sp.decodeHTMLEntities = __sp.decodeHtmlEntities; //ensure consistent casing scheme of 'HTML'
	
	
	  //******************************************************************************
	  // Set the constructor.  Without this, string.js objects are instances of
	  // Object instead of S.
	  //******************************************************************************
	
	  __sp.constructor = S;
	
	  /*************************************
	  /* Private Functions
	  /*************************************/
	
	  function getNativeStringProperties() {
	    var names = getNativeStringPropertyNames();
	    var retObj = {};
	
	    for (var i = 0; i < names.length; ++i) {
	      var name = names[i];
	      if (name === 'to' || name === 'toEnd') continue; // get rid of the shelljs prototype messup
	      var func = __nsp[name];
	      try {
	        var type = _typeof(func.apply('teststring'));
	        retObj[name] = type;
	      } catch (e) {}
	    }
	    return retObj;
	  }
	
	  function getNativeStringPropertyNames() {
	    var results = [];
	    if (Object.getOwnPropertyNames) {
	      results = Object.getOwnPropertyNames(__nsp);
	      results.splice(results.indexOf('valueOf'), 1);
	      results.splice(results.indexOf('toString'), 1);
	      return results;
	    } else {
	      //meant for legacy cruft, this could probably be made more efficient
	      var stringNames = {};
	      var objectNames = [];
	      for (var name in String.prototype) {
	        stringNames[name] = name;
	      }for (var name in Object.prototype) {
	        delete stringNames[name];
	      } //stringNames['toString'] = 'toString'; //this was deleted with the rest of the object names
	      for (var name in stringNames) {
	        results.push(name);
	      }
	      return results;
	    }
	  }
	
	  function Export(str) {
	    return new S(str);
	  };
	
	  //attach exports to StringJSWrapper
	  Export.extendPrototype = extendPrototype;
	  Export.restorePrototype = restorePrototype;
	  Export.VERSION = VERSION;
	  Export.TMPL_OPEN = '{{';
	  Export.TMPL_CLOSE = '}}';
	  Export.ENTITIES = ENTITIES;
	
	  /*************************************
	  /* Exports
	  /*************************************/
	
	  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	    module.exports = Export;
	  } else {
	
	    if (true) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return Export;
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	      window.S = Export;
	    }
	  }
	
	  /*************************************
	  /* 3rd Party Private Functions
	  /*************************************/
	
	  //from sugar.js
	  function multiArgs(args, fn) {
	    var result = [],
	        i;
	    for (i = 0; i < args.length; i++) {
	      result.push(args[i]);
	      if (fn) fn.call(args, args[i], i);
	    }
	    return result;
	  }
	
	  //from underscore.string
	  var escapeChars = {
	    lt: '<',
	    gt: '>',
	    quot: '"',
	    apos: "'",
	    amp: '&'
	  };
	
	  function escapeRegExp(s) {
	    // most part from https://github.com/skulpt/skulpt/blob/ecaf75e69c2e539eff124b2ab45df0b01eaf2295/src/str.js#L242
	    var c;
	    var i;
	    var ret = [];
	    var re = /^[A-Za-z0-9]+$/;
	    s = ensureString(s);
	    for (i = 0; i < s.length; ++i) {
	      c = s.charAt(i);
	
	      if (re.test(c)) {
	        ret.push(c);
	      } else {
	        if (c === "\\000") {
	          ret.push("\\000");
	        } else {
	          ret.push("\\" + c);
	        }
	      }
	    }
	    return ret.join("");
	  }
	
	  function ensureString(string) {
	    return string == null ? '' : '' + string;
	  }
	
	  //from underscore.string
	  var reversedEscapeChars = {};
	  for (var key in escapeChars) {
	    reversedEscapeChars[escapeChars[key]] = key;
	  }
	
	  ENTITIES = {
	    "amp": "&",
	    "gt": ">",
	    "lt": "<",
	    "quot": "\"",
	    "apos": "'",
	    "AElig": 198,
	    "Aacute": 193,
	    "Acirc": 194,
	    "Agrave": 192,
	    "Aring": 197,
	    "Atilde": 195,
	    "Auml": 196,
	    "Ccedil": 199,
	    "ETH": 208,
	    "Eacute": 201,
	    "Ecirc": 202,
	    "Egrave": 200,
	    "Euml": 203,
	    "Iacute": 205,
	    "Icirc": 206,
	    "Igrave": 204,
	    "Iuml": 207,
	    "Ntilde": 209,
	    "Oacute": 211,
	    "Ocirc": 212,
	    "Ograve": 210,
	    "Oslash": 216,
	    "Otilde": 213,
	    "Ouml": 214,
	    "THORN": 222,
	    "Uacute": 218,
	    "Ucirc": 219,
	    "Ugrave": 217,
	    "Uuml": 220,
	    "Yacute": 221,
	    "aacute": 225,
	    "acirc": 226,
	    "aelig": 230,
	    "agrave": 224,
	    "aring": 229,
	    "atilde": 227,
	    "auml": 228,
	    "ccedil": 231,
	    "eacute": 233,
	    "ecirc": 234,
	    "egrave": 232,
	    "eth": 240,
	    "euml": 235,
	    "iacute": 237,
	    "icirc": 238,
	    "igrave": 236,
	    "iuml": 239,
	    "ntilde": 241,
	    "oacute": 243,
	    "ocirc": 244,
	    "ograve": 242,
	    "oslash": 248,
	    "otilde": 245,
	    "ouml": 246,
	    "szlig": 223,
	    "thorn": 254,
	    "uacute": 250,
	    "ucirc": 251,
	    "ugrave": 249,
	    "uuml": 252,
	    "yacute": 253,
	    "yuml": 255,
	    "copy": 169,
	    "reg": 174,
	    "nbsp": 160,
	    "iexcl": 161,
	    "cent": 162,
	    "pound": 163,
	    "curren": 164,
	    "yen": 165,
	    "brvbar": 166,
	    "sect": 167,
	    "uml": 168,
	    "ordf": 170,
	    "laquo": 171,
	    "not": 172,
	    "shy": 173,
	    "macr": 175,
	    "deg": 176,
	    "plusmn": 177,
	    "sup1": 185,
	    "sup2": 178,
	    "sup3": 179,
	    "acute": 180,
	    "micro": 181,
	    "para": 182,
	    "middot": 183,
	    "cedil": 184,
	    "ordm": 186,
	    "raquo": 187,
	    "frac14": 188,
	    "frac12": 189,
	    "frac34": 190,
	    "iquest": 191,
	    "times": 215,
	    "divide": 247,
	    "OElig;": 338,
	    "oelig;": 339,
	    "Scaron;": 352,
	    "scaron;": 353,
	    "Yuml;": 376,
	    "fnof;": 402,
	    "circ;": 710,
	    "tilde;": 732,
	    "Alpha;": 913,
	    "Beta;": 914,
	    "Gamma;": 915,
	    "Delta;": 916,
	    "Epsilon;": 917,
	    "Zeta;": 918,
	    "Eta;": 919,
	    "Theta;": 920,
	    "Iota;": 921,
	    "Kappa;": 922,
	    "Lambda;": 923,
	    "Mu;": 924,
	    "Nu;": 925,
	    "Xi;": 926,
	    "Omicron;": 927,
	    "Pi;": 928,
	    "Rho;": 929,
	    "Sigma;": 931,
	    "Tau;": 932,
	    "Upsilon;": 933,
	    "Phi;": 934,
	    "Chi;": 935,
	    "Psi;": 936,
	    "Omega;": 937,
	    "alpha;": 945,
	    "beta;": 946,
	    "gamma;": 947,
	    "delta;": 948,
	    "epsilon;": 949,
	    "zeta;": 950,
	    "eta;": 951,
	    "theta;": 952,
	    "iota;": 953,
	    "kappa;": 954,
	    "lambda;": 955,
	    "mu;": 956,
	    "nu;": 957,
	    "xi;": 958,
	    "omicron;": 959,
	    "pi;": 960,
	    "rho;": 961,
	    "sigmaf;": 962,
	    "sigma;": 963,
	    "tau;": 964,
	    "upsilon;": 965,
	    "phi;": 966,
	    "chi;": 967,
	    "psi;": 968,
	    "omega;": 969,
	    "thetasym;": 977,
	    "upsih;": 978,
	    "piv;": 982,
	    "ensp;": 8194,
	    "emsp;": 8195,
	    "thinsp;": 8201,
	    "zwnj;": 8204,
	    "zwj;": 8205,
	    "lrm;": 8206,
	    "rlm;": 8207,
	    "ndash;": 8211,
	    "mdash;": 8212,
	    "lsquo;": 8216,
	    "rsquo;": 8217,
	    "sbquo;": 8218,
	    "ldquo;": 8220,
	    "rdquo;": 8221,
	    "bdquo;": 8222,
	    "dagger;": 8224,
	    "Dagger;": 8225,
	    "bull;": 8226,
	    "hellip;": 8230,
	    "permil;": 8240,
	    "prime;": 8242,
	    "Prime;": 8243,
	    "lsaquo;": 8249,
	    "rsaquo;": 8250,
	    "oline;": 8254,
	    "frasl;": 8260,
	    "euro;": 8364,
	    "image;": 8465,
	    "weierp;": 8472,
	    "real;": 8476,
	    "trade;": 8482,
	    "alefsym;": 8501,
	    "larr;": 8592,
	    "uarr;": 8593,
	    "rarr;": 8594,
	    "darr;": 8595,
	    "harr;": 8596,
	    "crarr;": 8629,
	    "lArr;": 8656,
	    "uArr;": 8657,
	    "rArr;": 8658,
	    "dArr;": 8659,
	    "hArr;": 8660,
	    "forall;": 8704,
	    "part;": 8706,
	    "exist;": 8707,
	    "empty;": 8709,
	    "nabla;": 8711,
	    "isin;": 8712,
	    "notin;": 8713,
	    "ni;": 8715,
	    "prod;": 8719,
	    "sum;": 8721,
	    "minus;": 8722,
	    "lowast;": 8727,
	    "radic;": 8730,
	    "prop;": 8733,
	    "infin;": 8734,
	    "ang;": 8736,
	    "and;": 8743,
	    "or;": 8744,
	    "cap;": 8745,
	    "cup;": 8746,
	    "int;": 8747,
	    "there4;": 8756,
	    "sim;": 8764,
	    "cong;": 8773,
	    "asymp;": 8776,
	    "ne;": 8800,
	    "equiv;": 8801,
	    "le;": 8804,
	    "ge;": 8805,
	    "sub;": 8834,
	    "sup;": 8835,
	    "nsub;": 8836,
	    "sube;": 8838,
	    "supe;": 8839,
	    "oplus;": 8853,
	    "otimes;": 8855,
	    "perp;": 8869,
	    "sdot;": 8901,
	    "lceil;": 8968,
	    "rceil;": 8969,
	    "lfloor;": 8970,
	    "rfloor;": 8971,
	    "lang;": 9001,
	    "rang;": 9002,
	    "loz;": 9674,
	    "spades;": 9824,
	    "clubs;": 9827,
	    "hearts;": 9829,
	    "diams;": 9830
	  };
	}.call(undefined);

/***/ }),
/* 4 */
/*!********************************!*\
  !*** ./~/string/lib/_count.js ***!
  \********************************/
/***/ (function(module, exports) {

	"use strict";
	
	function count(self, substr) {
	  var count = 0;
	  var pos = self.indexOf(substr);
	
	  while (pos >= 0) {
	    count += 1;
	    pos = self.indexOf(substr, pos + 1);
	  }
	
	  return count;
	}
	
	module.exports = count;

/***/ }),
/* 5 */
/*!************************************!*\
  !*** ./~/string/lib/_splitLeft.js ***!
  \************************************/
/***/ (function(module, exports) {

	'use strict';
	
	function splitLeft(self, sep, maxSplit, limit) {
	
	  if (typeof maxSplit === 'undefined') {
	    var maxSplit = -1;
	  }
	
	  var splitResult = self.split(sep);
	  var splitPart1 = splitResult.slice(0, maxSplit);
	  var splitPart2 = splitResult.slice(maxSplit);
	
	  if (splitPart2.length === 0) {
	    splitResult = splitPart1;
	  } else {
	    splitResult = splitPart1.concat(splitPart2.join(sep));
	  }
	
	  if (typeof limit === 'undefined') {
	    return splitResult;
	  } else if (limit < 0) {
	    return splitResult.slice(limit);
	  } else {
	    return splitResult.slice(0, limit);
	  }
	}
	
	module.exports = splitLeft;

/***/ }),
/* 6 */
/*!*************************************!*\
  !*** ./~/string/lib/_splitRight.js ***!
  \*************************************/
/***/ (function(module, exports) {

	'use strict';
	
	function splitRight(self, sep, maxSplit, limit) {
	
	  if (typeof maxSplit === 'undefined') {
	    var maxSplit = -1;
	  }
	  if (typeof limit === 'undefined') {
	    var limit = 0;
	  }
	
	  var splitResult = [self];
	
	  for (var i = self.length - 1; i >= 0; i--) {
	
	    if (splitResult[0].slice(i).indexOf(sep) === 0 && (splitResult.length <= maxSplit || maxSplit === -1)) {
	      splitResult.splice(1, 0, splitResult[0].slice(i + sep.length)); // insert
	      splitResult[0] = splitResult[0].slice(0, i);
	    }
	  }
	
	  if (limit >= 0) {
	    return splitResult.slice(-limit);
	  } else {
	    return splitResult.slice(0, -limit);
	  }
	}
	
	module.exports = splitRight;

/***/ }),
/* 7 */
/*!*******************************************!*\
  !*** ./~/cells-bridge/src/manager/dom.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _events = __webpack_require__(/*! ./events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CellsManagerDom = function () {
	  function CellsManagerDom() {
	    _classCallCheck(this, CellsManagerDom);
	  }
	
	  _createClass(CellsManagerDom, [{
	    key: 'createComponents',
	    value: function createComponents(spec) {
	      /* istanbul ignore if */
	      if (!spec) {
	        return;
	      }
	      var elements = [];
	      var i = 0;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = spec[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var element = _step.value;
	
	          elements[i] = this.createElement(element.tagName);
	          elements[i].__zone = element.zone;
	          i++;
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
	
	      return elements;
	    }
	  }, {
	    key: 'setAttrs',
	    value: function setAttrs(node, attrs) {
	      if (attrs && (typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs)) === 'object') {
	        _events2.default.emit('before-set-attr-to-node', node.tagName);
	        _extends(node, attrs);
	        _events2.default.emit('after-set-attr-to-node', node);
	      }
	    }
	  }, {
	    key: 'createElement',
	    value: function createElement(tagName, properties) {
	      _events2.default.emit('before-create-node', tagName);
	      var node = document.createElement(tagName);
	      _events2.default.emit('after-create-node', node);
	
	      /* istanbul ignore else */
	      if (properties) {
	        this.setAttrs(node, properties);
	      }
	
	      return node;
	    }
	  }]);
	
	  return CellsManagerDom;
	}();
	
	exports.default = CellsManagerDom;

/***/ }),
/* 8 */
/*!**********************************************!*\
  !*** ./~/cells-bridge/src/manager/events.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _events = __webpack_require__(/*! events */ 9);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var maxNumListeners = 20;
	
	var CustomEventEmitter = function (_EventEmitter) {
	  _inherits(CustomEventEmitter, _EventEmitter);
	
	  function CustomEventEmitter() {
	    _classCallCheck(this, CustomEventEmitter);
	
	    return _possibleConstructorReturn(this, (CustomEventEmitter.__proto__ || Object.getPrototypeOf(CustomEventEmitter)).apply(this, arguments));
	  }
	
	  _createClass(CustomEventEmitter, [{
	    key: 'listenToOnce',
	    value: function listenToOnce(node, name, callback) {
	      var fn = function () {
	        callback();
	        node.removeEventListener(name, fn);
	      }.bind(this);
	      node.addEventListener(name, fn);
	    }
	  }]);
	
	  return CustomEventEmitter;
	}(_events2.default);
	
	var eventManager = new CustomEventEmitter();
	
	eventManager.setMaxListeners(maxNumListeners);
	
	exports.default = eventManager;

/***/ }),
/* 9 */
/*!****************************!*\
  !*** ./~/events/events.js ***!
  \****************************/
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events) this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler)) return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) {
	      listeners[i].apply(this, args);
	    }
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;
	
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  if (!this._events) this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type]) return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0) return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;
	
	  if (!this._events) return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length) {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    }
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function (type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function (emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ }),
/* 10 */
/*!********************************************!*\
  !*** ./~/cells-bridge/src/manager/page.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _storage = __webpack_require__(/*! ./storage */ 11);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _connector = __webpack_require__(/*! ../connector */ 12);
	
	var _connector2 = _interopRequireDefault(_connector);
	
	var _sanitizer = __webpack_require__(/*! ../sanitizer */ 13);
	
	var _sanitizer2 = _interopRequireDefault(_sanitizer);
	
	var _events = __webpack_require__(/*! ./events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CellsManagerPage = function () {
	  function CellsManagerPage(bridge) {
	    _classCallCheck(this, CellsManagerPage);
	
	    this.storage = new _storage2.default({
	      prefix: bridge.storagePrefix,
	      persistent: bridge.cache
	    });
	    this.cache = bridge.cache;
	    this.connector = new _connector2.default();
	    this.sanitizer = new _sanitizer2.default();
	  }
	
	  _createClass(CellsManagerPage, [{
	    key: 'generateRequestUrl',
	    value: function generateRequestUrl(page, options) {
	      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	      var path = config.templates || 'componentsPages/';
	      if (config.app) {
	        path += config.app + '/';
	      }
	      return path + page + '.json';
	    }
	
	    /**
	     * @param {Object} page
	     */
	    // eslint-disable-next-line no-unused-vars
	
	  }, {
	    key: 'onPageDefinitionNotFound',
	    value: function onPageDefinitionNotFound(page) {
	      // Overwrite to make something when page definition is not found.
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.storage.clear();
	    }
	  }, {
	    key: 'get',
	    value: function get(page, options, config) {
	      var spec = this.storage.getItem(page);
	      if (this.cache && spec) {
	        return new Promise(function (resolve) {
	          resolve(spec);
	        });
	      } else {
	        return this._getFromConnector(page, options, config);
	      }
	    }
	  }, {
	    key: '_getFromConnector',
	    value: function _getFromConnector(page, options, config) {
	      options = options || {};
	      options.url = this.generateRequestUrl(page, options, config);
	
	      _events2.default.emit('page-request', options);
	
	      var promise = this.connector.getJSON(options);
	
	      return promise.then(this._onResponse.bind(this, page, options), this._onResponseFail.bind(this, page)).catch(function (error) {
	        return error.message;
	      });
	    }
	  }, {
	    key: '_onResponse',
	    value: function _onResponse(page, options, response) {
	      response.page = page;
	
	      _events2.default.emit('page-response', response);
	
	      var sanitizedData = this.sanitizer.parse(response);
	      // sanitizedData = this.bridge.parse('data', sanitizedData);
	
	      this.storage.setItem(page, sanitizedData);
	
	      _events2.default.emit('data-load', sanitizedData);
	
	      return sanitizedData;
	    }
	  }, {
	    key: '_onResponseFail',
	    value: function _onResponseFail(page) {
	      if (this.onPageDefinitionNotFound) {
	        this.onPageDefinitionNotFound(page);
	      }
	
	      return new Promise(function (resolve, reject) {
	        return reject(new Error('Definition file for page \'' + page + '\' not found.'));
	      });
	    }
	  }]);
	
	  return CellsManagerPage;
	}();
	
	exports.default = CellsManagerPage;

/***/ }),
/* 11 */
/*!***********************************************!*\
  !*** ./~/cells-bridge/src/manager/storage.js ***!
  \***********************************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InMemmoryStorage = function () {
	  function InMemmoryStorage() {
	    _classCallCheck(this, InMemmoryStorage);
	
	    this.dictionary = {};
	  }
	
	  _createClass(InMemmoryStorage, [{
	    key: 'getItem',
	    value: function getItem(key) {
	      return this.dictionary[key] || null;
	    }
	  }, {
	    key: 'setItem',
	    value: function setItem(key, value) {
	      this.dictionary[key] = value;
	    }
	  }]);
	
	  return InMemmoryStorage;
	}();
	
	var CellsStorage = function () {
	  function CellsStorage(options) {
	    _classCallCheck(this, CellsStorage);
	
	    this.prefix = '';
	    this.persistent = false;
	    this.internalStorage = new InMemmoryStorage();
	
	    _extends(this, options);
	
	    if (this.persistent) {
	      this.clear();
	    }
	  }
	
	  _createClass(CellsStorage, [{
	    key: 'getItem',
	    value: function getItem(key) {
	      return JSON.parse(this.storage.getItem(this.prefix + key));
	    }
	  }, {
	    key: 'setItem',
	    value: function setItem(key, value) {
	      this.storage.setItem(this.prefix + key, JSON.stringify(value, '', true));
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var pattern = new RegExp('^(' + this.prefix + ')');
	
	      for (var key in this.storage) {
	        if (pattern.test(key)) {
	          this.storage.removeItem(key);
	        }
	      }
	    }
	  }, {
	    key: 'storage',
	    get: function get() {
	      var store = void 0;
	      if (this.persistent) {
	        store = window.localStorage;
	      } else {
	        store = window.sessionStorage;
	      }
	      try {
	        store.setItem('_$_', {});
	      } catch (error) {
	        store = this.internalStorage;
	      }
	      return store;
	    }
	  }]);
	
	  return CellsStorage;
	}();
	
	exports.default = CellsStorage;

/***/ }),
/* 12 */
/*!*****************************************!*\
  !*** ./~/cells-bridge/src/connector.js ***!
  \*****************************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CellsBridgeConnector = function () {
	  function CellsBridgeConnector() {
	    _classCallCheck(this, CellsBridgeConnector);
	  }
	
	  _createClass(CellsBridgeConnector, [{
	    key: 'getJSON',
	    value: function getJSON(options) {
	      return new Promise(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        if (!options || !options.url) {
	          reject(new Error('URL not defined'));
	        }
	        var method = (options.method || '').toUpperCase() || 'GET';
	        xhr.addEventListener('load', function (e) {
	          var xhr = e.target;
	          var status = xhr.status;
	          if (status >= 200 && status < 300 || status == 0 && xhr.responseText.length > 0) {
	            resolve(JSON.parse(xhr.response));
	          } else {
	            reject(new Error(xhr.statusText));
	          }
	        });
	        xhr.addEventListener('error', function () {
	          reject(new Error('Network Error'));
	        });
	        xhr.open(method, options.url);
	        //
	        var headers = options.headers;
	        for (var header in headers) {
	          if (headers.hasOwnProperty(header)) {
	            xhr.setRequestHeader(header, headers[header]);
	          }
	        }
	        xhr.send(options.body);
	      });
	    }
	  }, {
	    key: '_onErrorCallback',
	    value: function _onErrorCallback() {
	      this.reject(new Error('Network Error'));
	    }
	  }, {
	    key: '_onLoadCallback',
	    value: function _onLoadCallback() {
	      var xhr = this.xhr;
	      var status = xhr.status;
	      if (status >= 200 && status < 300 || status == 0 && xhr.responseText.length > 0) {
	        this.resolve(JSON.parse(xhr.response));
	      } else {
	        this.reject(new Error(xhr.statusText));
	      }
	    }
	  }]);
	
	  return CellsBridgeConnector;
	}();
	
	exports.default = CellsBridgeConnector;

/***/ }),
/* 13 */
/*!*****************************************!*\
  !*** ./~/cells-bridge/src/sanitizer.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _string = __webpack_require__(/*! string */ 3);
	
	var _string2 = _interopRequireDefault(_string);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _getPath = function _getPath(cmpDef) {
	  return (cmpDef.familyPath ? cmpDef.familyPath : cmpDef.tag || cmpDef.tagName) + '/' + (cmpDef.tag || cmpDef.tagName) + '.html';
	};
	
	var CellsBridgeComposerSanitizer = function () {
	  function CellsBridgeComposerSanitizer() {
	    _classCallCheck(this, CellsBridgeComposerSanitizer);
	  }
	
	  _createClass(CellsBridgeComposerSanitizer, [{
	    key: '_buildConfig',
	    value: function _buildConfig(component) {
	      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'UI';
	
	      var config = {
	        type: component.type ? component.type.toUpperCase() : type,
	        tagName: component.tag || component.tagName,
	        zone: component.zone,
	        fixed: component.fixed,
	        properties: component.properties,
	        path: _getPath(component)
	      };
	      this.parseConnections(config);
	      return config;
	    }
	  }, {
	    key: 'parse',
	    value: function parse(json) {
	      var components = [];
	      var LTRIM_SLASH = /^\/(\b)/;
	      components.push.apply(components, _toConsumableArray(this._parseComponentsFromJson(json, 'components', 'UI')));
	      var jsonTemplate = json.template;
	      if (jsonTemplate) {
	        jsonTemplate = this._buildConfig(jsonTemplate, 'TEMPLATE');
	      }
	      var pages = {};
	      var jsonPages = json.pages;
	      /* istanbul ignore if */
	      if (jsonPages) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = Object.keys(jsonPages)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var page = _step.value;
	
	            pages[page] = '/' + jsonPages[page].url.replace(LTRIM_SLASH, '');
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
	      }
	      return {
	        page: json.page,
	        currentPage: json.currentPage || {},
	        template: jsonTemplate,
	        components: components,
	        pages: pages
	      };
	    }
	  }, {
	    key: '_parseComponentsFromJson',
	    value: function _parseComponentsFromJson(json, key, type) {
	      var list = [];
	      var components = json[key];
	      /* istanbul ignore if */
	      if (Array.isArray(components)) {
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	          for (var _iterator2 = components[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var component = _step2.value;
	
	            list.push(this._buildConfig(component, type));
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
	      return list;
	    }
	  }, {
	    key: 'parseConnections',
	    value: function parseConnections(component) {
	      var connections;
	      /* istanbul ignore else */
	      if (component.properties) {
	        connections = component.properties.cellsConnections;
	      }
	      /* istanbul ignore else */
	      if (connections) {
	        if (connections.params) {
	
	          /* istanbul ignore if */
	          if (!connections.in) {
	            connections.in = {};
	          }
	          /* istanbul ignore if */
	          if (!connections.out) {
	            connections.out = {};
	          }
	          var params = this.paramsToActions(connections.params);
	          _extends(connections.in, params.in);
	          _extends(connections.out, params.out);
	        }
	        component.connections = connections;
	      }
	    }
	  }, {
	    key: 'paramsToActions',
	    value: function paramsToActions(params) {
	      var connections = {
	        in: {},
	        out: {}
	      };
	      for (var prop in params) {
	        var paramDef = params[prop];
	        connections.in[paramDef] = {
	          bind: prop,
	          global: true
	        };
	        connections.out[paramDef] = {
	          bind: (0, _string2.default)(prop).dasherize().s + '-changed',
	          global: true
	        };
	      }
	      return connections;
	    }
	  }, {
	    key: 'split',
	    value: function split(data) {
	      var response;
	      /* istanbul ignore if */
	      if (data) {
	        response = {
	          CC: [],
	          UI: [],
	          DM: []
	        };
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;
	
	        try {
	          for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var item = _step3.value;
	
	            response[item.type].push(item);
	          }
	        } catch (err) {
	          _didIteratorError3 = true;
	          _iteratorError3 = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	              _iterator3.return();
	            }
	          } finally {
	            if (_didIteratorError3) {
	              throw _iteratorError3;
	            }
	          }
	        }
	      }
	      return response;
	    }
	  }]);
	
	  return CellsBridgeComposerSanitizer;
	}();
	
	exports.default = CellsBridgeComposerSanitizer;

/***/ }),
/* 14 */
/*!***************************************************!*\
  !*** ./~/cells-bridge/src/component-connector.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _events = __webpack_require__(/*! ./manager/events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _Subscription = __webpack_require__(/*! rxjs/Subscription */ 15);
	
	var _Observable = __webpack_require__(/*! rxjs/Observable */ 22);
	
	__webpack_require__(/*! rxjs/add/observable/fromEvent */ 31);
	
	var _ReplaySubject = __webpack_require__(/*! rxjs/ReplaySubject */ 34);
	
	var _ObjectUnsubscribedError = __webpack_require__(/*! rxjs/util/ObjectUnsubscribedError */ 36);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Channel ReplaySubject extension of Rx.ReplaySubject.
	 * This is pretty hacky, but so far I'd found no better way of having
	 * Channels that do no close on multicasted stream completion and on multiple errors.
	 * For documentation refer to
	 * [Rx.ReplaySubject docs](@link https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md).
	 * The only difference is that Channel never triggers '.onCompleted()' and
	 * does not closes observers on errors (thus allowing to continuously dispatch them).
	 */
	var Channel = function Channel(buffer) {
	  _ReplaySubject.ReplaySubject.call(this, buffer);
	};
	
	Channel.prototype = Object.create(_ReplaySubject.ReplaySubject.prototype);
	
	Channel.prototype.hasObservers = function hasObservers() {
	  if (this.closed) {
	    throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
	  }
	
	  return this.observers.length > 0;
	};
	
	Channel.prototype.next = function next(value) {
	  var generateUUID = function generateUUID() {
	    var d = new Date().getTime();
	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	      var r = (d + Math.random() * 16) % 16 | 0;
	      return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
	    });
	    return uuid;
	  };
	
	  value.uuid = generateUUID();
	  _ReplaySubject.ReplaySubject.prototype.next.call(this, value);
	};
	
	_extends(Channel.prototype, {
	  /**
	   * Dummy method override to prevent execution and Rx.Observable completion
	   * @ignore
	   */
	  complete: function complete() {},
	
	  /**
	   * Dummy method override to prevent stop execution when error in Rx.Observable
	   * @ignore
	   */
	  error: function error(_error) {
	    this.error = _error;
	    this.observers.forEach(function (o) {
	      o.isStopped = false;
	      o.onError(_error);
	    });
	  },
	
	  /**
	   * Removes a specific observer.
	   *
	   * @param  {Number} index  Position of observer in array
	   * @example
	   * channel.unsubscribe(1);
	   */
	  unsubscribe: function unsubscribe(index) {
	    this.observers.splice(index, 1);
	  },
	
	  /**
	   * Removes all observers.
	   *
	   * @example
	   * channel.unsubscribe();
	   */
	  unsubscribeAll: function unsubscribeAll() {
	    this.observers.splice(0, this.observers.length);
	  },
	
	  /**
	   * Resets the channel.
	   */
	  clean: function clean() {
	    this._events = [];
	  }
	});
	
	/**
	 * A subscriptor can publish to a channel and receive notifications
	 * about changes from a channel.
	 *
	 * @param {HTMLElement/Object} node
	 */
	var Subscriptor = function Subscriptor(node) {
	  this.node = node;
	  this.subscriptions = []; //[] //*1prototype mixin clone problem
	  this.publications = new _Subscription.Subscription();
	};
	
	Subscriptor.prototype = {
	  node: null,
	  subscriptions: null, //[] //*1prototype mixin clone problem
	  publications: null,
	
	  /**
	   * Returns true if the subscriptor has already subscribed to a channel.
	   *
	   * @param  {Channel}  channel The channel to check the subscription
	   * @return {Boolean}
	   */
	  hasSubscription: function hasSubscription(channel) {
	    return this.subscriptions.filter(function (d) {
	      return d.channel === channel;
	    }).length > 0;
	  },
	
	  /**
	   * Publish an event.sss
	   *
	   * @param  {Event} event
	   */
	  publish: function publish(event) {
	    this.publications.add(event);
	  },
	
	  makeCallbackWithNoReplay: function makeCallbackWithNoReplay(channel, fn) {
	    if (!fn.node.intervals) {
	      fn.node.intervals = [];
	    }
	    if (!fn.node.ids) {
	      fn.node.ids = [];
	    }
	    var getTimeFromNode = function getTimeFromNode(node) {
	      return node.intervals[channel.name];
	    };
	    var setTimeForNode = function setTimeForNode(node, time) {
	      node.intervals[channel.name] = time;
	    };
	    var getTimeFromChannel = function getTimeFromChannel(channel) {
	      return channel._events.length > 0 ? channel._events[0].time : 1;
	    };
	    var getIdFromNode = function getIdFromNode(node) {
	      return node.ids[channel.name];
	    };
	    var setIdForNode = function setIdForNode(node, id) {
	      node.ids[channel.name] = id;
	    };
	    var getIdFromChannel = function getIdFromChannel(channel) {
	      return channel._events.length > 0 ? channel._events[0].value.uuid : null;
	    };
	    var fnReplayOff = function () {
	      var lastInterval = getTimeFromChannel(channel);
	      var nodeInterval = getTimeFromNode(fn.node);
	      var lastId = getIdFromChannel(channel);
	      var nodeId = getIdFromNode(fn.node);
	      if (!nodeInterval || nodeInterval < lastInterval || nodeInterval === lastInterval && nodeId != lastId) {
	        setTimeForNode(fn.node, lastInterval);
	        setIdForNode(fn.node, lastId);
	        return fn.apply(this, arguments);
	      }
	      setTimeForNode(fn.node, lastInterval);
	    }.bind(this);
	    fnReplayOff.node = fn.node;
	    return fnReplayOff;
	  },
	
	  /**
	   * Subscribe to a channel.
	   *
	   * @param  {Channel}   channel  Channel to subscribe
	   * @param  {Function}  fn       Callback function to run when a value from a channel changed
	   */
	  subscribe: function subscribe(channel, fn, previousState) {
	    if (!this.hasSubscription(channel)) {
	      var callback = fn;
	      if (previousState === false) {
	        callback = this.makeCallbackWithNoReplay(channel, fn);
	      }
	
	      var pos = this._firstInstanceOfObserver(callback.node, channel);
	      if (pos === -1) {
	        channel.subscribe(callback);
	        pos = channel.observers.length - 1;
	      }
	      channel.observers[pos].node = callback.node;
	
	      var subscription = {
	        channel: channel,
	        observer: channel.observers[pos]
	      };
	
	      this.subscriptions.push(subscription);
	    }
	  },
	
	  /**
	   * Remove all active subscriptions.
	   */
	  unsubscribe: function unsubscribe() {
	    for (var i = this.subscriptions.length - 1; i >= 0; i--) {
	      var subscription = this.subscriptions[i];
	      var channel = subscription.channel;
	      var observer = subscription.observer;
	      var index = channel.observers.indexOf(observer);
	
	      if (!channel.name.match(/\b__bridge_/)) {
	        channel.unsubscribe(index);
	      }
	      // if(!channel.hasObservers()) {
	      //   channel.clean();
	      // }
	    }
	
	    this.publications.unsubscribe();
	  },
	
	  /**
	   * Returns the position of the first occurrence of the observer's node in the channel.
	   * If the node has none observer registered to the channel, it returns -1.
	   *
	   * @param {node}
	   * @param {channel}
	   */
	  _firstInstanceOfObserver: function _firstInstanceOfObserver(node, channel) {
	    var pos = -1;
	
	    for (var index = 0; index < channel.observers.length; index++) {
	      if (channel.observers[index].node === node) {
	        pos = index;
	        break;
	      }
	    }
	    return pos;
	  }
	};
	
	/**
	 * Collection of channels.
	 */
	var ChannelManager = function ChannelManager() {
	  this.channels = {}; //*1prototype mixin clone problem
	};
	
	ChannelManager.prototype = {
	  channels: null, //{} //*1prototype mixin clone problem
	
	  /**
	   * Gets a channel by name.
	   *
	   * @param  {String} name
	   *
	   * @return {Channel}
	   */
	  get: function get(name) {
	    var channel = this.channels[name];
	
	    if (channel == null) {
	      channel = this.create(name);
	    }
	
	    return channel;
	  },
	
	  /**
	   * Gets a channel by name.
	   *
	   * @param  {String} name
	   *
	   * @return {Channel}
	   */
	  getUnsafe: function getUnsafe(name) {
	    return this.channels[name];
	  },
	
	  /**
	   * Creates a channel.
	   *
	   * @param  {String} name Channel name
	   *
	   * @return {Channel}
	   */
	  create: function create(name) {
	    var channel = new Channel(1);
	    channel.name = name;
	    return this.channels[name] = channel;
	  },
	
	  /**
	   * Removes a channel from the collection.
	   *
	   * @param  {String} name Name of the channel to remove.
	   */
	  remove: function remove(name) {
	    delete this.channels[name];
	  },
	
	  /**
	   * Returns true if there is a channel registered with the given name,
	   *
	   * @param {String} name Channel name,
	   *
	   * @return {Boolean}
	   */
	  has: function has(name) {
	    return this.channels[name] != null;
	  }
	};
	
	var ComponentConnector = function () {
	  function ComponentConnector() {
	    _classCallCheck(this, ComponentConnector);
	
	    this.EventManager = null;
	    this.manager = null;
	    this.subscriptors = null;
	    this.bridgeChannelsPrefix = null;
	
	    this.manager = new ChannelManager();
	    this.subscriptors = new WeakMap();
	    this.bridgeChannelsPrefix = /__bridge_(?!ch)/;
	  }
	
	  _createClass(ComponentConnector, [{
	    key: 'getSubscriptor',
	    value: function getSubscriptor(node) {
	      var subscriptor = this.subscriptors.get(node);
	
	      if (!subscriptor) {
	        subscriptor = new Subscriptor(node);
	        this.subscriptors.set(node, subscriptor);
	      }
	
	      return subscriptor;
	    }
	
	    /**
	     * Register a node in pubsub
	     *
	     * @param  {HTMLElement}  node
	     * @param  {Object}       connections
	     */
	
	  }, {
	    key: 'register',
	    value: function register(node, connections) {
	      if (node && connections) {
	        this._registerOutConnections(node, connections.out);
	        this._registerInConnections(node, connections.in);
	      }
	    }
	
	    /**
	     * Registesr new connections of a node that may have other connections registered previously.
	     *
	     * @param  {HTMLElement}  node
	     * @param  {Object}       connections
	     */
	
	  }, {
	    key: 'progressiveRegister',
	    value: function progressiveRegister(node, connections) {
	      if (node && connections) {
	        this._registerOutConnections(node, connections.out);
	        this._updateInConnections(node, connections.in);
	      }
	    }
	  }, {
	    key: '_registerInConnections',
	    value: function _registerInConnections(node, inConnections) {
	      var channelName = void 0;
	      var bindName = void 0;
	      var previousState = void 0;
	      var subscriptor = void 0;
	      var channel = void 0;
	
	      if (inConnections) {
	        for (channelName in inConnections) {
	          channel = this.isBridgeChannel(channelName) ? this.manager.getUnsafe(channelName) : this.manager.get(channelName);
	          if (channel) {
	            bindName = inConnections[channelName].bind;
	            previousState = inConnections[channelName].previousState || false;
	            subscriptor = this.getSubscriptor(node);
	
	            subscriptor.subscribe(channel, this._wrapCallbackWithNode(node, bindName), previousState);
	          }
	        }
	      }
	    }
	  }, {
	    key: '_updateInConnections',
	    value: function _updateInConnections(node, inConnections) {
	      var channelName = void 0;
	      var bindName = void 0;
	      var previousState = void 0;
	      var subscriptor = void 0;
	      var channel = void 0;
	
	      if (inConnections) {
	        for (channelName in inConnections) {
	          bindName = inConnections[channelName].bind;
	          previousState = inConnections[channelName].previousState || false;
	          subscriptor = this.getSubscriptor(node);
	          if (this.isActiveBridgeChannel(channelName) || !this.isActiveBridgeChannel(channelName) && !this.hasSubscriptions(subscriptor, channelName)) {
	            channel = this.manager.get(channelName);
	
	            subscriptor.subscribe(channel, this._wrapCallbackWithNode(node, bindName), previousState);
	          }
	        }
	      }
	    }
	  }, {
	    key: '_wrapCallbackWithNode',
	    value: function _wrapCallbackWithNode(node, bindName) {
	      var cb = this.wrapCallback(node, bindName);
	      cb.node = node;
	      return cb;
	    }
	  }, {
	    key: '_hasPublisher',
	    value: function _hasPublisher(subscriptor, node, channelName, bindName) {
	      var hasPublisher = false;
	
	      if (subscriptor.publications._subscriptions) {
	        subscriptor.publications._subscriptions.forEach(function (publication) {
	          if (publication.node === node && publication.channelName === channelName && publication.eventName === bindName) {
	            hasPublisher = true;
	          }
	        });
	      }
	      return hasPublisher;
	    }
	  }, {
	    key: '_registerOutConnections',
	    value: function _registerOutConnections(node, outConnections) {
	      var channelName = void 0;
	      var bindName = void 0;
	      var subscriptor = void 0;
	      var channel = void 0;
	      var hasPublisher = void 0;
	
	      if (outConnections) {
	        for (channelName in outConnections) {
	          if (this.isBridgeChannel(channelName)) {
	            console.warn('Forbidden operation. You are trying to write to a private channel (' + channelName + ').');
	          } else {
	            bindName = outConnections[channelName].bind;
	            subscriptor = this.getSubscriptor(node);
	            channel = this.manager.get(channelName);
	            hasPublisher = this._hasPublisher(subscriptor, node, channelName, bindName);
	
	            if (!hasPublisher) {
	              subscriptor.publish(this.wrapEvent(node, bindName, channel, outConnections[channelName]));
	            }
	          }
	        }
	      }
	    }
	
	    /**
	     * Unregister a node from pubsub
	     *
	     * @param  {HTMLElement} node
	     */
	
	  }, {
	    key: 'unregister',
	    value: function unregister(node) {
	      if (!node) {
	        return;
	      }
	
	      var subscriptor = this.subscriptors.get(node);
	
	      if (subscriptor) {
	        subscriptor.unsubscribe();
	        this.subscriptors.delete(node);
	      }
	    }
	
	    /**
	     * Wrap a callback.
	     *
	     * @param  {HTMLElement/Object} node
	     * @param  {String} bindName Method or property name
	     *
	     * @return {Function}
	     */
	
	  }, {
	    key: 'wrapCallback',
	    value: function wrapCallback(node, bindName) {
	      var wrappedCb = function wrappedCb(event) {
	        if (typeof node[bindName] === 'function') {
	          node[bindName](event.detail);
	        } else {
	          node[bindName] = event.detail;
	        }
	      };
	
	      return wrappedCb;
	    }
	
	    /**
	     * Returns true if the event has reached the node that is listening the event
	     *
	     * @param {Event} event
	     */
	
	  }, {
	    key: '_isEventAtTarget',
	    value: function _isEventAtTarget(event) {
	      return event.eventPhase === Event.AT_TARGET;
	    }
	
	    /**
	     * Wrap an event.
	     *
	     * @param  {HTMLElement} node
	     * @param  {String} eventName
	     * @param  {Channel} channel
	     *
	     * @return {Function}
	     */
	
	  }, {
	    key: 'wrapEvent',
	    value: function wrapEvent(node, eventName, channel, connection) {
	      var source = _Observable.Observable.fromEvent(node, eventName);
	      var wrappedListener = source.subscribe(function (event) {
	        if (!this._isEventAtTarget(event)) {
	          // If the event bubbles up from a child element:
	          return;
	        }
	
	        channel.next(event);
	        _events2.default.emit('after-publish', event);
	
	        if (connection.link) {
	          _events2.default.emit('nav-request', {
	            event: event,
	            detail: connection.link
	          });
	        }
	
	        if (connection.analytics) {
	          _events2.default.emit('track-event', {
	            event: event,
	            detail: connection.analytics
	          });
	        }
	      }.bind(this));
	
	      wrappedListener.node = node;
	      wrappedListener.eventName = eventName;
	      wrappedListener.channelName = channel.name;
	
	      return wrappedListener;
	    }
	
	    /**
	     * receive a channel name and change old private values.
	     *
	     * @param  {string} name
	     *
	     */
	
	  }, {
	    key: 'createEvent',
	    value: function createEvent(name, value) {
	      var evt = new Event(name);
	      evt.detail = { value: value };
	      return evt;
	    }
	
	    /**
	     * returns true if there's a private channel with the given name
	     *
	     * @param {String} name
	     *
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isActiveBridgeChannel',
	    value: function isActiveBridgeChannel(name) {
	      return this.isBridgeChannel(name) && this.manager.getUnsafe(name);
	    }
	
	    /**
	     * returns true if the given name matches a private channel's name
	     *
	     * @param {String} name
	     *
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isBridgeChannel',
	    value: function isBridgeChannel(name) {
	      return this.bridgeChannelsPrefix.test(name);
	    }
	
	    /**
	     * returns true if the subscriptor has been subscribed to the given channel.
	     *
	     * @param {Subscriptor} subscriptor
	     * @param {String} channelName
	     *
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'hasSubscriptions',
	    value: function hasSubscriptions(subscriptor, channelName) {
	      return subscriptor.subscriptions.filter(function (d) {
	        return d.channel.name === channelName;
	      }).length > 0;
	    }
	  }]);
	
	  return ComponentConnector;
	}();
	
	/**
	 * ComponentConnector definition
	 */
	exports.default = ComponentConnector;

/***/ }),
/* 15 */
/*!********************************!*\
  !*** ./~/rxjs/Subscription.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isArray_1 = __webpack_require__(/*! ./util/isArray */ 16);
	var isObject_1 = __webpack_require__(/*! ./util/isObject */ 17);
	var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 18);
	var tryCatch_1 = __webpack_require__(/*! ./util/tryCatch */ 19);
	var errorObject_1 = __webpack_require__(/*! ./util/errorObject */ 20);
	var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ 21);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.closed = false;
	        this._parent = null;
	        this._parents = null;
	        this._subscriptions = null;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.closed) {
	            return;
	        }
	        var _a = this,
	            _parent = _a._parent,
	            _parents = _a._parents,
	            _unsubscribe = _a._unsubscribe,
	            _subscriptions = _a._subscriptions;
	        this.closed = true;
	        this._parent = null;
	        this._parents = null;
	        // null out _subscriptions first so any child subscriptions that attempt
	        // to remove themselves from this subscription will noop
	        this._subscriptions = null;
	        var index = -1;
	        var len = _parents ? _parents.length : 0;
	        // if this._parent is null, then so is this._parents, and we
	        // don't have to remove ourselves from any parent subscriptions.
	        while (_parent) {
	            _parent.remove(this);
	            // if this._parents is null or index >= len,
	            // then _parent is set to null, and the loop exits
	            _parent = ++index < len && _parents[index] || null;
	        }
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            index = -1;
	            len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
	                        } else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `closed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || teardown === Subscription.EMPTY) {
	            return Subscription.EMPTY;
	        }
	        if (teardown === this) {
	            return this;
	        }
	        var subscription = teardown;
	        switch (typeof teardown === 'undefined' ? 'undefined' : _typeof(teardown)) {
	            case 'function':
	                subscription = new Subscription(teardown);
	            case 'object':
	                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
	                    return subscription;
	                } else if (this.closed) {
	                    subscription.unsubscribe();
	                    return subscription;
	                } else if (typeof subscription._addParent !== 'function' /* quack quack */) {
	                        var tmp = subscription;
	                        subscription = new Subscription();
	                        subscription._subscriptions = [tmp];
	                    }
	                break;
	            default:
	                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        var subscriptions = this._subscriptions || (this._subscriptions = []);
	        subscriptions.push(subscription);
	        subscription._addParent(this);
	        return subscription;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.prototype._addParent = function (parent) {
	        var _a = this,
	            _parent = _a._parent,
	            _parents = _a._parents;
	        if (!_parent || _parent === parent) {
	            // If we don't have a parent, or the new parent is the same as the
	            // current parent, then set this._parent to the new parent.
	            this._parent = parent;
	        } else if (!_parents) {
	            // If there's already one parent, but not multiple, allocate an Array to
	            // store the rest of the parent Subscriptions.
	            this._parents = [parent];
	        } else if (_parents.indexOf(parent) === -1) {
	            // Only add the new parent to the _parents list if it's not already there.
	            _parents.push(parent);
	        }
	    };
	    Subscription.EMPTY = function (empty) {
	        empty.closed = true;
	        return empty;
	    }(new Subscription());
	    return Subscription;
	}();
	exports.Subscription = Subscription;
	function flattenUnsubscriptionErrors(errors) {
	    return errors.reduce(function (errs, err) {
	        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
	    }, []);
	}
	//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 16 */
/*!********************************!*\
  !*** ./~/rxjs/util/isArray.js ***!
  \********************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports.isArray = Array.isArray || function (x) {
	  return x && typeof x.length === 'number';
	};
	//# sourceMappingURL=isArray.js.map

/***/ }),
/* 17 */
/*!*********************************!*\
  !*** ./~/rxjs/util/isObject.js ***!
  \*********************************/
/***/ (function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function isObject(x) {
	    return x != null && (typeof x === "undefined" ? "undefined" : _typeof(x)) === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ }),
/* 18 */
/*!***********************************!*\
  !*** ./~/rxjs/util/isFunction.js ***!
  \***********************************/
/***/ (function(module, exports) {

	"use strict";
	
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 19 */
/*!*********************************!*\
  !*** ./~/rxjs/util/tryCatch.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var errorObject_1 = __webpack_require__(/*! ./errorObject */ 20);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    } catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ }),
/* 20 */
/*!************************************!*\
  !*** ./~/rxjs/util/errorObject.js ***!
  \************************************/
/***/ (function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ }),
/* 21 */
/*!********************************************!*\
  !*** ./~/rxjs/util/UnsubscriptionError.js ***!
  \********************************************/
/***/ (function(module, exports) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        var err = Error.call(this, errors ? errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) {
	            return i + 1 + ") " + err.toString();
	        }).join('\n  ') : '');
	        this.name = err.name = 'UnsubscriptionError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return UnsubscriptionError;
	}(Error);
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 22 */
/*!******************************!*\
  !*** ./~/rxjs/Observable.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var root_1 = __webpack_require__(/*! ./util/root */ 23);
	var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ 24);
	var observable_1 = __webpack_require__(/*! ./symbol/observable */ 28);
	var pipe_1 = __webpack_require__(/*! ./util/pipe */ 29);
	/**
	 * A representation of any set of values over any amount of time. This is the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
	     *
	     * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
	     *
	     * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
	     * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
	     * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
	     * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
	     * thought.
	     *
	     * Apart from starting the execution of an Observable, this method allows you to listen for values
	     * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
	     * following ways.
	     *
	     * The first way is creating an object that implements {@link Observer} interface. It should have methods
	     * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
	     * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
	     * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
	     * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
	     * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
	     * be left uncaught.
	     *
	     * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
	     * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
	     * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
	     * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
	     * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
	     * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
	     *
	     * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
	     * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
	     * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
	     * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
	     *
	     * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
	     * It is an Observable itself that decides when these functions will be called. For example {@link of}
	     * by default emits all its values synchronously. Always check documentation for how given Observable
	     * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
	     *
	     * @example <caption>Subscribe with an Observer</caption>
	     * const sumObserver = {
	     *   sum: 0,
	     *   next(value) {
	     *     console.log('Adding: ' + value);
	     *     this.sum = this.sum + value;
	     *   },
	     *   error() { // We actually could just remove this method,
	     *   },        // since we do not really care about errors right now.
	     *   complete() {
	     *     console.log('Sum equals: ' + this.sum);
	     *   }
	     * };
	     *
	     * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
	     * .subscribe(sumObserver);
	     *
	     * // Logs:
	     * // "Adding: 1"
	     * // "Adding: 2"
	     * // "Adding: 3"
	     * // "Sum equals: 6"
	     *
	     *
	     * @example <caption>Subscribe with functions</caption>
	     * let sum = 0;
	     *
	     * Rx.Observable.of(1, 2, 3)
	     * .subscribe(
	     *   function(value) {
	     *     console.log('Adding: ' + value);
	     *     sum = sum + value;
	     *   },
	     *   undefined,
	     *   function() {
	     *     console.log('Sum equals: ' + sum);
	     *   }
	     * );
	     *
	     * // Logs:
	     * // "Adding: 1"
	     * // "Adding: 2"
	     * // "Adding: 3"
	     * // "Sum equals: 6"
	     *
	     *
	     * @example <caption>Cancel a subscription</caption>
	     * const subscription = Rx.Observable.interval(1000).subscribe(
	     *   num => console.log(num),
	     *   undefined,
	     *   () => console.log('completed!') // Will not be called, even
	     * );                                // when cancelling subscription
	     *
	     *
	     * setTimeout(() => {
	     *   subscription.unsubscribe();
	     *   console.log('unsubscribed!');
	     * }, 2500);
	     *
	     * // Logs:
	     * // 0 after 1s
	     * // 1 after 2s
	     * // "unsubscribed!" after 2.5s
	     *
	     *
	     * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
	     *  Observable.
	     * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled.
	     * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
	     * @return {ISubscription} a subscription reference to the registered handlers
	     * @method subscribe
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            operator.call(sink, this.source);
	        } else {
	            sink.add(this.source || !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
	        }
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    Observable.prototype._trySubscribe = function (sink) {
	        try {
	            return this._subscribe(sink);
	        } catch (err) {
	            sink.syncErrorThrown = true;
	            sink.syncErrorValue = err;
	            sink.error(err);
	        }
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            } else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            // Must be declared in a separate statement to avoid a RefernceError when
	            // accessing subscription below in the closure due to Temporal Dead Zone.
	            var subscription;
	            subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    } catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                } else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.observable] = function () {
	        return this;
	    };
	    /* tslint:enable:max-line-length */
	    /**
	     * Used to stitch together functional operators into a chain.
	     * @method pipe
	     * @return {Observable} the Observable result of all of the operators having
	     * been called in the order they were passed in.
	     *
	     * @example
	     *
	     * import { map, filter, scan } from 'rxjs/operators';
	     *
	     * Rx.Observable.interval(1000)
	     *   .pipe(
	     *     filter(x => x % 2 === 0),
	     *     map(x => x + x),
	     *     scan((acc, x) => acc + x)
	     *   )
	     *   .subscribe(x => console.log(x))
	     */
	    Observable.prototype.pipe = function () {
	        var operations = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            operations[_i - 0] = arguments[_i];
	        }
	        if (operations.length === 0) {
	            return this;
	        }
	        return pipe_1.pipeFromArray(operations)(this);
	    };
	    /* tslint:enable:max-line-length */
	    Observable.prototype.toPromise = function (PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            } else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var value;
	            _this.subscribe(function (x) {
	                return value = x;
	            }, function (err) {
	                return reject(err);
	            }, function () {
	                return resolve(value);
	            });
	        });
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}();
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ }),
/* 23 */
/*!*****************************!*\
  !*** ./~/rxjs/util/root.js ***!
  \*****************************/
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	// CommonJS / Node have global context exposed as "global" variable.
	// We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
	// the global "global" var for now.
	
	var __window = typeof window !== 'undefined' && window;
	var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;
	var __global = typeof global !== 'undefined' && global;
	var _root = __window || __global || __self;
	exports.root = _root;
	// Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
	// This is needed when used with angular/tsickle which inserts a goog.module statement.
	// Wrap in IIFE
	(function () {
	    if (!_root) {
	        throw new Error('RxJS could not find any global context (window, self, global)');
	    }
	})();
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 24 */
/*!*************************************!*\
  !*** ./~/rxjs/util/toSubscriber.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 25);
	var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ 27);
	var Observer_1 = __webpack_require__(/*! ../Observer */ 26);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
	            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber_1.Subscriber(Observer_1.empty);
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 25 */
/*!******************************!*\
  !*** ./~/rxjs/Subscriber.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 18);
	var Subscription_1 = __webpack_require__(/*! ./Subscription */ 15);
	var Observer_1 = __webpack_require__(/*! ./Observer */ 26);
	var rxSubscriber_1 = __webpack_require__(/*! ./symbol/rxSubscriber */ 27);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if ((typeof destinationOrNext === 'undefined' ? 'undefined' : _typeof(destinationOrNext)) === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    } else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
	        return this;
	    };
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    Subscriber.prototype._unsubscribeAndRecycle = function () {
	        var _a = this,
	            _parent = _a._parent,
	            _parents = _a._parents;
	        this._parent = null;
	        this._parents = null;
	        this.unsubscribe();
	        this.closed = false;
	        this.isStopped = false;
	        this._parent = _parent;
	        this._parents = _parents;
	        return this;
	    };
	    return Subscriber;
	}(Subscription_1.Subscription);
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parentSubscriber = _parentSubscriber;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        } else if (observerOrNext) {
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (observerOrNext !== Observer_1.empty) {
	                context = Object.create(observerOrNext);
	                if (isFunction_1.isFunction(context.unsubscribe)) {
	                    this.add(context.unsubscribe.bind(context));
	                }
	                context.unsubscribe = this.unsubscribe.bind(this);
	            }
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parentSubscriber = this._parentSubscriber;
	            if (!_parentSubscriber.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parentSubscriber = this._parentSubscriber;
	            if (this._error) {
	                if (!_parentSubscriber.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                } else {
	                    this.__tryOrSetError(_parentSubscriber, this._error, err);
	                    this.unsubscribe();
	                }
	            } else if (!_parentSubscriber.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            } else {
	                _parentSubscriber.syncErrorValue = err;
	                _parentSubscriber.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        var _this = this;
	        if (!this.isStopped) {
	            var _parentSubscriber = this._parentSubscriber;
	            if (this._complete) {
	                var wrappedComplete = function wrappedComplete() {
	                    return _this._complete.call(_this._context);
	                };
	                if (!_parentSubscriber.syncErrorThrowable) {
	                    this.__tryOrUnsub(wrappedComplete);
	                    this.unsubscribe();
	                } else {
	                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
	                    this.unsubscribe();
	                }
	            } else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        } catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        } catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parentSubscriber = this._parentSubscriber;
	        this._context = null;
	        this._parentSubscriber = null;
	        _parentSubscriber.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber);
	//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 26 */
/*!****************************!*\
  !*** ./~/rxjs/Observer.js ***!
  \****************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports.empty = {
	    closed: true,
	    next: function next(value) {},
	    error: function error(err) {
	        throw err;
	    },
	    complete: function complete() {}
	};
	//# sourceMappingURL=Observer.js.map

/***/ }),
/* 27 */
/*!***************************************!*\
  !*** ./~/rxjs/symbol/rxSubscriber.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var root_1 = __webpack_require__(/*! ../util/root */ 23);
	var _Symbol = root_1.root.Symbol;
	exports.rxSubscriber = typeof _Symbol === 'function' && typeof _Symbol.for === 'function' ? _Symbol.for('rxSubscriber') : '@@rxSubscriber';
	/**
	 * @deprecated use rxSubscriber instead
	 */
	exports.$$rxSubscriber = exports.rxSubscriber;
	//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 28 */
/*!*************************************!*\
  !*** ./~/rxjs/symbol/observable.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var root_1 = __webpack_require__(/*! ../util/root */ 23);
	function getSymbolObservable(context) {
	    var $$observable;
	    var _Symbol = context.Symbol;
	    if (typeof _Symbol === 'function') {
	        if (_Symbol.observable) {
	            $$observable = _Symbol.observable;
	        } else {
	            $$observable = _Symbol('observable');
	            _Symbol.observable = $$observable;
	        }
	    } else {
	        $$observable = '@@observable';
	    }
	    return $$observable;
	}
	exports.getSymbolObservable = getSymbolObservable;
	exports.observable = getSymbolObservable(root_1.root);
	/**
	 * @deprecated use observable instead
	 */
	exports.$$observable = exports.observable;
	//# sourceMappingURL=observable.js.map

/***/ }),
/* 29 */
/*!*****************************!*\
  !*** ./~/rxjs/util/pipe.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var noop_1 = __webpack_require__(/*! ./noop */ 30);
	/* tslint:enable:max-line-length */
	function pipe() {
	    var fns = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        fns[_i - 0] = arguments[_i];
	    }
	    return pipeFromArray(fns);
	}
	exports.pipe = pipe;
	/* @internal */
	function pipeFromArray(fns) {
	    if (!fns) {
	        return noop_1.noop;
	    }
	    if (fns.length === 1) {
	        return fns[0];
	    }
	    return function piped(input) {
	        return fns.reduce(function (prev, fn) {
	            return fn(prev);
	        }, input);
	    };
	}
	exports.pipeFromArray = pipeFromArray;
	//# sourceMappingURL=pipe.js.map

/***/ }),
/* 30 */
/*!*****************************!*\
  !*** ./~/rxjs/util/noop.js ***!
  \*****************************/
/***/ (function(module, exports) {

	"use strict";
	/* tslint:disable:no-empty */
	
	function noop() {}
	exports.noop = noop;
	//# sourceMappingURL=noop.js.map

/***/ }),
/* 31 */
/*!********************************************!*\
  !*** ./~/rxjs/add/observable/fromEvent.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var Observable_1 = __webpack_require__(/*! ../../Observable */ 22);
	var fromEvent_1 = __webpack_require__(/*! ../../observable/fromEvent */ 32);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ }),
/* 32 */
/*!****************************************!*\
  !*** ./~/rxjs/observable/fromEvent.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var FromEventObservable_1 = __webpack_require__(/*! ./FromEventObservable */ 33);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ }),
/* 33 */
/*!**************************************************!*\
  !*** ./~/rxjs/observable/FromEventObservable.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(/*! ../Observable */ 22);
	var tryCatch_1 = __webpack_require__(/*! ../util/tryCatch */ 19);
	var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ 18);
	var errorObject_1 = __webpack_require__(/*! ../util/errorObject */ 20);
	var Subscription_1 = __webpack_require__(/*! ../Subscription */ 15);
	var toString = Object.prototype.toString;
	function isNodeStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isNodeList(sourceObj) {
	    return !!sourceObj && toString.call(sourceObj) === '[object NodeList]';
	}
	function isHTMLCollection(sourceObj) {
	    return !!sourceObj && toString.call(sourceObj) === '[object HTMLCollection]';
	}
	function isEventTarget(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventObservable = function (_super) {
	    __extends(FromEventObservable, _super);
	    function FromEventObservable(sourceObj, eventName, selector, options) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	        this.options = options;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Creates an Observable that emits events of a specific type coming from the
	     * given event target.
	     *
	     * <span class="informal">Creates an Observable from DOM events, or Node.js
	     * EventEmitter events or others.</span>
	     *
	     * <img src="./img/fromEvent.png" width="100%">
	     *
	     * `fromEvent` accepts as a first argument event target, which is an object with methods
	     * for registering event handler functions. As a second argument it takes string that indicates
	     * type of event we want to listen for. `fromEvent` supports selected types of event targets,
	     * which are described in detail below. If your event target does not match any of the ones listed,
	     * you should use {@link fromEventPattern}, which can be used on arbitrary APIs.
	     * When it comes to APIs supported by `fromEvent`, their methods for adding and removing event
	     * handler functions have different names, but they all accept a string describing event type
	     * and function itself, which will be called whenever said event happens.
	     *
	     * Every time resulting Observable is subscribed, event handler function will be registered
	     * to event target on given event type. When that event fires, value
	     * passed as a first argument to registered function will be emitted by output Observable.
	     * When Observable is unsubscribed, function will be unregistered from event target.
	     *
	     * Note that if event target calls registered function with more than one argument, second
	     * and following arguments will not appear in resulting stream. In order to get access to them,
	     * you can pass to `fromEvent` optional project function, which will be called with all arguments
	     * passed to event handler. Output Observable will then emit value returned by project function,
	     * instead of the usual value.
	     *
	     * Remember that event targets listed below are checked via duck typing. It means that
	     * no matter what kind of object you have and no matter what environment you work in,
	     * you can safely use `fromEvent` on that object if it exposes described methods (provided
	     * of course they behave as was described above). So for example if Node.js library exposes
	     * event target which has the same method names as DOM EventTarget, `fromEvent` is still
	     * a good choice.
	     *
	     * If the API you use is more callback then event handler oriented (subscribed
	     * callback function fires only once and thus there is no need to manually
	     * unregister it), you should use {@link bindCallback} or {@link bindNodeCallback}
	     * instead.
	     *
	     * `fromEvent` supports following types of event targets:
	     *
	     * **DOM EventTarget**
	     *
	     * This is an object with `addEventListener` and `removeEventListener` methods.
	     *
	     * In the browser, `addEventListener` accepts - apart from event type string and event
	     * handler function arguments - optional third parameter, which is either an object or boolean,
	     * both used for additional configuration how and when passed function will be called. When
	     * `fromEvent` is used with event target of that type, you can provide this values
	     * as third parameter as well.
	     *
	     * **Node.js EventEmitter**
	     *
	     * An object with `addListener` and `removeListener` methods.
	     *
	     * **JQuery-style event target**
	     *
	     * An object with `on` and `off` methods
	     *
	     * **DOM NodeList**
	     *
	     * List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.
	     *
	     * Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes
	     * it contains and install event handler function in every of them. When returned Observable
	     * is unsubscribed, function will be removed from all Nodes.
	     *
	     * **DOM HtmlCollection**
	     *
	     * Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is
	     * installed and removed in each of elements.
	     *
	     *
	     * @example <caption>Emits clicks happening on the DOM document</caption>
	     * var clicks = Rx.Observable.fromEvent(document, 'click');
	     * clicks.subscribe(x => console.log(x));
	     *
	     * // Results in:
	     * // MouseEvent object logged to console every time a click
	     * // occurs on the document.
	     *
	     *
	     * @example <caption>Use addEventListener with capture option</caption>
	     * var clicksInDocument = Rx.Observable.fromEvent(document, 'click', true); // note optional configuration parameter
	     *                                                                          // which will be passed to addEventListener
	     * var clicksInDiv = Rx.Observable.fromEvent(someDivInDocument, 'click');
	     *
	     * clicksInDocument.subscribe(() => console.log('document'));
	     * clicksInDiv.subscribe(() => console.log('div'));
	     *
	     * // By default events bubble UP in DOM tree, so normally
	     * // when we would click on div in document
	     * // "div" would be logged first and then "document".
	     * // Since we specified optional `capture` option, document
	     * // will catch event when it goes DOWN DOM tree, so console
	     * // will log "document" and then "div".
	     *
	     * @see {@link bindCallback}
	     * @see {@link bindNodeCallback}
	     * @see {@link fromEventPattern}
	     *
	     * @param {EventTargetLike} target The DOM EventTarget, Node.js
	     * EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to.
	     * @param {string} eventName The event name of interest, being emitted by the
	     * `target`.
	     * @param {EventListenerOptions} [options] Options to pass through to addEventListener
	     * @param {SelectorMethodSignature<T>} [selector] An optional function to
	     * post-process results. It takes the arguments from the event handler and
	     * should return a single value.
	     * @return {Observable<T>}
	     * @static true
	     * @name fromEvent
	     * @owner Observable
	     */
	    FromEventObservable.create = function (target, eventName, options, selector) {
	        if (isFunction_1.isFunction(options)) {
	            selector = options;
	            options = undefined;
	        }
	        return new FromEventObservable(target, eventName, selector, options);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
	        var unsubscribe;
	        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
	            }
	        } else if (isEventTarget(sourceObj)) {
	            var source_1 = sourceObj;
	            sourceObj.addEventListener(eventName, handler, options);
	            unsubscribe = function unsubscribe() {
	                return source_1.removeEventListener(eventName, handler);
	            };
	        } else if (isJQueryStyleEventEmitter(sourceObj)) {
	            var source_2 = sourceObj;
	            sourceObj.on(eventName, handler);
	            unsubscribe = function unsubscribe() {
	                return source_2.off(eventName, handler);
	            };
	        } else if (isNodeStyleEventEmitter(sourceObj)) {
	            var source_3 = sourceObj;
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function unsubscribe() {
	                return source_3.removeListener(eventName, handler);
	            };
	        } else {
	            throw new TypeError('Invalid event target');
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
	        var options = this.options;
	        var selector = this.selector;
	        var handler = selector ? function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(errorObject_1.errorObject.e);
	            } else {
	                subscriber.next(result);
	            }
	        } : function (e) {
	            return subscriber.next(e);
	        };
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
	    };
	    return FromEventObservable;
	}(Observable_1.Observable);
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=FromEventObservable.js.map

/***/ }),
/* 34 */
/*!*********************************!*\
  !*** ./~/rxjs/ReplaySubject.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(/*! ./Subject */ 35);
	var queue_1 = __webpack_require__(/*! ./scheduler/queue */ 38);
	var Subscription_1 = __webpack_require__(/*! ./Subscription */ 15);
	var observeOn_1 = __webpack_require__(/*! ./operators/observeOn */ 45);
	var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 36);
	var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ 37);
	/**
	 * @class ReplaySubject<T>
	 */
	var ReplaySubject = function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) {
	            bufferSize = Number.POSITIVE_INFINITY;
	        }
	        if (windowTime === void 0) {
	            windowTime = Number.POSITIVE_INFINITY;
	        }
	        _super.call(this);
	        this.scheduler = scheduler;
	        this._events = [];
	        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        this._windowTime = windowTime < 1 ? 1 : windowTime;
	    }
	    ReplaySubject.prototype.next = function (value) {
	        var now = this._getNow();
	        this._events.push(new ReplayEvent(now, value));
	        this._trimBufferThenGetEvents();
	        _super.prototype.next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var _events = this._trimBufferThenGetEvents();
	        var scheduler = this.scheduler;
	        var subscription;
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        } else if (this.hasError) {
	            subscription = Subscription_1.Subscription.EMPTY;
	        } else if (this.isStopped) {
	            subscription = Subscription_1.Subscription.EMPTY;
	        } else {
	            this.observers.push(subscriber);
	            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	        }
	        if (scheduler) {
	            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
	        }
	        var len = _events.length;
	        for (var i = 0; i < len && !subscriber.closed; i++) {
	            subscriber.next(_events[i].value);
	        }
	        if (this.hasError) {
	            subscriber.error(this.thrownError);
	        } else if (this.isStopped) {
	            subscriber.complete();
	        }
	        return subscription;
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue_1.queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
	        var now = this._getNow();
	        var _bufferSize = this._bufferSize;
	        var _windowTime = this._windowTime;
	        var _events = this._events;
	        var eventsCount = _events.length;
	        var spliceCount = 0;
	        // Trim events that fall out of the time window.
	        // Start at the front of the list. Break early once
	        // we encounter an event that falls within the window.
	        while (spliceCount < eventsCount) {
	            if (now - _events[spliceCount].time < _windowTime) {
	                break;
	            }
	            spliceCount++;
	        }
	        if (eventsCount > _bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
	        }
	        if (spliceCount > 0) {
	            _events.splice(0, spliceCount);
	        }
	        return _events;
	    };
	    return ReplaySubject;
	}(Subject_1.Subject);
	exports.ReplaySubject = ReplaySubject;
	var ReplayEvent = function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	}();
	//# sourceMappingURL=ReplaySubject.js.map

/***/ }),
/* 35 */
/*!***************************!*\
  !*** ./~/rxjs/Subject.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(/*! ./Observable */ 22);
	var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ 25);
	var Subscription_1 = __webpack_require__(/*! ./Subscription */ 15);
	var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 36);
	var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ 37);
	var rxSubscriber_1 = __webpack_require__(/*! ./symbol/rxSubscriber */ 27);
	/**
	 * @class SubjectSubscriber<T>
	 */
	var SubjectSubscriber = function (_super) {
	    __extends(SubjectSubscriber, _super);
	    function SubjectSubscriber(destination) {
	        _super.call(this, destination);
	        this.destination = destination;
	    }
	    return SubjectSubscriber;
	}(Subscriber_1.Subscriber);
	exports.SubjectSubscriber = SubjectSubscriber;
	/**
	 * @class Subject<T>
	 */
	var Subject = function (_super) {
	    __extends(Subject, _super);
	    function Subject() {
	        _super.call(this);
	        this.observers = [];
	        this.closed = false;
	        this.isStopped = false;
	        this.hasError = false;
	        this.thrownError = null;
	    }
	    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
	        return new SubjectSubscriber(this);
	    };
	    Subject.prototype.lift = function (operator) {
	        var subject = new AnonymousSubject(this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.next = function (value) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        if (!this.isStopped) {
	            var observers = this.observers;
	            var len = observers.length;
	            var copy = observers.slice();
	            for (var i = 0; i < len; i++) {
	                copy[i].next(value);
	            }
	        }
	    };
	    Subject.prototype.error = function (err) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        this.hasError = true;
	        this.thrownError = err;
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].error(err);
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.complete = function () {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].complete();
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.unsubscribe = function () {
	        this.isStopped = true;
	        this.closed = true;
	        this.observers = null;
	    };
	    Subject.prototype._trySubscribe = function (subscriber) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        } else {
	            return _super.prototype._trySubscribe.call(this, subscriber);
	        }
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        } else if (this.hasError) {
	            subscriber.error(this.thrownError);
	            return Subscription_1.Subscription.EMPTY;
	        } else if (this.isStopped) {
	            subscriber.complete();
	            return Subscription_1.Subscription.EMPTY;
	        } else {
	            this.observers.push(subscriber);
	            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	        }
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new Observable_1.Observable();
	        observable.source = this;
	        return observable;
	    };
	    Subject.create = function (destination, source) {
	        return new AnonymousSubject(destination, source);
	    };
	    return Subject;
	}(Observable_1.Observable);
	exports.Subject = Subject;
	/**
	 * @class AnonymousSubject<T>
	 */
	var AnonymousSubject = function (_super) {
	    __extends(AnonymousSubject, _super);
	    function AnonymousSubject(destination, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.source = source;
	    }
	    AnonymousSubject.prototype.next = function (value) {
	        var destination = this.destination;
	        if (destination && destination.next) {
	            destination.next(value);
	        }
	    };
	    AnonymousSubject.prototype.error = function (err) {
	        var destination = this.destination;
	        if (destination && destination.error) {
	            this.destination.error(err);
	        }
	    };
	    AnonymousSubject.prototype.complete = function () {
	        var destination = this.destination;
	        if (destination && destination.complete) {
	            this.destination.complete();
	        }
	    };
	    AnonymousSubject.prototype._subscribe = function (subscriber) {
	        var source = this.source;
	        if (source) {
	            return this.source.subscribe(subscriber);
	        } else {
	            return Subscription_1.Subscription.EMPTY;
	        }
	    };
	    return AnonymousSubject;
	}(Subject);
	exports.AnonymousSubject = AnonymousSubject;
	//# sourceMappingURL=Subject.js.map

/***/ }),
/* 36 */
/*!************************************************!*\
  !*** ./~/rxjs/util/ObjectUnsubscribedError.js ***!
  \************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an action is invalid because the object has been
	 * unsubscribed.
	 *
	 * @see {@link Subject}
	 * @see {@link BehaviorSubject}
	 *
	 * @class ObjectUnsubscribedError
	 */
	var ObjectUnsubscribedError = function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        var err = _super.call(this, 'object unsubscribed');
	        this.name = err.name = 'ObjectUnsubscribedError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return ObjectUnsubscribedError;
	}(Error);
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),
/* 37 */
/*!***************************************!*\
  !*** ./~/rxjs/SubjectSubscription.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(/*! ./Subscription */ 15);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectSubscription = function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, subscriber) {
	        _super.call(this);
	        this.subject = subject;
	        this.subscriber = subscriber;
	        this.closed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.closed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.subscriber);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription_1.Subscription);
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),
/* 38 */
/*!***********************************!*\
  !*** ./~/rxjs/scheduler/queue.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var QueueAction_1 = __webpack_require__(/*! ./QueueAction */ 39);
	var QueueScheduler_1 = __webpack_require__(/*! ./QueueScheduler */ 42);
	/**
	 *
	 * Queue Scheduler
	 *
	 * <span class="informal">Put every next task on a queue, instead of executing it immediately</span>
	 *
	 * `queue` scheduler, when used with delay, behaves the same as {@link async} scheduler.
	 *
	 * When used without delay, it schedules given task synchronously - executes it right when
	 * it is scheduled. However when called recursively, that is when inside the scheduled task,
	 * another task is scheduled with queue scheduler, instead of executing immediately as well,
	 * that task will be put on a queue and wait for current one to finish.
	 *
	 * This means that when you execute task with `queue` scheduler, you are sure it will end
	 * before any other task scheduled with that scheduler will start.
	 *
	 * @examples <caption>Schedule recursively first, then do something</caption>
	 *
	 * Rx.Scheduler.queue.schedule(() => {
	 *   Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue
	 *
	 *   console.log('first');
	 * });
	 *
	 * // Logs:
	 * // "first"
	 * // "second"
	 *
	 *
	 * @example <caption>Reschedule itself recursively</caption>
	 *
	 * Rx.Scheduler.queue.schedule(function(state) {
	 *   if (state !== 0) {
	 *     console.log('before', state);
	 *     this.schedule(state - 1); // `this` references currently executing Action,
	 *                               // which we reschedule with new state
	 *     console.log('after', state);
	 *   }
	 * }, 0, 3);
	 *
	 * // In scheduler that runs recursively, you would expect:
	 * // "before", 3
	 * // "before", 2
	 * // "before", 1
	 * // "after", 1
	 * // "after", 2
	 * // "after", 3
	 *
	 * // But with queue it logs:
	 * // "before", 3
	 * // "after", 3
	 * // "before", 2
	 * // "after", 2
	 * // "before", 1
	 * // "after", 1
	 *
	 *
	 * @static true
	 * @name queue
	 * @owner Scheduler
	 */
	exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
	//# sourceMappingURL=queue.js.map

/***/ }),
/* 39 */
/*!*****************************************!*\
  !*** ./~/rxjs/scheduler/QueueAction.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ 40);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var QueueAction = function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction(scheduler, work) {
	        _super.call(this, scheduler, work);
	        this.scheduler = scheduler;
	        this.work = work;
	    }
	    QueueAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if (delay > 0) {
	            return _super.prototype.schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        this.scheduler.flush(this);
	        return this;
	    };
	    QueueAction.prototype.execute = function (state, delay) {
	        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
	    };
	    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        // If delay exists and is greater than 0, or if the delay is null (the
	        // action wasn't rescheduled) but was originally scheduled as an async
	        // action, then recycle as an async action.
	        if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
	            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
	        }
	        // Otherwise flush the scheduler starting with this action.
	        return scheduler.flush(this);
	    };
	    return QueueAction;
	}(AsyncAction_1.AsyncAction);
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ }),
/* 40 */
/*!*****************************************!*\
  !*** ./~/rxjs/scheduler/AsyncAction.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(/*! ../util/root */ 23);
	var Action_1 = __webpack_require__(/*! ./Action */ 41);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AsyncAction = function (_super) {
	    __extends(AsyncAction, _super);
	    function AsyncAction(scheduler, work) {
	        _super.call(this, scheduler, work);
	        this.scheduler = scheduler;
	        this.work = work;
	        this.pending = false;
	    }
	    AsyncAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        if (this.closed) {
	            return this;
	        }
	        // Always replace the current state with the new state.
	        this.state = state;
	        // Set the pending flag indicating that this action has been scheduled, or
	        // has recursively rescheduled itself.
	        this.pending = true;
	        var id = this.id;
	        var scheduler = this.scheduler;
	        //
	        // Important implementation note:
	        //
	        // Actions only execute once by default, unless rescheduled from within the
	        // scheduled callback. This allows us to implement single and repeat
	        // actions via the same code path, without adding API surface area, as well
	        // as mimic traditional recursion but across asynchronous boundaries.
	        //
	        // However, JS runtimes and timers distinguish between intervals achieved by
	        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
	        // serial `setTimeout` calls can be individually delayed, which delays
	        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
	        // guarantee the interval callback will be invoked more precisely to the
	        // interval period, regardless of load.
	        //
	        // Therefore, we use `setInterval` to schedule single and repeat actions.
	        // If the action reschedules itself with the same delay, the interval is not
	        // canceled. If the action doesn't reschedule, or reschedules with a
	        // different delay, the interval will be canceled after scheduled callback
	        // execution.
	        //
	        if (id != null) {
	            this.id = this.recycleAsyncId(scheduler, id, delay);
	        }
	        this.delay = delay;
	        // If this action has already an async Id, don't request a new one.
	        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
	        return this;
	    };
	    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
	    };
	    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        // If this action is rescheduled with the same delay time, don't clear the interval id.
	        if (delay !== null && this.delay === delay && this.pending === false) {
	            return id;
	        }
	        // Otherwise, if the action's delay time is different from the current delay,
	        // or the action has been rescheduled before it's executed, clear the interval id
	        return root_1.root.clearInterval(id) && undefined || undefined;
	    };
	    /**
	     * Immediately executes this action and the `work` it contains.
	     * @return {any}
	     */
	    AsyncAction.prototype.execute = function (state, delay) {
	        if (this.closed) {
	            return new Error('executing a cancelled action');
	        }
	        this.pending = false;
	        var error = this._execute(state, delay);
	        if (error) {
	            return error;
	        } else if (this.pending === false && this.id != null) {
	            // Dequeue if the action didn't reschedule itself. Don't call
	            // unsubscribe(), because the action could reschedule later.
	            // For example:
	            // ```
	            // scheduler.schedule(function doWork(counter) {
	            //   /* ... I'm a busy worker bee ... */
	            //   var originalAction = this;
	            //   /* wait 100ms before rescheduling the action */
	            //   setTimeout(function () {
	            //     originalAction.schedule(counter + 1);
	            //   }, 100);
	            // }, 1000);
	            // ```
	            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
	        }
	    };
	    AsyncAction.prototype._execute = function (state, delay) {
	        var errored = false;
	        var errorValue = undefined;
	        try {
	            this.work(state);
	        } catch (e) {
	            errored = true;
	            errorValue = !!e && e || new Error(e);
	        }
	        if (errored) {
	            this.unsubscribe();
	            return errorValue;
	        }
	    };
	    AsyncAction.prototype._unsubscribe = function () {
	        var id = this.id;
	        var scheduler = this.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        this.work = null;
	        this.state = null;
	        this.pending = false;
	        this.scheduler = null;
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        if (id != null) {
	            this.id = this.recycleAsyncId(scheduler, id, null);
	        }
	        this.delay = null;
	    };
	    return AsyncAction;
	}(Action_1.Action);
	exports.AsyncAction = AsyncAction;
	//# sourceMappingURL=AsyncAction.js.map

/***/ }),
/* 41 */
/*!************************************!*\
  !*** ./~/rxjs/scheduler/Action.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(/*! ../Subscription */ 15);
	/**
	 * A unit of work to be executed in a {@link Scheduler}. An action is typically
	 * created from within a Scheduler and an RxJS user does not need to concern
	 * themselves about creating and manipulating an Action.
	 *
	 * ```ts
	 * class Action<T> extends Subscription {
	 *   new (scheduler: Scheduler, work: (state?: T) => void);
	 *   schedule(state?: T, delay: number = 0): Subscription;
	 * }
	 * ```
	 *
	 * @class Action<T>
	 */
	var Action = function (_super) {
	    __extends(Action, _super);
	    function Action(scheduler, work) {
	        _super.call(this);
	    }
	    /**
	     * Schedules this action on its parent Scheduler for execution. May be passed
	     * some context object, `state`. May happen at some point in the future,
	     * according to the `delay` parameter, if specified.
	     * @param {T} [state] Some contextual data that the `work` function uses when
	     * called by the Scheduler.
	     * @param {number} [delay] Time to wait before executing the work, where the
	     * time unit is implicit and defined by the Scheduler.
	     * @return {void}
	     */
	    Action.prototype.schedule = function (state, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        return this;
	    };
	    return Action;
	}(Subscription_1.Subscription);
	exports.Action = Action;
	//# sourceMappingURL=Action.js.map

/***/ }),
/* 42 */
/*!********************************************!*\
  !*** ./~/rxjs/scheduler/QueueScheduler.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ 43);
	var QueueScheduler = function (_super) {
	    __extends(QueueScheduler, _super);
	    function QueueScheduler() {
	        _super.apply(this, arguments);
	    }
	    return QueueScheduler;
	}(AsyncScheduler_1.AsyncScheduler);
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ }),
/* 43 */
/*!********************************************!*\
  !*** ./~/rxjs/scheduler/AsyncScheduler.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ 44);
	var AsyncScheduler = function (_super) {
	    __extends(AsyncScheduler, _super);
	    function AsyncScheduler() {
	        _super.apply(this, arguments);
	        this.actions = [];
	        /**
	         * A flag to indicate whether the Scheduler is currently executing a batch of
	         * queued actions.
	         * @type {boolean}
	         */
	        this.active = false;
	        /**
	         * An internal ID used to track the latest asynchronous task such as those
	         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
	         * others.
	         * @type {any}
	         */
	        this.scheduled = undefined;
	    }
	    AsyncScheduler.prototype.flush = function (action) {
	        var actions = this.actions;
	        if (this.active) {
	            actions.push(action);
	            return;
	        }
	        var error;
	        this.active = true;
	        do {
	            if (error = action.execute(action.state, action.delay)) {
	                break;
	            }
	        } while (action = actions.shift()); // exhaust the scheduler queue
	        this.active = false;
	        if (error) {
	            while (action = actions.shift()) {
	                action.unsubscribe();
	            }
	            throw error;
	        }
	    };
	    return AsyncScheduler;
	}(Scheduler_1.Scheduler);
	exports.AsyncScheduler = AsyncScheduler;
	//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),
/* 44 */
/*!*****************************!*\
  !*** ./~/rxjs/Scheduler.js ***!
  \*****************************/
/***/ (function(module, exports) {

	"use strict";
	/**
	 * An execution context and a data structure to order tasks and schedule their
	 * execution. Provides a notion of (potentially virtual) time, through the
	 * `now()` getter method.
	 *
	 * Each unit of work in a Scheduler is called an {@link Action}.
	 *
	 * ```ts
	 * class Scheduler {
	 *   now(): number;
	 *   schedule(work, delay?, state?): Subscription;
	 * }
	 * ```
	 *
	 * @class Scheduler
	 */
	
	var Scheduler = function () {
	    function Scheduler(SchedulerAction, now) {
	        if (now === void 0) {
	            now = Scheduler.now;
	        }
	        this.SchedulerAction = SchedulerAction;
	        this.now = now;
	    }
	    /**
	     * Schedules a function, `work`, for execution. May happen at some point in
	     * the future, according to the `delay` parameter, if specified. May be passed
	     * some context object, `state`, which will be passed to the `work` function.
	     *
	     * The given arguments will be processed an stored as an Action object in a
	     * queue of actions.
	     *
	     * @param {function(state: ?T): ?Subscription} work A function representing a
	     * task, or some unit of work to be executed by the Scheduler.
	     * @param {number} [delay] Time to wait before executing the work, where the
	     * time unit is implicit and defined by the Scheduler itself.
	     * @param {T} [state] Some contextual data that the `work` function uses when
	     * called by the Scheduler.
	     * @return {Subscription} A subscription in order to be able to unsubscribe
	     * the scheduled work.
	     */
	    Scheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        return new this.SchedulerAction(this, work).schedule(state, delay);
	    };
	    Scheduler.now = Date.now ? Date.now : function () {
	        return +new Date();
	    };
	    return Scheduler;
	}();
	exports.Scheduler = Scheduler;
	//# sourceMappingURL=Scheduler.js.map

/***/ }),
/* 45 */
/*!***************************************!*\
  !*** ./~/rxjs/operators/observeOn.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 25);
	var Notification_1 = __webpack_require__(/*! ../Notification */ 46);
	/**
	 *
	 * Re-emits all notifications from source Observable with specified scheduler.
	 *
	 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
	 *
	 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
	 * notifications emitted by the source Observable. It might be useful, if you do not have control over
	 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
	 *
	 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
	 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
	 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
	 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
	 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
	 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
	 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
	 * little bit more, to ensure that they are emitted at expected moments.
	 *
	 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
	 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
	 * will delay all notifications - including error notifications - while `delay` will pass through error
	 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
	 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
	 * for notification emissions in general.
	 *
	 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
	 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
	 *                                               // with async scheduler by default...
	 *
	 * intervals
	 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
	 * .subscribe(val => {                           // scheduler to ensure smooth animation.
	 *   someDiv.style.height = val + 'px';
	 * });
	 *
	 * @see {@link delay}
	 *
	 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
	 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
	 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
	 * but with provided scheduler.
	 *
	 * @method observeOn
	 * @owner Observable
	 */
	function observeOn(scheduler, delay) {
	    if (delay === void 0) {
	        delay = 0;
	    }
	    return function observeOnOperatorFunction(source) {
	        return source.lift(new ObserveOnOperator(scheduler, delay));
	    };
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
	    };
	    return ObserveOnOperator;
	}();
	exports.ObserveOnOperator = ObserveOnOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ObserveOnSubscriber = function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) {
	            delay = 0;
	        }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (arg) {
	        var notification = arg.notification,
	            destination = arg.destination;
	        notification.observe(destination);
	        this.unsubscribe();
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber);
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}();
	exports.ObserveOnMessage = ObserveOnMessage;
	//# sourceMappingURL=observeOn.js.map

/***/ }),
/* 46 */
/*!********************************!*\
  !*** ./~/rxjs/Notification.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var Observable_1 = __webpack_require__(/*! ./Observable */ 22);
	/**
	 * Represents a push-based event or value that an {@link Observable} can emit.
	 * This class is particularly useful for operators that manage notifications,
	 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
	 * others. Besides wrapping the actual delivered value, it also annotates it
	 * with metadata of, for instance, what type of push message it is (`next`,
	 * `error`, or `complete`).
	 *
	 * @see {@link materialize}
	 * @see {@link dematerialize}
	 * @see {@link observeOn}
	 *
	 * @class Notification<T>
	 */
	var Notification = function () {
	    function Notification(kind, value, error) {
	        this.kind = kind;
	        this.value = value;
	        this.error = error;
	        this.hasValue = kind === 'N';
	    }
	    /**
	     * Delivers to the given `observer` the value wrapped by this Notification.
	     * @param {Observer} observer
	     * @return
	     */
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.error);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    /**
	     * Given some {@link Observer} callbacks, deliver the value represented by the
	     * current Notification to the correctly corresponding callback.
	     * @param {function(value: T): void} next An Observer `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.error);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    /**
	     * Takes an Observer or its individual callback functions, and calls `observe`
	     * or `do` methods accordingly.
	     * @param {Observer|function(value: T): void} nextOrObserver An Observer or
	     * the `next` callback.
	     * @param {function(err: any): void} [error] An Observer `error` callback.
	     * @param {function(): void} [complete] An Observer `complete` callback.
	     * @return {any}
	     */
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        } else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    /**
	     * Returns a simple Observable that just delivers the notification represented
	     * by this Notification instance.
	     * @return {any}
	     */
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.error);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	        throw new Error('unexpected notification kind value');
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `next` from a
	     * given value.
	     * @param {T} value The `next` value.
	     * @return {Notification<T>} The "next" Notification representing the
	     * argument.
	     */
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return Notification.undefinedValueNotification;
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `error` from a
	     * given error.
	     * @param {any} [err] The `error` error.
	     * @return {Notification<T>} The "error" Notification representing the
	     * argument.
	     */
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    /**
	     * A shortcut to create a Notification instance of the type `complete`.
	     * @return {Notification<any>} The valueless "complete" Notification.
	     */
	    Notification.createComplete = function () {
	        return Notification.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}();
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ }),
/* 47 */
/*!**************************************!*\
  !*** ./~/cells-bridge/src/router.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _route = __webpack_require__(/*! ./route */ 48);
	
	var _route2 = _interopRequireDefault(_route);
	
	var _Subscription2 = __webpack_require__(/*! rxjs/Subscription */ 15);
	
	var _Observable = __webpack_require__(/*! rxjs/Observable */ 22);
	
	__webpack_require__(/*! rxjs/add/observable/fromEvent */ 31);
	
	__webpack_require__(/*! rxjs/add/observable/merge */ 49);
	
	__webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ 64);
	
	__webpack_require__(/*! rxjs/add/operator/map */ 67);
	
	__webpack_require__(/*! rxjs/add/operator/startWith */ 70);
	
	var _events = __webpack_require__(/*! ./manager/events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EMPTY = _Subscription2.Subscription.EMPTY;
	
	
	var instance = null;
	
	var _useHistory = false;
	var _routes = {};
	var _disposables = void 0;
	var _currentRoute = void 0;
	var _404Route = void 0;
	
	/**
	 * @class SerialSubscription
	 * Mimics behavior of SerialDisposable in RxJS v4,
	 * allows to add only single subscription. If new subscription's added,
	 * existing subscription will be unsubscribed.
	 *
	 * By design of RxJS v5 it is no longer recommended to manage subscription
	 * imperatively vis various kind of subscription, reason it only have single
	 * kind of composite subscription. This implementation is for interop between
	 * existing codebases.
	 * @extends {Subscription}
	 */
	
	var SerialSubscription = function (_Subscription) {
	  _inherits(SerialSubscription, _Subscription);
	
	  function SerialSubscription() {
	    _classCallCheck(this, SerialSubscription);
	
	    var _this = _possibleConstructorReturn(this, (SerialSubscription.__proto__ || Object.getPrototypeOf(SerialSubscription)).call(this));
	
	    _this._currentSubscription = EMPTY;
	    return _this;
	  }
	
	  /**
	   * Adds a tear down to be called during the unsubscribe() of this
	   * Subscription.
	   *
	   * If there's existing subscription, it'll be unsubscribed and
	   * removed.
	   *
	   * @param {TeardownLogic} teardown The additional logic to execute on
	   * teardown.
	   * @return {Subscription} Returns the Subscription used or created to be
	   * added to the inner subscriptions list. This Subscription can be used with
	   * `remove()` to remove the passed teardown logic from the inner subscriptions
	   * list.
	   */
	
	
	  _createClass(SerialSubscription, [{
	    key: 'add',
	    value: function add(teardown) {
	      if (this.closed) return;
	      if (typeof teardown === 'function') teardown = new _Subscription2.Subscription(teardown);
	
	      if (this._currentSubscription) {
	        this.remove(this._currentSubscription);
	        this._currentSubscription.unsubscribe();
	        this._currentSubscription = null;
	      }
	
	      _get(SerialSubscription.prototype.__proto__ || Object.getPrototypeOf(SerialSubscription.prototype), 'add', this).call(this, this._currentSubscription = teardown);
	    }
	  }]);
	
	  return SerialSubscription;
	}(_Subscription2.Subscription);
	
	var Router = function () {
	  function Router() {
	    var _this2 = this;
	
	    _classCallCheck(this, Router);
	
	    if (!instance) {
	      instance = this;
	    }
	
	    _events2.default.on('template-transition-end', function () {
	      _this2.isNavigationInProgress = false;
	    });
	
	    return instance;
	  }
	
	  /**
	   * @param {Boolean} value
	   */
	
	
	  _createClass(Router, [{
	    key: 'handler',
	
	    /**
	     * @param {Object} route
	     */
	    // eslint-disable-next-line no-unused-vars
	    value: function handler(route) {
	      // Overwrite to make something after all matched routes
	    }
	  }, {
	    key: 'addRoute',
	    value: function addRoute(name, pattern) {
	      this.routes[name] = new _route2.default(name, pattern);
	      return this.routes[name];
	    }
	  }, {
	    key: 'addRoutes',
	    value: function addRoutes(routes) {
	      var __routes = {};
	      for (var routeName in routes) {
	        __routes[routeName] = this.addRoute(routeName, routes[routeName]);
	      }
	      return __routes;
	    }
	
	    /**
	     * @private
	     * @return {String}
	     */
	
	  }, {
	    key: '_getHashPath',
	    value: function _getHashPath() {
	      return location.hash.replace(Router.HASH_PREFIX, '/').replace(Router.EMPTY, '/');
	    }
	
	    /**
	     * @private
	     * @return {Observable}
	     */
	
	  }, {
	    key: '_observeHashChange',
	    value: function _observeHashChange() {
	      return _Observable.Observable.fromEvent(window, 'hashchange').map(this._getHashPath).startWith(this._getHashPath());
	    }
	
	    /**
	     * @private
	     * @return {String}
	     */
	
	  }, {
	    key: '_getURLPath',
	    value: function _getURLPath() {
	      return location.pathname.replace(Router.PATH_PREFIX, '/');
	    }
	
	    /**
	     * @private
	     * @return {Observable}
	     */
	
	  }, {
	    key: '_observeStateChange',
	    value: function _observeStateChange() {
	      return _Observable.Observable.merge(_Observable.Observable.fromEvent(window, 'popstate'), _Observable.Observable.fromEvent(window, 'pushstate')).map(this._getURLPath).startWith(this._getURLPath());
	    }
	
	    /**
	     * @private
	     * @param {String}
	     * @return {Array}
	     */
	
	  }, {
	    key: 'matchRoute',
	    value: function matchRoute(fullPath) {
	      var route;
	
	      var _fullPath$split = fullPath.split('?'),
	          _fullPath$split2 = _slicedToArray(_fullPath$split, 2),
	          path = _fullPath$split2[0],
	          query = _fullPath$split2[1];
	
	      query = this._parseQuery(query);
	      for (var routeName in this.routes) {
	        route = this.routes[routeName];
	        if ((!route.is404() || route.isAccessible) && route.matchPath(path)) {
	          route.parsePath(path);
	          route.parseQuery(query);
	          return route;
	        }
	      }
	    }
	  }, {
	    key: '_parseQuery',
	    value: function _parseQuery(querystr) {
	      var params = {};
	      if (querystr) {
	        // Split into key/value pairs
	        var queries = querystr.split('&');
	        if (queries) {
	          // Convert the array of strings into an object
	          var key = void 0,
	              value = void 0,
	              i = void 0,
	              len = queries.length;
	          for (i = 0; i < len; i++) {
	            var _queries$i$split = queries[i].split('=');
	
	            var _queries$i$split2 = _slicedToArray(_queries$i$split, 2);
	
	            key = _queries$i$split2[0];
	            value = _queries$i$split2[1];
	
	            params[key] = decodeURIComponent(value);
	          }
	        }
	      }
	      return params;
	    }
	  }, {
	    key: '_setup404',
	    value: function _setup404() {
	      var route404 = this.routes[_route2.default._404_PAGE_NAME];
	
	      // We check if 404 route have a pattern...
	      if (route404 && route404.pattern !== '') {
	        var routeWithSamePattern = this.getRouteWithPattern(route404.pattern);
	
	        // We set redirect page based on, if it's a repeated URL pattern or a unique one.
	        // If it's unique, we set it accesible from the router.
	        // Otherwise, it's going to NOT be accesible from the router (multiple router with same pattern)
	        route404.redirectPage = routeWithSamePattern ? routeWithSamePattern.name : route404.name;
	        route404.isAccessible = !routeWithSamePattern;
	      }
	
	      return route404;
	    }
	  }, {
	    key: 'getRouteWithPattern',
	    value: function getRouteWithPattern(patternToMath) {
	      for (var routeName in this.routes) {
	        var route = this.routes[routeName];
	
	        // we only take care about routes with same patterns that aren't the same
	        if (!route.is404() && route.pattern === patternToMath) {
	          return route;
	        }
	      }
	
	      return null;
	    }
	
	    /**
	     *
	     * @return {Subscription}
	     */
	
	  }, {
	    key: 'start',
	    value: function start() {
	      var _this3 = this;
	
	      /* istanbul ignore else */
	      if (!_disposables) {
	        var active = new SerialSubscription();
	
	        _404Route = this._setup404();
	
	        var source = this.useHistory ? this._observeStateChange() : this._observeHashChange();
	
	        var subscription = source.distinctUntilChanged().map(this.matchRoute.bind(this)).forEach(function (route) {
	          if (route) {
	            _currentRoute = route;
	            var disposable = new _Subscription2.Subscription(function () {
	              return _this3.currentRoute;
	            });
	            active.add(disposable);
	            _this3.currentRoute.handler();
	            _this3.handler(_this3.currentRoute);
	          } else if (_404Route && _404Route.redirectPage) {
	            _this3.goReplacing(_404Route.redirectPage);
	          }
	        });
	
	        _disposables = new _Subscription2.Subscription(subscription, active);
	      }
	
	      return _disposables;
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (_disposables) {
	        _disposables.unsubscribe();
	        _disposables = null;
	      }
	      this.isNavigationInProgress = false;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.stop();
	      this.routes = {};
	    }
	  }, {
	    key: 'getPath',
	    value: function getPath(routeName, params) {
	      var route = this.routes[routeName];
	      if (route) {
	        return route.path(params);
	      } else {
	        console.error('Wrong route name: %s, valid route names: %s', routeName, Object.keys(this.routes).join(', '));
	      }
	    }
	  }, {
	    key: 'go',
	    value: function go(name, params, replace) {
	      if (this.isNavigationInProgress) {
	        return;
	      }
	
	      var sanitizedName = name.replace(Router.LTRIM_SLASH, '');
	      var path = this.getPath(sanitizedName, params);
	      if (path !== this._getHashPath()) {
	        this.isNavigationInProgress = true;
	        if (this.useHistory) {
	          if (replace) {
	            this.historyReplaceState(path);
	          } else {
	            this.historyPushState(path);
	          }
	        } else {
	          if (replace) {
	            this.locationReplace(path);
	          } else {
	            this.locationHash(path);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'goReplacing',
	    value: function goReplacing(name, params) {
	      this.go(name, params, true);
	    }
	  }, {
	    key: 'historyReplaceState',
	    value: function historyReplaceState(path) {
	      history.replaceState(null, null, path);
	    }
	  }, {
	    key: 'historyPushState',
	    value: function historyPushState(path) {
	      history.pushState(null, null, path);
	    }
	  }, {
	    key: 'locationReplace',
	    value: function locationReplace(path) {
	      location.replace('#!' + path);
	    }
	  }, {
	    key: 'locationHash',
	    value: function locationHash(path) {
	      location.hash = '#!' + path;
	    }
	  }, {
	    key: 'useHistory',
	    set: function set(value) {
	      /* istanbul ignore else */
	      if (Router.SUPPORTS_HISTORY_API) {
	        _useHistory = value;
	      }
	    },
	    get: function get() {
	      return _useHistory;
	    }
	  }, {
	    key: 'routes',
	    set: function set(routes) {
	      _routes = routes;
	    },
	    get: function get() {
	      return _routes;
	    }
	  }, {
	    key: 'currentRoute',
	    get: function get() {
	      return _currentRoute;
	    }
	  }]);
	
	  return Router;
	}();
	
	Router.SUPPORTS_HISTORY_API = window.history && 'pushState' in window.history;
	Router.PARAM = /(?:\:([^\/]+))/g;
	Router.LTRIM_SLASH = /^\/(\b)/;
	Router.EMPTY = /^$/;
	Router.HASH_PREFIX = /^#\!?\/*/;
	Router.PATH_PREFIX = /^\/*/;
	Router.isNavigationInProgress = false;
	exports.default = Router;

/***/ }),
/* 48 */
/*!*************************************!*\
  !*** ./~/cells-bridge/src/route.js ***!
  \*************************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Route = function () {
	  // needed to discriminate between 404 and rest of pages with same pattern
	
	  /**
	  * @private
	  * @param {String} routeName
	  * * @param {String} pattern
	  * @return {Object}
	  */
	  function Route(name, pattern) {
	    _classCallCheck(this, Route);
	
	    this.name = '';
	    this.pattern = '';
	    this.regexp = null;
	    this.redirectPage = null;
	    this.isAccessible = true;
	
	    this.name = name;
	    this.pattern = pattern;
	    var regexp = pattern.replace(Route.PARAM, '([^/]+)').replace(Route.TRAILING_SLASHES, '/*');
	    this.regexp = new RegExp('^' + regexp + '$');
	    var parts;
	    var keys = [];
	    while ((parts = Route.PARAM.exec(pattern)) !== null) {
	      keys.push(parts[1]);
	    }
	    this.keys = keys;
	  }
	
	  _createClass(Route, [{
	    key: 'path',
	    value: function path(params) {
	      params = params || {};
	      this.params = {};
	      var parts;
	      var path = this.pattern;
	      while ((parts = Route.PARAM.exec(this.pattern)) !== null) {
	        path = path.replace(parts[0], params[parts[1]]);
	        this.params[parts[1]] = params[parts[1]];
	      }
	      var queryParams = [];
	      for (var param in params) {
	        if (!this.params.hasOwnProperty(param)) {
	          queryParams.push(param + '=' + encodeURIComponent(params[param]));
	        }
	      }
	      if (queryParams.length) {
	        path += '?' + queryParams.join('&');
	      }
	      return path;
	    }
	  }, {
	    key: 'matchPath',
	    value: function matchPath(path) {
	      return path.match(this.regexp);
	    }
	  }, {
	    key: 'parsePath',
	    value: function parsePath(path) {
	      var match = this.matchPath(path);
	      this.params = {};
	      if (match) {
	        var i = 1;
	        var parts;
	        while ((parts = Route.PARAM.exec(this.pattern)) !== null) {
	          this.params[parts[1]] = this._parseParam(match[i]);
	          i++;
	        }
	      }
	    }
	  }, {
	    key: 'parseQuery',
	    value: function parseQuery(query) {
	      this.query = query;
	      for (var queryParam in this.query) {
	        this.params[queryParam] = this.query[queryParam];
	      }
	    }
	
	    /**
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'is404',
	    value: function is404() {
	      return this.name === Route._404_PAGE_NAME;
	    }
	
	    /**
	     * @private
	     * @param {String} value
	     * @return {Boolean}
	     */
	
	  }, {
	    key: '_isNumber',
	    value: function _isNumber(value) {
	      return parseInt(value) + '' === value || parseFloat(value) + '' === value;
	    }
	
	    /**
	     * @private
	     * @param {String} param
	     * @return {String|Number}
	     */
	
	  }, {
	    key: '_parseParam',
	    value: function _parseParam(param) {
	      if (this._isNumber(param)) {
	        param = +param;
	      }
	
	      return param;
	    }
	  }, {
	    key: 'handler',
	    value: function handler() {
	      // Overwrite to make something with the current route
	    }
	  }]);
	
	  return Route;
	}();
	
	Route.PARAM = /(?:\:([^\/]+))/g;
	Route.TRAILING_SLASHES = /\/*$/;
	Route._404_PAGE_NAME = '404';
	exports.default = Route;

/***/ }),
/* 49 */
/*!****************************************!*\
  !*** ./~/rxjs/add/observable/merge.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var Observable_1 = __webpack_require__(/*! ../../Observable */ 22);
	var merge_1 = __webpack_require__(/*! ../../observable/merge */ 50);
	Observable_1.Observable.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ }),
/* 50 */
/*!************************************!*\
  !*** ./~/rxjs/observable/merge.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var Observable_1 = __webpack_require__(/*! ../Observable */ 22);
	var ArrayObservable_1 = __webpack_require__(/*! ./ArrayObservable */ 51);
	var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ 54);
	var mergeAll_1 = __webpack_require__(/*! ../operators/mergeAll */ 55);
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (as arguments), and simply
	 * forwards (without doing any transformation) all the values from all the input
	 * Observables to the output Observable. The output Observable only completes
	 * once all input Observables have completed. Any error delivered by an input
	 * Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * // Results in the following:
	 * // timer will emit ascending values, one every second(1000ms) to console
	 * // clicks logs MouseEvents to console everytime the "document" is clicked
	 * // Since the two streams are merged you see these happening
	 * // as they occur.
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * // Results in the following:
	 * // - First timer1 and timer2 will run concurrently
	 * // - timer1 will emit a value every 1000ms for 10 iterations
	 * // - timer2 will emit a value every 2000ms for 6 iterations
	 * // - after timer1 hits it's max iteration, timer2 will
	 * //   continue, and timer3 will start to run concurrently with timer2
	 * // - when timer2 hits it's max iteration it terminates, and
	 * //   timer3 will continue to emit a value every 500ms until it is complete
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {...ObservableInput} observables Input Observables to merge together.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @static true
	 * @name merge
	 * @owner Observable
	 */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler_1.isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    } else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
	        return observables[0];
	    }
	    return mergeAll_1.mergeAll(concurrent)(new ArrayObservable_1.ArrayObservable(observables, scheduler));
	}
	exports.merge = merge;
	//# sourceMappingURL=merge.js.map

/***/ }),
/* 51 */
/*!**********************************************!*\
  !*** ./~/rxjs/observable/ArrayObservable.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(/*! ../Observable */ 22);
	var ScalarObservable_1 = __webpack_require__(/*! ./ScalarObservable */ 52);
	var EmptyObservable_1 = __webpack_require__(/*! ./EmptyObservable */ 53);
	var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ 54);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` IScheduler, which means the `next`
	     * notifications are sent synchronously, although with a different IScheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        } else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        } else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        } else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array,
	            index = state.index,
	            count = state.count,
	            subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.closed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        } else {
	            for (var i = 0; i < count && !subscriber.closed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable);
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ }),
/* 52 */
/*!***********************************************!*\
  !*** ./~/rxjs/observable/ScalarObservable.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(/*! ../Observable */ 22);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	        if (scheduler) {
	            this._isScalar = false;
	        }
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done,
	            value = state.value,
	            subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.closed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        } else {
	            subscriber.next(value);
	            if (!subscriber.closed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable);
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ }),
/* 53 */
/*!**********************************************!*\
  !*** ./~/rxjs/observable/EmptyObservable.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(/*! ../Observable */ 22);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * // Results in the following to the console:
	     * // x is equal to the count on the interval eg(0,1,2,3,...)
	     * // x will occur every 1000ms
	     * // if x % 2 is equal to 1 print abc
	     * // if x % 2 is not equal to 1 nothing will be output
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        } else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable);
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ }),
/* 54 */
/*!************************************!*\
  !*** ./~/rxjs/util/isScheduler.js ***!
  \************************************/
/***/ (function(module, exports) {

	"use strict";
	
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ }),
/* 55 */
/*!**************************************!*\
  !*** ./~/rxjs/operators/mergeAll.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var mergeMap_1 = __webpack_require__(/*! ./mergeMap */ 56);
	var identity_1 = __webpack_require__(/*! ../util/identity */ 63);
	/**
	 * Converts a higher-order Observable into a first-order Observable which
	 * concurrently delivers all values that are emitted on the inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables.</span>
	 *
	 * <img src="./img/mergeAll.png" width="100%">
	 *
	 * `mergeAll` subscribes to an Observable that emits Observables, also known as
	 * a higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, it subscribes to that and delivers all the values from the
	 * inner Observable on the output Observable. The output Observable only
	 * completes once all inner Observables have completed. Any error delivered by
	 * a inner Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var firstOrder = higherOrder.mergeAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
	 * var firstOrder = higherOrder.mergeAll(2);
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link merge}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits values coming from all the
	 * inner Observables emitted by the source Observable.
	 * @method mergeAll
	 * @owner Observable
	 */
	function mergeAll(concurrent) {
	  if (concurrent === void 0) {
	    concurrent = Number.POSITIVE_INFINITY;
	  }
	  return mergeMap_1.mergeMap(identity_1.identity, null, concurrent);
	}
	exports.mergeAll = mergeAll;
	//# sourceMappingURL=mergeAll.js.map

/***/ }),
/* 56 */
/*!**************************************!*\
  !*** ./~/rxjs/operators/mergeMap.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ 57);
	var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ 62);
	/* tslint:enable:max-line-length */
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link mergeAll}.</span>
	 *
	 * <img src="./img/mergeMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger.
	 *
	 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
	 * var letters = Rx.Observable.of('a', 'b', 'c');
	 * var result = letters.mergeMap(x =>
	 *   Rx.Observable.interval(1000).map(i => x+i)
	 * );
	 * result.subscribe(x => console.log(x));
	 *
	 * // Results in the following:
	 * // a0
	 * // b0
	 * // c0
	 * // a1
	 * // b1
	 * // c1
	 * // continues to list a,b,c with respective ascending integers
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): ObservableInput} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and merging the results of the Observables obtained
	 * from this transformation.
	 * @method mergeMap
	 * @owner Observable
	 */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) {
	        concurrent = Number.POSITIVE_INFINITY;
	    }
	    return function mergeMapOperatorFunction(source) {
	        if (typeof resultSelector === 'number') {
	            concurrent = resultSelector;
	            resultSelector = null;
	        }
	        return source.lift(new MergeMapOperator(project, resultSelector, concurrent));
	    };
	}
	exports.mergeMap = mergeMap;
	var MergeMapOperator = function () {
	    function MergeMapOperator(project, resultSelector, concurrent) {
	        if (concurrent === void 0) {
	            concurrent = Number.POSITIVE_INFINITY;
	        }
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer, source) {
	        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
	    };
	    return MergeMapOperator;
	}();
	exports.MergeMapOperator = MergeMapOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MergeMapSubscriber = function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
	        if (concurrent === void 0) {
	            concurrent = Number.POSITIVE_INFINITY;
	        }
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            this._tryNext(value);
	        } else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._tryNext = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        } catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.active++;
	        this._innerSub(result, value, index);
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        } else {
	            this.destination.next(innerValue);
	        }
	    };
	    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        } catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        } else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber);
	exports.MergeMapSubscriber = MergeMapSubscriber;
	//# sourceMappingURL=mergeMap.js.map

/***/ }),
/* 57 */
/*!******************************************!*\
  !*** ./~/rxjs/util/subscribeToResult.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var root_1 = __webpack_require__(/*! ./root */ 23);
	var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ 58);
	var isPromise_1 = __webpack_require__(/*! ./isPromise */ 59);
	var isObject_1 = __webpack_require__(/*! ./isObject */ 17);
	var Observable_1 = __webpack_require__(/*! ../Observable */ 22);
	var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ 60);
	var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ 61);
	var observable_1 = __webpack_require__(/*! ../symbol/observable */ 28);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.closed) {
	        return null;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return null;
	        } else {
	            destination.syncErrorThrowable = true;
	            return result.subscribe(destination);
	        }
	    } else if (isArrayLike_1.isArrayLike(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.closed) {
	            destination.complete();
	        }
	    } else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.closed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) {
	            return destination.error(err);
	        }).then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () {
	                throw err;
	            });
	        });
	        return destination;
	    } else if (result && typeof result[iterator_1.iterator] === 'function') {
	        var iterator = result[iterator_1.iterator]();
	        do {
	            var item = iterator.next();
	            if (item.done) {
	                destination.complete();
	                break;
	            }
	            destination.next(item.value);
	            if (destination.closed) {
	                break;
	            }
	        } while (true);
	    } else if (result && typeof result[observable_1.observable] === 'function') {
	        var obs = result[observable_1.observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
	        } else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    } else {
	        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
	        var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
	        destination.error(new TypeError(msg));
	    }
	    return null;
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ }),
/* 58 */
/*!************************************!*\
  !*** ./~/rxjs/util/isArrayLike.js ***!
  \************************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports.isArrayLike = function (x) {
	  return x && typeof x.length === 'number';
	};
	//# sourceMappingURL=isArrayLike.js.map

/***/ }),
/* 59 */
/*!**********************************!*\
  !*** ./~/rxjs/util/isPromise.js ***!
  \**********************************/
/***/ (function(module, exports) {

	"use strict";
	
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ }),
/* 60 */
/*!***********************************!*\
  !*** ./~/rxjs/symbol/iterator.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var root_1 = __webpack_require__(/*! ../util/root */ 23);
	function symbolIteratorPonyfill(root) {
	    var _Symbol = root.Symbol;
	    if (typeof _Symbol === 'function') {
	        if (!_Symbol.iterator) {
	            _Symbol.iterator = _Symbol('iterator polyfill');
	        }
	        return _Symbol.iterator;
	    } else {
	        // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
	        var Set_1 = root.Set;
	        if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
	            return '@@iterator';
	        }
	        var Map_1 = root.Map;
	        // required for compatability with es6-shim
	        if (Map_1) {
	            var keys = Object.getOwnPropertyNames(Map_1.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
	                if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
	                    return key;
	                }
	            }
	        }
	        return '@@iterator';
	    }
	}
	exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
	exports.iterator = symbolIteratorPonyfill(root_1.root);
	/**
	 * @deprecated use iterator instead
	 */
	exports.$$iterator = exports.iterator;
	//# sourceMappingURL=iterator.js.map

/***/ }),
/* 61 */
/*!***********************************!*\
  !*** ./~/rxjs/InnerSubscriber.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ 25);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerSubscriber = function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber);
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),
/* 62 */
/*!***********************************!*\
  !*** ./~/rxjs/OuterSubscriber.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ 25);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var OuterSubscriber = function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber);
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),
/* 63 */
/*!*********************************!*\
  !*** ./~/rxjs/util/identity.js ***!
  \*********************************/
/***/ (function(module, exports) {

	"use strict";
	
	function identity(x) {
	    return x;
	}
	exports.identity = identity;
	//# sourceMappingURL=identity.js.map

/***/ }),
/* 64 */
/*!*****************************************************!*\
  !*** ./~/rxjs/add/operator/distinctUntilChanged.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var Observable_1 = __webpack_require__(/*! ../../Observable */ 22);
	var distinctUntilChanged_1 = __webpack_require__(/*! ../../operator/distinctUntilChanged */ 65);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 65 */
/*!*************************************************!*\
  !*** ./~/rxjs/operator/distinctUntilChanged.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var distinctUntilChanged_1 = __webpack_require__(/*! ../operators/distinctUntilChanged */ 66);
	/* tslint:enable:max-line-length */
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 *
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 *
	 * If a comparator function is not provided, an equality check is used by default.
	 *
	 * @example <caption>A simple example with numbers</caption>
	 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
	 *   .distinctUntilChanged()
	 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
	 *
	 * @example <caption>An example using a compare function</caption>
	 * interface Person {
	 *    age: number,
	 *    name: string
	 * }
	 *
	 * Observable.of<Person>(
	 *     { age: 4, name: 'Foo'},
	 *     { age: 7, name: 'Bar'},
	 *     { age: 5, name: 'Foo'})
	 *     { age: 6, name: 'Foo'})
	 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
	 *     .subscribe(x => console.log(x));
	 *
	 * // displays:
	 * // { age: 4, name: 'Foo' }
	 * // { age: 7, name: 'Bar' }
	 * // { age: 5, name: 'Foo' }
	 *
	 * @see {@link distinct}
	 * @see {@link distinctUntilKeyChanged}
	 *
	 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	  return distinctUntilChanged_1.distinctUntilChanged(compare, keySelector)(this);
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 66 */
/*!**************************************************!*\
  !*** ./~/rxjs/operators/distinctUntilChanged.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 25);
	var tryCatch_1 = __webpack_require__(/*! ../util/tryCatch */ 19);
	var errorObject_1 = __webpack_require__(/*! ../util/errorObject */ 20);
	/* tslint:enable:max-line-length */
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 *
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 *
	 * If a comparator function is not provided, an equality check is used by default.
	 *
	 * @example <caption>A simple example with numbers</caption>
	 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
	 *   .distinctUntilChanged()
	 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
	 *
	 * @example <caption>An example using a compare function</caption>
	 * interface Person {
	 *    age: number,
	 *    name: string
	 * }
	 *
	 * Observable.of<Person>(
	 *     { age: 4, name: 'Foo'},
	 *     { age: 7, name: 'Bar'},
	 *     { age: 5, name: 'Foo'})
	 *     { age: 6, name: 'Foo'})
	 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
	 *     .subscribe(x => console.log(x));
	 *
	 * // displays:
	 * // { age: 4, name: 'Foo' }
	 * // { age: 7, name: 'Bar' }
	 * // { age: 5, name: 'Foo' }
	 *
	 * @see {@link distinct}
	 * @see {@link distinctUntilKeyChanged}
	 *
	 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	    return function (source) {
	        return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
	    };
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DistinctUntilChangedSubscriber = function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        } else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber);
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 67 */
/*!************************************!*\
  !*** ./~/rxjs/add/operator/map.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var Observable_1 = __webpack_require__(/*! ../../Observable */ 22);
	var map_1 = __webpack_require__(/*! ../../operator/map */ 68);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ }),
/* 68 */
/*!********************************!*\
  !*** ./~/rxjs/operator/map.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var map_1 = __webpack_require__(/*! ../operators/map */ 69);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	  return map_1.map(project, thisArg)(this);
	}
	exports.map = map;
	//# sourceMappingURL=map.js.map

/***/ }),
/* 69 */
/*!*********************************!*\
  !*** ./~/rxjs/operators/map.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 25);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    return function mapOperation(source) {
	        if (typeof project !== 'function') {
	            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	        }
	        return source.lift(new MapOperator(project, thisArg));
	    };
	}
	exports.map = map;
	var MapOperator = function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}();
	exports.MapOperator = MapOperator;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        } catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber);
	//# sourceMappingURL=map.js.map

/***/ }),
/* 70 */
/*!******************************************!*\
  !*** ./~/rxjs/add/operator/startWith.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var Observable_1 = __webpack_require__(/*! ../../Observable */ 22);
	var startWith_1 = __webpack_require__(/*! ../../operator/startWith */ 71);
	Observable_1.Observable.prototype.startWith = startWith_1.startWith;
	//# sourceMappingURL=startWith.js.map

/***/ }),
/* 71 */
/*!**************************************!*\
  !*** ./~/rxjs/operator/startWith.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var startWith_1 = __webpack_require__(/*! ../operators/startWith */ 72);
	/* tslint:enable:max-line-length */
	/**
	 * Returns an Observable that emits the items you specify as arguments before it begins to emit
	 * items emitted by the source Observable.
	 *
	 * <img src="./img/startWith.png" width="100%">
	 *
	 * @param {...T} values - Items you want the modified Observable to emit first.
	 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
	 * the emissions of the `next` notifications.
	 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
	 * emitted by the source Observable.
	 * @method startWith
	 * @owner Observable
	 */
	function startWith() {
	    var array = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        array[_i - 0] = arguments[_i];
	    }
	    return startWith_1.startWith.apply(void 0, array)(this);
	}
	exports.startWith = startWith;
	//# sourceMappingURL=startWith.js.map

/***/ }),
/* 72 */
/*!***************************************!*\
  !*** ./~/rxjs/operators/startWith.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var ArrayObservable_1 = __webpack_require__(/*! ../observable/ArrayObservable */ 51);
	var ScalarObservable_1 = __webpack_require__(/*! ../observable/ScalarObservable */ 52);
	var EmptyObservable_1 = __webpack_require__(/*! ../observable/EmptyObservable */ 53);
	var concat_1 = __webpack_require__(/*! ../observable/concat */ 73);
	var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ 54);
	/* tslint:enable:max-line-length */
	/**
	 * Returns an Observable that emits the items you specify as arguments before it begins to emit
	 * items emitted by the source Observable.
	 *
	 * <img src="./img/startWith.png" width="100%">
	 *
	 * @param {...T} values - Items you want the modified Observable to emit first.
	 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
	 * the emissions of the `next` notifications.
	 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
	 * emitted by the source Observable.
	 * @method startWith
	 * @owner Observable
	 */
	function startWith() {
	    var array = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        array[_i - 0] = arguments[_i];
	    }
	    return function (source) {
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        } else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len === 1) {
	            return concat_1.concat(new ScalarObservable_1.ScalarObservable(array[0], scheduler), source);
	        } else if (len > 1) {
	            return concat_1.concat(new ArrayObservable_1.ArrayObservable(array, scheduler), source);
	        } else {
	            return concat_1.concat(new EmptyObservable_1.EmptyObservable(scheduler), source);
	        }
	    };
	}
	exports.startWith = startWith;
	//# sourceMappingURL=startWith.js.map

/***/ }),
/* 73 */
/*!*************************************!*\
  !*** ./~/rxjs/observable/concat.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ 54);
	var of_1 = __webpack_require__(/*! ./of */ 74);
	var from_1 = __webpack_require__(/*! ./from */ 75);
	var concatAll_1 = __webpack_require__(/*! ../operators/concatAll */ 80);
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which sequentially emits all values from given
	 * Observable and then moves on to the next.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * `concat` joins multiple Observables together, by subscribing to them one at a time and
	 * merging their results into the output Observable. You can pass either an array of
	 * Observables, or put them directly as arguments. Passing an empty array will result
	 * in Observable that completes immediately.
	 *
	 * `concat` will subscribe to first input Observable and emit all its values, without
	 * changing or affecting them in any way. When that Observable completes, it will
	 * subscribe to then next Observable passed and, again, emit its values. This will be
	 * repeated, until the operator runs out of Observables. When last input Observable completes,
	 * `concat` will complete as well. At any given moment only one Observable passed to operator
	 * emits values. If you would like to emit values from passed Observables concurrently, check out
	 * {@link merge} instead, especially with optional `concurrent` parameter. As a matter of fact,
	 * `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.
	 *
	 * Note that if some input Observable never completes, `concat` will also never complete
	 * and Observables following the one that did not complete will never be subscribed. On the other
	 * hand, if some Observable simply completes immediately after it is subscribed, it will be
	 * invisible for `concat`, which will just move on to the next Observable.
	 *
	 * If any Observable in chain errors, instead of passing control to the next Observable,
	 * `concat` will error immediately as well. Observables that would be subscribed after
	 * the one that emitted error, never will.
	 *
	 * If you pass to `concat` the same Observable many times, its stream of values
	 * will be "replayed" on every subscription, which means you can repeat given Observable
	 * as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious,
	 * you can always use {@link repeat}.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = Rx.Observable.concat(timer, sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * // results in:
	 * // 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
	 *
	 *
	 * @example <caption>Concatenate an array of 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = Rx.Observable.concat([timer1, timer2, timer3]); // note that array is passed
	 * result.subscribe(x => console.log(x));
	 *
	 * // results in the following:
	 * // (Prints to console sequentially)
	 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
	 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
	 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
	 *
	 *
	 * @example <caption>Concatenate the same Observable to repeat it</caption>
	 * const timer = Rx.Observable.interval(1000).take(2);
	 *
	 * Rx.Observable.concat(timer, timer) // concating the same Observable!
	 * .subscribe(
	 *   value => console.log(value),
	 *   err => {},
	 *   () => console.log('...and it is done!')
	 * );
	 *
	 * // Logs:
	 * // 0 after 1s
	 * // 1 after 2s
	 * // 0 after 3s
	 * // 1 after 4s
	 * // "...and it is done!" also after 4s
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {ObservableInput} input1 An input Observable to concatenate with others.
	 * @param {ObservableInput} input2 An input Observable to concatenate with others.
	 * More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @static true
	 * @name concat
	 * @owner Observable
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    if (observables.length === 1 || observables.length === 2 && isScheduler_1.isScheduler(observables[1])) {
	        return from_1.from(observables[0]);
	    }
	    return concatAll_1.concatAll()(of_1.of.apply(void 0, observables));
	}
	exports.concat = concat;
	//# sourceMappingURL=concat.js.map

/***/ }),
/* 74 */
/*!*********************************!*\
  !*** ./~/rxjs/observable/of.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var ArrayObservable_1 = __webpack_require__(/*! ./ArrayObservable */ 51);
	exports.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ }),
/* 75 */
/*!***********************************!*\
  !*** ./~/rxjs/observable/from.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var FromObservable_1 = __webpack_require__(/*! ./FromObservable */ 76);
	exports.from = FromObservable_1.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ }),
/* 76 */
/*!*********************************************!*\
  !*** ./~/rxjs/observable/FromObservable.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(/*! ../util/isArray */ 16);
	var isArrayLike_1 = __webpack_require__(/*! ../util/isArrayLike */ 58);
	var isPromise_1 = __webpack_require__(/*! ../util/isPromise */ 59);
	var PromiseObservable_1 = __webpack_require__(/*! ./PromiseObservable */ 77);
	var IteratorObservable_1 = __webpack_require__(/*! ./IteratorObservable */ 78);
	var ArrayObservable_1 = __webpack_require__(/*! ./ArrayObservable */ 51);
	var ArrayLikeObservable_1 = __webpack_require__(/*! ./ArrayLikeObservable */ 79);
	var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ 60);
	var Observable_1 = __webpack_require__(/*! ../Observable */ 22);
	var observeOn_1 = __webpack_require__(/*! ../operators/observeOn */ 45);
	var observable_1 = __webpack_require__(/*! ../symbol/observable */ 28);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromObservable = function (_super) {
	    __extends(FromObservable, _super);
	    function FromObservable(ish, scheduler) {
	        _super.call(this, null);
	        this.ish = ish;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable from an Array, an array-like object, a Promise, an
	     * iterable object, or an Observable-like object.
	     *
	     * <span class="informal">Converts almost anything to an Observable.</span>
	     *
	     * <img src="./img/from.png" width="100%">
	     *
	     * Convert various other objects and data types into Observables. `from`
	     * converts a Promise or an array-like or an
	     * [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
	     * object into an Observable that emits the items in that promise or array or
	     * iterable. A String, in this context, is treated as an array of characters.
	     * Observable-like objects (contains a function named with the ES2015 Symbol
	     * for Observable) can also be converted through this operator.
	     *
	     * @example <caption>Converts an array to an Observable</caption>
	     * var array = [10, 20, 30];
	     * var result = Rx.Observable.from(array);
	     * result.subscribe(x => console.log(x));
	     *
	     * // Results in the following:
	     * // 10 20 30
	     *
	     * @example <caption>Convert an infinite iterable (from a generator) to an Observable</caption>
	     * function* generateDoubles(seed) {
	     *   var i = seed;
	     *   while (true) {
	     *     yield i;
	     *     i = 2 * i; // double it
	     *   }
	     * }
	     *
	     * var iterator = generateDoubles(3);
	     * var result = Rx.Observable.from(iterator).take(10);
	     * result.subscribe(x => console.log(x));
	     *
	     * // Results in the following:
	     * // 3 6 12 24 48 96 192 384 768 1536
	     *
	     * @see {@link create}
	     * @see {@link fromEvent}
	     * @see {@link fromEventPattern}
	     * @see {@link fromPromise}
	     *
	     * @param {ObservableInput<T>} ish A subscribable object, a Promise, an
	     * Observable-like, an Array, an iterable or an array-like object to be
	     * converted.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
	     * emissions of values.
	     * @return {Observable<T>} The Observable whose values are originally from the
	     * input object that was converted.
	     * @static true
	     * @name from
	     * @owner Observable
	     */
	    FromObservable.create = function (ish, scheduler) {
	        if (ish != null) {
	            if (typeof ish[observable_1.observable] === 'function') {
	                if (ish instanceof Observable_1.Observable && !scheduler) {
	                    return ish;
	                }
	                return new FromObservable(ish, scheduler);
	            } else if (isArray_1.isArray(ish)) {
	                return new ArrayObservable_1.ArrayObservable(ish, scheduler);
	            } else if (isPromise_1.isPromise(ish)) {
	                return new PromiseObservable_1.PromiseObservable(ish, scheduler);
	            } else if (typeof ish[iterator_1.iterator] === 'function' || typeof ish === 'string') {
	                return new IteratorObservable_1.IteratorObservable(ish, scheduler);
	            } else if (isArrayLike_1.isArrayLike(ish)) {
	                return new ArrayLikeObservable_1.ArrayLikeObservable(ish, scheduler);
	            }
	        }
	        throw new TypeError((ish !== null && (typeof ish === 'undefined' ? 'undefined' : _typeof(ish)) || ish) + ' is not observable');
	    };
	    FromObservable.prototype._subscribe = function (subscriber) {
	        var ish = this.ish;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            return ish[observable_1.observable]().subscribe(subscriber);
	        } else {
	            return ish[observable_1.observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
	        }
	    };
	    return FromObservable;
	}(Observable_1.Observable);
	exports.FromObservable = FromObservable;
	//# sourceMappingURL=FromObservable.js.map

/***/ }),
/* 77 */
/*!************************************************!*\
  !*** ./~/rxjs/observable/PromiseObservable.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(/*! ../util/root */ 23);
	var Observable_1 = __webpack_require__(/*! ../Observable */ 22);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var PromiseObservable = function (_super) {
	    __extends(PromiseObservable, _super);
	    function PromiseObservable(promise, scheduler) {
	        _super.call(this);
	        this.promise = promise;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Converts a Promise to an Observable.
	     *
	     * <span class="informal">Returns an Observable that just emits the Promise's
	     * resolved value, then completes.</span>
	     *
	     * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
	     * Observable. If the Promise resolves with a value, the output Observable
	     * emits that resolved value as a `next`, and then completes. If the Promise
	     * is rejected, then the output Observable emits the corresponding Error.
	     *
	     * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
	     * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link bindCallback}
	     * @see {@link from}
	     *
	     * @param {PromiseLike<T>} promise The promise to be converted.
	     * @param {Scheduler} [scheduler] An optional IScheduler to use for scheduling
	     * the delivery of the resolved value (or the rejection).
	     * @return {Observable<T>} An Observable which wraps the Promise.
	     * @static true
	     * @name fromPromise
	     * @owner Observable
	     */
	    PromiseObservable.create = function (promise, scheduler) {
	        return new PromiseObservable(promise, scheduler);
	    };
	    PromiseObservable.prototype._subscribe = function (subscriber) {
	        var _this = this;
	        var promise = this.promise;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            if (this._isScalar) {
	                if (!subscriber.closed) {
	                    subscriber.next(this.value);
	                    subscriber.complete();
	                }
	            } else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.closed) {
	                        subscriber.next(value);
	                        subscriber.complete();
	                    }
	                }, function (err) {
	                    if (!subscriber.closed) {
	                        subscriber.error(err);
	                    }
	                }).then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () {
	                        throw err;
	                    });
	                });
	            }
	        } else {
	            if (this._isScalar) {
	                if (!subscriber.closed) {
	                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
	                }
	            } else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.closed) {
	                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	                    }
	                }, function (err) {
	                    if (!subscriber.closed) {
	                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
	                    }
	                }).then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () {
	                        throw err;
	                    });
	                });
	            }
	        }
	    };
	    return PromiseObservable;
	}(Observable_1.Observable);
	exports.PromiseObservable = PromiseObservable;
	function dispatchNext(arg) {
	    var value = arg.value,
	        subscriber = arg.subscriber;
	    if (!subscriber.closed) {
	        subscriber.next(value);
	        subscriber.complete();
	    }
	}
	function dispatchError(arg) {
	    var err = arg.err,
	        subscriber = arg.subscriber;
	    if (!subscriber.closed) {
	        subscriber.error(err);
	    }
	}
	//# sourceMappingURL=PromiseObservable.js.map

/***/ }),
/* 78 */
/*!*************************************************!*\
  !*** ./~/rxjs/observable/IteratorObservable.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(/*! ../util/root */ 23);
	var Observable_1 = __webpack_require__(/*! ../Observable */ 22);
	var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ 60);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IteratorObservable = function (_super) {
	    __extends(IteratorObservable, _super);
	    function IteratorObservable(iterator, scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        this.iterator = getIterator(iterator);
	    }
	    IteratorObservable.create = function (iterator, scheduler) {
	        return new IteratorObservable(iterator, scheduler);
	    };
	    IteratorObservable.dispatch = function (state) {
	        var index = state.index,
	            hasError = state.hasError,
	            iterator = state.iterator,
	            subscriber = state.subscriber;
	        if (hasError) {
	            subscriber.error(state.error);
	            return;
	        }
	        var result = iterator.next();
	        if (result.done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(result.value);
	        state.index = index + 1;
	        if (subscriber.closed) {
	            if (typeof iterator.return === 'function') {
	                iterator.return();
	            }
	            return;
	        }
	        this.schedule(state);
	    };
	    IteratorObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this,
	            iterator = _a.iterator,
	            scheduler = _a.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(IteratorObservable.dispatch, 0, {
	                index: index, iterator: iterator, subscriber: subscriber
	            });
	        } else {
	            do {
	                var result = iterator.next();
	                if (result.done) {
	                    subscriber.complete();
	                    break;
	                } else {
	                    subscriber.next(result.value);
	                }
	                if (subscriber.closed) {
	                    if (typeof iterator.return === 'function') {
	                        iterator.return();
	                    }
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return IteratorObservable;
	}(Observable_1.Observable);
	exports.IteratorObservable = IteratorObservable;
	var StringIterator = function () {
	    function StringIterator(str, idx, len) {
	        if (idx === void 0) {
	            idx = 0;
	        }
	        if (len === void 0) {
	            len = str.length;
	        }
	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }
	    StringIterator.prototype[iterator_1.iterator] = function () {
	        return this;
	    };
	    StringIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.str.charAt(this.idx++)
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return StringIterator;
	}();
	var ArrayIterator = function () {
	    function ArrayIterator(arr, idx, len) {
	        if (idx === void 0) {
	            idx = 0;
	        }
	        if (len === void 0) {
	            len = toLength(arr);
	        }
	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }
	    ArrayIterator.prototype[iterator_1.iterator] = function () {
	        return this;
	    };
	    ArrayIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.arr[this.idx++]
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return ArrayIterator;
	}();
	function getIterator(obj) {
	    var i = obj[iterator_1.iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('object is not iterable');
	    }
	    return obj[iterator_1.iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && root_1.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ }),
/* 79 */
/*!**************************************************!*\
  !*** ./~/rxjs/observable/ArrayLikeObservable.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(/*! ../Observable */ 22);
	var ScalarObservable_1 = __webpack_require__(/*! ./ScalarObservable */ 52);
	var EmptyObservable_1 = __webpack_require__(/*! ./EmptyObservable */ 53);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayLikeObservable = function (_super) {
	    __extends(ArrayLikeObservable, _super);
	    function ArrayLikeObservable(arrayLike, scheduler) {
	        _super.call(this);
	        this.arrayLike = arrayLike;
	        this.scheduler = scheduler;
	        if (!scheduler && arrayLike.length === 1) {
	            this._isScalar = true;
	            this.value = arrayLike[0];
	        }
	    }
	    ArrayLikeObservable.create = function (arrayLike, scheduler) {
	        var length = arrayLike.length;
	        if (length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        } else if (length === 1) {
	            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
	        } else {
	            return new ArrayLikeObservable(arrayLike, scheduler);
	        }
	    };
	    ArrayLikeObservable.dispatch = function (state) {
	        var arrayLike = state.arrayLike,
	            index = state.index,
	            length = state.length,
	            subscriber = state.subscriber;
	        if (subscriber.closed) {
	            return;
	        }
	        if (index >= length) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(arrayLike[index]);
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this,
	            arrayLike = _a.arrayLike,
	            scheduler = _a.scheduler;
	        var length = arrayLike.length;
	        if (scheduler) {
	            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
	                arrayLike: arrayLike, index: index, length: length, subscriber: subscriber
	            });
	        } else {
	            for (var i = 0; i < length && !subscriber.closed; i++) {
	                subscriber.next(arrayLike[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayLikeObservable;
	}(Observable_1.Observable);
	exports.ArrayLikeObservable = ArrayLikeObservable;
	//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ }),
/* 80 */
/*!***************************************!*\
  !*** ./~/rxjs/operators/concatAll.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var mergeAll_1 = __webpack_require__(/*! ./mergeAll */ 55);
	/**
	 * Converts a higher-order Observable into a first-order Observable by
	 * concatenating the inner Observables in order.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by putting one
	 * inner Observable after the other.</span>
	 *
	 * <img src="./img/concatAll.png" width="100%">
	 *
	 * Joins every Observable emitted by the source (a higher-order Observable), in
	 * a serial fashion. It subscribes to each inner Observable only after the
	 * previous inner Observable has completed, and merges all of their values into
	 * the returned observable.
	 *
	 * __Warning:__ If the source Observable emits Observables quickly and
	 * endlessly, and the inner Observables it emits generally complete slower than
	 * the source emits, you can run into memory issues as the incoming Observables
	 * collect in an unbounded buffer.
	 *
	 * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
	 * var firstOrder = higherOrder.concatAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * // Results in the following:
	 * // (results are not concurrent)
	 * // For every click on the "document" it will emit values 0 to 3 spaced
	 * // on a 1000ms interval
	 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
	 *
	 * @see {@link combineAll}
	 * @see {@link concat}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 * @see {@link exhaust}
	 * @see {@link mergeAll}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @return {Observable} An Observable emitting values from all the inner
	 * Observables concatenated.
	 * @method concatAll
	 * @owner Observable
	 */
	function concatAll() {
	  return mergeAll_1.mergeAll(1);
	}
	exports.concatAll = concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ }),
/* 81 */
/*!**********************************************!*\
  !*** ./~/cells-bridge/src/manager/import.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _events = __webpack_require__(/*! ./events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _after = function _after(times, func) {
	  return function () {
	    if (--times < 1) {
	      return func();
	    }
	  };
	};
	
	var CellsManagerImport = function () {
	  function CellsManagerImport() {
	    _classCallCheck(this, CellsManagerImport);
	  }
	
	  _createClass(CellsManagerImport, [{
	    key: '_importElement',
	    value: function _importElement(endPoint, componentPath, callback) {
	      var node = document.createElement('link');
	      node.rel = 'import';
	      node.href = endPoint + componentPath;
	      node.onload = callback;
	      node.onerror = callback;
	      node.setAttribute('async', '');
	
	      document.head.appendChild(node);
	    }
	  }, {
	    key: 'loadBundleForTemplate',
	    value: function loadBundleForTemplate(baseUri, pageName, callback) {
	      this._importElement(baseUri, pageName + '.html', callback);
	    }
	  }, {
	    key: 'loadComponent',
	    value: function loadComponent(component, callback, baseUri) {
	      var _this = this;
	
	      var list = component;
	
	      if (!Array.isArray(list)) {
	        list = [component];
	      }
	
	      if (list.length === 0) {
	        return callback.call(this);
	      }
	
	      _events2.default.emit('before-import');
	
	      var iCb = _after(list.length, function () {
	        _events2.default.emit('after-import');
	        return callback.call(_this);
	      });
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;
	
	          this._importElement(baseUri, item.spec.path, iCb);
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
	    }
	  }]);
	
	  return CellsManagerImport;
	}();
	
	exports.default = CellsManagerImport;

/***/ }),
/* 82 */
/*!************************************************!*\
  !*** ./~/cells-bridge/src/manager/template.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(/*! ../template */ 83);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _events = __webpack_require__(/*! ./events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CellsManagerTemplate = function () {
	  function CellsManagerTemplate() {
	    _classCallCheck(this, CellsManagerTemplate);
	
	    this.cache = {};
	    this.templates = {};
	    this.selected = '';
	  }
	
	  _createClass(CellsManagerTemplate, [{
	    key: 'create',
	    value: function create(name, spec) {
	      var template = this.get(name);
	
	      if (!template) {
	        template = this._createCellsTemplate(spec);
	        template.name = name;
	
	        var node = template.node;
	
	        this.cache[name] = template;
	        this.templates[name] = node;
	
	        node.id = this.parseTemplateId(name);
	        node.name = this.parseTemplateName(name);
	
	        template.setProps();
	        template.cache();
	      }
	
	      return template;
	    }
	  }, {
	    key: '_createCellsTemplate',
	    value: function _createCellsTemplate(spec) {
	      return new _template2.default(spec);
	    }
	  }, {
	    key: 'get',
	    value: function get(name) {
	      return this.cache[name];
	    }
	  }, {
	    key: 'getNode',
	    value: function getNode(name) {
	      return this.templates[name];
	    }
	  }, {
	    key: 'parseTemplateName',
	    value: function parseTemplateName(name) {
	      return name;
	    }
	  }, {
	    key: 'parseTemplateId',
	    value: function parseTemplateId(name) {
	      return 'cells-template-' + name.replace(/\./g, '-');
	    }
	  }, {
	    key: 'select',
	    value: function select(name) {
	      var bridgeChannelManager = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
	      var binding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'always';
	
	      var template = this.get(name);
	      var cache = this.cache;
	      var oldPageName = void 0;
	
	      for (var tplName in cache) {
	        if (tplName === this.selected) {
	          oldPageName = tplName;
	          cache[tplName].deactivate();
	        } else if (name !== tplName) {
	          cache[tplName].cache();
	        }
	      }
	
	      this.selected = name;
	      template.activate();
	
	      if (bridgeChannelManager && binding !== 'currentview' && binding !== 'ui') {
	        bridgeChannelManager.updateAppContext(oldPageName, name);
	        bridgeChannelManager.initPrivateChannel(oldPageName, name);
	      }
	
	      _events2.default.emit('template-transition-end', template);
	    }
	
	    /**
	     *
	     * remove one template by name.
	     * it remove the template from html and from the templates and cache nodes
	     *
	     * @param String templateName the name of the  template to remove
	     */
	
	  }, {
	    key: 'removeTemplate',
	    value: function removeTemplate(templateName) {
	      if (this.templates[templateName]) {
	        var node = document.querySelector('#' + this.templates[templateName].id);
	        node.parentNode.removeChild(node);
	        delete this.templates[templateName];
	        delete this.cache[templateName];
	      }
	    }
	
	    /**
	    *
	    * remove all templates except initial one and cross component one.
	    *
	    * @param String initialTemplate the name of the initial template
	    * @param String crossContainerId the name of the cross component template
	    */
	
	  }, {
	    key: 'removeTemplates',
	    value: function removeTemplates(initialTemplate, crossContainerId) {
	      for (var templateName in this.templates) {
	        if (templateName !== initialTemplate && templateName !== crossContainerId) {
	          this.removeTemplate(templateName);
	        }
	      }
	    }
	
	    /**
	     *
	     * remove all children of a template,
	     * it is used, for example, for clear cross component template.
	     *
	     * @param String templateName the name of the  template
	     */
	
	  }, {
	    key: 'removeTemplateChildrens',
	    value: function removeTemplateChildrens(templateName) {
	      var template = this.templates[templateName];
	      if (template && template.children) {
	        for (var i = template.children.length - 1; i >= 0; i--) {
	          template.removeChild(template.children[i]);
	        }
	      }
	    }
	  }]);
	
	  return CellsManagerTemplate;
	}();
	
	exports.default = CellsManagerTemplate;

/***/ }),
/* 83 */
/*!****************************************!*\
  !*** ./~/cells-bridge/src/template.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(/*! ./component */ 84);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Class for managing templates
	 *
	 * A template is a component used in Cells apps for managing the components distribution
	 *
	 * A template has defined zones like app__header or app__main 
	 * where you can place your components. 
	 * The property zoneId (in the json page definition file) indicates the zone in wHich the
	 * the component is appended.
	 *
	 * The components added to the template are the template's children. There are two kind of children: 
	 * the fixed children and the normal children. The normal ones are appended
	 * to the asigned zone, the fixed ones are just stored in the fixedChildren property
	 * and appended to an especial zone that is fixed.
	 *
	 * As the class extends from Component it has properties like node which refers to 
	 * the node the template is attached.
	 *
	 * The 'state' atributte in the node is used to know the actual state of the template
	 * it can be active, cached or inactive.
	 */
	var CellsBridgeTemplate = function (_CellsComponent) {
	  _inherits(CellsBridgeTemplate, _CellsComponent);
	
	  /**
	   * class constructor, receives the template definition object, initializes the children array and fixed children array
	   * 
	   * @param {Object} spec
	   */
	
	  /**
	   * fixedChildren 
	   *
	   * a list of the components in the template of type fixed, not attached to the template
	   * but in a special fixed zone
	   *
	   * @type {Array}
	   */
	  function CellsBridgeTemplate(spec) {
	    _classCallCheck(this, CellsBridgeTemplate);
	
	    var _this = _possibleConstructorReturn(this, (CellsBridgeTemplate.__proto__ || Object.getPrototypeOf(CellsBridgeTemplate)).call(this, spec));
	
	    _this.children = null;
	    _this.fixedChildren = null;
	    _this.type = 'TEMPLATE';
	
	    _this.children = [];
	    _this.fixedChildren = [];
	    return _this;
	  }
	
	  /**
	   * returns the zone node in the template identified by the id.
	   * 
	   * @param {String} zoneId
	   * 
	   * @return {HTMLElement}
	   */
	
	  /**
	   * type
	   *
	   * indicates the type of this component
	   *
	   * @type {String}
	   */
	
	  /**
	   * children 
	   *
	   * a list of all the components in the template (including the fixed ones)
	   *
	   * @type {Array}
	   */
	
	
	  _createClass(CellsBridgeTemplate, [{
	    key: 'getZone',
	    value: function getZone(zoneId) {
	      var curTemplate = this.node;
	      var node;
	      if (curTemplate.$ && curTemplate.$[zoneId]) {
	        node = curTemplate.$[zoneId];
	      } else if (!zoneId) {
	        node = curTemplate;
	      } else {
	        node = curTemplate.querySelector('#' + zoneId);
	      }
	      return node || curTemplate;
	    }
	
	    /**
	     * sets the attribute cache in the template node to 'cached'
	     * for not loading the template again the next time the template is used
	     */
	
	  }, {
	    key: 'cache',
	    value: function cache() {
	      this.node.setAttribute('state', 'cached');
	    }
	
	    /**
	     * sets the attribute cache in the template node to 'active'
	     * so you can know which of the templates in html is the actual one
	     */
	
	  }, {
	    key: 'activate',
	    value: function activate() {
	      this.node.setAttribute('state', 'active');
	    }
	
	    /**
	     * sets the attribute cache in the template node to 'inactive'
	     * so you can know which of the templates in html are not the actual one
	     */
	
	  }, {
	    key: 'deactivate',
	    value: function deactivate() {
	      this.node.setAttribute('state', 'inactive');
	    }
	
	    /**
	     * recieves one component or a list of them, gets the new ones and append 
	     * them as child in the selected zone of the template
	     * 
	     * @param {Array}/{Object} components
	     * 
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'append',
	    value: function append(components) {
	      /* istanbul ignore else */
	      if (!components) {
	        return;
	      }
	      /* istanbul ignore else */
	      if (components.length === undefined) {
	        components = [components];
	      }
	
	      var newContentComponents = components.filter(function (component) {
	        return component.fixed !== true;
	      });
	      var newFixedChildren = components.filter(function (component) {
	        return component.fixed === true;
	      });
	      this.fixedChildren = this.fixedChildren.concat(newFixedChildren);
	      this.children = this.children.concat(components);
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = newContentComponents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var component = _step.value;
	
	          // for backward compatibility with Polymer 1
	          component.node.setAttribute('data-select', component.zone);
	          // for the use of slots required by Polymer 2
	          component.node.setAttribute('slot', component.zone);
	          this.getZone(component.zone).appendChild(component.node);
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
	    }
	  }]);
	
	  return CellsBridgeTemplate;
	}(_component2.default);
	
	exports.default = CellsBridgeTemplate;

/***/ }),
/* 84 */
/*!*****************************************!*\
  !*** ./~/cells-bridge/src/component.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dom = __webpack_require__(/*! ./manager/dom */ 7);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellsBridgeComponent = function (_CellsBridgeManagerDo) {
	  _inherits(CellsBridgeComponent, _CellsBridgeManagerDo);
	
	  /**
	   * Componen type. It could be TYPE_UI, TYPE_DM or TYPE_CC.
	   *
	   * @type {String}
	   */
	  function CellsBridgeComponent(spec) {
	    _classCallCheck(this, CellsBridgeComponent);
	
	    // @TODO: Por qué almacenar spec en una propiedad y algunas de sus propiedades en otra.
	    var _this = _possibleConstructorReturn(this, (CellsBridgeComponent.__proto__ || Object.getPrototypeOf(CellsBridgeComponent)).call(this));
	
	    _this.type = '';
	    _this.spec = null;
	    _this.zone = null;
	    _this.node = null;
	    _this.fixed = null;
	    _this.connections = null;
	    _this.spec = spec;
	    _this.type = spec.type;
	    _this.zone = spec.zone;
	    _this.fixed = spec.fixed;
	    _this.node = _this.createElement(_this.spec.tagName);
	    _this.connections = spec.connections;
	    return _this;
	  }
	
	  _createClass(CellsBridgeComponent, [{
	    key: 'setProps',
	    value: function setProps() {
	      var spec = this.spec;
	      if (spec.connections && spec.connections.ignoreAttr) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = spec.connections.ignoreAttr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;
	
	            delete spec.properties[key];
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
	      }
	
	      this.setAttrs(this.node, spec.properties);
	    }
	  }, {
	    key: 'isUnresolved',
	    value: function isUnresolved() {
	      return this.node.tagName.indexOf('-') > -1 && this.node.constructor === HTMLElement;
	    }
	  }]);
	
	  return CellsBridgeComponent;
	}(_dom2.default);
	
	exports.default = CellsBridgeComponent;

/***/ }),
/* 85 */
/*!*******************************************************!*\
  !*** ./~/cells-bridge/src/manager/bridge-channels.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Observable = __webpack_require__(/*! rxjs/Observable */ 22);
	
	__webpack_require__(/*! rxjs/add/observable/fromEvent */ 31);
	
	__webpack_require__(/*! rxjs/add/operator/first */ 86);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BridgeChannelManager = function () {
	  function BridgeChannelManager(bridge) {
	    _classCallCheck(this, BridgeChannelManager);
	
	    this.componentConnector = bridge.ComponentConnector;
	    this.privateChannels = new Set();
	  }
	
	  /**
	   * Returns the name of the application context channel.
	   */
	
	
	  _createClass(BridgeChannelManager, [{
	    key: 'getAppContextChannelName',
	    value: function getAppContextChannelName() {
	      return '__bridge_app';
	    }
	
	    /**
	     * Returns the prefix for private channels.
	     */
	
	  }, {
	    key: 'getPrivateChannelPrefix',
	    value: function getPrivateChannelPrefix() {
	      return '__bridge_page_';
	    }
	
	    /**
	     * Returns the prefix for event channels.
	     */
	
	  }, {
	    key: 'getEventChannelPrefix',
	    value: function getEventChannelPrefix() {
	      return '__bridge_evt_';
	    }
	
	    /**
	     * Returns the prefix for generic channels.
	     */
	
	  }, {
	    key: 'getBridgeChannelPrefix',
	    value: function getBridgeChannelPrefix() {
	      return '__bridge_ch_';
	    }
	
	    /**
	     * Gets a channel that is for exclusive use of the bridge.
	     * If the channel doesn't exist, it creates one channel with.
	     *
	     * @param name of the channel to retrieve/create
	     *
	     * @return {Channel}
	     *
	     */
	
	  }, {
	    key: 'getBridgeChannel',
	    value: function getBridgeChannel(channelName) {
	      return this.componentConnector.manager.get(this.getBridgeChannelPrefix() + channelName);
	    }
	  }, {
	    key: 'getIdleCallbackChannel',
	    value: function getIdleCallbackChannel() {
	      return _Observable.Observable.create(function (observer) {
	        observer.next(true);
	      });
	    }
	
	    /**
	     * Gets the application context channel.
	     *
	     * @return {Channel}
	     */
	
	  }, {
	    key: 'getAppContextChannel',
	    value: function getAppContextChannel() {
	      return this.componentConnector.manager.get(this.getAppContextChannelName());
	    }
	
	    /**
	     * Gets the private channel that corresponds to a page.
	     *
	     * @param  {String} pageName
	     *
	     * @return {Channel}
	     */
	
	  }, {
	    key: 'getPrivate',
	    value: function getPrivate(pageName) {
	      var newName = this.getPrivateChannelPrefix() + pageName;
	      var channel = this.componentConnector.manager.get(newName);
	      this.privateChannels.add(newName);
	      return channel;
	    }
	
	    /**
	     * Creates and initializes the application context channel.
	     *
	     */
	
	  }, {
	    key: 'initAppContextChannel',
	    value: function initAppContextChannel() {
	      this.getAppContextChannel();
	    }
	
	    /**
	     * Initializes the private chanel for the given page.
	     *
	     * @param {String} pageName
	     *
	     */
	
	  }, {
	    key: 'initPrivateChannel',
	    value: function initPrivateChannel(oldPageName, newPageName) {
	      // let oldPrivateChannelName;
	      // let newPrivateChannelName;
	      var channel = void 0;
	      var evt = void 0;
	      if (oldPageName) {
	        // oldPrivateChannelName = this.getPrivateChannelPrefix() + oldPageName;
	        // channel = this.componentConnector.manager.get(oldPrivateChannelName);
	        channel = this.getPrivate(oldPageName);
	        evt = this.componentConnector.createEvent('page-load', false);
	        channel.next(evt);
	      }
	      // newPrivateChannelName = this.getPrivateChannelPrefix() + newPageName;
	      // channel = this.componentConnector.manager.get(newPrivateChannelName);
	      channel = this.getPrivate(newPageName);
	      evt = this.componentConnector.createEvent('page-load', true);
	      channel.next(evt);
	    }
	
	    /**
	     * Updates the application context.
	     * Puts in context the information of the current page and previous active page.
	     *
	     * @param {String} oldPage was the previous current page
	     * @param {String} newPage is the page that becomes the current page
	     *
	     */
	
	  }, {
	    key: 'updateAppContext',
	    value: function updateAppContext(oldPage, newPage) {
	      var evt = this.componentConnector.createEvent('page-load', {
	        currentPage: newPage,
	        fromPage: oldPage
	      });
	      this.getAppContextChannel().next(evt);
	    }
	
	    /**
	     * returns true if the given name matches a private channel's name
	     *
	     * @param {String} name
	     *
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isPrivateChannel',
	    value: function isPrivateChannel(name) {
	      return name.indexOf(this.getPrivateChannelPrefix()) === 0;
	    }
	
	    /**
	     * returns true if there's a private channel with the given name
	     *
	     * @param {String} name
	     *
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'isActivePrivateChannel',
	    value: function isActivePrivateChannel(name) {
	      return this.privateChannels.has(name);
	    }
	
	    /**
	     * resets all channels, including the private channels.
	     * It removes all observers and publications.
	     *
	     */
	
	  }, {
	    key: 'resetBridgeChannels',
	    value: function resetBridgeChannels(mainNode) {
	      var bridgeChannels = Object.keys(this.componentConnector.manager.channels);
	
	      bridgeChannels.forEach(function (chnlName) {
	        var chnl = this.componentConnector.manager.get(chnlName);
	        chnl.clean();
	        chnl.unsubscribeAll();
	      }.bind(this));
	
	      this.componentConnector.unregister(mainNode);
	    }
	  }, {
	    key: 'initEventChannels',
	    value: function initEventChannels(node, externalEvents) {
	      externalEvents.forEach(function (eventName) {
	        var prefix = this.getEventChannelPrefix();
	        var channelName = prefix + eventName;
	        var channel = this.componentConnector.manager.get(channelName);
	        var source = _Observable.Observable.fromEvent(node, eventName);
	        source.subscribe(function (event) {
	          channel.next(event);
	        });
	      }.bind(this));
	    }
	  }, {
	    key: 'subscribeToEvent',
	    value: function subscribeToEvent(node, eventName, callback) {
	      var prefix = this.getEventChannelPrefix();
	      var channelName = prefix + eventName;
	      var subscriptor = this.componentConnector.getSubscriptor(node);
	      var channel = this.componentConnector.manager.get(channelName);
	      callback.node = node;
	      subscriptor.subscribe(channel, callback);
	    }
	  }]);
	
	  return BridgeChannelManager;
	}();
	
	/**
	 * BridgeChannelManager definition
	 */
	exports.default = BridgeChannelManager;

/***/ }),
/* 86 */
/*!**************************************!*\
  !*** ./~/rxjs/add/operator/first.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var Observable_1 = __webpack_require__(/*! ../../Observable */ 22);
	var first_1 = __webpack_require__(/*! ../../operator/first */ 87);
	Observable_1.Observable.prototype.first = first_1.first;
	//# sourceMappingURL=first.js.map

/***/ }),
/* 87 */
/*!**********************************!*\
  !*** ./~/rxjs/operator/first.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var first_1 = __webpack_require__(/*! ../operators/first */ 88);
	/**
	 * Emits only the first value (or the first value that meets some condition)
	 * emitted by the source Observable.
	 *
	 * <span class="informal">Emits only the first value. Or emits only the first
	 * value that passes some test.</span>
	 *
	 * <img src="./img/first.png" width="100%">
	 *
	 * If called with no arguments, `first` emits the first value of the source
	 * Observable, then completes. If called with a `predicate` function, `first`
	 * emits the first value of the source that matches the specified condition. It
	 * may also take a `resultSelector` function to produce the output value from
	 * the input value, and a `defaultValue` to emit in case the source completes
	 * before it is able to emit a valid value. Throws an error if `defaultValue`
	 * was not provided and a matching element is not found.
	 *
	 * @example <caption>Emit only the first click that happens on the DOM</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Emits the first click that happens on a DIV</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link take}
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
	 * An optional function called with each item to test for condition matching.
	 * @param {function(value: T, index: number): R} [resultSelector] A function to
	 * produce the value on the output Observable based on the values
	 * and the indices of the source Observable. The arguments passed to this
	 * function are:
	 * - `value`: the value that was emitted on the source.
	 * - `index`: the "index" of the value from the source.
	 * @param {R} [defaultValue] The default value emitted in case no valid value
	 * was found on the source.
	 * @return {Observable<T|R>} An Observable of the first item that matches the
	 * condition.
	 * @method first
	 * @owner Observable
	 */
	function first(predicate, resultSelector, defaultValue) {
	  return first_1.first(predicate, resultSelector, defaultValue)(this);
	}
	exports.first = first;
	//# sourceMappingURL=first.js.map

/***/ }),
/* 88 */
/*!***********************************!*\
  !*** ./~/rxjs/operators/first.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 25);
	var EmptyError_1 = __webpack_require__(/*! ../util/EmptyError */ 89);
	/**
	 * Emits only the first value (or the first value that meets some condition)
	 * emitted by the source Observable.
	 *
	 * <span class="informal">Emits only the first value. Or emits only the first
	 * value that passes some test.</span>
	 *
	 * <img src="./img/first.png" width="100%">
	 *
	 * If called with no arguments, `first` emits the first value of the source
	 * Observable, then completes. If called with a `predicate` function, `first`
	 * emits the first value of the source that matches the specified condition. It
	 * may also take a `resultSelector` function to produce the output value from
	 * the input value, and a `defaultValue` to emit in case the source completes
	 * before it is able to emit a valid value. Throws an error if `defaultValue`
	 * was not provided and a matching element is not found.
	 *
	 * @example <caption>Emit only the first click that happens on the DOM</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Emits the first click that happens on a DIV</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link take}
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
	 * An optional function called with each item to test for condition matching.
	 * @param {function(value: T, index: number): R} [resultSelector] A function to
	 * produce the value on the output Observable based on the values
	 * and the indices of the source Observable. The arguments passed to this
	 * function are:
	 * - `value`: the value that was emitted on the source.
	 * - `index`: the "index" of the value from the source.
	 * @param {R} [defaultValue] The default value emitted in case no valid value
	 * was found on the source.
	 * @return {Observable<T|R>} An Observable of the first item that matches the
	 * condition.
	 * @method first
	 * @owner Observable
	 */
	function first(predicate, resultSelector, defaultValue) {
	    return function (source) {
	        return source.lift(new FirstOperator(predicate, resultSelector, defaultValue, source));
	    };
	}
	exports.first = first;
	var FirstOperator = function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    FirstOperator.prototype.call = function (observer, source) {
	        return source.subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	    };
	    return FirstOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FirstSubscriber = function (_super) {
	    __extends(FirstSubscriber, _super);
	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.index = 0;
	        this.hasCompleted = false;
	        this._emitted = false;
	    }
	    FirstSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        } else {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        } catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._emit = function (value, index) {
	        if (this.resultSelector) {
	            this._tryResultSelector(value, index);
	            return;
	        }
	        this._emitFinal(value);
	    };
	    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        } catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this._emitFinal(result);
	    };
	    FirstSubscriber.prototype._emitFinal = function (value) {
	        var destination = this.destination;
	        if (!this._emitted) {
	            this._emitted = true;
	            destination.next(value);
	            destination.complete();
	            this.hasCompleted = true;
	        }
	    };
	    FirstSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	            destination.next(this.defaultValue);
	            destination.complete();
	        } else if (!this.hasCompleted) {
	            destination.error(new EmptyError_1.EmptyError());
	        }
	    };
	    return FirstSubscriber;
	}(Subscriber_1.Subscriber);
	//# sourceMappingURL=first.js.map

/***/ }),
/* 89 */
/*!***********************************!*\
  !*** ./~/rxjs/util/EmptyError.js ***!
  \***********************************/
/***/ (function(module, exports) {

	"use strict";
	
	var __extends = undefined && undefined.__extends || function (d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an Observable or a sequence was queried but has no
	 * elements.
	 *
	 * @see {@link first}
	 * @see {@link last}
	 * @see {@link single}
	 *
	 * @class EmptyError
	 */
	var EmptyError = function (_super) {
	    __extends(EmptyError, _super);
	    function EmptyError() {
	        var err = _super.call(this, 'no elements in sequence');
	        this.name = err.name = 'EmptyError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return EmptyError;
	}(Error);
	exports.EmptyError = EmptyError;
	//# sourceMappingURL=EmptyError.js.map

/***/ }),
/* 90 */
/*!*******************************************************!*\
  !*** ./~/cells-bridge/src/manager/action-channels.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _events = __webpack_require__(/*! ../manager/events */ 8);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class to define core private channels behavior
	 */
	var ActionChannelManager = function () {
	  function ActionChannelManager(bridge) {
	    _classCallCheck(this, ActionChannelManager);
	
	    this.bridge = bridge;
	    this.PageManager = bridge.PageManager;
	    this.ChannelManager = bridge.BridgeChannelManager;
	    this.TemplateManager = bridge.TemplateManager;
	  }
	
	  _createClass(ActionChannelManager, [{
	    key: 'subscribeAll',
	    value: function subscribeAll() {
	      var _this = this;
	
	      this.ChannelManager.getBridgeChannel('config').subscribe(function (evt) {
	        return _this._configSubscriptor(evt);
	      });
	      this.ChannelManager.getBridgeChannel('locales').subscribe(function (evt) {
	        return _this._localesSubscriptor(evt);
	      });
	      this.ChannelManager.getBridgeChannel('logout').subscribe(function (evt) {
	        return _this._logoutSubscriptor(evt);
	      });
	    }
	  }, {
	    key: '_isAllowedProperty',
	    value: function _isAllowedProperty(prop) {
	      return typeof this.bridge[prop] !== 'function';
	    }
	  }, {
	    key: '_configSubscriptor',
	    value: function _configSubscriptor(evt) {
	      var _this2 = this;
	
	      var selected = this.TemplateManager.selected;
	
	      if (evt.detail) {
	        for (var prop in evt.detail) {
	          if (this._isAllowedProperty(prop)) {
	            this.bridge[prop] = evt.detail[prop];
	          }
	        }
	
	        if (evt.detail.app || evt.detail.pagesPath) {
	          this.PageManager.clear();
	          this.TemplateManager.removeTemplates(selected, this.bridge.crossContainerId);
	          _events2.default.once('template-registered', function () {
	            return _this2.TemplateManager.removeTemplate(selected);
	          });
	        }
	      }
	    }
	  }, {
	    key: '_localesSubscriptor',
	    value: function _localesSubscriptor(evt) {
	      if (window.I18nMsg && evt.detail && evt.detail.lang) {
	        window.I18nMsg.lang = evt.detail.lang;
	      }
	    }
	  }, {
	    key: '_logoutSubscriptor',
	    value: function _logoutSubscriptor() {
	      this.bridge.logout();
	      this.subscribeAll();
	    }
	  }]);
	
	  return ActionChannelManager;
	}();
	
	exports.default = ActionChannelManager;

/***/ }),
/* 91 */
/*!********************************************!*\
  !*** ./src/polymer-component-connector.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _componentConnector = __webpack_require__(/*! cells-bridge/src/component-connector */ 14);
	
	var _componentConnector2 = _interopRequireDefault(_componentConnector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _getProperyChangedName = function _getProperyChangedName(name) {
	  var propertyName;
	
	  /* istanbul ignore else */
	  if (!Polymer.Base._EVENT_CHANGED) {
	    Polymer.Base._EVENT_CHANGED = '-changed';
	  }
	  /* istanbul ignore else */
	  if (name.endsWith(Polymer.Base._EVENT_CHANGED)) {
	    propertyName = name.slice(0, -Polymer.Base._EVENT_CHANGED.length);
	    propertyName = Polymer.CaseMap.dashToCamelCase(propertyName);
	  }
	
	  return propertyName;
	};
	
	// Hell to test:
	var _parseActionInEvent = function _parseActionInEvent(evt, targetPath, target) {
	  var path;
	  var value;
	
	  // Check if event is because of property changed.
	  var propertyName = _getProperyChangedName(evt.type);
	
	  if (propertyName && evt.detail && evt.detail.hasOwnProperty('value')) {
	    value = evt.detail.value;
	    targetPath = targetPath || propertyName;
	
	    if (evt.detail.path) {
	      path = evt.detail.path.replace(propertyName, targetPath);
	    } else {
	      path = targetPath;
	    }
	  } else {
	    path = targetPath;
	    value = evt.detail;
	  }
	
	  if (target !== undefined && target.is === undefined && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	    if (Polymer.Element === undefined) {
	      value = JSON.stringify(value);
	    } else {
	      /* istanbul ignore else */
	      if (target instanceof Polymer.Element === false) {
	        value = JSON.stringify(value);
	      }
	    }
	  }
	
	  return {
	    path: path,
	    value: value,
	    property: targetPath
	  };
	};
	
	var CellsPolymerComponentConnector = function (_CellsComponentConnec) {
	  _inherits(CellsPolymerComponentConnector, _CellsComponentConnec);
	
	  function CellsPolymerComponentConnector() {
	    _classCallCheck(this, CellsPolymerComponentConnector);
	
	    return _possibleConstructorReturn(this, (CellsPolymerComponentConnector.__proto__ || Object.getPrototypeOf(CellsPolymerComponentConnector)).apply(this, arguments));
	  }
	
	  _createClass(CellsPolymerComponentConnector, [{
	    key: 'wrapCallback',
	    value: function wrapCallback(node, bindName) {
	      return function (evt) {
	        var checkDispatchActionType = function (mutations, observerObject) {
	          /* istanbul ignore else */
	          if (this._isPolymerElement(node)) {
	            if (typeof node[bindName] === 'function') {
	              this._dispatchActionFunction(evt, node, bindName);
	            } else {
	              this._dispatchActionProperty(evt, node, bindName);
	            }
	            /* istanbul ignore else */
	            if (observerObject) {
	              observerObject.disconnect();
	            }
	          }
	        }.bind(this);
	
	        if (this._isPolymerElement(node)) {
	          checkDispatchActionType();
	        } else {
	          var observer = new MutationObserver(checkDispatchActionType);
	          var config = { attributes: true, childList: true, characterData: true };
	          observer.observe(node, config);
	        }
	      }.bind(this);
	    }
	
	    /**
	     * Return the version of Polymer instance if the node is a Polymer element.
	     * Return -1 if if the node is not a Polymer element.
	     *
	     * @param {Element} node
	     */
	
	  }, {
	    key: '_whichPolymerVersion',
	    value: function _whichPolymerVersion(node) {
	      var version = -1;
	      if (Polymer.Element !== undefined && node instanceof Polymer.Element) {
	        version = 2;
	      } else {
	        /* istanbul ignore else */
	        if (node.__isPolymerInstance__ !== undefined) {
	          version = 1;
	        }
	      }
	      return version;
	    }
	
	    /**
	     * Return true if the node is instance of a Polymer element, otherwise return false.
	     *
	     * @param {Element} node
	     */
	
	  }, {
	    key: '_isPolymerElement',
	    value: function _isPolymerElement(node) {
	      return this._whichPolymerVersion(node) > 0;
	    }
	
	    /**
	     * Returns true if the event has reached the node that is listening the event
	     *
	     * @param {Event} event
	     */
	
	  }, {
	    key: '_isEventAtTarget',
	    value: function _isEventAtTarget(event) {
	      var atTarget;
	      if (Polymer.Settings.hasShadow === false) {
	        var normalizedEvent = Polymer.dom(event);
	        atTarget = normalizedEvent.localTarget === event.currentTarget;
	      } else {
	        atTarget = _get(CellsPolymerComponentConnector.prototype.__proto__ || Object.getPrototypeOf(CellsPolymerComponentConnector.prototype), '_isEventAtTarget', this).call(this, event);
	      }
	      return atTarget;
	    }
	  }, {
	    key: '_dispatchActionFunction',
	    value: function _dispatchActionFunction(evt, target, method) {
	      var propertyName = _getProperyChangedName(evt.type);
	      var payload;
	
	      if (propertyName && evt.detail && evt.detail.hasOwnProperty('value')) {
	        payload = Polymer.dom(evt).rootTarget[propertyName];
	      } else {
	        payload = evt.detail;
	      }
	
	      //TODO: Review to see if we actually want to show this warning.
	      if (this.bridge && this.bridge.debug && this.bridge.parsePayload && ('' + target[method]).indexOf('.data') > -1) {
	        payload = this.bridge.parsePayload(evt.detail);
	        console.warn('%c' + target.tagName + '%c is using an incompatible payload data in ' + method, 'background: #ff9800; color: white; padding: 4px 4px 4px 10px', 'background: #ff9800; color: rgba(255,255,255,0.9); padding: 4px 10px 4px 0');
	      }
	
	      target[method](payload);
	    }
	  }, {
	    key: '_getTargetProperties',
	    value: function _getTargetProperties(target) {
	      var props = void 0;
	      if (target.constructor.config) {
	        props = target.constructor.config.properties;
	      } else if (target.constructor.properties) {
	        props = target.constructor.properties;
	      }
	      return props;
	    }
	  }, {
	    key: '_dispatchActionProperty',
	    value: function _dispatchActionProperty(evt, target, property) {
	      var info;
	      var data = _parseActionInEvent(evt, property, target);
	
	      //check if target is an instance of Polymer Element to check if is a polymer 2 element
	      if (target && target.getPropertyInfo || Polymer.Element !== undefined && target instanceof Polymer.Element === false) {
	        if (target.getPropertyInfo) {
	          info = target.getPropertyInfo(data.property);
	        } else {
	          info = this._getTargetProperties(target)[data.property];
	        }
	
	        /* istanbul ignore else */
	        if (info && info.defined && !info.readOnly && !info.computed) {
	          return target.set(data.path, data.value);
	        }
	      }
	      //check if target is an instance of Polymer Element to check if is a polymer 2 element
	      if (target && target.getPropertyInfo === undefined || Polymer.Element !== undefined && target instanceof Polymer.Element === false) {
	        info = this._getTargetProperties(target) !== undefined ? this._getTargetProperties(target)[data.property] : undefined;
	
	        /* istanbul ignore else */
	        if (info && !info.readOnly && !info.computed) {
	          return target.set(data.path, data.value);
	        }
	      }
	
	      return target.setAttribute(data.path, data.value);
	    }
	  }, {
	    key: 'register',
	    value: function register(node, connections) {
	      _get(CellsPolymerComponentConnector.prototype.__proto__ || Object.getPrototypeOf(CellsPolymerComponentConnector.prototype), 'register', this).call(this, node, connections);
	
	      if (!node || !connections) {
	        return;
	      }
	
	      if (node.__isCellsConnected) {
	        return;
	      }
	
	      /* istanbul ignore else */
	      if (connections.in) {
	        for (var action in connections.in) {
	          /* istanbul ignore else */
	          if (this.manager.get(action)._events[0]) {
	            /* istanbul ignore else */
	            if (connections.ignoreAttr) {
	              connections.ignoreAttr.push(connections.in[action].bind);
	            } else {
	              connections.ignoreAttr = [connections.in[action].bind];
	            }
	          }
	        }
	      }
	
	      /* istanbul ignore else */
	      if (connections.out) {
	        for (var _action in connections.out) {
	          var attrName = _getProperyChangedName(connections.out[_action].bind);
	
	          var polymerVersion = this._whichPolymerVersion(node);
	          if (polymerVersion === 2) {
	            /* istanbul ignore else */
	            if (attrName && node.__data && !this.manager.get(_action)._events[0]) {
	              /* istanbul ignore else */
	              if (node && node._hasReadOnlyEffect) {
	                /* istanbul ignore else */
	                if (!node._hasReadOnlyEffect(attrName) && !node._hasComputedEffect(attrName)) {
	                  var oldValue = node[attrName];
	                  node.__data[attrName] = undefined;
	                  node[attrName] = oldValue;
	                }
	              }
	            }
	          } else {
	            /* istanbul ignore else */
	            if (attrName && node.__data__ && !this.manager.get(_action)._events[0]) {
	              /* istanbul ignore else */
	              if (node && node.getPropertyInfo) {
	                var info = node.getPropertyInfo(attrName);
	
	                /* istanbul ignore else */
	                if (info.defined && !info.readOnly && !info.computed) {
	                  var _oldValue = node[attrName];
	                  // remove polymer internal current value to trigger model changes
	                  node.__data__[attrName] = undefined;
	                  node[attrName] = _oldValue;
	                }
	              }
	            }
	          }
	        }
	      }
	
	      node.__isCellsConnected = true;
	    }
	  }]);
	
	  return CellsPolymerComponentConnector;
	}(_componentConnector2.default);
	
	exports.default = CellsPolymerComponentConnector;

/***/ }),
/* 92 */
/*!*****************************************!*\
  !*** ./src/polymer-template-manager.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(/*! cells-bridge/src/manager/template */ 82);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _polymerTemplate = __webpack_require__(/*! ./polymer-template */ 93);
	
	var _polymerTemplate2 = _interopRequireDefault(_polymerTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PolymerTemplateManager = function (_CellsManagerTemplate) {
	  _inherits(PolymerTemplateManager, _CellsManagerTemplate);
	
	  function PolymerTemplateManager() {
	    _classCallCheck(this, PolymerTemplateManager);
	
	    return _possibleConstructorReturn(this, (PolymerTemplateManager.__proto__ || Object.getPrototypeOf(PolymerTemplateManager)).apply(this, arguments));
	  }
	
	  _createClass(PolymerTemplateManager, [{
	    key: '_createCellsTemplate',
	    value: function _createCellsTemplate(spec, context) {
	      return new _polymerTemplate2.default(spec, context);
	    }
	  }]);
	
	  return PolymerTemplateManager;
	}(_template2.default);
	
	exports.default = PolymerTemplateManager;

/***/ }),
/* 93 */
/*!*********************************!*\
  !*** ./src/polymer-template.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(/*! cells-bridge/src/template */ 83);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _polymerResolutionChecker = __webpack_require__(/*! ./polymer-resolution-checker */ 94);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PolymerTemplate = function (_CellsBridgeTemplate) {
	  _inherits(PolymerTemplate, _CellsBridgeTemplate);
	
	  function PolymerTemplate() {
	    _classCallCheck(this, PolymerTemplate);
	
	    return _possibleConstructorReturn(this, (PolymerTemplate.__proto__ || Object.getPrototypeOf(PolymerTemplate)).apply(this, arguments));
	  }
	
	  _createClass(PolymerTemplate, [{
	    key: 'isUnresolved',
	    value: function isUnresolved() {
	      return (0, _polymerResolutionChecker.isPolymerElementUnresolved)(this.node);
	    }
	  }]);
	
	  return PolymerTemplate;
	}(_template2.default);
	
	exports.default = PolymerTemplate;

/***/ }),
/* 94 */
/*!*******************************************!*\
  !*** ./src/polymer-resolution-checker.js ***!
  \*******************************************/
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isPolymerElementUnresolved = isPolymerElementUnresolved;
	function isPolymerElementUnresolved(node) {
	  var isCustomElement = node.tagName.indexOf('-') > -1;
	  var isPolymer1 = node.__isPolymerInstance__ === true;
	  var isPolymer2 = Polymer.Element !== undefined && node instanceof Polymer.Element;
	
	  return isCustomElement && !isPolymer1 && !isPolymer2;
	}
	
	exports.default = {
	  isPolymerElementUnresolved: isPolymerElementUnresolved
	};

/***/ }),
/* 95 */
/*!**********************************!*\
  !*** ./src/polymer-component.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _component = __webpack_require__(/*! cells-bridge/src/component */ 84);
	
	var _component2 = _interopRequireDefault(_component);
	
	var _polymerResolutionChecker = __webpack_require__(/*! ./polymer-resolution-checker */ 94);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PolymerComponent = function (_CellsBridgeComponent) {
	  _inherits(PolymerComponent, _CellsBridgeComponent);
	
	  function PolymerComponent() {
	    _classCallCheck(this, PolymerComponent);
	
	    return _possibleConstructorReturn(this, (PolymerComponent.__proto__ || Object.getPrototypeOf(PolymerComponent)).apply(this, arguments));
	  }
	
	  _createClass(PolymerComponent, [{
	    key: 'isUnresolved',
	    value: function isUnresolved() {
	      return (0, _polymerResolutionChecker.isPolymerElementUnresolved)(this.node);
	    }
	  }]);
	
	  return PolymerComponent;
	}(_component2.default);
	
	exports.default = PolymerComponent;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=cells-polymer-bridge.js.map