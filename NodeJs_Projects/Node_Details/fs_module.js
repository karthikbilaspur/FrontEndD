// fs-module.js
const fs = require('fs');
const path = require('path');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>FS Module</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/dist/dark.min.css">
</head>
<body>
  <h1>FS Module</h1>

  <p>The fs module, short for File System, is a built-in Node.js module that provides an API for interacting with the file system. It allows you to perform various file system operations, such as:</p>
  <ul>
    <li>Reading and writing files</li>
    <li>Creating and deleting directories</li>
    <li>Checking file existence and permissions</li>
    <li>Watching for file changes</li>
  </ul>

  <h2>Why Use the FS Module?</h2>
  <p>The fs module is essential for any Node.js application that needs to interact with the file system. Here are some reasons why you should use the fs module:</p>
  <ul>
    <li><strong>File I/O:</strong> The fs module provides a simple and efficient way to read and write files.</li>
    <li><strong>Directory Management:</strong> You can use the fs module to create, delete, and list directories.</li>
    <li><strong>File System Operations:</strong> The fs module provides methods for checking file existence, permissions, and watching for file changes.</li>
  </ul>

  <h2>Common FS Module Methods</h2>
  <ul>
    <li><strong>fs.readFile():</strong> Reads the contents of a file.</li>
    <li><strong>fs.writeFile():</strong> Writes data to a file.</li>
    <li><strong>fs.mkdir():</strong> Creates a new directory.</li>
    <li><strong>fs.rmdir():</strong> Deletes a directory.</li>
    <li><strong>fs.readdir():</strong> Lists the files and directories in a directory.</li>
    <li><strong>fs.stat():</strong> Returns information about a file or directory.</li>
    <li><strong>fs.watch():</strong> Watches for changes to a file or directory.</li>
  </ul>

  <h2>Example Use Case</h2>
  <p>Here's an example of using the fs module to read a file:</p>
  <pre><code>const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});</code></pre>

  <h2>In the Context of the Provided Code</h2>
  <p>In the provided code, the fs module is used to write the HTML content to a file named https-module.html:</p>
  <pre><code>fs.writeFile(path.join(__dirname, 'https-module.html'), htmlContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('https-module.html file generated successfully!');
});</code></pre>
</body>
</html>
`;

fs.writeFile(path.join(__dirname, 'fs-module.html'), htmlContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('fs-module.html file generated successfully!');
});