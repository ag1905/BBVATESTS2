cells-device-behavior
=======================

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`CellsBehaviors.DeviceBehavior` provides information about the device such us the operating system and the browser as well as the device orientation

#### Import

1) Import the behavior in your component:

```html
<link rel="import" href="../cells-device-behavior/cells-device-behavior.html">
```

2) Add CellsBehaviors.DeviceBehavior to the behaviors list in the JS file or script of your component:

```js
behaviors: [
  ...,
  CellsBehaviors.DeviceBehavior,
]
```

#### Usage
This behavior exposes the following Booleans:
* isAndroid
* isBlackberry
* isFxos
* isIOS
* isWindows
* isTV
* isCordova
* isMobile
* isTablet
* isDesktop

And the following properties:
* orientation, a string with possible values: `landscape` or `portrait`.
* browser, an object like { name: {String}, version: {String} }
* os, a string indicating the operating system

This behavior gives you a function called **_handleOrientation** that you might implement in your component to handle device orientation changes.
