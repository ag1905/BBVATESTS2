# CHANGELOG

## v4.0.0

**Breaking changes**

- Styles refactor. Removed theme applies, added coronita styling to component. Removed unused styles. 

- Mixins and custom properties: complete naming refactor, removed unused mixins.

- `cells-image-overlay-ccds-wrapper` replaced with `cells-molecule-card-cover-ccds-wrapper`

- Removed `.container` class in HTML.

- Removed `.flex--1` class both in HTML and CSS.

- Changed `'.item__aditional'` with `'.item__additional'` both in HTML and CSS (including mixins).


**New features**

- Added imgAlt property for a11y of the images.

- Added headingLevel property to allow accessible heading levels.

- Added amount abbreviations and decimalsHidden property.

- Added `cells-heading` to manage heading level and role
