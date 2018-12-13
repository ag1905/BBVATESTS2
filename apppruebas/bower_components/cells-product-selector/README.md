# cells-product-selector

Shows a list of products from which one can be selected.

Example:
```html
<cells-product-selector class="demo step-active"
  products="[[products]]"
  list-title="Selecciona un producto"
  message="My title">
  <p class="message__secundary-text">My content</p>
</cells-product-selector>
```

```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-product-selector-scope      | scope description | default value  |
| --cells-product-selector  | empty mixin | {} |
| --cells-product-selector-subheader  | empty mixin for subheader | {} |
| --cells-product-selector-item  | empty mixin for list item | {} |
| --cells-product-skeleton-item-bg  | empty mixin for background skeleton item | {} |
| --cells-product-skeleton-content-bg  | empty mixin for background skeleton content| {} |
| --cells-product-selector-container  | empty mixin for skeleton container styles | {} |
| --cells-product-selector-subheader-inactive  | empty mixin for inactive subheader | {} |
