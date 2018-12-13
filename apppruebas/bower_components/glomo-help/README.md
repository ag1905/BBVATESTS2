# &lt;glomo-help&gt;

Component to show user help / assistant information

Example:
```html
<glomo-help></glomo-help>
```

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:---------------|
| --glomo-help  | Mixin applied to :host     | {}  |
| --glomo-help-content-without-footer-strong | Mixin applied to strong element inside content.without-footer | color: var(--bbva-medium-blue, #237ABA); |
| --glomo-help-content-without-footer-strong-a | Mixin applied to a element inside content.without-footer | color: var(--bbva-medium-blue, #237ABA); text-decoration: none; |
| --glomo-help-content-message | Mixin aplied to ccontainer message | margin:  rem(30px) rem(30px) rem(20px) rem(30px; min-height: rem(60px); |
| --glomo-help-content-list | Mixin applied to ul element | {} |
| --glomo-help-content-list-li | Mixin applied to li elements | {} |
| --cells-fontDefault  | Mixin applied to :host font-family    | sans-serif  |
