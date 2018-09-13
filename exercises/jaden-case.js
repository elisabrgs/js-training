'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 function jadencase(iStr) {
 	let arr = iStr.split(' ')
 	let newStr = '';
 	for (let i = 0; i < arr.length; i++) {
 		newStr += ' ' + arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
 	}
 	return newStr.substr(1);
 }



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadencase, "function")
assert.strictEqual(jadencase('str str'), 'Str Str')
assert.strictEqual(jadencase('qsdqsdqsd qsdqsdqsd'), 'Qsdqsdqsd Qsdqsdqsd')
assert.strictEqual(jadencase('STR STR'), 'Str Str')
assert.strictEqual(jadencase('zapZAP zapZAP'), 'Zapzap Zapzap')
// End of tests */
