# Changelog

## v9.0.0

### Removed unnused properties

- `_hideAvatar`: In this version is unnecessary this property because if user is not setted, hide the profile.

- `profileAction`: has been changed in favor of `disableProfileLink` property.

- `animateSidebarItems`: this property is unnecessary because this component must not have animation.

- `animationActive`: this property is unnecessary because this component must not have animation.

- `_animationClass`: this property is unnecessary because this component must not have animation.

### Removed unnused functions

- `_computeEvaluateSectionFn`: this function it doesn´t working.

- `_toggleAnimationClass`: this function is unnecessary because this component must not have animation.

- `_computeIsAnimated`: this function is unnecessary because this component must not have animation.

- `_computeHideAvatar`: this function is unnecessary because the functionality has been change in html.

### New features

- added `debounceDuration` property for to do a debounce when toggle is fire.

- added `reset` function, this initalize component by default, and fire the event `reset-menu-sidebar`.

- Added `_profile` this function fire an event when profile is clicked.


### Changes in CSS mixins

- `--cells-organism-menu-sidebar-a-color` replaced in favor of `--cells-organism-menu-sidebar-link-item-color`

- `--cells-organism-menu-sidebar-link-item` replaced in favor of `--cells-organism-menu-sidebar-link-item`

- `--cells-organism-menu-sidebar-header-after` replaced in favor of `--cells-organism-menu-sidebar-before`

- `--cells-organism-menu-sidebar-section-list` replaced in favor of `--cells-organism-menu-sidebar-nav-list`

- `--cells-organism-menu-sidebar-section-list-user-logged` replaced in favor of `--cells-organism-menu-sidebar-nav-list-user-logged`

- `--cells-organism-menu-sidebar-user-name` replaced in favor of `--cells-organism-menu-sidebar-user-info-name`

- `--cells-organism-menu-sidebar-user-profile` replaced in favor of `--cells-organism-menu-sidebar-user-info-profile`

### Removed CSS mixins

- `--cells-organism-menu-sidebar-header` has been removed.
- `--cells-organism-menu-sidebar-user-link` has been removed.
