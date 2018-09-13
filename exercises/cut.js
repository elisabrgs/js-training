'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 function cutFirst(iStr) {
 	return iStr.substr(2);
 }

 function cutLast(iStr) {
 	return iStr.substr(0, iStr.length - 2);
 }

 function cutFirstLast(iStr) {
 	return cutLast(cutFirst(iStr));
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirstLast('blablabla'), 'ablab')

// End of tests */
