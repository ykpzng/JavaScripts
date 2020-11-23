let celsius, kelvin, fahrenheit;
let inputOne = document.getElementById('input_one');
let inputTwo = document.getElementById('input_two');
let selectOne = document.getElementById('select_one');
let selectTwo = document.getElementById('select_two');


// Birinci İnputbox değiştiğinde gerçekleşen işlemler
inputOne.oninput = function () {
  if (inputOne.value) {
    firstGroupChange();
  } else {
    inputTwo.value = '';
  }

}

// Birinci select değeri değiştiğinde gerçekleşen işlemler
document.getElementById('select_one').onchange = function () {
  if (inputOne.value) {
    firstGroupChange();
  } else {
    inputTwo.value = '';
  }
}

// İkinci İnputbox değiştiğinde gerçekleşen işlemler
inputTwo.oninput = function () {
  if (inputTwo.value) {
    if (selectTwo.value === 'Celsius') {
      celsius = inputTwo;
      if (selectOne.value === 'Fahrenheit') {
        inputOne.value = (Number(celsius.value) * 9 / 5 + 32).toFixed(2);
      }
      if (selectOne.value === 'Kelvin') {
        inputOne.value = (Number(celsius.value) + 273.15).toFixed(2);
      }
      if (selectOne.value === 'Celsius') {
        inputOne.value = celsius.value;
      }
    }
    if (selectTwo.value === 'Fahrenheit') {
      fahrenheit = inputTwo;
      if (selectOne.value === 'Celsius') {
        inputOne.value = ((Number(fahrenheit.value) - 32) * 5 / 9).toFixed(2);
      }
      if (selectOne.value === 'Kelvin') {
        inputOne.value = ((Number(fahrenheit.value) - 32) * 5 / 9 + 273.15).toFixed(2);
      }
      if (selectOne.value === 'Fahrenheit') {
        inputOne.value = fahrenheit.value;
      }
    }
    if (selectTwo.value === 'Kelvin') {
      kelvin = inputTwo;
      if (selectOne.value === 'Celsius') {
        inputOne.value = ((Number(kelvin.value) - 273.15)).toFixed(2);
      }
      if (selectOne.value === 'Fahrenheit') {
        inputOne.value = ((Number(kelvin.value) - 273.15) * 9 / 5 + 32).toFixed(2);
      }
      if (selectOne.value === 'Kelvin') {
        inputOne.value = kelvin.value;
      }
    }
  } else {
    inputOne.value = '';
  }

}

// İkinci select değeri değiştiğinde gerçekleşen işlemler
document.getElementById('select_two').onchange = function () {
  inputTwo.value = '';
  if (inputOne.value) {
    if (selectOne.value === 'Celsius') {
      celsius = inputOne;
      if (selectTwo.value === 'Fahrenheit') {
        inputTwo.value = (Number(celsius.value) * 9 / 5 + 32).toFixed(2);
      }
      if (selectTwo.value === 'Kelvin') {
        inputTwo.value = (Number(celsius.value) + 273.15).toFixed(2);
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
  } else {
    inputTwo.value = '';

  }
}

function firstGroupChange() {
  if (selectOne.value === 'Celsius') {
    celsius = inputOne;
    if (selectTwo.value === 'Fahrenheit') {
      inputTwo.value = (Number(celsius.value) * 9 / 5 + 32).toFixed(2);
    }
    if (selectTwo.value === 'Kelvin') {
      inputTwo.value = (Number(celsius.value) + 273.15).toFixed(2);
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