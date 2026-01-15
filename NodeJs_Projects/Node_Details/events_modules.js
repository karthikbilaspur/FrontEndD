const fs = require('fs');
const EventEmitter = require('events');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Node.js Events</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    h1, h2, h3 {
      color: #333;
    }
    code {
      background-color: #f0f0f0;
      padding: 2px 4px;
      border-radius: 2px;
    }
    pre {
      background-color: #f0f0f0;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
  </style>
</head>
<body>
  <h1>Node.js Events</h1>
  <p>Events in Node.js are a way to handle asynchronous operations. The events module provides an EventEmitter class, which is used to emit and handle events.</p>

  <h2>What are Events?</h2>
  <p>Events are notifications that something has happened in your application. They are used to handle asynchronous operations, such as reading from a file or making a network request.</p>

  <h2>Why Use Events?</h2>
  <ul>
    <li><strong>Asynchronous Programming:</strong> Events allow you to write asynchronous code that is easier to read and maintain.</li>
    <li><strong>Decoupling:</strong> Events help to decouple different parts of your application, making it easier to modify and extend.</li>
    <li><strong>Reusability:</strong> Events can be reused throughout your application, reducing code duplication.</li>
  </ul>

  <h2>Key Functions of the Events Module:</h2>
  <ul>
    <li><strong>EventEmitter:</strong> Creates a new EventEmitter object.</li>
    <li><strong>on(eventName, listener):</strong> Adds a listener to the end of the listeners array for the specified event.</li>
    <li><strong>emit(eventName, args):</strong> Emits an event with the specified name and arguments.</li>
    <li><strong>once(eventName, listener):</strong> Adds a one-time listener for the specified event.</li>
    <li><strong>removeListener(eventName, listener):</strong> Removes a listener from the listeners array for the specified event.</li>
  </ul>

  <h2>Example Programs:</h2>
  <h3>1. Creating an EventEmitter and Handling an Event</h3>
  <pre><code>const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('hello', () => {
  console.log('Hello World!');
});

emitter.emit('hello'); // Output: Hello World!</code></pre>

  <h3>2. Passing Arguments to an Event Handler</h3>
  <pre><code>const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greeting', (name) => {
  console.log(\`Hello, \${name}!\`);
});

emitter.emit('greeting', 'John'); // Output: Hello, John!</code></pre>

  <h3>3. Using the Once Method</h3>
  <pre><code>const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.once('hello', () => {
  console.log('Hello World!');
});

emitter.emit('hello'); // Output: Hello World!
emitter.emit('hello'); // No output</code></pre>

  <h2>Common Events in Node.js:</h2>
  <ul>
    <li><strong>data:</strong> Emitted when data is available to be read.</li>
    <li><strong>end:</strong> Emitted when there is no more data to be read.</li>
    <li><strong>error:</strong> Emitted when an error occurs.</li>
    <li><strong>close:</strong> Emitted when the connection is closed.</li>
  </ul>

  <h2>Example Program: Reading a File with Events</h2>
  <pre><code>const fs = require('fs');
const readStream = fs.createReadStream('example.txt');

readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

readStream.on('end', () => {
  console.log('Finished reading the file.');
});

readStream.on('error', (err) => {
  console.error(err);
});</code></pre>
</body>
</html>
`;

fs.writeFile('events.html', htmlContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('HTML file generated successfully!');
});