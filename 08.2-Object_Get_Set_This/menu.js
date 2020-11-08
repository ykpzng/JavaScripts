// Restaurant Menu

// Başlangış
// Ana yemek
// Tatlılar
const menu = {
  _yemekTurleri: {
    baslangic: [],
    anaYemek: [],
    tatlilar: []
  },
  // Gettir functions
  get baslangic() {
    return this._yemekTurleri.baslangic;
  },
  get anaYemek() {
    return this._yemekTurleri.anaYemek;
  },
  get tatlilar() {
    return this._yemekTurleri.tatlilar;
  },
  // Setter functions
  set baslangic(cesit) {
    this._yemekTurleri.baslangic = cesit;
  },
  set anaYemek(cesit) {
    this._yemekTurleri.anaYemek = cesit;
  },
  set tatlilar(cesit) {
    this._yemekTurleri.tatlilar = cesit;
  },

  get yemekTurleri() {
    return {
      baslangic: this.baslangic,
      anaYemek: this.anaYemek,
      tatlilar: this.tatlilar
    }
  },

  yemekEkle(yemekTuru, yemekAdi, yemekFiyati = 0) {
    const yemek = {
      adi: yemekAdi,
      fiyati: yemekFiyati
    }
    this._yemekTurleri[yemekTuru].push(yemek)
  },

  rastgeleYemek(yemekTuru) {
    const yemekCesidi = this._yemekTurleri[yemekTuru];
    const randomIndex = Math.floor(Math.random() * yemekCesidi.length);
    return yemekCesidi[randomIndex];
  },

  olustur() {

    const rastgeleBaslangic = this.rastgeleYemek('baslangic');
    const rastgeleAnaYemek = this.rastgeleYemek('anaYemek');
    const rastgeleTatlilar = this.rastgeleYemek('tatlilar');

    return [rastgeleBaslangic, rastgeleAnaYemek, rastgeleTatlilar];
  }

}
/* 
menu.yemekEkle('baslangic', 'mercimek corbasi', 7);
menu.yemekEkle('baslangic', 'coban salatasi', 5);
menu.yemekEkle('baslangic', 'ekmek kizartmasi', 3);
*/
// set'i kullanıyoruz
menu.baslangic = ([{ adi: 'mercimek corbasi', fiyati: 7 }, { adi: 'coban salatasi', fiyati: 5 }, { adi: 'ekmek kizartmasi', fiyati: 3 }])

menu.yemekEkle('anaYemek', 'musakka', 12);
menu.yemekEkle('anaYemek', 'tas kebabi', 18);
menu.yemekEkle('anaYemek', 'adana kebap', 15);


menu.yemekEkle('tatlilar', 'firin sütlac', 7);
menu.yemekEkle('tatlilar', 'kunefe', 15);
menu.yemekEkle('tatlilar', 'baklava', 10);

console.log(menu.olustur());

/*  First version

const baslangic = [];
const anaYemek = [];
const tatlilar = [];

const yemekEkle = (yemekTuru, yemekAdi, yemekFiyati = 0) => {
  const yemek = {
    adi: yemekAdi,
    fiyati: yemekFiyati
  };

  if (yemekTuru == baslangic) {
    baslangic.push(yemek);
  } else if (yemekTuru == tatlilar) {
    tatlilar.push(yemek);
  } else {
    anaYemek.push(yemek);
  }
}

yemekEkle(baslangic, 'mercimek corbasi', 7);
yemekEkle(baslangic, 'coban salatasi', 5);
yemekEkle(baslangic, 'ekmek kizartmasi', 3);

yemekEkle(anaYemek, 'musakka', 12);
yemekEkle(anaYemek, 'tas kebabi', 18);
yemekEkle(anaYemek, 'adana kebap', 15);

yemekEkle(tatlilar, 'firin sütlac', 7);
yemekEkle(tatlilar, 'kunefe', 15);
yemekEkle(tatlilar, 'baklava', 10);


const rastgeleYemek = (yemekTuru) => {
  const randomIndex = Math.floor(Math.random() * yemekTuru.length);
  return yemekTuru[randomIndex];
}


const menuOlustur = () => {

  const rastgeleBaslangic = rastgeleYemek(baslangic);
  const rastgeleAnaYemek = rastgeleYemek(anaYemek);
  const rastgeleTatlilar = rastgeleYemek(tatlilar);

  return [rastgeleBaslangic, rastgeleAnaYemek, rastgeleTatlilar];
}




console.log(menuOlustur());


*/