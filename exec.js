/**
 * Created by WindomZ on 17-7-3.
 */
'use strict';

const shell = require('shelljs');

const loader = require('./loader');

function execScripts(scripts = []) {
    scripts = scripts || [];
    scripts.every(script => {
        if (script && shell.exec(script).code !== 0) {
            throw new EvalError('Error: Fail to execute "' + script + '"!');
        }

        return true;
    })
}

function execSync(dir) {
    return execScripts(loader.loadSync(dir));
}

function *exec(dir) {
    return yield execScripts(loader.loadSync(dir));
}

module.exports.exec = dir => new Promise(resolve => {
    exec(dir).next();
    resolve();
});
module.exports.execSync = execSync;
