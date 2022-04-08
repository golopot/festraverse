// generated code

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
// TODO: benchmark aginst object
const traversers = new Map([
  ["AssignmentExpression", traverseAssignmentExpression],
  ["AssignmentPattern", traverseAssignmentPattern],
  ["ArrayExpression", traverseArrayExpression],
  ["ArrayPattern", traverseArrayPattern],
  ["ArrowFunctionExpression", traverseArrowFunctionExpression],
  ["AwaitExpression", traverseAwaitExpression],
  ["BlockStatement", traverseBlockStatement],
  ["BinaryExpression", traverseBinaryExpression],
  ["BreakStatement", traverseBreakStatement],
  ["CallExpression", traverseCallExpression],
  ["CatchClause", traverseCatchClause],
  ["ChainExpression", traverseChainExpression],
  ["ClassBody", traverseClassBody],
  ["ClassDeclaration", traverseClassDeclaration],
  ["ClassExpression", traverseClassExpression],
  ["ComprehensionBlock", traverseComprehensionBlock],
  ["ComprehensionExpression", traverseComprehensionExpression],
  ["ConditionalExpression", traverseConditionalExpression],
  ["ContinueStatement", traverseContinueStatement],
  ["DebuggerStatement", traverseDebuggerStatement],
  ["DirectiveStatement", traverseDirectiveStatement],
  ["DoWhileStatement", traverseDoWhileStatement],
  ["EmptyStatement", traverseEmptyStatement],
  ["ExportAllDeclaration", traverseExportAllDeclaration],
  ["ExportDefaultDeclaration", traverseExportDefaultDeclaration],
  ["ExportNamedDeclaration", traverseExportNamedDeclaration],
  ["ExportSpecifier", traverseExportSpecifier],
  ["ExpressionStatement", traverseExpressionStatement],
  ["ForStatement", traverseForStatement],
  ["ForInStatement", traverseForInStatement],
  ["ForOfStatement", traverseForOfStatement],
  ["FunctionDeclaration", traverseFunctionDeclaration],
  ["FunctionExpression", traverseFunctionExpression],
  ["GeneratorExpression", traverseGeneratorExpression],
  ["Identifier", traverseIdentifier],
  ["IfStatement", traverseIfStatement],
  ["ImportExpression", traverseImportExpression],
  ["ImportDeclaration", traverseImportDeclaration],
  ["ImportDefaultSpecifier", traverseImportDefaultSpecifier],
  ["ImportNamespaceSpecifier", traverseImportNamespaceSpecifier],
  ["ImportSpecifier", traverseImportSpecifier],
  ["Literal", traverseLiteral],
  ["LabeledStatement", traverseLabeledStatement],
  ["LogicalExpression", traverseLogicalExpression],
  ["MemberExpression", traverseMemberExpression],
  ["MetaProperty", traverseMetaProperty],
  ["MethodDefinition", traverseMethodDefinition],
  ["ModuleSpecifier", traverseModuleSpecifier],
  ["NewExpression", traverseNewExpression],
  ["ObjectExpression", traverseObjectExpression],
  ["ObjectPattern", traverseObjectPattern],
  ["PrivateIdentifier", traversePrivateIdentifier],
  ["Program", traverseProgram],
  ["Property", traverseProperty],
  ["PropertyDefinition", traversePropertyDefinition],
  ["RestElement", traverseRestElement],
  ["ReturnStatement", traverseReturnStatement],
  ["SequenceExpression", traverseSequenceExpression],
  ["SpreadElement", traverseSpreadElement],
  ["Super", traverseSuper],
  ["SwitchStatement", traverseSwitchStatement],
  ["SwitchCase", traverseSwitchCase],
  ["TaggedTemplateExpression", traverseTaggedTemplateExpression],
  ["TemplateElement", traverseTemplateElement],
  ["TemplateLiteral", traverseTemplateLiteral],
  ["ThisExpression", traverseThisExpression],
  ["ThrowStatement", traverseThrowStatement],
  ["TryStatement", traverseTryStatement],
  ["UnaryExpression", traverseUnaryExpression],
  ["UpdateExpression", traverseUpdateExpression],
  ["VariableDeclaration", traverseVariableDeclaration],
  ["VariableDeclarator", traverseVariableDeclarator],
  ["WhileStatement", traverseWhileStatement],
  ["WithStatement", traverseWithStatement],
  ["YieldExpression", traverseYieldExpression],
])
function traverseAssignmentExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.left, visitor)
  traverseKey(node.right, visitor)
  visitor.leave(node)
}

