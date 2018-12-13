# cells-bgadp-user-dm

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-bgadp-user-dm)

Data manager for bgadp-granting-tickets.

This DM expects a `consumer-id`, `host`, and `country`, and an `user` object with `userId` and `password` properties. It fires events when either login or logout requests start and when they either finish successfully or badly.

Calls to Cells Bridge ($core)'s logout method to perform logout.

Example:
```html
<cells-bgadp-user-dm id="userDm"
  host="https://bbvalabs.com:8001"
  consumer-id="000013"
  user='{"userId": "777777779", "password": "GLOMO"}'>
</cells-bgadp-user-dm>
```
