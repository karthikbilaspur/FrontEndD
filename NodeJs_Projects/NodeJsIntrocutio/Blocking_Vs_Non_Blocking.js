// blocking-non-blocking.js
const fs = require('fs'); // Import the fs (File System) module for file operations
const fsPromises = require('fs/promises'); // Import the fs/promises module for promise-based file operations

// Blocking Example
console.log('Blocking Example:');
console.log('Start');
// fs.readFileSync is a synchronous function that blocks the execution until the file is read
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
console.log('End');

// Non-Blocking Example
console.log('\nNon-Blocking Example:');
console.log('Start');
// fs.readFile is an asynchronous function that doesn't block the execution and uses a callback to handle the result
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
console.log('End');

// Async/Await Example
// Define an async function to use await keyword
async function readFile() {
  console.log('\nAsync/Await Example:');
  console.log('Start');
  try {
    // fsPromises.readFile returns a promise, and await waits for it to resolve
    const data = await fsPromises.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  console.log('End');
}

// Call the async function
readFile();