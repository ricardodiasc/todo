const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


var HtmlWebpackConfigPlugin = new HtmlWebpackPlugin({
    template:`${__dirname}/public/index.html`,
    filename:"index.html",
    inject: "body"
});

var webpackConfig = {
  context: path.resolve(__dirname, 'src'),

    entry: [
        "./index.js"
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        historyApiFallback:true

    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.config.js",".js",".jsx"]
    },
    module:{
        rules:[{
            test:/\.js|.jsx?$/,
            use: ["babel-loader"],
            exclude: /node_modules/
        }]
    },
    target: "web",
    plugins: [HtmlWebpackConfigPlugin]
}

module.exports =  webpackConfig;