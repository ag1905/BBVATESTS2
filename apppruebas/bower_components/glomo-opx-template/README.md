# glomo-opx-template

Page template for GloMo OPX, based on [cells-template-coronita](https://globaldevtools.bbva.com/bitbucket/projects/TP/repos/cells-template-coronita/browse)

Example:
```html
<glomo-opx-template>
  <div data-select="app__header">
    <p>template main header</p>  
  </div>
  <div data-select="app__secondary__header">
    <p>template secondary header</p>  
  </div>
  <div data-select="app__main">
    <p>main zone</p>
    <div data-select="app__confirm">
      <p>confirmation zone</p>  
    </div>
  </div>
  <div data-select="app__transactional">
    <p>transactional zone</p>  
  </div>
</glomo-opx-template>
```

## Dependencies

* [iron-collapse](https://github.com/PolymerElements/iron-collapse)
* [paper-scroll-header-panel](https://github.com/PolymerElements/paper-scroll-header-panel)
* [cells-template-animation-behavior](https://globaldevtools.bbva.com/bitbucket/projects/CBH/repos/cells-template-animation-behavior/browse)

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --glomo-opx-template-scope      | scope description | default value  |
| --glomo-opx-template  | empty mixin     | {}             |
| --glomo-opx-template-state-active  | empty mixin     | {}             |
| --glomo-opx-template-section  | empty mixin     | {}             |
| --glomo-opx-template-main-header  | empty mixin     | {}             |
| --glomo-opx-template-secondary-header  | empty mixin     | {}             |
| --glomo-opx-template-app-header  | empty mixin     | {}             |
| --glomo-opx-template-main-header-off-main-header  | empty mixin     | {}             |
| --glomo-opx-template-main-header-off-app-header  | empty mixin     | {}             |
| --glomo-opx-template-main-header-off  | empty mixin     | {}             |
| --glomo-opx-template-seconday-header-on-app-main-header  | empty mixin     | {}             |
| --glomo-opx-template-seconday-header-on-app-secondary-header  | empty mixin     | {}             |
| --glomo-opx-template-seconday-header-on-app-header  | empty mixin     | {}             |
| --glomo-opx-template-seconday-header-on  | empty mixin     | {}             |
| --glomo-opx-template-main  | empty mixin     | {}             |
| --glomo-opx-template-transactional  | empty mixin     | {}             |

## API

Properties:

| NAME | Description | TYPE | BINDING |
|:--- |: --- |:---:|:---:|
|scrollTime | Will be used to delay the firing of 'cells-scroll-complete' event after scrolling into an element. | Number | IN |
|doubleHeader | Flags if template will use two header configurations. | Boolean | IN | 

Methods:

| NAME | Description | Returns | Payload |
|:--- |: --- |:---:|:---:|
| showConfirm | Toggles #app__confirm zone. | --- | --- |
| showMainHeader | Displays #app__header zone. | --- | --- |
| showSecondHeader | Displays #app__secondary__header zone. | --- | --- |
| scrollItemIntoView | Scrolls an HTMLNodeElement to #app__main top | --- | {Event|HTMLNodeElement} |

Events:

| NAME | Description | Payload |
|:--- |: --- |:---:|
| cells-scroll-complete | Fired after scolling an element | HTMLNodeElement scrolled |
| main-header-off | Fired after hiding main header | --- |
| second-header-on | Fired after displaying secondary header | --- |
| second-header-off | Fired after hiding secondary header | --- |
