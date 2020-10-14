
//Get drink
function calcBottles(budget, tekFiyat) {
  return Math.floor(budget / tekFiyat);
}

function calcChange(butce, adetFiyat) {
  return butce % adetFiyat;
}

function getDrink(totalMoney, perdrinkPrice) {

  return `With your total $${totalMoney} money you can buy ${calcBottles(totalMoney, perdrinkPrice)} bottles of drinks your remaining money $${calcChange(totalMoney, perdrinkPrice)}`;
}

console.log(getDrink(394, 15));