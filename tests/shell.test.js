/**
 * Created by WindomZ on 17-7-3.
 */
'use strict';

const test = require('ava');

const shell = require('../shell');

test('shell pass', async t => {
  try {
    shell.execSync('tests');
  } catch (e) {
    console.error(e);
    t.fail(e);
  }

  await shell
    .exec('tests')
    .then(() => {
      t.pass();
    })
    .catch(e => {
      t.fail(e);
    });

  await shell
    .exec('tests/empty')
    .then(() => {
      t.pass();
    })
    .catch(e => {
      t.fail(e);
    });

  await shell
    .exec('tests/wrong')
    .then(() => {
      t.fail('Should be error!');
    })
    .catch(() => {
      t.pass();
    });

  await shell
    .exec('tests/config')
    .then(() => {
      t.pass();
    })
    .catch(e => {
      t.fail(e);
    });

  await shell
    .exec('tests/single')
    .then(() => {
      t.pass();
    })
    .catch(e => {
      t.fail(e);
    });
});
