# Changelog

## v10.x

### Breaking changes

- A custom progress bar requires using a slot named "progress-bar". 

**Before**
```html
<cells-product-summary>
  <my-custom-progress-bar class="progress-bar"></my-custom-progress-bar>
</cells-product-summary>
```

**After**
```html
<cells-product-summary>
  <my-custom-progress-bar slot="progress-bar"></my-custom-progress-bar>
</cells-product-summary>
```

**Keep it compatible with Polymer 1.x and 2.x**
```html
<cells-product-summary>
  <my-custom-progress-bar class="progress-bar" slot="progress-bar"></my-custom-progress-bar>
</cells-product-summary>
```

## v4.0.0

### Renamed CSS var

- `--cells-product-summary-background-color` replaced by `--cells-product-summary-card-background-color`. 
- `--cells-product-summary-background-color` is now assigned to the component background.

## v3.1.1

### Removed CSS mixins

- `--cells-product-summary-card-background-color` replaced for `--cells-product-summary-background-color`
- `--cells-product-summary-wrapper` remove wrapper from cells-product-summary
- `--cells-product-summary-bottom-wrapper` replaced for `--cells-product-summary-bottom-summary`

## v2.0.0

### Removed CSS mixins

- `--cells-product-summary-header-icon-active` (Not used because the icon cannot be :active)
- `--cells-product-summary-content-progress`
- `--cells-product-summary-content`
- `--cells-product-summary-wrapper-sup`

