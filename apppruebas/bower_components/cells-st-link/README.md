# cells-st-link

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-st-link)

`cells-st-link` is a styling wrapper for native link/anchor elements. It should receive an `a` tag as content.

You can use the normal link attributes in the `a` tag, as `href`, `target`...

```html
<cells-st-link>
  <a href="#">My link</a>
</cells-st-link>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property               | Description                       | Default         |
|:------------------------------|:----------------------------------|:---------------:|
| --cells-st-link-host          | Empty mixin for component         | {}              |
| --cells-st-link-color         | Default text color for link       | #2A86CA         |
| --cells-st-link               | Empty mixin for link              | {}              |
| --cells-st-link-color-hover   | Default text color on `:hover`    | #2A86CA         |
| --cells-st-link-hover         | Empty mixin for link on `:hover`  | {}              |
| --cells-st-link-focus         | Empty mixin for link on `:focus`  | {}              |
| --cells-st-link-color-active  | Default text color on `:active`   | #1162A5         |
| --cells-st-link-active        | Empty mixin for link on `:active` | {}              |
