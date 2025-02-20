class Bank {
    #balance = 0; 

    get balance ()
    {
        return this.#balance;
       
    }
    set balance (amount)
    {
        this.#balance = amount;
    }
    deposit(amount)
    {
        this.#balance+=amount;
        console.log(this.#balance);
    }
    withdraw(amount)
    {
        this.#balance-=amount;
        console.log(this.#balance);
    }
}
const myBank = new Bank();
myBank.deposit(200);
myBank.withdraw(100);
myBank.withdraw(50);
  console.log(myBank.balance);