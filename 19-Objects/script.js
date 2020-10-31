
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
