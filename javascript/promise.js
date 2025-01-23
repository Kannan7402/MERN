// // promise
// const promise = new Promise((resolve,reject) => {
//     let x=1;
//     if(x==1)
//     {
//         resolve(x);
//     }
//     else{
//         reject(error);
//     }
// });
// promise 
//     .then(x=> {
//         console.log(x);
//     })
//     .catch(error=> {
//         console.log("error");
// });
// // timeout and interval
// let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log(`Interval count: ${count}`);
//     if (count === 5) {
//         clearInterval(intervalId); // Stop the interval after 5 executions
//     }
// }, 1000);

// setTimeout(() => {
//     console.log("This message appears after 3 seconds.");
// }, 3000);


const reach = new Promise((resolve,reject)=>
{
    let x=1;
    if(x==1)
    {
        resolve((setTimeout(()=>
        {
            console.log("hai");
        },3000)));
    }
    else{
        reject("error");
    }
})
async function display()
{
    try{
    console.log("loading");
    res = await reach;
    console.log("loaded");
    }
    catch(error){
        console.log(error);
    }
}
display()