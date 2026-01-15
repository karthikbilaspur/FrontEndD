const http = require('http');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error Handling in JavaScript</title>
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
    <h1>What is Error Handling?</h1>
    <p>Error handling is the process of catching and handling errors that occur during the execution of a program.</p>

    <h2>Types of Errors</h2>
    <ul>
        <li><strong>Syntax Errors:</strong> Errors that occur during the parsing of the code, such as missing brackets or semicolons.</li>
        <li><strong>Runtime Errors:</strong> Errors that occur during the execution of the code, such as division by zero or attempting to access an undefined variable.</li>
        <li><strong>Logical Errors:</strong> Errors that occur due to incorrect logic or assumptions in the code.</li>
    </ul>

    <h2>Try/Catch Block</h2>
    <p>A try/catch block is used to catch and handle errors that occur during the execution of a program.</p>
    <pre>
try {
    // Code that might throw an error
} catch (error) {
    // Code to handle the error
}
    </pre>

    <h2>Example: Try/Catch Block</h2>
    <pre>
try {
    const x = 10 / 0;
    console.log(x);
} catch (error) {
    console.error('Error:', error);
}
    </pre>

    <h2>Async/Await with Try/Catch</h2>
    <p>Async/await can be used with try/catch blocks to handle errors that occur during asynchronous operations.</p>
    <pre>
async function example() {
    try {
        const value = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Error occurred!');
            }, 2000);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

example();
    </pre>

    <h2>Error Object</h2>
    <p>The error object is an instance of the Error class and contains information about the error.</p>
    <ul>
        <li><strong>name:</strong> The name of the error, such as "TypeError" or "SyntaxError".</li>
        <li><strong>message:</strong> A description of the error.</li>
        <li><strong>stack:</strong> A stack trace of the error.</li>
    </ul>

    <h2>Throwing Errors</h2>
    <p>The throw statement is used to throw an error.</p>
    <pre>
throw new Error('Something went wrong!');
    </pre>

    <h2>Custom Error Classes</h2>
    <p>Custom error classes can be created by extending the Error class.</p>
    <pre>
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

throw new CustomError('Something went wrong!');
    </pre>

    <h2>Best Practices</h2>
    <ul>
        <li><strong>Handle errors as close to the source as possible:</strong> Handle errors as close to where they occur as possible.</li>
        <li><strong>Use try/catch blocks:</strong> Use try/catch blocks to handle errors that might occur during the execution of a program.</li>
        <li><strong>Log errors:</strong> Log errors to help with debugging and error tracking.</li>
        <li><strong>Provide meaningful error messages:</strong> Provide meaningful error messages to help with debugging.</li>
    </ul>

    <script>
        // Example usage
        async function example() {
            try {
                const value = await new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject('Error occurred!');
                    }, 2000);
                });
            } catch (error) {
                console.error('Error:', error);
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
}).listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});