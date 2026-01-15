// https-module.js
const fs = require('fs');
const path = require('path');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>HTTPS Module</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/dist/dark.min.css">
</head>
<body>
  <h1>HTTPS Module</h1>

  <p>The HTTPS module is a built-in Node.js module that allows you to create an HTTPS server and handle HTTPS requests.</p>

  <h2>What is HTTPS?</h2>
  <p>HTTPS (Hypertext Transfer Protocol Secure) is a protocol used for transferring data securely over the web. It's an extension of HTTP that adds an extra layer of security using SSL/TLS encryption.</p>

  <h2>Why Use HTTPS?</h2>
  <ul>
    <li><strong>Security:</strong> HTTPS encrypts data in transit, protecting it from eavesdropping and tampering.</li>
    <li><strong>Trust:</strong> HTTPS helps establish trust with users, as it verifies the identity of the server and ensures the data is encrypted.</li>
    <li><strong>SEO:</strong> Google recommends using HTTPS for all websites, and it may improve search engine rankings.</li>
  </ul>

  <h2>Creating an HTTPS Server</h2>
  <p>To create an HTTPS server, you need to generate SSL/TLS certificates and use the <code>https</code> module:</p>
  <pre><code>const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});</code></pre>

  <h2>Generating SSL/TLS Certificates</h2>
  <p>To generate SSL/TLS certificates, you can use tools like OpenSSL:</p>
  <pre><code>openssl req -x509 -newkey rsa:2048 -nodes -keyout key.pem -out cert.pem -days 365</code></pre>

  <h2>Handling HTTPS Requests</h2>
  <p>The <code>createServer()</code> method takes a callback function that handles HTTPS requests:</p>
  <pre><code>const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
  console.log(\`Request method: \${req.method}\`);
  console.log(\`Request URL: \${req.url}\`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});</code></pre>

  <h2>Example Use Case</h2>
  <p>Here's an example of a simple HTTPS server that responds to GET requests:</p>
  <pre><code>const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});</code></pre>
</body>
</html>
`;

fs.writeFile(path.join(__dirname, 'https-module.html'), htmlContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('https-module.html file generated successfully!');
});