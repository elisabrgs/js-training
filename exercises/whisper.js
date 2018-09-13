'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 function yell(iStr) {
 	return '*' + iStr.toLowerCase() + '*';
 }

//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(yell('AaA'), '*aaa*')
assert.deepStrictEqual(yell('BBB'), '*bbb*')
assert.deepStrictEqual(yell('A a A'), '*a a a*')
// End of tests */
