const fs = require('fs');
const path = '/home/asplap1866/Documents/MERN/node/readfile.js'; 

try {
  const stats = fs.statSync(path);
  console.log(stats.isFile());
  console.log(stats.isDirectory()); 
  console.log(stats.isSymbolicLink()); 
  console.log(`File size: ${stats.size} bytes`); 
} catch (err) {
  console.error('Error fetching file stats:', err);
}
