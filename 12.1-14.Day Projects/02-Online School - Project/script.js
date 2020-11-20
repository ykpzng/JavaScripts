//Main class <> School
class School {
  constructor(name, numberOfStudent, overwiev) {
    this._name = name;
    this._numberOfStudent = numberOfStudent;
    this._overwiev = overwiev;
  }
  get name() {
    return this._name;
  }
  get numberOfStudent() {
    return this._numberOfStudent;
  }
  get overwiev() {
    return this._overwiev;
  }
  set numberOfStudent(value) {
    this._numberOfStudent = value;
  }

  quickFacts(level) {
    console.log(`${this._name} educates ${this._numberOfStudent} students at the ${level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let rnd = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[rnd];
  }

}

//Primary class inherited from a parent School 

class Primary extends School {
  constructor(name, numberOfStudent, pickupPolicy, overwiev) {
    super(name, numberOfStudent, overwiev);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//Middle class inherited from a parent School 
class Middle extends School {
  constructor(name, numberOfStudent, overwiev) {
    super(name, numberOfStudent, overwiev);
  }
}

//Hight class inherited from a parent School 
class High extends School {
  constructor(name, numberOfStudent, sportsTeams, overwiev) {
    super(name, numberOfStudent, overwiev);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

class SchoolCatalog {
  constructor() {
    this._schools = [];
  }
  get schools() {
    return this._schools;
  }
  set schools(value) {
    this._schools = value;
  }
  addSchools(obj) {
    this._schools.push(obj);
  }
  printSchools() {
    console.log(this._schools);
  }
}

/*
const sierraNevada = new Primary('Sierre Nevada', 422, 'Students must be picked up by a parent, guardian, or a family member over the age of 15.');

const arr = ['Marisol Chandler', 'Morin Marcia Walsh', 'Walton Pratt Wiley', 'Lou Williams', 'J. R. Burton', 'Allen Downs', 'Salinas Mcclain', 'Nancy Miles'];

sierraNevada.quickFacts('primary')

console.log(School.pickSubstituteTeacher(arr));

const elkhart = new High('Elkhart', 515, ['Baseball', 'Basketball', 'Volleyball', 'Ice Hockey']);

console.log(elkhart.sportsTeams);

console.log(elkhart);

const schools = new SchoolCatalog();
schools.addSchools(sierraNevada);
schools.addSchools(elkhart);

console.log(schools);
*/

// DOM STRUCTURE
const submitButton = document.getElementById('submit_btn');
const schools = new SchoolCatalog();

submitButton.onclick = () => {
  const resultParagraf = document.createElement('p');
  document.getElementById('result').appendChild(resultParagraf);
  schools.addSchools(domOperations());

  console.log(schools)

}

const domOperations = () => {
  let newSchool;
  const schoolType = document.getElementById('schoolTypeSelect');
  const schoolTitle = document.getElementById('titleOfSchool');
  const studentNumber = document.getElementById('studentsNumber');
  const schoolPolicy = document.getElementById('pickupPolicy');
  const sportTeam = document.getElementById('sportsTeams');
  const schoolOverview = document.getElementById('schoolOverview');

  if (schoolType.value === 'Primary') {
    newSchool = new Primary(schoolTitle.value, studentNumber.value, schoolPolicy.value, schoolOverview.value);
  } else if (schoolType.value === 'Middle') {
    newSchool = new Middle(schoolTitle.value, studentNumber.value, schoolOverview.value);
  } else if (schoolType.value === 'High') {
    newSchool = new High(schoolTitle.value, studentNumber.value, sportTeam.value, schoolOverview.value);
  }
  return newSchool;
}