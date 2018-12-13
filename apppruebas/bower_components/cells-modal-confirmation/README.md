# cells-modal-confirmation

Modal to display a warning message with a warning or alert icon and confirm and dismiss buttons.

Example with a single warning message:

```html
<cells-modal-confirmation content="Warning message sample"></cells-modal-confirmation>
```

Example with custom content as warning message:

```html
<cells-modal-confirmation>
  <p>Warning message <strong>sample</strong></p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
</cells-modal-confirmation>
```

## Styling

`warning-icon` and `alert-icon` classes can be used to set different icon color.

```html
<cells-modal-confirmation class="warning-icon"></cells-modal-confirmation>
```

| Class | Applied var | Default |
|:------|:------------|:--------|
| `warning-icon` | --cells-modal-confirmation-warning-icon-color | #F8CD51 |
| `alert-icon` (default) | --cells-modal-confirmation-alert-icon-color | #e77d8e |
| no class | --cells-modal-confirmation-icon-color | #e77d8e |

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:---------------|
| --cells-modal-confirmation-warning-icon-color   | color of the warning icon                               | --bbva-yellow / #F8CD51    |
| --cells-modal-confirmation-alert-icon-colo      | color of the alert icon                                 | --bbva-light-red / #e77d8e |
| --cells-modal-confirmation-icon-color           | default icon color                                      | --bbva-light-red / #e77d8e |
| --cells-modal-confirmation-body                 | mixin applied to the body of the modal                  | {} |
| --cells-modal-confirmation-footer               | mixin applied to the footer of the modal                | {} |
| --cells-modal-confirmation-body-paragraph       | mixin applied to text content (paragraphs) inside modal | {} |
| --cells-modal-confirmation-icon                 | mixin applied to the warning or alert icon              | {} |
| --cells-modal-confirmation-footer-buttons       | mixin applied to the buttons wrapper                    | {} |
| --cells-modal-confirmation-footer-btn           | mixin applied to the footer buttons                     | {} |
| --cells-modal-confirmation-footer-btn-secondary | mixin applied to the secondary footer button            | {} |
