# Cells Analytics Collector

Pieza desarrollada de forma independiente al ciclo de vida de Cells, cuya finalidad es la de escuchar los eventos de tipo: 'window.onerror', 'track-event' (cells), 'template-transition-end' (cells), y enviar la información al proveedor de analíticas utilizado en la aplicación (Adobe Analytics o Google Analytics (WIP)).

## INTERCONEXIÓN CELLS & SISTEMA DE ANALÍTICAS

ComponentConnector, de CellsBridge, emite un evento de tipo `'track-event'` cuando una conexión de salida contiene la propiedad `'analytics'`.

La propiedad `'detail'` del payload del evento contendrá los datos definidos en la propiedad `'analytics'` de la conexión del evento para posteriormente ser procesados por la pieza `'CellsAnalyticsCollector'`.

fragmento de código de cells-bridge (`src/component-connector.js`)

```javascript
ComponentConnector::wrapEvent() {
  ...
  if (connection.analytics) {
    eventManager.emit('track-event', {
      event: event,
      detail: connection.analytics
    });
  }
  ...
}
```

ejemplo de evento con propiedad analytics:

*app/composerMocksTpl/dashboard.js*

```javascript
{
  pages: ...,
  currentPage: {
    ...
  },
  template: {
    ...
  },
  components: [
    ...
    {
      ...
      properties: {
        ...
        cellsConnections: {
          in: {
            ...
          },
          out: {
            accounts: {
              bind: 'accounts-changed',
              analytics: {
                ...
              }
            }
          }
        }
      }
    }
    ...
  ]
}
```

## CELLS ANALYTICS COLLECTOR

Pieza desarrollada de forma independiente al ciclo de vida de Cells, cuya finalidad es la de escuchar los eventos de tipo: 'window.onerror', 'track-event' (cells), 'template-transition-end' (cells), y enviar la información al proveedor de analíticas utilizado en la aplicación (Adobe Analytics o Google Analytics (WIP)).

## ESTRUCTURA DEL OBJETO ANALYTICS

```javascript
analytics: {
  action: 'event-to-track',
  digitalData: {
    'application.fulfilllmentModel': 'a',
    'application.step': {
      bind: '0.name'
    },
    'application.type': {
      bind: '0.name'
    },
    'product.primaryCategory': 'd',
    'product.productSubtype': 'e',
    'product.productName': 'f',
    'user.country': {
      bind: '0.name'
    }
  }
}
```

La propiedad `'action'` del objeto `'analytics'`, contiene la acción que será enviada al sistema de tracking de datos (posteriormente será utilizada por los filtros en ADTM). referencia: https://drive.google.com/file/d/0B1LHjxcYuyz1ckJQMThpYTBqM1U/edit

La propiedad `'digitalData'`, contiene los datos de analíticas que actualizarán los datos definidos para el DataLayer y que serán enviados al sistema de tracking. referencia: https://drive.google.com/file/d/0B1LHjxcYuyz1ckJQMThpYTBqM1U/edit

La estructura de datos del objeto analytics se corresponde con la estructura de datos del `'DataLayer'` definida por el equipo de Digital Marketing Solutions. referencia: https://drive.google.com/file/d/0B1LHjxcYuyz1ckJQMThpYTBqM1U/edit

__IMPORTANTE: La definición del DataLayer, así como de sus propiedades y los tipos de actions, están basados en el documento previamente mencionado, definidos por parte de Global Digital Marketing Solutions.__

__Es posible redefinir el DataLayer durante la inicialización del colector de analíticas:__ ver sección `'REDEFINICIÓN DATALAYER'`

Los valores de las propiedades definidas dentro del objeto analytics, pueden obtener su valor de:

- Forma estática

```javascript
'application.type': 'XXXXX'
```

- Forma dinámica a través de los valores almacenados en el canal de comunicación al que están enlazados (ya sea de forma parcial, total, varios niveles de profundidad de propiedades, elementos, etc...)

	- 	acceso directo a valor (propiedad):

		```javascript
		'application.type': {
		  bind: 'name'
		},
		```

	- 	acceso directo a valor (propiedad), varios niveles de profundidad, primer elemento de array (descriptions):

		```javascript
		'application.type': {
		  bind: 'descriptions.0.value'
		},
		```

	- 	acceso a valor (propiedad) del primer elemento del array almacenado en el canal:

		```javascript
		'application.type': {
		  bind: '0.name'
		},
		```

	- 	acceso a valor completo almacenado en el canal:

		```javascript
		'application.type': {
		  bind: '*'
		},
		```

- *(Aplicación Híbrida)* Forma dinámica a través de los datos del dispositivo, haciendo uso de forma interna a través de los métodos definidos en el helper de adobe ADB_Helper, y del plugin de cordova '`adobe-mobile-services`'.

	- 	Identificador de usuario del dispositivo (*getUserIdentifier está definido como método de ADB_Helper*):

		```javascript
		'userIdentifier': {
        cordova: 'getUserIdentifier'
      },
		```

### Ejemplo analíticas tipo 'track' (evento cells: 'track-event', action analytics: 'event-to-track')

*app/composerMocksTpl/dashboard.js*

```javascript
cellsConnections: {
  in: {
    ...
  },
  out: {
    accounts: {
      bind: 'accounts-changed',
      analytics: {
        action: 'event-to-track',
        digitalData: {
          'application.fulfilllmentModel': 'a',
          'application.step': {
            bind: '0.name'
          },
          'application.type': {
            bind: '0.name'
          },
          'product.primaryCategory': 'd',
          'product.productSubtype': 'e',
          'product.productName': 'f',
          'user.country': {
            bind: '0.name'
          }
        }
      }
    }
  }
}
```

