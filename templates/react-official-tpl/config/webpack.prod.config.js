/**
 * @file webpack 生产环境
 * @author gavinguo
 * @date 2020/6/28
 **/

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env = {}) => {
    const config = merge(common, {
        mode: 'production',
        output: {
            // 给打包出的js文件换个不确定名字
            filename: 'js/[name].[chunkhash:8].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]
                },
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        optimization: {
            // 压缩JS文件
            minimizer: [new UglifyJsPlugin()],
            // 代码分割
            splitChunks: {
                chunks: 'all',
                minSize: 30000,
                maxSize: 0,
                minChunks: 1,
                cacheGroups: {
                    framework: {
                        test: 'framework',
                        name: 'framework',
                        enforce: true
                    },
                    vendors: {
                        priority: -10,
                        test: /node_modules/,
                        name: 'vendor',
                        enforce: true
                    }
                }
            }
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env.NODE_ENV || 'production'),
                    PROXY_TO: JSON.stringify(env.proxyTo)
                }
            }),
            // 自动添加js引用
            new HtmlWebpackPlugin({
                // 打包之后的html文件名字
                filename: 'index.html',
                // 以我们自己定义的html为模板生成，不然我们还要到打包之后的html文件中写
                template: 'public/index.html',
                // 在body最底部引入js文件，如果是head，就是在head中引入js
                inject: 'body',
                // 压缩html文件
                minify: {
                    // 去除注释
                    removeComments: true,
                    // 去除空格
                    collapseWhitespace: true
                }
            }),
            // 打包编译前清理dist目录
            new CleanWebpackPlugin(),
            // 打包出CSS独立文件
            new MiniCssExtractPlugin({
                filename: 'css/[name].[hash].css',
                chunkFilename: 'css/[id].[hash].css'
            })
        ]
    });
    return config;
};