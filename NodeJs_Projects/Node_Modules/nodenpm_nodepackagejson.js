const http = require('http');
const fs = require('fs');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>package.json and npm Scripts</title>
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
    <h1>What is package.json?</h1>
    <p>\`package.json\` is a file that contains metadata for a Node.js project, including dependencies, scripts, and other information.</p>

    <h2>Structure of package.json</h2>
    <pre>
{
    "name": "my-project",
    "version": "1.0.0",
    "description": "A brief description of my project",
    "main": "index.js",
    "scripts": {
        "start": "node index.js",
        "test": "jest"
    },
    "dependencies": {
        "express": "^4.17.1"
    },
    "devDependencies": {
        "jest": "^27.0.6"
    }
}
    </pre>

    <h2>What are npm Scripts?</h2>
    <p>npm scripts are commands that can be run using npm, defined in the \`scripts\` section of \`package.json\`.</p>

    <h2>Defining npm Scripts</h2>
    <pre>
"scripts": {
    "start": "node index.js",
    "test": "jest",
    "build": "webpack"
}
    </pre>

    <h2>Running npm Scripts</h2>
    <p>To run an npm script, use the following command:</p>
    <pre>
npm run &lt;script-name&gt;
    </pre>
    <p>For example:</p>
    <pre>
npm run start
npm run test
npm run build
    </pre>

    <h2>Common npm Scripts</h2>
    <ul>
        <li>\`start\`: Typically used to start the application</li>
        <li>\`test\`: Typically used to run tests</li>
        <li>\`build\`: Typically used to build the application</li>
    </ul>

    <h2>Benefits of npm Scripts</h2>
    <ul>
        <li>Simplify complex commands</li>
        <li>Standardize scripts across projects</li>
        <li>Allow for easy collaboration and deployment</li>
    </ul>

    <h2>Example package.json with npm Scripts</h2>
    <pre>
{
    "name": "my-project",
    "version": "1.0.0",
    "description": "A brief description of my project",
    "main": "index.js",
    "scripts": {
        "start": "node index.js",
        "test": "jest",
        "build": "webpack"
    },
    "dependencies": {
        "express": "^4.17.1"
    },
    "devDependencies": {
        "jest": "^27.0.6",
        "webpack": "^5.51.1"
    }
}
    </pre>

    <h2>npm Script Lifecycle</h2>
    <p>npm scripts can be run at different points in the lifecycle of a project, including:</p>
    <ul>
        <li>\`preinstall\`: Run before installing dependencies</li>
        <li>\`install\`: Run after installing dependencies</li>
        <li>\`postinstall\`: Run after installing dependencies</li>
        <li>\`prestart\`: Run before starting the application</li>
        <li>\`start\`: Run to start the application</li>
        <li>\`poststart\`: Run after starting the application</li>
    </ul>

    <h2>Using Environment Variables in npm Scripts</h2>
    <p>You can use environment variables in npm scripts using the following syntax:</p>
    <pre>
"scripts": {
    "start": "NODE_ENV=production node index.js"
}
    </pre>

    <h2>Passing Arguments to npm Scripts</h2>
    <p>You can pass arguments to npm scripts using the following syntax:</p>
    <pre>
npm run start -- --port 3000
    </pre>
    <p>Then, in your script:</p>
    <pre>
"scripts": {
    "start": "node index.js --port $npm_config_port"
}
    </pre>
</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(3000, () => {
    console.log('Server running on port 3000');
});