function traverseAssignmentPattern(node, visitor) {
  visitor.enter(node)
  traverseKey(node.left, visitor)
  traverseKey(node.right, visitor)
  visitor.leave(node)
}

function traverseArrayExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.elements, visitor)
  visitor.leave(node)
}

function traverseArrayPattern(node, visitor) {
  visitor.enter(node)
  traverseKey(node.elements, visitor)
  visitor.leave(node)
}

function traverseArrowFunctionExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.params, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseAwaitExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.argument, visitor)
  visitor.leave(node)
}

function traverseBlockStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseBinaryExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.left, visitor)
  traverseKey(node.right, visitor)
  visitor.leave(node)
}

function traverseBreakStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.label, visitor)
  visitor.leave(node)
}

function traverseCallExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.callee, visitor)
  traverseKey(node.arguments, visitor)
  visitor.leave(node)
}

function traverseCatchClause(node, visitor) {
  visitor.enter(node)
  traverseKey(node.param, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseChainExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.expression, visitor)
  visitor.leave(node)
}

function traverseClassBody(node, visitor) {
  visitor.enter(node)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseClassDeclaration(node, visitor) {
  visitor.enter(node)
  traverseKey(node.id, visitor)
  traverseKey(node.superClass, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseClassExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.id, visitor)
  traverseKey(node.superClass, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseComprehensionBlock(node, visitor) {
  visitor.enter(node)
  traverseKey(node.left, visitor)
  traverseKey(node.right, visitor)
  visitor.leave(node)
}

function traverseComprehensionExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.blocks, visitor)
  traverseKey(node.filter, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseConditionalExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.test, visitor)
  traverseKey(node.consequent, visitor)
  traverseKey(node.alternate, visitor)
  visitor.leave(node)
}

function traverseContinueStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.label, visitor)
  visitor.leave(node)
}

function traverseDebuggerStatement(node, visitor) {
  visitor.enter(node)
  visitor.leave(node)
}

function traverseDirectiveStatement(node, visitor) {
  visitor.enter(node)
  visitor.leave(node)
}

function traverseDoWhileStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.body, visitor)
  traverseKey(node.test, visitor)
  visitor.leave(node)
}

function traverseEmptyStatement(node, visitor) {
  visitor.enter(node)
  visitor.leave(node)
}

function traverseExportAllDeclaration(node, visitor) {
  visitor.enter(node)
  traverseKey(node.source, visitor)
  visitor.leave(node)
}

function traverseExportDefaultDeclaration(node, visitor) {
  visitor.enter(node)
  traverseKey(node.declaration, visitor)
  visitor.leave(node)
}

function traverseExportNamedDeclaration(node, visitor) {
  visitor.enter(node)
  traverseKey(node.declaration, visitor)
  traverseKey(node.specifiers, visitor)
  traverseKey(node.source, visitor)
  visitor.leave(node)
}

function traverseExportSpecifier(node, visitor) {
  visitor.enter(node)
  traverseKey(node.exported, visitor)
  traverseKey(node.local, visitor)
  visitor.leave(node)
}

function traverseExpressionStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.expression, visitor)
  visitor.leave(node)
}

function traverseForStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.init, visitor)
  traverseKey(node.test, visitor)
  traverseKey(node.update, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseForInStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.left, visitor)
  traverseKey(node.right, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseForOfStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.left, visitor)
  traverseKey(node.right, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseFunctionDeclaration(node, visitor) {
  visitor.enter(node)
  traverseKey(node.id, visitor)
  traverseKey(node.params, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseFunctionExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.id, visitor)
  traverseKey(node.params, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseGeneratorExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.blocks, visitor)
  traverseKey(node.filter, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseIdentifier(node, visitor) {
  visitor.enter(node)
  visitor.leave(node)
}

function traverseIfStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.test, visitor)
  traverseKey(node.consequent, visitor)
  traverseKey(node.alternate, visitor)
  visitor.leave(node)
}

function traverseImportExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.source, visitor)
  visitor.leave(node)
}

function traverseImportDeclaration(node, visitor) {
  visitor.enter(node)
  traverseKey(node.specifiers, visitor)
  traverseKey(node.source, visitor)
  visitor.leave(node)
}

function traverseImportDefaultSpecifier(node, visitor) {
  visitor.enter(node)
  traverseKey(node.local, visitor)
  visitor.leave(node)
}

function traverseImportNamespaceSpecifier(node, visitor) {
  visitor.enter(node)
  traverseKey(node.local, visitor)
  visitor.leave(node)
}

