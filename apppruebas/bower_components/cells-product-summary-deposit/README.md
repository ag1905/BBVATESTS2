# cells-product-summary-deposit

`<cells-product-summary-fund>` is a molecule component to display a "primary value" with its "label value" (value can be an amount, a masked number, a string, a number or an Array of all of them). Optionally, can added "secondary value", a "type" (if we want to represent a masked number, property "type" will be "masked"), or a "local currency".

Example:
```html
<cells-product-summary-fund
  product="{'alias': 'Young deposit', 'title': {'id': 'YOUNG_DEPOSIT', 'name': 'Young deposit'}, .....}">
</cells-product-summary-fund>

```

## Properties

| Name | Description | Default |
|:---------------|:------------|:--------------|
| product (Object) | Deposit Product Type Object Value to display

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-product-summary-deposit-scope      | scope description | default value  |
| --cells-product-summary-deposit  | empty mixin     | {}             |
