
<!---

This README is automatically generated from the comments in these files:
paper-scroll-header-panel.html

Edit those files, and our readme bot will duplicate them over here!
Edit this file, and the bot will squash your changes :)

The bot does some handling of markdown. Please file a bug if it does the wrong
thing! https://github.com/PolymerLabs/tedium/issues

-->

[![Build status](https://travis-ci.org/PolymerElements/cells-paper-scroll-header-panel.svg?branch=master)](https://travis-ci.org/PolymerElements/cells-paper-scroll-header-panel)

_[Demo and API docs](https://elements.polymer-project.org/elements/cells-paper-scroll-header-panel)_


##&lt;cells-paper-scroll-header-panel&gt;

Material design: [Scrolling techniques](https://www.google.com/design/spec/patterns/scrolling-techniques.html)

`paper-scroll-header-panel` contains a header section and a content section.  The
header is initially on the top part of the view but it scrolls away with the
rest of the scrollable content.  Upon scrolling slightly up at any point, the
header scrolls back into view.  This saves screen space and allows users to
access important controls by easily moving them back to the view.

__Important:__ The `paper-scroll-header-panel` will not display if its parent does not have a height.

Using [layout classes](https://www.polymer-project.org/1.0/docs/migration.html#layout-attributes) or custom properties, you can easily make the `cells-paper-scroll-header-panel` fill the screen

```html
<body class="fullbleed layout vertical">
  <cells-paper-scroll-header-panel class="flex">
    <paper-toolbar>
      <div>Hello World!</div>
    </paper-toolbar>
  </cells-paper-scroll-header-panel>
</body>
```

or, if you would prefer to do it in CSS, just give `html`, `body`, and `cells-paper-scroll-header-panel` a height of 100%:

```css
html, body {
  height: 100%;
  margin: 0;
}
cells-paper-scroll-header-panel {
  height: 100%;
}
```

`cells-paper-scroll-header-panel` works well with `paper-toolbar` but can use any element
that represents a header by adding a `paper-header` class to it.

Note: If the class `paper-header` is used, the header must be positioned relative or absolute. e.g.

```css
.paper-header {
  position: relative;
}
```

```html
<cells-paper-scroll-header-panel>
  <div class="paper-header">Header</div>
  <div>Content goes here...</div>
</cells-paper-scroll-header-panel>
```

### Styling

=======

The following custom properties and mixins are available for styling:

| Custom property | Description | Default |
| --- | --- | --- |
| --cells-paper-scroll-header-panel-full-header | To change background for toolbar when it is at its full size | {} |
| --cells-paper-scroll-header-panel-condensed-header | To change the background for toolbar when it is condensed | {} |
| --cells-paper-scroll-header-panel-container | To override or add container styles | {} |
| --cells-paper-scroll-header-panel-header-container | To override or add header styles | {} |


