// Kullanıcının girdiği yaşa göre durumunu verir
function rangeAge(age) {
  let result = '';
  if (age <= 3) {
    result = "babby"
  } else if (age <= 12) {
    result = "child"
  } else if (age <= 19) {
    result = "young"
  } else if (age <= 65) {
    result = "maturity"
  } else {
    result = "adult"
  }
  return result;
}

const yas = prompt('Enter your age....');
console.log(rangeAge(yas));







