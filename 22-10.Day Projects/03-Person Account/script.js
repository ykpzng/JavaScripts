
const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [200, 100, 300, 500, 1000],
  expenses: [400, 50, 200, 30, 60],
  totalIncome() {
    return this.incomes.reduce((total, b) => total + b, 0);
  },
  totalExpense() {
    return this.expenses.reduce((total, b) => total + b, 0);
  },
  addIncome(num) {
    this.incomes.push(num);
  },
  addExpenses(num) {
    this.expenses.push(num);
  },
  accountInfo() {
    let total = this.totalIncome() - this.totalExpense();
    return `He has total income : ${this.totalIncome()}\nHe has total Expense : ${this.totalExpense()}\nHe has a total profit : ${total}$`;

  }

};

personAccount.addIncome(500);
personAccount.addExpenses(200);

console.log(personAccount.incomes);
console.log(personAccount.expenses);


console.log(personAccount.accountInfo());

