const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist'),
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({template: './src/index.html'}),
  ],
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname,'dist'),
    historyApiFallback: true,
  }
  ,
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/ , use: {loader: 'babel-loader'}}
    ]
  }
}
