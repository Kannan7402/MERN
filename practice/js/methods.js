// call 

// function greet(name, age)
// {
//     console.log(`hi ${name} and ${age}`);
// }
// greet.call(null , 'kannan',22);

//apply

// function greet(name, age)
// {
//     console.log(`hi ${name} and ${age}`);
//  }
//  greet.apply(null , ['kannan',22]);

 // bind

 function greet(name,age){
    console.log(`hi ${name} and ${age}`);
 }

 const greeter = greet.bind(null,'kannan')
 greeter(22);
