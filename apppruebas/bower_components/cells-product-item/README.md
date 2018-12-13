# cells-product-item

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-product-item)

`<cells-product-item>` is a component to display a bank product (typically a card or account) with an optional image and description and up to two amounts in a concrete currency and optional label.

The component has two sets of hooks in which you can insert your own HTML (`<content>`` tag).
If your product has a name, then you have 3 hooks: one next to product name (.icons) devised for icons, one at the right of the image (.text-right-image) and one below all the content (.text-below-image).
If name is not set then you have a hook (.description) to display something above the mask number product.

**Examples:**

```
<cells-product-item
  name="My Account"
  img-src="url/to/my/image.png"
  show-img-overlay
  img-overlay-icon="coronita:block"
  description='{"value": "ES04425233523", "masked": true}'
  primary-amount='{"label": "Available", "amount": 288, "currency": "EUR"}'
  secondary-amount='{"amount": 100, "currency": "USD"}'
  local-currency="EUR">
</cells-product-item>

<cells-product-item
  primary-amount='{"label": "Available", "amount": 288, "currency": "USD"}'
  description='{"value": "987654321", "masked": "true", "content": "Lorem ipsum"}'
  local-currency="USD">
  <span class="description">Simple account</span>
</cells-product-item>

<cells-product-item>
  <cells-atom-icon class="icons mobile icon-size-20" icon="coronita:mobile-26"></cells-atom-icon>
</cells-product-item>
```

## Accessibility

The title will receive a role=heading attribute and an aria-level=2 attribute by default. You can set a different aria-level using heading-level attribute and passing a number to it. In case you don't want that text to behave as a heading, pass a 0 value to heading-level in order to entirely remove role and aria-level.

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html).
In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                   | Description                                                                       | Default   |
|:--------------------------------------------------|:----------------------------------------------------------------------------------| :---------|
| --cells-product-item                              | Empty mixin for the whole component                                               | {}        |
| --cells-product-item-color                        | Main color for texts in the component                                             | #121212   |
| --cells-product-item-background-color             | Background color for the component                                                | #FFF      |
| --cells-product-item-description-value-font-size  | Font size of description value                                                    | rem(12px) |
| --cells-product-item-overlay-icon                 | Empty mixin for cells-molecule-card-cover icon                                    | {}        |
| --cells-product-item-overlay-layer                | Empty mixin for cells-molecule-card-cover layer                                   | {}        |
| --cells-product-item-active-background-color      | Background color for the component in active state                                | #f4f4f4   |
| --cells-product-item-active                       | Empty mixin for component active state                                            | {}        |
| --cells-product-item-item-info                    | Empty mixin for .item__info                                                       | {}        |
| --cells-product-item-title-color                  | Text color for component title                                                    | #2A86CA   |
| --cells-product-item-item-title                   | Empty mixin for .item__title                                                      | {}        |
| --cells-product-item-disabled-text-color          | Text color for title, description value and amounts when component has class .frozen or .blocked | #D3D3D3  |
| --cells-product-item-item-name-state              | Empty mixin for .item__name when component has class .frozen or .blocked          | {}        |
| --cells-product-item-item-name                    | Empty mixin for .item__name                                                       | {}        |
| --cells-product-item-item-label                   | Empty mixin for .item__label                                                      | {}        |
| --cells-product-item-item-additional              | Empty mixin for .item__additional                                                 | {}        |
| --cells-product-item-item-image                   | Empty mixin for .item__image                                                      | {}        |
| --cells-product-item-item-data                    | Empty mixin for .item__data                                                       | {}        |
| --cells-product-item-item-number                  | Empty mixin for .item__number                                                     | {}        |
| --cells-product-item-description-value-state      | Empty mixin for cells-molecule-mask when component has class .frozen or .blocked  | {}        |
| --cells-product-item-description-value            | Empty mixin for cells-molecule-mask                                               | {}        |
| --cells-product-item-item-quantities              | Empty mixin for .item__quantities                                                 | {}        |
| --cells-product-item-amount                       | Empty mixin for `.item__primary-amount` and `.item__secondary-amount`             | {}        |
| --cells-product-item-item-primary-amount          | Empty mixin for .item__primary-amount                                             | {}        |
| --cells-product-item-item-secondary-amount        | Empty mixin for .item__secondary-amount                                           | {}        |
| --cells-product-item-amount-state                 | Empty mixin for item amounts when component has class .frozen or .blocked         | {}        |
| --cells-product-item-amount-amount                | Empty mixin for amounts                                                           | {}        |
| --cells-product-item-amount-label-color           | Color for amount labels                                                           | #BDBDBD   |
| --cells-product-item-amount-label-state           | Empty mixin for amount labels when component has class .frozen or .blocked        | {}        |
| --cells-product-item-amount-label                 | Empty mixin for component labels                                                  | {}        |
| --cells-product-item-title-icon-color             | Content icon color                                                                | inherit   |
| --cells-product-item-item                         | Empty mixin for .item                                                             | {}        |
