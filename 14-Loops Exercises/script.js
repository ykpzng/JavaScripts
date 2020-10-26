// Dizi içerisinde istenen bir item ın indexlerini döndürür. İtem dizide yoksa -1 döndürür....

function findIndex(arr, item) {
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      tmp.push(i);
    }
  }
  return tmp.length ? tmp : -1;
}


console.log(findIndex([2, 4, 6, 5, 2, 4, 8, 2, 7], 2));


//  String olarak girilen rakamın sayısal değerini verir.

function findNumber(s) {
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  return numbers.indexOf(s);
}

// Bir string ortasına istenen sayıda sitring yazdırılıyor

function howManyTimes(num) {
  return 'Ed' + 'a'.repeat(num) + 'bit';
}

console.log(howManyTimes(10));


// Dizideki pozitif sayıları negatif, negatiflerii de pozitif yapar

const arr = [-1, 2, -3, 4];

const negate = arr.map(item => item * (-1));
console.log(negate);
// OR
const negate1 = ar => ar.map(x => x * -1);
console.log(negate1(arr));
// OR
function negate2(ay) {
  return ay.map(function (x) {
    return x * -1
  });
}
console.log(negate2(arr));
//OR
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * -1;
}
console.log(arr);