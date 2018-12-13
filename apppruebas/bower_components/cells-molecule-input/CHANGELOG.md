# CHANGELOG

## v6.1.0

- Added `step`, `max`, `min` properties for native input (Number type)

## v6.0.0

- Changes regarding updating to use the v2.0.0 of iron-input, [check the changes](https://github.com/PolymerElements/iron-input)

## Update to v5.0.0

- HTML refactor: classes renamed, added wrapper to manage error message below field, removed label tag from icons, added button tag to icons, computed classes for visibility, changed cells-atom-icon with iron-icon, removed unnecessary IDs.

- Renamed allowedPattern to allowedChars, renamed regex to allowedValue.

- Complete refactor of icons functionality. 
  - Removed withIcon property and iconAlwaysVisible. 
  - Removed default icons from JS
  - Changed icon properties names
  - Added new properties related to icons (iconVisibility, iconAction, iconDecorative, iconLabel) to manage icon accessibility and manage its functionality
  - Icon visibility refactor: default visibility classes are added based on icon type and action. Visibility is then managed through CSS.
  - Two icon actions available by default: clear field and toggle field type (to 'text' and back to original).

- Added extra icon, with same properties as main icon.

- Minor changes to validations.

- CSS refactor, changed mixins and variables, and added new ones. Flex is now used to manage input width depending on icons. Added coronita styles.
