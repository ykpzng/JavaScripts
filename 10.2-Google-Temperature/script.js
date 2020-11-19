let celsius, kelvin, fahrenheit, inputOne, inputTwo, selectOne, selectTwo;

// Birinci select değeri değiştiğinde gerçekleşen işlemler
document.getElementById('select_one').onchange = function () {

  inputOne = document.getElementById('input_one');
  inputTwo = document.getElementById('input_two');
  selectOne = document.getElementById('select_one');
  selectTwo = document.getElementById('select_two');

  if (selectOne.value === 'Celsius') {
    celsius = inputOne;
    if (selectTwo.value === 'Fahrenheit') {
      inputTwo.value = (Number(celsius.value * 9 / 5) + 32).toFixed(2);
    }
    if (selectTwo.value === 'Kelvin') {
      inputTwo.value = (Number(celsius.value + 273.15)).toFixed(2);
    }
    if (selectTwo.value === 'Celsius') {
      inputTwo.value = celsius.value;
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
    if (selectTwo.value === 'Fahrenheit') {
      inputTwo.value = fahrenheit.value;
    }
  }
  if (selectOne.value === 'Kelvin') {
    kelvin = inputOne;
    if (selectTwo.value === 'Celsius') {
      inputTwo.value = ((Number(kelvin.value) - 273.15)).toFixed(2);
    }
    if (selectTwo.value === 'Fahrenheit') {
      inputTwo.value = ((Number(kelvin.value) - 273.15) * 9 / 5 + 32).toFixed(2);
    }
    if (selectTwo.value === 'Kelvin') {
      inputTwo.value = kelvin.value;
    }
  }

}

// İkinci select değeri değiştiğinde gerçekleşen işlemler

document.getElementById('select_two').onchange = function () {

  inputOne = document.getElementById('input_one');
  inputTwo = document.getElementById('input_two');
  selectOne = document.getElementById('select_one');
  selectTwo = document.getElementById('select_two');

  if (selectTwo.value === 'Celsius') {
    celsius = inputOne;
    if (selectOne.value === 'Fahrenheit') {
      inputTwo.value = (Number(celsius.value * 9 / 5) + 32).toFixed(2);
    }
    if (selectOne.value === 'Kelvin') {
      inputTwo.value = (Number(celsius.value + 273.15)).toFixed(2);
    }
    if (selectOne.value === 'Celsius') {
      inputTwo.value = celsius.value;
    }
  }
  if (selectTwo.value === 'Fahrenheit') {
    fahrenheit = inputOne;
    if (selectOne.value === 'Celsius') {
      inputTwo.value = ((Number(fahrenheit.value) * 5 / 9) + 32).toFixed(2);
    }
    if (selectOne.value === 'Kelvin') {
      inputTwo.value = ((Number(fahrenheit.value) - 32) * 5 / 9 + 273.15).toFixed(2);
    }
    if (selectOne.value === 'Fahrenheit') {
      inputTwo.value = fahrenheit.value;
    }
  }
  if (selectTwo.value === 'Kelvin') {
    kelvin = inputOne;
    if (selectOne.value === 'Celsius') {
      inputTwo.value = ((Number(kelvin.value) - 273.15)).toFixed(2);
    }
    if (selectOne.value === 'Fahrenheit') {
      inputTwo.value = ((Number(kelvin.value) - 273.15) * 9 / 5 + 32).toFixed(2);
    }
    if (selectOne.value === 'Kelvin') {
      inputTwo.value = kelvin.value;
    }
  }

}



/* */