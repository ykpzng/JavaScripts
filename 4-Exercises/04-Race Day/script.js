// 18 yaş üstü adult runners ve 18 yaş altı youth  runners

// Early adults 1000 and above, All others 1000 and below

// Adult 9:30 am or 11:00 am, Early adults 9:30 am, Late adults 11:00 am, Youth 12:30 pm

let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true; //prompt('is early registred? enter true or false');
let runnerAge = Number(prompt('Enter your age :'));




if (earlyRegister && runnerAge > 18) {
  raceNumber += 1000;
  console.log(raceNumber + ' numbered runners will race at 9:30 am.');
} else if (earlyRegister === false && runnerAge > 18) {
  console.log(raceNumber + ' numbered runners will race at 11:00 am.');
} else {
  console.log(raceNumber + ' numbered runners will race at 12:30 pm.');
}
