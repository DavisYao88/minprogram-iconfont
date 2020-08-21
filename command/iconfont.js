#!/usr/bin/env node
const { program } = require('commander');
program.version('0.0.1');
program
    .command('init')
    .description('Initialize the configuration file')
    .action(function (dir, cmdObj) {
        // console.log(dir, cmdObj);
        console.log('Initialize the configuration file');
    })

program
    .command('generate')
    .description('Generate the style sheet from the configuration file')
    .action(function (dir, cmdObj) {
        console.log('Generate the style sheet from the configuration file');
    })

program.parse(process.argv)