# festraverse

## Usage

```js
const festraverse = require("festraverse");
const acron = require('acorn');

const ast = acorn.parse("function f() { console.log(1)}")
festraverse.traverse(ast, {
  enter(node) {
    console.log(node);
  }
  leave(node) {
    console.log(node);
  }
})
```
