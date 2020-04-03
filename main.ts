import assert from "assert"
import Parser from "tree-sitter";
import JavaScript from "tree-sitter-javascript";

export const parser = new Parser();
parser.setLanguage(JavaScript);

let tree = parser.parse(`foo(a().b[0].c.d.e())`)

let foo = tree.rootNode.firstNamedChild!.firstNamedChild!
assert(foo.type === 'call_expression')

//@ts-ignore
console.log(foo.functionNode.parent.type)

// Prints _expression
