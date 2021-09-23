const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const npmPackage = require('./package.json');

module.exports = {
  mode: 'development',
  entry: { index: './src/js/index.js' },
  resolve: {
    alias:
      Object.fromEntries(
        Object.entries(npmPackage._moduleAliases).map(([k, v]) => [
          k,
          path.join(__dirname, v),
        ])
      ) || {},
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[hash]_[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
  ],
};
