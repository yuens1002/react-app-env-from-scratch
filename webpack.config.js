const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(n0de_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: './bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'public/'),
    devMiddleware: {
      publicPath: '/dist/',
    },
    port: 3000,
    hot: 'only',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
