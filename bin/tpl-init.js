#! /usr/bin/env node

/**
 * @file 初始化模板
 * @author gavinguo
 */

const path = require('path');
const inquirer = require('inquirer');
const ora = require('ora');
const ncp = require('ncp').ncp;
const chalk = require('chalk');
const chalkError = chalk.bold.red;
const chalkSuccess = chalk.bold.green;

// 对话
async function chooseTarget() {
    try {
        return await inquirer.prompt([
            {
                type: 'list',
                name: 'target',
                message: 'please choose a template?',
                choices: ['react-hooks-tpl', 'react-official-tpl'],
                default: 'react-official-tpl'
            },
            {
                type: 'input',
                name: 'projectName',
                message: 'what\'s your project name?',
                default: 'tpl-demo'
            },
            {
                type: 'input',
                name: 'author',
                message: 'Author',
                default () {
                    return 'Your Name <you@example.com>';
                }
            }
        ]);
    } catch (e) {
        console.log(chalkError(e));
        process.exit(1);
    }
}

(async function () {
    // 获取用户输入的参数
    const {
        target,
        projectName
    } = await chooseTarget();
    // 用于显示加载中的效果，类似于loading效果
    const spinner = ora(`generator ${target} template...`).start();
    // 查询绝对路径的文件名
    const dir = require.resolve('./tpl.js');
    // 将多个参数字符串合并成一个路径字符串
    const tplPath = path.join(dir, '../../', 'templates', target);

    // 异步复制文件
    ncp(tplPath, projectName, err => {
        if (err) {
            return spinner.fail('Failed to create template. Please try again.');
        }
        spinner.succeed();
        console.log(chalkSuccess('^_^ This template has been initialized successfully!'));
    });
})();
