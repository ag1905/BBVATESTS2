# cells-molecule-grid-list

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-molecule-grid-list>` is a component to display a list in a grid with configurable number of columns per row.

The number of columns is established using the `columns` attribute with a value __from 2 to 12__.
If you need more columns, the custom CSS property `--cells-molecule-grid-list-column-width` is available to set a proper percentage value for the column width.

`<cells-molecule-grid-list>` requires a `<template>` to be provided in Light DOM.

__Example with borders inside Coronita styles:__

```html
<cells-molecule-grid-list border-inside list="[[items]]" columns="3">
  <template>
    <div class="option">
      <a href="#" id="borderInside" is="cells-molecule-link-icon" icon="[[item.icon]]" class="icon-size-26" data-action$="[[item.action]]">[[item.label]]</a>
    </div>
  </template>
</cells-molecule-grid-list>
```

__Example without borders:__

```html
<cells-molecule-grid-list list="[[items]]" no-borders columns="[[columns]]">
  <template>
    <div class="option">
      <a href="#" id="noBorders" is="cells-molecule-link-icon" icon="[[item.icon]]" class="icon-size-26" data-action$="[[item.action]]">[[item.label]]</a>
    </div>
  </template>
</cells-molecule-grid-list>
```

__Twenty columns:__

```css
cells-molecule-grid-list {
  --cells-molecule-grid-list-column-width: 5%;
}
```

__Fixed width columns__

Use the attribute `column-size-fixed` to use fixed columns. The number of columns per row changes to adapt the grid to available space.

If you set the `column-size-fixed` attribute to true the `columns` attribute is useless.

You can change the item width and margin setting the `column-size` and `column-margin` attributes with the desire value.

```html
<cells-molecule-grid-list list="[[list]]" column-size-fixed column-size="320" column-margin="12">
  <template>
    <p>Custom template for each item</p>
  </template>
</cells-molecule-grid-list>
```

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project, as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html) (like the component is using it in the demo).

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------| :--------------|
| --cells-molecule-grid-list  | Empty mixin for the whole component   | {}             |
| --cells-molecule-grid-list-margin      | Margin | -1px  |
| --cells-molecule-grid-list-wrapper      | mixin for the list element `<ul>` | {}  |
| --cells-molecule-grid-list-item      | mixin for the list item `<li>` | {}  |
| --cells-molecule-grid-list-height      | height | auto  |
| --cells-molecule-grid-container-background-color   |  background | #004481 |
| --cells-molecule-grid-container   |  mixin for div container | {} |
| --cells-molecule-grid-list-with-borders-border-color   |  border-color with borders | #043263 |
| --cells-molecule-grid-list-border-inside-border-color  |  border-color border inside | #043263 |
| --cells-molecule-grid-list-column-size-fixed  | Empty mixin for the :host([column-size-fixed])   | {}             |
| --cells-molecule-grid-list-column-size-fixed-list  | Empty mixin for the :host([column-size-fixed]) .list  | {}             |
| --cells-molecule-grid-list-column-size-fixed-width      | Column width | 25%  |
| --cells-molecule-grid-list-column-size-fixed-margin      | Margin | 0  |
| --cells-molecule-grid-link-item-focus      | Empty mixin for link item focus | 0  |
| --cells-molecule-grid-link-item-focus-background-color      | background color for list item | #043263  |
| --cells-molecule-grid-list-item      | Empty mixin for link item | 0  |
