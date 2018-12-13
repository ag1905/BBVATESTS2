`cells-sidebar-wow-panel` contains a sidebar panel and a main panel.  The sidebar
and the main panel are side-by-side with drawer on the left.
The drawer will slide in/out to hide/reveal the main panel.

Use the attribute `drawer` to indicate that the element is the sidebar panel and
`main` to indicate that the element is the main panel.

Example:

    <cells-sidebar-wow-panel>
      <div drawer> Drawer panel... </div>
      <div main> Main panel... </div>
    </cells-sidebar-wow-panel>

The drawer and the main panels are not scrollable.  You can set CSS overflow
property on the elements to make them scrollable or use `paper-header-panel`.

Example:

    <cells-sidebar-wow-panel>
      <paper-header-panel drawer>
        <paper-toolbar></paper-toolbar>
        <div> Drawer content... </div>
      </paper-header-panel>
      <paper-header-panel main>
        <paper-toolbar></paper-toolbar>
        <div> Main content... </div>
      </paper-header-panel>
    </cells-sidebar-wow-panel>

An element that should toggle the drawer will automatically do so if it's
given the `paper-drawer-toggle` attribute.  Also this element will automatically
be hidden in wide layout.

Example:

    <cells-sidebar-wow-panel>
      <paper-header-panel drawer>
        <paper-toolbar>
          <div>Application</div>
        </paper-toolbar>
        <div> Drawer content... </div>
      </paper-header-panel>
      <paper-header-panel main>
        <paper-toolbar>
          <paper-icon-button icon="menu" paper-drawer-toggle></paper-icon-button>
          <div>Title</div>
        </paper-toolbar>
        <div> Main content... </div>
      </paper-header-panel>
    </cells-sidebar-wow-panel>

### Styling

To change the main container:

    cells-sidebar-wow-panel {
      --cells-sidebar-wow-panel-main-container: {
        background-color: gray;
      };
    }

To change the drawer container when it's in the left side:

    cells-sidebar-wow-panel {
      --cells-sidebar-wow-panel-left-drawer-container: {
        background-color: white;
      };
    }

To customize the scrim:

    cells-sidebar-wow-panel {
      --cells-sidebar-wow-panel-scrim: {
        background-color: red;
      };
    }

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--cells-sidebar-wow-panel-scrim-opacity` | Scrim opacity | 1
`--cells-sidebar-wow-panel-drawer-container` | Mixin applied to drawer container | {}
`--cells-sidebar-wow-panel-left-drawer-container` | Mixin applied to container when it's in the left side | {}
`--cells-sidebar-wow-panel-main-container` | Mixin applied to main container | {}
`--cells-sidebar-wow-panel-right-drawer-container` | Mixin applied to container when it's in the right side | {}
`--cells-sidebar-wow-panel-scrim` | Mixin applied to scrim | {}

