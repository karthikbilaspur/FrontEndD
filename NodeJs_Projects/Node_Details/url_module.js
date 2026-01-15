const fs = require('fs');
const url = require('url');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Node.js URL Module</title>
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
  <h1>Node.js URL Module</h1>
  <p>The URL module in Node.js is a built-in module that provides utilities for URL resolution and parsing. It allows you to work with URLs, extract their components, and manipulate them.</p>

  <h2>Key Functions of the URL Module:</h2>
  <ul>
    <li><strong>URL Parsing:</strong> Break down a URL into its components, such as protocol, hostname, pathname, and query parameters.</li>
    <li><strong>URL Resolution:</strong> Resolve a relative URL against a base URL.</li>
    <li><strong>URL Construction:</strong> Create a new URL object from scratch.</li>
  </ul>

  <h2>Example Programs:</h2>
  <h3>1. Parsing a URL</h3>
  <pre><code>const url = require('url');
const myUrl = new URL('https://example.com/path/to/resource?query=string#fragment');
console.log(myUrl.protocol); // https:
console.log(myUrl.hostname); // example.com
console.log(myUrl.pathname); // /path/to/resource
console.log(myUrl.search); // ?query=string
console.log(myUrl.hash); // #fragment</code></pre>

  <h3>2. Resolving a Relative URL</h3>
  <pre><code>const url = require('url');
const baseUrl = 'https://example.com/path/to/base';
const relativeUrl = 'resource.html';
const resolvedUrl = new URL(relativeUrl, baseUrl);
console.log(resolvedUrl.href); // https://example.com/path/to/resource.html</code></pre>

  <h3>3. Constructing a URL</h3>
  <pre><code>const url = require('url');
const myUrl = new URL('https://example.com');
myUrl.pathname = '/path/to/resource';
myUrl.search = 'query=string';
myUrl.hash = 'fragment';
console.log(myUrl.href); // https://example.com/path/to/resource?query=string#fragment</code></pre>

  <h2>URL Module Functions:</h2>
  <ul>
    <li><strong>URL:</strong> Creates a new URL object.</li>
    <li><strong>URLSearchParams:</strong> Creates a new URLSearchParams object.</li>
    <li><strong>url.parse():</strong> (Deprecated) Parses a URL string into an object.</li>
    <li><strong>url.format():</strong> (Deprecated) Formats a URL object into a string.</li>
  </ul>

  <h2>URL Object Properties:</h2>
  <ul>
    <li><strong>href:</strong> The entire URL string.</li>
    <li><strong>protocol:</strong> The protocol of the URL (e.g., https:).</li>
    <li><strong>hostname:</strong> The hostname of the URL (e.g., example.com).</li>
    <li><strong>pathname:</strong> The path of the URL (e.g., /path/to/resource).</li>
    <li><strong>search:</strong> The query string of the URL (e.g., ?query=string).</li>
    <li><strong>hash:</strong> The fragment of the URL (e.g., #fragment).</li>
  </ul>

  <h2>Additional Example Programs:</h2>
  <h3>1. Parsing a URL and Extracting Query Parameters</h3>
  <pre><code>const url = require('url');
const myUrl = new URL('https://example.com/path/to/resource?query=string&param=value#fragment');
const queryParams = Object.fromEntries(myUrl.searchParams);
console.log(queryParams); // { query: 'string', param: 'value' }</code></pre>

  <h3>2. Constructing a URL with Query Parameters</h3>
  <pre><code>const url = require('url');
const myUrl = new URL('https://example.com/path/to/resource');
myUrl.searchParams.set('query', 'string');
myUrl.searchParams.set('param', 'value');
console.log(myUrl.href); // https://example.com/path/to/resource?query=string&param=value</code></pre>

  <h3>3. Updating a URL's Pathname and Hash</h3>
  <pre><code>const url = require('url');
const myUrl = new URL('https://example.com/path/to/resource?query=string#fragment');
myUrl.pathname = '/new/path';
myUrl.hash = 'new-fragment';
console.log(myUrl.href); // https://example.com/new/path?query=string#new-fragment</code></pre>
</body>
</html>
`;

fs.writeFile('url_module.html', htmlContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('HTML file generated successfully!');
});