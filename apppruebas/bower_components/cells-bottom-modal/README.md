# cells-bottom-modal

![Polymer Hybrid (1 - 2)](https://img.shields.io/badge/Polymer-1%20--%202-yellow.svg)
[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`<cells-bottom-modal>` is a modal that slides up from the bottom of the screen. This component emulates the behavior of the [Bottom Sheet component](https://www.google.com/design/spec/components/bottom-sheets.html) from Android Material Design and can be fully opened by
dragging up from the header (if the `expand` attribute is not used). The modal can be closed by dragging down from the header, by pressing the esc key or clicking the close icon.

The component inherits methods and properties form [Polymer.IronOverlayBehavior](https://elements.polymer-project.org/elements/iron-overlay-behavior).

__Example with modal backdrop, heading and buttons at the bottom:__

Add `heading` attribute and `slot="heading"` (for `slot` and `content` support) to the tag you want to use as modal heading and place the modal buttons inside an element with `buttons` class and `slot="buttons"`.

```html
<cells-bottom-modal with-backdrop>
  <h1 slot="heading" heading>Modal heading</h1>
  <p>Modal content…</p>
  <div slot="buttons" class="buttons">
    <button on-click="onClickHandler">Cancel</button>
    <button on-click="onClickHandler">Accept</button>
  </div>
</cells-bottom-modal>
```

__Use `expand` attribute to expand the modal to fit its contents:__

Closing by dragging down is not allowed if the modal fits the viewport height.

```html
<cells-bottom-modal with-backdrop expand>
  <h1 slot="heading" heading>Modal heading</h1>
  <p>Modal content…</p>
  <div slot="buttons" class="buttons">
    <button on-click="onClickHandler">Cancel</button>
    <button on-click="onClickHandler">Accept</button>
  </div>
</cells-bottom-modal>
```

__Use `full-height` attribute to fit the viewport height:__

Closing by dragging down is not allowed.

```html
<cells-bottom-modal with-backdrop full-height>
</cells-bottom-modal>
```

__Set a custom backdrop element:__

```html
<cells-bottom-modal with-backdrop data-backdrop="my-backdrop"></cells-bottom-modal>
<div id="my-backdrop"></div>
```

__Dark translucent background:__

Add `modal--dark` class. For better results, do not use `with-backdrop` attribute in dark modals.

```html
<cells-bottom-modal class="modal--dark" expand>
  <h1 slot="heading" heading>Modal heading</h1>
  <p>Modal content…</p>
  <div slot="buttons" class="buttons">
    <button on-click="onClickHandler">Cancel</button>
    <button on-click="onClickHandler">Accept</button>
  </div>
</cells-bottom-modal>
```

__Closing the modal when clicking on it:__

Note that the listeners added to your own buttons placed inside light DOM, the close icon button and the overlay layer continue working as expected. If you also want to **disable closing by clicking the overlay**, you can add the `no-cancel-on-outside-click` boolean attribute.

```html
<cells-bottom-modal
  on-click="yourOwnCloseModalMethod"
  no-cancel-on-outside-click>
</cells-bottom-modal>
```

```js
yourOwnCloseModalMethod: function(e) {
  e.currentTarget.close();
}
```

## Opening, closing and canceling.

__Opening:__
Use `open()` method or `opened` property.

__Closing and canceling:__
Add a `data-action` attribute with value `close` or `cancel` to the buttons placed in light DOM to call the corresponding methods without the need to add an event listener explicitly.

```html
<cells-bottom-modal>
  <button data-action="close">Close</button>
  <button data-action="cancel">Cancel</button>
</cells-bottom-modal>
```

Check out the [Polymer.IronOverlayBehavior](https://elements.polymer-project.org/elements/iron-overlay-behavior) for more information about the available methods.

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html).
In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                 | Description                                         | Default                                              |
| :---------------------------------------------- | :-------------------------------------------------- | :--------------------------------------------------- |
| --cells-bottom-modal-light-fg-color             | Text color in dark modal.                           | #fff                                                 |
| --cells-bottom-modal-dark-bg-color              | Background color for dark modal.                    | rgba(0,0,0,.9)                                       |
| --cells-bottom-modal-transition-duration        | Duration of the transform transition.               | 300ms                                                |
| --cells-bottom-modal-transition-timing-function | Timing function for the transform transition.       | cubic-bezier(0.38, 0.1, 0.23, 0.86)                  |
| --cells-bottom-modal-padding                    | Padding for the header, content and footer. Can be overriden with header-padding, etc. | 0 1.25rem (20px)  |
| --cells-bottom-modal-header-padding             | Padding for the header.                             | 0 1.25rem (20px)                                     |
| --cells-bottom-modal-body-padding               | Padding for the content.                            | 0 1.25rem (20px)                                     |
| --cells-bottom-modal-footer-padding             | Padding for the footer.                             | 0 1.25rem (20px)                                     |
| --cells-bottom-modal-footer-height              | Height of the footer wrapper.                       | 4.375rem (70px)                                      |
| --cells-bottom-modal-header-shadow              | Header shadow.                                      | 0 1px 5px 0 rgba(0, 0, 0, .1)                        |
| --cells-bottom-modal-header-shadow-dragging     | Header shadow while the user is dragging the modal. | 0 3px 3px 0 rgba(black,.07)                          |
| --cells-bottom-modal-footer-shadow              | Footer shadow.                                      | 0 -1px 5px 0 rgba(0, 0, 0, .1)                       |
| --cells-bottom-modal-footer-shadow-dragging     | Footer shadow while the user is dragging the modal. | 0 -3px 3px 0 rgba(black,.07), 0 0 1px rgba(0,0,0,.2) |



| Empty mixin                                      | Description                              |
| ------------------------------------------------ | ---------------------------------------- |
| --cells-bottom-modal-heading                     | Applied to the [heading] tag used inside component. |
| --cells-bottom-modal-btn-close                   | Applied to the close button in the header. |
| --cells-bottom-modal-heading-wrapper             | Applied to the [heading] wrapper if it is not empty. |
| --cells-bottom-modal-header-wrapper              | Applied to the wrapper of the heading and the close button. |
| --cells-bottom-modal-body                        | Applied to the content zone.             |
| --cells-bottom-modal-full-height-body            | Applied to :host(.full-height) .body     |
| --cells-bottom-modal-full-height-header-wrapper  | Applied to :host(.full-height) .header     |
| --cells-bottom-modal-footer                      | Applied to the modal footer.             |
| --cells-bottom-modal                             | Applied to :host
| --cells-bottom-modal-full-height                 | Applied to :host width .full-height
| --cells-bottom-modal-full-height-footer          | Applied to footer inside .full-height
| --cells-bottom-modal-expand                      | Applied to :host[expand]
| --cells-bottom-modal-expand-body                 | Applied to .body inside [expand]
| --cells-bottom-modal-btn-transparent             | Applied to .btn-transparent
| --cells-bottom-modal-content                     | Applied to .content
| --cells-bottom-modal-visible                     | Applied to :host[visible]
| --cells-bottom-modal-header-wrapper-has-shadow   | Applied to .header.has-shadow
| --cells-bottom-modal-header-wrapper-is-dragging  | Applied to .header-is-dragging
| --cells-bottom-modal-footer-is-dragging          | Applied to .footer.is-dragging
