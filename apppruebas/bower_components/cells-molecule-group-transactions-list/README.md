# cells-molecule-group-transactions-list

[![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)](http://bbva-files.s3.amazonaws.com/cells/bbva-catalog/index.html)

List a set of transactions grouping them by date.

Example:
```html
<cells-molecule-group-transactions-list>
  <span class="header">LAST MOVEMENTS</span>
  <template>
    <div>[[transaction.name]]</div>
  </template>
</cells-molecule-group-transactions-list>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:---------------:|:---------------:| :-------------:|
| --molecule-group-transactions-separation-size  | set separation space size between items     | 1.875rem;             |
| --cells-molecule-group-transactions-list-background  | var :host background-color    | #fff             |
| --cells-molecule-group-transactions-list  | empty mixin     | {}             |
| --cells-molecule-group-transactions-list-group  | mixin to style the container groups     | {}             |
| --cells-molecule-group-transactions-list-date  | var to .transaction-group__date    | #d8be75            |
| --cells-molecule-group-transactions-list-group-date  | mixin to style transaction date     | {}             |
| --cells-molecule-group-transactions-list-group-year  | mixin to .transaction-group__date--year   | {}             |
| --cells-molecule-group-transactions-list-item  | mixin to .transaction-list ::content    | {}             |
| --cells-molecule-group-transactions-list-item-last  | mixin to last .transaction-list ::content | {}  |
| --cells-molecule-group-transactions-list-item-not-first | mixin to not first .transaction-list ::content  | {}  |
| --cells-molecule-group-transactions-list-group-container  |  mixin applied to group date container   | {}             |
| --cells-molecule-group-transactions-list-group-link  |   mixin applied to group link  | {}             |
