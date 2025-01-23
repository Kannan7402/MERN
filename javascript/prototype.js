// const person={
//     name:'kannan',
//     age:22
// };
// console.log(person);
// person.nation = 'india';
// language = 'tamil'
// person.prototype= language;
// console.log(person);
// delete person.age;
// console.log(person);
// const person2 = {
//     passion : 'no',
// };
//  const person3={...person, ...person2};
// console.log(person3);


//object prototype
function person(name , age)
{
    this.name=name;
    this.age=age;
}
person.prototype.greet=function()
{
    console.log("hai"+person1.name);
};
const person1 = new person('kannan',22);
person1.greet();


// array prototype
const array = [1,2,3,4];
let even = array.filter(x=>x%2==0);
console.log(even);
let multi = array.map(x=>x*2)
console.log(multi);
let sum= array.reduce((x,a)=>x+a,0);
console.log(sum);
