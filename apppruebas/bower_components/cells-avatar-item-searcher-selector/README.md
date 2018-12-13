# cells-avatar-item-searcher-selector

displays a list of avatar items, from which one can be chosen and an optional searcher.

Example:

```html
<cells-avatar-item-searcher-selector
  list-items="[[listItems]]">
</cells-avatar-item-searcher-selector>
```

Each item of the list has a swipe to set an action, for example to delete from the list

The list can show a limited number of items with **max-items**. If this property is not setted, the list shows all the items.



## Data model
```
listItems : {
  alias: 'Nombre_001',
  avatar: 'http://www.aciamericas.coop/IMG/arton0006.jpg',
  id: '0006',
  bank: {
    id: 'BBVABC',
    info: 'BBVA Bancomer'
  },
  main: 'Nombre_001 Apellido1_001 Apellido2_001',
  secondary: '1234567890121234',
  identityNumber: '1234567890121234',
  options: [ {
    key: 'delete-contact',
    icon: 'coronita:trash',
    type: 'delete'
  } ]
}
```


## Styling

The following custom properties and mixins are available for styling:

| Custom property                                            | Description       | Default        |
|:-----------------------------------------------------------|:------------------|:--------------:|
| --cells-avatar-item-searcher-selector-scope                | scope description | default value  |
| --cells-avatar-item-searcher-selector-searcher             | empty mixin       | {}             |
| --cells-avatar-item-searcher-selector-avatar-item          | empty mixin       | {}             |
| --cells-avatar-item-searcher-selector-avatar-item-active   | empty mixin       | {}             |
| --cells-avatar-item-searcher-selector-searching-mode       | empty mixin       | {}             |
| --cells-avatar-item-searcher-selector-molecule-input       | empty mixin       | {}             |
| --cells-avatar-item-searcher-selector-action-button        | empty mixin       | {}             |
| --cells-avatar-item-searcher-selector-action-button-text   | empty mixin       | {}             |
| --cells-avatar-searcher-selector-left-swipe-action-content | empty mixin       | {}             |
| --cells-avatar-item-searcher-selector-icon                 | empty mixin       | {}             |
| --cells-avatar-item-searcher-selector-filter-tags          | empty mixin       | {}             |
| --cells-avatar-item-searcher-selector-spinner-container    | empty mixin       | {}             |