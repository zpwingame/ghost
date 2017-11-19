let webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var FileListPlugin = require('./file_plugin')
var path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
console.log(resolve('a'))
module.exports = {
    entry: {
        "index1": ['./src/webpack-demo/index1.js'],
        "demo1": ['./src/vue/page/demo1.js'],
        "menu": ['./src/vue/page/menu.js'],
        "treeshaking": ['./src/webpack-demo/tree-shaking.js'],
    },
    devtool: '#source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components')
        }
    },
    devServer: {
        hot: true,
        port: 8080,
        contentBase: path.resolve(__dirname),
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.js|jsx$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            // {
            //     test: /\.scss$/,
            //     use: [{
            //             loader: 'style-loader'
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         }
            //     ],
            //     exclude: /node_modules/
            // },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                ],
                    publicPath: "./"
                })
            },
            {
                test: /\.css$/,
                use:[
                    {loader:'style-loader'}
                ],
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }],
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name].[hash:7].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true
        // }),
        // new FileListPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'common.min.js',
        }),
        new ExtractTextPlugin({
            filename: '[name].min.css',
        }),
        new HtmlWebpackPlugin({
            title: 'test',
            filename: 'test.html',
            template: 'template/index.html',
            chunks: ['vendor', 'menu'],
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
            },
            chunksSortMode: 'dependency'
        })
    ],
    externals: {
        react: 'react',
        jquery: '$'
    }
}