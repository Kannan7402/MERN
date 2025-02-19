const { Duplex } = require('stream');

class CustomDuplexStream extends Duplex {
  constructor(options) {
    super(options);
    this.internalData = ''; // Store incoming data here
  }

  _write(chunk, encoding, callback) {
    // Modify the data before storing it
    this.internalData += chunk.toString().toUpperCase(); // Convert to uppercase
    callback(); // Signal that the write is finished
  }

  
  _read(size) {
    // Push the modified data to be read from the stream
    this.push(this.internalData);
    this.push(null); // Indicate that there is no more data to read
  }
}

// Create an instance of the custom duplex stream
const duplexStream = new CustomDuplexStream();

// Writing data to the duplex stream
duplexStream.write('hello ');
duplexStream.write('world!');

// Reading data from the duplex stream
duplexStream.on('data', (chunk) => {
  console.log('Read data:', chunk.toString());
});

// End the stream
duplexStream.end();
