# cells-molecule-amount-input

A customized amount input component with a floating label and an optional icon.

Example:
```html
<cells-molecule-amount-input></cells-molecule-amount-input>
```

## Properties

Example:
```html
<cells-molecule-amount-input
  id="myId"
  name="myName"
  label="My label"
  iconSize="myIconSize"
  iconCode="myIconCode"
  currencyCode="myurrencyCode"
  localCurrency="myLocalCurrency"
  language="myLanguage"
  max="10"
  disabled
  auto-format
  setAmount="mySetAmount">
</cells-molecule-amount-input>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-molecule-amount-input-background-color      | color | --bbva-100  |
| --cells-molecule-amount-input-invalid-input-color      | color | --bbva-red  |
| --cells-molecule-amount-input-invalid-border-bottom      | color | --bbva-red  |
| --cells-molecule-amount-input-placeholder-color      | color | --bbva-500  |
| --cells-molecule-amount-input-input-color      | color | --bbva-600  |
| --cells-molecule-amount-input-background      | color | --bbva-100  |
| --cells-molecule-amount-input-disabled-color      | color | --bbva-500  |
| --cells-molecule-amount-input  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-disabled  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-disabled-text-field  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-disabled-text-field__label  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-with-icon  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-with-icon-input  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-invalid  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-invalid-input  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-text-field  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-label  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-icon  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-input  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-has-content  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-floated-label  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-input  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-currency-label  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-currency-label-left  | empty mixin     | empty mixin | {}             |
| --cells-molecule-amount-input-currency-label-right  | empty mixin     | empty mixin | {}             |
