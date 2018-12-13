# cells-successful-response

shows a page with a success message from the service

Example:
```html
<cells-successful-response></cells-successful-response>
```

Example:

```html
<cells-successful-response result="{{result}}"></cells-successful-response>
```

## Properties
+ **result**: Object with the result of the operation.

This is the data for result:

```json
{
  id: '667466',
  date: '2016-09-16T12:27:00',
  title: 'cells-successful-response-success',
  origin: {
    product: {
      id: 'ACCOUNTS',
      name: 'Juan Sin Tierra'
    },
    number: '12345'
  },
  destination: {
    product: {
      id: 'ACCOUNTS',
      name: 'Cuenta Crédito'
    },
    number: '23456'
  },
  fees: [{
    amount: 0.5,
    currency: 'EU'
  }],
  amount: {
    amount: 300.5,
    currency: 'EU'
  },
  info: [
    {
      key: 'cells-sucessful-response-concept',
      value: 'September bill',
      class: 'bold spacing md'
    },
    {
      key: 'cells-successful-response-id-or-reference',
      value: '667466',
      class: 'inline spacing separator'
    },
    {
      key: 'cells-successful-cie-guide',
      value: 'oncwe908uojsncpqqc88QWcQaa45',
      class: 'inline secondary'
    },
    {
      key: 'cells-successful-page-number',
      value: '667466',
      class: 'inline secondary'
    }
  ],
  operations: [
    {
      label: 'Compartir',
      id: 'share',
      icon: 'coronita:share'
    },
    {
      label: 'Descargar recibo',
      id: 'download',
      icon: 'coronita:document'
    }
  ]
}
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                                         | Description | Default                                  |
|:--------------------------------------------------------                |:------------|:-----------------------------------------|
| --cells-successful-response-bg-color                                    | bg color for host         | var(--bbva-white, #fff)    |
| --cells-successful-response                                             | empty mixin               | {}                         |
| --cells-successful-response-info-bg-color                               | bg color for .info        | var(--bbva-green,#48AE64)  |
| --cells-successful-response-info-color                                  | color for .info           | var(--bbva-white, #fff)    |
| --cells-successful-response-info                                        | empty mixin               | {}                         |
| --cells-successful-response-info-success-bg-color                       | bg color for .success     | var(--bbva-green,#48AE64)  |
| --cells-successful-response-info-success                                | empty mixin               | {}                         |
| --cells-successful-response-info-warning-bg-color                       | bg color for .warning     | var(--bbva-yellow,#F8CD51) |
| --cells-successful-response-info-warning                                | empty mixin               | {}                         |
| --cells-successful-response-info-error-bg-color                         | bg color for .error       | var(--bbva-red,#DA3851)    |
| --cells-successful-response-info-error                                  | empty mixin               | {}                         |
| --cells-successful-response-info-fees-container                         | empty mixin               | {}                         |
| --cells-successful-response-info-fees                                   | empty mixin               | {}                         |
| --cells-successful-response-info-fees-amount                            | empty mixin               | {}                         |
| --cells-successful-response-otherInfo-item-inline-key-color             | color for otherInfo keys  | var(--bbva-500, #666)      |
| --cells-successful-response-otherInfo-item-key-icon-color               | color for key icon        | var(--bbva-green, #48ae64) |
| --cells-successful-response-otherInfo-item-inline-fees-amount-color     | color for amounts         | var(--bbva-500, #666)      |
| --cells-successful-response-actions                                     | empty mixin               | {}                         |
| --cells-successful-response-actions-buttons                             | empty mixin               | {}                         |
| --cells-successful-response-button                                      | empty mixin               | {}                         |
| --cells-successful-response-button-color                                | color for button          | #2a86ca                    |
| --cells-successful-response-more-info-bg-color                          | empty mixin               | {}                         |
| --cells-successful-response-more-info-message                           | empty mixin               | {}                         |
| --cells-successful-response-more-info                                   | bg color for .more-info   | var(--bbva-white, #fff)    |
| --cells-successful-response-otherInfo-item                              | empty mixin               | {}                         |
| --cells-successful-response-otherInfo-item-key                          | empty mixin               | {}                         |
| --cells-successful-response-otherInfo-item-inline                       | empty mixin               | {}                         |
| --cells-successful-response-otherInfo-item-inline-key                   | empty mixin               | {}                         |
| --cells-successful-response-otherInfo-separator                         | empty mixin               | {}                         |
| --cells-successful-response-otherInfo-separator-key-after               | empty mixin               | {}                         |
| --cells-successful-response-otherInfo-spacing                           | empty mixin               | {}                         |
| --cells-successful-response-otherInfo-secondary                         | empty mixin               | {}                         |
| --cells-successful-response-otherInfo                                   | empty mixin               | {}                         |
| --cells-successful-response-contact-avatar-other-info                   | empty mixin               | {}                         |
| --cells-successful-response-contact-avatar                              | empty mixin               | {}                         |
| --cells-successful-response-from-to                                     | empty mixin               | {}                         |
| --cells-successful-response-operations-list                             | empty mixin               | {}                         |
| --cells-successful-response-molecule-mask                               | empty mixin               | {}                         |
| --cells-successful-response-amount-description                          | empty mixin               | {}                         |
| --cells-successful-response-additional-info | mixin applied to additional info | {}
| --cells-successful-response-code-title | mixin applied to code-title | {}
| --cells-successful-response-codes | mixin applied to codes | {}
| --cells-successful-response-codes-bg-color | background-color for codes | var(--bbva-navy, #072146)
| --cells-successful-response-codes-color | color for codes | var(--bbva-white, #fff)
| --cells-successful-response-codes-item | mixin applied to item in codes | {}
| --cells-successful-response-codes-item-bg-color | background-color applied to item in codes | var(--bbva-white, #fff)
| --cells-successful-response-codes-item-color | color applied to item in codes | var(--bbva-white-core-blue, #1464A5)
| --cells-successful-response-codes-list | mixin applied to codes list | {}
| --cells-successful-response-image-div | mixin applied to image container | {}
| --cells-successful-response-img | mixin applied to img | {}
| --cells-successful-response-info-white | mixin applied to info.white | {}
| --cells-successful-response-info-white-bg-color | background-color for info.white | var(--bbva-white, #fff)
| --cells-successful-response-info-white-color | color for info.white | var(--bbva-600, #121212)
| --cells-successful-response-info-white-date | mixin applied to date | {}
| --cells-successful-response-otherInfo-item-inline-fees-amount | mixin applied to .feesAmount | {}
| --cells-successful-response-subtitle | mixin applied to subtitle | {}
| --cells-successful-response-title | mixin applied to title | {}
| --cells-header-additional-info| mixin applied to header info section| {}
| --cells-header-additional-info-row | mixin applied to header row on header info section| {}