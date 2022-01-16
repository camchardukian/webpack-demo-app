const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        // The order of the array items below is important.
        // These loaders run in order from right-to-left ("sass-loader" runs first).
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
