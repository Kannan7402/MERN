// console.log('start');
// setTimeout(()=>console.log('data'),0);
// Promise.resolve()
// .then(()=>console.log('resolved'));

// console.log('end');

console.log('start');
setTimeout(()=>console.log('data'),0);

Promise.resolve()
.then(()=>setTimeout(()=>console.log('resolved'),0));
console.log('end');