function traverseImportSpecifier(node, visitor) {
  visitor.enter(node)
  traverseKey(node.imported, visitor)
  traverseKey(node.local, visitor)
  visitor.leave(node)
}

function traverseLiteral(node, visitor) {
  visitor.enter(node)
  visitor.leave(node)
}

function traverseLabeledStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.label, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseLogicalExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.left, visitor)
  traverseKey(node.right, visitor)
  visitor.leave(node)
}

function traverseMemberExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.object, visitor)
  traverseKey(node.property, visitor)
  visitor.leave(node)
}

function traverseMetaProperty(node, visitor) {
  visitor.enter(node)
  traverseKey(node.meta, visitor)
  traverseKey(node.property, visitor)
  visitor.leave(node)
}

function traverseMethodDefinition(node, visitor) {
  visitor.enter(node)
  traverseKey(node.key, visitor)
  traverseKey(node.value, visitor)
  visitor.leave(node)
}

function traverseModuleSpecifier(node, visitor) {
  visitor.enter(node)
  visitor.leave(node)
}

function traverseNewExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.callee, visitor)
  traverseKey(node.arguments, visitor)
  visitor.leave(node)
}

function traverseObjectExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.properties, visitor)
  visitor.leave(node)
}

function traverseObjectPattern(node, visitor) {
  visitor.enter(node)
  traverseKey(node.properties, visitor)
  visitor.leave(node)
}

function traversePrivateIdentifier(node, visitor) {
  visitor.enter(node)
  visitor.leave(node)
}

function traverseProgram(node, visitor) {
  visitor.enter(node)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseProperty(node, visitor) {
  visitor.enter(node)
  traverseKey(node.key, visitor)
  traverseKey(node.value, visitor)
  visitor.leave(node)
}

function traversePropertyDefinition(node, visitor) {
  visitor.enter(node)
  traverseKey(node.key, visitor)
  traverseKey(node.value, visitor)
  visitor.leave(node)
}

function traverseRestElement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.argument, visitor)
  visitor.leave(node)
}

function traverseReturnStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.argument, visitor)
  visitor.leave(node)
}

function traverseSequenceExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.expressions, visitor)
  visitor.leave(node)
}

function traverseSpreadElement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.argument, visitor)
  visitor.leave(node)
}

function traverseSuper(node, visitor) {
  visitor.enter(node)
  visitor.leave(node)
}

function traverseSwitchStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.discriminant, visitor)
  traverseKey(node.cases, visitor)
  visitor.leave(node)
}

function traverseSwitchCase(node, visitor) {
  visitor.enter(node)
  traverseKey(node.test, visitor)
  traverseKey(node.consequent, visitor)
  visitor.leave(node)
}

function traverseTaggedTemplateExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.tag, visitor)
  traverseKey(node.quasi, visitor)
  visitor.leave(node)
}

function traverseTemplateElement(node, visitor) {
  visitor.enter(node)
  visitor.leave(node)
}

function traverseTemplateLiteral(node, visitor) {
  visitor.enter(node)
  traverseKey(node.quasis, visitor)
  traverseKey(node.expressions, visitor)
  visitor.leave(node)
}

function traverseThisExpression(node, visitor) {
  visitor.enter(node)
  visitor.leave(node)
}

function traverseThrowStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.argument, visitor)
  visitor.leave(node)
}

function traverseTryStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.block, visitor)
  traverseKey(node.handler, visitor)
  traverseKey(node.finalizer, visitor)
  visitor.leave(node)
}

function traverseUnaryExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.argument, visitor)
  visitor.leave(node)
}

function traverseUpdateExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.argument, visitor)
  visitor.leave(node)
}

function traverseVariableDeclaration(node, visitor) {
  visitor.enter(node)
  traverseKey(node.declarations, visitor)
  visitor.leave(node)
}

function traverseVariableDeclarator(node, visitor) {
  visitor.enter(node)
  traverseKey(node.id, visitor)
  traverseKey(node.init, visitor)
  visitor.leave(node)
}

function traverseWhileStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.test, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseWithStatement(node, visitor) {
  visitor.enter(node)
  traverseKey(node.object, visitor)
  traverseKey(node.body, visitor)
  visitor.leave(node)
}

function traverseYieldExpression(node, visitor) {
  visitor.enter(node)
  traverseKey(node.argument, visitor)
  visitor.leave(node)
}

function noop() {}

function traverse(ast, { enter, leave, fallback }) {
  enter = enter || noop;
  leave = leave || noop;
  fallback = fallback || noop;

  traverseProgram(ast, { enter, leave, fallback });
}

module.exports = { traverse };
