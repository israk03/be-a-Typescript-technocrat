class BankAccount {
    public readonly userId: number;
    public userName: string;
    private _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
         
    }

    // // balance k set kortesey
    // addBalance(balance: number){
    //     this._userBalance += balance;
    // }

    //! setter
    set addBalance(amount: number){
        this._userBalance += amount
    }

    // // get korbo
    // getBalance(){
    //     return this._userBalance;
    // }
    
    //!getter
    get getBalance(){
        return this._userBalance;
    }

}


const micAccount = new BankAccount(1111, "Israk", 100)


// micAccount.addBalance(100);
// micAccount.addBalance(50);
// console.log(micAccount.getBalance())

micAccount.addBalance = 200;
micAccount.addBalance = 70;

console.log(micAccount.getBalance);
