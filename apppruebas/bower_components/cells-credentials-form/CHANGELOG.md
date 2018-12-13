# CHANGELOG

## Update to v3.0.0

- Dependencies: removed dependency for cells-atom-button and cells-cordova-keyboard; cells-molecule-input updated to version 5; added cells-st-button and cells-heading.

- HTML refactor: links replaced with transparent buttons, used cells heading for user greeting, changed classes names.

- Removed prevent focus functionality.

- Changed "hasError" with "invalid", now it applies the invalid property to the inputs, and not just a class.

- Added event for "forget password" button.

- Added clear and toggle icons to cells-molecule-input; password field can have both icons. Added i18n keys for icons labels.

- Styles refactor: added coronita styling as default styling, changed mixins and variables.
