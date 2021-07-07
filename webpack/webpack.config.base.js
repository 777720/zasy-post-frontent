const path = require('path');
const  webpack  = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const ServiceEnv = require('./ServiceEnv')


const serviceEnv  = new ServiceEnv().run(process.env.ZASY_NODE);




module.exports = {
    output: {
        path: path.join(__dirname,'../dist'),
        filename: 'index.bundle.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": require.resolve('path-browserify'),
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": require.resolve('crypto-browserify'),
        },

        extensions: ['.js', '.jsx' ],
    },
    entry: {
        index: [
            './src/index.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            name: '[path][name].[ext]',
                            limit: 1024 * 15,
                            fallback: 'file-loader',
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        }),
        new webpack.DefinePlugin({ 'process.env': serviceEnv })
    ]
}
