# cells-navigation-bar

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-navigation-bar>` displays an horizontal navigation bar with optional icons
for each navigation item. The placement of the icons can be customized using mixins.

Example:

```html
<cells-navigation-bar items="[[items]]" selected="0"></cells-navigation-bar>
```

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling
The following classes are available for styling change effects:

| Class name                                   | Description                                                       |
|:---------------------------------------------|:------------------------------------------------------------------|
| with-bump                                    | Include a small bump on top center                                |

The following custom properties and mixins are available for styling:

| Custom Property                              | Description                                                       | Default                |
| :------------------------------------------- | :---------------------------------------------------------------- | :--------------------- |
| --cells-navigation-bar                       | mixin applied to the :host                                        | {}                     |
| --cells-navigation-bar-background-color      | background color                                                  | rgba(255,255,255, .95) |
| --cells-navigation-bar-bg-notification-color | var applied to notification background color                      | #b92a45                |
| --cells-navigation-bar-bump                  | mixin applied to the :host with bumped  property                  | {}                     |
| --cells-navigation-bar-bump-after            | mixin applied to the :host with bumped  property :after           | {}                     |
| --cells-navigation-bar-bump-before           | mixin applied to the :host with bumped  property :before          | {}                     |
| --cells-navigation-bar-height                | bar height                                                        | 3.125rem (50px)        |
| --cells-navigation-bar-icon                  | mixin applied to icons                                            | {}                     |
| --cells-navigation-bar-link                  | mixin applied to links                                            | {}                     |
| --cells-navigation-bar-link-active           | mixin applied to active and selected links                        | {}                     |
| --cells-navigation-bar-link-active-color     | active link color (applied to .iron-selected, :active and :focus) | #004481                |
| --cells-navigation-bar-link-color            | link color                                                        | #BDBDBD                |
| --cells-navigation-bar-list                  | mixin applied to the list                                         | {}                     |
| --cells-navigation-bar-list-item             | mixin applied to list items                                       | {}                     |
| --cells-navigation-bar-notification          | mixin applied to notification                                     | {}                     |
| --cells-navigation-bar-notification-color    | var applied to notification text color                            | white                  |
| --cells-navigation-bar-with-bump-list        | var applied to the list bumped                                    | {}                     |
| --cells-navigation-bar-with-bump-list-color  | var applied to tha background color list                          | white                  |

