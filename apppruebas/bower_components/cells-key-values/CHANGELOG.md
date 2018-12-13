# Changelog

## v10
### Breaking changes
- The hook for text before the value now requires using `slot` instead of a class. 

**Before**
`<span class="before-value"></span>`

**After**
`<slot name="before-value"></slot>`

## v1.0.0
### Breaking changes
#### Removed mixins
| Removed | New equivalent mixin |
|:--------|:---------------------|
| --cells-key-values-values | --cells-key-values-value |
| --cells-key-values-second-text | --cells-key-values-reversed-value-not-first-child (only for reversed layout) |
| --cells-key-values-content | - |
| --cells-key-values-key-inline | --cells-key-values-inline-key |
| --cells-key-values-values-inline | --cells-key-values-inline-value |
| --cells-key-values-content-inline | - |

#### Other changes
- `inline` property used for styling purposes removed in favour of `inline` class applied to the component.
- `numItem` property used to set the class of the `<cells-atom-amount>` depending on its position removed in favour of a className passed as a `class` property in the value Object.
- `masked` property is now a property of the component instead of a property of the value Object.
- The value Object for amounts must contain a property named `currencyCode` instead of `currency`.
- The default layout (no class needed) displays the key above the value instead of below the value.

### New features
- New default layout (key above value).
- Possibility to use mask icons (mask / unmask) in masked values.
- Possibility to use abbreviations in amounts.
- Possibility to add custom content in light DOM after the value, if used, or before it if the content has "before-value" class.
- Helper classes in a shared style for `<cells-key-value>` elements rendered in lists (`<ul>` \ `<li>`).
- New mixins and custom CSS properties.
