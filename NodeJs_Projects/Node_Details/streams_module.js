const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Node.js Streams</title>
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
  <h1>What is a Stream in Node.js?</h1>
  <p>A stream in Node.js is a way to handle data that is too large to fit into memory all at once. It's a sequence of data that is processed in chunks, rather than all at once.</p>

  <h2>Key Characteristics of Streams:</h2>
  <ul>
    <li><strong>Chunked data:</strong> Streams process data in small chunks, rather than all at once.</li>
    <li><strong>Asynchronous:</strong> Streams are asynchronous, meaning they don't block the execution of your code.</li>
    <li><strong>Buffering:</strong> Streams use a buffer to store data temporarily while it's being processed.</li>
  </ul>

  <h2>Types of Streams:</h2>
  <ul>
    <li><strong>Readable Streams:</strong> These streams allow you to read data from a source, such as a file or a network connection.</li>
    <li><strong>Writable Streams:</strong> These streams allow you to write data to a destination, such as a file or a network connection.</li>
    <li><strong>Duplex Streams:</strong> These streams allow you to both read and write data, such as a network connection.</li>
    <li><strong>Transform Streams:</strong> These streams allow you to transform data as it's being read or written.</li>
  </ul>

  <h2>Common Use Cases for Streams:</h2>
  <ul>
    <li><strong>File I/O:</strong> Streams are great for reading and writing large files.</li>
    <li><strong>Network I/O:</strong> Streams are used extensively in network programming, such as HTTP requests and responses.</li>
    <li><strong>Data Processing:</strong> Streams are useful for processing large datasets, such as data transformation and aggregation.</li>
  </ul>

  <h2>Benefits of Using Streams:</h2>
  <ul>
    <li><strong>Memory Efficiency:</strong> Streams use less memory, making them ideal for large datasets.</li>
    <li><strong>Improved Performance:</strong> Streams can improve performance by processing data in parallel.</li>
    <li><strong>Flexibility:</strong> Streams can be used with a variety of data sources and destinations.</li>
  </ul>

  <h2>Example of a Simple Readable Stream:</h2>
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

  <h2>Other Examples:</h2>
  <h3>1. Writable Stream:</h3>
  <pre><code>const fs = require('fs');
const writeStream = fs.createWriteStream('example.txt');

writeStream.write('Hello, ');
writeStream.write('World!');
writeStream.end();

writeStream.on('finish', () => {
  console.log('Finished writing to the file.');
});

writeStream.on('error', (err) => {
  console.error(err);
});</code></pre>

  <h3>2. Duplex Stream:</h3>
  <pre><code>const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(\`Received: \${data.toString()}\`);
    socket.write(\`Echo: \${data.toString()}\`);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  socket.on('error', (err) => {
    console.error(err);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});</code></pre>

  <h3>3. Transform Stream:</h3>
  <pre><code>const { Transform } = require('stream');

class UpperCaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const upperCaseChunk = chunk.toString().toUpperCase();
    this.push(upperCaseChunk);
    callback();
  }
}

const transformStream = new UpperCaseTransform();

process.stdin.pipe(transformStream).pipe(process.stdout);</code></pre>

  <h3>4. Readable Stream (from a string):</h3>
  <pre><code>const { Readable } = require('stream');

class StringReadable extends Readable {
  constructor(string) {
    super();
    this.string = string;
  }

  _read() {
    if (this.string) {
      const chunk = this.string.slice(0, 10);
      this.string = this.string.slice(10);
      this.push(chunk);
    } else {
      this.push(null);
    }
  }
}

const readableStream = new StringReadable('Hello, World!');

readableStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

readableStream.on('end', () => {
  console.log('Finished reading the string.');
});</code></pre>
</body>
</html>
`;

fs.writeFile('streams.html', htmlContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('HTML file generated successfully!');
});