
// -----function decleration ------
function drivePermission() {
  const age = prompt('Your age...');
  const parents = prompt('Are you parents with you?');

  if (age >= 16 && parents === 'yes') {
    console.log('You can drive in parents observation');
  } else if (age >= 18) {
    console.log('You can drive a car');
  } else {
    console.log('you shall not drive');
  }
}
// ------- parameterized function-----
function drivePermission2(age, parents) {
  if (age >= 16 && parents === 'yes') {
    console.log('You can drive in parents observation');
  } else if (age >= 18) {
    console.log('You can drive a car');
  } else {
    console.log('you shall not drive');
  }
}
//------ default parameter-------- kelvin=0
function kelvinToFahrenheit(kelvin = 0) {
  const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
  console.log(fahrenheit + " F");
}

//-------function with return ----------------
function sum(x, y) {
  return x + y;
}

//------Helper Functions----------

function kelvinToCelsius(kelvin = 0) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin = 0) {
  return kelvinToCelsius(kelvin) * 9 / 5 + 32;
}




//----__--calling the function---__----


//drivePermission(); 

// const age = prompt('Your age...');
// const parents = prompt('Are you parents with you?');
// drivePermission2(age, parents);

//console.log(sum(3, 4));

//console.log(kelvinToFahrenheit(300));


//----__---Examples---___---


function greedWorld() {
  return 'Hello world';

}

console.log(greedWorld());

//--------------------------------
function canIDrive(age) {
  /*
  if (age >= 18) {
    return true;
  } else {
    return false;
  }   */

  return age >= 18 ? true : false;
}

console.log(canIDrive(15));

