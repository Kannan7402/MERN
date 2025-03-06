console.log("Starting Event Loop Example");

console.log("Step 1: Initial synchronous code");

// Simulating synchronous operations
function synchronousOperation(message) {
  console.log(`Synchronous Operation: ${message}`);
}

synchronousOperation("Hello, I'm a synchronous operation.");

setTimeout(() => {
  console.log("Step 2: setTimeout (0 ms) - this is asynchronous");
}, 0);

setTimeout(() => {
  console.log("Step 3: setTimeout (1000 ms) - delayed by 1 second");
}, 1000);

setImmediate(() => {
  console.log("Step 4: setImmediate - executed immediately after the current event loop phase");
});

setInterval(() => {
  console.log("Step 5: setInterval - runs every 500ms (repeated)");
}, 500);

new Promise((resolve, reject) => {
  console.log("Step 6: Promise created");
  setTimeout(() => {
    resolve("Step 7: Promise resolved after a timeout");
  }, 2000);
}).then((message) => {
  console.log(message);
});

console.log("Step 8: More synchronous code");

synchronousOperation("Another synchronous operation");

console.log("Step 9: End of synchronous code");

// Simulating I/O operation using a `setImmediate`
setImmediate(() => {
  console.log("Step 10: I/O task handled by setImmediate");
});

// A fake I/O operation that resolves after 1500ms
function fakeIOOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 11: Fake I/O operation complete");
    }, 1500);
  });
}

fakeIOOperation().then((message) => {
  console.log(message);
});

// Handling a second set of promises
const promiseChain = new Promise((resolve, reject) => {
  console.log("Step 12: Starting second Promise chain");
  resolve("Step 13: First Promise resolved in the chain");
});

promiseChain
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 14: Second Promise in the chain resolved");
      }, 100);
    });
  })
  .then((message) => {
    console.log(message);
  });

console.log("Step 15: Waiting for asynchronous operations to finish");

// Using `process.nextTick` to schedule a callback in the next iteration of the event loop
process.nextTick(() => {
  console.log("Step 16: process.nextTick - executed before the event loop continues");
});

// Using setTimeout with 0 ms to queue it after the synchronous code
setTimeout(() => {
  console.log("Step 17: setTimeout with 0ms delay - queued after the current operation");
}, 0);

// Final output after all async operations
setTimeout(() => {
  console.log("Step 18: Final setTimeout after async operations complete");
}, 3000);

console.log("Event Loop Example has finished initial execution, now waiting for asynchronous operations to complete.");

// A bunch of asynchronous operations running in the background
setTimeout(() => {
  console.log("Step 19: setTimeout (500ms) executed");
}, 500);

setTimeout(() => {
  console.log("Step 20: setTimeout (2000ms) executed after longer delay");
}, 2000);

setInterval(() => {
  console.log("Step 21: setInterval (1000ms) running");
}, 1000);

process.nextTick(() => {
  console.log("Step 22: Another process.nextTick executed");
});

console.log("Step 23: Finishing execution, but more async tasks are still waiting to run.");
