// Node.js Readline Module Overview

// Require the readline module
const readline = require('readline');

// The Readline module provides an interface for reading input from a stream, such as the console.

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// readline.question()
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

// readline.setPrompt()
rl.setPrompt('Enter your age: ');
rl.prompt();
rl.on('line', (age) => {
  console.log(`You are ${age} years old.`);
  rl.close();
});

// readline.write()
rl.write('Hello, World!');
rl.write(null, () => {
  console.log('Write operation complete');
});

// readline.cursorTo()
rl.cursorTo(0, 0);
console.log('Cursor moved to (0, 0)');

// readline.moveCursor()
rl.moveCursor(1, 1);
console.log('Cursor moved to (1, 1)');

// readline.clearLine()
rl.clearLine();
console.log('Line cleared');

// readline.clearScreenDown()
rl.clearScreenDown();
console.log('Screen cleared');

// Event: 'line'
rl.on('line', (line) => {
  console.log(`Received: ${line}`);
});

// Event: 'close'
rl.on('close', () => {
  console.log('Readline interface closed');
});

// Event: 'pause'
rl.on('pause', () => {
  console.log('Readline interface paused');
});

// Event: 'resume'
rl.on('resume', () => {
  console.log('Readline interface resumed');
});

// readline.pause()
rl.pause();
console.log('Readline interface paused');

// readline.resume()
rl.resume();
console.log('Readline interface resumed');

// readline.close()
rl.close();
console.log('Readline interface closed');

// Using async/await with readline
const { promisify } = require('util');
const question = promisify(rl.question).bind(rl);

async function askQuestion() {
  try {
    const name = await question('What is your name? ');
    console.log(`Hello, ${name}!`);
    rl.close();
  } catch (err) {
    console.error(err);
  }
}

askQuestion();

// Example usage
const rlExample = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rlExample.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rlExample.close();
});

// Using readline with a file
const fs = require('fs');
const rlFile = readline.createInterface({
  input: fs.createReadStream('example.txt'),
  output: process.stdout
});

rlFile.on('line', (line) => {
  console.log(`Received: ${line}`);
});

rlFile.on('close', () => {
  console.log('Readline interface closed');
});