/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/

const streets = ["Abchurch Lane", "Adam's Court", "Addle Hill", "Addle Lane", "Alban Highwalk"];

function getLanes(arr) {
  let len = arr.length;
  let newArr = [];
  for (let i = 0; i < len; i++) {
    if (arr[i].includes('Lane')) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(getLanes(streets));  //Result  ["Abchurch Lane", "Addle Lane"]




