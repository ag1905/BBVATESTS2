(function() {
  'use strict';

  // Object.assign Polyfill
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  /* istanbul ignore next */
  if (typeof Object.assign !== 'function') {
    Object.assign = function(target, varArgs) { // .length of function is 2
      'use strict';
      if (target === null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null) { // pasamos si es undefined o null
          for (var nextKey in nextSource) {
            // Evita un error cuando 'hasOwnProperty' ha sido sobrescrito
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }

  Polymer({

    is: 'cells-molecule-group-transactions-list',

    behaviors: [
      Polymer.Templatizer
    ],

    properties: {
      /**
       * List of transactions to show.
       */
      transactions: {
        type: Array
      },

      /**
       * Property name for transaction date.
       */
      transactionDatePropName: {
        type: String,
        value: 'availableDate'
      },

      /**
       * Date format to show transaction date.
       */
      transactionDateFormat: {
        type: String,
        value: 'DD MMMM'
      },

      /**
       * Maximum number of transactions to show
       * @type {Object}
       */
      limit: {
        type: Number
      },

      /**
      * If true, a year separator will be shown
      * @type {Boolean}
      **/
      showYearSeparator: {
        type: Boolean,
        value: false
      },

      /**
      * If true, transactions will be grouped by month and then by day
      * @type {Boolean}
      **/
      groupByMonth: {
        type: Boolean,
        value: false
      },

      /**
      * Transactions grouped
      * @type {Array}
      **/
      _transactionsGroups: {
        type: Array
      },

      /**
      * If true, a link will be shown beside the day
      * @type {Boolean}
      **/
      showDayLink: {
        type: Boolean,
        value: false
      },

      /**
      * Day link text to be shown
      * @type {String}
      **/
      dayLinkText: {
        type: String,
        value: 'Info'
      },

      /**
      * Select reverse order in transaction
      * @type {Boolean}
      */
      reverseOrder: {
        type: Boolean,
        value: false
      }

    },

    observers: [
      '_transactionsObserver(transactions.splices)'
    ],

    ready: function() {
      var template = Polymer.dom(this).querySelector('template');

      if (template) {
        this.templatize(template);
      } else {
        console.warn('cells-molecule-group-transactions-list requires a template to be provided in light-dom');
      }
    },

    _transactionsObserver: function() {
      var transactions = this.transactions || [];
      var transactionsGroupedByYearAndDate = {};
      var transactionsGroupedByYearAndMonth = {};
      var length = this.limit ? Math.min(transactions.length, this.limit) : transactions.length;
      var transactionDate;
      var date;
      var year;
      var month;
      var _this = this;
      var _sortKeys = function(a, b) {
        return (_this.reverseOrder) ? a.localeCompare(b) : b.localeCompare(a);
      };

      var getSum = function(total, num) {
        total.localAmount.amount += num.localAmount.amount;
        return total;
      };


      /* global moment */
      for (var i = 0; i < length; i++) {
        //discard empty transactions
        if (!this._getTransactionDate(transactions[i])) {
          continue;
        }
        if (this._getTransactionDate(transactions[i]).value) {
          transactionDate = moment(this._getTransactionDate(transactions[i]).value);
        } else {
          transactionDate = moment(this._getTransactionDate(transactions[i]));
        }
        date = transactionDate.format('YYYYMMDD');
        month = transactionDate.format('YYYYMM');
        year = transactionDate.format('YYYY');

        transactionsGroupedByYearAndDate[year] = Object.assign({}, transactionsGroupedByYearAndDate[year]);
        transactionsGroupedByYearAndMonth[year] = Object.assign({}, transactionsGroupedByYearAndMonth[year]);
        transactionsGroupedByYearAndMonth[year][month] = Object.assign({}, transactionsGroupedByYearAndMonth[year][month]);

        if (!transactionsGroupedByYearAndDate[year][date]) {
          transactionsGroupedByYearAndDate[year][date] = [];
        }

        if (!transactionsGroupedByYearAndMonth[year][month][date]) {
          transactionsGroupedByYearAndMonth[year][month][date] = [];
        }

        transactionsGroupedByYearAndDate[year][date].push(transactions[i]);
        transactionsGroupedByYearAndMonth[year][month][date].push(transactions[i]);
      }

      if (this.groupByMonth) {
        this._transactionsGroups = Object.keys(transactionsGroupedByYearAndMonth).sort(_sortKeys).map(function(yearKey) {
          var transactionsGroupedByDate = transactionsGroupedByYearAndMonth[yearKey];

          var transactionGroupYear = Object.keys(transactionsGroupedByDate).sort(_sortKeys).map(function(monthKey) {
            var transactionsGroupDate = transactionsGroupedByDate[monthKey];

            var transactionGroupYearAndMonth = Object.keys(transactionsGroupDate).sort(_sortKeys).map(function(dateKey) {
              var transactionsGroupDateAndMonth = transactionsGroupDate[dateKey];

              transactionsGroupDateAndMonth = transactionsGroupDateAndMonth[0];

              return transactionsGroupDateAndMonth;
            }, this);


            transactionGroupYearAndMonth.date = moment(monthKey, 'YYYYMM').format('MMMM YYYY');

            return transactionGroupYearAndMonth;
          }, this);

          transactionGroupYear.year = yearKey;

          return transactionGroupYear;
        }, this);

      } else {
        this._transactionsGroups = Object.keys(transactionsGroupedByYearAndDate).sort(_sortKeys).map(function(yearKey) {
          var transactionsGroupedByDate = transactionsGroupedByYearAndDate[yearKey];

          var transactionGroupYear = Object.keys(transactionsGroupedByDate).sort(_sortKeys).map(function(dateKey) {
            var transactionsGroupDate = transactionsGroupedByDate[dateKey];

            transactionsGroupDate.date = moment(dateKey, 'YYYYMMDD').format(this.transactionDateFormat);

            return transactionsGroupDate;
          }, this);

          transactionGroupYear.year = yearKey;

          return transactionGroupYear;
        }, this);
      }

    },

    _getTransactionDate: function(transaction) {
      return transaction[this.transactionDatePropName];
    },

    _onTransactionsDomChange: function(ev) {
      var template = Polymer.dom(ev).rootTarget;
      var container;
      var instance;

      template.items.forEach(function(transaction, index) {
        var model = ev.model;
        container = Polymer.dom(this.$$(['#item-list', model.sameYearIndex, model.sameDateIndex, index].join('-')));
        instance = this.stamp({transaction: transaction});
        container.children.forEach(function(child) {
          if (!child.is.match(/(dom-if|dom-repeat)/)) {
            container.removeChild(child);
          }
        });

        container.appendChild(instance.root);
      }, this);
    },

    /**
     * Fire an event when day link clicked
     * @param event
     * @private
     */
    _dayLinkAction: function(event) {
      this.fire('day-link-clicked', event);
    }

  });
}());
