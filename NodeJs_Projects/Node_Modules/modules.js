const http = require('http');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js Modules</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #00698f;
        }
        h2 {
            color: #4CAF50;
        }
        pre {
            background-color: #f0f0f0;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>What are Node.js Modules?</h1>
    <p>Node.js modules are reusable pieces of code that can be imported and used in other parts of a Node.js application.</p>

    <h2>Types of Node.js Modules</h2>
    <ul>
        <li><strong>Core Modules:</strong> Built-in modules that come with Node.js, such as 'http', 'fs', and 'path'.</li>
        <li><strong>Local Modules:</strong> Modules created within a project, typically stored in a separate file.</li>
        <li><strong>Third-Party Modules:</strong> Modules created by others, typically installed using npm (Node Package Manager).</li>
    </ul>

    <h2>Using Core Modules</h2>
    <pre>
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
}).listen(3000, () => {
    console.log('Server running on port 3000');
});
    </pre>

    <h2>Creating and Using Local Modules</h2>
    <pre>
// math.js
module.exports.add = (a, b) => {
    return a + b;
};

// app.js
const math = require('./math');
console.log(math.add(2, 3)); // Output: 5
    </pre>

    <h2>Using Third-Party Modules</h2>
    <pre>
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
    </pre>

    <h2>ES6 Module Syntax</h2>
    <pre>
// math.js
export function add(a, b) {
    return a + b;
}

// app.js
import { add } from './math.js';
console.log(add(2, 3)); // Output: 5
    </pre>

    <h2>Calling Modules</h2>
    <p>Modules can be called using the require() function or ES6 import syntax.</p>
    <pre>
const math = require('./math');
import { add } from './math.js';
    </pre>

    <script>
        // Example usage
        const math = {
            add: (a, b) => {
                return a + b;
            }
        };

        console.log(math.add(2, 3)); // Output: 5
    </script>
</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(3004, () => {
    console.log('Server running on http://localhost:3004');
});