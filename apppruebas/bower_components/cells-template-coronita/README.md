# cells-template-coronita

## A set of zones elements for your template. It includes:

__cells-template-coronita__ contains a drawer panel and a main panel. The drawer and the main panel are side-by-side with drawer on the left.

  ```app__header``` - A container element for top app.

  ```app__main``` - A container element main content and general manager scroll.

  ```app__footer``` - A container element for bottom app.

  ```app__complementary``` - A container element for drawer. [```Navigation drawer*```](https://www.google.com/design/spec/patterns/navigation-drawer.html)

  ```app__overlay``` - A container element for overlay all content.

  ```app__transactional``` - A container element that positions transverse layers.

[__*The navigation drawer slides in from the left and contains the navigation destinations for your app.__](https://www.google.com/design/spec/patterns/navigation-drawer.html)

Example cells context: *(view demo for declarative app)*
```html
<cells-template-coronita></cells-template-coronita>
```
## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:---------------|:---------------| :-------------:|
| --app__main-padding-top | padding top scroll section | 0 |
| --app__main-padding-bottom | padding bottom scroll section | 0 |
| --paper-scroll-header-container | {} | display: flex |
| --app__section-zindex | z-index  .app__section | 0  |
| --app__section-bg | background-color  .app__section | #fff  |
| --app__header-zindex | z-index  .app__header | 0  |
| --app__complementary-zindex | z-index  .app__complementary | 0  |
| --app__overlay-zindex | z-index  .app__overlay | 0  |
| --app__transactional-zindex | z-index  .app__transactional | 0  |
| --app__complementary-width | width  .app__complamentary | 100%  |
| --cells-template-coronita | empty mixin for :host | {}  |
| --cells-template-coronita-state-active | empty mixin for :host([state="active"]) | {}  |
| --cells-template-coronita-containersection | empty mixin for .app-container, .app__section | {}  |
| --cells-template-coronita-section | empty mixin for .app__section | {}  |
| --cells-template-coronita-header | empty mixin for .app__header | {}  |
| --cells-template-coronita-relative-main | empty mixin for :host[relative-main] .app__main | {}  |
| --cells-template-coronita-main | empty mixin for .app__main | {}  |
| --cells-template-coronita-header-maincontainer | empty mixin for paper-scroll-header-panel ::content #mainContainer | {}  |
| --cells-template-coronita-maincontainer | empty mixin for :host(.overflow-initial)::content #mainContainer | {}  |
| --cells-template-coronita-complementary | empty mixin for .app__complementary | {}  |
| --cells-template-coronita-overlay | empty mixin for .app__overlay | {}  |
| --cells-template-coronita-transactional | empty mixin for .app__transactional | {}  |
