const fs = require('fs');
const path = '../MERN/node/hello.txt'; // Update this path to the correct file location

fs.stat(path, (err, stats) => {
  if (err) {
    return console.error('Error checking file stats:', err);
  }
  console.log(stats.isFile()); // true if it's a file
  console.log(stats.isDirectory()); // true if it's a directory
  console.log(stats.isSymbolicLink()); // true if it's a symbolic link
  console.log(`File size: ${stats.size} bytes`); // File size in bytes
});
