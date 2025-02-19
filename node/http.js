const http = require('http');

const server = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Welcome to the Home Page!</h1>');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('<h1>About Us</h1><p>This is the About page.</p>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1><p>Page not found!</p>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
