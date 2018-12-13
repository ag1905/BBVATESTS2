![Component Screenshot](cells-apng-canvas.jpg)

# cells-apng-canvas

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-apng-canvas)

`<cells-apng-canvas>` renders an [APNG (animated PNG)](https://es.wikipedia.org/wiki/Animated_Portable_Network_Graphics) image in a canvas using the [apng-canvas](https://github.com/davidmz/apng-canvas) library.

Example:

```html
<cells-apng-canvas src="apng-image.png"></cells-apng-canvas>
```

## Generating APNG images form a sequence of PNGs

[APNG Assembler](http://apngasm.sourceforge.net/) is a command line utility that generates APNG images from an image sequence.

__Usage:__

```
apngasm output.png path-to-png-sequence/file_0*.png
```

__Generating APNG at 30fps:__

```
apngasm output.png path-to-png-sequence/file_0*.png 1 30
```

__One loop (default is 0, forever):__

```
apngasm output.png path-to-png-sequence/file_0*.png -l1
```

__Note:__

You can use the extension `.apng` instead of `.png` to prevent build tasks to compress the image.

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-apng-canvas  | Empty mixin applied to the whole tag  | {} |
| --cells-apng-canvas__canvas_width | `<canvas>` width | 100% |
| --cells-apng-canvas__canvas_height | `<canvas>` height | auto |
| --cells-apng-canvas__canvas | Empty mixin applied to the `<canvas>` tag | {} |
