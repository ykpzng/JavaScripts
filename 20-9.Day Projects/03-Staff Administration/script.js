
//-- 1 --
staff.forEach(element => {
  console.log(element);
});

//-- 2 --
console.log('-- 2 --')
// Object içine yeni bir property ekleme

// staff.forEach(element => {
//   element.fullName = element.firstName + ' ' + element.lastName;
// });
// console.log(staff[1]);
//-----------------------------------------------
console.log('-- 2-1 --')
//Bir object e function ekleme

staff.forEach(element => {
  element.getFullName = function () {
    this.fullName = this.firstName + ' ' + this.lastName;
  }
  element.getFullName();

});

console.log(staff);

//--- 3 --------------------------------------------
console.log('-- 3 --')

const findAge = staff.filter(obj => obj.age > 21);

console.log(findAge);

//--- 4 --------------------------------------------
console.log('-- 4 --')
staff.sort((a, b) => a.experience - b.experience);

console.log(staff);

//--- 5 --------------------------------------------
console.log('-- 5 --');
const average = staff.reduce((total, b) => b.age + total, 0);
console.log(average / staff.length);

//--- 6 --------------------------------------------
console.log('-- 6 --');

const person = staff.
  filter(obj => obj.language == "Turkish" && obj.age < 40 && obj.isActive)
  .sort((a, b) => b.age - a.age);

console.log(person);