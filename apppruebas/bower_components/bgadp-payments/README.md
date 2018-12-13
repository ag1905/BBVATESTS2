# bgadp-payments

Cells *auto-generated* **data provider** for [BBVA GLOBAL API](https://apisbbva.bitbucket.io/#/global/apis/paymentMethods/payments).

## Import & Use

```json
//my-component bower.json
{
  //...
  "dependencies": {
    "bgadp-payments": "ssh://git@globaldevtools.bbva.com:7999/bbvacellsapi/bgadp-payments.git"
  }
}
```

```html
<!-- my-component.html -->
<link rel="import" href="../bgadp-payments/bgadp-payments.html"/>
<dom-module id="my-component"></dom-module>
```

```javascript
//my-component.js
Polymer({
    is: 'my-component',
    method: () => {
        let config = {
            host: 'http://localhost:3000'
        };
        let dp = new BGADPPayments.payments.get(config);
        //additional dp configuration
        dp.doRequest().then(_ => {
            console.log(dp.getLastResponse());              //{apiInfo: {}, data: {}}
            //@todo
        });
    }
});
```

## bgadp-payments structure

Each **GLOBAL API** endpoint is represented by a single class that can be achieved through  structure.

For example: `/payments` is represented as `BGADPPayments.payments.get`.

But `/payments/{payment-id}` is represented as `BGADPPayments.payments.payment.get`


Feel free to explore bgadp-payments structure before using it.

## Configuration

bgadp-payments DPs can be configured on creation or after creation and before executing `doRequest()`.

**On creation**:

```javascript
let config = {
    host: 'http://localhost:3000'
};
new BGADPPayments.payments.get(config);
```

**After creation**:

```javascript
let dp = new BGADPPayments.payments.get();
dp.host = 'http://localhost:3000';
```


**Available configuration properties**:

| PROPERTY | TYPE | Description |
|:---:|:---:|:---|
| host  | String | Endpoint host, by default *http://localhost:8100* |
| version  | String | Endpoint version, by default is `0` |
| method  | String | HTTP Request method, by default is `GET` |
| params  | Object | Query params to replace into path or to be added. |
| body  | Object | Request payload to be sent |
| headers  | Object | Request specific headers |
| requiresTsec  | Boolean | Whether if request should add `tsec` header |
| tsecHandler  | Object | Reference for object which handles `tsec` storage. Must be an interface of `window.sessionStorage` |
| native | Boolean | Whether XHR request will be performed by `cordovaCells.Http` plugin or not. |


For further information about **how to use & configure** this library, please refer to [cells-generator-dp/DEMO](https://globaldevtools.bbva.com/bitbucket/projects/CELLSLABS/repos/cells-generator-dp/browse/demo).

## Support

Please, contact [Cells Support](mailto:cells-support.group@bbva.com ) in any of following cases:

* This library or any sibling don't behave as desired or presents errors.
* The library for the API you are trying to consume don't exists (yet)

Or contact us at following Slack channels:

| ![slack](./slack.png) |
|:---:|
| [Europe](https://cells-europe.slack.com) |
| [USA](https://cells-usa.slack.com) |
| [LATAM](https://cells-latam.slack.com) |
