# cells-glomo-bill-payment-service-detail

`<cells-glomo-bill-payment-service-detail>` displays the information of a selected service inside the Glomo's bill payment flow.

Example:

```html
<cells-glomo-bill-payment-service-detail></cells-glomo-bill-payment-service-detail>
```

This component requires a service item to be provided by data-binding to the selectedService property.

The following json represents a valid model for this property:

```json
{
    "id": "1235",
    "name": "Suministro de agua",
    "serviceType": {
        "id": "WATER_SUPPLY",
        "name": "Water supply",
        "link": {
            "rel": "service-type",
            "href": "http://bbvalabs.com:8000/payments/v0/service-types/WATER_SUPPLY"
        }
    },
    "serviceProvider": "SISS",
    "logo": {
        "id": "6",
        "name": "SISS",
        "url": "http://.../siss.png"
    },
    "billInformation": {
        "fixedBillNumber": true,
        "requiresAmount": true,
        "allowedDigitalCodes": [{
            "id": "QR",
            "name": "QR Code"
        }, {
            "id": "BARCODE",
            "name": "Barcode"
        }],
        "help": {
            "helpImage": {
                "id": "123",
                "name": "Ver numero factura",
                "url": "http://.../suministro-agua-num-factura.png"
            },
            "helpText": "Bill number is an 11-digit number as indicated: 0000-1111111."
        }
    },
    "highRanked": true
}
```

```html
<cells-glomo-bill-payment-service-detail selected-service="[[bindedItem]]"></cells-glomo-bill-payment-service-detail>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                                              | Description                              | Default         |
|:----------------------------------------------------------------------------:|:----------------------------------------:|:---------------:|
| --cells-glomo-bill-payment-service-detail                                    | Mixin applied to host                    | {}              |
| --cells-glomo-bill-payment-service-detail-reference-number-font-size         | Reference number font-size               | .75rem          |
| --cells-glomo-bill-payment-service-detail-reference-number-color             | Reference number color                   | --bbva-500      |
| --cells-glomo-bill-payment-service-detail-reference-number                   | Mixin applied to reference number        | {}              |
| --cells-glomo-bill-payment-service-detail-amount-font-size                   | Amount font-size                         | 1rem            |
| --cells-glomo-bill-payment-service-detail-amount-color                       | Amount color                             | --bbva-500      |
| --cells-glomo-bill-payment-service-detail-amount                             | Mixin applied to amount                  | {}              |
| --cells-glomo-bill-payment-service-detail-amount-number-font-size            | Amount number font-size                  | 3rem            |
| --cells-glomo-bill-payment-service-detail-amount-number-color                | Amount number color                      | --bbva-core-blue|
| --cells-glomo-bill-payment-service-detail-another-amount                     | Mixin applied to another amount          | {}              |
| --cells-glomo-bill-payment-service-detail-select-amount-area-margin          | Margin applied to select-amount-area     | 2.5rem 3.375rem |
| --cells-glomo-bill-payment-service-detail-select-amount-area                 | Mixin applied to select amount area      | {}              |
| --cells-glomo-bill-payment-service-detail-service-heading-margin             | Margin applied to service margin         | 0               |
| --cells-glomo-bill-payment-service-detail-service-heading                    | Mixin applied to service heading         | {}              |
| --cells-glomo-bill-payment-service-detail-agreement-number-bottom            | Bottom position for agreement number     | rem(5px)        |
| --cells-glomo-bill-payment-service-detail-agreement-number-left              | Left position for agreement number       | rem(60px)       |
| --cells-glomo-bill-payment-service-detail-agreement-number                   | Mixin applied to agreement number        | {}              |
| --cells-glomo-bill-payment-service-detail-button-area-width                  | Width for button number                  | rem(240px)      |
| --cells-glomo-bill-payment-service-detail-button-area                        | Mixin applied to button area             | {}              |
| --cells-glomo-bill-payment-service-detail-button-area-button-margin          | Margin for button inside button area     | 0 0 rem(12px) 0 |
| --cells-glomo-bill-payment-service-detail-button                             | Mixin applied to button in button area   | {}              |