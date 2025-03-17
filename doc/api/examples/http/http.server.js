const http = require('http');

// Create an HTTP server    -- REQUIRED --
const server = http.createServer((req, res) => {
  // Handle incoming requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

// TODO:

// 13. server.listen()
server.listen(3000, 'localhost', () => {
  console.log('Server listening on localhost:3000');
});
