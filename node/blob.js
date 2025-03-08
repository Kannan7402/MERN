const blob = new Blob (['kannan'],{type : "text/plain"});
blob.arrayBuffer()
.then((arr)=>
{
    console.log(arr);
})

blob.bytes().then((buffer) => {
  console.log(buffer); 
})

const slice  = blob.slice(0,4);
slice.text().then((text)=>
{
    console.log(text)
})

console.log(blob.type);

const stream = blob.stream();

const reader = stream.getReader();
reader.read().then(({ value, done }) => {
  console.log(new TextDecoder().decode(value)); 
  // Output: "kannan"
});
