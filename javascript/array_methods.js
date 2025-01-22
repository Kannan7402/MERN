const arr = [2,1,3,4];
const kannan = ["a","c","b"];
console.log(kannan.sort());
console.log(kannan.reverse());
kannan.pop();
console.log(kannan);
kannan.push("f")
console.log(kannan);
kannan.shift();
console.log(kannan);
kannan.unshift("h");
console.log(kannan);
len= kannan.length;
console.log(len);
let arr1 = arr.concat(kannan);
console.log(arr1);
arr.copyWithin(1,2);
console.log(arr);
const array = [[1,2],[4,3]];
let arr2 = array.flat();
console.log(arr2);
let arr3 = arr2.map(x => x*2);
console.log(arr3);
let sum = arr3.reduce(
    (a,x)=>a+x
);
console.log(sum);
