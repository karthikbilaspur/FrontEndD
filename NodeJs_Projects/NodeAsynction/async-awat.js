const http = require('http');
const fs = require('fs').promises;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async/Await</title>
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
    <h1>What is Async/Await?</h1>
    <p>Async/await is a syntax sugar on top of Promises, making it look like synchronous code.</p>

    <h2>Benefits of Async/Await</h2>
    <ul>
        <li>Improved readability: Async/await makes your code look more synchronous.</li>
        <li>Error handling: Async/await provides a built-in way to handle errors.</li>
    </ul>

    <h2>Example 1: Basic Async/Await</h2>
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

    <h2>Example 2: Chaining Async/Await</h2>
    <pre>
async function example() {
    try {
        const value1 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello, ');
            }, 1000);
        });
        const value2 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value1 + 'World!');
            }, 1000);
        });
        console.log(value2); // 'Hello, World!'
    } catch (error) {
        console.error(error);
    }
}

example();
    </pre>

    <h2>Example 3: Error Handling</h2>
    <pre>
async function example() {
    try {
        const value = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Error occurred!');
            }, 2000);
        });
    } catch (error) {
        console.error(error); // 'Error occurred!'
    }
}

example();
    </pre>

    <h2>Example 4: Reading a File with Async/Await</h2>
    <pre>
const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('myfile.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFile();
    </pre>

    <h2>Example 5: Running Promises in Parallel</h2>
    <pre>
// Helper function to simulate an API call
function fetchData(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve('Data for ID ' + id), 1000);
    });
}

// Parallel operation - takes ~1 second
async function fetchParallel() {
    console.time('parallel');
    const results = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3)
    ]);
    console.timeEnd('parallel');
    return results;
}

fetchParallel();
    </pre>

    <script>
        // Example usage
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
    </script>
</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(3002, () => {
    console.log('Server running on http://localhost:3002');
});