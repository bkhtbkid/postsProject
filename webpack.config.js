const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		}
	},
	plugins: [
		new HTMLPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin()
	],
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			}
		],
	},
	optimization: {
		minimizer: [
			`...`,
			new CssMinimizerPlugin(),
		],
	}
}