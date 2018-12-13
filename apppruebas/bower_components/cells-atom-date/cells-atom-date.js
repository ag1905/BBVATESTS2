(function() {
  /* global moment */
  'use strict';

  /**
   * Default momentjs calendar formats.
   * https://momentjs.com/docs/#/displaying/calendar-time/
   */
  const MOMENT_CALENDAR_FORMATS = [
    'sameDay',
    'nextDay',
    'nextWeek',
    'lastDay',
    'lastWeek',
    'sameElse',
  ];

  Polymer({

    is: 'cells-atom-date',

    properties: {
      /**
       * Date to format.
       */
      date: {
        type: String,
      },

      /**
       * Date format.
       */
      format: {
        type: String,
        value: 'DD/MM/YYYY',
      },

      /**
       * Date localization.
       * @default document.documentElement.lang || 'en'
       */
      locale: {
        type: String,
        value: document.documentElement.lang || 'en',
      },

      /**
       * Set to true to format the date as UTC time without taking local time into account.
       * [Moment docs about utc()](https://momentjs.com/docs/#/parsing/utc/)
       */
      utc: {
        type: Boolean,
        value: false,
      },

      /**
       * Sets the utc offset.
       * [Moment docs about utcOffset()](https://momentjs.com/docs/#/manipulating/utc-offset/)
       */
      utcOffset: {
        type: Number,
        value: null,
      },

      /**
       * Set to true to display the formats specified in `calendarFormats` as strings.
       * By default 'today' is formatted as a string.
       */
      calendarTime: {
        type: Boolean,
        value: false,
      },

      /**
       * Allowed formats to be displayed as strings when `calendarTime` is used.
       * Allowed values are 'sameDay', 'nextDay', 'nextWeek', 'lastDay', 'lastWeek', 'sameElse'.
       * The formats can be localized by providing an object with the locale key for each group of formats.
       * [Moment docs about calendar time](https://momentjs.com/docs/#/displaying/calendar-time/)
       * @type {Object}
       */
      calendarFormats: {
        type: Object,
        value: function() {
          return {
            en: {
              sameDay: '[Today]',
            },
            es: {
              sameDay: '[Hoy]',
            },
          };
        },
      },

      /**
       * Computed moment object from global moment settings.
       */
      _momentData: {
        type: Object,
        computed: '_computeMomentData(date, locale, utc, utcOffset)',
      },

      /**
       * Returns the computed moment object.
       * This can be used to query specific data from the date using momentjs methods.
       */
      momentData: {
        type: Object,
        notify: true,
        readOnly: true,
      },

      _hasCalendarFormat: {
        type: Boolean,
        value: false,
        computed: '_computeHasCalendarFormat(calendarTime, calendarFormats)',
      },

      _formattedDate: {
        type: String,
        computed: '_computeFormattedDate(_momentData, format, _hasCalendarFormat)',
      },
    },

    _computeHasCalendarFormat: function(calendarTime, calendarFormats) {
      return (calendarTime && calendarFormats);
    },

    _computeMomentData: function(date, locale, utc, utcOffset) {
      const momentData = moment(date);
      momentData.locale(locale);
      this._setUtcOffset(momentData);
      this._setUtc(momentData);
      this._setMomentData(momentData);
      return momentData;
    },

    _setUtcOffset: function(momentData) {
      if (typeof this.utcOffset === 'number') {
        momentData.utcOffset(this.utcOffset);
      }
    },

    _setUtc: function(momentData) {
      if (this.utc) {
        momentData.utc();
      }
    },

    _computeFormattedDate: function(momentData, format, hasCalendarFormat) {
      if ((momentData && format) && momentData.isValid()) {
        return (hasCalendarFormat)
          ? this._getCalendarOrFormattedDate()
          : this._getFormattedDate();
      }
    },

    _getFormattedDate: function() {
      return this._momentData.format(this.format);
    },

    _getCalendarOrFormattedDate: function() {
      // Calendar output set per invocation
      // https://momentjs.com/docs/#/displaying/calendar-time/
      return this._momentData.calendar(null,
        this._getAllowedCalendarFormats()
      );
    },

    _getAllowedCalendarFormats: function() {
      const calendarFormats = this.calendarFormats[this.locale] || this.calendarFormats;
      return MOMENT_CALENDAR_FORMATS.reduce((obj, value) => {
        obj[value] = calendarFormats[value] || this.format;
        return obj;
      }, {});
    },
  });
}());
