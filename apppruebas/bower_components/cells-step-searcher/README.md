# cells-step-searcher

> Extends `cells-step` with searcher functionality

Example:

```html
<cells-step-searcher
  id="default"
  title="Default"
  current-step="1"
  max-steps="2"
  scrolled
  active>

  <div class="full">
    <paper-button raised class="navy-button" id="collapser">collapse</paper-button>
    <paper-button raised class="navy-button" id="openSearch">open search</paper-button>
  </div>

  <div class="shared">
    <cells-molecule-input label="This is shared w/ searching mode" disabled></cells-molecule-input>
  </div>

  <div class="filled">
    <span>COLLAPSED</span>
  </div>

  <div class="searcher">
    <paper-button raised class="navy-button" id="closeSearch">close search</paper-button>
  </div>
</cells-step-searcher>
```

## Dependencies

* [cells-step](https://globaldevtools.bbva.com/bitbucket/projects/CO/repos/cells-step/browse)
* [cells-step-behavior](https://globaldevtools.bbva.com/bitbucket/projects/CBH/repos/cells-step-behavior/browse)

## API

**Properties**:

| NAME | Description | Type | Binding |
| --- |: --- |: --- :|: --- :|
| searching [1] | Flags if is searching mode | Boolean | IN/OUT |

----

[1]: *Reflected as attribute*
