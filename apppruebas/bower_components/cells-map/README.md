# cells-map

This is a map with markers.

It finds your current location through native geolocation and makes a request to retrieve the promos nearest to you.

It consists of a Google Map Polymer component, a marker with your current location and a series of markers.

This component group commerces by the same location in one marker.

Example:

```html
<cells-map></cells-map>
```


## Styling

The following custom properties and mixins are available for styling:

| Custom property             | Description         | Default       |
|:---------------------------:|:-------------------:|:-------------:|
| --cells-map                 | empty mixin         |{}             |
| --cells-map-height          | map height          |100vh          |
| --cells-map-mapBottom       | empty mixin         |{}             |
| --cells-KMW_colour          | butons color        |#fff           |
| --cells-map-button          | empty mixin         |{}             |
| --cells-map-mapCenterMark   | empty mixin         |{}             |
