/**
 * @file webpack 开发环境
 * @author gavinguo
 * @date 2020/6/28
 **/

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const proxyReqHeaders = {
    Cookie: '',
    Origin: 'http://www.demo.com',
    Host: 'www.demo.com',
    Referer: 'http://www.demo.com'
};

module.exports = (env = {}) => {
    const config = merge(common, {
        mode: 'development',
        output: {
            filename: 'js/[name].[hash:8].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /\.(scss|sass)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env.NODE_ENV || 'development'),
                    PROXY_TO: JSON.stringify(env.proxyTo)
                }
            }),
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                inject: 'body',
                hash: false
            }),
            new webpack.HotModuleReplacementPlugin(),
            new DashboardPlugin()
        ],
        devServer: {
            contentBase: path.resolve(__dirname, '../dist'),
            open: true,
            port: 8300,
            compress: true,
            hot: true,
            ...(
                env.proxyTo === 'online'
                ? {
                    proxy: {
                        '/newdev2': {
                            target: 'http://www.demo.com',
                            changeOrigin: true,
                            secure: false,
                            onProxyReq: (proxyReq, req, res) => {
                                if (proxyReqHeaders) {
                                    for (const key in proxyReqHeaders) {
                                        proxyReq.setHeader(key, proxyReqHeaders[key]);
                                    }
                                }
                            }
                        }
                    }
                }
                : {}
            )
        }
    });
    return config;
};
