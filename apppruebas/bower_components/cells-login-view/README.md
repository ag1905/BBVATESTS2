![cells-login-view screenshot](cells-login-view.png)

# cells-login-view

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-login-view)

`cells-login-view` contains fields, buttons and links to show a complete login process view. It is mainly composed by a header image, `cells-credentials-form` for the login form, and `cells-molecule-spinner` for the waiting animation. The component applies animations to the login form when the inputs are focused.

The component can receive the login event from `cells-credentials-form` and fires it upwards. `loading` boolean attribute can be used to show or hide the spinner.

Register button can be hidden or shown using the `allow-registration` attribute.

Icons can be passed to the component in order to show clear and toggle icons in the inputs fields (as in `cells-credentials-form`), and start/end icons in the spinner (as in `cells-molecule-spinner`).

Example:
```html
<cells-login-view
  allow-registration
  clear-id-icon="coronita:close"
  clear-pwd-icon="coronita:close"
  toggle-pwd-icon="coronita:visualize"
  toggle-pwd-icon-toggled="coronita:hide"
  start-icon="coronita:lock"
  end-icon="coronita:unlock"
  header-image="http://bbva-files.s3.amazonaws.com/cells/assets/glomo/images/access/bg-login.jpg">
</cells-login-view>
```

The component can optional use inputUserOptions configuration object to validate and mask input user login value.

```html
<cells-login-view
  allow-registration
  clear-id-icon="coronita:close"
  clear-pwd-icon="coronita:close"
  toggle-pwd-icon="coronita:visualize"
  toggle-pwd-icon-toggled="coronita:hide"
  start-icon="coronita:lock"
  end-icon="coronita:unlock"
  input-user-options="[[inputUserOptions]]">
</cells-login-view>
```
```js
  {
    autoValidate: true,
    inputStatusValidate: true,
    inputType: 'text',
    allowedValue: "rut",
    errorMessage: 'rutMsg',
    errorMessageIcon: 'coronita:error',
    mask: 'rut',
    maxLength: '13'
  }

```

## Animation in iOS devices
iOS tries to natively center in screen an input field when it's focused and keyboard is shown. So, running translate animations on input fields depending on focus events can cause the input to be non-centered or even off-screen.

To prevent this, `cells-device-behavior` is used to detect iOS devices, and to not apply translate animations in those cases. By default, opacity is changed on the header image when input is focused.

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.


## Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
:--- | :--- | :---
--cells-login-view | Mixin for component | {}
--cells-login-view-background-color | Default background color | var(--bbva-core-blue, #004481)
--cells-login-view-background-image | Default background image | fractal-bbva-core-blue.svg
--cells-login-view-login-form | Mixin for login form | {}
--cells-login-view-login-form-extra-actions | Mixin for extra actions links layer | {}
--cells-login-view-login-form-forgotten-pwd | Mixin for forgotten pasword layer | {}
--cells-login-view-login-form-input-background-color | Inputs background color | var(--bbva-medium-blue, #2A86CA)
--cells-login-view-login-form-input-icon-active-color | Inputs icon color on active | var(--bbva-white, #fff)
--cells-login-view-login-form-input-icon-color | Inputs icon color | var(--bbva-white, #fff)
--cells-login-view-login-form-input-icon-focus-color | Inputs icon color on focus | var(--bbva-white, #fff)
--cells-login-view-login-form-input-icon-hover-color | Inputs icon color on hover | var(--bbva-white, #fff)
--cells-login-view-login-form-input-label | Mixin for inputs label | {}
--cells-login-view-login-form-input-label-color | Inputs label color | var(--bbva-white, #fff)
--cells-login-view-login-form-input-text-color | Inputs text color | var(--bbva-white, #fff)
--cells-login-view-login-form-link-active-color | Color for form links on active | var(--bbva-white, #fff)
--cells-login-view-login-form-link-color | Color for form links | var(--bbva-white, #fff)
--cells-login-view-login-form-link-hover-color | Color for form links on hover | var(--bbva-white, #fff)
--cells-login-view-login-form-links | Mixin for form links | {}
--cells-login-view-login-form-register-color | Color for form register text | var(--bbva-white, #fff)
--cells-login-view-login-form-register-text | Mixin for form register text | {}
--cells-login-view-login-form-submit | Mixin for submit button | {}
--cells-login-view-login-form-submit-disabled-bg-color | Submit button disabled background color | var(--bbva-teal, #2dcccd)
--cells-login-view-login-form-user | Mixin for user greeting and text | {}
--cells-login-view-login-form-user-color | Color for user greeting | var(--bbva-white, #fff)
--cells-login-view-login-header | Mixin for header | {}
--cells-login-view-login-header-before | Mixin for header:before | {}
--cells-login-view-login-header-bg | Mixin for header-bg | {}
--cells-login-view-login-image-height | Header image height | 28vh
--cells-login-view-login-image-height-small | Height of the small image | 27vh
--cells-login-view-login-moveup | Mixin for login when animated | {}
--cells-login-view-login-moveup-form | Mixin for login form not on iOS | {}
--cells-login-view-login-moveup-maximized | Mixin for login when maximized and animated | {}
--cells-login-view-login-moveup-maximized-form | Mixin for login form when maximized and animated | {}
--cells-login-view-login-moveup-maximized-form-form | Mixin for form tag inside login form when maximized and animated | {}
--cells-login-view-login-moveup-maximized-form-register | Mixin for login form register when maximized and animated | {}
--cells-login-view-login-moveup-maximized-header | Empty mixin applied to the maximized header | {}
--cells-login-view-login-moveup-maximized-header-before | Empty mixin applied to the maximized heaer (::before) | {}
--cells-login-view-login-moveup-maximized-header-bg | Mixin for header-bg when maximized and animated | {}
--cells-login-view-login-moveup-maximized-islogged | Mixin for login when maximized, animated and logged | {}
--cells-login-view-login-moveup-maximized-islogged-form | Mixin for login form when maximized, animated and logged | {}
--cells-login-view-login-moveup-maximized-islogged-form-form | Mixin for form tag inside form when maximized, animated and logged | {}
--cells-login-view-login-nonmoveup-maximized | Mixin for login when maximized and on iOS | {}
--cells-login-view-login-nonmoveup-maximized-header | Mixin for header | {}
--cells-login-view-login-nonmoveup-maximized-header-before | Mixin for header | {}
--cells-login-view-login-nonmoveup-maximized-header-bg | Mixin for header-bg when maximized and on iOS | {}
--cells-login-view-login-view | Mixin for login view | {}
--cells-login-view-spinner | Mixin for spinner view | {}
--cells-login-view-spinner-ring-content-color | Spinner ring content color | rgba(255, 255, 255, .2)
--cells-login-view-spinner-spinner | Mixin for spinner inside spinner view | {}
--cells-login-view-views | Mixin for login view and spinner view | {}
