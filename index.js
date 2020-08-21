/*
 * @Author: heishanlaoyao 
 * @Date: 2020-08-22 00:53:07 
 * @Last Modified by: heishanlaoyao
 * @Last Modified time: 2020-08-22 00:58:22
 */
const { executeGeneate} = require('./command/geneateStyleFont')
const command = require('./lib/command')
(() => {
    const commands = [
        {
            name: 'init',
            desc: 'Initialize the configuration file',
            callback: () => { }
        },
        {
            name: "generate",
            desc: 'Generate the style sheet from the configuration file',
            callback: executeGeneate
        }
    ]
    command.init("0.1.0")
    command.main(commands)
})()