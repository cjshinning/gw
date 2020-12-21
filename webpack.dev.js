const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
}