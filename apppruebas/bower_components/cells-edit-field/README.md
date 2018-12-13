# cells-edit-field

> Displays a modal with editable text input

## Example

**Default**:
```html
<cells-edit-field
  placeholder="Alias"
  value="My Alias"
  force-close>
</cells-edit-field>
```

**With custom title**:
```html
<cells-edit-field
  placeholder="Alias"
  value="My Alias"
  title="Edit Alias"
  force-close>
</cells-edit-field>
```

**With variable title**:
```html
<cells-edit-field
  placeholder="Alias"
  value="My Alias"
  title="cells-edit-title-header"
  force-close>
</cells-edit-field>
```

**With custom close icon**:
```html
<cells-edit-field
  placeholder="Alias"
  value="My Alias"
  close-icon="custom:icon"
  force-close>
</cells-edit-field>
```
**With extended validation**:
 ```html
 <cells-edit-field
   placeholder="Numbers"
   value="1234"
   type="tel"
   input-pattern="[0-9]+"
   min-length="1"
   max-length="255"
   force-close>
 </cells-edit-field>
 ```
**With default value**:
```html
<cells-edit-field
  placeholder="Alias"
  value="My Alias"
  default-value="My Alias"
  force-close>
</cells-edit-field>
```

## Dependencies

* Poylmer
* [cells-atom-button](https://globaldevtools.bbva.com/bitbucket/projects/CA/repos/cells-atom-button/browse)
* [cells-bottom-modal](https://globaldevtools.bbva.com/bitbucket/projects/BGCM/repos/cells-bottom-modal/browse)
* [cells-molecule-input](https://globaldevtools.bbva.com/bitbucket/projects/BGCM/repos/cells-molecule-input/browse)

## API

| NAME | Description | Type | Binding |
|:-----|:------------|:-----|:--------|
| placeholder | (for input) Field to be edited | String | IN |
| forceClose | Flags if modal will close on exit | Boolean | IN |
| value | Input value | String | IN |
| defaultValue | Default input value | String | IN |
| title | Header title (can be a key to translate) | String | IN |
| closeIcon | Header icon for close | String | IN |
| inputPattern | Regular expression (*) pattern to validate input value | String | IN |
| minLength | Min. value length | Number | IN |
| maxLength | Max. value length | Number | IN |
| type | Input type | String (default is "text") (**) | IN |
| opened | Flags if modal is open or not | Boolean | IN/OUT |
| open | Opens this modal | Method | IN |
| close | Closes this modal | Method | IN |

(*) [MDN Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
(**) [MDN ElementInput](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input)

## Output Events

| NAME | Description | Payload |
|:-----|:------------|:--------|
| cells-close-edit-field | Fired on closing modal | --- |
| cells-save-edit-field | Fired on saving input | value |


## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-edit-field-scope      | scope description | default value  |
| --cells-edit-field | empty mixin | {} |
| --cells-edit-field-btn-primary | empty mixin | {} |
| --cells-edit-field-btn-transparent | empty mixin | {} |
| --cells-edit-field-btn-transparent-active | empty mixin | {} |
| --cells-edit-field-info__icon-color | mixin applied to info icon color | #5bbeff |
| --cells-edit-field-info__icon | empty mixin | {} |
| --cells-edit-field-info__label | empty mixin | {} |
| --cells-edit-field-molecule-input | empty mixin | {} |
