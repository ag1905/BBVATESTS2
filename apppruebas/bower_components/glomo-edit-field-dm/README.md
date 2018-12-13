# glomo-edit-field-dm

Datamanager to edit field

Example:
```html
<glomo-edit-field-dp></glomo-edit-field-dp>
```

It exposes `last-response`, `last-error` and `last-request` as properties that will be updated (as the case may be) once `generateRequest` is called.
Also, It fires `response`, `error` and `request-in-progress`.
