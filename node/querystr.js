const querystring = require('querystring'); // Use 'querystring' module

const encoded = querystring.encode({ name: 'kanna', age: '22' });
console.log(encoded); 

const decoded = querystring.parse(encoded);
console.log(decoded);  // Output: { name: 'kanna', age: '22' }

// alternate 

// const querystring = require('querystring'); // Use 'querystring' module

// const encoded = querystring.stringify({ name: 'kanna', age: '22' });
// console.log(encoded);  // Output: name=kanna&age=22

// const decoded = querystring.parse(encoded);
// console.log(decoded);  // Output: { name: 'kanna', age: '22' }
