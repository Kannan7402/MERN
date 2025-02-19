// console.log('Start');
// // Deferring the next operation using process.nextTick
// process.nextTick(() => {
//     console.log('Deferred Task (nextTick)');
//   });


// // Simulating a heavy computation that blocks the event loop
// let counter = 0;
// while (counter < 1e6) {
//   counter++;
// }

// console.log('Middle');

// console.log('End');


// console.log('Start');

// // Simulate an I/O operation with a setImmediate
// setImmediate(() => {
//   console.log('I/O Task');
// });
// process.nextTick(() => {
//     console.log('Deferred Task (nextTick)');
//   });

// console.log('End');

console.log('Start');

setImmediate(() => {
  console.log('First setImmediate');
});

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  console.log('Second setImmediate');
});

console.log('End');

