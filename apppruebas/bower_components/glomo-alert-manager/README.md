# glomo-alert-manager

`glomo-alert-amanager` wrapper of cells-alert-box to handle glomo app errors

Example:
```html
<glomo-alert-manager></glomo-alert-manager>
  <cells-alert-box
      class$="[[_getKey(errorCode, 'className')]]"
      full-height="[[_getKey(errorCode, 'maximized')]]"
      opened="{{opened}}"
      title="[[_getKey(errorCode, 'title')]]"
      hero-image="[[_getKey(errorCode, 'image')]]"
      accept-button="[[_getKey(errorCode, 'accept')]]"
      cancel-button="[[_getKey(errorCode, 'cancel')]]"
      accept-button-info="[[_getKey(errorCode, 'accept-info')]]"
      cancel-button-info="[[_getKey(errorCode, 'cancel-info')]]"
      message="[[_getKey(errorCode, 'message')]]"
      on-accept="_onAccept"
      on-cancel="_onCancel">
    </cells-alert-box>

```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --glomo-alert-manager-scope      | scope description | default value  |
| --glomo-alert-manager  | empty mixin     | {}             |
