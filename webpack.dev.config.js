//自己设置入口文件和出口文件
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./release/bundle.js"
  },

  module: {
    rules: [{
      test: /\.js?$/,
      exclude:/(node_modules)/,
      loader: "babel-loader"
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "./release"),
    open: true,//浏览器自动打开
    port: 8060
  }
}