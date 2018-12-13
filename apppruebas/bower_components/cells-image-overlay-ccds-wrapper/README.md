# cells-image-overlay-ccds-wrapper

`<cells-image-overlay-ccds-wrapper>` Wraps 'cells-image-overlay' and sets its image source URL in the 'BBVA CCDS' way (adding 'width' and 'height'). Request's with the double of the widht and height if your screen pixel ratio is >=2.

Example:
```html
<cells-image-overlay-ccds-wrapper
  image-src="http://urlToMyImage.com"
  default-image="fallback.jpg"
  icon="coronita:credit-card"
  icon-size="12"
  width="200"
  height="100"
  alt="fallback"
  show-overlay>
</cells-image-overlay-ccds-wrapper>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-image-overlay-ccds-wrapper  | empty mixin     | {}             |
