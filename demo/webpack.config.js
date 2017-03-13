const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, './src'),
	target: 'web',

	entry: {
		client: [
			'react-hot-loader/patch',
			// activate HMR for React

			'webpack-dev-server/client?http://localhost:8080',
			// bundle the client for webpack-dev-server
			// and connect to the provided endpoint

			'webpack/hot/only-dev-server',
			// bundle the client for hot reloading
			// only- means to only hot reload for successful updates

			'./app.js'
			// the entry point of our app
		],
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
		// necessary for HMR to know where to load the hot update chunks
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: path.resolve(__dirname, './src'),
				use: [{
					loader: 'babel-loader',

					query: {
						// https://github.com/babel/babel-loader#options
						cacheDirectory: true,

						// https://babeljs.io/docs/usage/options/
						babelrc: false,
						presets: [
							// Latest stable ECMAScript features
							// https://github.com/babel/babel/tree/master/packages/babel-preset-latest
							['latest', { es2015: { modules: false } }],
							// Experimental ECMAScript proposals
							// https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0
							'stage-2',
							// JSX, Flow
							// https://github.com/babel/babel/tree/master/packages/babel-preset-react
							'react'
						],
						plugins: [
							// Enables React code to work with HMR.
							'react-hot-loader/babel',
						],
					},
				}]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			}, {
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: 'url-loader'
			}
		],
	},

	plugins: [
		// Define free variables
		// https://webpack.github.io/docs/list-of-plugins.html#defineplugin
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			'process.env.BROWSER': true,
			__DEV__: true,
		}),

		new webpack.HotModuleReplacementPlugin(),  // enable HMR globally
	],

	// Choose a developer tool to enhance debugging
	// http://webpack.github.io/docs/configuration.html#devtool
	devtool: 'cheap-module-source-map',

	devServer: {
		hot: true,
		// enable HMR on the server

		contentBase: path.resolve(__dirname, './dist'),
		// match the output path

		publicPath: '/'
		// match the output `publicPath`
	},

	resolve: {
		modules: [
			path.resolve(__dirname, './src'),
			'node_modules'
		],
	}

};