// STEP-1
// Filter out companies which have more than one 'o' without the filter method

const firms = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon, Oppo".split(' ');

function itCompanies(arr) {
  let counter;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    counter = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 'o' || arr[i][j] == 'O') {
        counter++;
        if (counter == 2) {
          newArr.push(arr[i]);
        }
      }

    }

  }
  return newArr;
}

console.log(itCompanies(firms));






//STEP-2

loremIpsum = "Contrary to popular belief, Lorem Ipsum is not simply random text. it has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.a.32 and 1.a.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. this book is a treatise on the theory of ethics, very popular during the Renaissance. the first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.a.32".split('.')




function upperCase(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
    console.log(arr[i]);
  }
  //return arr;
}


console.log(upperCase(loremIpsum));


