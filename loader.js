/**
 * Created by WindomZ on 17-7-3.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const yaml = require('js-yaml');

function loadSyncTravis(dir) {
    let filePath = path.join(path.resolve(dir || process.cwd()), '.travis.yml');
    fs.accessSync(filePath, fs.R_OK);

    let doc = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
    if (doc.script && Array.isArray(doc.script)) {
        return doc.script;
    }
    return [];
}

function loadSync(dir) {
    return loadSyncTravis(dir);
}

function * load(dir) {
    return yield loadSyncTravis(dir);
}

module.exports.load = dir => new Promise(resolve => {
    load(dir).next();
    resolve();
});
module.exports.loadSync = loadSync;
