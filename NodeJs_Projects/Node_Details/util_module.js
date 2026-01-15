// Node.js Util Module Overview

// Require the util module
const util = require('util');

// The Util module provides a set of utility functions that are useful for debugging and testing.

// util.format()
console.log(util.format('Hello, %s!', 'World')); // Output: Hello, World!
console.log(util.format('The answer is %d', 42)); // Output: The answer is 42
console.log(util.format('The answer is %j', { answer: 42 })); // Output: The answer is {"answer":42}

// util.inspect()
const obj = { a: 1, b: 2 };
console.log(util.inspect(obj)); // Output: { a: 1, b: 2 }
console.log(util.inspect(obj, { showHidden: true, depth: null, colors: true })); // Output: { a: 1, b: 2 } with colors

// util.isArray()
console.log(util.isArray([1, 2, 3])); // Output: true
console.log(util.isArray({ a: 1 })); // Output: false

// util.isBoolean()
console.log(util.isBoolean(true)); // Output: true
console.log(util.isBoolean(1)); // Output: false

// util.isNull()
console.log(util.isNull(null)); // Output: true
console.log(util.isNull(undefined)); // Output: false

// util.isNullOrUndefined()
console.log(util.isNullOrUndefined(null)); // Output: true
console.log(util.isNullOrUndefined(undefined)); // Output: true
console.log(util.isNullOrUndefined(1)); // Output: false

// util.isNumber()
console.log(util.isNumber(1)); // Output: true
console.log(util.isNumber('1')); // Output: false

// util.isString()
console.log(util.isString('hello')); // Output: true
console.log(util.isString(1)); // Output: false

// util.isSymbol()
console.log(util.isSymbol(Symbol('hello'))); // Output: true
console.log(util.isSymbol('hello')); // Output: false

// util.isUndefined()
console.log(util.isUndefined(undefined)); // Output: true
console.log(util.isUndefined(null)); // Output: false

// util.isRegExp()
console.log(util.isRegExp(/hello/)); // Output: true
console.log(util.isRegExp('hello')); // Output: false

// util.isObject()
console.log(util.isObject({ a: 1 })); // Output: true
console.log(util.isObject(1)); // Output: false

// util.isDate()
console.log(util.isDate(new Date())); // Output: true
console.log(util.isDate(1)); // Output: false

// util.isError()
console.log(util.isError(new Error('Error message'))); // Output: true
console.log(util.isError('Error message')); // Output: false

// util.inherits()
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(this.name + ' is eating');
};

function Dog(name) {
  Animal.call(this, name);
}

util.inherits(Dog, Animal);

Dog.prototype.bark = function() {
  console.log(this.name + ' is barking');
};

const dog = new Dog('Buddy');
dog.eat(); // Output: Buddy is eating
dog.bark(); // Output: Buddy is barking

// util.promisify()
const fs = require('fs');
const readFile = util.promisify(fs.readFile);

async function readFileAsync() {
  try {
    const data = await readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFileAsync();

// util.callbackify()
async function asyncFunction() {
  return 'Hello, World!';
}

const callbackFunction = util.callbackify(asyncFunction);

callbackFunction((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result); // Output: Hello, World!
  }
});

// util.debuglog()
const debuglog = util.debuglog('test');
debuglog('Hello, World!'); // Output: TEST 1234: Hello, World!

// util.deprecate()
const deprecatedFunction = util.deprecate(() => {
  console.log('This function is deprecated');
}, 'This function is deprecated');

deprecatedFunction(); // Output: (node:1234) DeprecationWarning: This function is deprecated