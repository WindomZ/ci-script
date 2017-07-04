/**
 * Created by WindomZ on 17-7-3.
 */
'use strict';

const shell = require('./shell');

module.exports = shell.exec;
module.exports.execSync = shell.execSync;
