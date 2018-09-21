#! /usr/bin/env node

var generator = require("./generator.js");

module.exports = {

  listen: function() {
    var userArgs = process.argv.slice(1);
    var arg1 = userArgs[1];
    var projectname = arg1 || 'create-lit-app';
    generator.generate(projectname);
  }
}
