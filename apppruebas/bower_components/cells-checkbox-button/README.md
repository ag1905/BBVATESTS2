# cells-checkbox-button

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

`cells-checkbox-button` generates a custom checkbox button that can be used inside a `cells-checkbox-group` component.

The checkbox can have the checked or unchecked state, and also be disabled or enabled. You can pass icons to it for its checked and unchecked status.

Examples:
```html
<cells-checkbox-button>Label for the checkbox button</cells-checkbox-button>
```

```html
<cells-checkbox-button checked>Label for the checkbox button</cells-checkbox-button>
```

```html
<cells-checkbox-button disabled>Label for the checkbox button</cells-checkbox-button>
```

```html
<cells-checkbox-button icon="coronita:creditcard" icon-check="coronita:checkmark">Example checkbox button</cells-checkbox-button>
```


## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

| Custom property 											| Description     						| Default	|
|:----------------------------------------------------------|:--------------------------------------|:---------:|
| --cells-checkbox-button 										| Empty mixin 							| {} 		|
| --cells-checkbox-button-checkbox-size 						| Checkbox width & height 				| rem(30px) |
| --cells-checkbox-button-checkbox-background-color 			| Checkbox background color 			| #f2f2f2 	|
| --cells-checkbox-button-checkbox 								| Empty mixin 							| {} 		|
| --cells-checkbox-button-label-text-size 						| Checkbox label font size 				| rem(13px) |
| --cells-checkbox-button-label-color 							| Checkbox label text color 			| #121212 	|
| --cells-checkbox-button-label 								| Empty mixin 							| {} 		|
| --cells-checkbox-button-label-checked								| Empty mixin 							| {} 		|
| --cells-checkbox-button-atom-icon-checked								| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-size 							| Checkbox inner icon width & height 	| rem(18px) |
| --cells-checkbox-button-icon-color 							| Checkbox inner icon color 			| #666 		|
| --cells-checkbox-button-icon  								| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon_checked  						| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon_unchecked  						| Empty mixin 							| {} 		|
| --cells-checkbox-button-checkbox-check-size 					| Checkbox inner check width & height 	| rem(18px) |
| --cells-checkbox-button-checkbox-check-background-color 		| Checkbox inner check background color | #2a86ca 	|
| --cells-checkbox-button-checkbox-checked 						| Empty mixin 							| {} 		|
| --cells-checkbox-button-checked 								| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon_checked-checked  				| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-color-checked 					| Checkbox inner icon color checked		| #2a86ca 	|
| --cells-checkbox-button-icon-checkbox-size 					| Icon checkbox width & height 			| rem(60px) |
| --cells-checkbox-button-icon-checkbox-background-color 		| Icon checkbox background color 		| #f4f4f4 	|
| --cells-checkbox-button-icon-checkbox 						| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-icon-size 						| Icon checkbox inner icon width & height 	| rem(26px) |
| --cells-checkbox-button-icon-icon-color 						| Icon checkbox inner icon color 		| #666 		|
| --cells-checkbox-button-icon-icon 							| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-icon_checked 					| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-icon_unchecked 					| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-label-color 						| Icon checkbox label text color 		| #666 		|
| --cells-checkbox-button-icon-label 							| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon 									| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-checkbox-check-background-color 	| Icon checkbox checked background color 	| #004481 	|
| --cells-checkbox-button-icon-checkbox-checked 				| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-check-icon-color 				| Icon checkbox checked inner icon color 	| #fff 		|
| --cells-checkbox-button-icon-icon-checked 					| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-icon_checked-checked 			| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-icon_unchecked-checked 			| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-check-label-color 				| Icon checkbox checked label text color 	| #004481 	|
| --cells-checkbox-button-icon-label-checked 					| Empty mixin 							| {} 		|
| --cells-checkbox-button-icon-checked 							| Empty mixin 							| {} 		|
| --cells-checkbox-button-disabled-opacity 						| Disabled checkbox opacity 			| 0.3 		|
| --cells-checkbox-button-disabled-checkbox-background-color 	| Disabled checkbox background color 	| #e9e9e9 	|
| --cells-checkbox-button-disabled-checkbox 					| Empty mixin 							| {} 		|
| --cells-checkbox-button-disabled 								| Empty mixin 							| {} 		|