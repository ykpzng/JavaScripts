


let celsius, kelvin, fahrenheit;
document.getElementById('select_one').onchange = function () {
  const inputOne = document.getElementById('input_one');
  const inputTwo = document.getElementById('input_two');
  let selectOne = document.getElementById('select_one');
  let selectTwo = document.getElementById('select_two');


  if (selectOne.value === 'Celsius') {
    celsius = inputOne;
    if (selectTwo.value === 'Fahrenheit') {
      inputTwo.value = (Number(celsius.value) * 9 / 5 + 32).toFixed(2);
    }
    if (selectTwo.value === 'Kelvin') {
      inputTwo.value = (Number(celsius.value) + 273.15).toFixed(2);
    }
  }
  if (selectOne.value === 'Fahrenheit') {
    fahrenheit = inputOne;
    if (selectTwo.value === 'Celsius') {
      inputTwo.value = ((Number(fahrenheit.value) - 32) * 5 / 9).toFixed(2);
    }
    if (selectTwo.value === 'Kelvin') {
      inputTwo.value = ((Number(fahrenheit.value) - 32) * 5 / 9 + 273.15).toFixed(2);
    }
  }
  if (selectOne.value === 'Kelvin') {
    kelvin = inputOne;
    if (selectTwo.value === 'Celsius') {
      inputTwo.value = ((Number(kelvin.value) - 273.15)).toFixed(2);
    }
    if (selectOne.value === 'Fahrenheit') {
      inputTwo.value = ((Number(kelvin.value) - 273.15) * 9 / 5 + 32).toFixed(2);
    }
  }

}

/*

//Celsius   to kelvin and fahrenheit

celsius.oninput = function () {
    if (celsius.value) {
    kelvin.value = (Number(celsius.value) + 273).toFixed(2);
    fahrenheit.value = (Number(celsius.value) * 9 / 5 + 32).toFixed(2);
  } else {
    kelvin.value = '';
    fahrenheit.value = '';
  }

}

//Kelvin to celsius and fahrenheit

kelvin.oninput = function () {


  if (fahrenheit.value) {
    celsius.value = ((Number(fahrenheit.value) - 32) * 5 / 9).toFixed(2);
    kelvin.value = ((Number(fahrenheit.value) + 459) * 5 / 9).toFixed(2);
  } else {
    kelvin.value = '';
    celsius.value = '';
  }
}

// Fahrenheit to celsius and kelvin

fahrenheit.oninput = function () {

  if (fahrenheit.value) {
    celsius.value = ((Number(fahrenheit.value) - 32) * 5 / 9).toFixed(2);
    kelvin.value = ((Number(fahrenheit.value) + 459) * 5 / 9).toFixed(2);
  } else {
    kelvin.value = '';
    celsius.value = '';
  }
}



*/