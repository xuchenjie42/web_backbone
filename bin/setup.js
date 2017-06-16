#!/usr/local/bin/node

'use strict';

var spawn = require('child_process').spawn;

var commands = [
  {
    name: 'npm',
    args: ['install']
  },
  {
    name: 'bower',
    args: ['install']
  },
  {
    name: 'gulp',
    args: ['setup']
  },
  {
    name: 'git',
    args: ['clone', 'git@ghe.am.sony.com:Masquerade/res.git', './res/shared']
  }
];

var index = 0;
var next;

var run = function(command) {
  var args = command.args;
  var log = command.name + (args && args.length ? ' ' + args.toString().replace(/,/g, ' ') : '');

  console.log('> ' + log);

  spawn(command.name, command.args, {
    stdio: 'inherit'
  }).on('error', function () {
    console.dir(arguments);
  }).on('close', function () {
    console.log('< ' + log);

    if(index < commands.length) {
      next();
    }
  });
};

var install = function() {
  var _data = '';

  var child = spawn('npm', ['-g', 'ls', '--json', '--depth=0'], {
    stdio: 'pipe'
  });

  child.stdout.on('data', function(data) {
    _data += data.toString();
  });

  child.on('close', function() {
    var packages = JSON.parse(_data);
    var dependencies = packages ? packages.dependencies : {};

    var check = function(dep) {
      if(dependencies[dep]) {
        commands.unshift({
          name: 'npm',
          args: ['update', '-g', dep]
        });
      } else {
        commands.unshift({
          name: 'npm',
          args: ['install', '-g', dep]
        });
      }
    };

    check('gulp');
    check('bower');

    next();
  });
};

next = function() {
  run(commands[index++]);
};

install();