### Ejemplo analíticas tipo 'footprint' (evento cells: 'template-transition-end', action analytics: 'page-view')

*app/composerMocksTpl/dashboard.js*

```javascript
{
  pages: ...,
  currentPage: {
    url: '/dashboard',
    params: '[]'
  },
  template: {
    tag: 'cells-template-static-zones',
    properties: {
      disableEdgeSwipe: true,
      analytics: {
        action: 'page-view',
        digitalData: {
          'page.pageInfo.area': 'public',
          'page.pageInfo.pageIntent': 'transaction',
          'page.pageInfo.pageSegment': 'personal',
          'page.pageInfo.level1': 'accounts',
          'page.pageInfo.level2': 'make a transfer',
          'page.pageInfo.level3': 'app complete page'
        }
      }
    }
  }
```

## Pasos necesarios para añadir adobe analytics en aplicación Cells

### Recomendaciones

Es recomendable la instalación del plugin para Chrome ['dataslayer'](https://chrome.google.com/webstore/detail/dataslayer/ikbablmmjldhamhcldjjigniffkkjgpo), que nos permite depurar y testear el envío de métricas a Adobe.

### Añadir dependencia al repositorio "Cells-analytics-collector":

*bower.json*

```json
{
  "cells-analytics-collector": "ssh://git@globaldevtools.bbva.com:7999/CEL/cells-analytics-collector.git"
}
```

### Modificación 'app/config/env.json':

*app/config/env.json original:*

```json
{
  "deployEndpoint": "",
}
```

*app/config/env.json actualizado:*

```json
{
  "mainNode": "app__content",
  "deployEndpoint": ""
}
```

### Modificación 'app/scripts/app.js':

*app/scripts/app.js original:*

```javascript
new window.CellsPolymerBridge({
  mainNode: "app__content"
  ...
});
```

*app/scripts/app.js actualizado:*

```javascript
new window.CellsPolymerBridge({
  mainNode: window.AppConfig.mainNode,
  ...
});
```

### Incusión script adobe dtm dentro de 'app/tpls/index.tpl' (justo antes de cierre etiqueta head):

```html
<script src="//assets.adobedtm.com/95bb966a4c61b200a089c37679aaf96e22114787/satelliteLib-c18cf592a41a0f15f50343153f8a1e82673b64e1-staging.js"></script>
```
### Inclusión script 'app-analytics.js' dentro de 'app/scripts'

*app-analytics.js*

```javascript
(function (document) {
  'use strict';

  function loadAnalyticsManager(cb) {
    var script = document.createElement('script');

    script.onload = cb || null;
    script.src = window.AppConfig.componentsPath + 'cells-analytics-collector/dist/cells-adobe-analytics-collector.min.js';
    script.async = 1;

    document.head.appendChild(script);
  }

  function initAnalytics() {
    var analytics = new window.AdobeAnalyticsCollector({
      mainNode: window.AppConfig.mainNode
    });
  }

  loadAnalyticsManager(initAnalytics);
}(document));
```

### Referenciado script 'app-analytics.js' dentro de 'app/tpls/index.tpl'

```html
<!-- build:js scripts/app-dist.js async -->
<script src="vendor/bowser.min.js"></script>
<script src="scripts/app-config.js"></script>
<script src="scripts/app-analytics.js"></script>
<script src="scripts/app.js" async></script>
<!-- endbuild-->
```
### INCLUSIÓN DE METADATOS PARA TRACKEO DE ANALÍTICAS / EVENTOS

Ver sección anterior.

### REDEFINICIÓN DATALAYER

Inicialmente, se ha creado un '`DataLayer`' siguiendo la estructura  definida por el equipo de Digital Marketing Solutions. referencia: https://drive.google.com/file/d/0B1LHjxcYuyz1ckJQMThpYTBqM1U/edit

Es posible que la estructura del '`DataLayer`' no se ajuste a los requisitos de nuestro proyecto, por lo que es posible redefinir el mismo, según nuestras necesidades, en la fase de instanciación del collector:

*app-analytics.js*

```javascript
(function (document) {
  'use strict';

  function loadAnalyticsManager(cb) {
    var script = document.createElement('script');

    script.onload = cb || null;
    script.src = window.AppConfig.componentsPath + 'cells-analytics-collector/dist/cells-adobe-analytics-collector.min.js';
    script.async = 1;

    document.head.appendChild(script);
  }

  function initAnalytics() {
    var analytics = new window.AdobeAnalyticsCollector({
      mainNode: window.AppConfig.mainNode,
      dataLayerName: 'myAnalyticsData',
      dataLayer: {
      	application: 'Cells Analytics PoC',
      	version: '0.01',
      	userId: '',
      	page: {
      		name: '',
      		url: '',
      		...
      	}
      }
    });
  }

  loadAnalyticsManager(initAnalytics);
}(document));
```

*app/composerMocksTpl/dashboard.js*

```javascript
{
  pages: ...,
  currentPage: {
    url: '/dashboard',
    params: '[]'
  },
  template: {
    tag: 'cells-template-static-zones',
    properties: {
      disableEdgeSwipe: true,
      analytics: {
    	action: 'page-view',
		myAnalyticsData: {
			'userId': {
				cordova: 'getUserIdentifier'
			},
          'page.name': 'public',
          'page.url': 'transaction'
        }
      }
    }
  }
```

De esta forma, *NO* haremos uso de las propiedades definidas por defecto en el DataLayer, ni tampoco de la propiedad definida por defecto donde se almacenan los datos (*myAnalyticsData* en lugar de *digitalData*), y podremos ajustarlo a nuestras necesidades.
