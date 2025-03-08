const fileReader = require("fs");

fileReader.readFile("./output.txt",(err,data)=>{
    if(data){
        console.log(data.toString())
    }else{
        console.log(err)
    }
})
