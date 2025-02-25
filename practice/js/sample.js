const Promise1 = new Promise((resolve,reject)=>
    {
        let x=1;
        if(x==1){
        resolve(setTimeout(()=>
        {
            console.log('hai')
        },3000))
        }
        else{
        reject(console.log('rejected'));
        }
    })
    const Promise2 = new Promise((resolve,reject)=>
    {
        let x=2;
        if(x==1){
        resolve(setTimeout(()=>
        {
            console.log('hai')
        },3000))
        }
        else{
        reject(console.log('rejected'));
        }
    })
        Promise.race ([Promise1,Promise2])
        .then((res)=>
        {
            console.log(res);
        })
        .catch((err)=>
        {
            console.log(err);
        })