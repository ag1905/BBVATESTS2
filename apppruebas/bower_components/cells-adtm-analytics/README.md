# cells-adtm-analytics

Adobe Tag Manager Analytics web component.

This component listen to some events in the application and send the information related with analytics of the payload to the tracking system.

## Example

```html
<cells-adtm-analytics main-node="app__content" dtm="digitalData"></cells-adtm-analytics>
```

## How it works

The component will receive the payload and it will search the data related with the analytics.

### Templates
```
{
  "currentPage": {
    ......
  },
  "template": {
    "properties": {
      .....
      "analytics": {
        "digitalData": {
          "page.pageInfo.area": "public",
          "page.pageInfo.pageIntent": "transaction",
          "page.pageInfo.pageSegment": "personal"
        }
      }
    }
  }
```

### UI Components

You can attach analytics data everytime you fire an event in your component via establishing an `out` action inside the configuration. 

You have to add the action to be fired to the tracking system. 

#### Example

```
....
"cellsConnections": {
  "in": {},
  "out": {
    "foobar-channel": {
      "bind": "foobar-event",
      "analytics": {
        "action": "event-to-track"
        "digitalData" {
          "application.fulfilllmentModel": "a",
          "application.step": "b",
          "application.type": "c",
          "product.primaryCategory": "d",
          "product.productSubtype": "e",
          "product.productName": "f"
        }
      }
      ......
```

```javascript
this.fire('foobar-event');
```

## Events to listen

### Cells Bridge events

+ template-transition-end

### Custom events

+ track-event

