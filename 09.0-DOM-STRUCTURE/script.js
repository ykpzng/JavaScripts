//---- DOM --> Document Object Model

//document.body.innerHTML = "";  // boş sayfa döndürür

//body içerisinden herhangi bir lementi seçmek
//bu yapıların içeriğine ulaşmak için sonuna .innerHTML ekleriz
// .body eklemeden de kullanılabilir

document.body.querySelector('p');
document.querySelector('h1'); // ilk bulunanı döndürür
document.body.querySelector('p').innerHTML = "bu paragraf değişeecek";

document.querySelector('.prg');  //class seçer

// or

document.getElementById('second'); // Bu sadece id leri seçer

document.getElementsByClassName('class adları'); // tüm clasları array döndürür

document.getElementsByTagName('h1'); // istenilen etiketleri array döndürür. Tüm h1 leri döndürür

document.getElementsByName('email-adres'); // Bu name ait input'u bulur


/* Elementin style ayarlarını değiştirmek  */

document.querySelector('#second').style.color = 'red';

document.querySelector('p').style.backgroundColor = 'yellow';

document.querySelector('h1').style.fontFamily = 'Arial';


/* Her tıklamada paragrafın zemin rengini değiştiren kod */

// h1 etiketine atadığımız changeColor fonksiyonunu oluşturalım
/*
function changeColor() {
  document.querySelector('h1').style.color = 'red';
}
*/
//Yukardaki function ile ilk bulunan h1 i değiştirir. Fakat aşağıdaki function ile bu fonksiyonu hangi itema atarsak o değişir.
//Burada html de onclick="changeColor(this) şekilde çağrılmalıdır

function changeColor(item) {
  item.style.color = 'red';
}

// Element siyahsa kırmızı, kırmızı ise siyah yapar

function changeColor1(item) {
  item.style.color == 'black' ? item.style.color = 'red' : item.style.color = 'black';
}

//OR onclick

document.querySelector('p').onclick = function () {
  this.style.color = 'red';
}

// or onclick  this=document.querySelector('h1')

const changeColor2 = function () {
  if (this.style.color == 'red') {
    this.style.color = 'black'
  } else {
    this.style.color = 'red'
  }
}

document.querySelector('h1').onclick = changeColor2;
document.querySelector('p').onclick = changeColor2;


// querySelectorAll('p) tüm p leri array olarak döner
// arryın herbir elementine fonksiyonu uyguladık

for (elemet of document.querySelectorAll('p')) {
  elemet.onclick = changeColor2;
}

