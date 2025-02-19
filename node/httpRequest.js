const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>This is a GET request!</h1>');
  } else if (req.method === 'POST') {
    res.statusCode = 200;
    res.end('<h1>This is a POST request!</h1>');
  } else {
    res.statusCode = 405; // Method Not Allowed
    res.end('<h1>Method Not Allowed</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
