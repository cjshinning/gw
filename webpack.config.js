const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    //     hot: true
    // },
    // performance: {
    //     hints: false
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css/,
    //             use: ['style-loader', 'css-loader']
    //         }
    //     ]
    // },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'code spliting'
        }),
        // new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    }
}