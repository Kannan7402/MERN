const fs = require('fs');
const readableStream = fs.createReadStream('example.txt');
const writableStream = fs.createWriteStream('output.txt');
// setTimeout(()=>{
//     readableStream.pause();
// },1000)

// readableStream.pause();
// readableStream.on('pause',()=>
// {
//     console.log('paused');
//     readableStream.resume();

// })
// readableStream.on('resume',()=>
// {
//     console.log('resume');
// })
readableStream.on('end', () => {
    console.log('End event: No more data');
});

readableStream.on('data', (chunk) => {
    console.log('Data event: ', chunk.toString());
});

readableStream.on('error', (err) => {
    console.error('Error event:', err);
});

readableStream.on('close', () => {
    console.log('Close event: Stream closed');
});

// drain , error , close , pipe , finish , unpipe

writableStream.on('pipe',()=>
{
    console.log('piped');
})

readableStream.pipe(writableStream);  // Properly pipe data to the writable stream
