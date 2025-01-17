class person{
    #age;
    constructor(){
        
        this.name='kannan';
        this.#age=22;
    }
    setAge()
    {
        this.#age=25;
        return this.#age;
    }

}
class student extends person {
    constructor()
    {
        super();
        this.mark=200;
        this.class='a';
        this.greet=()=>
        {
            console.log(`${this.name} is ${this.setAge()} and ${this.mark} `);
        }
    }
}
const stud = new student();
console.log(stud.greet());