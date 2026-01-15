const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Node.js Buffer Module</title>
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
  <h1>What is the Buffer Module in Node.js?</h1>
  <p>The Buffer module in Node.js is a way to handle binary data. It's a fixed-size chunk of memory that can be used to store and manipulate binary data.</p>

  <h2>Why Use the Buffer Module?</h2>
  <ul>
    <li><strong>Efficient Binary Data Handling:</strong> Buffers are more efficient than strings for handling binary data.</li>
    <li><strong>Fixed-Size Memory Allocation:</strong> Buffers are allocated a fixed amount of memory, making them more predictable and efficient.</li>
    <li><strong>Raw Binary Data Access:</strong> Buffers provide direct access to raw binary data, making it easier to work with binary formats.</li>
    <li><strong>Interoperability:</strong> Buffers can be easily converted to and from other data types, such as strings and arrays.</li>
  </ul>

  <h2>Main Functions of the Buffer Module:</h2>
  <ul>
    <li><strong>Buffer.alloc(size):</strong> Allocates a new Buffer of a specified size.</li>
    <li><strong>Buffer.from(array):</strong> Creates a new Buffer from an array of octets.</li>
    <li><strong>Buffer.from(string, encoding):</strong> Creates a new Buffer from a string, with a specified encoding.</li>
    <li><strong>buf.toString(encoding):</strong> Returns a string representation of the Buffer, with a specified encoding.</li>
    <li><strong>buf.write(string, offset, length, encoding):</strong> Writes a string to the Buffer, with a specified offset, length, and encoding.</li>
    <li><strong>buf.fill(value, offset, end):</strong> Fills the Buffer with a specified value, starting from an offset and ending at a specified position.</li>
    <li><strong>buf.copy(target, targetStart, sourceStart, sourceEnd):</strong> Copies data from the Buffer to a target Buffer.</li>
  </ul>

  <h2>Buffer Properties:</h2>
  <ul>
    <li><strong>buf.length:</strong> Returns the length of the Buffer in bytes.</li>
    <li><strong>buf.byteLength:</strong> Returns the length of the Buffer in bytes, taking into account the encoding.</li>
  </ul>

  <h2>Buffer Methods:</h2>
  <ul>
    <li><strong>buf.indexOf(value, byteOffset, encoding):</strong> Returns the index of the first occurrence of a specified value in the Buffer.</li>
    <li><strong>buf.lastIndexOf(value, byteOffset, encoding):</strong> Returns the index of the last occurrence of a specified value in the Buffer.</li>
    <li><strong>buf.slice(start, end):</strong> Returns a new Buffer containing a subset of the original Buffer.</li>
    <li><strong>buf.concat(list, totalLength):</strong> Concatenates a list of Buffers into a single Buffer.</li>
  </ul>

  <h2>Example Code:</h2>
  <h3>1. Creating a Buffer:</h3>
  <pre><code>const buf = Buffer.alloc(10);
console.log(buf); // Output: <Buffer 00 00 00 00 00 00 00 00 00 00></code></pre>

  <h3>2. Writing to a Buffer:</h3>
  <pre><code>const buf = Buffer.alloc(10);
buf.write('Hello', 0, 5, 'utf8');
console.log(buf.toString('utf8')); // Output: Hello</code></pre>

  <h3>3. Reading from a Buffer:</h3>
  <pre><code>const buf = Buffer.from('Hello', 'utf8');
console.log(buf.toString('utf8')); // Output: Hello</code></pre>

  <h3>4. Creating a Buffer from an Array:</h3>
  <pre><code>const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf.toString('utf8')); // Output: buffer</code></pre>

  <h3>5. Concatenating Buffers:</h3>
  <pre><code>const buf1 = Buffer.from('Hello', 'utf8');
const buf2 = Buffer.from(' World', 'utf8');
const buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString('utf8')); // Output: Hello World</code></pre>
</body>
</html>
`;

fs.writeFile('buffer_module.html', htmlContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('HTML file generated successfully!');
});