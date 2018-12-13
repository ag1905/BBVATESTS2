# cells-molecule-card-cover-ccds-wrapper

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-molecule-card-cover-ccds-wrapper)

`<cells-molecule-card-cover-ccds-wrapper>` wraps `cells-molecule-card-cover`, providing default sizes for it, and setting its image source URL in the 'BBVA CCDS' way (adding 'width' and 'height' as params). Width and height are doubled if the screen screen pixel ratio is 2 or higher.

You can use `cells-molecule-card-cover` properties in this component.

Example:
```html
<cells-molecule-card-cover-ccds-wrapper
  image-src="https://url/pointing/to/image.png"
  default-image="https://url/pointing/to/fallback-image.png"
  icon="coronita:credit-card"
  icon-size="12"
  width="200"
  height="100"
  alt="Image alt text"
  show-overlay>
</cells-molecule-card-cover-ccds-wrapper>
```

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

| Custom property                     | Description               | Default        |
|:------------------------------------|:--------------------------|:--------------:|
| --cells-molecule-card-cover-ccds-wrapper  | Empty mixin for component | {}             |
