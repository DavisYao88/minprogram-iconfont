/*
 * @Author: heishanlaoyao 
 * @Date: 2020-08-22 16:43:16 
 * @Last Modified by: heishanlaoyao
 * @Last Modified time: 2020-08-22 16:44:15
 */
/**
 *  获取配置文件目录
 * @param {*} params 
 */
const path = require("path")
function getProjectRootPath(name = "node_modules") {
    let rootPath = path.resolve(__dirname)
    return rootPath.slice(0, rootPath.indexOf(name))
}
module.exports = { getProjectRootPath}