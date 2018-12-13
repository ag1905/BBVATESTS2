![cells-handle-lif-cycle screenshot](cells-handle-lif-cycle.png)

# cells-handle-life-cycle

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-handle-lif-cycle)

Includes the logic to fire `reset` event when app navigates from `pageName` to a page not included in `cache` list.
To do so it will be necessary to set pageName with the fromPage to watched, set cache with the list of pages that won't fire the event 
and call navigation method with the fromPage and currentPage information. 

## Example:
It will fire reset event when calling myEl.navigation() with fromPage `list` and currentPage other than `detail`.
```html
<cells-handle-life-cycle id="myEl" pageName="list" cache="['detail']"></cells-handle-life-cycle>
```
