# cells-generic-dp

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-generic-dp)

Allows to perform an AJAX request to any API environment.

Example:

```html
<cells-generic-dp
  id="myDataProvider"
  host="http://some_host"
  path="some_endpoint_path"
  params='{"key":"value"}'
  body='{"key":"value"}'
  headers='{"key":"value"}'
  method="GET">
</cells-generic-dp>
```

```javascript
myEl.$.myDataProvider.addEventListener('request-success', function(e) {
  //on success
});
myEl.$.myDataProvider.addEventListener('request-error', function(e) {
  //on error
});
myEl.$.myDataProvider.generateRequest();
```

This document covers:

1. <a href="#dependencies">Dependencies</a>
2. <a href="#api">API</a>
    1. <a href="#properties">Properties</a>
    2. <a href="#methods">Methods</a>
    3. <a href="#events">Events</a>
3. <a href="#info">Additional info</a>
    
---

<a name="dependencies"></a>
## Dependencies

* [cells-ajax](https://globaldevtools.bbva.com/bitbucket/projects/CEL/repos/cells-ajax/browse)


<a name="api"></a>
## API

<a name="properties"></a>
**Properties**:

| NAME | Type | Description | Binding | Default value |
|:--- |:---:|:--- |:---:|:---:|
| auto | Boolean | Flags if request will be auto-generated whenever any of its properties changes. | IN | `false` |
| body | Object | Request body, commonly used for `PATH`, `POST` or `PUT` request. | IN | `null` |
| cache | String | Type of cache: `none`, `local` or `memory` | IN | `none` |
| cacheTime | Number | Time for cache expiration | IN | `0` |
| contentType | String | Type of content type header request. Will be ignored if `headers` defines this value. | IN  | `` |
| handleAs | String | Text format to handle request response. Could be any valid MIME type. | IN | `json` |
| headers | Object | Request headers. | IN | `{Accept: "application/json, text/plain, */*; q=0.01", Content-Type: "application/json"}` |
| host | String | Request host domain. Including protocol. | IN | `` |
| method | String | Request method. | IN  | `GET` |
| native | Boolean | Flags if request should be performed through `cordovaCells.Http` plugin | IN | `false` |
| params | Object | Request params. | IN | `null` |
| path | String | Request endpoint path. If defined, will be concatenated to `host`. | IN | `` |
| requiresTsec | Boolean | Flags if `tsec` header value should be added | IN | `false` |
| sync | Boolean | Flags if request should be synchronous or not | IN | `false` |
| tsecHandler | Storage | `tsec` storage interface | IN | `window.sessionStorage` |
| timeout | Number | Request timeout (in milliseconds) | IN | `60000` |
| verbose | Boolean | Enables debug mode and `console.log` traces | IN | `false` |
| withCredentials | Boolean | XHR with credentials | IN | `false` |

<a name="methods"></a>
**Methods**:

| NAME | Description | Returns
|:--- |:--- |:---:|
| generateRequest | In case there's no pending request, will perform configured AJAX request. | --- |
| getLastRequest | Returns latest XHR request performed | `XMLHttpRequest` |
| getLastResponse | Returns last successful response or error | `Object` |

<a name="events"></a>
**Events**:

| NAME | Description | Returns
|:--- |:--- |:---:|
| cells-generic-dp-error | Fired whenever there's an internal error. Only under debug mode. | --- |
| cells-generic-dp-info | Fired for debug purposes. Only under debug mode. | --- |
| request-success | Fired after successful request. | `Object` |
| request-error | Fired after failed requests. | `{Object}` |

<a name="info"></a>
## Additional info

- [W3C HTTP Request Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
- [W3C HTTP Request Methods](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)
- [MDN XMLHttpRequest.withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials)
- [MDN Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

