# cells-molecule-spinner

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

Spinner with icon and informative message

Example:
```html
<cells-molecule-spinner message="Loading data"></cells-molecule-spinner>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------| :--------------|
| --cells-molecule-spinner-size      | spinner size | 150px  |
| --cells-molecule-spinner-ring-content-color      | ring background color | #E9E9E9  |
| --cells-molecule-spinner-ring-color      | ring color | #2dcccd  |
| --cells-molecule-spinner-ring-border-width | ring border width | 3px |
| --cells-molecule-spinner-ring-border-width--finished | ring border width in finished state | 3px |
| --cells-molecule-spinner-icon-color      | icon color | #fff  |
| --cells-molecule-spinner-message-color      | message color | #fff  |
| --cells-molecule-spinner-process-message-color | color for :host([process]) | #fff |
| --cells-molecule-spinner-process-background | background color for :host([process]) | #072146 |
| --cells-molecule-spinner-process-text-background | background color for text area in :host([process]) | #0c386f |
| --cells-molecule-spinner-icon      | mixin for icon | {} |
| --cells-molecule-spinner-message      | mixin for message | {} |
| --cells-molecule-spinner  | empty mixin     | {}             |
| --cells-molecule-spinner-wrapper | mixin applied to .wrapper | {} |
| --cells-molecule-spinner-process-wrapper | mixin applied to .wrapper in :host([process]) | {} |
| --cells-molecule-spinner-process-spinner | mixin applied to .spinner in :host([process]) | {} |
| --cells-molecule-spinner-process-text-span | mixin applied to .text span in :host([process]) | {} |
| --cells-molecule-spinner-process-text | mixin applied to .text in :host([process]) | {} |
| --cells-molecule-spinner-process | mixin applied to :host([process]) | {} |
| --cells-molecule-spinner-text-icon | mixin applied to icon in :host([process]) | {} |
| --cells-molecule-spinner-text-span | mixin applied to span in :host([process]) | {} |
| --cells-molecule-spinner-text | mixin applied to text in :host([process]) | {} |
| --cells-molecule-spinner-process-finish-text | mixin applied to text in :host([process][finish]) | {} |
| --cells-molecule-spinner-process-finish | mixin applied to :host([process][finish]) | {} |
