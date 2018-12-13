<a name="1.2.0"></a>
# 1.2.0 (2016-07-15)


### Bug Fixes

* **cells-ajax.js:** change type of attribute ([1cc641c](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/1cc641c))


### Features

* **cells-ajax:** remove single keys ([6b30eba](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/6b30eba))
* **dictionary:** save the keys created by the component ([c4d74ef](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/c4d74ef))



<a name="1.1.0"></a>
# 1.1.0 (2016-06-27)


### Features

* **cells-ajax.js:** not cache POST request; updated cache key composition; lint review ([31ec558](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/31ec558))
* **demo/index.html:** lint review ([51b600f](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/51b600f))
* **test/iron-ajax.html:** update GET tests with new 'key' composition; added POST test (not cached rquest) ([4f09beb](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/4f09beb))



<a name="1.0.0"></a>
# 1.0.0 (2016-06-08)


### Bug Fixes

* **cells-ajax.js:** Execute discardRequest from cellsHttp object and do the hash for cache in a different when body is a string ([b14a8e7](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b14a8e7))


### Features

* **cells-ajax.js:** remove cached property ([8678be2](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/8678be2))



<a name="0.2.5"></a>
## 0.2.5 (2016-05-18)



<a name="0.2.4"></a>
## 0.2.4 (2016-05-18)


### Bug Fixes

* **cells-ajax:** handle uncaught error when xhr reject the promise ([525b3ca](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/525b3ca))



<a name="0.2.3"></a>
## 0.2.3 (2016-05-18)


### Bug Fixes

* **cells-ajax:** add missing private method to discard request. ([9b2aae0](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/9b2aae0))



<a name="0.2.2"></a>
## 0.2.2 (2016-05-17)


### Bug Fixes

* **multi-cache:** implement multi cache requests when made many request over the same cells-ajax instance ([93f3ff6](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/93f3ff6))



<a name="0.2.1"></a>
## 0.2.1 (2016-04-25)


### Bug Fixes

* **cells-ajax:** fix deactivate cache when use cells-ajax. ([6a0d3d9](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/6a0d3d9))
* **tests:** refactor test of cells-ajax ([7ff9400](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/7ff9400))



<a name="0.2.0"></a>
# 0.2.0 (2016-02-25)


### Features

* **cells-ajax.js:** Added a cached field to response, to know if the response cames from cache ([b66e180](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b66e180))



<a name="0.1.12"></a>
## 0.1.12 (2016-02-23)


### Bug Fixes

* **cells-ajax.js:** getRequestKey() - Include params on key to distinguish requests with same url but different params. ([cc856c6](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/cc856c6))
* **js:** Correct the _removeMemoryCache function ([b65a224](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b65a224))



<a name="0.1.10"></a>
## 0.1.10 (2016-01-15)


### Bug Fixes

* **cells-ajax.js:** repair clearCache function ([901f86e](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/901f86e))



<a name="0.1.9"></a>
## 0.1.9 (2016-01-14)


### Bug Fixes

* **bower.json:** invalid 'dependencies', they are 'devDependencies' ([fa5f002](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/fa5f002))



<a name="0.1.8"></a>
## 0.1.8 (2015-12-10)


### Bug Fixes

* **ajax-template:** Evaluate if cellsHttp is native or ajax. ([4b693cb](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/4b693cb))



<a name="0.1.7"></a>
## 0.1.7 (2015-11-23)


### Bug Fixes

* **cells-ajax:** async problems ([3feb8e8](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/3feb8e8))



<a name="0.1.6"></a>
## 0.1.6 (2015-11-18)


### Bug Fixes

* **cells-ajax:** correct cellsHttp condition in generateRequest ([ce32fc0](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/ce32fc0))



<a name="0.1.5"></a>
## 0.1.5 (2015-11-18)


### Bug Fixes

* **cells-ajax:** resolve async issues ([d0eb8f1](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/d0eb8f1))
* **cells-ajax.js:** include 'resolve' param in '_generateRequest' ([2f70b7e](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/2f70b7e))



<a name="0.1.3"></a>
## 0.1.3 (2015-11-16)



<a name="0.1.1"></a>
## 0.1.1 (2015-10-28)


### Bug Fixes

