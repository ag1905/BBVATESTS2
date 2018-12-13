# Changelog

## v2.0.0

### BREAKING CHANGES
- `--cells-molecule-mask__number` mixin renamed to `--cells-molecule-mask-number`.
- `--cells-molecule-mask__separator` mixin renamed to `--cells-molecule-mask-separator`.
- `cells-molecule-mask-changed` event no longer exits in favour of notifiable `masked` property.

### New Features
- Ability to add content in light DOM.
- Accessibility improvements for the mask icon button.
- Some CSS vars added to allow changing mask icon color.
- `masked` property reflects to attribute for styling purposes.
