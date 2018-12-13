# cells-product-summary-fund

`<cells-product-summary-fund>` is a wrapper of 'cells-product-summary' that understands
the 'fund' the Canonical Data Model (CMD). That fund is binded into 'cells-product-summary',
which displays it.

Example:
```html
<cells-product-summary-fund
  fund="{'alias': 'My Fixed LATAM Class A', 'title': {'id': 'LATAM_FIXED_INCOME_FUND', 'name': 'BBVA Latam fixed income fund'}, .....}"
  local-currency="MXN"
  product-id="1231">
</cells-product-summary-fund>

```

## Properties

| Name | Description | Default |
|:---------------|:------------|:--------------|
| fund (Object) | Fund Product Type Object Value to display
| localCurrency (String) | Local currency code of the fund
| productId (String) | Product id
| loading (Boolean) | Loaded data

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-product-summary-fund  | empty mixin     | {} |
