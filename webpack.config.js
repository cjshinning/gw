const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        // vendor: [
        //     'lodash'
        // ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Progresssive web application'
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    // optimization: {
    //     splitChunks: {
    //       chunks: 'async',
    //       minChunks: 2,
    //     },
    // },
    output: {
        // filename: '[name].[chunkhash].js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}