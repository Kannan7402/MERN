const person = {
    name : 'kannan',
    age : 20
}
for(let key in person)
{
    console.log(key);
}

const person1 = [1,2,3,4]
for(let value of person1)
{
    console.log(value);
}
let sum =0;
person1.forEach((item)=>item)
{
   console.log(item);
}