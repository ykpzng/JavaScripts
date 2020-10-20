// create variables containing strings
//Use an array to hold the value of the quotes

const quoteOne = ['Beware of what you become in pursuit of what you want. - Jim Rohn'];
const quoteTwo = ['It\'s not what happens to you, but how you react to it that matters. - Epictetus'];
const quoteThree = ['The best revenge is massive success. - Frank Sinatra'];
const quoteFour = ['You miss 100% of the shots you don\'t take. - Wayne Gretzy'];
const quoteFive = ['Resentment is like drinking poison and waiting for your enemies to die. - Nelson Mandela'];
const quoteSix = ['Do not take life too seriously. You will not get out alive. - Elbert Hubbard'];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const quotes = [quoteOne, quoteTwo, quoteThree, quoteFour, quoteFive, quoteSix];
quotes.sort();

function rnd(arr) {
  return Math.floor(Math.random() * arr.length);
}

function selectRnd(arr1, arr2) {
  let rnd1 = rnd(days);
  let rnd2 = rnd(quotes);
  console.log(`Today is ${arr1[rnd1]} and today’s quote is ${arr2[rnd2]}`);

}

selectRnd(days, quotes);