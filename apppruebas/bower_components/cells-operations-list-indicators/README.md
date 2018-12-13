# cells-operations-list-indicators

`<cells-operations-list-indicators>` is a molecule component to transform indicators array in operations list.

Example:
```html
<cells-operations-list-indicators
  operations="[[operations]]"
  limit="3"
  icon-size="14">
</cells-operations-list-indicators>

```

## Properties

| Name | Description | Default |
|:---------------|:------------|:--------------|
| operations (Array) | Operations Array Values to transform in operations | undefined |
| productId (String) | Product Id whose indicators are proccessed and displayed | undefined |
| gridColumns (Number) | Number of columns in grid mode | undefined |
| limit (Number) | Maximum visible operations| undefined |
| iconSize (Number) | Icon size | undefined |
| customClass (String) | Class to personalize the header | undefined |
| loaded (Boolean) | Show loading zone| false |
| viewMore (Boolean) | Shows View More Button| false |
| continue (String) | Param to build url | undefined |

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-operations-list-indicators  | empty mixin     | {}             |
| --cells-operations-list-indicators-operations-list  | Mixin applied to the operations list  | {} |
| --cells-operations-list-indicators-skeleton  | Mixin applied to the skeleton  | {} |
| --cells-operations-list-indicators-skeleton-item  | Mixin applied to the item skeleton  | {} |
