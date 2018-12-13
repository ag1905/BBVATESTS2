# cells-atom-subheader

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-atom-subheader>` acts as list header. It is 'subheader' because of the likely existance of more upper-level headers in the application.
It consists of two parts, a left field usually occupied by a heading and a right field with extra information.

The position of the elements in the header can be inverted easily, by passing an 'inverse' attribute, which uses Flexbox to invert the rendering axis. Consider this when trying to right-align a heading.

Anything resembling a heading should be assigned a class of 'heading'. It will be rendered inside a div with [role="heading"] and aria-level="2", to the left. You can pass a custom aria level using the `heading-level` attribute, or even remove the role and aria-level passing a `0` value to the `heading-level` attribute.

Anything with a class starting with or inside an element with a class of 'left...' will be positioned left. Anything with a class starting with or inside an element with a class of 'right...' will be positioned right.

Any content left inside without a rule will be assigned to the right field.


Examples:

```html
<cells-atom-subheader>
  <span class="left">Text left</span>
  <span class="left">Another text left</span>
  <span class="right">Text right</span>
  <span class="right">Another text right</span>
  <span>Another one right</span>
</cells-atom-subheader>
```

```html
<cells-atom-subheader heading-level="3">
  <span class="heading">Heading text</span>
  <span>Text to the right</span>
</cells-atom-subheader>
```

```html
<cells-atom-subheader heading-level="0">
  <span class="heading">Heading text</span>
</cells-atom-subheader>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                   | Description                                   | Default   |
|:-------------------------------------------------:|:---------------------------------------------:|:---------:|
| --cells-atom-subheader-text-color                 | Default text color                            | #BDBDBD   |
| --cells-atom-subheader-font-size                  | Default text size                             | rem(13px) |
| --cells-atom-subheader                            | Empty mixin for host                          | {}        |
| --cells-atom-subheader-left-field                 | Empty mixin for .left-field                   | {}        |
| --cells-atom-subheader-right-field                | Empty mixin for .right-field                  | {}        |
| --cells-atom-subheader-margin-between-left-right  | Margin between left and right                 | 1.25em    |
| --cells-atom-subheader-inverse                    | Empty mixin for host with [inverse] attribute | {}        |
| --cells-atom-subheader-inverse-left-field         | Empty mixin for [inverse] .left-field         | {}        |
| --cells-atom-subheader-inverse-right-field        | Empty mixin for [inverse] .right-field        | {}        |
| --cells-atom-subheader-content-heading-color      | Default heading text color                    | #666      |
| --cells-atom-subheader-heading                    | Empty mixin for heading content               | {}        |
