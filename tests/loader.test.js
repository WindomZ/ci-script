/**
 * Created by WindomZ on 17-7-3.
 */
"use strict";

const test = require("ava");

const loader = require("../loader");

test("loader pass", async t => {
  try {
    loader.loadSync("tests");
  } catch (e) {
    console.error(e);
    t.fail(e);
  }

  await loader
    .load("tests")
    .then(r => {
      t.not(r, []);
      t.pass();
    })
    .catch(e => {
      t.fail(e);
    });
});
