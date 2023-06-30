const MinifyPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './xpwa.js',
  output: {
    filename: 'xpwa.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new MinifyPlugin(),
  ],
};
