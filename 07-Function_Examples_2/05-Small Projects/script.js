
function calculateJhonBMI(mass, height) {
  return mass / (height ** 2)
}

function calculateMarkBMI(mass, height) {
  return mass / (height ** 2)
}


function siglet(name, bmi) {

  if (bmi < 18.5) {
    return name + "'un sigleti Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return name + '\'un sigleti Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    return name + '\'un sigleti Overweight';
  } else {
    return name + '\'un sigleti Obese';
  }
}

console.log(siglet('jhon', calculateJhonBMI(100, 1.8)));

console.log(siglet('Mark', calculateMarkBMI(55, 1.85)));