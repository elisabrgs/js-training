'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

 function yell(iStr) {
 	return iStr.toUpperCase();
 }


//* Begin of tests
const assert = require('assert')

assert.deepStrictEqual(yell('aaa'), 'AAA')
assert.deepStrictEqual(yell('bbb'), 'BBB')
assert.deepStrictEqual(yell('a a a'), 'A A A')



// End of tests */
