const fs = require('fs');
const path = '/MERN/node/test.txt'; // Make sure this is the correct path to the file

try {
  const stats = fs.statSync(path);
  console.log(stats.isFile()); // true if it's a file
  console.log(stats.isDirectory()); // true if it's a directory
  console.log(stats.isSymbolicLink()); // true if it's a symbolic link
  console.log(`File size: ${stats.size} bytes`); // File size in bytes
} catch (err) {
  console.error('Error fetching file stats:', err);
}
