const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  configureWebpack: {
    mode: 'development',
		devtool: 'cheap-module-source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules\/(?!(@webcomponents\/shadycss|lit-element|lit-html|@polymer|@vaadin|@lit)\/).*/,
					options: {
						cacheDirectory: true
					}
				}
			]
		},
		plugins: [
			new CopyWebpackPlugin([
				{
					context: 'node_modules/@webcomponents/webcomponentsjs',
          from: '**/*.js',
					to: 'webcomponents'
				}
			])
		]
  }
};
