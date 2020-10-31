
// Callback functions (func = call back function)
// For example forEach

function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forEach(array, function (a) { console.log(a * 2) });

forEach(array, a => console.log(a * 2));


// For example map

function myMap(arr, func) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i]));
  }
  return newArray;
}

myMap(array, a => console.log(a * 3));


// For example filter

function myFilter(arr, func) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i]));
  }
  return newArray;
}

myFilter(array, a => console.log(a > 5));