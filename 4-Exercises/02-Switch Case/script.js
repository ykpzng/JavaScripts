
let johnAge = 50;
//John 18 yaşından büyükse bira içebilir, küçükse meyve suyu içebilir

johnAge > 18 ? console.log("John can drink beer") : console.log("John can drink juice");
/*
if (johnAge < 1) {
  console.log('Age do not 0');
} else if (johnAge < 13) {
  console.log('John is a boy');
} else if (johnAge > 13 && johnAge < 20) {
  console.log('John is a teenager');
} else if (johnAge > 20 && johnAge < 30) {
  console.log('John is a young man');
} else {
  console.log('John is a man.');
}
*/
switch (true) {
  case johnAge < 1:
    console.log('Age cannot be less than zero');
    break;
  case johnAge < 13:
    console.log('John is a boy');
    break;
  case johnAge > 13 && johnAge < 20:
    console.log('John is a teenager');
    break;
  case johnAge > 20 && johnAge < 30:
    console.log('John is a young man');
    break;
  default:
    console.log('John is a man.');
    break;
}