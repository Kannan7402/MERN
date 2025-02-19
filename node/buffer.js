const buffer1 = Buffer.alloc(10)
console.log(buffer1);
const buffer2 = Buffer.allocUnsafe(10);
console.log(buffer2);
const buffer3 = Buffer.from([1,2,3,4,5])
console.log(buffer3);
const buffer4 = Buffer.from('hello','utf8');
console.log(buffer4);
const buffer5 = Buffer.from(buffer1);
console.log(buffer5);
// methods
console.log(buffer4.toString());
console.log(buffer4.toJSON());

const slice = buffer4.slice(0,3);
console.log(slice.toString());

console.log(buffer1.equals(buffer5));
console.log(buffer4.indexOf('h'));