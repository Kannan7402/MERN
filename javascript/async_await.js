const promise = new Promise((resolve,reject)=>{
    let x=1;
    if(x==1){
        resolve(setTimeout(()=>{
            console.log("hai");
        },3000));
    }
    else{
        reject("no")
    }
})
async function reach(){
    try{
        res =await promise;
        console.log("wait 3 seconds");
    }
    catch(err){
        console.log(err);
    }
}
reach();