// Tip Calculator
let johnBillOne = 30;
let johnBillTwo = 268;
let johnBillTree = 48;
let johnBillFour = 75;
let totalBills = getTotalTips(johnBillOne, johnBillTwo, johnBillTree, johnBillFour);

function calculateTips(bill) {
  if (bill < 50) {
    return bill * 0.2;
  } else if (bill <= 200) {
    return bill * 0.15;
  } else if (bill > 200) {
    return bill * 0.1;
  }
}

function getTotalTips() {
  return calculateTips(johnBillOne) + calculateTips(johnBillTwo) + calculateTips(johnBillTree) + calculateTips(johnBillFour);

}



function budgetDust() {
  let johnBils = johnBillOne + johnBillTwo + johnBillTree + johnBillFour;
  let johnBudget = 750;
  let totalTips = johnBils + getTotalTips();
  if (totalTips > (750 * 0.8)) {
    return `Your total spend $${totalTips}. Spent 80% of your $${johnBudget} budget`;
  } else {
    return `your expenses are normal for now. Your total spend $${totalTips}`;
  }
}



console.log(budgetDust());
