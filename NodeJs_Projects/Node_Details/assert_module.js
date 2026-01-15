// Node.js Assert Module Overview

// Require the assert module
const assert = require('assert');
const { strict: assertStrict } = require('assert');

// The Assert module provides a simple set of assertion tests that can be used to test invariants in your code.

// assert()
assert(true, 'This will not throw an error');
try {
  assert(false, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.ok()
assert.ok(true, 'This will not throw an error');
try {
  assert.ok(false, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.equal()
assert.equal(1, 1, 'This will not throw an error');
try {
  assert.equal(1, 2, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.notEqual()
assert.notEqual(1, 2, 'This will not throw an error');
try {
  assert.notEqual(1, 1, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.strictEqual()
assert.strictEqual(1, 1, 'This will not throw an error');
try {
  assert.strictEqual(1, '1', 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.notStrictEqual()
assert.notStrictEqual(1, '1', 'This will not throw an error');
try {
  assert.notStrictEqual(1, 1, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.deepEqual()
assert.deepEqual({ a: 1 }, { a: 1 }, 'This will not throw an error');
try {
  assert.deepEqual({ a: 1 }, { a: 2 }, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.notDeepEqual()
assert.notDeepEqual({ a: 1 }, { a: 2 }, 'This will not throw an error');
try {
  assert.notDeepEqual({ a: 1 }, { a: 1 }, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.deepStrictEqual()
assert.deepStrictEqual({ a: 1 }, { a: 1 }, 'This will not throw an error');
try {
  assert.deepStrictEqual({ a: 1 }, { a: '1' }, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.notDeepStrictEqual()
assert.notDeepStrictEqual({ a: 1 }, { a: '1' }, 'This will not throw an error');
try {
  assert.notDeepStrictEqual({ a: 1 }, { a: 1 }, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.throws()
assert.throws(() => { throw new Error('Error message'); }, Error, 'This will not throw an error');
try {
  assert.throws(() => { console.log('No error'); }, Error, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.doesNotThrow()
assert.doesNotThrow(() => { console.log('No error'); }, 'This will not throw an error');
try {
  assert.doesNotThrow(() => { throw new Error('Error message'); }, 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.ifError()
assert.ifError(null, 'This will not throw an error');
try {
  assert.ifError(new Error('Error message'), 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}

// assert.rejects()
async function testRejects() {
  await assert.rejects(async () => { throw new Error('Error message'); }, Error, 'This will not throw an error');
  try {
    await assert.rejects(async () => { console.log('No error'); }, Error, 'This will throw an error');
  } catch (err) {
    console.log('Caught error:', err.message);
  }
}

testRejects();

// assert.doesNotReject()
async function testDoesNotReject() {
  await assert.doesNotReject(async () => { console.log('No error'); }, 'This will not throw an error');
  try {
    await assert.doesNotReject(async () => { throw new Error('Error message'); }, 'This will throw an error');
  } catch (err) {
    console.log('Caught error:', err.message);
  }
}

testDoesNotReject();

// Using strict mode
assertStrict.equal(1, 1, 'This will not throw an error');
try {
  assertStrict.equal(1, '1', 'This will throw an error');
} catch (err) {
  console.log('Caught error:', err.message);
}