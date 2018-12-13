# cells-product-summary-card

`<cells-product-summary-card>` is a wrapper of 'cells-product-summary' that understands
the 'card' the Canonical Data Model (CMD). That card is binded into 'cells-product-summary',
which displays it.

Example:
```html
<cells-product-summary-card card="[[myCard]]" localCurrency="EUR"></cells-product-summary-card>

<cells-product-summary-card card="[[myCard]]" has-additional-items localCurrency="USD"></cells-product-summary-card>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-product-summary-card-scope      | scope description | default value  |
| --cells-product-summary-card  | empty mixin     | {}             |
