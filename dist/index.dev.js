#!/usr/bin/env node

/*
 * @Author: heishanlaoyao 
 * @Date: 2020-08-22 01:13:48 
 * @Last Modified by: heishanlaoyao
 * @Last Modified time: 2020-08-23 23:15:02
 */
"use strict";

var _require = require('./lib/fileUtil'),
    readJson = _require.readJson;

var _require2 = require('./command/geneateStyleFont'),
    executeGeneate = _require2.executeGeneate;

var _require3 = require('./lib/command'),
    command = _require3.command;

var _require4 = require('./command/initConfig'),
    initIconfontConfig = _require4.initIconfontConfig;

var _require5 = require('./lib/rootPath'),
    getProjectRootPath = _require5.getProjectRootPath;

var colors = require('colors');

(function _callee() {
  var rootPath, packageJson, commands;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          rootPath = getProjectRootPath();
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(readJson("".concat(rootPath, "/package.json")));

        case 4:
          packageJson = _context.sent;
          commands = [{
            name: 'init',
            desc: 'Initialize the configuration file',
            callback: initIconfontConfig
          }, {
            name: "generate",
            desc: 'Generate the style sheet from the configuration file',
            callback: executeGeneate
          }];
          command.init(packageJson.version);
          command.main(commands);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.error(colors.red(_context.t0));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
})();