
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const special = ["^", "+", "%", "&", "/", "$", "#", '*'];
const givenUnwanted = "3 , * , j , q , z"


//STEP-1
function randomAlfa(arr1, arr2, arr3, unWnt, size) {
  arr2 = arr2.split(' ');
  unWant = unWnt.split(' ');
  let newArray = arr1.concat(arr2, arr3);
  let arr = [];
  for (let i = 0; i < size; i++) {
    let rnd = Math.floor(Math.random() * newArray.length);
    if (arr.indexOf(newArray[rnd]) == -1 && unWant.indexOf(newArray[rnd]) == -1) {
      if (typeof (newArray[rnd]) === 'number') {
        arr.push(newArray[rnd] + '-');
      } else {
        arr.push(newArray[rnd]);
      }
    }
  }

  return `${arr.join('')}     uzunluk=${arr.length}`;
}

console.log(randomAlfa(numeric, alpha, special, givenUnwanted, 10))











