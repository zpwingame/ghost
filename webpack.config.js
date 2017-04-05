let webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
console.log(__dirname)
module.exports = {
    entry: {
        "demo": './src/vue/page/demo.js',
        "demo1": './src/vue/page/demo1.js',
        "render-demo": './src/vue/page/render-demo.js',
        "r-demo1": './src/react/page/r-demo1.js'
        // "react1": './src/react/page/react1.js'
    },
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath:'http://127.0.0.1:8080/dist'
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
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.scss$/,
                loader:ExtractTextPlugin.extract({
                    fallbackLoader:'style-loader',
                    loader:['css-loader?sourceMap', 'sass-loader?sourceMap']
                }),
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.css$/,
                loader: 'style-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.vue$/,
                loader: ['vue-loader'],
                include: [resolve('src'), resolve('test')]
            },
            //   {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //       limit: 10000,
            //       name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //     }
            //   },
            //   {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //       limit: 10000,
            //       name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            //     }
            //   }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'common.min.js',
        }),
        new ExtractTextPlugin({
            filename: '[name].min.css',
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
