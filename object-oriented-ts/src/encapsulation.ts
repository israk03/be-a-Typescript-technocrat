// access >> modify

class BankAccount {
    public readonly userId: number;
    public userName: string;
    private _userBalance: number;
    // protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
         
    }

    private addBalance(balance: number){
        this._userBalance += balance;
    }

    callHiddenMethod(balance: number){
        this.addBalance(balance)
    }

}


const micAccount = new BankAccount(1111, "Israk", 100)


// micAccount.addBalance(100);
console.log(micAccount)
