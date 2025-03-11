const fs = require('fs');
const path = '/home/asplap1866/Documents/MERN/node/env.js'; 

fs.stat(path, (err, stats) => {
  if (err) {
    return console.error('Error checking file stats:', err);
  }
  console.log(stats.isFile()); // true if it's a file
  console.log(stats.isDirectory()); // true if it's a directory
  console.log(stats.isSymbolicLink()); // true if it's a symbolic link
  console.log(`File size: ${stats.size} bytes`); // File size in bytes
});
