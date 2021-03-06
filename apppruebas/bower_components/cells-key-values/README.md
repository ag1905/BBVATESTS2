![cells-key-values screenshot](cells-key-values.png)
# cells-key-values

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-key-values)

`<cells-key-values>` displays a key (label) with one or more values. Values can
be Primitive (String or Number), an Object with a defined format or an Array of Primitive or Object values (see JS API docs).

Content inside `<cells-key-values>` is placed after the value if the property is used. To place the content before the value use
the class "before-value".

Example __with content in light DOM__:

```html
<cells-key-values
  key="Custom content"
  value="234234234">
  <p>I'll appear after the value.</p>
</cells-key-values>
```

Available __content hooks__:

```html
<cells-key-values
  key="Custom content"
  value="234234234">
  <p slot="before-value">I'll appear before the value.</p>
</cells-key-values>
```

```html
<cells-key-values
  key="Custom content"
  value="234234234">
  <span slot="before-key">I'll appear before the key.</span>
  <span slot="after-key">I'll appear after the key.</span>
</cells-key-values>
```

```html
<cells-key-values
  key="Custom content"
  value="234234234">
  <span slot="after-key">I'll appear after the key.</span>
</cells-key-values>
```

Key and values can be displayed in three different layouts:
- Key above value. __Default__ layout. No class needed.
- __Inline__: Key to the left of the value. Use the class `inline`.
- __Reversed__: Value above the key only visually. The DOM order is the opposite for accessibility reasons. Use the class `reversed`.

__Simple values__ (primitive types):

```html
<cells-key-values
  key="Account number"
  value="987979789879897">
</cells-key-values>
```

__Masked values__ (only for primitive values):

```html
<cells-key-values
  key="Account number"
  value="987979789879897"
  masked>
</cells-key-values>
```

__Monetary values__ (amounts):

```html
<cells-key-values
  key="Account number"
  local-currency="EUR"
  language="en"
  value='{
    "amount": 12323,
    "currencyCode": "EUR"
  }'>
</cells-key-values>
```

__Multiple values:__

```html
<cells-key-values
  key="Account number"
  local-currency="EUR"
  language="en"
  value='[{
    "amount": 12323,
    "class": "amount-huge",
    "currencyCode": "EUR"
  }, {
    "amount": 98797,
    "currencyCode": "CLP"
  }]'>
</cells-key-values>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property                      | Description       | Default                        |
|:-------------------------------------|:------------------|:------------------------------:|
| --cells-key-values | Empty mixin applied to the :host | {} |
| --cells-key-values-color | Text color | #121212 |
| --cells-key-values-key-color | Text color of the key | #666 |
| --cells-key-values-key-value-margin | Margin between key and value (applied to top or bottom depending on the layout) | 0.3125rem (5px) |
| --cells-key-values-key | Empty mixin applied to the key | {} |
| --cells-key-values-key-span | Empty mixin applied to the key label | {} |
| --cells-key-values-value-font-size | Font size of the value | 1rem (16px) |
| --cells-key-values-value | Empty mixin applied to the value | {} |
| --cells-key-values-inline | Empty mixin applied to the :host in inline layout ("inline" class) | {} |
| --cells-key-values-inline-key | Empty mixin applied to the key in inline layout | {} |
| --cells-key-values-inline-value | Empty mixin applied to the value in inline layout | {} |
| --cells-key-values-inline-value-not-first-child | Empty mixin applied to the values but the first one in inline layout when there are multiple values for a key | {} |
| --cells-key-values-reversed | Empty mixin applied to the :host in reversed layout ("reversed" class) | {} |
| --cells-key-values-reversed-key | Empty mixin applied to the key in reversed layout | {} |
| --cells-key-values-reversed-value | Emtpy mixin applied to the value in reversed layout | {} |
| --cells-key-values-reversed-value-not-first-child | Empty mixin applied to the values but the first one in reversed layout when there are multiple values for a key | {} |
| --cells-key-values-reversed-value-second-child | Empty mixin applied to the second value in reversed layout when there are multiple values for a key | {} |
| --cells-key-values-value-item | Empty mixin applied to the inner element of the value | {} |
| --cells-key-values-value-amount | Empty mixin applied to amount values | {} |
| --cells-key-values-value-mask | Empty mixin applied to mask values | {} |
| --cells-key-values-value-simple | Emtpy mixin applied to single values (primitive values like Strings or Numbers) | {} |

## Classes for lists

The component includes helper classes for list elements (`<ul>` or `<ol>`) in case you'd have a list of `<cells-key-values>`.
The file needs to be imported and included in your component style.

| Class name                      | Description       |
|:--------------------------------|:------------------|
| cells-key-values-list | applicable to `<ul>` elements |
| inline | applicable to `<ul>` elements in inline layout |
| reversed | applicable to `<ul>` elements in reversed layout |

Check out the demo to see examples.

Example:

```html
<link rel="import" href="../cells-key-values/cells-key-values-list-styles.html">
<style include="cells-key-values-list-styles"></style>

<ul class="cells-key-values-list">
  <li><cells-key-values></cells-key-values></li>
</ul>
```

The following mixins are included in shared styles for lists.

| Custom property                      | Description       | Default                        |
|:-------------------------------------|:------------------|:------------------------------:|
| --cells-key-values-list | Empty mixin applied to the `<ul>` element | {} |
| --cells-key-values-list-value | Empty mixin applied to `<cells-key-values>` value | {} |
| --cells-key-values-list-item-not-first-child | Empty mixin applied to list items `<li>` but the first one in default layout | {} |
| --cells-key-values-list-inline | Empty mixin applied to the `<ul class="inline">` element. (Inline layout) | {} |
| --cells-key-values-list-inline-item-not-first-child | Empty mixin applied to list items `<li>` but the first one in inline layout | {} |
| --cells-key-values-list-reversed | Empty mixin applied to the `<ul class="reversed">` element. (Reversed layout) | {} |
| --cells-key-values-list-inline-reversed-not-first-child | Empty mixin applied to list items `<li>` but the first one in reversed layout | {} |
