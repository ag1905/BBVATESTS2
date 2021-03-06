# cells-step-behavior

Version: **3.0.0**

`CellsBehaviors.StepBehavior` sets a common interface for operative step elements.

## NOTICE

Starting from version **3.0.0**, in order to get full functionality is suggested to use [glomo-opx-template](https://globaldevtools.bbva.com/bitbucket/projects/TP/repos/glomo-opx-template/browse).

If your `<cells-step-wrapper/>` component requires to implement Polymer's life-cycle methods (`attached`, `created`, `ready`, `detached`), **ensure** you previously call this behaviors methods (if apply):

```javascript
CellsBehaviors.StepImplBehavior.attached.call(this, ...arguments);
```

```javascript
CellsBehaviors.StepContainerBehavior.ready.call(this, ...arguments);
```

## Import

1) Import the behavior in your component:

```html
<link rel="import" href="../cells-step-behavior/cells-step-behavior.html"/>
```

2) Add CellsBehaviors.StepBehavior to the behaviors list in the JS file or script of your component:

```javascript
behaviors: [CellsBehaviors.StepBehavior]
```

## Contents

`StepBehavior` imports following behaviors:
- StepPopBehavior
- StepImplBehavior
- StepContainerBehavior

Additionaly also exists:
- StepManagerBehavior

### StepPropBehavior

> Declares shared properties between a <cells-step-wrapper/> component and <cells-step/>

Properties [1]:

| NAME | DESCRIPTION | TYPE | BINDING|
| --- | --- | --- | --- |
| active | Flags if step is active or not | Boolean | IN/OUT |
| changeLabel | Label for the change button | String | IN |
| collapsed | Flags if step is collapsed or not | Boolean | IN/OUT |
| currentStep | Step's index orde | Number | IN |
| decorated | Flags if step should apply special CSS styles | Boolean | IN/OUT |
| fixed | Flags if step if fixed and cannot be edited | Boolean | IN/OUT |
| id | Step's unique identifier | String | IN |
| lastStep | Flags if steps is last step | Boolean | OUT |
| maxSteps | Max. available number of steps | Number | IN |
| next | Flags if step is next to active one | Boolean | IN/OUT |
| previous | Flags if step is previous to active one | Boolean | IN/OUT |
| scrolled | Flags if step's been scrolled out of view | Boolean | IN/OUT |
| title | Step's title | String | IN |

### StepImplBehavior

> Declares observers and computed methods over properties.

Properties:

| NAME | DESCRIPTION | TYPE | BINDING|
| --- | --- | --- | --- |
| activeDelay | Time (in ms.) to delay toggle of `active` property | Number (1) | IN |

Methods:

| NAME | DESCRIPTION | RETURNS | PARAMS |
| --- | --- | --- | --- |
| _fixedObserver | Private observer callback for property <em>fixed</em> | void | Event |
| _isScrolled | Observer for properties <em>collpased</em>, <em>active</em> and <em>previous</em> | void | @`collapsed` @`active` @`previous` |
| close | Close steps and set its output values [2] | void | void |
| initialize | Initializes the step [3] | void | void |
| isValid | Validates the step [2] | Boolean | void |
| reset | Resets the step's state [2] | void | void |
| scrollComplete | Activates this step after `activeDelay` time | void | HTMLElement |

Events:

| NAME | DESCRIPTION | PAYLOAD
| --- | --- | --- |
| register-step | Fired at `attached` | {index:{Number.`currentStep`}, node: {Object.this}} |

### StepContainerBehavior

> Provides properties and methods for any `<cells-step-wrapper/>` component.

Properties:

| NAME | DESCRIPTION | TYPE | BINDING|
| --- | --- | --- | --- |
| containerClassName | `<cells-step-wrapper/>` container class name | String | IN |

### StepManagerBehavior

> Provides properties and methods for any OPX manager

Properties:

| NAME | DESCRIPTION | TYPE | BINDING|
| --- | --- | --- | --- |
| animationTimeout | Animation delay to advance into next step (in ms.) | Number (1500) | IN/OUT |
| autoActivateStep | Flags if first 'next' step should be active by default | Boolean | IN |
| canExecute | Flags if OPX can be executed | Object | OUT |
| currentStep | Current active step | Number | OUT |
| decorateSteps | Flags if steps should toggle property `decorated` | Boolean | IN |
| hasFinished | Flags if OPX has finished and can be close or repeat | Boolean | OUT |
| lastActiveStep | Last active step reference | Object | OUT |
| maxSteps | Max. number of available steps | Number | OUT |
| _lastResponse | Last response obtained from server | Object | --- |
| _steps | Map of registered steps | Object | --- |

Methods:

| NAME | DESCRIPTION | RETURNS | PARAMS |
| --- | --- | --- | --- |
| getLastActiveStep | Returns last active step | Object | void |
| getLastStep | Returns last registered step | Object | void |
| registerStep | Registers a new step | --- | @`{index: {Number}, node: {Object}} |
| resetFollowingSteps | Resets all steps starting from a position | --- | @`index` {Number} |
| resetSteps | Resets all registered steps | --- | --- |
| _addDecoration | Toggles `decorated` property for registered steps | --- | --- |
| _canExecute | Calculates the value of `canExecute` | --- | --- |
| _nextStep | Calls `__nextStep` after Polymer's next render | --- | --- |
| _resetStepProps | Resets all step's properties | --- | --- |
| __gotoNext | Advances to last active but not valid step | --- | @`activeSteps` {Object[]} |
| __nextStep | Calculates `activeSteps` and calls `__gotoNext` | --- | --- |

Events:

| NAME | DESCRIPTION | PAYLOAD
| --- | --- | --- |
| cells-scroll-zone | Fired on getting last active step | {Object.`_lastActiveStep`} |


## How to?

[cells-step]() component by default includes `cells-step-prop-behavior`.

Your step-alike component should include `cells-step-behavior` and propagate its properties defined by `prop` behavior into its `cells-step` component:

```html
<link rel="import" href="../cells-step-behavior/cells-step-behavior.html"/>
<dom-module id="my-cells-step-wrapper"
  <template>
    <cells-step
      fixed="[[fixed]]"
      active="[[active]]"
      collapsed="[[colapsed]]"
      scrolled="[[scrolled]]"
      previous="[[previous]]"
      next="[[next]]"
      title="[[title]]"
      current-step="[[currentStep]]"
      max-steps="[[maxSteps]]">
      <div class="filled">
        <!-- on collapse eq. true -->
      </div>
      <div class="full">
        <!-- on collpase eq. false -->  
      </div>
    </cells-step>
  </template>
  <script>
    Polymer({
      is: 'my-cells-step-wrapper',
      behaviors: [
        CellsBehaviors.StepBehavior
      ],
      isValid: function() {
        return true;
      },
      reset: function() {
        //do reset
      }
    });
  </script>
</dom-module>
```

---

[1]: *Every boolean value is reflected as attribute*

[2]: *Should be implemented by any `<cells-step-wrapper/>`*

[3]: *Launched in `attached` life-cycle method*
