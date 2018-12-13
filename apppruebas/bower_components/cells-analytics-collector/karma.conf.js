// Karma configuration
// Generated on Thu Mar 30 2017 16:14:40 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-stub-promise', 'chai-as-promised', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/helpers/includes.js',
      'test/index.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/index.js': ['webpack']
    },

    // webpack configuration
    webpack: {
      target: 'web',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules\/(?!(autotrack|dot-prop|dom-utils))/,
            use: {
              loader: 'babel-loader',
              options: {
                plugins: [
                  require('babel-plugin-transform-class-properties'),
                  require('babel-plugin-transform-object-rest-spread'),
                  require('babel-plugin-transform-object-assign'),
                  [
                      require('babel-plugin-transform-runtime'),
                      {
                          helpers: false,
                          polyfill: false,
                          regenerator: true
                      }
                  ]
                ]
              }
            }
          }
        ]
      },
      plugins: [],
      resolve: {
        extensions: [
          '.es6',
          '.es7',
          '.js'
        ]
      },
      devtool: "source-map" // enum
    }, // require("./webpack.test.config.js"),

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS', 'Safari'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
