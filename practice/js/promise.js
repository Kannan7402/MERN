// const promise = new Promise((resolve,reject)=>
// {
//     let x=1;
//     if(x==1)
//     {
//         resolve(setTimeout(()=>
//         {
//             console.log('timeout');
//         },3000))
//     }
//     else{
//         reject((err)=>console.log('err'))
//     }
// })
function fetchData()
{
    return new Promise((resolve,reject)=>
    {
       setTimeout(()=>resolve('data fetched'))
    },2000)
}
fetchData()
.then((data)=>console.log(data))
.catch((err)=>console.log(err))