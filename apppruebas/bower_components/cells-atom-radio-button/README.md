# cells-atom-radio-button

This component has the behavior of a common/native raddio-button but it's' styled
according to buzz.

It fires a 'on-iron-signal-radio-change' event which should be handled with an
<iron-signals> element (https://github.com/PolymerElements/iron-signals/blob/master/README.md)

<iron-signals on-iron-signal-radio-change="radioButtonChangeHandler"></iron-signals>

radioButtonChangeHandler is implmented in the cells-atom-radio-button JS file.

If you want a set of cells-atom-radio-button's to only allow one within the set,
give them the same 'name' attribute value.

Example:
```html
<cells-atom-radio-button name="name" checked>Label 1</cells-atom-radio-button>
<cells-atom-radio-button name="name">Label 2</cells-atom-radio-button>
<cells-atom-radio-button checked disabled>Label 3 (Disabled)</cells-atom-radio-button>
<cells-atom-radio-button disabled>Label 4 (Disabled)</cells-atom-radio-button>
```

## Dependencies

```
"polymer": "Polymer/polymer#v1.0.0",
"iron-checked-element-behavior": "polymerElements/iron-checked-element-behavior#~1.0.2"
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:---------------:|:---------------:| :-------------:|
| --cells-atom-radio-button-checked-color  | Color of the point that shows the radio button when checked | #44A718|
| --cells-btn--radio-disabled | Radio button disabled | {} |
| --cells-btn--radio-focus | Radio button disabled | {} |
| --cells-text-size-m | Font size of the label | {} |
| --cells-atom-radio-button-radius | Radius of the radio button| 50%|
| --cells-btn--radio-outter| Radio button's outter circle styles | {}|
| --cells-btn--radio-inner| Radio button's inner circle styles | {}|
| --cells-atom-radio-button          | Empty mixin     | {} |
| --cells-atom-radio-button-after    | Empty mixin     | {} |
| --cells-atom-radio-button-before   | Empty mixin     | {} |
| --cells-atom-radio-button-radio    | Empty mixin     | {} |
| --cells-atom-radio-button-focus    | Empty mixin     | {} |
| --cells-atom-radio-button-disabled | Empty mixin     | {} |
| --cells-atom-radio-button-checked  | Empty mixin     | {} |

## Properties

The following custom properties in this component:

| Custom property | Description     | Default        |
|:---------------:|:---------------:| :-------------:|
| checked         |     Boolean     |        false   |
| disabled          |     Boolean     |        false   |
| name          |     String     |        ''   |
