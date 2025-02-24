const person = {
    name:'kannan',
    age:22,
    address :{
        city:'kangeyam',
        place:'sivanmalai'
    }
}
// let shallow = {...person};
// shallow.name = 'kan';
// shallow.address.city = 'tir'
// console.log(person);

let deep = JSON.parse(JSON.stringify(person))
deep.name = 'kan';
deep.address.city = 'tir'
console.log(person);
