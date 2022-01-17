const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
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
});
