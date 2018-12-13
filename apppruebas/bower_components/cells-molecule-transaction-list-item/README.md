# cells-molecule-transaction-list-item

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

Shows an item from a list with a transaction detail.

Example:
```html
<cells-molecule-transaction-list-item></cells-molecule-transaction-list-item>
```

__data object__:
```json

{
  "id": "500A1114",
  "localAmount": {
    "amount": -80000,
    "currency": "CLP"
  },
  "originAmount": {
    "amount": -80000,
    "currency": "CLP"
  },
  "moneyFlow": {
    "id": "EXPENSE",
    "name": "Expense"
  },
  "concept": "Retirada en cajero",
  "transactionType": {
    "id": "PURCHASE",
    "name": "Compra"
  },
  "operationDate": "2016-07-16T13:33:00Z",
  "accountedDate": "2016-07-16T13:33:00Z",
  "financingType": {
    "id": "NON_FINANCING",
    "name": "Non financing"
  },
  "status": {
    "id": "SETTLED",
    "name": "Settled"
  },
  "contract": {
    "id": "2001",
    "number": "050400010100001603",
    "numberType": {
      "id": "LIC",
      "name": "Local Identification Code"
    },
    "product": {
      "id": "ACCOUNTS",
      "name": "Cuentas"
    },
    "alias": "Cuenta corriente lcred"
  },
  "tags": [
    "Banca"
  ],
  "additionalInformation": [
    {
      "key": "cells-molecule-transaction-list-item-card",
      "value": "050400010100001603",
      "type": "musked"
    },
    {
      "key": "cells-molecule-transaction-list-item-date",
      "value": "2016-07-16T13:33:00Z",
      "type": "date"
    },
    {
      "type": "text",
      "value": "Compra"
    }
  ]
}
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:---------------:|:---------------:| :-------------:|
| --cells-molecule-transaction-list-item-bg-color | background color for host | var(--bbva-white, #fff) |
| --cells-molecule-transaction-list-item | empty mixin | {} |
| --cells-molecule-transaction-list-item-item-active-background-color     | background color for host active | var(--bbva-100, #f4f4f4) |
| --cells-molecule-transaction-list-item-item-active | empty mixin | {} |
| --cells-molecule-transaction-list-item-info | empty mixin | {} |
| --cells-molecule-transaction-list-item-balance | empty mixin | {} |
| --cells-molecule-transaction-list-item-name-color     | color for .transaction-name | var(--bbva-600, #121212) |
| --cells-molecule-transaction-list-item-name | empty mixin | {} |
| --cells-molecule-transaction-list-item-associated-product-color     | color for .associated-prod | var(--bbva-500, #666) |
| --product-description | empty mixin | {} |
| --cells-molecule-transaction-list-item-associated-product     | mixin for associated product | empty  |
| --cells-molecule-transaction-list-item-associated-product-label     | mixin for associated product label | empty  |
| --cells-fontDefaultLight | empty mixin | {} |
| --cells-molecule-transaction-transaction-status-color     | color for status color | var(--bbva-light-blue, #5BBEFF)  |
| --cells-molecule-transaction-transaction-status | empty mixin | {} |
| --cells-fontDefaultLight | empty mixin | {} |
| --iban | empty mixin | {} |
