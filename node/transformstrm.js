const fs = require('fs');
const zlib = require('zlib');
const readableStream = fs.createReadStream('example.txt');
const writableStream = fs.createWriteStream('input.txt.gz');
const gzipStream = zlib.createGzip();
readableStream.pipe(gzipStream).pipe(writableStream);
writableStream.on('finish', () => {
  console.log('File compressed input.txt.gz');
});
