# cells-full-screen-slider

`<cells-full-screen-slider>` is a component that displays a carousel of slides with an image or animation,
title, text and optional customizable background color and image for each slide.

Custom content provided in light DOM is placed below the slider.

Example:

```html
<cells-full-screen-slider slides="[[slides]]"></cells-full-screen-slider>
```

## Data model

**Slides property**

You can set custom duration for each slide by adding a delay property to each item of the
slides array. Otherwise, the default value for the delay property will be used.

```json
[{
  image: '../images/slide-1.svg',
  placeholder: 'data:image/svg+xml;base64...',
  title: 'Slide title',
  text: 'Slide text lorem ipsum dolor sit amet...',
  backgroundColor: '#003E7B',
  backgroundImage: 'path-to-image.svg',
  delay: 5000 // custom duration for each slide
}];
```

**Animated images**

To use animations use `animation` property instead of `image`. The value must be a path of an APNG image (Animated PNG),
that will be rendered as canvas. When using animations, the `placeholder` attribute is not used.

```json
[{
  animation: '../images/animation.png',
  title: 'Slide title',
  text: 'Slide text lorem ipsum dolor sit amet...'
}];
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property                          | Description                             | Default            |
| :----------------------------------------| :---------------------------------------| :----------------- |
| --cells-full-screen-slider               | mixin applied to the whole component    | {}                 |
| --cells-full-screen-slider-content       | mixin for the bottom container          | {}                 |
| --cells-full-screen-slider-pager         | mixin applied to the pagination bullets | {}                 |
| --cells-full-screen-slider-slide         | mixin applied to each slide             | {}                 |
| --cells-full-screen-slider-slide-image   | mixin for the slide image               | {}                 |
| --cells-full-screen-slider-slide-wrapper | mixin for the slide content wrapper     | {}                 |
| --cells-full-screen-slider-slide-title   | mixin for the slide title               | {}                 |
| --cells-full-screen-slider-slide-text    | mixin for the slide text                | {}                 |
| --cells-full-screen-slider-slides-color  | text color                              | #fff               |
| --cells-full-screen-slider_canvas-width  | canvas width                            | auto               |
| --cells-full-screen-slider_canvas-height | canvas height                           | 36vh               |
| --cells-full-screen-slider-bullet-inactive-color | color for the inactive pagination bullets | rgba(255,255,255, .4) |
| --cells-full-screen-slider-bullet-active-color | color for the active pagination bullet | #fff |
