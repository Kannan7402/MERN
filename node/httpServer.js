const http = require('http');

const server = http.createServer((req, res) => {
  // Sending response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.on('request', (req, res) => {
  console.log('Request received');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

setTimeout(() => {
  server.close(() => {
    console.log('Server closed');
  });
}, 5000);
