# &lt;cells-notification-list&gt;

Your component description.

Example:
```html
<cells-notification-list></cells-notification-list>
```

## Icons

Since this component uses icons, it will need an [iconset](https://bbva.cellsjs.com/guides/best-practices/cells-icons.html) in your project as an [application level dependency](https://bbva.cellsjs.com/guides/advanced-guides/application-level-dependencies.html). In fact, this component uses an iconset in its demo.

## Styling

The following custom properties and mixins are available for styling:

| Custom property                                                         | Description                                                         | Default        |
|:----------------                                                        |:----------------                                                    |:---------------|
| --cells-notification-list;                                              | mixin applied to :host                                              | {} |
| --cells-fontDefault                                                     | Mixin applied to :host font-family                                  | sans-serif  |
| --cells-notification-list-ul-li;                                        | mixin applied to  ul and li                                         | {} |
| --cells-notification-list-list;                                         | mixin applied to  main ul                                           | {} |
| --cells-notification-list-date;                                         | mixin applied to  date                                              | {} |
| --cells-notification-list-notifications;                                | mixin applied to  notification list                                 | {} |
| --cells-notification-list-notifications-li;                             | mixin applied to  notification list li                              | {} |
| --cells-notification-list-notifications-li-span;                        | mixin applied to  notification list li spans                        | {} |
| --cells-notification-list-notifications-li-span-first-of-type;          | mixin applied to  notification list li span not last of type        | {} |
| --cells-notification-list-notifications-li-span-not-last-of-type;       | mixin applied to  notification list li span first of type           | {} |
| --cells-notification-list-notifications-li-span-second-el;              | mixin applied to  notification list li span second element          | {} |
| --cells-notification-list-notifications-li-span-second-el-before;       | mixin applied to  notification list li span second element before   | {} |
| --cells-notification-list-notifications-li-span-other-not-last-of-type; | mixin applied to  notification list li span other-info              | {} |
| --cells-notification-list-notifications-li-read;                        | mixin applied to  notification list li readed                       | {} |
| --cells-notification-list-notifications-li-read-second-child            | mixin applied to  notification list li readed span second element   | {} |
| --cells-notification-list-notifications-li-read-second-child-before;    | mixin applied to  notification list li readed second element before | {} |
| --cells-notification-list-notifications-li-read-span                    | mixin applied to  notification list li readed spans                 | {} |
