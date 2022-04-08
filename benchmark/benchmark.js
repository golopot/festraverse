const fastglob = require("fast-glob");
const fs = require("fs-extra");
const espree = require("espree");
const festraverse = require("..");
const estraverse = require("estraverse");
const { performance } = require("perf_hooks");

async function run(traverse) {
  const paths = await fastglob(__dirname + "/fixtures/source/**/*.js");

  const asts = [];
  for (const p of paths) {
    const source = fs.readFileSync(p).toString();
    const ast = espree.parse(source, { ecmaVersion: 2020 });
    asts.push(ast);
  }

  const s = performance.now();
  for (let i = 0; i < 1; i++) {
    for (const ast of asts) {
      traverse(ast, {
        enter() {},
      });
    }
  }
  const e = performance.now();
  console.log(e - s);
}

async function main() {
  await run(festraverse.traverse);
  await run(estraverse.traverse);
}

main();
