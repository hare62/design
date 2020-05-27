init a project
1.检查环境
node -v 
npm -v
2.npm init
3.npm install webpack webpack-cli --save-dev --registry=https://registry.npm.taobao.org
4.在根目录下新建webpack.dev.config.js
4.1写上如下代码
module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./release/bundle.js"
  }
}
5.在package.json中的script中加上
"dev": "webpack --config ./webpack.dev.config.js --mode development"
6.控制台运行 npm run dev
6.1根目录会出来release文件和bundle.js文件
7.继续npm install webpack-dev-server html-webpack-plugin --save-dev --registry=https://registry.npm.taobao.org
8.在根目录中新建一个index.html文件内。把html模板写好。
9.webpack.dev.config.js中加
+const path = require('path');
+const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./release/bundle.js"
  },

 + plugins: [
 +   new HtmlWebpackPlugin({
 +     template: "./index.html"
 +   })
 + ],

 + devServer: {
 +   contentBase: path.join(__dirname, "./release"),
 +   open: true,
 +   port: 8060
 +  }
}
10.修改package.json中script中的dev
"dev": "webpack-dev-server --config ./webpack.dev.config.js --mode development"
