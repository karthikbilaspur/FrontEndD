// Node.js Timers Module Overview

// Require the timers module
const { setTimeout, setInterval, setImmediate } = require('timers');

// Basic Timer Example
console.log('Starting timers...');

// Execute once after delay
setTimeout(() => {
  console.log('This runs after 1 second');
}, 1000);

// Execute repeatedly at interval
let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log(`Interval tick ${counter}`);
  if (counter >= 3) clearInterval(interval);
}, 1000);

// Execute in the next event loop iteration
setImmediate(() => {
  console.log('This runs in the next iteration of the event loop');
});

console.log('Timers scheduled');

// setTimeout() and clearTimeout()
const timeoutId = setTimeout(() => {
  console.log('This will never be displayed');
}, 5000);

// Cancel the timeout before it executes
clearTimeout(timeoutId);
console.log('Timeout has been cancelled');

// Promise-Based setTimeout
const { setTimeout: setTimeoutPromise } = require('timers/promises');

async function delayedGreeting() {
  console.log('Starting...');

  // Wait for 2 seconds
  await setTimeoutPromise(2000);

  console.log('After 2 seconds');

  // Wait for 1 second with a value
  const result = await setTimeoutPromise(1000, 'Hello, World!');

  console.log('After 1 more second:', result);
}

delayedGreeting().catch(console.error);

// setInterval() and clearInterval()
let intervalCounter = 0;
const intervalId = setInterval(() => {
  intervalCounter++;
  console.log(`Interval executed ${intervalCounter} times`);

  // Stop after 5 executions
  if (intervalCounter >= 5) {
    clearInterval(intervalId);
    console.log('Interval stopped');
  }
}, 1000);

// Promise-Based setInterval
const { setInterval: setIntervalPromise } = require('timers/promises');

async function repeatedGreeting() {
  console.log('Starting interval...');

  // Create an async iterator from setInterval
  const interval = setIntervalPromise(1000, 'tick');

  // Limit to 5 iterations
  let counter = 0;

  for await (const tick of interval) {
    console.log(counter + 1, tick);
    counter++;

    if (counter >= 5) {
      break; // Exit the loop, stopping the interval
    }
  }

  console.log('Interval finished');
}

repeatedGreeting().catch(console.error);

// setImmediate() and clearImmediate()
const immediateId = setImmediate(() => {
  console.log('This will not be displayed');
});

clearImmediate(immediateId);
console.log('Immediate has been cancelled');

// process.nextTick()
console.log('Start');

setTimeout(() => {
  console.log('setTimeout callback');
}, 0);

setImmediate(() => {
  console.log('setImmediate callback');
});

process.nextTick(() => {
  console.log('nextTick callback');
});

console.log('End');

// Advanced Timer Patterns
// Debouncing
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage
const handleResize = debounce(() => {
  console.log('Window resized');
}, 300);

// Throttling
function throttle(func, limit) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Example usage
const handleScroll = throttle(() => {
  console.log('Handling scroll');
}, 200);

// Sequential Timeouts
function sequentialTimeouts(callbacks, delay = 1000) {
  let index = 0;
  function next() {
    if (index < callbacks.length) {
      callbacks[index]();
      index++;
      setTimeout(next, delay);
    }
  }
  next();
}

// Example usage
sequentialTimeouts([
  () => console.log('Step 1'),
  () => console.log('Step 2'),
  () => console.log('Step 3')
], 1000);