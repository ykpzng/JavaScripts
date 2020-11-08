/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Passwords must not be any previous password. 

Expected Result:
PasswordValidationResult=  [false, false, true, false, false]
*/
const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]
let previousPasswords = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyy!5", "qwbfj76%", "tytT3729.", "384#HsHf", "Jai33"];

//Regular Expressions
//const strongRegex = /^ (?=.* [a - z])(?=.* [A - Z])(?=.* [0 - 9])(?=.* [!@#\$ %\^&\*]) (?=.{ 5,})/;
//const found = strongRegex.test("384#HsHF"); // Kullanım şekli


//Şifre dizisinin kritere uyup uymadığını göndürür 
function validatePasswords(arr) {
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})");
  return arr.map(item => strongRegex.test(item));
}


//Kriterlere uygun ve eski olmayan şifre almayı sağlayan fonksiyon
function getPassword() {
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})");

  let oldPasswords = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyy!5", "qwbfj76%", "tytT3729.", "384#HsHf", "Jai33"];

  const pass = prompt('Enter your password..');

  if (strongRegex.test(pass)) {
    if (!oldPasswords.includes(pass)) {
      oldPasswords.push(pass);
      return `Your password is valid....`;
    } else {
      return `You cannot use your previous password...`;
    }
  } else {
    return `Your password is not valid...
              \n -must be at least 5 letters,
              \n -Must contain at least 1 lowercase,
              \n -Must contain at least 1 uppercase,
              \n -Must contain at least 1 symbol(!@#$%^&*),
              \n -Must contain at least 1 figure(0-9)`;
  }

}

console.log(getPassword());


console.log('-------------------------------------------------');

/* ======= TESTS - DO NOT MODIFY THIS PART=====*/

function test(test_name, actual, expected) {
  let status;
  for (i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      status = "PASSED";
    } else {
      status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
    }
  }
  console.log(`${test_name}: ${status}`);
}

test("validatePasswords function works - case 1",
  validatePasswords(passwords1), [false, false, true, false, false]);

test("validatePasswords function works - case 2",
  validatePasswords(passwords2), [true, true, false, false, true]);

  //======= TESTS - DO NOT MODIFY THIS PART=====

