# cells-heading

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

[Demo of component in Cells Catalog](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html#/elements/cells-heading)

`<cells-heading>` provides heading semantics and an easy way to customize and unify heading styles used across a website or application.

__Example:__
```html
<cells-heading class="custom-class">Heading</cells-heading>
```


## Accessibility

The tag has a role heading applied by default, so it's not recommended to use headings (h1, h2, etc.) inside the tag.

__Heading levels:__

You can provide information about the heading level relative to the document by setting the `level` attribute with a numeric value from 1 to 6. By default the heading level (`aria-level`) is set to 2. If 0 is provided, the component won't be treated as a heading.

```html
<cells-heading level="1">Application heading</cells-heading>
```


## Styling

`<cells-heading>` has no styles (only `display: block`), custom CSS properties or available mixins. You can customize it by creating a style module with ID `cells-heading-shared-styles` where you can define the styles that will be applied to the tag using your own custom classes.

The file with the style module must be imported in your application's theme.

Sample file imported in your theme: `my-theme/shared-styles.html`

```html
<link rel="import" href="../polymer/polymer.html">

<dom-module id="cells-heading-shared-styles">
  <template>
    <style>
      :host {
        font-family: var(--cells-fontDefault);
      }
      :host(.application-heading) {
        @apply(--your-theme-mixin);
        color: var(--your-theme-color);
      }
      :host(.section-heading) {
        font-size: .875rem;
        text-transform: uppercase;
      }
    </style>
  </template>
</dom-module>
```
