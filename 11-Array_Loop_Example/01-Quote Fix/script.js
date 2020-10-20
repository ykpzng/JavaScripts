//Transform a string into an array and fix it!

let quote = "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design".split(' ');

function lengthArray(arr) {
  return arr.length;
}

function lastItem(arr) {
  arr.pop();
  return arr;
}

function addLastItem(arr) {
  arr.push('Development', 'ThoughtWorks', 'and', 'Inc');
  return arr;
}

function chanceItem(arr) {
  arr[1] = 'fool';
  return arr;
}

function removeFirstItem(arr) {
  arr.shift();
  return arr;

}

function addFirstItem(arr) {
  arr.unshift('Any');
  return arr;
}

function addSplice(arr) {
  arr.splice(7, 5, 'computer');
  return arr;
}


console.log(addSplice(addFirstItem(removeFirstItem(chanceItem(addLastItem(lastItem(quote)))))));