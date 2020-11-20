
// const clauseMix = require('./clauseMix');    // Eski versiyon

//import clauseMix from './clauseMix.js';    // ES6 versiyon  (type:module)

import { countCharacter, capitalizeFirstCharacterOfWords, reverseString, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin } from './clauseMix.js';  // Tek tek import versiyonu

/*  // Object ile yapıldı

function displayClause() {
  console.log(clauseMix.countCharacter("What is the color of the sky?", "t"));
  console.log(clauseMix.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(clauseMix.reverseString("What is the color of the sky?"));
  console.log(clauseMix.reverseAllWords("What is the color of the sky?"));
  console.log(clauseMix.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(clauseMix.encode("What is the color of the sky?"));

  console.log(clauseMix.palindrome('noon'));

  console.log(clauseMix.pigLatin('Hello World..', '*'));
}

displayClause();

*/

function displayClause() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseString("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));

  console.log(palindrome('noon'));

  console.log(pigLatin('Hello World..', '*'));
}

displayClause();







