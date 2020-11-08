
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
// 1. Solution for [ ['Albania', 'ALB', 7], ['Bolivia', 'BOL', 7], …… ]
function getCountry1(arr) {
  const getCount = (item) => item.slice(0, 3).toUpperCase();
  const getLength = (item) => item.length;
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push([arr[i],
    arr.map(getCount)[i],
    arr.map(getLength)[i]]);
  }
  return newArray;
}
console.log(getCountry1(countries));


// 2. Solution for [ ['Albania', 'ALB', 7], ['Bolivia', 'BOL', 7], …… ]
function getCountry(arr) {
  const getCount = arr.map(item => item.slice(0, 3).toUpperCase());
  const getLength = arr.map(item => item.length);
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push([arr[i], getCount[i], getLength[i]]);
  }
  return newArray;
}
console.log(getCountry(countries));


console.log('-----------------------------------------------');


//Question 2---------------------------------------------------

// Add "-" after every even number

const numbers = "315469781318158";

const addMlus = numbers
  .split('');

for (let i = 0; i < addMlus.length; i++) {
  if (addMlus[i] % 2 == 0) {
    addMlus.splice(i + 1, 0, '-');
  }

}

console.log(addMlus.join(''));


//Question 3---------------------------------------------------

// Find odd numbers
var arr = [5, 24, 122, 625, 3125, 15625];

const getDivide = arr.filter(num => num % 5 == 0);

console.log(getDivide);