# cells-skeleton-group

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-skeleton-group>` Molecule that contain cells-skeleton-item atoms.

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-skeleton-group)

Example:

```html
<cells-skeleton-group></cells-skeleton-group>
```

Example without animation:

```html
<cells-skeleton-group pause-animation></cells-skeleton-group>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property                               | Description                                         | Default                    |
| :-------------------------------------------- | :-------------------------------------------------- | :------------------------- |
| --cells-skeleton-group                        | empty mixin of host                                 | {}                         |
| --cells-skeleton-group-skeleton-group         | empty mixin of .skeleton-group                      | {}                         |
| --cells-skeleton-group-background-color       | background color applied to :host                   | var(--bbva-white, #FFFFFF) |
| --cells-skeleton-group-item-last-border-color | border color of last of type of cells-skeleton-item | var(--bbva-200, #E9E9E9)   |
| --cells-skeleton-group--item-last             | mixin for last item                                 | {}                         |
| --cells-skeleton-group--item                  | mixin for skeleton item                             | {}                         |
| --cells-skeleton-group-animate-layer-bg-color | background color of animate layer                   | var(--bbva-white, #FFFFFF) |
| --cells-skeleton-group-animate-layer          | mixin for animate layer                             | {}                         |
