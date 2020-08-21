/*
 * @Author: heishanlaoyao 
 * @Date: 2020-08-21 14:10:32 
 * @Last Modified by: heishanlaoyao
 * @Last Modified time: 2020-08-21 18:38:32
 */

const axios = require('axios');
const fs = require('fs')
const fse = require('fs-extra')

module.exports = {
    /**
     *下载远程文件
     *
     * @param {*} url
     * @returns
     */
    download(url) {
        return new Promise((resolve, reject) => {
            axios({
                method: "get",
                url,
                responseType: 'stream'
            })
                .then(function (response) {
                    resolve(response.data)
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    },
    /**
     * 读取文件
     * @param {文件相对地址} path 
     */
    readJson(path) {
        return new Promise((resolve, reject) => {
            fse.readJson(path, (err, data) => {
                if (err){
                    reject(er)
                } else{
                    resolve(data)
                }
            })
        })
    },
    /**
     * 写入流文件
     *
     * @param {文件目录} folderPath
     * @param {文件名} fileName
     * @param {文件流} stream
     * @returns
     */
    writeFileToFolder(folderPath, fileName, stream) {
        return new Promise((resolve, reject) => {
            try {
                // console.log(fs.createWriteStream(`${folderPath}/${fileName}`));
                stream.pipe(fs.createWriteStream(`${folderPath}/${fileName}`))
                resolve("success")
            } catch (error) {
                reject(error)
            }
        })

    },
    /**
     *判断文件是否有存在
     *
     * @param {*} path
     * @returns
     */
    isExisted(path) {
        return new Promise((resolve, reject) => {
            fs.exists(path, (exists) => {
                if (exists) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            });
        })

    },
}