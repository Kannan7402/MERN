const os = require('os');

console.log('Architecture:', os.arch());
console.log('Hostname:', os.hostname());
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());
console.log('CPU Info:', os.cpus());
console.log('System Uptime:', os.uptime());
console.log('Home Directory:', os.homedir());
console.log('Load Averages:', os.loadavg());
console.log('Network Interfaces:', os.networkInterfaces());
console.log('Endianness:', os.endianness());
console.log('OS Type:', os.type());
console.log('OS Version:', os.version());