* **cells-ajax.js:** misspelling method name ([1ed9106](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/1ed9106))



<a name="0.1.0"></a>
# 0.1.0 (2015-10-28)


### Bug Fixes

* **cells-ajax:** generateRequest resolve promise with request when take response from cache ([1225c01](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/1225c01))


### Features

* **cells-ajax:** Finish first version ([b3d2398](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b3d2398))



<a name="1.1.0"></a>
# 1.1.0 (2016-06-27)


### Features

* **cells-ajax.js:** not cache POST request; updated cache key composition; lint review ([31ec558](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/31ec558))
* **demo/index.html:** lint review ([51b600f](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/51b600f))
* **test/iron-ajax.html:** update GET tests with new 'key' composition; added POST test (not cached rquest) ([4f09beb](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/4f09beb))



<a name="1.0.0"></a>
# 1.0.0 (2016-06-08)


### Bug Fixes

* **cells-ajax.js:** Execute discardRequest from cellsHttp object and do the hash for cache in a different when body is a string ([b14a8e7](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b14a8e7))


### Features

* **cells-ajax.js:** remove cached property ([8678be2](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/8678be2))



<a name="0.2.5"></a>
## 0.2.5 (2016-05-18)



<a name="0.2.4"></a>
## 0.2.4 (2016-05-18)


### Bug Fixes

* **cells-ajax:** handle uncaught error when xhr reject the promise ([525b3ca](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/525b3ca))



<a name="0.2.3"></a>
## 0.2.3 (2016-05-18)


### Bug Fixes

* **cells-ajax:** add missing private method to discard request. ([9b2aae0](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/9b2aae0))



<a name="0.2.2"></a>
## 0.2.2 (2016-05-17)


### Bug Fixes

* **multi-cache:** implement multi cache requests when made many request over the same cells-ajax instance ([93f3ff6](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/93f3ff6))



<a name="0.2.1"></a>
## 0.2.1 (2016-04-25)


### Bug Fixes

* **cells-ajax:** fix deactivate cache when use cells-ajax. ([6a0d3d9](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/6a0d3d9))
* **tests:** refactor test of cells-ajax ([7ff9400](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/7ff9400))



<a name="0.2.0"></a>
# 0.2.0 (2016-02-25)


### Features

* **cells-ajax.js:** Added a cached field to response, to know if the response cames from cache ([b66e180](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b66e180))



<a name="0.1.12"></a>
## 0.1.12 (2016-02-23)


### Bug Fixes

* **cells-ajax.js:** getRequestKey() - Include params on key to distinguish requests with same url but different params. ([cc856c6](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/cc856c6))
* **js:** Correct the _removeMemoryCache function ([b65a224](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b65a224))



<a name="0.1.10"></a>
## 0.1.10 (2016-01-15)


### Bug Fixes

* **cells-ajax.js:** repair clearCache function ([901f86e](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/901f86e))



<a name="0.1.9"></a>
## 0.1.9 (2016-01-14)


### Bug Fixes

* **bower.json:** invalid 'dependencies', they are 'devDependencies' ([fa5f002](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/fa5f002))



<a name="0.1.8"></a>
## 0.1.8 (2015-12-10)


### Bug Fixes

* **ajax-template:** Evaluate if cellsHttp is native or ajax. ([4b693cb](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/4b693cb))



<a name="0.1.7"></a>
## 0.1.7 (2015-11-23)


### Bug Fixes

* **cells-ajax:** async problems ([3feb8e8](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/3feb8e8))



<a name="0.1.6"></a>
## 0.1.6 (2015-11-18)


### Bug Fixes

* **cells-ajax:** correct cellsHttp condition in generateRequest ([ce32fc0](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/ce32fc0))



<a name="0.1.5"></a>
## 0.1.5 (2015-11-18)


### Bug Fixes

* **cells-ajax:** resolve async issues ([d0eb8f1](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/d0eb8f1))
* **cells-ajax.js:** include 'resolve' param in '_generateRequest' ([2f70b7e](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/2f70b7e))



<a name="0.1.3"></a>
## 0.1.3 (2015-11-16)



<a name="0.1.1"></a>
## 0.1.1 (2015-10-28)


### Bug Fixes

