let path = require('path');
let extractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let cleanWebpackPlugin = require("clean-webpack-plugin")

const extractPlugin = new extractTextPlugin({
  filename: "main.css"
})

module.exports = {
  entry: "./src/js/app.js",
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "/dist"
  },
  module: {
    rules:[
        {
          test:/\.js$/,
          use:[{
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          }]
        },
        {
          test: /\.scss$/,
          use: extractPlugin.extract({
            use: ["css-loader","sass-loader"]
          })
        },
        {
          test:/\.html$/,
          use:["html-loader"]
        },
        {
          test:/\.(png|jpg|jpeg)/,
          use:[{
            loader: "file-loader",
            options:{
              name:"[name].[ext]",
              outputPath:"img/",
              publicPath:"/",
            }
          }]
        }
      ]
  },
  plugins:[
    extractPlugin,
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new cleanWebpackPlugin(["dist"])
  ]
};
