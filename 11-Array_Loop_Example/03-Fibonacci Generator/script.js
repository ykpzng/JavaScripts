

function fibonacciGen(num) {
  let x = 1;
  let y = 1;

  if (num == 0) {
    return [0];
  } else if (num == 1) {
    return [0];
  } else if (num == 2) {
    return [0, 1];
  } else {
    let z = x + y;
    let arr = [0, 1, 1];
    for (let i = 3; i < num; i++) {
      z = y;
      y = x;
      x = y + z;
      arr.push(x);
    }
    return arr;
  }
}


console.log(fibonacciGen(10))


function fibonacciFinder(num) {
  let arr = fibonacciGen(num);
  return ((arr[num - 1] / arr[num - 2]) ** (num - 1) - (1 - (arr[num - 1] / arr[num - 2])) ** (num - 1)) / Math.sqrt(5);
}

console.log(fibonacciFinder(7));



