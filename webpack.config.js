const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

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
            title: 'Output Management'
        }),
        new webpack.ProvidePlugin({
            join: ['lodash', 'join']
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
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}