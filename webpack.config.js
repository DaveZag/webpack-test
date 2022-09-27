const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { web } = require('webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: './dist',
  },
  target : 'web',
//   optimization: {
//     runtimeChunk: 'single',
//   },
mode: 'development'
};