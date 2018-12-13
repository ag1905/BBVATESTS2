# cells-atom-message

`<cells-atom-message>` shows a simple message with an icon and a link.
The icon and the link are optional and the message is customizable.

__Example simple message__:

```html
<cells-atom-message
  icon="coronita:info" icon-size="36"
  message="Simple message"></cells-atom-message>
```

__Example using `type`__:

Values for `type`:
- success
- warning
- info
- error

```html
<cells-atom-message type="info"
  icon="coronita:info" icon-size="36"
  message="Your message"></cells-atom-message>
```

__Example using `link`__:

```html
<cells-atom-message
  icon="coronita:alert" icon-size="36"
  message="Your message"
  link="Text of link"></cells-atom-message>
```

__Example using `image fullscreen`__:

```html
<cells-atom-message id="myEl8"
  image="http://bbva-files.s3.amazonaws.com/cells/assets/glomo/images/under-construction/bg-under-construction.svg"
  message="Your message"
  image-full-screen></cells-atom-message>
```


## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-atom-message  | empty mixin     | {}             |
| --cells-atom-message-success  | empty mixin for :host([type="success"]) | {} |
| --cells-atom-message-success-bg-color  | var for :host([type="success"]) background-color | --cells-GM6_colour |
| --cells-atom-message-success-color  | var for :host([type="success"]) color | --cells-GM2_colour |
| --cells-atom-message-error  | empty mixin for :host([type="error"]) | {} |
| --cells-atom-message-error-bg-color  | var for :host([type="error"]) background-color | --cells-RM6_colour |
| --cells-atom-message-error-color  | var for :host([type="error"]) color | --cells-RM2_colour |
| --cells-atom-message-warning  | empty mixin for :host([type="warning"]) | {} |
| --cells-atom-message-warning-bg-color  | var for :host([type="warning"]) background-color | --cells-YM3_colour |
| --cells-atom-message-warning-color  | var for :host([type="warning"]) color | --cells-YM3_colour |
| --cells-atom-message-info  | empty mixin for :host([type="info"]) | {} |
| --cells-atom-message-info-bg-color  | var for :host([type="info"]) background-color | --cells-YM3_colour |
| --cells-atom-message-info-color  | var for :host([type="info"]) color | --cells-YM3_colour |
| --cells-atom-message__message  |  empty mixin applied to .message    |  {} |
| --cells-atom-message__message--icon  | empty mixin applied to .message__icon | {} |
| --cells-atom-message__message--link  | empty mixin     | apply to .message__link            |
| --cells-atom-message__message--link-color  | var applied to .message__link color    |   --cells-KM3_colour  |
| --cells-atom-message__message--link-hover  | empty mixin     | apply to .message__link:hover            |
| --cells-atom-message__message--link-visited  | empty mixin     | apply to .message__link:visited            |
| --cells-atom-message__message--link-active  | empty mixin     | apply to .message__link:active            |
| --cells-atom-message-image  | empty mixin     | apply to .image            |
| --cells-atom-message-image__fullscreen  | empty mixin     | apply to .image__fullscreen            |
