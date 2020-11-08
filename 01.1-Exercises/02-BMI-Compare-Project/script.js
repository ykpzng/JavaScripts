
let massMark = 100;
let massJohn = 95;
let heightMark = 1.85;
let heightJohn = 1.85;

let bmiMark = Math.round(massMark / Math.pow(heightMark, 2)); // Vücut kitle indeksi hesaplanıyor
let bmiJohn = Math.round(massJohn / Math.pow(heightJohn, 2));

if (bmiMark > bmiJohn) {
  console.log('bmiMark higher bmiJohn');
}
else if (bmiMark == bmiJohn) {
  console.log('bmiMark equal bmiJohn');
}
else {
  console.log('bmiJohn higher bmiMark');
}



console.log('bmiMark :' + bmiMark);
console.log('bmiJohn :' + bmiJohn);