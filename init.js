/**
 * Created by WindomZ on 17-11-17.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const yaml = require('js-yaml');

function generateFile(dir) {
  dir = path.resolve(dir || process.cwd());
  let filePath = path.join(dir, '.ciscript.yml');
  // if exist ciscript.yml
  //  try {
  //    fs.accessSync(filePath, fs.R_OK);
  //    return filePath;
  //  } catch (e) {}
  // write to ciscript.yml
  try {
    fs.writeFileSync(
      filePath,
      '## Generated by ci-script(https://github.com/WindomZ/ci-script)\n\n' +
        yaml.safeDump({
          script: ['echo "no script!" && exit 0'],
        })
    );
  } catch (e) {
    throw e;
  }
  return filePath;
}

function generateSync(dir) {
  return generateFile(dir);
}

function* generate(dir) {
  return yield generateFile(dir);
}

module.exports.initConfig = dir =>
  new Promise(resolve => {
    generate(dir).next();
    resolve();
  });
module.exports.initConfigSync = generateSync;
