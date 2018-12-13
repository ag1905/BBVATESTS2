# Theming “component”

## DEPRECATION NOTICE

The following mixins for text styles **will be deprecated** in the next major release (5.0.0):

- `--cells-fontDefaultLightItalic`. Reason: fake italic. Missing font.
- `--cells-fontDefaultSemibold`. Reason: missing font. Medium is used instead.
- `--cells-fontDefaultSemiboldItalic`. Reason: missing font. Medium is used instead.

1. Definition - what is included in theme, variables and common properties of components

2. Import of theme - how to call it from application / component level

3. Usage of theme - how to apply theme at application and component(demo) level

See [PolymerStyling] Local DOM documentation also.

## 1. Definition

The theming is present as a dependency, thus as one component more.

<code>
/{appname}-ui-theme/<br/>
└───/fonts/<br/>
│────{appname}-ui-theme.html<br/>
│────{appname}-ui-theme-common.html<br/>
│────{appname}-ui-theme-fonts.html<br/>
│────{appname}-ui-theme-typography.html<br/>
└────{appname}-ui-theme-buttons.html<br/>
</code>

* {appname}-ui-theme:
    >Includes all of the above (the one that will be referenced).

* {appname}-ui-theme-vars:
    >Includes vars.

* {appname}-ui-theme-typography:
    >Definition of font families and common text styles.

* {appname}-ui-theme-buttons:
    >Custom properties for buttons grouped using Polymer mixins.

### ui-theme-apply

This file contains sets of __common properties__ grouped under mixins, which are available to use in any component (though they are meant to one specific component and therefore they are listed by component).

```html
<style is="custom-style">
custom-element {
  --theme-mixin: {
    ...
  };
}
</style>
```

These __sets of common properties__ are using the registered variables in ui-theme-common.

```css
--input-base: {
  font-family: var(--stagBook);
    ...
};
```


The __common properties__ will be only those properties having to do with the decoration of the component (*like color, font-size...*).

Everything else, structure related will be only at the <code>component.scss</code> level (*like width, display, margin, etc*).

```css
:host{
    width: 100%;
    display: inline-block;
    margin: 5px;

    /* here the common properties will be applied */
}
```


## 2. Import theme

The theme is imported at app level, so the component must not import it.

To preview an individual component with the theme applied, import the theme from <code>./demo/index.html</code>

<code><br/>
/{appname}-ui-component/<br/>
│───{appname}-ui-component.html<br/>
└───/demo/<br/>
----└───index.html<br/></code>

```html
<!-- Add theme to /demo/index -->
<link rel="import" href="../../{appname}-ui-theme/{appname}-ui-theme.html">
```

When previewing the whole application, reference to theme from <code>./app/index.html</code>

<code><br/>
/{appname}-app/<br/>
└───/app<br/>
----└───index.html<br/></code>

```html
<!-- Add theme from /app/index -->
<link rel="import" href="../components/{appname}-ui-theme/{appname}-ui-theme.html">
```

## 3. Use/apply theme

The <code>{appname}-ui-theme-apply.html</code> has the sets of __common properties__ grouped under variables which can be used in any component.

In the <code>component.scss</code>, <code>@apply</code> the sets of variables however you need.

For example:

```html
:host {
    @apply(--input--base);

    &:focus{
        @apply(--input--focus);
    }
    &:disabled{
        @apply(--input--disabled);
    }
    //or
    // primary btn
    &.btn--primary {
        @apply(--btn--primary);
        &:hover:not(:disabled) {
            @apply(--btn--primary-hover);
        }
    }
}
```

And the HTML:

```html
<appname-ui-atom-input></appname-ui-atom-input>
or
<appname-ui-cells-atom-button class="btn--primary"></appname-ui-cells-atom-button>
```


At the end of every component's SCSS, a custom property is applied, __so the component styling can be overridden__.

```html
:host {
    ...style of the component...
}

:host {
    @apply(--{appname}-ui-atom-input);
}
```

[PolymerStyling]: https://www.polymer-project.org/1.0/docs/devguide/styling.html#custom-style
