const path = require("path")
let rootPath = path.resolve(__dirname)
console.log(rootPath.indexOf('node_modules'));
console.log(rootPath.slice(0, rootPath.indexOf('node_modules')));