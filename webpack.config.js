let webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var FileListPlugin = require('./file_plugin')
var path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    entry: {
        "demo": ['./src/vue/page/demo.js'],
        "refund": ['./src/vue/page/refund.js'],
        "account": ['./src/vue/page/account.js'],
        // "demo1": './src/vue/page/demo1.js',
        // "lazy": './src/vue/page/lazy.js',
        // "plugin-demo": './src/vue/page/plugin-demo.js',
        // "transition-demo": './src/vue/page/transition-demo.js',
        // "router-demo": './src/vue/page/router-demo.js',
        // "css-secret": './src/vue/page/css-secret.js',
        // "r-demo1": './src/react/page/r-demo1.js',
        // "react-basic": './src/react/page/react-basic.js',
        // "react1": './src/react/page/react1.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath:'http://localhost:8080/dist/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components')
        }
    },
    module: {
        rules: [{
                test: /\.js|jsx$/,
                use:[{
                        loader:'babel-loader'
                    }
                ],
                // include: [resolve('src'), resolve('test')]
                exclude:/node_modules/
            },
            // {
            //     test: /\.scss$/,
            //     use:ExtractTextPlugin.extract({
            //         fallback:'style-loader',
            //         // use:['css-loader?sourceMap', 'sass-loader?sourceMap']
            //         use:[
            //             {loader:'css-loader',options:{sourceMap:true}},
            //             {loader:'sass-loader',options:{sourceMap:true}},
            //         ]
            //     }),
            //     include: [resolve('src'), resolve('test')]
            // },
            {
                test: /\.scss$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader',options:{sourceMap:true}},
                    {loader:'sass-loader',options:{sourceMap:true}}
                ],
                exclude:/node_modules/
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
                use:[
                    {loader:'vue-loader'}
                ],
                include: [resolve('src'), resolve('test')]
            },
              {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:10000
                    }
                }]
              }
        ]
    },
    plugins: [
        new FileListPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'common.min.js',
        }),
        new ExtractTextPlugin({
            filename: '[name].min.css',
            allChunks: true,
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        //   })
        // new HtmlWebpackPlugin({
        //     chunks:['vendor','account']
        // }),

        // new OpenBrowserPlugin({
        //       url: 'http://127.0.0.1:8080/pages/vue/account.html'
        //   }),
    ]
}
