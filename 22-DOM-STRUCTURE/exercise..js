

// Celsius to Kelvin

/*
document.getElementById('buton').onclick = function () {
  const celcius = parseFloat(document.getElementById('celcius').value);
  let kelvin = parseFloat(273.15 + celcius);
  document.getElementById('kelvin').value = kelvin;

}

*/

// or

const button = document.querySelector('#buton');

const celsius = document.querySelector('#celcius');

const kelvin = document.querySelector('#kelvin');

buton.onclick = function () {
  kelvin.value = Number(celsius.value) + 273;
}

