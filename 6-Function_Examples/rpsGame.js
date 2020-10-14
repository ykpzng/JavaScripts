//Taş, kağıt , makas oyunu
/*
1-kullanıcıdan seçim alınır (taş, kağıt, makas)
2-bilgisayarda seçimini yapacak (taş, kağıt, makas)
3-kullanıcılardan gelen seçenekleri değerlendirelim
3.1- taş makası yener
3.2- makas kağıdı yener
3.3- kağıt taşı yener
3.4- aynı seçenek berabere kalır
*/

function playerMan() {
  let oyuncu = prompt('Tas?, Kagit?, Makas?').toLowerCase();
  if (oyuncu !== 'tas' && oyuncu !== 'makas' && oyuncu !== 'kagit') {
    alert('Hatali giris. Tas-Kagit-Makas yazdiginizdan emin olun.')
  }
  return oyuncu;
}
function playerPc() {
  let pc = Math.floor(Math.random() * 3) + 1;
  switch (pc) {
    case 1:
      pc = 'tas';
      break;
    case 2:
      pc = 'kagit';
      break;
    case 3:
      pc = 'makas';
      break;
  }
  return pc;
}

function oyun() {
  let oyuncu = playerMan();
  let bilgisayar = playerPc();

  if (oyuncu === bilgisayar) {
    return 'Berabere kaldı..';
  } else if (oyuncu === 'tas' && bilgisayar === 'kagit') {
    return 'Bilgisayar';
  } else if (oyuncu === 'tas' && bilgisayar === 'makas') {
    return 'Oyuncu';
  } else if (oyuncu === 'kagit' && bilgisayar === 'tas') {
    return 'Oyuncu';
  } else if (oyuncu === 'kagit' && bilgisayar === 'makas') {
    return 'Bilgisayar';
  } else if (oyuncu === 'makas' && bilgisayar === 'tas') {
    return 'Bilgisayar';
  } else if (oyuncu === 'makas' && bilgisayar === 'kagit') {
    return 'Oyuncu';
  }

}

function oyna() {
  let pcPuan = 0, manPuan = 0;

  for (i = 0; i < 5; i++) {  //oyunun 5 kez döndüren döngü
    let sonuc = oyun();
    if (sonuc == 'Bilgisayar') {
      pcPuan += 10;
    } else if (sonuc == 'Oyuncu') {
      manPuan += 10;
    }
    //alert(sonuc);
  }
  let kazanan = pcPuan > manPuan ? 'Bilgisayar' : pcPuan < manPuan ? 'Oyuncu' : 'Berabere kaldı';

  //sonucu html sayfasında gösteren kod
  document.write(`Bilgisayarın Puanı : ${pcPuan}<br/>Oyuncunun Puanı    : ${manPuan}<br/>KAZANAN ==> ${kazanan}`);
}

//Call Function
oyna();
