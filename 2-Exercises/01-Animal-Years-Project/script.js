
const myAge = 36;  //Benim yaşım

let earlyYears = 2; // earlyYears değişkeni oluşturulup 2 değeri atandı

earlyYears *= 10.5;  // earlyYears değişkeni 10.5 ile çarpıldı

let laterYears = myAge - 2; //myAge den 2 çıkarıldı ve laterYears değişkenine atandı

laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;  //earlyYears ve laterYears değişkenlerini topladık

let myName = 'Yakup'.toLowerCase();
//myName = myName.toLowerCase();  // Bu metot stringdeki tüm harfleri küçük yazar

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

console.log("My name is " + myName + ". I am " + myAge + " years old in human years which is " + myAgeInDogYears + " years old in dog years.")



console.log(earlyYears);
console.log(laterYears);
console.log(myAgeInDogYears);
console.log(myName);


