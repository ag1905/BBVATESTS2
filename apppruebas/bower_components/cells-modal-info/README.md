# cells-modal-info

Modal Info with image, paragrah and notification message.

Example:

```html
<cells-modal-info id="myEl"
  full-height
  opened
  config="[[config]]"></cells-modal-info>
```

## Docs

Config options:

```
{
  header: 'cells-modal-info-error-bill-payment',
  image: 'data:image/png;base64',
  title: 'cells-modal-info-error-error',
  text: 'cells-modal-info-error-operation-failed',
  btns: {
    primary: {
      text: 'cells-modal-info-error-retry',
      info: ''
    },
    secondary: {
      text: 'cells-modal-info-error-back-to-summary',
      info: ''
    }
  },
  notification: {
    type: "info",
    icon: "coronita:info",
    iconLabel: null,
    iconSize: 26,
    message: "cells-modal-info-message"
  }
}
````

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-modal-info-scope      | scope description | default value  |
| --cells-modal-info | empty mixin    | {}  |
| --cells-modal-info-header-dark | empty mixin    | {}  |