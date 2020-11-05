
//  -- 1 --
console.log('-- 1 --');

console.log(users);

//  -- 2 --
console.log('-- 2 --');

for (const key in users) {
  console.log(users[key]);
}

//  -- 3 --
console.log('-- 3 --');

let size = Object.keys(users).length;
console.log(`Users's length is ${size}`);

//  -- 4 --
console.log('-- 4 --');
let max = 0;
let name = '';
for (const key in users) {
  if (users[key]['skills'].length > max) {
    max = users[key]['skills'].length;
    name = key;
  }
}
console.log(name);

//  -- 5 --
console.log('-- 5 --');
let count = 0;
for (const key in users) {
  if (users[key]['points'] == 50) {
    count++;
  }
}
console.log(`There are ${count} persons named 50`);

//  -- 6 --
console.log('-- 6 --');

let a = 0;
let names = [];
for (const key in users) {
  let arr = users[key]['skills'];
  if (arr.includes('MongoDB' && 'Express' && 'React' && 'Node')) {
    a++;
    names.push(key);
  }
}

console.log(`Users are ${a} persons and their names are ${names}.`);

//  -- 7 --
console.log('-- 7 --');

users.yakup = {
  email: 'yakup@yakup.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'C#', 'Java', 'Python'],
  age: 30,
  isLoggedIn: false,
  points: 30
}

console.log(users);

//  -- 8 --
console.log('-- 8 --');

for (const key in users) {

  console.log(`${key} is ${users[key].age} years old. He knows '${users[key]['skills'].join()}'`);

}

