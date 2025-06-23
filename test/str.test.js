const assert = require('assert');
const eutil = require('../index');

assert.strictEqual(eutil.strSubLeft('abcdef', 2), 'ab');
assert.strictEqual(eutil.strSubRight('abcdef', 2), 'ef');
assert.strictEqual(eutil.strResetBlank('a  b   c'), 'a b c');
assert.strictEqual(eutil.strToInt('123'), 123);
assert.strictEqual(eutil.strToInt('foo'), 'foo');
assert.strictEqual(eutil.strReplaceAll2('a-b-c', '-', '#'), 'a#b#c');

console.log('All tests passed.');

