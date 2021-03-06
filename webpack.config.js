const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin(path.join('styles', 'style.css'));

module.exports = {
    mode: 'development',
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },
    entry: {
        index: 'index'
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: path.join('scripts', '[name].js')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                'babel-loader?cacheDirectory',
            ]
        }, {
            test: /\.scss$/,
            use: extractCSS.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    'sass-loader'
                ]
            })
        }]
    },
    plugins: [
        extractCSS
    ]
};
