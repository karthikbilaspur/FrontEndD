const http = require('http');
const fs = require('fs');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js Promises</title>
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
    <h1>What are Node.js Promises?</h1>
    <p>Node.js Promises are a way to handle asynchronous operations in a more manageable and readable way. A Promise represents a value that may not be available yet, but will be resolved at some point in the future.</p>

    <h2>Benefits of Promises</h2>
    <ul>
        <li>Improved readability: Promises make your code look more synchronous, making it easier to understand and maintain.</li>
        <li>Error handling: Promises provide a built-in way to handle errors, making it easier to catch and handle exceptions.</li>
        <li>Chaining: Promises can be chained together, making it easier to perform multiple asynchronous operations in sequence.</li>
    </ul>

    <h2>Types of Promises</h2>
    <ul>
        <li><strong>Pending:</strong> Initial state, neither fulfilled nor rejected.</li>
        <li><strong>Fulfilled:</strong> Successful operation, Promise has been resolved.</li>
        <li><strong>Rejected:</strong> Failed operation, Promise has been rejected.</li>
    </ul>

    <h2>Promise Implementation</h2>
    <pre>
const promise = new Promise((resolve, reject) => {
    // asynchronous operation
    if (/* success */) {
        resolve(value);
    } else {
        reject(error);
    }
});
    </pre>

    <h2>Promise Methods</h2>
    <ul>
        <li><strong>.then():</strong> Handles the resolved value of a Promise.</li>
        <li><strong>.catch():</strong> Handles the rejected value of a Promise.</li>
        <li><strong>.finally():</strong> Executes a callback function regardless of the Promise's outcome.</li>
    </ul>

    <h2>Example 1: Basic Promise</h2>
    <pre>
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, World!');
    }, 2000);
});

promise.then((value) => {
    console.log(value); // 'Hello, World!'
}).catch((error) => {
    console.error(error);
});
    </pre>

    <h2>Example 2: Chaining Promises</h2>
    <pre>
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, ');
    }, 1000);
});

const promise2 = promise1.then((value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 'World!');
        }, 1000);
    });
});

promise2.then((value) => {
    console.log(value); // 'Hello, World!'
}).catch((error) => {
    console.error(error);
});
    </pre>

    <h2>Example 3: Error Handling</h2>
    <pre>
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error occurred!');
    }, 2000);
});

promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error); // 'Error occurred!'
});
    </pre>

    <h2>Async/Await Syntax</h2>
    <pre>
async function example() {
    try {
        const value = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello, World!');
            }, 2000);
        });
        console.log(value); // 'Hello, World!'
    } catch (error) {
        console.error(error);
    }
}

example();
    </pre>

    <h2>Common Promise Methods</h2>
    <ul>
        <li><strong>Promise.all():</strong> Resolves when all Promises in an array are resolved.</li>
        <li><strong>Promise.race():</strong> Resolves when the first Promise in an array is resolved.</li>
        <li><strong>Promise.resolve():</strong> Creates a resolved Promise with a given value.</li>
        <li><strong>Promise.reject():</strong> Creates a rejected Promise with a given error.</li>
    </ul>

    <script>
        // Example usage
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello, World!');
            }, 2000);
        });

        promise.then((value) => {
            console.log(value); // 'Hello, World!'
        }).catch((error) => {
            console.error(error);
        });
    </script>
</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Open http://localhost:3000 in your browser');
});