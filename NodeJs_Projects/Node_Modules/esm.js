const http = require('http');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ESM and CommonJS</title>
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
    <h1>ESM (ECMAScript Modules)</h1>
    <p>ESM is a module system for JavaScript that allows you to write modular code. It's a standard for JavaScript modules, introduced in ECMAScript 2015 (ES6).</p>

    <h2>Usage in Node.js</h2>
    <p>To use ESM in Node.js, you need to:</p>
    <ul>
        <li>Save your file with a .mjs extension (e.g., example.mjs)</li>
        <li>Use the import and export keywords</li>
    </ul>

    <pre>
// math.mjs
export function add(a, b) {
    return a + b;
}

// app.mjs
import { add } from './math.mjs';
console.log(add(2, 3)); // Output: 5
    </pre>

    <h2>Calling ESM Modules</h2>
    <p>To call an ESM module, use the import statement:</p>
    <pre>
import { add } from './math.mjs';
    </pre>

    <h2>Comparison: CommonJS vs ESM</h2>
    <table>
        <tr>
            <th>CommonJS</th>
            <th>ESM</th>
        </tr>
        <tr>
            <td>Syntax: require() and module.exports</td>
            <td>Syntax: import and export</td>
        </tr>
        <tr>
            <td>File Extension: .js</td>
            <td>File Extension: .mjs (or .js with "type": "module" in package.json)</td>
        </tr>
        <tr>
            <td>Support: Node.js (default), browsers (with bundlers)</td>
            <td>Support: Node.js (with flags or .mjs extension), modern browsers</td>
        </tr>
        <tr>
            <td>Async Loading: No</td>
            <td>Async Loading: Yes</td>
        </tr>
        <tr>
            <td>Tree Shaking: No</td>
            <td>Tree Shaking: Yes</td>
        </tr>
    </table>

    <h2>Example (CommonJS):</h2>
    <pre>
// math.js
module.exports.add = (a, b) => {
    return a + b;
};

// app.js
const math = require('./math');
console.log(math.add(2, 3)); // Output: 5
    </pre>

    <h2>Example (ESM):</h2>
    <pre>
// math.mjs
export function add(a, b) {
    return a + b;
}

// app.mjs
import { add } from './math.mjs';
console.log(add(2, 3)); // Output: 5
    </pre>

    <h2>When to use ESM?</h2>
    <ul>
        <li>When writing modern JavaScript applications</li>
        <li>When using tree shaking or async loading</li>
        <li>When targeting modern browsers or Node.js environments</li>
    </ul>

    <h2>When to use CommonJS?</h2>
    <ul>
        <li>When working with older Node.js versions or browsers</li>
        <li>When using libraries that don't support ESM</li>
        <li>When simplicity is preferred (e.g., small scripts or prototypes)</li>
    </ul>

    <h2>Best Practices for ESM and CommonJS</h2>

    <h3>ESM (ECMAScript Modules)</h3>
    <ul>
        <li>Use .mjs extension: Use the .mjs extension for ESM files to clearly indicate they're using ESM syntax.</li>
        <li>Use import and export: Use the import and export keywords to define and import modules.</li>
        <li>Avoid default exports: Avoid using default exports, as they can make it harder to refactor and understand code.</li>
        <li>Use named exports: Use named exports to make it clear what functions or variables are being exported.</li>
        <li>Use async/await: Use async/await to handle asynchronous code and make it easier to read.</li>
        <li>Use tree shaking: Use tree shaking to remove unused code and reduce bundle size.</li>
    </ul>

    <h3>CommonJS</h3>
    <ul>
        <li>Use .js extension: Use the .js extension for CommonJS files.</li>
        <li>Use require() and module.exports: Use require() to import modules and module.exports to export modules.</li>
        <li>Avoid using exports object: Avoid using the exports object directly, as it can lead to unexpected behavior.</li>
        <li>Use module.exports: Use module.exports to export modules.</li>
        <li>Use callbacks: Use callbacks to handle asynchronous code.</li>
    </ul>

    <h2>Comparison of Best Practices</h2>
    <table>
        <tr>
            <th>ESM</th>
            <th>CommonJS</th>
        </tr>
        <tr>
            <td>File Extension: .mjs</td>
            <td>File Extension: .js</td>
        </tr>
        <tr>
            <td>Import/Export: import and export</td>
            <td>Import/Export: require() and module.exports</td>
        </tr>
        <tr>
            <td>Async Handling: async/await</td>
            <td>Async Handling: callbacks</td>
        </tr>
        <tr>
            <td>Tree Shaking: Yes</td>
            <td>Tree Shaking: No</td>
        </tr>
    </table>

    <h2>When to use ESM?</h2>
    <ul>
        <li>New projects: Use ESM for new projects, as it's the future of JavaScript modules.</li>
        <li>Modern browsers: Use ESM when targeting modern browsers.</li>
        <li>Async code: Use ESM when working with async code, as it provides better support for async/await.</li>
    </ul>

    <h2>When to use CommonJS?</h2>
    <ul>
        <li>Legacy projects: Use CommonJS for legacy projects that already use it.</li>
        <li>Node.js libraries: Use CommonJS when creating Node.js libraries that need to support older versions.</li>
        <li>Simple scripts: Use CommonJS for simple scripts or prototypes.</li>
    </ul>
</body>
</html>
`;
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}).listen(3004, () => {
    console.log('Server running on http://localhost:3004');
});
