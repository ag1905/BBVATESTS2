# cells-atom-input

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

An atomic element extending input native element

Example:
```html

<input is="cells-atom-input" type="text" value="value" empty={{isMyValueEmpty}}>

<input is="cells-atom-input" type="text" placeholder="">

<input is="cells-atom-input" type="password" placeholder="" class="input--error">

<input is="cells-atom-input" type="text" disabled>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:---------------:|:---------------:| :-------------:|
| --cells-input--base | gives basic styling for inputs .input--base | see theme-base-catalog  |
| --cells-input--error | .input--error | see theme-base-catalog  |
| --cells-input--focus  | mixin for :focus | see theme-base-catalog  |
| --cells-input--active  | mixin for :active | see theme-base-catalog  |
| --cells-input--disabled  | mixin for :disabled | see theme-base-catalog  |
| --cells-atom-input  | empty mixin | {}  |
| --cells-atom-input-active  | empty mixin for the atom when it's active     | {}  |
| --cells-atom-input-focus   | empty mixin for te focus                      | {}  |
| --cells-atom-input-disabled| empty mixin for the atom when it's disabled   | {}  |
| --cells-atom-input-error   | empty mixin for the error                     | {}  |
| --cells-atom-input-icon    | empty mixin for the icon                      | {}  |
| --cells-atom-input-date    | empty mixin for the date                      | {}  |
| --cells-atom-input-number  | empty mixin for the number                    | {}  |
| --cells-atom-input-xxl     | empty mixin                                   | {}  |
| --cells-atom-input-xl      | empty mixin                                   | {}  |
| --cells-atom-input-l       | empty mixin                                   | {}  |
| --cells-atom-input-m       | empty mixin | {}  |
| --cells-atom-input-s       | empty mixin | {}  |
| --cells-atom-input-xs      | empty mixin | {}  |
| --cells-atom-input-xxs     | empty mixin | {}  |

