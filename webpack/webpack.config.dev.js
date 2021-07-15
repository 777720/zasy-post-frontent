const path = require('path');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');


module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 8000, //设置端口
        host : "0.0.0.0", //设置0.0.0.0使得可以通过本机ip访问项目
        disableHostCheck : true
    }
})
