# cells-service-selector

displays a list of services, from which one can be chosen.

Example:
```html
<cells-service-selector class="demo"
    services="[[services]]"
    list-title="Selecciona un servicio">
</cells-service-selector>

```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-service-selector-scope      | scope description | default value  |
| --cells-service-selector  | empty mixin | {} |
| --cells-service-selector-subheader  | empty mixin for subheader | {} |
| --cells-service-selector-item  | empty mixin for list item | {} |