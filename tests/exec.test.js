/**
 * Created by WindomZ on 17-7-3.
 */
"use strict";

const test = require("ava");

const exec = require("../exec");

test("exec pass", async t => {
  try {
    exec.execSync("tests");
  } catch (e) {
    console.error(e);
    t.fail(e);
  }

  await exec
    .exec("tests")
    .then(() => {
      t.pass();
    })
    .catch(e => {
      t.fail(e);
    });
});
