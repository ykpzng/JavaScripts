let puan = Math.floor(Math.random() * 101);

if (puan > 49) {
  console.log(puan + ' Puanla Sınıfı geçtiniz');
} else {
  console.log(puan + ' Puanla Sınıfta galdın koçum...');
}

//----------------------------------------

let userName = prompt('enter your name');
let defaultName;
if (userName) {
  defaultName = userName;
} else {
  defaultName = 'Guest User';
}

// or

// let defaultName = userName || 'Guest User';

alert('Merhaba ' + defaultName);

//-------------------------------------

//   Şart ? true... : false...;

let isNightTime = true;

// if (isNightTime) {
//   console.log('Turn on the light');
// } else {
//   console.log('Turn off the light');
// }

// or

isNightTime ? console.log('Turn on the light') : console.log('Turn off the light');

//------------------------------------
// switch case yapısı
let days = Number(prompt('Bu gün haftanın kaçıncı günü :'));
switch (days) {
  case 1:
    alert('Bu gün günlerden PAZARTESİ');
    break;
  case 2:
    alert('Bu gün günlerden SALI');
    break;
  case 3:
    alert('Bu gün günlerden ÇARŞAMBA');
    break;
  case 4:
    alert('Bu gün günlerden PERŞEMBE');
    break;
  case 5:
    alert('Bu gün günlerden CUMA');
    break;
  case 6:
    alert('Bu gün günlerden CUMARTESİ');
    break;
  case 7:
    alert('Bu gün günlerden PAZAR');
    break;
  default:
    alert('Hatalı giriş yaptın....');
    break;
}
