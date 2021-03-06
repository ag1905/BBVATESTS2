# cells-molecule-link-icon

`cells-molecule-link-icon` is a link with an icon and which extends `<a>` native tag.

For each link, you must define, at least, the icon-id, the href and the content.

Example:

```html
<a href="#" icon="coronita:donation" class="icon-size-24" is="cells-molecule-link-icon">Text</a>
```
Use a class `icon-size-<size>` to set the width and height of the icon. Available sizes goes from 8 to 64px (only even numbers).

If you need an icon size that is not covered using a class, set the size using `--atom-icon-size` custom property.

If you need change display inline for block used `cells-molecule-link-icon--block` class.

```html
<a href="#" icon="coronita:donation" class="icon-size-24 cells-molecule-link-icon--block" is="cells-molecule-link-icon">Text</a>
```

If you need change icon position (to right) used cells-molecule-link-icon--reverse class.

```html
<a href="#" icon="coronita:donation" class="icon-size-24 cells-molecule-link-icon--reverse" is="cells-molecule-link-icon">Text</a>
```
## Styling

The following custom properties and mixins are available for styling:

| Custom property                         | Description                              | Default      |
|:---------------------------------------:|:----------------------------------------:| :-----------:|
| --cells-molecule-link-icon-color        | :host color text                         |  #006EC1     |
| --cells-molecule-link-icon-icon-color   | color for atom-icon                      | currentColor |
| --cells-text-size-m                     | :host text size                          | 1rem         |
| --cells-molecule-link-icon              | empty mixin                              | {}           |
| --cells-molecule-link-icon-atom-icon    | empty mixin                              | {}           |
| --cells-molecule-link-icon-block        | empty mixin                              | {}           |
| --cells-molecule-link-icon-block-span   | empty mixin                              | {}           |
| --cells-molecule-link-icon-label        | mixin for the text (a distributed child) | {}           |
| --cells-molecule-link-icon-reverse      | empty mixin                              | {}           |
| --cells-molecule-link-icon-reverse-span | empty mixin                              | {}           |