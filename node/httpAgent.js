const http = require('http');

const agent = new http.Agent({
  keepAlive: true,  
  maxSockets: 5, 
});

const options = {
  hostname: 'google.com',
  port: 80,
  path: '/',
  agent: agent, 
};

http.get(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  res.on('data', (chunk) => {
    console.log(`Data: ${chunk}`);
  });
});
