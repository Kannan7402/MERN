const fileReader = require("fs");

const content = 'i am from jlm'
fileReader.writeFile("./output.txt",content,(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('data written');
  
    }
})