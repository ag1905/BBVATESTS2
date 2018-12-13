# cells-product-summary-account

Wrapper of cells-product-summary that understands the account the Canonical Data Model (CMD). That account is binded into cells-product-summary, which displays it.

Example:
```html
<cells-product-summary-account 
  account="[[account]]"
  loading="[[loading]]"
  posted-balances-as-second-main-item=true
  local-currency="MXN"
></cells-product-summary-account>
```

```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-product-summary-account  | empty mixin     | {}             |
| --cells-product-summary-account-footer     | Mixin applied to footer  | {}  |
| --cells-product-summary-account-footer-inline      | Mixin applied to inline list of items  | {}  |
| --cells-product-summary-account-footer-inline-key  | Mixin applied to the key of elements inside of inline list  | {}  |
| --cells-product-summary-account-footer-inline-value-container | Mixin applied to the value container of elements  | {} |
