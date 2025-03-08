const path = require("path")
// const base = path.basename('/home/asplap1866/Documents/MERN/node/output.txt');
// console.log(base);

// const baseWithoutExt = path.basename('/home/asplap1866/Documents/MERN/node/output.txt','.txt');
// console.log(baseWithoutExt);

// const dir = path.dirname('/home/asplap1866/Documents/MERN/node/output.txt');
// console.log(dir);

// const ext = path.extname('/home/asplap1866/Documents/MERN/node/output.txt');
// console.log(ext);

// const join = path.join('/kanna','basic','txt');
// console.log(join);

// const normalize = path.normalize('/kannan/jlm//lamp..');
// console.log(normalize); 

// const isAbsolute = path.isAbsolute('/home/asplap1866/Documents/MERN/node/output.txt');
// console.log(isAbsolute);

// const isNotAbsolute = path.isAbsolute('/home/asplap1866/Documents/MERN/node/output.txt');
// console.log(isNotAbsolute); 

const parsed = path.parse('/home/asplap1866/Documents/MERN/node/output.txt');
console.log(parsed);

const formattedPath = path.format(parsed);
console.log(formattedPath);


console.log(path.delimiter);
