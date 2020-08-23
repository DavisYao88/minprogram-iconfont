/*
 * @Author: heishanlaoyao
 * @Date: 2020-04-09 13:58:11
 * @Last Modified by: heishanlaoyao
 * @Last Modified time: 2020-04-10 18:29:30
 */

const exec = require('child_process').exec
module.exports = {
  getShellOutContent(cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, function (err, stdout, stderr) {
        if (err) {
          if (stdout == '') {
            resolve(stdout)
          } else {
            reject(err)
          }
        } else {
          resolve(stdout)
        }
      })
    })
  }
}
