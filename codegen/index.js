const keys = require("./keys");

const HEAD = `// generated code

function traverseKey(node, visitor) {
  if (!node) {
    return;
  }

  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      const nodeI = node[i];
      if (nodeI !== null) {
        const fn = traversers.get(nodeI.type);
        if (fn !== undefined) {
          fn(nodeI, visitor);
        } else {
          visitor.fallback(nodeI, visitor);
        }
      }
    }
  } else {
    const fn = traversers.get(node.type);
    if (fn !== undefined) {
      fn(node, visitor);
    } else {
      visitor.fallback(node, visitor);
    }
  }
}
`;

const TAIL = `function noop() {}

function traverse(ast, { enter, leave, fallback }) {
  enter = enter || noop;
  leave = leave || noop;
  fallback = fallback || noop;

  traverseProgram(ast, { enter, leave, fallback });
}

module.exports = { traverse };`;

function renderTraversersMap() {
  const lines = Object.keys(keys)
    .map((k) => `  ["${k}", traverse${k}],`)
    .join("\n");

  return `// TODO: benchmark aginst object
const traversers = new Map([
${lines}
])
`;
}

function renderTraverser(type) {
  let s = `function traverse${type}(node, visitor) {
  visitor.enter(node)
`;
  for (const property of keys[type]) {
    s += `  traverseKey(node.${property}, visitor)\n`;
  }

  s += "  visitor.leave(node)\n";
  s += `}\n`;
  return s;
}

function renderTraversers() {
  let s = "";
  for (const type in keys) {
    s += renderTraverser(type) + "\n";
  }
  return s;
}

function render() {
  return HEAD + renderTraversersMap() + renderTraversers() + TAIL;
}

const t = render();
console.log(t);
