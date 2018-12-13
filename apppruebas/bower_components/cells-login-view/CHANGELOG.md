# CHANGELOG

## v11.0.0

### Breaking changes

| Removed CSS properties |
|:-------------------|
--cells-login-view-login-nonmoveup-maximized-form |
--cells-login-view-login-nonmoveup-maximized-form-extra-actions |

## v10.1.0

### Breaking changes

| Removed CSS properties |
|:-------------------|
| --cells-login-view-login-form-input-withcontent-field-label |
| --cells-login-view-login-form-input-withcontent-label |
| --cells-login-view-login-form-form |
| --cells-login-view-login-moveup-maximized-form-extra-actions |

## Update to v4.0.0

- Removed i18n dependency.

- Added cells-device-behavior to detect iOS in order to prevent animation on focus (and apply opacity effect instead) on iOS devices.

- userId and userPassword two-way data-bindings have been replaced with one-way data-bindings.

- HTML: changed classes names, computed classes just applied to upper level, icons are now passed as properties, removed prevent input focus events.

- Styles refactor: added styles for credentials form and molecule input, added variables and mixins, renamed mixins and variables, animations fixes.

- JS: added headerImageAlt property, added icons properties, removed prevent focus functionality.
