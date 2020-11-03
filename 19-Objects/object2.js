const passenger1 = {
  name: 'Jane',
  lastname: 'Doe',
};
const passenger2 = {
  name: 'John',
  lastname: 'Eare',
};

const car = {
  year: 2020,
  make: 'Toyota',
  model: 'Camry',
  color: 'white',
  weight: 3000,
  outoTransmission: true,
  fuel: 'REnewable',
  passenger: {
    passenger1,
    passenger2
  },
  start() {
    console.log('3,2,1, Ready to go...');
  }
};

car.start();

console.log(car.passenger.passenger1.name);

// Object print

let car1 = {
  year: 2020,
  make: "Toyota",
  model: "Camry",
  color: "White",
  weight: 3000,
  autoTransmission: true,
  fuel: "Renewable"
}

for (const [key, value] of Object.entries(car1)) {
  console.log(`${key}: ${value}`);
}

// OR

for (const property in car1) {
  console.log(`${property}: ${car1[property]}`);
}

// This

let car2 = {
  _year: 2010,
  make: "Toyota",
  model: "Camry",
  color: "White",
  _weight: 3000,
  autoTransmission: true,
  fuel: "Renewable",
  info() {
    console.log(`The car is built ${this.year}, made by ${this.make} ...`);
  },
  get year() {    // private properti için get function
    if (this._year >= 2020) {
      return this._year;
    } else {
      return 'ERROR..';
    }
  },
  set year(num) {
    if (num >= 2020) {
      this._year = num;
    } else {
      alert('ERROR..');
    }
  },
  get weight() {
    if (typeof this._weight === 'number') {
      return this._weight;
    } else {
      return 'Error! - Car weight is not a number.'
    }
  },
  set weight(num) {  // girilen değer string ise hata döner
    if (num && typeof num === 'number') {  // string girildiğinde  NAN değeri dönüyor bundan kurtulmak için num eğer falsy ise... NaN = falsy
      this._weight = num;
    } else {
      alert('Error..The value must be number...')
    }
  }
}

car2.info();

// Private property  **  ex=  make=> _make ---this is private
// private property için bir get function yazılmalıdır

// Get   -- get year(){} --

console.log(car2.year);


// Set    -- set weight(num) { }  --

//car2.weight = 3200;      // set data
car2.weight = +prompt('Enter your car weight...');

console.log(car2.weight);  // get data