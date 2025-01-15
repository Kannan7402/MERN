// callback function
function greet (name , callback)
{
    console.log(name);
    callback();
}
function bye(){
    console.log("goodbye");
}
greet("kannan" , bye);

//promise thenables catch finnally
//states : pending, fullfilled, rejected

const person = new Promise((resolve,reject)=>{

    resolve(setTimeout(() => {
        console.log('joker')
    }, 3000));
    reject('kannan');
});

person.then(data=>{
    console.log(data);
})

