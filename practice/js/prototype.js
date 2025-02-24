// create method

// const personproto ={
//     greet()
//     {
//         console.log('hai hello');
//     }
// }
// const person = Object.create(personproto);
// person.greet()

// const person = {
//     name : 'kannan'
// }
// let person1 = person;
//  console.log(person1);
// person1.name ='kannu'
// console.log(person);

// object creation using class

class person {
    constructor(name,age){
    this.name=name;
    this.age=age;
    }

    greet()
    {
        console.log(`${this.name} hello ${this.age}`);
    }
}
const person1 = new person('kannan',22)
person1.greet();