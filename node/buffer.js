const buffer1 = Buffer.alloc(10)
//const buffer = Buffer.alloc(10, 'A'); -  fills with A
console.log(buffer1);
const buffer2 = Buffer.allocUnsafe(10);
// faster but risker
console.log(buffer2);
const buffer3 = Buffer.from([1,2,3,4,5])
console.log(buffer3);
const buffer4 = Buffer.from('hello','utf8');
console.log(buffer4);
const buffer5 = Buffer.from(buffer3);
console.log(buffer5);

const result = Buffer.compare(buffer5, buffer1);
console.log(result)

const concat = Buffer.concat([buffer3,buffer5]);
console.log(concat);

// methods
// console.log(buffer4.toString());
// console.log(buffer4.toJSON());

// const slice = buffer4.slice(0,3);
// console.log(slice.toString());

// console.log(buffer1.equals(buffer5));
// console.log(buffer4.indexOf('h'));