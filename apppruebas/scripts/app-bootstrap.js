(function(document) {
  'use strict';

  if (typeof Object.assign !== 'function') {
    // .length of function is 2
    Object.assign = function(target, varArgs) {
      if (target === null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        // Skip over if undefined or null
        if (nextSource !== null) {
          for (var nextKey in nextSource) {

            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }
  
  // Array.prototype.find ES6 polyfill for ES5 versions
  Array.prototype.find = Array.prototype.find || function(callback) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    } else if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
    }
    var list = Object(this);
    // Makes sures is always has an positive integer as length.
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    for (var i = 0; i < length; i++) {
      var element = list[i];
      if ( callback.call(thisArg, element, i, list) ) {
        return element;
      }
    }
  };

  window.AppConfig = {"app":"mx","cache":true,"debug":true,"prplLevel":1,"preCache":true,"preRender":true,"componentsPath":"./bower_components/","composerEndpoint":"composerMocks/","cordovaMocks":"","mainNode":"app__content","deployEndpoint":"","dtmLibrary":"<script src=\"https://assets.adobedtm.com/95bb966a4c61b200a089c37679aaf96e22114787/satelliteLib-d0e3030220638b22c533bac481790e8952ae0bf4-staging.js\" async></script>","i18nPath":"locales/","lang":"es-MX","locale":"es","perfMonitor":"","transpile":true,"transpileExclude":["cells-rxjs","polymer*","moment","d3","bgadp*","cells-atom-radio-button","cleave-import","web-animations-js","cropperjs"],"splashLogo":"images/logo-bancomer.svg","splashLogoHeight":30,"cardDefaultImage":"./images/cards/cardFrontDefault.png","mapsApiKey":"AIzaSyBzW5dez5NNm3lMMwAyv79phnGsjhpbxQU","mapsLocationDefault":{"latitude":"19.432608","longitude":"-99.133209"},"sessionTimeout":{"foreground":3,"background":5},"globalServices":{"idBank":["038","BBVABAN"],"backendUserRequest":true,"consumerId":"00000013","hasCvv":false,"host":"https://artichoke.platform.bbva.com","poisHost":"https://2084xmlcgj.execute-api.eu-west-1.amazonaws.com/prod","versions":{"appSettings":"0","accounts":"0","apiAggregator":"0","cards":"0","catalogs":"0","contactsBook":"0","customers":"0","deposits":"0","grantingTicket":"0","interbankTransfers":"0","investmentFunds":"0","loans":"0","mobile":"0","ownTransfers":"0","payments":"0","receivers":"0","storedServices":"0","transactions":"0","transfer":"0","pois":"0","campaigns":"0","notifications":"0"}},"initialBundle":["welcome.json","login.json"],"routes":{"about":"/about","accessMethod":"/access-method","account":"/account/:productId","accountLinkMobile":"/account/:productId/link","accountMoreInfo":"/account/:productId/more-info","accountEditAlias":"/account/:productId/edit-alias","accountTransactionDetail":"/account/:productId/transaction/:transactionId","accountTransactions":"/account/:productId/transactions","accountUnlinkMobile":"/account/:productId/unlink","apps":"/apps","billPayments":"/bill-payments","billPaymentsReview":"/bill-payments/review","card":"/card/:productId","cardTransactionDetail":"/card/:productId/transaction/:transactionId","cardTransactions":"/card/:productId/transactions","cardMoreInfo":"/card/:productId/more-info","cardEditAlias":"/card/:productId/edit-alias","cardlessWithdrawal":"/cardless-withdrawal","cardlessWithdrawalHistoric":"/cardless-withdrawal/historic","cardlessWithdrawalReview":"/cardless-withdrawal/review","cardlessWithdrawalDetail":"/cardless-withdrawal/:transactionId","creditCardPayment":"/credit-card-payment","creditCardPaymentReview":"/credit-card-payment/review","dashboard":"/dashboard","dashboardCard":"/dashboardCard","deposit":"/deposit/:productId","depositMoreInfo":"/deposit/:productId/more-info","depositEditAlias":"/deposit/:productId/edit-alias","depositTransactions":"/deposit/:productId/transactions","efiCash":"/efi-cash/:productId/:offerId","efiCashResume":"/efi-cash/:productId/:offerId/resume","efiCashReview":"/efi-cash/:productId/:offerId/review","forme":"/forme","fund":"/fund/:productId","fundMoreInfo":"/fund/:productId/more-info","fundEditAlias":"/fund/:productId/edit-alias","help":"/help","increaseLimit":"/increase-limit/:productId/:offerId","increaseLimitReview":"/increase-limit/:productId/:offerId/review","loan":"/loan/:productId","loanEditAlias":"/loan/:productId/edit-alias","loanMoreInfo":"/loan/:productId/more-info","loanOffer":"/loan/:productId/offer/:offerId","loanOfferReview":"/loan/:productId/offer/:offerId/review","login":"/login","mobileTopUp":"/mobile-top-up","mobileTopUpReview":"/mobile-top-up/review","notifications":"/notifications","notificationDetail":"/notifications/:notificationId/detail","legalNotice":"/legal","pay":"/pay","poisDetail":"/pois/:type/:poisId","profile":"/profile","profileChangeEmail":"/profile/change-email","profileChangeAvatar":"/profile/change-avatar","profileChangePassword":"/profile/change-password","savedCellularRecipients":"/saved-cellular-recipients","savedRecipients":"/saved-recipients","transaction":"/dashboard/transaction/:transactionId","transactions":"/dashboard/transactions","transactionsTransaction":"/dashboard/transactions/transaction/:transactionId","transfer":"/transfer","transferReview":"/transfer/review","operations":"/operations","atmLocator":"/atm-locator","searchPlace":"/search-place","welcome":"/","opportunities":"/opportunities"},"once":true};

  function updateCache() {
    if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
      window.applicationCache.swapCache();
    }
  }

  function removeSplashScreen() {
    var loadEl = document.getElementById('splash');
    if (loadEl) {
      loadEl.parentNode.removeChild(loadEl);
      document.body.classList.remove('loading');
    }
  }

  function continueLoading() {
    if (isLoadingInitialPage()) {
      fireComponentsLoadEvent();
    } else {
      loadAppElements(fireComponentsLoadEvent);
    }
  }

  function fireComponentsLoadEvent() {
    var eventComponentsLoaded = new CustomEvent('componentsLoaded');
    document.body.dispatchEvent(eventComponentsLoaded);
  }

  function onScriptLoadError(file) {
    return function() {
      var customEvent = new CustomEvent('scriptLoadError', {
        detail: file
      });
      document.body.dispatchEvent(customEvent);
    };
  }

  function loadAppElements(cb) {
    var nextBundle = document.createElement('link');
    nextBundle.rel = 'import';
    nextBundle.href = window.AppConfig.deployEndpoint + window.AppConfig.componentsPath + 'app-components.html';
    nextBundle.onload = cb;
    nextBundle.onerror = onScriptLoadError(nextBundle.href);
    nextBundle.setAttribute('async', '');
    document.head.appendChild(nextBundle);
  }

  function isLoadingInitialPage() {
    var initialPage;
    var hash;
    var isInitialPage = true;
    if (window.AppConfig.initialBundle && window.AppConfig.initialBundle.length > 0) {
      hash = window.location.hash;
      if (hash==='' || hash==='#!/') {
        isInitialPage = true;
      } else {
        initialPage = window.AppConfig.initialBundle[0].split('.')[0];
        isInitialPage = hash.indexOf(initialPage) > -1;
      }
    }
    return isInitialPage;
  }

  function loadElements() {
    var bundle = document.createElement('link');
    bundle.rel = 'import';
    bundle.href = window.AppConfig.deployEndpoint + window.AppConfig.componentsPath + 'initial-components.html';
    bundle.onload = continueLoading;
    bundle.onerror = onScriptLoadError(bundle.href);
    document.head.appendChild(bundle);
  }

  function loadWebComponentPolyfill() {
    var polyfill = document.createElement('script');
    polyfill.src = window.AppConfig.deployEndpoint + window.AppConfig.componentsPath + 'webcomponentsjs/webcomponents-lite.js';
    polyfill.onload = loadElements;
    polyfill.onerror = onScriptLoadError(polyfill.src);
    document.head.appendChild(polyfill);
  }

  function onNavigation(msg) {
    var customEvent = new CustomEvent('aria-announce', {
      detail: msg.detail.detail.page
    });
    document.body.dispatchEvent(customEvent);
  }

  function onAnnounce(msg) {
    var announcer = document.querySelector('#announcer');
    if (announcer) {
      announcer.textContent = msg.detail;
    }
  }

  function detectPlatform(which, orelse) {
    return 'desktop';
    //return window.bowser[which] ? which : orelse;
  }

  //TODO: write a proper platform detection
  function getPlatform() {
    return detectPlatform('ios', detectPlatform('android', 'desktop'));
  }

  function _renderTemplate(template) {
    return function(tuples) {
      return tuples.reduce(function(tmpl, tuple) {
        return tmpl.replace(tuple[0], tuple[1]);
      }, template);
    };
  }

  function shouldAddCordovaScript() {
    var userAgent = window.navigator.userAgent.toLowerCase();
    var ios = /iphone|ipod|ipad/.test(userAgent);
    var android = /android/.test(userAgent);
    var safari = /safari/.test(userAgent);
    var webViewWv = / wv\)/.test(userAgent);
    var crosswalk = /crosswalk/.test(userAgent);

    //var webViewVersion = /version/.test(userAgent);

    if (ios) {
      return !safari;
    }

    if (android) {
      return (webViewWv || crosswalk);
    }
  }

  function appendCordovaScript() {
    var script = document.createElement('script');
    script.setAttribute('src', window.AppConfig.cordovaScript);
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'utf-8');
    script.onerror = onScriptLoadError(window.AppConfig.cordovaScript);
    document.body.appendChild(script);
  }

  function _endpointTemplate(params) {
    return _renderTemplate(
      _renderTemplate(window.AppConfig.composerEndpoint)([
        [/{appId}/, window.AppConfig.appId],
        [/{platform}/, getPlatform()]]))(params);
  }

  function isLocalComposer() {
    return window.AppConfig.composerEndpoint.indexOf('http') !== 0;
  }

  function generateRequestUrl(page) {
    return _endpointTemplate([ [/{page}/, page] ]);
  }

  function generateRequestHeaders() {
    var composerHeader = {};
    if (window.AppConfig.composerHeaderKey && window.AppConfig.composerHeaderValue) {
      composerHeader[window.AppConfig.composerHeaderKey] = window.AppConfig.composerHeaderValue;
    }
    return composerHeader;
  }

  function onRender(template, fixed) {
    if (!template.parentNode) {
      document.getElementById(this.mainNode).appendChild(template);
      var eventComponentsLoaded = new CustomEvent('componentsInTemplateLoaded');
      document.body.dispatchEvent(eventComponentsLoaded);
    }
    if (fixed) {
      document.getElementById('external__header').innerHTML = '';
      document.getElementById('external__footer').innerHTML = '';
      fixed.forEach(function(component) {
        document.getElementById(component.zone).appendChild(component.node);
      });
    }
  }

  function startCore(options) {
    return function() {
      var bridge = new window.CellsPolymerBridge(options);
    };
  }

  function webComponentsSupported() {
    return ('registerElement' in document && 'import' in document.createElement('link')
      && 'content' in document.createElement('template'));
  }

  window.CellsPolymer = {
    start: function(options) {
      var config = Object.assign({
        binding: 'currentview',
        cache: window.AppConfig.coreCache || false,
        domMode: 'shadow',
        headers: generateRequestHeaders(),
        generateRequestUrl: !isLocalComposer() && generateRequestUrl,
        mainNode: 'app__content',
        onRender: onRender,
        preCache: false,
        preRender: false,
        templatesPath: window.AppConfig.composerEndpoint || ''
      },
      window.AppConfig,
      options);

      var onNavigation = config.onNavigation || onNavigation;
      var removeSplash = config.removeSplashScreen || removeSplashScreen;
      var updateCache = config.updateCache || updateCache;

      window.Polymer = window.Polymer || {
        dom: config.domMode,
        lazyRegister: 'max',
        useNativeCSSProperties: true
      };

      document.body.addEventListener('aria-announce', onAnnounce);
      document.body.addEventListener('componentsInTemplateLoaded', removeSplash, { once: true });
      if (config.initialBundle && isLoadingInitialPage()) {
        document.body.addEventListener('componentsInTemplateLoaded', loadAppElements);
      }
      document.body.addEventListener('componentsLoaded', startCore(config), { once: true });

      if (options.enableSSLPinning) {
        document.body.addEventListener('componentsLoaded', options.enableSSLPinning, { once: true });
      }

      document.getElementById(config.mainNode).addEventListener('nav-request', onNavigation);
      window.applicationCache.addEventListener('updateready', updateCache);

      if (shouldAddCordovaScript()) {
        appendCordovaScript();
      }

      if (!config.skipInitialLoad) {
        this.loadElements();
      }
    },
    loadElements: function() {
      if (webComponentsSupported()) {
        loadElements();
      } else {
        loadWebComponentPolyfill();
      }
    }
  };
}(document));
