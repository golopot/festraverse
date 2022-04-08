const { parse } = require("espree");
const { traverse, traverseVariableDeclaration } = require("..");
const { readFileSync } = require("fs");
const { performance } = require("perf_hooks");
const estravse = require("estraverse");

// same add code as above

const source = readFileSync(__dirname + "/react.development.js").toString();
s = performance.now();

const ast = parse(source);
e = performance.now();
console.log(e - s);

c = 0;
s = performance.now();
traverse(ast, {
  enter(node) {
    c++;
  },
});
e = performance.now();
console.log(e - s);
