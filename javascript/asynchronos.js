// callback function
// function greet (name , callback)
// {
//     console.log(name);
//     callback();
// }
// function bye(){
//     console.log("goodbye");
// }
// greet("kannan" , bye);

//promise thenables catch finnally
//states : pending, fullfilled, rejected

// const person = new Promise((resolve,reject)=>{
//     resolve(setTimeout(() => {
//         console.log('joker')
//     }, 3000));
//     reject('kannan');
// });
// person.then(data=>{
//     console.log(data);
// }
// )

// const myData = fetch('https://jsonplaceholder.typicode.com/users');
// myData.then(data=>{
//    return data.json();
// })
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err)
// })
// .finally(fin=>{
//     console.log('fetch ended');  
// })
// (async function getData() {
//     try{
//     const getDatum = await fetch('https://jsonplaceholder.typicode.com/todo');
//     const allData = await getDatum.json();
//     console.log(allData);
//     }
//     catch{
//         console.log('error while fetching');
//     }
// })();

// function add(a, b) {
//     let sum = a + b;
//     debugger;  // The debugger will pause execution here
//     return sum;
//   }
  
//   add(5, 7);

//const arr = ['kannan','selvaraj','bala','rathesh'];
// arr.forEach((curr,index,full)=>{
//   console.log(curr);
//   console.log(index);
//   console.log(full);
// })
// function displaydata(name)
// {
//   setTimeout(() => {
//     console.log(name);
//   }, 1000);
  
// }
// function process(callback)
// {
//   callback;
//   console.log("hi");
// }
// process(displaydata('kannan'));

// //shallow copy
// const arr1 = ['kannan' , [{car : 'bmw' ,bike : 'hayabusa'}]];
// console.log(arr1[1]);
// arr2 = [...arr1];
// console.log(arr2);
//exception handling in js
// try{
//   if(9>10){
//     console.log('true');
//   }else{
//     throw new Error('hi')
//   }
// }catch(error){
//  console.log(error)
// }finally{
//   console.log('ok');
// }

// interval 
//     let count = 0;
//    const myinterval =  setInterval(()=>
// {
//   console.log(count +"is count");
//   count++;
// if(count>=5)
// {
//     clearInterval(myinterval);
// }},2000);
