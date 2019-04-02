const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, 'distr'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			angular: path.resolve(
				path.join(__dirname, 'node_modules', 'angular')
			)
		}
	},
	module: {
		rules: [
			{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['angularjs-annotate']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
		]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        open: true
    },
};
