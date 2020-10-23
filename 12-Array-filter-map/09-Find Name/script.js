/* 
  You are given an array of names.
*/

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];





/* EXPECTED OUTPUT */
// "Alexandra"


const aAndSeven = names
  .filter(str => str[0] === 'A')
  .find(str => str.length > 7);

console.log(aAndSeven);     // Alexandra


const notA = names
  .filter(str => str[0] !== 'A');


console.log(notA);    // ["Rakesh", "Mikey", "Karim"]