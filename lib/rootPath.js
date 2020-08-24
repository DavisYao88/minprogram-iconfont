/*
 * @Author: heishanlaoyao 
 * @Date: 2020-08-22 16:43:16 
 * @Last Modified by: heishanlaoyao
 * @Last Modified time: 2020-08-24 17:26:49
 */
/**
 *  获取配置文件目录
 * @param {*} params 
 */

function getProjectRootPath() {
    return process.cwd()
}
module.exports = { getProjectRootPath}