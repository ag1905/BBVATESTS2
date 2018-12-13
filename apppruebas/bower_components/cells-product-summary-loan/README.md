![cells-product-summary-loan screenshot](cells-product-summary-loan.png)
# cells-product-summary-loan

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo to component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-product-summary-loan)

`<cells-product-summary-loan>` is a wrapper of 'cells-product-summary' that understands
the 'loan' the Canonical Data Model (CMD). That loan is binded into 'cells-product-summary',
which displays it. There are three different types: 'consume payroll', 'consume personal' and 'mortagage'.

Example:

```html
<cells-product-summary-loan loan="[[myLoan]]" localCurrency="EUR"></cells-product-summary-loan>
```

## Data model

Receives an object with loan info:

```js
{
  "loanId": "1407",
  "loanType": {
    "id": "MORTGAGE",
    "name": "Crédito hipotecario"
  },
  "alias": "Hipoteca",
  "number": "54984185294",
  "numberType": {
    "id": "LIC",
    "name": "Local Internal Code"
  },
  "status": {
    "id": "VALID",
    "name": "Válido"
  },
  "title": {
    "id": "MORTGAGE_MX",
    "name": "Crédito Hipotecario BBVA Bancomer"
  },
  "nextInstallmentDate": "12-08-2017",
  "maturityDate": "12-08-2018",
  "openingDate": "01-10-2016",
  "contractingDate": "31-10-2016",
  "nextInterestRenewalDate": "01-12-2018",
  "annualFixedRate": 33.64,
  "pendingAmount": {
    "principal": {
      "amount": 20000,
      "currency": "MXN"
    },
    "interest": {
      "amount": 10000,
      "currency": "MXN"
    },
    "total": {
      "amount": 30000,
      "currency": "MXN"
    }
  },
  "initialAmount": {
    "amount": 15000,
    "currency": "MXN"
  },
  "amortisedAmount": {
    "amount": 4500.54,
    "currency": "MXN"
  },
  "currentInstallment": {
    "maturityDate": "13-11-2017",
    "principal": {
      "amount": 564.58,
      "currency": "MXN"
    },
    "interest": {
      "amount": 128,
      "currency": "MXN"
    },
    "number": 67943991
  },
  "totalInstallmentsNumber": {
    "pending": 20,
    "overdue": 10,
    "amortised": 95,
    "total": 115
  },
  "currencies": [{
    "currency": "MXN",
    "isMajor": true
  }],
  "periods": {
    "reviewPeriod": {
      "id": "MONTHLY",
      "name": "Mensual"
    },
    "liquidationPeriod": {
      "id": "MONTHLY",
      "name": "Mensual"
    }
  },
  "terms": {
    "number": 36,
    "frecuency": "MONTHLY"
  }
}
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-product-summary-loan-scope      | scope description | default value  |
| --cells-product-summary-loan  | empty mixin     | {}             |
| --cells-product-summary-loan-footer | empty mixin | {}  |
| --cells-product-summary-loan-product-summary  | empty mixin | {}  |
| --cells-product-summary-loan-product-fees | empty mixin | {}  |
| --cells-product-summary-loan-product-fees-header  | empty mixin | {}  |
| --cells-product-summary-loan-product-fees-row | empty mixin | {}  |
| --cells-product-summary-loan-product-amount | empty mixin | {}  |
| --cells-product-summary-loan-product-title-secondary  | empty mixin | {}  |
| --cells-product-summary-loan-product-title  | empty mixin | {}  |
| --cells-product-summary-loan-product-desc-color | color for .desc | var(--bbva-500, #666666)  |
| --cells-product-summary-loan-product-desc | empty mixin | {}  |
| --cells-product-summary-loan-product-date-color | color for .date | var(--bbva-dark-gold, #b79e5e)  |
| --cells-product-summary-loan-product-date | empty mixin | {}  |
