const promise = new Promise((resolve,reject)=>{
    let x=1;
    if(x==1){
        resolve(setTimeout(()=>{
            console.log("wait 3seconds");
        },3000));
    }
    else{
        reject("no")
    }
})
async function reach(){
    try{
        res =await promise;
        console.log("hai");
    }
    catch(err){
        console.log(err);
    }
}
reach();