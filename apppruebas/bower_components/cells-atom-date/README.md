# cells-atom-date

![cells-atom-date screenshot](cells-atom-date.png)

![Polymer Hybrid (1 - 2)](https://img.shields.io/badge/Polymer-1%20--%202-yellow.svg)
![Certificated](https://img.shields.io/badge/certificated-yes-brightgreen.svg)

[Demo of component in Cells Catalog](https://bbva-ether-cellscatalogs.appspot.com/?view=docs#/component/cells-atom-date)

The `<cells-atom-date>` component formats a valid date in a specific format (default 'DD/MM/YYYY'). 

__Example:__

```html
<cells-atom-date date="2016-08-18" format="YYYY-MM-DD"></cells-atom-date>
```

## UTC

Set the `utc` boolean attribute to display the date without depending on locale timezone.

## calendarTime

Set `calendarTime` to true to display some dates relatives to now as strings. For example, `Date.now()` will be formatted by default as "Today" or "Hoy" depending on the `locale`.

Only the keys provided in `calendarFormat` will be formatted as strings. Allowed values are 'sameDay', 'nextDay', 'nextWeek', 'lastDay', 'lastWeek', 'sameElse'. The value for this keys allows scaping characters (`[escaped]`). 

Check out [momentjs docs about calendar time](https://momentjs.com/docs/#/displaying/calendar-time/) for more information.

__Display today as "Today" or "Hoy":__

```html
<cells-atom-date 
  date="[[today]]"
  calendar-time>
</cells-atom-date>
```

__Custom calendarFormats:__

```html
<cells-atom-date calendar-time></cells-atom-date>
<script>
  document
    .querySelector('cells-atom-date')
    .calendarFormats = {
      nextDay: '[Mañana]',
    };
</script>
```

__Localized calendarFormats:__

```html
<cells-atom-date calendar-time></cells-atom-date>
<script>
  document
    .querySelector('cells-atom-date')
    .calendarFormats = {
      es: {nextDay: '[Mañana]'},
      en: {nextDay: '[Tomorrow]'},
    };
</script>
```

## Styling

The following custom properties and mixins are available for styling:

| Custom property | Description     | Default        |
|:----------------|:----------------|:--------------:|
| --cells-atom-date  | empty mixin     | {}             |
| --cells-atom-date-color | atom date color | #003f8C
