// PROMISE OBJECT
// *Promise Use Of and Structure
/*
const myFirstPromise = new Promise(function (resolve, reject) {
  // pending events are writing here
});

console.log(myFirstPromise);

// ---- or -----

const executerFunction = function (resolve, reject) {
  // pending events are writing here
  const value = 5;
  if (value < 6) {
    resolve('This is a resolved..')
  } else {
    reject('This is a reject...')
  }
};

const mySecondPromise = new Promise(executerFunction);

console.log(mySecondPromise);

//--------------------------------------------------------------

// import from page-1
console.log('--- page-1 ---');
require('./1-Promise-Object');

// import from page-2
console.log('--- page-2 ---');
require('./2-setTimeout-Function');

// import from page-3
console.log('--- page-3 ---');
require('./3-onFulfilled-and-onRejected-Functions');

// import from page-4
console.log('--- page-4 ---');
require('./4-catch-Function');
*/
// import from page-5
// console.log('--- page-5 ---');
// require('./5-Chaining-Multiple-Promises');

// import from page-6
// console.log('--- page-6 ---');
// require('./6-Common-Mistakes');


// import from page-7
console.log('--- page-7 ---');
require('./7-promiseAll-Funciton');

