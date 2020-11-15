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
    Origin: 'http://dev.xxx.com',
    Host: 'dev.xxx.com',
    Referer: 'http://dev.xxx.com'
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
                        'css-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /\.(scss|sass)$/,
                    use: [
                        'style-loader',
                        'css-loader',
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
            host: '0.0.0.0',
            open: true,
            port: 8300,
            compress: true,
            disableHostCheck: true,
            hot: true,
            quiet: true,
            https: true,
            // 允许绑定本地域名
            allowedHosts: [
                'dev.dev.xxx.com'
            ],
            historyApiFallback: true, // 防止 'history路由模式' 下开发时跳转
            ...(
                env.proxyTo === 'online'
                ? {
                    proxy: {
                        '/newdev2': {
                            target: 'http://dev.xxx.com',
                            changeOrigin: true,
                            secure: false,
                            onProxyReq: (proxyReq, req, res) => {
                                if (proxyReqHeaders) {
                                    for (const key in proxyReqHeaders) {
                                        proxyReq.setHeader(key, proxyReqHeaders[key]);
                                    }
                                }
                            }
                        },
                        '/hairuo/request.ajax': {
                            target: 'http://dev.xxx.com',
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
