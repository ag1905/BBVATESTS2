# cells-atom-amount

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-atom-amount>` is a component formatting an amount and its currency code into different combinations of sizes.

If amount is a negative value, .negative class is added to give a visual cue.

Amount can be abbreviated if a scale is indicated. E.g.: 1.240.000 can be abbreviated as
1.24M if scale 6 is set and if is present (in abbreviations property).

Example:

```html
<cells-atom-amount
  amount="6423525.45"
  currency-code="EUR"
  localCurrency="USD"
  language="en">
</cells-atom-amount>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------| :-------------:|
|--cells-atom-amount | empty mixin for :host | {} |
|--cells-atom-amount-color | Text color | #121212 |
|--cells-atom-amount-negative | empty mixin for :host(.negative) | {} |
|--cells-atom-amount-sr | empty mixin for .sr-amount | {} |
|--cells-atom-amount-visible | empty mixin for .visible-amount | {} |
|--cells-atom-amount-currency | empty mixin for .currency | {} |
|--cells-atom-amount-currency-left | empty mixin for .currency--left | {} |
|--cells-atom-amount-currency-right | empty mixin for .currency--right| {} |
|--cells-atom-amount-minus | empty mixin for .minus | {} |
|--cells-atom-amount-minus-left | empty mixin for .minus--left | {} |
|--cells-atom-amount-minus-right| empty mixin for .minus--right | {} |
|--cells-atom-amount-integer | empty mixin for .integer | {} |
|--cells-atom-amount-separator | empty mixin for .separator | {} |
|--cells-atom-amount-fractional | empty mixin for .fractional | {} |
|--cells-atom-amount-abbreviation | empty mixin for .abbreviation | {} |
