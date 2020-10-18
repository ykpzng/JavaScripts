
const topics = [];

topics.push('HTML', 'CSS', 'JS', 'React', 'Node', 'DB');

function getLength(arr) {
  return arr.length;
}

function getFirstItem(arr) {
  return arr[0];
}

function getLastItem(arr) {
  let length = getLength(arr);
  let lastIndex = length - 1
  return arr[lastIndex];
}

function getMiddleItem(arr) {
  let length = getLength(arr);
  let isOdd = length % 2;
  let middleIndex = Math.floor(length / 2);
  if (isOdd) {
    return arr[middleIndex];
  } else {
    return arr.slice(middleIndex - 1, middleIndex + 1);
  }

}

function printEach(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function doesExist(arr, str) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return true;
    }
  }
  return false;
}

function hasDoubleO(arr) {
  for (i = 0; i < arr.length; i++) {
    counter = 0;
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'o') {
        counter++;
        if (counter === 2) {
          console.log(arr[i]);
        }
      }
    }
  }
}

function removeAll(arr) {
  let length = arr.length;
  for (i = 0; i < length; i++) {
    arr.pop();
  }
}



console.log(topics);    // "All array"
console.log(getLength(topics));     // 6
console.log(getFirstItem(topics));  // HTML
console.log(getLastItem(topics));   // DB
console.log(getMiddleItem(topics)); // ['JS', 'React']

printEach(topics);  //diziyi ekrana yazar
console.log(doesExist(topics, 'JS'));  // true


const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

hasDoubleO(itCompanies);

removeAll(itCompanies);
console.log(itCompanies);  // []