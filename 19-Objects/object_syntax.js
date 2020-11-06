//NEW OBJECT SYNTAX

// 1 - Shorthand Properties --------------------------------

//let name = 'John', age = 15;
/*
const myObj = {
  name: name,
  age: age
}

console.log(myObj);
console.log(myObj.age);
*/
//  or
/*
const myObj = {
  name,
  age
}

console.log(myObj);
console.log(myObj.age);

*/

// 2 - Computed Property Names --------------------------------

let prob1 = 'name';

/*
let myObj2 = {}

myObj2[prob1] = 'John';

console.log(myObj2);
*/

// or  at ES6

let myObj2 = {
  [prob1]: 'John'
}

console.log(myObj2);

// 3 - Short Method Syntax --------------------------------
/*
const person = {
  name: 'John',
  surname: 'Doe',
  age: 36,
  fulname: function () {
    return this.name + ' ' + this.surname;
  }
}
*/

// or

const person = {
  name: 'John',
  surname: 'Doe',
  age: 36,
  fulname() {
    return this.name + ' ' + this.surname;
  }
}

console.log(person.fulname());

// 4 - Object Destructuring --------------------------------
//we used person object at above


let myVar1 = person.name;
let myVar2 = person.age;

console.log(myVar1);
console.log(myVar2);

//  or

let { name: myVar3, age: myVar4 } = person;

console.log(myVar3);
console.log(myVar4);

// or
/*
let { name: name, age: age } = person;

console.log(name);
console.log(age);
*/
// or

let { name, age } = person;

console.log(name);
console.log(age);

// examples

let cars = [
  {
    year: 2020,
    make: "Toyota",
    model: "Camry",
    color: "White",
    weight: 3000,
    autoTransmission: true,
    fuel: "Renewable"
  },
  {
    year: 2010,
    make: "Ford",
    model: "Focus",
    color: "Black",
    weight: 2600,
    autoTransmission: true,
    fuel: "Disel"
  },
  {
    year: 2007,
    make: "Honda",
    model: "Civic",
    color: "Black",
    weight: 2600,
    autoTransmission: true,
    fuel: "Gass"
  }
];

for (const { make, model } of cars) {
  console.log(`${make}: ${model}`);
}


// 5 - Spread Operator in Object Literals (...) ------------------


let car = {
  year: 2020,
  make: "Toyota",
  model: "Camry",
  color: "White",
  weight: 3000,
  autoTransmission: true,
  fuel: "Renewable"
}

let car1 = { ...car };
car1.year = 2009;

console.log(car);
console.log(car1);

// or 

const car2 = {
  year: 2010,
  make: "Ford",
  model: "Focus",
}

const car3 = {
  color: "Black",
  weight: 2600,
  autoTransmission: true,
  fuel: "Disel"
}

const car4 = { ...car2, ...car3 };  // can be added in between property, too

console.log(car4);


// 6 - REST Operator in Object Literals  ------------------------------

const insan = {
  ad: 'John',
  soyad: 'Doe',
  yas: 36,
  fulname() {
    return this.ad + ' ' + this.soyad;
  }
}

const { ad, ...rest } = insan;

console.log(ad);    // John
console.log(rest); // {soyad: "Doe", yas: 36, fulname: ƒ}


// 7 - Object Values - Object Entrieds  ------------------------------

const car5 = {
  year: 2007,
  make: "Honda",
  model: "Civic",
  color: "Black",
}

console.log(Object.keys(car5));    // ["year", "make", "model", "color"]

console.log(Object.values(car5)); // [2007, "Honda", "Civic", "Black"]

console.log(Object.entries(car5)); // [["year", 2007],["make", "Honda"],["model", "Civic"],["color", "Black"]]




