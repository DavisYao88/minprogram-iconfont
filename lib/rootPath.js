/*
 * @Author: heishanlaoyao 
 * @Date: 2020-08-22 16:43:16 
 * @Last Modified by: heishanlaoyao
 * @Last Modified time: 2020-08-22 16:56:54
 */
/**
 *  获取配置文件目录
 * @param {*} params 
 */
const path = require("path")
function getProjectRootPath(name = "lib") {
    let rootPath = path.resolve(__dirname)
    console.log(rootPath);
    return rootPath.slice(0, rootPath.indexOf(name))
}
module.exports = { getProjectRootPath}