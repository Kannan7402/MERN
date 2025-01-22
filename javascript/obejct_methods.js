const person = {
    name : 'kannan',
    age : 22
}
person.lang = 'eng';
delete person.age;
console.log(person);

// { name: 'kannan', lang: 'eng' }

function people(name,age)
{
    this.name = 'kannan';
    this.age=22
}
people.prototype.display = function(){
    console.log("hai");
}
const kannan = new people('kannan',22);
kannan.display();
