# cells-left-swipe-action

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-left-swipe-action>` is a container element that allows swiping to the left to reveal one or more action buttons.

Example:

```html
<cells-left-swipe-action>
  <div>Visible content</div>

  <button class="cells-left-swipe-action-button">Action 1</button>
  <button class="cells-left-swipe-action-button">Action 2</button>
</cells-left-swipe-action>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                 | Description                            | Default        |
|:------------------------------------------------|:---------------------------------------|:--------------:|
| --cells-left-swipe-action-underlay-background   | Background color of the underlay layer | #5BBEFF        |
| --cells-left-swipe-action                       | empty mixin for the whole component    | {}             |
| --cells-left-swipe-action-content               | empty mixin for content                | {}             |
| --cells-left-swipe-action-swipe-content         | empty mixin for swipe-content          | {}             |
| --cells-left-swipe-action-swipe-underlay        | empty mixin for swipe-underlay         | {}             |
| --cells-left-swipe-action-cubic-bezier          | empty mixin for cubic-bezier animation | {}             |
| --cells-left-swipe-action-shadow                | empty mixin for box-shadow             | {}             |
| --cells-left-swipe-action-button                | empty mixin for action-button          | {}             |
| --cells-left-swipe-action-button-wrapper        | empty mixin for action-button-wrapper  | {}             |
| --cells-left-swipe-action-button-wrapper-active | empty mixin for action-button-wrapper  | {}             |
