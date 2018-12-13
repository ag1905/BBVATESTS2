# cells-step-service-selector

Contains the logic for a service selector step in an operative.

## Dependencies

* [cells-i18n-behavior](https://globaldevtools.bbva.com/bitbucket/projects/CBH/repos/cells-i18n-behavior/browse)
* [cells-service-selector](https://globaldevtools.bbva.com/bitbucket/projects/CO/repos/cells-service-selector/browse)
* [cells-avatar-item](https://globaldevtools.bbva.com/bitbucket/projects/BGCM/repos/cells-avatar-item/browse)
* [cells-step-searcher](https://globaldevtools.bbva.com/bitbucket/projects/CO/repos/cells-step-searcher/browse)
* [cells-step-behavior](https://globaldevtools.bbva.com/bitbucket/projects/CBH/repos/cells-step-behavior/browse)
* [cells-molecule-input](https://globaldevtools.bbva.com/bitbucket/projects/BGCM/repos/cells-molecule-input/browse)

## Locale Keys

| KEY | EN | ES | es_CL | es_MX |
|:---|:---|:---|:---|:---|
| cells-step-service-selector-view-all | "View all" | "Ver todos" | "Ver todos" | "Ver todos" |
| cells-step-service-selector-saved | "Saved" | "Guardados" | "Guardados" | "Guardados" |
| cells-step-service-selector-service-search | "Search service" | "Buscar servicio" | "Buscar servicio" | "Buscar servicio" |
| cells-step-service-selector-no-match | "No match found" | "No se ha obtenido ningún resultado" | "No se ha obtenido ningún resultado" | "No se ha obtenido ningún resultado" |


## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-step-service-selector-scope      | scope description | default value  |
| --cells-step-service-selector  | empty mixin     | {}             |

## API

Properties:

| NAME | Description | Type | Binding |
|:--- |:--- |:---:|:---:|
| services | Complete list of services | Array | IN |
| storedServices | Services stored by user | Array | IN |
| selected | Selected service by user | Object | OUT |
| listTitle | Title of the complete list | String | IN |
| searching [1] | Flags if steps is under search mode | Boolean | IN/OUT |

This component inherits **cells-step-behavior** API and methods.

---

[1]: *Reflected as attribute, applies styles modifications*
