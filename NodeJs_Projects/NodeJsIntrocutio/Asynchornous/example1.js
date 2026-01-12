// example1.js
const example2 = require('./example2');

function greet(name) {
  console.log(`Hello, ${name}!`);
  example2.askQuestion(name);
}

module.exports = { greet };