/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint quotes: ["error", "double"] */
/* eslint-env es6 */

const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts",
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