* **cells-ajax.js:** misspelling method name ([1ed9106](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/1ed9106))



<a name="0.1.0"></a>
# 0.1.0 (2015-10-28)


### Bug Fixes

* **cells-ajax:** generateRequest resolve promise with request when take response from cache ([1225c01](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/1225c01))


### Features

* **cells-ajax:** Finish first version ([b3d2398](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b3d2398))



<a name="1.0.0"></a>
# 1.0.0 (2016-06-08)


### Bug Fixes

* **cells-ajax.js:** Execute discardRequest from cellsHttp object and do the hash for cache in a different when body is a string ([b14a8e7](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b14a8e7))


### Features

* **cells-ajax.js:** remove cached property ([8678be2](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/8678be2))



<a name="0.2.5"></a>
## 0.2.5 (2016-05-18)



<a name="0.2.4"></a>
## 0.2.4 (2016-05-18)


### Bug Fixes

* **cells-ajax:** handle uncaught error when xhr reject the promise ([525b3ca](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/525b3ca))



<a name="0.2.3"></a>
## 0.2.3 (2016-05-18)


### Bug Fixes

* **cells-ajax:** add missing private method to discard request. ([9b2aae0](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/9b2aae0))



<a name="0.2.2"></a>
## 0.2.2 (2016-05-17)


### Bug Fixes

* **multi-cache:** implement multi cache requests when made many request over the same cells-ajax instance ([93f3ff6](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/93f3ff6))



<a name="0.2.1"></a>
## 0.2.1 (2016-04-25)


### Bug Fixes

* **cells-ajax:** fix deactivate cache when use cells-ajax. ([6a0d3d9](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/6a0d3d9))
* **tests:** refactor test of cells-ajax ([7ff9400](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/7ff9400))



<a name="0.2.0"></a>
# 0.2.0 (2016-02-25)


### Features

* **cells-ajax.js:** Added a cached field to response, to know if the response cames from cache ([b66e180](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b66e180))



<a name="0.1.12"></a>
## 0.1.12 (2016-02-23)


### Bug Fixes

* **cells-ajax.js:** getRequestKey() - Include params on key to distinguish requests with same url but different params. ([cc856c6](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/cc856c6))
* **js:** Correct the _removeMemoryCache function ([b65a224](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b65a224))



<a name="0.1.10"></a>
## 0.1.10 (2016-01-15)


### Bug Fixes

* **cells-ajax.js:** repair clearCache function ([901f86e](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/901f86e))



<a name="0.1.9"></a>
## 0.1.9 (2016-01-14)


### Bug Fixes

* **bower.json:** invalid 'dependencies', they are 'devDependencies' ([fa5f002](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/fa5f002))



<a name="0.1.8"></a>
## 0.1.8 (2015-12-10)


### Bug Fixes

* **ajax-template:** Evaluate if cellsHttp is native or ajax. ([4b693cb](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/4b693cb))



<a name="0.1.7"></a>
## 0.1.7 (2015-11-23)


### Bug Fixes

* **cells-ajax:** async problems ([3feb8e8](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/3feb8e8))



<a name="0.1.6"></a>
## 0.1.6 (2015-11-18)


### Bug Fixes

* **cells-ajax:** correct cellsHttp condition in generateRequest ([ce32fc0](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/ce32fc0))



<a name="0.1.5"></a>
## 0.1.5 (2015-11-18)


### Bug Fixes

* **cells-ajax:** resolve async issues ([d0eb8f1](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/d0eb8f1))
* **cells-ajax.js:** include 'resolve' param in '_generateRequest' ([2f70b7e](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/2f70b7e))



<a name="0.1.3"></a>
## 0.1.3 (2015-11-16)



<a name="0.1.1"></a>
## 0.1.1 (2015-10-28)


### Bug Fixes

* **cells-ajax.js:** misspelling method name ([1ed9106](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/1ed9106))



<a name="0.1.0"></a>
# 0.1.0 (2015-10-28)


### Bug Fixes

* **cells-ajax:** generateRequest resolve promise with request when take response from cache ([1225c01](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/1225c01))


### Features

* **cells-ajax:** Finish first version ([b3d2398](https://descinet.bbva.es/stash/projects/CEL/repos/cells-ajax/commits/b3d2398))



