//Kullanıcıdan 1-5 arası alınan rakama göre müşterinin ödeyeceği hesabın yüzdelik dilimini çalışanlara bahşin vereceğiz

function bahsisHesaplama(puan, hesap) {
  let kar = hesap * 0.35; //heabın % 35 i kar
  switch (puan) {   //verilen puana göre kardan bahsis veriliyor
    case '1':
      return kar * 0.05;
    case '2':
      return kar * 0.15;
    case '3':
      return kar * 0.18;
    case '4':
      return kar * 0.20;
    case '5':
      return kar * 0.30;
    default:
      return '1 ile 5 arası değer girin...'
  }
}

function bahsisMatik() {
  let puan = prompt('Müşteri puanı? 1-5 arası puan verin...');
  let hesap = prompt('Hesap ne kadar girin.');
  let sonuc = bahsisHesaplama(puan, hesap);
  return `${hesap} TL hesaptan ${puan} puanına göre ${sonuc} TL bahşiş kazandınız`;
}

console.log(bahsisMatik());