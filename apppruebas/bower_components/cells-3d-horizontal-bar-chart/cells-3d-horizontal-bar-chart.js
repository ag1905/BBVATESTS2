(function() {
  'use strict';
  var d3 = window.d3;
  Polymer({
    is: 'cells-3d-horizontal-bar-chart',
    behaviors: [
      Polymer.IronResizableBehavior
    ],
    properties: {
      /**
       * Chart object
       */
      chart: {
        type: Object
      },
      /**
       * Computed array of dataLeft and dataRight
       */
      _data: {
        type: Array,
        observer: '_dataChanged',
        computed: '_dataComputed(dataLeft, dataRight)'
      },
      /**
       * Data for left bar
       */
      dataLeft: {
        type: Number,
        reflectToAttribute: true
      },
      /**
       * Data for right bar
       */
      dataRight: {
        type: Number,
        reflectToAttribute: true
      },
      /**
       * Point (on %) for start animation (when chart is animated)
       */
      startPoint: {
        type: Number,
        value: 10
      },
      /**
       * Thickness of bars
       */
      barStroke: {
        type: Number,
        value: 12
      },
      /**
       * Height of chart
       */
      chartHeight: {
        type: Number,
        value: 30
      },
      /**
       * Duration of animation in milliseconds.
       * This value used when data will update and on initial animation (if chart is animated)
       */
      animationTime: {
        type: Number,
        value: 1000
      },
      /**
       * Indicates if chart will execute initial animation
       */
      animated: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      /**
       * Used for calculate new width and range of X axis when window resizes
       */
      _chartWidth: {
        type: Number
      },
      /**
       * Function to indicates values in X axis
       */
      _line: {
        type: Object
      },
      /**
       * Domain of X axis based in data values
       */
      _domain: {
        type: Number,
        computed: '_computedDomain(_data)'
      },
      /**
       * X axis object
       */
      _xAxis: {
        type: Object,
        computed: '_computedAxisX(_domain, _chartWidth)'
      },
      /**
       * This property is required to create a unique id for chart shadow gradient.
       * In case there are several charts in the same window, it is necessary that each chart has a different ID for the shadow gradient.
       * Otherwise, all the charts would have the same shadow gradient as the last chart drawn.
       * This is due to a bug in the encapsulation of SVG properties.
       */
      _shadowGradientName: {
        type: String,
        computed: '_computedShadowGradientName(_data)'
      }
    },
    listeners: {
      'iron-resize': '_resize'
    },
    /**
     * Computed domain by data.
     * @param {Array} data.
     * @return {Number} domain.
     */
    _computedDomain: function(data) {
      if (this._validData(data)) {
        return this._data[0] + this._data[1];
      } else {
        return 0;
      }
    },
    /**
     * Computed X axis by domain and chart width.
     * @param {Number} _domain.
     * @param {Number} _chartWidth.
     * @return {Object} X axis.
     */
    _computedAxisX: function(_domain, _chartWidth) {
      return d3.scale.linear()
        .domain([0, this._domain])
        .range([0, this._chartWidth]);
    },
    /**
     * Computed shadow gradient name by data.
     * @param {Array} data.
     * @return {String} name of shadow gradient.
     */
    _computedShadowGradientName: function(data) {
      if (this._validData(data)) {
        return 'shadowGradient' + Date.now();
      } else {
        return '';
      }
    },
    /**
     * Computed data array by data left and data right.
     * @param {Array} dataLeft.
     * @param {Array} dataRight.
     * @return {Array} data.
     */
    _dataComputed: function(dataLeft, dataRight) {
      return [dataLeft, dataRight];
    },
    /**
     * Check if data is valid.
     * @param {Array} data.
     * @return {Boolean} true if data is valid.
     */
    _validData: function(data) {
      if (typeof data === 'undefined' || data === null) {
        return false;
      }
      if (data && data.length !== 2) {
        return false;
      }
      var valid = true;
      data.forEach(function(e) {
        if (typeof e !== 'number') {
          valid = false;
        }
      });
      if (data[0] === 0 && data[1] === 0) {
        valid = false;
      }
      return valid;
    },
    /**
     * Computed X axis by domain and chart width.
     * @param {Array} dataArray1.
     * @param {Array} dataArray2.
     * @return {Boolean} true if two array params are equals.
     */
    _isArrayEquals: function(dataArray1, dataArray2) {
      if (!dataArray1 || !dataArray2) {
        return false;
      }
      if (dataArray1.length !== dataArray2.length) {
        return false;
      }
      var equals = true;
      dataArray1.forEach(function(e, i) {
        if (equals) {
          equals = e === dataArray2[i];
        }
      });
      return equals;
    },
    ready: function() {
      this.scopeSubtree(this.$.chart, true);
    },
    attached: function() {
      if (!this._validData(this._data)) {
        d3.select(this.$.chart).select('svg').remove();
        return false;
      }
      if (!this.existChart()) {
        this.createChart();
      }
      this.drawChart(this.chart, this._data);
    },
    /**
     * Check if data has been updated and update chart.
     * @param {Array} newData.
     * @param {Array} oldData.
     */
    _dataChanged: function(newData, oldData) {
      if (!this._validData(newData)) {
        d3.select(this.$.chart).select('svg').remove();
        return false;
      }
      if (!this.existChart()) {
        this.createChart();
      }

      //check if need re draw chart
      var updateChart = false;
      if (typeof oldData !== 'undefined' && !this._isArrayEquals(newData, oldData)) {
        updateChart = true;
      }
      if (updateChart) {
        if (this._validData(oldData)) {
          var relDomain = this._domain / (oldData[0] + oldData[1]);
          this.startPoint = oldData[0] * 100 / this._domain * relDomain;
        }
        this.animated = true;
        this.chart.select('linearGradient').remove();
        this.drawChart(this.chart, newData);
      }
    },
    /**
     * Check if chart exists.
     * @return {Boolean} true if chart exists.
     */
    existChart: function() {
      return typeof this.chart !== 'undefined' && this.chart !== null && this.$.chart.childNodes.length !== 0;
    },
    /**
     * Create chart object.
     * @return {Object} chart created.
     */
    createChart: function() {
      this._line = d3.svg.line()
        .x(function(d) {
          return this._xAxis(d.x);
        }.bind(this))
        .y(function(d) {
          return d.y;
        })
        .interpolate('linear');
      this._chartWidth = this._getWidth();
      return this.chart = d3.select(this.$.chart).append('svg')
        .style('width', this._chartWidth)
        .style('height', this.chartHeight)
        .style('vertical-align', 'top') // Fix spurious margin on svg element
        .append('g');
    },
    /**
     * Draw chart.
     * @param {Object} Chart object.
     * @param {Array} Array of data.
     */
    drawChart: function(chart, data) {
      var paths = this._getPaths(data);
      var dataStart = paths.start;
      if (!this.animated) {
        dataStart = paths.end;
      }
      chart.selectAll('path')
        .data(dataStart)
        .enter()
        .append('path')
        .attr('d', function(d, i) {
          return this._line(d);
        }.bind(this))
        .attr('class', function(d, i) {
          if (i === 0) {
            return 'shadow';
          }
          if (i === 1) {
            return 'bar-left';
          }
          if (i === 2) {
            return 'bar-right';
          }
        });
      var shadowEndPoint = data[0] * 100 / this._domain;

      // if barStroke === chartHeight then chart is 2D graphic and not need shadow
      if (this.barStroke !== this.chartHeight) {
        this._calculeShadowGradient(chart, this.startPoint, shadowEndPoint);
      }
      if (this.animated) {
        chart.selectAll('path')
          .data(paths.end)
          .transition()
          .duration(this.animationTime)
          .attr('d', function(d, i) {
            return this._line(d);
          }.bind(this));
      }
    },
    /**
     * Update chart when window resize.
     * @param {Object} chart.
     */
    _updateResizedChart: function(chart) {
      chart.selectAll('path')
        .attr('d', function(d, i) {
          return this._line(d);
        }.bind(this));
    },
    /**
     * Get paths for draw svg lines.
     * @param {Array} data.
     * @return {Object} that contains paths.
     */
    _getPaths: function(data) {
      // calculate percentaje start point into domain
      var start = this._domain * this.startPoint / 100;

      // create start position bars
      var leftBarStartPath = this._generatePath(0, start, 0, this.chartHeight);
      var rightBarStartPath = this._generatePath(this._domain, start, 0, this.chartHeight);

      // create end position bars
      var endPaths = data.map(function(e, i) {
        var offset = i === 0 ? 0 : this._domain;
        var direction = i === 0 ? -1 : 1;
        return this._generatePath(0 + offset, offset - e * direction, 0, this.chartHeight);
      }.bind(this));

      // create horizontal bar for shadow
      var shadow = this._generatePath(0, this._domain, this.chartHeight - this.barStroke, this.chartHeight);
      return {
        start: [shadow, leftBarStartPath, rightBarStartPath],
        end: [ shadow ].concat(endPaths)
      };
    },
    /**
     * Generate one path by coordinates.
     * @param {Number} x1.
     * @param {Number} x2.
     * @param {Number} y1.
     * @param {Number} y2.
     * @return {Array} of points.
     */
    _generatePath: function(x1, x2, y1, y2) {
      // invert Y points because positive values is down in Y axis
      return [
        { x: x1, y: y2 },
        { x: x1, y: y2 - this.barStroke },
        { x: x2, y: y1 },
        { x: x2, y: y1 + this.barStroke },
        { x: x1, y: y2 }
      ];
    },
    /**
     * Create shadow gradient by percentaje points (start, end).
     * @param {Object} chart.
     * @param {Number} start.
     * @param {Number} end.
     * @return {Object} with gradient created.
     */
    _calculeShadowGradient: function(chart, start, end) {
      // get defs and gradient to update it or create if not exist
      var defs = chart.select('defs');
      if (defs[0][0] === null) {
        defs = chart.append('defs');
      }
      var gradient = defs.select('linearGradient');
      if (gradient[0][0] === null) {
        gradient = defs.append('linearGradient')
          .attr('id', this._shadowGradientName)
          .attr('x1', '0%')
          .attr('x2', '100%')
          .attr('y1', '0%')
          .attr('y2', '0%');
        for (var j = 0; j < this._data.length * 2; j++) {
          gradient.append('stop');
        }

        // assign gradient to shadow bar
        chart.select('.shadow').attr('fill', 'url(#' + this._shadowGradientName + ')');
        gradient.selectAll('stop')
          .attr('class', function(d, i) {
            if (i === 0 || i === 1) {
              return 'shadow-left';
            }
            if (i === 2 || i === 3) {
              return 'shadow-right';
            }
          })
          .attr('stop-opacity', function(d, i) {
            if (i === 0 || i === 3) {
              return 1;
            }
            if (i === 1 || i === 2) {
              return 0;
            }
          });
      }

      // if component is not animated change start point to end
      if (!this.animated) {
        start = end;
      }

      // define points of shadow gradient
      gradient.selectAll('stop')
        .attr('offset', function(d, i) {
          if (i === 0) {
            return '0%';
          }
          if (i === 1 || i === 2) {
            return start + '%';
          }
          if (i === 3) {
            return '100%';
          }
        });
      if (this.animated) {
        gradient.selectAll('stop').transition()
          .duration(this.animationTime)
          .attr('offset', function(d, i) {
            if (i === 0) {
              return '0%';
            }
            if (i === 1 || i === 2) {
              return end + '%';
            }
            if (i === 3) {
              return '100%';
            }
          });
      }
      return gradient;
    },
    /**
     * Check if chart need to re-draw.
     */
    _resize: function() {
      var newWidth = this._getWidth();
      if (this._chartWidth !== newWidth && this.existChart()) {
        d3.select(this.$.chart).select('svg').style('width', newWidth);
        this._chartWidth = newWidth;
        this._updateResizedChart(this.chart);
      }
    },
    /**
     * Get chart width.
     * @return {Number} width of chart.
     */
    _getWidth: function() {
      var chart = d3.select(this.$.chart);

      if (this.$.chart.firstElementChild && this.offsetWidth <= 0) {
        return parseInt(chart.select('svg').style('width'));
      } else {
        return parseInt(chart.style('width'));
      }
    }
  });
}());