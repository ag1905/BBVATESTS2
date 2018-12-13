# bbva-auth

Data provider description.

Example Auth with ASO:
```html
<bbva-auth></bbva-auth>
```

Example Auth with Armadillo:
```html
<bbva-auth-armadillo></bbva-auth-armadillo>
```

It exposes `last-response`, `last-error` and `last-request` as properties that will be updated (as the case may be) once `generateRequest` is called.
Also, It fires `response`, `error` and `request-in-progress`.