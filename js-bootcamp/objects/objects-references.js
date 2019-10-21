let myAccount = {
    name: 'Tony Petrides',
    expenses: 0,
    income: 0
}

// Adds Expense to Account
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// Adds Income to Account
let addIncome = function (account, amount) {
    account.income = account.income + amount
}

// Resets Account Values
let resetAccount = function (account) { 
    account.expenses = 0
    account.income = 0
}

// Returns Account Summary. E.g. Account for Andrew has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `\nAccount for ${myAccount.name} has $${balance}. \n- $${myAccount.income} in income. \n- $${myAccount.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
addExpense(myAccount, 50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
