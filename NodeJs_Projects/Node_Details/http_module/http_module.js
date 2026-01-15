const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});