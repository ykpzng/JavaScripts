// Print my age to the console
console.log(23);
console.log('Hello World'); // Print Hello world
console.log(5);  // Weeks I've started coding

/* Multi line comment-out
console.log(5);
console.log(5);
console.log(5);
*/

// Data type

console.log('JavaScript');  // string data type
console.log(2011);  //number data type
console.log('Woohoo! I love to code! #codecademy'); // string data type
console.log(20.49);  //Number data type
console.log(3 < 2);  // False --> Boolen Data type

var data;

console.log(data); // Undefined data

data = null;
console.log(data);  // Null data type

// Aritmatik Operatorler

console.log(24 + 3.5);
console.log(2020 - 1969);

console.log(65 / 240);

console.log(0.343 * 100);

console.log(11 % 2);

//Properties
console.log(lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".length);


//Method
console.log(lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".replaceAll(' ', '').length);

//Virgül, boşluk, tırnak ve nokta işaretlerini atıp kalan karakter sayısını vermek

var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
console.log(lorem.replaceAll(' ', '').replaceAll(',', '').replaceAll("'", '').replaceAll(".", "").length);

//or
console.log(lorem.replaceAll(/[,' .]/g, "").length);  //regular expressions examples

//Built in Objects, Calculate random number, floor and print

console.log(Math.random() * 100);  // 0-100 arası rastgele sayı

console.log(Math.floor(Math.random() * 100)); // floor sayıyı alta yuvarlar



