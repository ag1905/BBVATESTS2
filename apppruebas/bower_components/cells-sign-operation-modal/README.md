# &lt;cells-sign-operation-modal&gt;

is a bottom modal with a form to sign an operation by opt, sms or some other code.

Example:

```html
<cells-sign-operation-modal img-src='images/otp.png'></cells-sign-operation-modal>
```

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

| Custom property                        | Description            | Default     |
|:---------------------------------------|:-----------------------|:------------|
| --cells-sign-operation-modal           | Mixin applied to :host | {}          |
| --cells-fontDefault                    | Font family of :host   | Benton Sans |
| --cells-sign-operation-modal-sign      | empty mixin            | {}          |
| --cells-sign-operation-modal-sign-form | empty mixin            | {}          |
| --cells-sign-operation-modal-info      | empty mixin            | {}          |