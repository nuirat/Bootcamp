const Bank = function ()
{
    money =500;

    const deposit  =function (cash)
    {
     money+=cash
    }
    const showBalance   =function ()
    {
     console.log(money)
    }
    return {
        showBalance:showBalance,
        deposit :deposit
    }
}
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950