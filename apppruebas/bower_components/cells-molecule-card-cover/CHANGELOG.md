# CHANGELOG

## Update to v4.0.0

- Renamed `productUrl` to `imageSrc`.

- Removed default values for `defaultImage` and `imageSrc`.

- Added `preload`, `fade`, `placeholder` and `showOverlay` properties.

- Added new mixins and CSS variables.

- Added coronita styles.

## Update to v3.0.0

- Removed `productId` property, now only `productUrl` is used.

- Added `text` property, used for the string to show under the icon

- Added `status` property which accepts different values: `locked`, `activate`, `off`.

- Added default image to show if no image is provided.

- Removed `blockingStatus` and `locked` properties (deprecated by `text` and `status` properties).

- Removed default icon, now it must be explicitly declared

- Changed name of mixin `--cells-molecule-card-cover-inactive` with `--cells-molecule-card-cover-icon-text-container`.

- Added new classes, mixins and properties for the different status (locked, activate, off).

- `--cells-KMW_colour` and `--cells-RM3_colour` no longer directly used in the CSS.
