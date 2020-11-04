const mark = {
  name: 'Mark Miller',
  mass: 85,
  height: 1.95
};

const john = {
  name: 'John Smith',
  mass: 50,
  height: 1.75
};

function callBMI(obj) {
  return obj.mass / (obj.height * obj.height);
}

function outputBMI() {
  let bmiMark = callBMI(mark);
  let bmiJohn = callBMI(john);
  let result = bmiMark - bmiJohn;

  if ((result > 0)) {
    return `Mark Miller's BMI (${bmiMark}) is higher than John Smith's (${bmiJohn})!`
  } else {
    return `John Smith's BMI (${bmiJohn}) is higher than Mark Miller's (${bmiMark})!`
  }



}

console.log(outputBMI());

