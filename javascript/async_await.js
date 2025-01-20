let reach = new Promise((resolve,reject)=>{
const reached = false;
if(reached)
{
    setTimeout(resolve,3000,"reached on time");
}
else{
    reject("not reached");
}});
async function asyncreach()
{
    try{
    console.log("check");
    res = await reach;
    console.log(res);
    }
    catch(err){
      console.log(err);
    }
}
asyncreach()
// const promise = new Promise((resolve,reject)=>{
//     let x=1;
//    if(x==1)
//    {
//     resolve("1")
//    }
//    else{
//     reject("error")
//    }
// })

// async function display()
// {
//     const oops = await promise ; 
//     console.log(oops);

// }
// display()