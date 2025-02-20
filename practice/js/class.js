class People{
    constructor()
    {
    this.name = 'kannan';
    this.age = 20;
    }
}

class Person extends People{
    constructor ()
    {
       super();
    }
       greet()
       {
        console.log(`hi ${this.name}`)
         }
}
const Person1 = new Person();
Person1.greet();
