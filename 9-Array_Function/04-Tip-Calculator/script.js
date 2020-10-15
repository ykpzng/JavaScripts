
const bill = [124, 48, 100, 268];
const totalBudget = 750;

//toplam faturayı hesaplayan fonksiyon
function totalBill(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

//dizide gelen faturalardan kesilen bahşişi hesaplayıp yine bir dizi döndüren function
function calculateTips(arr) {
    let percentage;
    let call = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 50) {
            percentage = .2;
        } else if (arr[i] < 200) {
            percentage = .15;
        } else {
            percentage = .1;
        }
        call.push(percentage * arr[i]);
    }
    return call;
}

//Toplam bahşişi hesaplayan function
function getTotalTips() {
    let arr = calculateTips(bill);
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;

}

//Faturaya ait bahşişleri tek tek ekrana basan function
function printBill(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("For $" + bill[i] + " cost bill; you should pay $" + calculateTips(bill)[i] + " tip.");
    }
    console.log("Your total tip amount is $" + parseFloat(getTotalTips()));
}

//Düzcan %20 nin altına düşünce uyaran function
function budgetDust() {
    let totalBil = totalBill(bill);
    let lastBudget = totalBudget - (totalBil + getTotalTips());
    if (lastBudget < (totalBudget * 0.2)) {
        console.log("You have only " + lastBudget + " amount of money. Be careful")
    } else {
        console.log("You have " + lastBudget + " amount of money. it is ok")

    }
}

printBill(bill);
budgetDust();
