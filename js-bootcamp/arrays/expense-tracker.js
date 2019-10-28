const account = {
    name: 'Anthony Petrides',
    // property to be array of objects with desc and amoun props
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = this.income - this.expenses
        
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

// 1. add income array to account (start as empty)
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary to show: expenses, income and balance
// e.g. Andrew Mead has a balance of $10. $100 in income. $90 in expenses.

account.addExpense('Rent', 1050)
account.addExpense('Coffee', 3)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())