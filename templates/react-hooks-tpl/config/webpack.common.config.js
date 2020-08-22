/**
 * @file webpack 公共配置
 * @author gavinguo
 * @date 2020/6/28
 **/

const webpack = require('webpack');
const path = require('path');
const PROJECT_PATH = path.join(__dirname, '../');
const SOURCE_PATH = path.join(PROJECT_PATH, './src');

module.exports = {
    // 配置source-map
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: './src/index.js',
        framework: ['react', 'react-dom']
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.less', '.css'],
        alias: {
            '@': SOURCE_PATH
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 8192
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'font/'
                    }
                }
            }
        ]
    }
};
