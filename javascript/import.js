import { add, subtract } from './export.js';

console.log(add(2, 3));  // 5
console.log(subtract(5, 2));  // 3

import logMessage from '.export.js';

logMessage("Hello, world!"); 
