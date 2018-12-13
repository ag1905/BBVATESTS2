# cells-welcome-slider

`<cells-welcome-slider>` is a component for the start page of an application that shows a carousel
with configurable images and texts for each slide, access and/or register buttons and an optional link to legal terms.

Example:

```html
<cells-welcome-slider slides="<slidesArray>"></cells-welcome-slider>
```

## Data model

`slides` Array

```js
[{
  animation: '<path-to-image>', // url of an APNG image shown over each slide
  placeholder: '<path-to-placeholder-image>',
  title: 'Slide title',
  text: 'Slide text...',
  backgroundColor: '#ccc', // slide background color
  backgroundImage: '<path-to-background-image>', // background image for the slide
  delay: 5000 // slide duration
}]
```

Note: `image` property can be used instead of `animation` if you don't need an animated image (APNG).

## Styling

The following custom properties and mixins are available for styling:

 Custom property | Description     | Default
:----------------|:----------------|:--------------
--cells-welcome-slider | empty mixin applied to the tag itself | {}
--cells-welcome-slider_canvas-width | canvas width | auto
--cells-welcome-slider_canvas-height | canvas height | 36vh
--cells-welcome-slider_actions | empty mixin applied to the buttons container | {}
--cells-welcome-slider_actions__btn | empty mixin applied to actions buttons
--cells-welcome-slider_footer | empty mixin applied to the legal terms container | {}
--cells-welcome-slider_footer__btn | empty mixin applied to footer buttons
--cells-welcome-slider_legal-notice | empty mixin applied to the legal terms link | {}
