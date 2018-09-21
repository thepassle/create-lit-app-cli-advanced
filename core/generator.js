var fs = require('fs-extra');
var child_process = require('child_process');
var { spawn } = require('child_process');
var chalk = require('chalk');

module.exports = {

  generate: function(projectname) {
    fs.mkdirs('./' + projectname + '', function(err) {
      if (err) {
        console.error(err);
      } else {
        var dirname = __dirname;
        var dirstr = dirname.substr(dirname.lastIndexOf('/') + 1) + '$',
        fixedurl = dirname.replace(new RegExp(dirstr), '');

        fs.copy(fixedurl + '/templates/create-lit-app/', "./" + projectname + "", function(err) {
          if (err) {
            console.error(err)
          } else {       
              var path = require('path');
              var projectPath = path.resolve(process.cwd());
              console.log(`Creating a new Lit app in ${chalk.green(projectPath+"/"+projectname)}.\n\nInstalling packages...\nThis might take a couple of minutes.`);

              var npm = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['install'], { cwd: projectPath+'/'+projectname });      

              npm.stdout.on('data', function (data) {
                console.log('' + data);
              });

              npm.on('close', function(code) {
                console.log(`
${chalk.blue(`+--------------------+
|   create-lit-app   |
+--------------------+`)}

Success! Created my-app at ${projectPath}/${projectname}
Inside that directory, you can run several commands:

  ${chalk.blue("npm start")}
    Starts the development server.

  ${chalk.blue("npm build")}
    Bundles the app into static files for production.

  ${chalk.blue("npm test")}
    Starts the test runner.

We suggest that you begin by typing:

  ${chalk.blue("cd")} ${projectname}
  ${chalk.blue("npm start")}

Happy hacking!`);
              });


            }
          });
      }

  });
  }
}
