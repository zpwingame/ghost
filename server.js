const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const open = require('open');
const port = 8089;
var path = require('path')


let config = require('./webpack.config.js')
config.devServer = {
    hot: true,
    port: 8089,
    contentBase:path.resolve(__dirname),
    publicPath:'http://127.0.0.1:8080/dist'
}
new WebpackDevServer(webpack(config), config.devServer)
    .listen(port,null, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:' + port);
        console.log('Opening your system browser...');
        open('http://' + ('127.0.0.1') + ':' + port);
    });
