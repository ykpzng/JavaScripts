
// Object class
// Constraucture method 
/*
//Ocbject model ile yapılan 

let car = {
  name: 'Camry',
  make: 'Toyota',
  year: 2020,
  fuel: 'hybrid',
  isManuelTransmission: true,

  run() {
    return '3, 2, 1, Ready!';
  },

  getInfo() {
    return `My car is a ${this.fuel} ${this.make} ${this.name} built in ${this.year}.`;
  }
}

*/

//Class object

class Car {
  constructor(name, make, year, fuel, isManuel) {
    this.name = name;
    this.make = make;
    this.year = year;
    this.fuel = fuel;
    this.isManuelTransmission = isManuel;
  }

  run() {
    return '3, 2, 1, Ready!';
  }

  getInfo() {
    return `My car is a ${this.fuel} ${this.make} ${this.name} built in ${this.year}.`;
  }

}

// Create new object from class
const car1 = new Car('Corsa', 'Opel', 2020, 'hybrid', true);
const car2 = new Car('Ford', 'Masteng', 2018, 'disel', false)

console.log(car1);
console.log(car1.fuel);
console.log(car1.make);

console.log(car2);
console.log(car2.fuel);
console.log(car2.make);

console.log(car1.run());
console.log(car1.getInfo());

// Inheritance (Car -> tesla) (extends)

class Tesla extends Car {
  constructor(name, year, apV) {
    super(name, 'Tesla', year, 'Electric', 'Auto'); //Parent constructures 
    this.autoPilotVersion = apV;
  }
}

const teslaThree = new Tesla('3', 2021, 2.0);

console.log(teslaThree);



//-------------------------------------------------------

// Example
// School Class

class SchoolMember {
  constructor(name, lastname, age, gender) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
  }
}

// Inheritance from SchoolMember  (extends)

class Student extends SchoolMember {

  constructor(name, lastname, studentId, grade, age, gender) {
    super(name, lastname, age, gender);
    this.studentId = studentId;
    this.grade = grade;

  }
}

// Inheritance from SchoolMember  (extends)

class Teacher extends SchoolMember {
  constructor(name, lastname, age, gender, subjectField) {
    super(name, lastname, age, gender);
    this.subjectField = subjectField;
  }
}



const student1 = new Student('John', 'Doe', 111, '10-C', 20, 'male');

const mathTech = new Teacher('Suat', 'Kaya', 35, 'male', 'matematik')

console.log(student1);
console.log(mathTech);



//------------------------------------------

