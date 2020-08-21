#!/usr/bin/env node
const { program } = require('commander');

const command = {
    init(version){
        program.version(version);
    },
    main(commands) {

        if (Array.isArray(commands)) {
            commands.forEach(command => {
                program
                    .command(command.name)
                    .description(desc)
                    .action(function (dir, cmdObj) {
                        callback && callback()
                    })
            })
            program.parseAsync(process.argv)
            return
        }
        console.error("初始化命令失败")
    }
}
exports default command