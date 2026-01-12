// variables.js

// Variables
// ----------------
// 'let' is used to declare a variable that can be reassigned
let name = 'John Doe';
// 'const' is used to declare a constant variable that cannot be reassigned
const age = 30;

console.log('Variables:');
// Logging the values of 'name' and 'age' to the console
console.log(name);
console.log(age);

// Functions
// ----------------
// A traditional function declaration
function greet(name) {
  // Logging a greeting message to the console
  console.log(`Hello, ${name}!`);
}

// A function that returns a value
function add(a, b) {
  // Returning the sum of 'a' and 'b'
  return a + b;
}

console.log('\nFunctions:');
// Calling the 'greet' function with an argument
greet('John Doe');
// Calling the 'add' function with arguments and logging the result
console.log(add(2, 3));

// Objects
// ----------------
// An object literal with properties and a method
const person = {
  // Property: 'name'
  name: 'Jane Doe',
  // Property: 'age'
  age: 25,
  // Method: 'greet'
  greet: function() {
    // Logging a greeting message to the console
    console.log(`Hello, my name is ${this.name}!`);
  }
};

console.log('\nObjects:');
// Logging the 'person' object to the console
console.log(person);
// Calling the 'greet' method on the 'person' object
person.greet();

// Arrays
// ----------------
// An array of numbers
const numbers = [1, 2, 3, 4, 5];
// An array of strings
const fruits = ['apple', 'banana', 'orange'];

console.log('\nArrays:');
// Logging the 'numbers' and 'fruits' arrays to the console
console.log(numbers);
console.log(fruits);

// Asynchronous programming (callbacks)
// ----------------
// A function that takes a callback function as an argument
function delayedGreeting(name, callback) {
  // Simulating a delay using 'setTimeout'
  setTimeout(() => {
    // Calling the callback function with a greeting message
    callback(`Hello, ${name}!`);
  }, 2000);
}

console.log('\nAsynchronous programming (callbacks):');
// Calling the 'delayedGreeting' function with a callback function
delayedGreeting('John Doe', (greeting) => {
  // Logging the greeting message to the console
  console.log(greeting);
});

// Asynchronous programming (promises)
// ----------------
// A function that returns a promise
function delayedGreetingPromise(name) {
  // Returning a new promise
  return new Promise((resolve, reject) => {
    // Simulating a delay using 'setTimeout'
    setTimeout(() => {
      // Resolving the promise with a greeting message
      resolve(`Hello, ${name}!`);
    }, 2000);
  });
}

console.log('\nAsynchronous programming (promises):');
// Calling the 'delayedGreetingPromise' function and handling the promise
delayedGreetingPromise('Jane Doe').then((greeting) => {
  // Logging the greeting message to the console
  console.log(greeting);
});

// Asynchronous programming (async/await)
// ----------------
// An async function
async function asyncGreeting(name) {
  try {
    // Awaiting the 'delayedGreetingPromise' function
    const greeting = await delayedGreetingPromise(name);
    // Logging the greeting message to the console
    console.log(greeting);
  } catch (error) {
    // Logging any errors to the console
    console.error(error);
  }
}

console.log('\nAsynchronous programming (async/await):');
// Calling the 'asyncGreeting' function
asyncGreeting('John Doe');

// ES6+ features
// ----------------
// Using the 'map' method to create a new array with squared numbers
const numbersSquared = numbers.map((num) => num ** 2);
// Using destructuring to extract the first element and the rest of the 'fruits' array
const [firstFruit, ...otherFruits] = fruits;

console.log('\nES6+ features:');
// Logging the 'numbersSquared' array to the console
console.log(numbersSquared);
// Logging the 'firstFruit' and 'otherFruits' to the console
console.log(firstFruit);
console.log(otherFruits);