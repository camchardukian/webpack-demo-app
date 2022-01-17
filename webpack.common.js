const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
  },
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
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[hash][ext]",
        },
      },
    ],
  },
};
