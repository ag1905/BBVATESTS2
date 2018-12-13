# cells-pagination-bullets

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-pagination-bullets>` is an element that displays a set of customizable pagination bullets

Example:
```html
  <cells-pagination-bullets bullet-number="5"></cells-pagination-bullets>

  <cells-pagination-bullets activate-event="bullet-selected"></cells-pagination-bullets>

  <cells-pagination-bullets bullet-number="5"></cells-pagination-bullets>
```


## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-pagination-bullets  | empty mixin     | {}             |
| --cells-pagination-bullets-inactive  | empty mixin     | {}             |
| --cells-pagination-bullets-active  | empty mixin     | {}             |
| --cells-pagination-bullets-icon-inactive  | empty mixin     | {}             |
| --cells-pagination-bullets-icon-active  | empty mixin     | {}             |
| --cells-pagination-bullets-size  | size (height and width) to be set to the default bullets     | 8px             |
| --cells-pagination-bullets-separation  | margin button and icon    | 5px            |
| --cells-pagination-bullets-color  | color to be set to the default bullets (inactive)    | rgba(64, 64, 64,.5)             |
| --cells-pagination-bullets-color-active  | color to be set to the default bullets (active)    | rgba(51, 153, 255,.5)             |
| --cells-pagination-bullets-icon-color  | color to be set to the default bullets (inactive)    | rgba(64, 64, 64,.5)              |
| --cells-pagination-bullets-icon-color-active  | color to be set to the default bullets (active)    | rgba(51, 153, 255,.5)             |
