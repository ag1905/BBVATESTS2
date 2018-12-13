const IS_PRO = process.env.NODE_ENV === 'production';
var pkg      = require('./package.json');
var path     = require('path');
var config   = {
    target  : 'web',
    entry   : './src/index.es7',
    output  : {
        path          : path.join(__dirname, 'build'),
        pathinfo      : true,
        filename      : IS_PRO ? `${pkg.name}.min.js` : `${pkg.name}.js`,
        library       : 'bgdmjs_analitycs',
        libraryTarget : 'umd'
    },
    module  : {
        loaders : [
            {
                test   : /\.(es[67]|js)$/,
                loader : 'string-replace-loader',
                query  : {
                    search  : '__VERSION__',
                    replace : pkg.version
                }
            },
            {
                test   : /\.(js|es[67])$/,
                loader : 'babel-loader',
                query  : {
                    compact : IS_PRO,
                    plugins : [
                        require.resolve('babel-plugin-transform-class-properties'),
                        require.resolve('babel-plugin-transform-es2015-block-scoping'),
                        require.resolve('babel-plugin-transform-object-assign'),
                        [
                            require.resolve('babel-plugin-transform-runtime'),
                            {
                                helpers     : false,
                                polyfill    : false,
                                regenerator : true
                            }
                        ]
                    ],
                    presets : [
                        [
                            'es2015',
                            {
                                modules : false
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins : [],
    resolve : {
        extensions : [
            '.es7',
            '.js'
        ]
    }
};
if (!IS_PRO)
{
    config.devtool = '#inline-source-map';
}

module.exports = config;
