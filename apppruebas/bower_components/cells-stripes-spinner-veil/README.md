# cells-stripes-spinner-veil

``cells-stripes-spinner-veil`` allows to show a veil that hides the app while
it is doing slow operations.

You can control spinner veil with `open` property (``true`` value to show veil
and ``false`` to hide it).

Example:

```html
<cells-stripes-spinner-veil open="true"></cells-stripes-spinner-veil>
```

or

```html
<cells-stripes-spinner-veil open="false"></cells-stripes-spinner-veil>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:---------------:|:---------------:| :-------------:|
| --cells-stripes-spinner-veil-background-color | veil background color | rgba(255, 255, 255, .8) |
| --cells-stripes-spinner-veil-ball  | empty mixin for .spinner .ball | {} |
| --cells-stripes-spinner-veil-ball-dark-background-color  | color of dark ball | #006cc4 |
| --cells-stripes-spinner-veil-ball-light-background-color  | color of light ball | #4cbbee |
| --cells-stripes-spinner-veil-ball-dark  | empty mixin for .spinner .ball.dark | {} |
| --cells-stripes-spinner-veil-ball-light  | empty mixin for .spinner .ball.light | {} |
| --cells-stripes-spinner-veil-main  | empty mixin for .spinner | {} |
| --cells-stripes-spinner-veil  | empty mixin for :host | {} |
| --cells-stripes-spinner-veil-is-visible  | empty mixin for :host(.is-visible) | {} |
