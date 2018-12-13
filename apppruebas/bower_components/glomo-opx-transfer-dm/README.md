# glomo-opx-transfer-dm

> CELLS Data Manager for GLOBAL APIS Transfer

Provides *step-by-step* transfer operation resolution and performs AJAX in order to complete transfer operation.

## Services

- [Transfer GLOBAL API v0](http://apisbbva.bitbucket.org/#/global/apis/paymentMethods/transfers)

## Dependencies:

- [cells-step-manager-behavior](https://globaldevtools.bbva.com/bitbucket/projects/CBH/repos/cells-step-behavior/browse/cells-step-manager-behavior.html)
- [bgdmjs-polymer-components](https://globaldevtools.bbva.com/bitbucket/projects/BGDMJS/repos/polymer-components/browse)

## Example:

```html
<glomo-opx-transfer-dm></glomo-opx-transfer-dm>
```

## API

**Properties**:

| Name | Type | Description | Binding |
| --- | --- | --- | --- |
| accounts | Array | Available accounts for current user | IN |
| amount | Number | Amount value to transfer | IN |
| concept | String | Transfer concept (optional) | IN |
| endpoint | String | URL where to perform transaction | IN |
| date | String | User selected date to transfer | IN |
| selectedDestination | String | Selected destination | IN |
| selectedSource | String | Selected source | IN |
| destinationList | Array | Available destinations w/out selected source | OUT |
| sourceList | Array | Available sources | OUT |
| sourceBalance | Number | Selected source current balance | OUT |
| sourceCurrency | String | Selected source major currency | OUT |
| fees | Number | Fee for current operation (if applies) | OUT |
| lastResponse | Object | Operation result | OUT |
| references | Object | References obtained from operation result | OUT |

**Behavior's properties**:

| Name | Type | Description | Binding |
| --- | --- | --- | --- |
| currentStep | Number | Current OPX step | --- |
| maxSteps | Number | Max number of steps (auto-calculated) | --- |
| canExecute | Boolean | Flags if OPX is ready to be executed | OUT |
| lastActiveStep | HTMLElement | Last active step reference. | --- |
| animationTimeout | Number | Delay (in ms) to animate steps | --- |

**Methods**:

| Name | Description | Response |
| --- | --- | --- |
| reset | Reset DM status to default | --- |
| doRequest | Performs operation | --- |
| newOrder | Initializes the DM to perform a new operation | --- |
| cleanUpState | Invoques 'newOrder' | --- |

**Behavior's methods**:

| Name | Description | Response | Params |
| --- | --- | --- | --- |
| _nextStep | Advances into next non-valid step | --- | --- |
| resetSteps | Reset all registered steps | --- | --- |
| resetFollowingSteps | Reset all steps starting from an index | --- | @index: {Number} |
| getLastActiveStep | Returns {lastActiveStep.id} | @event 'cells-scroll-zone' @string | --- |


**Events**:

| Name | Description | Payload |
| --- | --- | --- |
| cells-scroll-zone | Fired after reaching last non-valid step | HTMLElement {lastActiveStep} |
