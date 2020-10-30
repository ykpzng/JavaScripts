

const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

const criptoWord = prompt('Enter your password...', 'abc');

function criptoMessage(data, num) {
  arr = data.toLowerCase().split(' ');
  crpArr = alpha.split(' ');
  let result = [];
  arr.forEach(item => {
    for (let i = 0; i < item.length; i++) {
      for (let j = 0; j < crpArr.length; j++) {
        if (item[i] === crpArr[j]) {
          if (j + num > crpArr.length) {
            result.push(crpArr[j + num - crpArr.length]);
          } else {
            result.push(crpArr[j + num]);
          }
        }

      }
    }
    result.push(' ');
  });
  return result.join('');
}

console.log(criptoMessage(criptoWord, 5));  // mjqqt btwqi







//DECRIPTION

function deCripto(data, num) {
  let arr = data.toLowerCase().split(' ');
  let alphaArr = alpha.split(' ');
  let result = [];
  arr.forEach(item => {
    for (i = 0; i < item.length; i++) {
      for (j = 0; j < alphaArr.length; j++) {
        if (item[i] === alphaArr[j]) {
          if (j - num < 0) {
            result.push(alphaArr[alphaArr.length + j - num])
          } else {
            result.push(alphaArr[j - num])
          }
        }
      }
    }
    result.push(' ')
  });
  return result.join('');
}
console.log(deCripto(criptoMessage(criptoWord, 5), 5)); //hello world
