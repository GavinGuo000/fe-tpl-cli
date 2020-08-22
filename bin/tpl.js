#! /usr/bin/env node

/**
 * @file fe-tpl-cli
 * @author gavinguo
 */

const program = require('commander');
const version = require('../package').version;
const chalk = require('chalk'); // 终端输出时颜色样式输出工具
const figlet = require('figlet');

console.log(
    chalk.green(
        figlet.textSync('FE-TPL-CLI')
    )
);

// fox 命令
program
    .version(version)
    .description('CLI for new project')
    .usage('<command> [options]')
    .command('init', 'init a new project') // 命令的描述
    .parse(process.argv);
