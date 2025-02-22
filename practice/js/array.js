const arr = [5,10];
// let [a,b]=arr;
// console.log(a,b);
// [b,a]=[a,b]
// console.log(a,b);
// // console.log(arr.reverse());
// arr.push(3);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(1);
// console.log(arr);
// let arr2 = ['kannan','kan']
// let arr3 = arr2.concat(arr);
// console.log('concat',arr3);
const num = arr.map(num=>num*2);
console.log(num)

let a = arr.reduce((a,x)=>a+x)  // reduce right
console.log(a);

let b = arr.filter((a)=>a>5);
console.log(b);

let c = arr.flatMap((a)=> [a,a*2]);
console.log(c);
