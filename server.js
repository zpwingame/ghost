// const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const open = require('open');
// const port = 8080;
// var path = require('path')
//
//
// let config = require('./webpack.config.js')
// console.log(config.entry);
// for (let key in config.entry) {
//     let ar = config.entry[key];
//     if (key != "common") {
//         ar.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
//     }
// }
// config.devServer = {
//     hot: true,
//     port: 8080,
//     contentBase:path.resolve(__dirname),
//     publicPath:'http://localhost:8080/dist/'
// }
// new WebpackDevServer(webpack(config), config.devServer)
//     .listen(port,null, (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Listening at localhost:' + port);
//         console.log('Opening your system browser...');
//         open('http://' + ('127.0.0.1') + ':' + port+'/pages/vue/account.html');
//     });
