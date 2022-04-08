const test = require("ava");
const fs = require("fs");
const espree = require("espree");
const estraverse = require("estraverse");
const festraverse = require("../lib/festraverse");

const source = fs.readFileSync(__dirname + "/fixtures/react.development.js");
const ast = espree.parse(source);

test("foo", (t) => {
  let c = 0;
  let d = 0;

  estraverse.traverse(ast, {
    enter() {
      c += 1;
    },
    leave() {
      c += 1;
    },
  });

  festraverse.traverse(ast, {
    enter() {
      d += 1;
    },
    leave() {
      d += 1;
    },
  });

  t.is(c, d);
});
