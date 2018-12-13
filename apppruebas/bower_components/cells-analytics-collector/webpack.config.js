const allowedProviders = ['google-analytics', 'adobe-analytics'];

function _getProvider(args = '') {
  let result = null;

  allowedProviders.forEach((provider) => {
      if (args.indexOf(provider) !== -1) {
        result = provider;
        return;
      }
  });

  return result;
}

var pkg = require('./package.json');
var path = require('path');
var webpack = require('webpack');

function webpackConfig(env) {
  var provider = _getProvider(env.provider);
  var isDeploy = env.deploy !== undefined && env.deploy == 'true';

  if (!provider) {
    console.log('An analytics provider parameter must be specified: ' + allowedProviders.map((provider) => `--${provider}`).join(', ') + '.');
    process.exit();
  }

  var entryFileName = `index-${provider}`;
  var outputFileName = `cells-${provider}-collector${isDeploy ? '.min' : ''}.js`;

  var config = {
    target: 'web',
    entry: `./src/${entryFileName}.js`,
    output: {
      path: path.join(__dirname, '/dist'),
      filename: outputFileName,
      library: 'cells',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: [
                require('babel-plugin-transform-class-properties'),
                require('babel-plugin-transform-object-rest-spread')
              ]
            }
          }
          // include: [
          //   path.resolve(__dirname, "src")
          // ],
          // exclude: [
          //   path.resolve(__dirname, "node_modules")
          // ],
          // loader: "babel-loader",
          // // the loader which should be applied, it'll be resolved relative to the context
          // // -loader suffix is no longer optional in webpack2 for clarity reasons
          // // see webpack 1 upgrade guide
          //
          // options: {
          //   presets: ["es2015", "stage-0"]
          // }
          // // options for the loader
        }
      ]
    },
    plugins: [

    ],
    resolve: {
      extensions: [
        '.es6',
        '.es7',
        '.js'
      ]
    },
    devtool: "source-map" // enum
  };

  if (isDeploy) {
    if (!config.plugins) {
      config.plugins = [];
    }

    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: true
        }
      })
    );
  };

  return config;
}

module.exports = webpackConfig;
