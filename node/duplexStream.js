const { Duplex } = require('stream');

class CustomDuplexStream extends Duplex {
  constructor(options) {
    super(options);
    this.internalData = ''; 
  }

  _write(chunk, encoding, callback) {
    this.internalData += chunk.toString().toUpperCase(); 
    callback(); 
  }

  _read(size) {
    if (this.internalData) {
      this.push(this.internalData);
      this.push(null);
    }
  }
}

const duplexStream = new CustomDuplexStream();
duplexStream.write('hello ');
duplexStream.write('world!');

duplexStream.on('data', (chunk) => {
  console.log('Read data:', chunk.toString()); 
});
duplexStream.end();
