
//  iteration methods
// forEach , map , filter, find

//----------------------------------------*/

const array = ['HTML', 'CSS', 'JS', 'React', 'Node'];

function joinTopics(arr) {
  return arr.join() + '.';
}


//Helper Function   //function içinde function çağrılması

function makeSentence1(arr) {
  let topics = joinTopics(arr);
  console.log('I am learning ' + topics);
}
makeSentence1(array);


// Higher Order Functions  //parametre olarak function alır

function makeSentence2(func) {
  console.log('I am learning ' + func);
}
makeSentence2(joinTopics(array));


//Callback Functions //forEach içinde çağrılan isimsiz fonksiyonlardır

array.forEach(function (ar) {
  console.log(ar)
});

//Or

array.forEach(ar => console.log(ar));


//---function expression
const printArray = ar => {
  console.log(ar)
};

array.forEach(printArray);  //  iteration methods fonksiyonu parantezsiz kabul eder