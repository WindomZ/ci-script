#!/usr/bin/env node
/**
 * Created by WindomZ on 17-7-3.
 */
'use strict';

const os = require('os');

const shell = require('./shell');

function outputHelp() {
  process.stdout.write(`
  Usage: ci-script [options] [directory]

  Execute the CI scripts.

  Options:
    -h, --help, help            output usage information
    -v, -V, --version, version  output the version number
`);
}

function outputVersion() {
  process.stdout.write(require('./package.json').version + os.EOL);
}

function outputExec(dir) {
  process.stdout.write('>>> ci-script start...' + os.EOL);
  shell
    .exec(dir)
    .then(() => {
      process.stdout.write('>>> ci-script complete!' + os.EOL);
    })
    .catch(e => {
      console.error(e.message);
    });
}

let argv = process.argv.slice(2);

if (argv.length === 0) {
  outputExec();
  return;
}

let noArgs = true;

argv.every(arg => {
  if (arg.match(/^(-v|--version|version)$/i)) {
    outputVersion();
    noArgs = false;
    return false;
  } else if (arg.match(/^(-h|--help|help)$/i)) {
    outputHelp();
    noArgs = false;
    return false;
  } else if (!arg.startsWith('-')) {
    outputExec(arg);
    noArgs = false;
    return false;
  }
  return true;
});

if (noArgs) {
  outputHelp();
}
