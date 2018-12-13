# CHANGELOG

## v10.1.0

- Added "pre-dialog" slot to add custom content like a closing button or a text before the dialog box.

## v3.0.0

- Removed label, labelledby and describedby properties, just use aria-label, aria-labelledby and aria-describedby on the component.

- Opening/closing the modal is managed through the property "open". Removed property "_open" and public methods "show" and "hide".

- Role dialog set by default, role alertdialog can be set declaratively on the component.

- Dialog made fixed by default.

## v2.0.0

- rightIcon changed by closeIcon

- Custom properties and mixins: changed names, added new ones.

- Added accessibility properties, now user must provide label or labelledby properties. User can also use `alert-role` attribute to change the dialog role to "alertdialog".

- `focus-target` attribute must be used if necessary to specify focus target inside the dialog.

- Helper class `fixed` can be used to make the dialog fixed on the page. Overlay position is fixed by default.

- Events have been renamed to include the component name. For example, `modal-opened` is now `cells-middle-modal-opened`
