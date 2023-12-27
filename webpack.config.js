const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'string-replace-loader',
            options: {
              multiple: [
                { search: './xpwa/styles/xpwa.css', replace: './dist/xpwa.min.css', flags: 'g' },
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'xpwa.min.css',
    }),
  ],
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },  
};
