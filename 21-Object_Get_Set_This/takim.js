const milliTakim = {
  _takimlar: {
    besiktas: [],
    galatasaray: [],
    fenerbahce: []
  },
  // Her bir takim icin getterlari ekleyiniz
  get besiktas() {
    return this._takimlar.besiktas;
  },

  get galatasaray() {
    return this._takimlar.galatasaray;
  },

  get fenerbahce() {
    return this._takimlar.fenerbahce;
  },

  // Her bir takim icin setterlari ekleyiniz
  set besiktas(oyuncu) {
    this._takimlar.besiktas = oyuncu;
  },

  set galatasaray(oyuncu) {
    this._takimlar.galatasaray = oyuncu;
  },

  set fenerbahce(oyuncu) {
    this._takimlar.fenerbahce = oyuncu;
  },

  // _takimlar icin gerekli olan getter'i ekleyiniz

  get takimlar() {
    return {
      besiktas: this.besiktas,
      galatasaray: this.galatasaray,
      fenerbahce: this.fenerbahce
    }
  },

  oyuncuEkle(takimAdi, oyuncuAdi, oyuncuYasi) {
    const oyuncu = {
      // Propertyleri buraya ekleyiniz
      adi: oyuncuAdi,
      yasi: oyuncuYasi
    }
    this._takimlar[takimAdi].push(oyuncu);
  },
  // oyuncuyu belirtilen takimin array'ine push ediniz

  rastgeleOyuncuSec(takimAdi) {
    // Belirtilen takimdan rastgele oyuncu secip return ediniz
    const oyuncuCesidi = this._takimlar[takimAdi];
    const randomIndex = Math.floor(Math.random() * oyuncuCesidi.length);
    return oyuncuCesidi[randomIndex];
  },

  olustur() {
    // Her bir takimdan rastgele birer oyuncu secerek bir array return ediniz.
    const rastgeleBesiktas = this.rastgeleOyuncuSec('besiktas');
    const rastgeleGalatasaray = this.rastgeleOyuncuSec('galatasaray');
    const rastgeleFenerbahce = this.rastgeleOyuncuSec('fenerbahce');

    return [rastgeleBesiktas, rastgeleGalatasaray, rastgeleFenerbahce];

  }
}



milliTakim.besiktas = ([{ adi: 'Sergen Yalçın', yasi: 50 }, { adi: 'Ahmet Polat', yasi: 25 }, { adi: 'Kamil Kaya', yasi: 25 }]);

milliTakim.galatasaray = ([{ adi: 'Ali Veli', yasi: 40 }, { adi: 'Mehmet Demir', yasi: 35 }, { adi: 'Ahmet Kaya', yasi: 25 }]);

milliTakim.fenerbahce = ([{ adi: 'Halil Orman', yasi: 29 }, { adi: 'Memati Baş', yasi: 55 }, { adi: 'Haydar Maydar', yasi: 33 }]);



console.log(milliTakim.olustur());