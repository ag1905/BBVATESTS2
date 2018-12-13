(function(document) {
  'use strict';
  var routes = window.AppConfig.routes;
  var userInfo = (function() {
    var params = localStorage.getItem('cells-params');
    try {
      return JSON.parse(params) && JSON.parse(params).userInfo;
    } catch (e) {
      return null;
    }
  }());

  // Checked remind user
  if (userInfo && userInfo.userId) {
    routes.login = '/';
    routes.welcome = '/welcome';

    // Manage /login url
    if (window.location.href.split('#!/')[1] === 'login') {
      window.location.href = window.location.origin;
    }
  }
  window.CellsPolymer.start({ // eslint-disable-line no-new
    avoidPolymerEventCache: true,
    mainNode: window.AppConfig.mainNode,
    binding: 'ui',
    initialTemplate: 'login',
    cache: window.AppConfig.cache,
    debug: window.AppConfig.debug,
    prplLevel: window.AppConfig.prplLevel,
    preCache: window.AppConfig.preCache,
    preRender: window.AppConfig.preRender,
    componentsPath: window.AppConfig.componentsPath,
    generateRequestUrl: function generateRequestUrl(page) {
      return window.AppConfig.composerEndpoint + page + '.json';
    },
    routes: routes,
    onRender: function onrender(template) {
      if (!template.parentNode) {
        document.getElementById('app__content').appendChild(template);
        var eventComponentsLoaded = document.createEvent('Event');
        eventComponentsLoaded.initEvent('componentsInTemplateLoaded', true, true);
        document.body.dispatchEvent(eventComponentsLoaded);
      }
    }
  });

}(document));
