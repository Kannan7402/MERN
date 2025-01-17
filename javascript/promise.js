 const promise = new Promise((resolve,reject) => {
    let x=1;
    if(x==1)
    {
        resolve(x);
    }
    else{
        reject(error);
    }
});
promise 
    .then(x=> {
        console.log(x);
    })
    .catch(error=> {
        console.log("error");
});