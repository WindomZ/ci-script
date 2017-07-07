/**
 * Created by WindomZ on 17-7-3.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const yaml = require('js-yaml');

function loadScripts(dir) {
  dir = path.resolve(dir || process.cwd());
  let filePath = path.join(dir, '.ciscript.yml');
  try {
    fs.accessSync(filePath, fs.R_OK);
  } catch (e) {
    filePath = path.join(dir, '.travis.yml');
  }
  let doc = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
  if (doc.script) {
    if (Array.isArray(doc.script)) {
      return doc.script;
    }
    return [doc.script];
  }
  return [];
}

function loadSync(dir) {
  return loadScripts(dir);
}

function* load(dir) {
  return yield loadScripts(dir);
}

module.exports.load = dir =>
  new Promise(resolve => {
    load(dir).next();
    resolve();
  });
module.exports.loadSync = loadSync;
