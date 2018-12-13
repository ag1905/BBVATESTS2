# cells-edit-field-modal

> Displays a modal with editable text input

## Example

**Default**:
```html
<cells-edit-field-modal 
  placeholder="Alias" 
  title="Edit alias" 
  value="Mock">
</cells-edit-field-modal>
```

**Custom**:
```html
<cells-edit-field-modal 
  id="onlyNumbers" 
  title="From 3 to 5 numbers"  
  pattern="[0-9]{3,5}" 
  min-length="3" 
  max-length="5" 
  placeholder="Fromt 3 to 5 Numbers">
</cells-edit-field-modal>
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
| value | Default input value | String | IN |
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
| --cells-edit-field-modal-scope      | scope description | default value  |
| --cells-edit-field-modal | empty mixin | {} |
| --cells-edit-field-modal-modal-body | empty mixin | {} |
| --cells-edit-field-modal-modal-footer | empty mixin | {} |
| --cells-edit-field-modal-modal-buttons | empty mixin | {} |
| --cells-edit-field-modal-input | empty mixin | {} |
| --cells-edit-field-modal-btn-primary | empty mixin | {} |
| --cells-edit-field-modal-btn-transparent | empty mixin | {} |
| --cells-edit-field-modal-btn-transparent-active | empty mixin | {} |
