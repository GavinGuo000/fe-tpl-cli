/**
 * @file postcss配置文件
 * @author gavinguo
 * @date 2020/6/28
 **/

module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: ['> 0.15% in CN']
        })
    ]
};
