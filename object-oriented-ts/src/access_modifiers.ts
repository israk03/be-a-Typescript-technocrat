// access >> modify

class BankAccount {
    public readonly userId: number;
    public userName: string;
    private userBalance: number;
    // protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
         
    }

    addBalance(balance: number){
        this.userBalance += balance;
    }

}

// class StudentBankAccout extends BankAccount{
//     test(){
//         this.userBalance
//     }
// }

const micAccount = new BankAccount(1111, "Israk", 100)

//micAccount.userId = 2222; // can't write

micAccount.addBalance(100);
console.log(micAccount)
