# cells-avatar-actions-header

`<cells-avatar-actions-header>` displays a header with avatar user and a list of options actived or disabled.

Example:

```html
<cells-avatar-actions-header></cells-avatar-actions-header>
```

## Data model

`operations` with option disabled` Array

```json
[{
 label: 'Transfer',
 id: 'transfer',
 icon: 'coronita:transfer',
 disabled: 'true'
}]
```

`user` Object

```json
{
  'firstName': 'Beatriz',
  'lastName': 'Martín Finch',
  'avatars': {
    'url': 'assets/photo-woman.png'
  }
```


## Styling

The following custom properties and mixins are available for styling:

| Custom property                                  | Description       | Default              |
|:-------------------------------------------------|:------------------|:--------------------:|
| --cells-avatar-actions-header-scope              | scope description | default value        |
| --cells-avatar-actions-header-height             | set global height | 333px                |
| --cells-avatar-actions-header-afer-border-bottom | set border bottom | rem(80px) solid #fff |
| --cells-avatar-actions-header                    | empty mixin       | {}                   |
| --cells-avatar-actions-header-after              | empty mixin       | {}                   |
| --cells-avatar-actions-header-header             | empty mixin       | {}                   |
| --cells-avatar-actions-header-custom             | empty mixin       | {}                   |


@demo demo/index.html