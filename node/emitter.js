const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('started');
})
eventEmitter.emit('start');

// eventEmitter.once('start',()=>
//     {
//         console.log('started');
//     })
// eventEmitter.emit('start');
// eventEmitter.emit('start');

// passing arguments 

// eventEmitter.on('start', number => {
//     console.log(`started ${number}`);
//   });
  
//   eventEmitter.emit('start', 23);


  