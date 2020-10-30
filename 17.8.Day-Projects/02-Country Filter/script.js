
// Filter out countries
// 1.	Extract all the countries contain the word 'land' from the countries array and print it as array
// 2.	Find the country containing the hightest number of characters in the countries array
// 3. Sort the countries by length of characters in the countries array
// 4.	Extract all the countries containing only four characters from the countries array and print it as array
// 5.	Extract all the countries containing two or more words from the countries array and print it as array
// 6.	Reverse the countries array and capitalize each country and stored it as an array.
// 7.	Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.


const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States']


console.log(' step-1');
// step-1
function countryFind1(arr) {
  return arr.filter(x => x.includes('land'));
}
console.log(countryFind1(countries));


console.log(' step-2');
// step-2
function longestCountry(arr) {
  return arr.find(y => y.length === Math.max(...arr.map(x => x.length)));
}
console.log(longestCountry(countries));


console.log(' step-3');
// step-3
function countrySort(arr) {
  return arr.sort((a, b) => a.length - b.length);

}

console.log(countrySort(countries));

console.log(' step-4');
// step-4

function countryFind4(arr) {
  return arr.filter(x => x.length === 4);

}
console.log(countryFind4(countries));

console.log(' step-5');
// step-5

function countryFind5(arr) {
  return arr.filter(x => x.includes(' '));

}
console.log(countryFind5(countries));

console.log(' step-6');
//step-6

function countryFind6(arr) {
  return arr.map(x => x.toUpperCase()).reverse();

}
console.log(countryFind6(countries));


console.log(' step-7');
// step-7

function countryFind7(arr) {
  return arr.filter(x => !x.includes('land')).map(x => x + 'land');

}

console.log(countryFind7(countries));