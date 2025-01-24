// OBJECT CREATION
const person = {
    name: "kannan",
    age: 22
};
console.log(person.age);
// USING  CREATE METHOD
const peoplePrototype =
{
    greet(){
        console.log("hello"+people.name)
    }
}
const people = Object.create(peoplePrototype);
people.name='kannan';
console.log(people.greet());
//shadow prototype build in method
const obj = {
    freeze(){
        console.log('hello');
    },
    name:'kannan',
    age:23
}
console.log(obj.freeze());

//using functions

function identity(name1,age){
    this.name = name1,
    this.age = age,
    this.greet = function() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
      };
}
const newPerson = new identity('lokesh',23);
newPerson.greet();

// const newValue = Object.create({
//     name2:'kannan',
//     age:23,
// })

// delete newValue.age;

// const erer ={
//     name:'kannan',
//     age:23,
//     gender:'male',
// }

// delete erer.gender;

// console.log(erer);