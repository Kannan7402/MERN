// function display(name, callback){
//     console.log(name);
//     callback();
// }
// function bye(){
//     console.log("bye");
// }
// display('kannan',bye)
// const arr = [1,2,3,4];
// const sum = arr.reduce((a,x)=>a+x,0);
// console.log(sum);


// const personprototype = {
//     greet(){
//         console.log(this.name+" is");
//     }
// }
// const person = Object.create(personprototype)
// person.name='kannan';
// console.log(person);
// person.greet()

// //iterators
// const arr = [1,2,3];
// let iterator = arr[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//generators

function* counter(){
    yield 1;
    yield 2;
}
const gen = counter();
console.log(gen.next());
console.log(gen.next());