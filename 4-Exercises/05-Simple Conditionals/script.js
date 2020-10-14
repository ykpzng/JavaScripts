/*A code which give grade students according to theirs scores
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/


let score = Number(prompt('From 0 to 100 enter your score :'));

if (score <= 100 && score >= 80) {
  alert('Your score "A"');
} else if (score <= 79 && score >= 70) {
  alert('Your score "B"');
} else if (score <= 69 && score >= 60) {
  alert('Your score "C"');
} else if (score <= 59 && score >= 50) {
  alert('Your score "D"');
} else if (score <= 49 && score >= 0) {
  alert('Your score "F"');
} else {
  alert('You must 0-100 between score');
}
/*
Check Season 
Check if the season is Autumn, Winter, Spring or Summer.
*/

let month = (prompt('Enter month for Check Season\nPlease enter the months in Turkish')).toLowerCase();

switch (month) {
  case 'aralık':
  case 'ocak':
  case 'şubat':
    alert('You\'re in the KIŞ season');
    break;
  case 'mart':
  case 'nisan':
  case 'mayıs':
    alert('You\'re in the İLKBAHAR season');
    break;
  case 'haziran':
  case 'temmuz':
  case 'ağustos':
    alert('You\'re in the YAZ season');
    break;
  case 'eylül':
  case 'ekim':
  case 'kasım':
    alert('You\'re in the SONBAHAR season');
    break;
  default:
    alert('HATALI GİRİŞ');
    break;
}


/*
Month Day 
Write a program which tells the number of days in a month. For example:
  Enter a month: January
  January has 31 days.
*/

// Dinamic method

let year = Number(prompt('Enter year (sample 2020) :'));
let monthNumber = Number(prompt('Enter month number (1-12) :'));

if (monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12) {
  alert("Number of days is 31");
} else if ((monthNumber == 2) && ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))) {
  alert("Number of days is 29");
} else if (monthNumber == 2) {
  alert("Number of days is 28");
} else if (monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11) {
  alert("Number of days is 30");
} else {
  alert('Missing or incorrect enter');
}


// static method

let monthName = (prompt('Enter the month to find out how many days\nPlease enter the months in Turkish')).toLowerCase();

switch (monthName) {
  case 'ocak':
    alert('Ocak ayı 31 gündür');
    break;
  case 'şubat':
    alert('Şubat ayı 28 veya 29 gündür');
    break;
  case 'mart':
    alert('Mart ayı 31 gündür');
    break;
  case 'nisan':
    alert('Nisan ayı 30 gündür');
    break;
  case 'mayıs':
    alert('Mayıs ayı 31 gündür');
    break;
  case 'haziran':
    alert('Haziran ayı 30 gündür');
    break;
  case 'temmuz':
    alert('Temmuz ayı 31 gündür');
    break;
  case 'ağustos':
    alert('Ağustos ayı 31 gündür');
    break;
  case 'eylül':
    alert('Eylül ayı 30 gündür');
    break;
  case 'ekim':
    alert('Ekim ayı 31 gündür');
    break;
  case 'kasım':
    alert('Kasım ayı 30 gündür');
    break;
  case 'aralık':
    alert('Aralık ayı 31 gündür');
    break;

  default:
    alert('HATALI GİRİŞ');
    break;
}


