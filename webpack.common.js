const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // The order of the array items below is important.
        // These loaders run in order from right-to-left ("sass-loader" runs first).
        // The purpose of loaders is to preprocess files.
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
