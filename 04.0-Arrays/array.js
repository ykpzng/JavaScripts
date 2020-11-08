//Arrays

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];


console.log('Dizinin Boyutu : ' + itCompanies.length);
console.log(itCompanies);


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text = text.split(" "); // Her kelimesi dizi elemanı oldu
console.log(text);

console.log(text[text.length - 1]); //Son elemanı yazar

//Diğer yöntemle dizi oluşturma
const arr = Array(); // boş bir dizi 
console.log(arr);  // []

const arrVle = Array("Php", "Asp", "Nodjs", 45, 78);//değer atanmış dizi
console.log(arrVle);  //["Php", "Asp", "Nodjs", 45, 78]

const eightEmptyValues = Array(8) //Sekiz boş değer oluşturur
console.log(eightEmptyValues);   //[empty × 8]


//ARRAY METODS
//- fill : Tüm dizi öğelerini statik bir değerle doldurur

const arrStk = Array(8).fill('X');
console.log(arrStk);  //["X", "X", "X", "X", "X", "X", "X", "X"]


// - concat : İki diziyi birleştirmek için kullanılır

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList);
console.log(thirdList); // [1, 2, 3, 4, 5, 6]


// - indexOf : Bir dizide bir öğenin var olup olmadığını kontrol etmek için kullanılır. Varsa, indeksi döndürür, aksi takdirde -1 döndürür.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(4));   // 3
console.log(numbers.indexOf(13)); // -1

if (numbers.indexOf('banana') != -1) {
  console.log('Zaten mevcut');
} else {
  console.log('Dizide yok, eklendi');
  numbers.push('banana');
}

console.log(numbers); // [1, 2, 3, 4, 5, "banana"]


// - lastIndexOf : Dizideki son öğenin konumunu verir. Varsa, dizini döndürür, aksi takdirde -1 döndürür. Aynı iki elemandan sonrakini verir;

const numbers2 = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers2.lastIndexOf(6));  // -1
console.log(numbers2.lastIndexOf(2));  // 7
console.log(numbers2.lastIndexOf(0));  // -1
console.log(numbers2.lastIndexOf(4));  // 3
console.log(numbers2.lastIndexOf(1));  // 6


// includes : Bir dizide bir öğenin olup olmadığını kontrol etmek için. Varsa true döndürür, aksi takdirde false döndürür.

const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.includes(4)); // true
console.log(numbers3.includes(8)); // false
console.log(numbers3.includes(2)); // true
console.log(numbers3.includes(7)); // false


// - Array.isArray : Veri türünün bir dizi olup olmadığını kontrol etmek için

const txt = "my name is john";
console.log(Array.isArray(numbers3));  // true
console.log(Array.isArray(txt));  //false


// - toString : Diziyi dizeye dönüştürür

console.log(numbers3.toString());  // 1,2,3,4,5


// join : Dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir ve string olarak geri döner. Varsayılan olarak virgülle birleşir, ancak öğeler arasında birleştirilebilecek farklı dize parametresi geçirebiliriz.

console.log(numbers3.join());   // 1,2,3,4,5
console.log(numbers3.join("")); // 12345
console.log(numbers3.join(" ")); // 1 2 3 4 5
console.log(numbers3.join("-")); // 1-2-3-4-5


// - slice : Aralıktaki birden çok öğeyi kesmek için. Başlangıç ve bitiş konumu olmak üzere iki parametre alır. Bitiş konumunu içermez.

const numbr = [1, 2, 3, 4, 5];
console.log(numbr.slice());     // [1, 2, 3, 4, 5]
console.log(numbr.slice(0));    // [1, 2, 3, 4, 5]
console.log(numbr.slice(0, numbr.length));   // [1, 2, 3, 4, 5]
console.log(numbr.slice(1, 4));   // [2, 3, 4]
console.log(numbr.slice(2, 3));   // [3]


// - splice : Üç parametre alır: Başlangıç konumu, çıkarılma sayısı ve çıkarılan yere eklenecek öğe(ler). Başlangış konumudu dahil eder. Çıkarılan öğeleri döndürür. Dizinin yapısı değişir.

const numbers4 = [1, 2, 3, 4, 5, 6, 10, 11, 12]
// let res = numbers4.splice();
// console.log(res);  // []
// res = numbers4.splice(0, 1);
// console.log(res);  // [1]
// res = numbers4.splice(1, 2);
// console.log(res);  // [3, 4]  
let res = numbers4.splice(3, 3, 7, 8, 9);
console.log(res);    // [4, 5, 6]  (siliden değerler)
console.log(numbers4); // [1, 2, 3, 7, 8, 9, 10, 11, 12] (yeni dizi)


// - push : Var olan bir dizinin sonuna öğe eklemek için push yöntemini kullanıyoruz.

const arrr = ['item1', 'item2', 'item3'];
arrr.push('new item');
console.log(arrr);   //  ['item1', 'item2', 'item3', 'new item']


// - pop : Var olan bir dizinin sonundan bir eleman siler, ve döndürür.

arrr.pop();
console.log(arrr);  //  ['item1', 'item2', 'item3']


// - shift : dizinin başından eleman siler vesilinen değeri döndürür

let silinen = arrr.shift();
console.log(arrr);     //  ['item2', 'item3']
console.log(silinen);  // item1


// - unshift : Dizinin başına dizi öğesi ekleniyor.

arrr.unshift('new item', 25);
console.log(arrr);    // ["new item", 25, "item2", "item3"]


// - reverse : Dizinin sırasını tersine çevirir

const years = [1935, 2015, 1984, 2020, 1995, 2005];
console.log(years);
console.log(years.reverse());


// - sort : Dizi öğelerini artan sıralama yapar

console.log(years.sort());      // Küçükten büyüğe
console.log(years.reverse());   // Büyükten küçüğe



// Examples 

let students = ['Ali', 'Veli', 'Temel', 'Dursun', 'Fadime'];
let studentsWithdrawn = [];

let student1 = students.shift();
let student2 = students.shift();

studentsWithdrawn.push(student1, student2);

// Ali ve Veliyi tekrardan studentsWithdrawn'dan alip students'a ekleyecek kodu ekleyin.



console.log(students);
console.log(studentsWithdrawn);
students.unshift(studentsWithdrawn[0], studentsWithdrawn[1]);
console.log(students);

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// yukardaki diziden aşağıdaki tekti elde edelim
// “Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program”

secretMessage.splice(7, 5);
secretMessage[0] = 'Programming';
secretMessage[6] = 'know';
secretMessage.pop();
secretMessage.push('to Program');
secretMessage = secretMessage.join(" ");
secretMessage = `"${secretMessage}"`;

console.log(secretMessage);

/***************************************/
// Arrays and Function
/************************************ */

let user = ['John Doe', 45, true];

function updateUser(user) {
  user[0] = 'John Smith'
}

updateUser(user);
console.log(user);   // ["John Smith", 45, true]

//  Global arrayin parametresini function değiştirir
// but  Global değişkeni function değiştirmez.

let name = 'John Doe';

function updateName(name) {
  name = 'John Smith'
}

updateName(name);
console.log(name);   // John Doe

