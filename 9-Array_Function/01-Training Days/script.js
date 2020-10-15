
const getRandEvent = () => {
  // choose 'Marathon' or 'Triathlon' or 'Pentathlon' randomly;
  let rnd = Math.floor(Math.random() * 3) + 1;
  switch (rnd) {
    case 1:
      return 'Marathon';
    case 2:
      return 'Triathlon';
    case 3:
      return 'Pentathlon';

  }

};

const getTrainingDays = event => {

  // decide the day according to the event;
  if (event === 'Marathon') {
    return 50;
  } else if (event === 'Triathlon') {
    return 100;
  } else if (event === 'Pentathlon') {
    return 150;
  }

};

// The scope of `name` is too tight 
const logEvent = (name, event) => {
  //const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  //const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

let abc = getRandEvent();
let days = getTrainingDays(abc);



logEvent('jhon', abc);
logTime('jhon', days);
