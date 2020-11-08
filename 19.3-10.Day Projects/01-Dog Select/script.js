const dog = {
  name: 'Tomi',
  color: 'Grey',
  legs: 4,
  age: 5,
  bark() {
    return 'Hav.... Hav...'
  },
  getDogInfo() {
    return `My name is ${this.name}. I am ${this.calcAge()} years old in human years which is ${this.age} years old in dog years.`;
  },
  calcAge() {
    let humanAge = 0;
    if (this.age >= 2) {
      humanAge = (2 * 10.5) + (this.age - 2) * 4;
    } else if (this.age == 1) {
      humanAge = 10.5;
    }
    return humanAge;
  }
};

console.log(dog.getDogInfo());