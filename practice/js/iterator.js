// iterator

const array = [1,2,3,4];
const arrite = array[Symbol.iterator]();
console.log(arrite.next());
console.log(arrite.next());
console.log(arrite.next());
console.log(arrite.next());
console.log(arrite.next());
