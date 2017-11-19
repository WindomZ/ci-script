#!/usr/bin/env node
/**
 * Created by WindomZ on 17-7-3.
 */
'use strict';

const os = require('os');

const prog = require('caporal');

const init = require('./init');
const shell = require('./shell');

const pkg = require('./package.json');
prog.version(pkg.version).description(pkg.description);

prog.argument('[directory]', 'The workspace directory').action((argv, opts) => {
  let dir = argv['directory'] || '';

  process.stdout.write('>>> ci-script start...' + os.EOL);
  shell
    .exec(dir)
    .then(() => {
      process.stdout.write('>>> ci-script complete!' + os.EOL);
    })
    .catch(e => {
      console.error(e.message);
    });
});

prog
  .command('init', 'init...')
  .argument('[directory]', 'The workspace directory', prog.STRING)
  .action((argv, opts) => {
    let dir = argv['directory'] || '';

    process.stdout.write('>>> ci-script init start...' + os.EOL);
    init
      .initConfig(dir)
      .then(() => {
        process.stdout.write('>>> ci-script init complete!' + os.EOL);
      })
      .catch(e => {
        console.error(e.message);
      });
  });

prog.parse(process.argv);
