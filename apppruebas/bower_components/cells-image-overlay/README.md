# cells-image-overlay
An image with an optional overlay and icon to cover it.

Expects one mandatory param:
* **image-src**: Url of the cover image.

If the mandatory property is omitted or invalid, a default card cover image will be displayed.  

Optional parameters:  

* **show-overlay**: Cover the image with a stylable overlay.
* **icon**: optional <cells-atom-icon> to show on top of the overlay, vertically and horizontally centered.
* **icon-size**: size property to set on <cells-atom-icon>.

* **width**: Width of the image.
* **height**: Height of the image.
* **alt**: Alternative text of the image.
* **default-image**: Image shown if the image is not available.  

Example:
```html
<cells-image-overlay image-src="https://openapi.bbva.com/ccds/covers?&default_image=true&v=4&country=es&app_id=com.bbva.buzz&pg=0000003514"></cells-image-overlay>
```
```html
<cells-image-overlay image-src="https://openapi.bbva.com/ccds/covers?&default_image=true&v=4&country=es&app_id=com.bbva.buzz&pg=0000003514" show-overlay alt="a card image"></cells-image-overlay>
```
```html
<cells-image-overlay image-src="https://openapi.bbva.com/ccds/covers?&default_image=true&v=4&country=es&app_id=com.bbva.buzz&pg=0000003514" show-overlay icon="banking:G15" alt="a card image"></cells-image-overlay>
```
## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|-----------------|-----------------|----------------|
| @apply(--cells-image-overlay-img) | empty mixin for img |
| @apply(--cells-image-overlay-icon) | empty mixin for cells-atom-icon |
| @apply(--cells-image-overlay-layer) | empty mixin for the overlay (.inactive) |
