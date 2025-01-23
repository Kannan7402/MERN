// //iterators
const arr = [1,2,3];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//generators

function* counter(){
    yield 1;
    yield 2;
}
const gen = counter();
console.log(gen.next());
console.log(gen.next());