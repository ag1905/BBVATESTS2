# glomo-opx-payments-dm

**NOTICE**: This component status is ***Work in progress***.

DataManager to handle operative *bill payments* in **GloMo** project.

Example:

```html
<glomo-payment-services-dm
  host="http://localhost:8100">
</glomo-payment-services-dm>
```

## Payments GLOBAL APIs

This DM consumes data from */payments* as defined at:

* [API](http://apisbbva.bitbucket.org/#/global/apis/paymentMethods/payments)
* [GIT](https://bitbucket.org/apisbbva/global-apis-paymentmethods-payments-v0#)

## Dependencies

* [Polymer](https://www.polymer-project.org/1.0/)
* [cells-dp-global-apis-payments](https://globaldevtools.bbva.com/bitbucket/projects/BBVACELLSAPI/repos/cells-dp-global-apis-payments/browse)
* [CellsStepManagerBehavior](https://globaldevtools.bbva.com/bitbucket/projects/CBH/repos/cells-step-behavior/browse/cells-step-manager-behavior.html)

## Canonical Data Model (CDM)

* [Services Payments](https://globaldevtools.bbva.com/bitbucket/projects/CM/repos/cells-models-catalog/browse/lib/models/service-payments.js)
* [Services](https://globaldevtools.bbva.com/bitbucket/projects/CM/repos/cells-models-catalog/browse/lib/models/services.js)
* [Stored Services](https://globaldevtools.bbva.com/bitbucket/projects/CM/repos/cells-models-catalog/browse/lib/models/stored-services.js)

---

## DM API

**Properties**:

| Name | Type | Description | Binding |
| --- | --- | --- | --- |
| accounts | Object[] | Accounts for current user | IN |
| amount | Number | Amount to pay | IN |
| billNumber | String | Bill number reference | IN |
| concept | String | Payment concept (optional) | IN |
| currency | String | OPX Currency | IN |
| fees | Object | Fees from OPX result | OUT |
| host | String | URI base host where to perform requests | IN |
| scheduledDate | String | ISO-8601 scheduled date to perform this OPX | IN |
| selectedAccount | Object | Selected account for being changed | IN |
| selectedService | Object | Selected service to pay | IN |
| services | Object | Retrieved payload from server | OUT |
| storedServices | Object | Retrieved payload from server | OUT |
| _isSimulating | Boolean | Flags if service payment should simulate operation (private) | --- |

Plus *[CellsStepManagerBehavior](https://globaldevtools.bbva.com/bitbucket/projects/CBH/repos/cells-step-behavior/browse/cells-step-manager-behavior.html)* properties.

**Methods**:

| Name | Description | Input | Output |
| --- | --- | --- | --- |
| getServices | Retrieves both `services` and `storedServices` from server | --- | --- |
| getPaymentServices | Retrieves `services` from server | --- | --- |
| getPaymentStoredServices | Retrieves full `storedServices` from server | --- | --- |
| savePayment | POST a new service payment into server | --- | --- |
| getFees | POST a new service payment but simulated | --- | --- |

**Events**:

| Name | Description |
| --- | --- |
| service-payments-request-error | Fired on error `services` response |
| service-payments-request-success | Fired on successful `services` response |


