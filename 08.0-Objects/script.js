
//Objects
// key : value   = property

const user = {
  name: 'John',     //property
  lastname: 'Doe',
  email: 'jdo@exp.com',
  pass: '123'
};

const car = {
  brand: 'honda',
  model: 'civic',
  year: '2020',
  color: 'white',
  gear: 'automatic'
};

console.log(user);
console.log(car);

//Accessing object property
console.log(user.name);
console.log(user['email']);

const newName = 'name';

console.log(user[newName]);   // john

//RE Assigment
car.year = 2019;
console.log(car.year);  //2019

//İf property not exist add new propoty

user.age = 25;

console.log(user);


//CONSTRUCTOR --> Yöntemiyle object tanımlama

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = () => {
    return this.name + ' ' + this.surname;
  }
}

const person1 = new Person('Ahmet', 'Kaya', 55);
const person2 = new Person('Salih', 'Gündüz', 20);

console.log(person1);
console.log(person2);


//Object Constructor --> yöntemi

const person3 = new Object();
person3.name = 'Alex';
person3.surname = 'Souza';
person3.age = 45;
person3.fullname = function () {
  return this.name + ' ' + this.surname;
}

console.log(person3);
console.log(person3.age);
console.log(person3.fullname());


// Object.create()  --> yöntemi

const person = {
  name: 'John',
  surname: 'Doe',
  age: 36,
  fulname() {
    return this.name + ' ' + this.surname;
  }
}

console.log(person);

const rich = Object.create(person);   // New object generation (inheritance)
rich.name = 'Monica';
rich.surname = 'Lewinsk';
rich.age = 55;

console.log(rich);
console.log(rich.fulname());
