var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
		//When making a new page, add its js path here
		style: './src/sass/app.scss',
		home1: './src/js/Home.js',
		user1: './src/js/User.js'
	},
	
	output: {
		path: __dirname,
		filename: './build/js/[name]-bundle.js'
	},
	watch: false,
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 3001
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				use: [
					
					{
						loader: 'sass-loader', options:{
							sourceMap: true
						}
					}
				]
			}
		]
	}
};