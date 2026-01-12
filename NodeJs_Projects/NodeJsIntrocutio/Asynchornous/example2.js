// example2.js
const example1 = require('./example1');

function askQuestion(name) {
  console.log(`How are you, ${name}?`);
  example1.greetAgain(name);
}

function greetAgain(name) {
  console.log(`Nice to meet you, ${name}!`);
}

module.exports = { askQuestion, greetAgain };