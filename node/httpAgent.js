const http = require('http');

// Create a custom HTTP Agent
const agent = new http.Agent({
  keepAlive: true,   // Keep the socket alive for reuse
  maxSockets: 10,    // Maximum number of sockets to allow per host
  maxFreeSockets: 5, // Maximum number of sockets to leave open in the free pool
});

// Options for the HTTP request
const options = {
  hostname: 'www.example.com',  // Host to send the request to
  port: 80,                    // Port for the HTTP request
  path: '/',                   // Path of the resource
  method: 'GET',                // HTTP method
  agent: agent                  // Use the custom agent
};

const req = http.request(options, (res) => {
  let data = '';

  // A chunk of data has been received
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response Data:');
    console.log(data);
  });
});

// Handle any errors
req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

// End the request (no body content in this case)
req.end();
