
/*   Celsius <--> Kelvin <--> Fahrenheit   */


const celsius = document.querySelector('#celcius');

const kelvin = document.querySelector('#kelvin');

const fahrenheit = document.querySelector('#fahrenheit');

//Celsius

celsius.oninput = function () {
  if (celsius.value) {
    kelvin.value = (Number(celsius.value) + 273).toFixed(2);
    fahrenheit.value = (Number(celsius.value) * 9 / 5 + 32).toFixed(2);
  } else {
    kelvin.value = '';
    fahrenheit.value = '';
  }

}

//Kelvin

kelvin.oninput = function () {
  if (kelvin.value) {
    celsius.value = (Number(kelvin.value) - 273).toFixed(2);
    fahrenheit.value = (Number(kelvin.value) * 9 / 5 - 459.67).toFixed(2);
  } else {
    celsius.value = '';
    fahrenheit.value = '';
  }
}

// Fahrenheit

fahrenheit.oninput = function () {

  if (fahrenheit.value) {
    celsius.value = ((Number(fahrenheit.value) - 32) * 5 / 9).toFixed(2);
    kelvin.value = ((Number(fahrenheit.value) + 459) * 5 / 9).toFixed(2);
  } else {
    kelvin.value = '';
    celsius.value = '';
  }
}


