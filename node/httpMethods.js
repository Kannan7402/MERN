const http = require('http');

let users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 }
];

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const userId = parseInt(url.split('/')[2]); // Extract user ID from URL if present

  if (method === 'GET') {
    if (url === '/users') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    } else if (url.startsWith('/users/') && userId) {
      const user = users.find(u => u.id === userId);
      if (user) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('User not found');
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Invalid endpoint');
    }
  }

  else if (method === 'POST' && url === '/users') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      const newUser = JSON.parse(body);
      newUser.id = users.length + 1; 
      users.push(newUser);

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newUser));  
    });
  }

  else if (method === 'PUT' && url.startsWith('/users/') && userId) {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      const updatedData = JSON.parse(body);
      const userIndex = users.findIndex(u => u.id === userId);

      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedData };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users[userIndex])); 
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('User not found');
      }
    });
  }

  else if (method === 'DELETE' && url.startsWith('/users/') && userId) {
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
      users.splice(userIndex, 1);  
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('User deleted');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('User not found');
    }
  }

  else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
