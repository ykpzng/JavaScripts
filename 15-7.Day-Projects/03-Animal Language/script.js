//Convert any text to whale language! 

let input = 'Hi, Human!';

function birthdayCakeCandles(candles) {
  // Write your code here
  let counter = 0;
  let max = Math.max(...candles);
  candles.sort();
  //candles.reverse();
  for (let i = candles.length; i >= 0; i--) {
    if (candles[i] === candles[candles.length - 1]) {
      counter++;
    }
  }
  return counter;
}
console.log(birthdayCakeCandles([4, 2, 1, 4]));

