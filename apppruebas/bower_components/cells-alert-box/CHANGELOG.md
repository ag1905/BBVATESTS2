# Changelog

## v10.0.0

### Breaking changes

Content inside light DOM cannot be styled using the ::slotted selector, so it has to be styled from the parent component. The following mixins and vars used to style this content have been removed.

#### Removed mixins

--cells-alert-box-content-container-text
--cells-alert-box-content-container-info
--cells-alert-box-content-container-info-icon-child
--cells-alert-box-content-container-error-icon
--cells-alert-box-content-container-alert-icon
--cells-alert-box-content-container-info-icon
--cells-alert-box-content-container-ul
--cells-alert-box-content-container-li
--cells-alert-box-content-container-li-p
--cells-alert-box-content-container-li-p-last
--cells-alert-box-content-container-li-not-last-after

#### Removed vars

--cells-alert-box-content-container-error-icon-color
--cells-alert-box-content-container-alert-icon-color
--cells-alert-box-content-container-li-color
--cells-alert-box-content-container-li-not-last-after-bottom-color
